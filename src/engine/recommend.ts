import { EXERCISES } from '../data/exercises';
import { COMMON_QUESTIONS, FEELING_BY_ID } from '../data/feelings';
import type { AnswerOption, Exercise, Intensity, ModalityId, Question, Setting, TimeBudget } from '../data/types';

/** Map of question id → chosen option id. */
export type Answers = Record<string, string>;

export interface Context {
  feelingId: string;
  answers: Answers;
  /** null = "best match from any approach". */
  modality: ModalityId | null;
}

export interface Scored {
  exercise: Exercise;
  score: number;
  reasons: string[];
}

export interface Recommendation {
  primary: Scored;
  alternatives: Scored[];
  /** True if the chosen modality had nothing for this feeling and we fell back. */
  modalityFallback: boolean;
  warnings: string[];
  crisis: boolean;
  intensity: Intensity;
  setting: Setting;
  time: TimeBudget;
}

/** All questions for a feeling: specific ones first, then the common three. */
export function questionsFor(feelingId: string): Question[] {
  const f = FEELING_BY_ID[feelingId];
  if (!f) throw new Error(`Unknown feeling: ${feelingId}`);
  if (f.crisisFirst) return [];
  return [...f.questions, ...COMMON_QUESTIONS];
}

export function chosenOptions(feelingId: string, answers: Answers): AnswerOption[] {
  return questionsFor(feelingId)
    .map((qq) => qq.options.find((op) => op.id === answers[qq.id]))
    .filter((x): x is AnswerOption => !!x);
}

export function isCrisis(feelingId: string, answers: Answers): boolean {
  const f = FEELING_BY_ID[feelingId];
  if (f?.crisisFirst) return true;
  return chosenOptions(feelingId, answers).some((o) => o.crisis);
}

const TIME_LIMIT: Record<TimeBudget, number> = { short: 3, mid: 12, long: Infinity };

/** Can this exercise physically be done where the person is? */
export function fitsSetting(ex: Exercise, setting: Setting): boolean {
  if (setting === 'public') return ex.discreet;
  if (setting === 'bed') return !ex.movement;
  return true;
}

/**
 * Scores are tiered so hard constraints always win over soft preferences:
 *   1. setting (can you actually do it where you are?)  −100
 *   2. intensity (does it work at this level of distress?) −50
 *   3. soft fit: answer tags, time, small bonuses.
 */
export function scoreExercise(ex: Exercise, tags: Set<string>, intensity: Intensity, setting: Setting, time: TimeBudget): Scored {
  let score = 10;
  const reasons: string[] = [];

  if (!fitsSetting(ex, setting)) score -= 100;

  if (ex.intensity.includes(intensity)) {
    if (intensity === 'high') reasons.push('high');
  } else {
    score -= 50;
  }

  const matched = ex.tags.filter((t) => tags.has(t));
  score += matched.length * 2;
  if (matched.length) reasons.push('fits');

  if (setting === 'public' || setting === 'work') {
    if (ex.discreet) {
      score += 2;
      reasons.push('discreet');
    } else if (setting === 'work') {
      score -= 5;
    }
  }
  if (setting === 'bed' && ex.tags.includes('bed')) {
    score += 3;
    reasons.push('bed');
  }

  const limit = TIME_LIMIT[time];
  if (ex.minutes > limit) {
    score -= ex.minutes > limit * 3 ? 8 : 4;
  } else if (time === 'short') {
    reasons.push('quick');
  }

  return { exercise: ex, score, reasons: Array.from(new Set(reasons)) };
}

function byScore(a: Scored, b: Scored) {
  return b.score - a.score || a.exercise.minutes - b.exercise.minutes || a.exercise.id.localeCompare(b.exercise.id);
}

export function recommend(ctx: Context): Recommendation {
  const { feelingId, answers, modality } = ctx;
  const opts = chosenOptions(feelingId, answers);
  const tags = new Set(opts.flatMap((o) => o.tags));
  const warnings = Array.from(new Set(opts.map((o) => o.warning).filter((w): w is string => !!w)));
  const crisis = isCrisis(feelingId, answers);

  const intensity = (answers.intensity as Intensity) || (crisis ? 'high' : 'mid');
  const setting = (answers.setting as Setting) || 'home';
  const time = (answers.time as TimeBudget) || 'mid';

  const candidates = EXERCISES.filter((e) => e.targets.includes(feelingId));
  if (candidates.length === 0) throw new Error(`No exercises target feeling ${feelingId}`);

  let pool = modality ? candidates.filter((e) => e.modality === modality) : candidates;
  const modalityFallback = !!modality && pool.length === 0;
  if (modalityFallback) pool = candidates;

  const scored = pool.map((e) => scoreExercise(e, tags, intensity, setting, time)).sort(byScore);

  // With "any approach", prefer variety: alternatives from different modalities first.
  let alternatives: Scored[];
  const rest = scored.slice(1);
  if (!modality || modalityFallback) {
    const seen = new Set([scored[0].exercise.modality]);
    const diverse: Scored[] = [];
    const others: Scored[] = [];
    for (const s of rest) {
      // Only promote a different approach if it is still a reasonable fit.
      if (!seen.has(s.exercise.modality) && s.score >= scored[0].score - 8) {
        seen.add(s.exercise.modality);
        diverse.push(s);
      } else others.push(s);
    }
    alternatives = [...diverse, ...others].slice(0, 3);
  } else {
    alternatives = rest.slice(0, 3);
  }

  return { primary: scored[0], alternatives, modalityFallback, warnings, crisis, intensity, setting, time };
}

/** Which modalities have at least one exercise for this feeling. */
export function modalitiesFor(feelingId: string): Set<ModalityId> {
  return new Set(EXERCISES.filter((e) => e.targets.includes(feelingId)).map((e) => e.modality));
}

import { EXERCISES } from '../data/exercises';
import { FEELINGS } from '../data/feelings';
import { MODALITIES } from '../data/modalities';
import type { ModalityId } from '../data/types';
import { fitsSetting, isCrisis, modalitiesFor, questionsFor, recommend, scoreExercise, type Answers } from '../engine/recommend';
import type { Setting } from '../data/types';

/** Every combination of answers for a feeling (cartesian product). */
function allAnswerCombos(feelingId: string): Answers[] {
  let combos: Answers[] = [{}];
  for (const q of questionsFor(feelingId)) {
    combos = combos.flatMap((a) => q.options.map((o) => ({ ...a, [q.id]: o.id })));
  }
  return combos;
}

const MODS: (ModalityId | null)[] = [null, ...MODALITIES.map((m) => m.id)];

describe('recommendation engine: exhaustive', () => {
  let checked = 0;
  let crisisRoutes = 0;

  afterAll(() => {
    console.info(`Checked ${checked} answer × approach combinations (${crisisRoutes} routed to crisis help).`);
  });

  for (const f of FEELINGS.filter((x) => !x.crisisFirst)) {
    it(`gives a sound result for every possible query: ${f.id}`, () => {
      const available = modalitiesFor(f.id);
      for (const answers of allAnswerCombos(f.id)) {
        const crisis = isCrisis(f.id, answers);
        for (const modality of MODS) {
          const rec = recommend({ feelingId: f.id, answers, modality });
          checked++;
          const label = `${f.id} ${JSON.stringify(answers)} modality=${modality}`;

          expect(rec.crisis, label).toBe(crisis);
          if (crisis) {
            crisisRoutes++;
            continue; // UI routes to crisis screen instead of results
          }

          const p = rec.primary.exercise;
          // Always a result, always for this feeling, always sourced.
          expect(p.targets, label).toContain(f.id);
          expect(p.sources.length, label).toBeGreaterThan(0);

          // Alternatives are unique and also for this feeling.
          const ids = [p.id, ...rec.alternatives.map((a) => a.exercise.id)];
          expect(new Set(ids).size, label).toBe(ids.length);
          for (const a of rec.alternatives) expect(a.exercise.targets, label).toContain(f.id);

          // Approach filter honored, or an honest fallback.
          if (modality && available.has(modality)) {
            expect(rec.modalityFallback, label).toBe(false);
            expect(p.modality, label).toBe(modality);
            for (const a of rec.alternatives) expect(a.exercise.modality, label).toBe(modality);
          }
          if (modality && !available.has(modality)) expect(rec.modalityFallback, label).toBe(true);
          if (!modality) expect(rec.modalityFallback, label).toBe(false);

          const pool = EXERCISES.filter(
            (e) => e.targets.includes(f.id) && (!modality || !available.has(modality) || e.modality === modality),
          );

          // In public: discreet whenever any discreet option exists in the pool.
          if (answers.setting === 'public' && pool.some((e) => e.discreet)) {
            expect(p.discreet, label).toBe(true);
          }
          // Overwhelming: never a calm-only exercise if a high-intensity one that fits the setting exists.
          const setting = (answers.setting ?? 'home') as Setting;
          if (answers.intensity === 'high' && pool.some((e) => e.intensity.includes('high') && fitsSetting(e, setting))) {
            expect(p.intensity, label).toContain('high');
          }
          // In bed: no get-up-and-move exercises if a still one exists.
          if (answers.setting === 'bed' && pool.some((e) => !e.movement)) {
            expect(!!p.movement, label).toBe(false);
          }
          // Very short time: never a 15+ minute exercise if a short one exists.
          if (answers.time === 'short' && pool.some((e) => e.minutes <= 3)) {
            expect(p.minutes, label).toBeLessThanOrEqual(12);
          }
          // Warnings are shown for answers that carry one.
          const warnOpts = questionsFor(f.id)
            .map((q) => q.options.find((o) => o.id === answers[q.id]))
            .filter((o) => o?.warning);
          expect(rec.warnings.length, label).toBe(new Set(warnOpts.map((o) => o!.warning)).size);
        }
      }
    });
  }

  it('crisis feeling always routes to crisis help', () => {
    expect(questionsFor('crisis')).toHaveLength(0);
    expect(isCrisis('crisis', {})).toBe(true);
    const rec = recommend({ feelingId: 'crisis', answers: {}, modality: null });
    expect(rec.crisis).toBe(true);
    expect(rec.primary.exercise.targets).toContain('crisis');
  });

  it('safety check "yes" routes to crisis for every feeling that asks it', () => {
    const withSafety = FEELINGS.filter((f) => f.questions.some((q) => q.id === 'safety'));
    expect(withSafety.map((f) => f.id).sort()).toEqual(['empty', 'hopeless', 'low', 'storm']);
    for (const f of withSafety) expect(isCrisis(f.id, { safety: 'yes' })).toBe(true);
  });

  it('unknown feeling throws instead of silently returning nothing', () => {
    expect(() => recommend({ feelingId: 'nope', answers: {}, modality: null })).toThrow();
  });

  it('scoring penalizes non-discreet exercises in public', () => {
    const loud = EXERCISES.find((e) => !e.discreet)!;
    const quiet = { ...loud, discreet: true };
    const t = new Set<string>();
    expect(scoreExercise(quiet, t, 'mid', 'public', 'mid').score).toBeGreaterThan(scoreExercise(loud, t, 'mid', 'public', 'mid').score);
  });
});

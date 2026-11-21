import { createContext, useContext } from 'react';
import type { Exercise, Feeling, Modality, Question, Source, Step } from '../data/types';
import { EN_WARNINGS } from '../data/feelings';
import { DISTORTIONS } from '../data/distortions';
import { CRISIS_LINES, EMERGENCY_NOTE, type CrisisLine } from '../data/crisis';
import { S } from '../data/sources';
import { DE_CATEGORIES, DE_COMMON, DE_FEELINGS, DE_WARNINGS } from './de/feelings';
import { DE_EXERCISES } from './de/exercises';
import { DE_CRISIS, DE_DISTORTIONS, DE_MODALITIES, DE_SOURCE_NOTES } from './de/misc';
import { UI, type Dict, type Lang } from './ui';

export type { Lang };

export const LangContext = createContext<Lang>('en');
export const useLang = () => useContext(LangContext);
export const useT = (): Dict => UI[useContext(LangContext)];

/** Initial language from the browser; nothing is stored. */
export function detectLang(): Lang {
  const l = (typeof navigator !== 'undefined' && (navigator.languages?.[0] || navigator.language)) || 'en';
  return l.toLowerCase().startsWith('de') ? 'de' : 'en';
}

const trQuestion = (q: Question, tr?: { text: string; options: Record<string, string> }): Question =>
  tr ? { ...q, text: tr.text, options: q.options.map((o) => ({ ...o, label: tr.options[o.id] ?? o.label })) } : q;

export function localFeeling(f: Feeling, lang: Lang): Feeling {
  if (lang === 'en') return f;
  const tr = DE_FEELINGS[f.id];
  if (!tr) return f;
  return {
    ...f,
    label: tr.label,
    blurb: tr.blurb,
    commonIn: tr.commonIn,
    questions: f.questions.map((q) => trQuestion(q, tr.questions[q.id])),
  };
}

export function localQuestion(q: Question, feelingId: string, lang: Lang): Question {
  if (lang === 'en') return q;
  return trQuestion(q, DE_FEELINGS[feelingId]?.questions[q.id] ?? DE_COMMON[q.id]);
}

export function localCategory(id: string, label: string, lang: Lang): string {
  return lang === 'de' ? DE_CATEGORIES[id] ?? label : label;
}

export function warningText(key: string, lang: Lang): string {
  return (lang === 'de' ? DE_WARNINGS[key] : undefined) ?? EN_WARNINGS[key] ?? key;
}

export function localExercise(e: Exercise, lang: Lang): Exercise {
  if (lang === 'en') return e;
  const tr = DE_EXERCISES[e.id];
  if (!tr) return e;
  const steps = e.steps.map((s, i): Step => {
    const st = tr.steps[i] ?? {};
    const base = { ...s, title: st.title ?? s.title } as Step;
    switch (base.kind) {
      case 'text':
      case 'timer':
      case 'distortions':
        return { ...base, body: st.body ?? base.body };
      case 'breath':
        return { ...base, body: st.body ?? base.body };
      case 'write':
        return { ...base, body: st.body ?? base.body, fields: st.fields ?? base.fields };
      case 'checklist':
        return { ...base, body: st.body ?? base.body, items: st.items ?? base.items };
    }
  });
  return { ...e, title: tr.title, summary: tr.summary, why: tr.why, caution: tr.caution ?? e.caution, steps };
}

/** German translation of the quote (our own), or undefined for English. */
export function quoteTranslation(e: Exercise, lang: Lang): string | undefined {
  return lang === 'de' ? DE_EXERCISES[e.id]?.quote : undefined;
}

const WHERE_DE: [string, string][] = [
  ['Ch.', 'Kap.'],
  ['(title)', '(Titel)'],
  ['(quoting Adler)', '(Adler zitierend)'],
  ['First Night', 'Erste Nacht'],
  ['Third Night', 'Dritte Nacht'],
  ['Fifth Night', 'Fünfte Nacht'],
];
export function localWhere(where: string, lang: Lang): string {
  return lang === 'de' ? WHERE_DE.reduce((w, [a, b]) => w.replace(a, b), where) : where;
}

export function localModality(m: Modality, lang: Lang): Modality {
  return lang === 'de' ? { ...m, ...DE_MODALITIES[m.id] } : m;
}

export function localDistortions(lang: Lang) {
  return lang === 'de' ? DE_DISTORTIONS : DISTORTIONS;
}

const SOURCE_KEY = new Map<Source, string>(Object.entries(S).map(([k, v]) => [v as Source, k]));

export function localSource(s: Source, lang: Lang): Source {
  if (lang === 'en') return s;
  const k = SOURCE_KEY.get(s);
  return k && DE_SOURCE_NOTES[k] ? { ...s, note: DE_SOURCE_NOTES[k] } : s;
}

export function localCrisis(lang: Lang): { emergency: string; lines: CrisisLine[] } {
  if (lang === 'en') return { emergency: EMERGENCY_NOTE, lines: CRISIS_LINES };
  return {
    emergency: DE_CRISIS.emergency,
    lines: CRISIS_LINES.map((r) => ({
      region: DE_CRISIS.regions[r.region] ?? r.region,
      lines: r.lines.map((l) => ({
        ...l,
        name: DE_CRISIS.names[l.name] ?? l.name,
        note: l.note ? DE_CRISIS.notes[l.note] ?? l.note : undefined,
      })),
    })),
  };
}

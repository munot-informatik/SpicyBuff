import { EXERCISES } from '../data/exercises';
import { COMMON_QUESTIONS, EN_WARNINGS, FEELINGS, CATEGORIES } from '../data/feelings';
import { MODALITIES } from '../data/modalities';
import { DISTORTIONS } from '../data/distortions';
import { CRISIS_LINES } from '../data/crisis';
import { S } from '../data/sources';
import { DE_CATEGORIES, DE_COMMON, DE_FEELINGS, DE_WARNINGS } from '../i18n/de/feelings';
import { DE_EXERCISES } from '../i18n/de/exercises';
import { DE_CRISIS, DE_DISTORTIONS, DE_MODALITIES, DE_SOURCE_NOTES } from '../i18n/de/misc';
import { UI } from '../i18n/ui';
import { localExercise, localFeeling, localQuestion } from '../i18n/localize';

describe('German translation is complete and structurally identical', () => {
  it('UI dictionary has every key in both languages', () => {
    expect(Object.keys(UI.de).sort()).toEqual(Object.keys(UI.en).sort());
    for (const k of ['reasons', 'phase', 'patterns', 'themeNames'] as const) {
      expect(Object.keys(UI.de[k]).sort(), k).toEqual(Object.keys(UI.en[k]).sort());
    }
    expect(UI.de.gateItems.length).toBe(UI.en.gateItems.length);
    expect(UI.de.notAdvice.length).toBe(UI.en.notAdvice.length);
  });

  it('every feeling, question and option is translated', () => {
    for (const f of FEELINGS) {
      const tr = DE_FEELINGS[f.id];
      expect(tr, f.id).toBeDefined();
      expect(tr.label.length, f.id).toBeGreaterThan(2);
      expect(tr.commonIn.length, f.id).toBe(f.commonIn.length);
      expect(Object.keys(tr.questions).sort(), f.id).toEqual(f.questions.map((q) => q.id).sort());
      for (const q of f.questions) {
        expect(Object.keys(tr.questions[q.id].options).sort(), `${f.id}/${q.id}`).toEqual(q.options.map((o) => o.id).sort());
      }
      const loc = localFeeling(f, 'de');
      for (const q of loc.questions) for (const o of q.options) expect(o.label).not.toBe('');
    }
    for (const q of COMMON_QUESTIONS) {
      expect(Object.keys(DE_COMMON[q.id].options).sort(), q.id).toEqual(q.options.map((o) => o.id).sort());
      expect(localQuestion(q, 'anxiety', 'de').text).toBe(DE_COMMON[q.id].text);
    }
    for (const c of CATEGORIES) expect(DE_CATEGORIES[c.id], c.id).toBeDefined();
    expect(Object.keys(DE_WARNINGS).sort()).toEqual(Object.keys(EN_WARNINGS).sort());
  });

  it('every warning key used in the data exists', () => {
    for (const f of FEELINGS)
      for (const q of f.questions) for (const o of q.options) if (o.warning) expect(EN_WARNINGS[o.warning], o.warning).toBeDefined();
  });

  it('every exercise is translated with the same step structure', () => {
    for (const e of EXERCISES) {
      const tr = DE_EXERCISES[e.id];
      expect(tr, e.id).toBeDefined();
      expect(tr.steps.length, `${e.id} steps`).toBe(e.steps.length);
      expect(!!tr.caution, `${e.id} caution`).toBe(!!e.caution);
      expect(!!tr.quote, `${e.id} quote`).toBe(!!e.quote);
      e.steps.forEach((s, i) => {
        const st = tr.steps[i];
        const at = `${e.id} step ${i + 1}`;
        if ('title' in s && s.title) expect(st.title, at).toBeTruthy();
        if ('body' in s && s.body) expect(st.body, at).toBeTruthy();
        if (s.kind === 'write') expect(st.fields?.length, at).toBe(s.fields.length);
        if (s.kind === 'checklist') expect(st.items?.length, at).toBe(s.items.length);
      });
      const loc = localExercise(e, 'de');
      expect(loc.title).toBe(tr.title);
      expect(loc.steps.map((s) => s.kind)).toEqual(e.steps.map((s) => s.kind));
    }
    expect(Object.keys(DE_EXERCISES).sort()).toEqual(EXERCISES.map((e) => e.id).sort());
  });

  it('modalities, distortions, source notes and crisis lines are translated', () => {
    for (const m of MODALITIES) {
      const de = DE_MODALITIES[m.id];
      expect(de, m.id).toBeDefined();
      expect(de.origin, m.id).toBeTruthy();
      expect(de.philosophy.length, `${m.id} philosophy paragraphs`).toBe(m.philosophy.length);
    }
    expect(DE_DISTORTIONS).toHaveLength(DISTORTIONS.length);
    for (const k of Object.keys(S)) expect(DE_SOURCE_NOTES[k], k).toBeTruthy();
    for (const r of CRISIS_LINES) {
      expect(DE_CRISIS.regions[r.region], r.region).toBeDefined();
      for (const l of r.lines) if (l.note) expect(DE_CRISIS.notes[l.note], l.note).toBeDefined();
    }
  });
});

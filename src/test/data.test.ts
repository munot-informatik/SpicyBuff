import { EXERCISES } from '../data/exercises';
import { COMMON_QUESTIONS, FEELINGS, FEELING_BY_ID } from '../data/feelings';
import { MODALITIES, MODALITY_BY_ID } from '../data/modalities';
import { CRISIS_LINES, tel } from '../data/crisis';
import { DISTORTIONS } from '../data/distortions';

describe('content integrity', () => {
  it('has unique ids', () => {
    const ex = EXERCISES.map((e) => e.id);
    expect(new Set(ex).size).toBe(ex.length);
    const fe = FEELINGS.map((f) => f.id);
    expect(new Set(fe).size).toBe(fe.length);
    const mo = MODALITIES.map((m) => m.id);
    expect(new Set(mo).size).toBe(mo.length);
  });

  it('every approach has a unique icon and a philosophy explainer', () => {
    expect(new Set(MODALITIES.map((m) => m.icon)).size).toBe(MODALITIES.length);
    for (const m of MODALITIES) {
      expect(m.icon, m.id).toBeTruthy();
      expect(m.origin, m.id).toBeTruthy();
      expect(m.philosophy.length, m.id).toBeGreaterThanOrEqual(2);
    }
  });

  it('every exercise targets only known feelings and has a known modality', () => {
    for (const e of EXERCISES) {
      expect(MODALITY_BY_ID[e.modality], e.id).toBeDefined();
      expect(e.targets.length, e.id).toBeGreaterThan(0);
      for (const t of e.targets) expect(FEELING_BY_ID[t], `${e.id} → ${t}`).toBeDefined();
      expect(new Set(e.targets).size, `${e.id} duplicate targets`).toBe(e.targets.length);
    }
  });

  it('every feeling has enough exercises (non-crisis ≥ 4, from ≥ 3 approaches)', () => {
    for (const f of FEELINGS) {
      const list = EXERCISES.filter((e) => e.targets.includes(f.id));
      if (f.crisisFirst) {
        expect(list.length, f.id).toBeGreaterThan(0);
        continue;
      }
      expect(list.length, f.id).toBeGreaterThanOrEqual(4);
      expect(new Set(list.map((e) => e.modality)).size, f.id).toBeGreaterThanOrEqual(3);
    }
  });

  it('every feeling has at least one discreet exercise and one for overwhelming intensity', () => {
    for (const f of FEELINGS) {
      const list = EXERCISES.filter((e) => e.targets.includes(f.id));
      expect(list.some((e) => e.discreet), `${f.id} discreet`).toBe(true);
      expect(list.some((e) => e.intensity.includes('high')), `${f.id} high`).toBe(true);
      expect(list.some((e) => e.minutes <= 3), `${f.id} quick`).toBe(true);
    }
  });

  it('every exercise is backed by sources with citations and https links', () => {
    for (const e of EXERCISES) {
      expect(e.sources.length, e.id).toBeGreaterThan(0);
      for (const s of e.sources) {
        expect(s, e.id).toBeDefined();
        expect(s.citation.length, e.id).toBeGreaterThan(20);
        if (s.url) expect(s.url, e.id).toMatch(/^https:\/\//);
      }
    }
  });

  it('every exercise has well-formed steps', () => {
    for (const e of EXERCISES) {
      expect(e.steps.length, e.id).toBeGreaterThan(0);
      expect(e.minutes, e.id).toBeGreaterThan(0);
      expect(e.intensity.length, e.id).toBeGreaterThan(0);
      expect(e.why.length, e.id).toBeGreaterThan(40);
      for (const s of e.steps) {
        if (s.kind === 'breath') {
          expect(s.rounds).toBeGreaterThan(0);
          expect(s.pattern.phases.every((p) => p.seconds > 0)).toBe(true);
        }
        if (s.kind === 'timer') expect(s.seconds).toBeGreaterThan(0);
        if (s.kind === 'write') expect(s.fields.length).toBeGreaterThan(0);
        if (s.kind === 'checklist') expect(s.items.length).toBeGreaterThan(0);
      }
      if (e.writing) expect(e.steps.some((s) => s.kind === 'write'), `${e.id} writing flag`).toBe(true);
    }
  });

  it('book quotes are short (fair-use sized) and attributed', () => {
    const quotes = EXERCISES.filter((e) => e.quote).map((e) => e.quote!);
    expect(quotes.some((q) => q.book === 'feeling-good')).toBe(true);
    expect(quotes.some((q) => q.book === 'courage')).toBe(true);
    for (const q of quotes) {
      expect(q.text.split(/\s+/).length, q.text).toBeLessThanOrEqual(15);
      expect(q.where.length).toBeGreaterThan(5);
    }
  });

  it('questions have unique option ids and at least two options', () => {
    for (const f of FEELINGS) {
      const qs = [...f.questions, ...COMMON_QUESTIONS];
      expect(new Set(qs.map((q) => q.id)).size, f.id).toBe(qs.length);
      for (const q of qs) {
        expect(q.options.length, `${f.id}/${q.id}`).toBeGreaterThanOrEqual(2);
        expect(new Set(q.options.map((o) => o.id)).size, `${f.id}/${q.id}`).toBe(q.options.length);
      }
    }
  });

  it('crisis lines are dialable', () => {
    for (const r of CRISIS_LINES) for (const l of r.lines) expect(tel(l.number)).toMatch(/^tel:\+?\d{3,}$/);
    expect(tel('999 / 112')).toBe('tel:999');
  });

  it('lists all ten Burns distortions', () => {
    expect(DISTORTIONS).toHaveLength(10);
  });
});

import { act, cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import App from '../App';
import { ExercisePlayer } from '../components/Screens';
import { pacerTick } from '../components/Steps';
import { EXERCISES, SIGH, BOX } from '../data/exercises';
import { FEELINGS } from '../data/feelings';
import { MODALITIES } from '../data/modalities';
import { modalitiesFor, questionsFor } from '../engine/recommend';
import { LangContext, localExercise, localModality, localQuestion, type Lang } from '../i18n/localize';
import { UI } from '../i18n/ui';

const click = (el: Element) => fireEvent.click(el);
const id = (x: string) => screen.getByTestId(x);
const LANGS: Lang[] = ['en', 'de'];

function enter(lang: Lang) {
  render(<App initialLang={lang} />);
  click(screen.getByRole('checkbox'));
  click(screen.getByRole('button', { name: UI[lang].continue }));
}

/** Answers every question with the first non-crisis option, checking the localized text. */
function answerAll(feelingId: string, lang: Lang) {
  for (const raw of questionsFor(feelingId)) {
    const q = localQuestion(raw, feelingId, lang);
    screen.getByRole('heading', { name: q.text });
    const opt = q.options.find((o) => !o.crisis)!;
    click(screen.getByRole('button', { name: opt.label }));
  }
}

function playThrough(lang: Lang, typeText?: string) {
  click(id('begin'));
  for (let i = 0; i < 50 && screen.queryByTestId('step-next'); i++) {
    if (typeText) for (const ta of screen.queryAllByRole('textbox')) fireEvent.change(ta, { target: { value: typeText } });
    click(id('step-next'));
  }
  screen.getByRole('heading', { name: UI[lang].howNow });
}

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.restoreAllMocks();
  delete document.documentElement.dataset.theme;
});

for (const lang of LANGS) {
  const t = UI[lang];

  describe(`[${lang}] disclaimer gate`, () => {
    it('blocks the app until acknowledged, and returns on every load', () => {
      render(<App initialLang={lang} />);
      screen.getByRole('heading', { name: t.gateTitle });
      expect(screen.getByText(t.gateLead1)).toBeInTheDocument();
      const go = screen.getByRole('button', { name: t.continue });
      expect(go).toBeDisabled();
      click(screen.getByRole('checkbox', { name: t.gateConsent }));
      expect(go).toBeEnabled();
      click(go);
      screen.getByRole('heading', { name: t.pickTitle });
      cleanup();
      render(<App initialLang={lang} />);
      screen.getByRole('heading', { name: t.gateTitle });
    });

    it('shows a permanent disclaimer and emergency numbers in the footer', () => {
      enter(lang);
      expect(screen.getByRole('contentinfo')).toHaveTextContent(t.footer);
      expect(screen.getByRole('contentinfo')).toHaveTextContent(/112/);
    });
  });

  describe(`[${lang}] every feeling, full flow (best match)`, () => {
    for (const f of FEELINGS.filter((x) => !x.crisisFirst)) {
      it(`${f.id}: questions → approach → result → exercise → feedback`, () => {
        enter(lang);
        click(id(`feeling-${f.id}`));
        answerAll(f.id, lang);
        screen.getByRole('heading', { name: t.approachTitle });
        click(id('modality-any'));
        screen.getByRole('heading', { name: t.tryThisNow });
        const card = id('primary');
        const ex = localExercise(EXERCISES.find((e) => e.id === card.dataset.exercise)!, lang);
        expect(within(card).getByRole('heading', { name: ex.title })).toBeInTheDocument();
        click(within(card).getByRole('button', { name: t.startExercise }));
        screen.getByRole('heading', { name: ex.title, level: 1 });
        playThrough(lang);
        click(id('feel-better'));
        screen.getByRole('heading', { name: t.betterTitle });
        click(id('try-another'));
        screen.getByRole('heading', { name: t.tryThisNow });
      });
    }
  });

  describe(`[${lang}] every feeling × every approach`, () => {
    for (const f of FEELINGS.filter((x) => !x.crisisFirst)) {
      it(`${f.id}: all ${MODALITIES.length} approaches give a result`, () => {
        const avail = modalitiesFor(f.id);
        for (const m of MODALITIES) {
          enter(lang);
          click(id(`feeling-${f.id}`));
          answerAll(f.id, lang);
          click(id(`modality-${m.id}`));
          screen.getByRole('heading', { name: t.tryThisNow });
          const tag = within(id('primary')).getByTestId('modality-tag').textContent;
          if (avail.has(m.id)) {
            expect(tag).toBe(localModality(m, lang).short);
            expect(screen.queryByTestId('fallback')).toBeNull();
          } else {
            expect(id('fallback')).toBeInTheDocument();
          }
          for (const chip of within(screen.getByRole('group', { name: t.switchApproach })).getAllByRole('button')) {
            click(chip);
            expect(chip).toHaveAttribute('aria-pressed', 'true');
            expect(id('primary')).toBeInTheDocument();
          }
          cleanup();
        }
      });
    }
  });

  describe(`[${lang}] every exercise plays through every step`, () => {
    for (const raw of EXERCISES) {
      it(raw.id, () => {
        vi.useFakeTimers();
        const e = localExercise(raw, lang);
        const done = vi.fn();
        render(
          <LangContext.Provider value={lang}>
            <ExercisePlayer exerciseId={e.id} onDone={done} onBack={() => {}} />
          </LangContext.Provider>,
        );
        screen.getByRole('heading', { name: e.title });
        if (e.quote) expect(screen.getByRole('figure')).toHaveTextContent(lang === 'en' ? e.quote.text : t.quoteTranslation);
        if (e.caution) expect(screen.getByRole('note')).toHaveTextContent(e.caution);
        click(id('begin'));
        e.steps.forEach((s, i) => {
          screen.getByText(t.stepOf(i + 1, e.steps.length));
          if ('body' in s && s.body) expect(screen.getByText(s.body)).toBeInTheDocument();
          if (s.kind === 'write') {
            for (const f of s.fields) screen.getByText(f);
            for (const ta of screen.getAllByRole('textbox')) {
              fireEvent.change(ta, { target: { value: 'test entry' } });
              expect(ta).toHaveValue('test entry');
            }
            screen.getByText(t.privacyNote);
          }
          if (s.kind === 'checklist' || s.kind === 'distortions') {
            const boxes = screen.getAllByRole('checkbox');
            expect(boxes.length).toBe(s.kind === 'distortions' ? 10 : s.items.length);
            click(boxes[0]);
            expect(boxes[0]).toBeChecked();
          }
          const seconds = s.kind === 'timer' ? s.seconds : s.kind === 'write' ? s.seconds : undefined;
          if (seconds) {
            click(screen.getByRole('button', { name: s.kind === 'write' ? t.timerStartWriting : t.timerStart }));
            act(() => vi.advanceTimersByTime(seconds * 1000 + 1000));
            expect(screen.getByRole('timer')).toHaveTextContent(t.done);
          }
          if (s.kind === 'breath') {
            click(screen.getByRole('button', { name: t.startBreathing }));
            const cycle = s.pattern.phases.reduce((a, p) => a + p.seconds, 0);
            act(() => vi.advanceTimersByTime(cycle * s.rounds * 1000 + 2000));
            screen.getByText(t.wellDone);
          }
          click(id('step-next'));
        });
        for (const k of ['feel-better', 'feel-same', 'feel-worse']) id(k);
        click(id('feel-same'));
        expect(done).toHaveBeenCalledWith('same');
        for (const a of document.querySelectorAll('.sources a')) {
          expect(a).toHaveAttribute('target', '_blank');
          expect(a.getAttribute('rel')).toContain('noopener');
        }
      });
    }
  });

  describe(`[${lang}] crisis routes`, () => {
    it('crisis tile goes straight to crisis lines', () => {
      enter(lang);
      click(id('feeling-crisis'));
      screen.getByRole('heading', { name: t.crisisTitle });
      expect(screen.getByRole('link', { name: /143/ })).toHaveAttribute('href', 'tel:143');
      expect(screen.getAllByRole('link', { name: /988/ }).length).toBe(2);
      expect(screen.getByRole('link', { name: /0800 111 0 111/ })).toHaveAttribute('href', 'tel:08001110111');
      expect(screen.getByRole('link', { name: 'findahelpline.com' })).toBeInTheDocument();
      click(id('crisis-ex-safety-plan'));
      playThrough(lang);
      click(id('feel-worse'));
      click(id('show-crisis'));
      screen.getByRole('heading', { name: t.crisisTitle });
    });

    for (const fid of ['low', 'empty', 'hopeless', 'storm']) {
      it(`${fid}: answering "yes" to the safety question routes to crisis lines`, () => {
        enter(lang);
        click(id(`feeling-${fid}`));
        for (const q of questionsFor(fid)) {
          if (q.id === 'safety') {
            click(id('option-yes'));
            break;
          }
          click(id(`option-${q.options[0].id}`));
        }
        screen.getByRole('heading', { name: t.crisisTitle });
      });
    }

    it('"Help now" is reachable from the disclaimer screen too', () => {
      render(<App initialLang={lang} />);
      click(id('help-now'));
      screen.getByRole('heading', { name: t.crisisTitle });
      click(id('close'));
      screen.getByRole('heading', { name: t.gateTitle });
    });

    it('shows safety warnings for answers that need medical attention', () => {
      enter(lang);
      click(id('feeling-panic'));
      click(id('option-body'));
      click(id('option-unsure'));
      for (let i = 0; i < 3; i++) click(screen.getAllByRole('button', { pressed: false }).find((b) => b.dataset.testid?.startsWith('option-'))!);
      click(id('modality-any'));
      expect(screen.getByRole('alert')).toHaveTextContent(lang === 'en' ? /emergency number/ : /Notruf/);
    });
  });

  describe(`[${lang}] navigation & search`, () => {
    it('back button returns to the previous question with the answer kept', () => {
      enter(lang);
      click(id('feeling-anxiety'));
      click(id('option-future'));
      click(id('nav-back'));
      expect(id('option-future')).toHaveAttribute('aria-pressed', 'true');
    });

    it('search filters feelings by name and condition', () => {
      enter(lang);
      const box = screen.getByRole('searchbox');
      fireEvent.change(box, { target: { value: lang === 'en' ? 'sleep' : 'schlafen' } });
      id('feeling-sleep');
      expect(screen.queryByTestId('feeling-anger')).toBeNull();
      fireEvent.change(box, { target: { value: lang === 'en' ? 'BPD' : 'BPS' } });
      id('feeling-abandonment');
      fireEvent.change(box, { target: { value: 'zzzz' } });
      screen.getByText(t.noMatch);
    });

    it('approach picker shows compact icon tiles and a closed fold-out guide', () => {
      enter(lang);
      click(id('feeling-sensory'));
      answerAll('sensory', lang);
      screen.getByRole('heading', { name: t.approachTitle });
      const avail = modalitiesFor('sensory');
      for (const base of MODALITIES) {
        const m = localModality(base, lang);
        const tile = screen.getByRole('button', { name: avail.has(m.id) ? m.name : `${m.name} (${t.noExactShort})` });
        expect(tile.querySelector('svg.icon')).not.toBeNull();
        expect(tile).toHaveTextContent(m.short);
        // Tiles stay short: no long description or research text on the button itself.
        expect(tile).not.toHaveTextContent(m.description);
      }
      if (MODALITIES.some((m) => !avail.has(m.id))) screen.getByText(t.noExact);
      const guide = id('approach-guide') as HTMLDetailsElement;
      expect(guide.open).toBe(false);
      click(within(guide).getByText(t.guideTitle));
      expect(guide.open).toBe(true);
      for (const base of MODALITIES) {
        const m = localModality(base, lang);
        const item = id(`guide-${m.id}`) as HTMLDetailsElement;
        expect(item.open).toBe(false);
        click(within(item).getByText(m.name));
        expect(item.open).toBe(true);
        within(item).getByText(m.origin);
        for (const p of m.philosophy) within(item).getByText(p);
        within(item).getByText(m.evidence);
      }
    });

    it('intensity question uses plain words, not numbers', () => {
      enter(lang);
      click(id('feeling-anxiety'));
      const q = localQuestion(questionsFor('anxiety').find((x) => x.id === 'intensity')!, 'anxiety', lang);
      expect(q.options.map((o) => o.label)).toEqual(lang === 'en' ? ['Mild', 'Medium', 'Strong'] : ['Leicht', 'Mittel', 'Stark']);
      for (const o of q.options) expect(o.label).not.toMatch(/[0-9]/);
    });

    it('about page lists legal text, privacy and all sources', () => {
      enter(lang);
      click(id('about'));
      screen.getByRole('heading', { name: t.aboutTitle });
      screen.getByText(t.notAdvice[0]);
      screen.getByText(t.books);
      expect(id('approach-guide')).toBeInTheDocument();
      screen.getByText(new RegExp(t.allSources));
    });
  });

  describe(`[${lang}] privacy: nothing stored, nothing sent`, () => {
    it('a full session never touches storage, cookies or the network', () => {
      const setItem = vi.spyOn(Storage.prototype, 'setItem');
      const getItem = vi.spyOn(Storage.prototype, 'getItem');
      const fetchSpy = vi.fn();
      vi.stubGlobal('fetch', fetchSpy);
      const xhr = vi.spyOn(XMLHttpRequest.prototype, 'open');
      const beacon = vi.fn();
      Object.defineProperty(navigator, 'sendBeacon', { value: beacon, configurable: true });

      enter(lang);
      click(id('lang-toggle'));
      click(id('lang-toggle'));
      click(id('theme-toggle'));
      click(id('feeling-shame'));
      answerAll('shame', lang);
      click(id('modality-cbt'));
      click(within(id('primary')).getByRole('button'));
      playThrough(lang, 'very private thought');
      click(id('feel-better'));

      expect(setItem).not.toHaveBeenCalled();
      expect(getItem).not.toHaveBeenCalled();
      expect(fetchSpy).not.toHaveBeenCalled();
      expect(xhr).not.toHaveBeenCalled();
      expect(beacon).not.toHaveBeenCalled();
      expect(document.cookie).toBe('');
      expect(localStorage.length).toBe(0);
      expect(sessionStorage.length).toBe(0);
      vi.unstubAllGlobals();
    });

    it('typed text is gone once you leave the exercise', () => {
      enter(lang);
      click(id('feeling-guilt'));
      answerAll('guilt', lang);
      click(id('modality-writing'));
      click(within(id('primary')).getByRole('button'));
      click(id('begin'));
      while (!screen.queryByRole('textbox')) click(id('step-next'));
      fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'secret' } });
      click(id('back-to-suggestions'));
      click(within(id('primary')).getByRole('button'));
      click(id('begin'));
      expect(screen.queryByDisplayValue('secret')).toBeNull();
    });
  });
}

describe('language & theme switches', () => {
  it('switches the whole UI between English and German mid-session, keeping progress', () => {
    enter('en');
    click(id('feeling-panic'));
    screen.getByRole('heading', { name: 'What is happening right now?' });
    click(id('lang-toggle'));
    screen.getByRole('heading', { name: 'Was passiert gerade?' });
    expect(document.documentElement.lang).toBe('de');
    expect(id('help-now')).toHaveTextContent('Hilfe jetzt');
    expect(screen.getByRole('contentinfo')).toHaveTextContent(UI.de.footer);
    click(id('lang-toggle'));
    screen.getByRole('heading', { name: 'What is happening right now?' });
    expect(document.documentElement.lang).toBe('en');
  });

  it('cycles theme system → light → dark → system on <html data-theme>', () => {
    render(<App initialLang="en" />);
    const btn = id('theme-toggle');
    expect(document.documentElement.dataset.theme).toBeUndefined();
    click(btn);
    expect(document.documentElement.dataset.theme).toBe('light');
    expect(btn).toHaveAccessibleName(/Light/);
    click(btn);
    expect(document.documentElement.dataset.theme).toBe('dark');
    click(btn);
    expect(document.documentElement.dataset.theme).toBeUndefined();
  });

  it('detects German from the browser language', () => {
    vi.spyOn(navigator, 'language', 'get').mockReturnValue('de-CH');
    vi.spyOn(navigator, 'languages', 'get').mockReturnValue(['de-CH', 'de']);
    render(<App />);
    screen.getByRole('heading', { name: UI.de.gateTitle });
  });
});

describe('breath pacer timing', () => {
  it('walks through every phase and round, then finishes', () => {
    for (const p of [SIGH, BOX]) {
      let s = { phase: 0, tick: 0, round: 1, running: true, finished: false };
      const total = p.phases.reduce((a, x) => a + x.seconds, 0) * 3;
      for (let i = 0; i < total; i++) s = pacerTick(s, p, 3);
      expect(s.finished).toBe(true);
      expect(s.running).toBe(false);
    }
  });
});

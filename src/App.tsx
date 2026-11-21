import { useEffect, useMemo, useRef, useState } from 'react';
import type { ModalityId } from './data/types';
import { isCrisis, questionsFor, recommend, type Answers } from './engine/recommend';
import {
  About,
  AfterExercise,
  ApproachPicker,
  CrisisPanel,
  DisclaimerGate,
  ExercisePlayer,
  FeelingPicker,
  QuestionStep,
  Results,
} from './components/Screens';
import { detectLang, LangContext, localQuestion, type Lang } from './i18n/localize';
import { UI } from './i18n/ui';

type Theme = 'system' | 'light' | 'dark';
const NEXT_THEME: Record<Theme, Theme> = { system: 'light', light: 'dark', dark: 'system' };
const THEME_ICON: Record<Theme, string> = { system: '🌓', light: '☀️', dark: '🌙' };

/**
 * All state lives in React memory only: no storage APIs, no network.
 * Reloading the page resets everything, including the disclaimer.
 */
type View =
  | { name: 'gate' }
  | { name: 'pick' }
  | { name: 'questions'; index: number }
  | { name: 'approach' }
  | { name: 'results' }
  | { name: 'exercise'; id: string }
  | { name: 'after'; result: 'better' | 'same' | 'worse' }
  | { name: 'crisis' }
  | { name: 'about' };

export default function App({ initialLang }: { initialLang?: Lang } = {}) {
  const [lang, setLang] = useState<Lang>(() => initialLang ?? detectLang());
  const [theme, setTheme] = useState<Theme>('system');
  const t = UI[lang];
  const [view, setView] = useState<View>({ name: 'gate' });
  const [history, setHistory] = useState<View[]>([]);
  const [feelingId, setFeelingId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Answers>({});
  const [modality, setModality] = useState<ModalityId | null>(null);
  const [accepted, setAccepted] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  const go = (next: View, push = true) => {
    if (push) setHistory((h) => [...h, view]);
    setView(next);
  };
  const back = () => {
    const prev = history[history.length - 1];
    if (!prev) return;
    setView(prev);
    setHistory(history.slice(0, -1));
  };

  // Move focus to the new screen for keyboard and screen-reader users.
  useEffect(() => {
    window.scrollTo?.({ top: 0 });
    const h = mainRef.current?.querySelector('h1');
    if (h) {
      h.setAttribute('tabindex', '-1');
      (h as HTMLElement).focus({ preventScroll: true });
    }
  }, [view]);

  // Language and theme are applied to <html>, never stored.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'system') delete root.dataset.theme;
    else root.dataset.theme = theme;
  }, [theme]);

  const questions = useMemo(() => (feelingId ? questionsFor(feelingId) : []), [feelingId]);
  const rec = useMemo(
    () => (feelingId && (view.name === 'results' || view.name === 'after') ? recommend({ feelingId, answers, modality }) : null),
    [feelingId, answers, modality, view.name],
  );

  const home = () => {
    setFeelingId(null);
    setAnswers({});
    setModality(null);
    setHistory([]);
    setView(accepted ? { name: 'pick' } : { name: 'gate' });
  };

  const pickFeeling = (id: string) => {
    setFeelingId(id);
    setAnswers({});
    setModality(null);
    if (questionsFor(id).length === 0) go({ name: 'crisis' });
    else go({ name: 'questions', index: 0 });
  };

  const answer = (qid: string, oid: string, index: number) => {
    if (!feelingId) return;
    const next = { ...answers, [qid]: oid };
    setAnswers(next);
    if (isCrisis(feelingId, next)) return go({ name: 'crisis' });
    if (index + 1 < questions.length) go({ name: 'questions', index: index + 1 });
    else go({ name: 'approach' });
  };

  let content: JSX.Element;
  switch (view.name) {
    case 'gate':
      content = (
        <DisclaimerGate
          onAccept={() => {
            setAccepted(true);
            setHistory([]);
            setView({ name: 'pick' });
          }}
        />
      );
      break;
    case 'pick':
      content = <FeelingPicker onPick={pickFeeling} />;
      break;
    case 'questions': {
      const qq = localQuestion(questions[view.index], feelingId!, lang);
      content = (
        <QuestionStep
          key={qq.id}
          feelingId={feelingId!}
          question={qq}
          index={view.index}
          total={questions.length}
          selected={answers[qq.id]}
          onAnswer={(oid) => answer(qq.id, oid, view.index)}
        />
      );
      break;
    }
    case 'approach':
      content = (
        <ApproachPicker
          feelingId={feelingId!}
          onPick={(m) => {
            setModality(m);
            go({ name: 'results' });
          }}
        />
      );
      break;
    case 'results':
      content = (
        <Results
          feelingId={feelingId!}
          rec={rec!}
          modality={modality}
          onStart={(id) => go({ name: 'exercise', id })}
          onModality={setModality}
          onCrisis={() => go({ name: 'crisis' })}
          onRestart={home}
        />
      );
      break;
    case 'exercise':
      content = (
        <ExercisePlayer
          key={view.id}
          exerciseId={view.id}
          onBack={back}
          onDone={(result) => go({ name: 'after', result })}
        />
      );
      break;
    case 'after':
      content = (
        <AfterExercise
          result={view.result}
          onAnother={() => (feelingId && feelingId !== 'crisis' ? go({ name: 'results' }) : home())}
          onCrisis={() => go({ name: 'crisis' })}
          onHome={home}
        />
      );
      break;
    case 'crisis':
      content = (
        <CrisisPanel
          onExercise={(id) => {
            if (!feelingId) setFeelingId('crisis');
            go({ name: 'exercise', id });
          }}
          onClose={() => (history.length ? back() : home())}
        />
      );
      break;
    case 'about':
      content = <About onClose={() => (history.length ? back() : home())} />;
      break;
  }

  const showBack = history.length > 0 && !['gate', 'pick'].includes(view.name);

  return (
    <LangContext.Provider value={lang}>
    <div className="app">
      <header className="top">
        <button type="button" className="brand" onClick={home} aria-label={t.appHome}>
          <span aria-hidden="true">🌶️</span> SpicyBuff
        </button>
        <nav className="top-actions">
          <button
            type="button"
            className="btn small ghost icon"
            onClick={() => setTheme(NEXT_THEME[theme])}
            aria-label={t.themeLabel(t.themeNames[theme])}
            title={t.themeLabel(t.themeNames[theme])}
            data-testid="theme-toggle"
            data-theme-state={theme}
          >
            <span aria-hidden="true">{THEME_ICON[theme]}</span>
          </button>
          <button
            type="button"
            className="btn small ghost"
            onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
            aria-label={t.langSwitchLabel}
            lang={lang === 'en' ? 'de' : 'en'}
            data-testid="lang-toggle"
          >
            {lang === 'en' ? 'DE' : 'EN'}
          </button>
          <button type="button" className="btn small ghost" onClick={() => go({ name: 'about' })} data-testid="about">
            {t.about}
          </button>
          <button type="button" className="btn small danger" onClick={() => go({ name: 'crisis' })} data-testid="help-now">
            {t.helpNow}
          </button>
        </nav>
      </header>
      <main ref={mainRef} className="main">
        {showBack && (
          <button type="button" className="back" onClick={back} data-testid="nav-back">
            {t.back}
          </button>
        )}
        {content}
      </main>
      <footer className="foot">
        <p>
          {t.footer} <span aria-hidden="true">·</span> {t.footerPrivacy}
        </p>
      </footer>
    </div>
    </LangContext.Provider>
  );
}

import { useMemo, useState } from 'react';
import { CATEGORIES, FEELINGS, FEELING_BY_ID } from '../data/feelings';
import { MODALITIES, MODALITY_BY_ID } from '../data/modalities';
import { tel } from '../data/crisis';
import { EXERCISES, EXERCISE_BY_ID } from '../data/exercises';
import type { Exercise, ModalityId, Question, Source } from '../data/types';
import { modalitiesFor, type Recommendation, type Scored } from '../engine/recommend';
import {
  localCategory,
  localCrisis,
  localExercise,
  localFeeling,
  localModality,
  localSource,
  localWhere,
  quoteTranslation,
  useLang,
  useT,
  warningText,
} from '../i18n/localize';
import { StepView } from './Steps';
import { BestMatchIcon, FeelingIcon, Icon, ModalityIcon } from './icons';
import { BookOpen, Frown, Info, LifeBuoy as LifeBuoyIcon, Lock, Meh, Phone, Siren, Smile, TriangleAlert } from 'lucide-react';

// ---------------------------------------------------------------- Disclaimer
export function DisclaimerGate({ onAccept }: { onAccept: () => void }) {
  const t = useT();
  const [ok, setOk] = useState(false);
  return (
    <section className="card gate" aria-labelledby="gate-title">
      <h1 id="gate-title">{t.gateTitle}</h1>
      <p>
        <strong>{t.gateLead1}</strong>
        {t.gateLead2}
      </p>
      <ul className="gate-list">
        {t.gateItems.map((x) => (
          <li key={x}>{x}</li>
        ))}
        <li>
          <strong>{t.gateCrisisStrong}</strong>
          {t.gateCrisisRest}
        </li>
        {t.gateItems2.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <p className="privacy-note">
        <Icon as={Lock} size={16} /> <strong>{t.gatePrivacyStrong}</strong>
        {t.gatePrivacy}
      </p>
      <label className="consent">
        <input type="checkbox" checked={ok} onChange={(e) => setOk(e.target.checked)} />
        <span>{t.gateConsent}</span>
      </label>
      <button type="button" className="btn primary block" disabled={!ok} onClick={onAccept}>
        {t.continue}
      </button>
    </section>
  );
}

// ---------------------------------------------------------------- Feeling picker
export function FeelingPicker({ onPick }: { onPick: (id: string) => void }) {
  const t = useT();
  const lang = useLang();
  const [filter, setFilter] = useState('');
  const f = filter.trim().toLowerCase();
  const all = FEELINGS.filter((x) => x.id !== 'crisis').map((x) => ({ base: x, loc: localFeeling(x, lang) }));
  const visible = all.filter(
    ({ base, loc }) =>
      !f ||
      [loc.label, loc.blurb, ...loc.commonIn, base.label, ...base.commonIn].some((s) => s.toLowerCase().includes(f)),
  );
  return (
    <section aria-labelledby="pick-title">
      <h1 id="pick-title" className="hero">
        {t.pickTitle}
      </h1>
      <p className="muted center">{t.pickSub}</p>
      <button type="button" className="crisis-tile" onClick={() => onPick('crisis')} data-testid="feeling-crisis">
        <Icon as={LifeBuoyIcon} /> {t.crisisTile}
      </button>
      <label className="search">
        <span className="sr-only">{t.searchLabel}</span>
        <input type="search" placeholder={t.searchPlaceholder} value={filter} onChange={(e) => setFilter(e.target.value)} autoComplete="off" />
      </label>
      {CATEGORIES.map((c) => {
        const items = visible.filter(({ base }) => base.category === c.id);
        if (!items.length) return null;
        return (
          <div key={c.id} className="cat">
            <h2 className="cat-title">{localCategory(c.id, c.label, lang)}</h2>
            <div className="grid">
              {items.map(({ base, loc }) => (
                <button key={base.id} type="button" className="tile" onClick={() => onPick(base.id)} data-testid={`feeling-${base.id}`}>
                  <span className="tile-icon">
                    <FeelingIcon id={base.id} />
                  </span>
                  <span className="tile-label">{loc.label}</span>
                </button>
              ))}
            </div>
          </div>
        );
      })}
      {visible.length === 0 && <p className="muted center">{t.noMatch}</p>}
    </section>
  );
}

// ---------------------------------------------------------------- Questions
export function QuestionStep({
  feelingId,
  question,
  index,
  total,
  selected,
  onAnswer,
}: {
  feelingId: string;
  /** Already localized. */
  question: Question;
  index: number;
  total: number;
  selected?: string;
  onAnswer: (optionId: string) => void;
}) {
  const t = useT();
  const f = localFeeling(FEELING_BY_ID[feelingId], useLang());
  return (
    <section aria-labelledby="q-title">
      <div className="progress" aria-hidden="true">
        <div className="progress-bar" style={{ width: `${((index + 1) / (total + 1)) * 100}%` }} />
      </div>
      {index === 0 && (
        <div className="blurb">
          <span className="blurb-icon">
            <FeelingIcon id={f.id} size={20} />
          </span>
          {f.blurb}
          {f.commonIn.length > 0 && (
            <span className="muted small block">
              {t.commonIn} {f.commonIn.join(', ')}
            </span>
          )}
        </div>
      )}
      <p className="muted small">{t.questionOf(index + 1, total)}</p>
      <h1 id="q-title" className="q-title">
        {question.text}
      </h1>
      <div className="options" role="group" aria-labelledby="q-title">
        {question.options.map((o) => (
          <button
            key={o.id}
            type="button"
            aria-pressed={selected === o.id}
            className={`option ${selected === o.id ? 'selected' : ''}`}
            onClick={() => onAnswer(o.id)}
            data-testid={`option-${o.id}`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------- Approach picker
export function ApproachPicker({ feelingId, onPick }: { feelingId: string; onPick: (m: ModalityId | null) => void }) {
  const t = useT();
  const lang = useLang();
  const available = modalitiesFor(feelingId);
  return (
    <section aria-labelledby="ap-title">
      <div className="progress" aria-hidden="true">
        <div className="progress-bar" style={{ width: '96%' }} />
      </div>
      <h1 id="ap-title" className="q-title">
        {t.approachTitle}
      </h1>
      <p className="muted">{t.approachSub}</p>
      <div className="approach-grid">
        <button type="button" className="approach-tile best" onClick={() => onPick(null)} data-testid="modality-any">
          <span className="approach-icon">
            <Icon as={BestMatchIcon} size={22} />
          </span>
          <span className="approach-name">{t.bestMatchAny}</span>
          <span className="approach-sub">{t.bestMatchAnySub}</span>
        </button>
        {MODALITIES.map((base) => {
          const m = localModality(base, lang);
          const has = available.has(m.id);
          return (
            <button
              key={m.id}
              type="button"
              className={`approach-tile ${has ? '' : 'dim'}`}
              onClick={() => onPick(m.id)}
              data-testid={`modality-${m.id}`}
              title={m.name}
              aria-label={has ? m.name : `${m.name} (${t.noExactShort})`}
            >
              <span className="approach-icon">
                <ModalityIcon id={m.id} />
              </span>
              <span className="approach-name" aria-hidden="true">
                {m.short}
                {!has && <span className="approx"> ≈</span>}
              </span>
            </button>
          );
        })}
      </div>
      {MODALITIES.some((m) => !available.has(m.id)) && <p className="muted small legend">{t.noExact}</p>}
      <ApproachGuide />
    </section>
  );
}

/** Fold-out explainer: what each approach is, the philosophy behind it, and how strong the research is. */
export function ApproachGuide() {
  const t = useT();
  const lang = useLang();
  return (
    <details className="guide" data-testid="approach-guide">
      <summary>
        <Icon as={Info} size={18} />
        {t.guideTitle}
      </summary>
      <p className="muted small">{t.guideIntro}</p>
      {MODALITIES.map((base) => {
        const m = localModality(base, lang);
        return (
          <details key={m.id} className="guide-item" data-testid={`guide-${m.id}`}>
            <summary>
              <span className="guide-icon">
                <ModalityIcon id={m.id} size={20} />
              </span>
              <span>{m.name}</span>
            </summary>
            <div className="guide-body">
              <p className="muted small">
                <strong>{t.origin}</strong> {m.origin}
              </p>
              {m.philosophy.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p>
                <strong>{t.inPractice}</strong> {m.description}
              </p>
              <p className="muted small">
                <strong>{t.evidence}</strong> {m.evidence}
              </p>
            </div>
          </details>
        );
      })}
    </details>
  );
}

// ---------------------------------------------------------------- Results
export function Results({
  feelingId,
  rec,
  modality,
  onStart,
  onModality,
  onCrisis,
  onRestart,
}: {
  feelingId: string;
  rec: Recommendation;
  modality: ModalityId | null;
  onStart: (exId: string) => void;
  onModality: (m: ModalityId | null) => void;
  onCrisis: () => void;
  onRestart: () => void;
}) {
  const t = useT();
  const lang = useLang();
  const f = localFeeling(FEELING_BY_ID[feelingId], lang);
  const available = modalitiesFor(feelingId);
  return (
    <section aria-labelledby="res-title">
      {rec.warnings.map((w) => (
        <div key={w} className="alert" role="alert">
          <Icon as={TriangleAlert} /> {warningText(w, lang)}
        </div>
      ))}
      {rec.intensity === 'high' && (
        <div className="alert soft">
          {t.highIntensity}{' '}
          <button type="button" className="linklike" onClick={onCrisis}>
            {t.needPerson}
          </button>
        </div>
      )}
      <p className="muted small">
        {t.forFeeling} {f.label}
      </p>
      <h1 id="res-title" className="q-title">
        {t.tryThisNow}
      </h1>
      {rec.modalityFallback && modality && (
        <div className="alert soft" data-testid="fallback">
          {t.fallback(localModality(MODALITY_BY_ID[modality], lang).short)}
        </div>
      )}
      <ExerciseCard s={rec.primary} primary onStart={onStart} />

      <div className="chips" role="group" aria-label={t.switchApproach}>
        <span className="muted small">{t.approachLabel}</span>
        <button type="button" aria-pressed={modality === null} className={`chip ${modality === null ? 'on' : ''}`} onClick={() => onModality(null)}>
          {t.bestMatch}
        </button>
        {MODALITIES.filter((m) => available.has(m.id)).map((m) => (
          <button
            key={m.id}
            type="button"
            aria-pressed={modality === m.id}
            className={`chip ${modality === m.id ? 'on' : ''}`}
            onClick={() => onModality(m.id)}
          >
            <ModalityIcon id={m.id} size={15} />
            {localModality(m, lang).short}
          </button>
        ))}
      </div>

      {rec.alternatives.length > 0 && (
        <>
          <h2 className="cat-title">{t.otherOptions}</h2>
          {rec.alternatives.map((s) => (
            <ExerciseCard key={s.exercise.id} s={s} onStart={onStart} />
          ))}
        </>
      )}
      <button type="button" className="btn ghost block" onClick={onRestart}>
        {t.pickDifferent}
      </button>
    </section>
  );
}

function ExerciseCard({ s, primary, onStart }: { s: Scored; primary?: boolean; onStart: (id: string) => void }) {
  const t = useT();
  const lang = useLang();
  const e = localExercise(s.exercise, lang);
  return (
    <article className={`card ex-card ${primary ? 'primary' : ''}`} data-testid={primary ? 'primary' : 'alternative'} data-exercise={e.id}>
      <div className="ex-meta">
        <span className="tag" data-testid="modality-tag">
          <ModalityIcon id={e.modality} size={14} />
          {localModality(MODALITY_BY_ID[e.modality], lang).short}
        </span>
        <span className="tag">{t.minutes(e.minutes)}</span>
        {e.discreet && <span className="tag">{t.discreet}</span>}
        {e.quote && (
          <span className="tag book">
            <Icon as={BookOpen} size={14} /> {e.quote.book === 'feeling-good' ? t.bookFG : t.bookCourage}
          </span>
        )}
      </div>
      <h3 className="ex-title">{e.title}</h3>
      <p>{e.summary}</p>
      {primary && s.reasons.length > 0 && (
        <p className="muted small">
          {t.whyThisOne} {s.reasons.map((r) => t.reasons[r] ?? r).join(' · ')}
        </p>
      )}
      <button type="button" className={`btn ${primary ? 'primary' : ''} block`} onClick={() => onStart(e.id)}>
        {primary ? t.startExercise : t.tryInstead}
      </button>
    </article>
  );
}

// ---------------------------------------------------------------- Exercise player
export function ExercisePlayer({
  exerciseId,
  onDone,
  onBack,
}: {
  exerciseId: string;
  onDone: (feeling: 'better' | 'same' | 'worse') => void;
  onBack: () => void;
}) {
  const t = useT();
  const lang = useLang();
  const e = localExercise(EXERCISE_BY_ID[exerciseId], lang);
  const [i, setI] = useState(-1); // -1 = intro
  const total = e.steps.length;
  const step = i >= 0 && i < total ? e.steps[i] : null;
  const finished = i >= total;

  return (
    <section aria-labelledby="ex-title" className="player">
      <div className="ex-meta">
        <span className="tag">
          <ModalityIcon id={e.modality} size={14} />
          {localModality(MODALITY_BY_ID[e.modality], lang).short}
        </span>
        <span className="tag">{t.minutes(e.minutes)}</span>
      </div>
      <h1 id="ex-title" className="q-title">
        {e.title}
      </h1>

      {i === -1 && (
        <>
          <p>{e.summary}</p>
          <div className="card soft">
            <h2 className="h-small">{t.whyHelp}</h2>
            <p>{e.why}</p>
          </div>
          {e.quote && <BookQuote e={e} />}
          {e.caution && (
            <div className="alert" role="note">
              <Icon as={TriangleAlert} /> {e.caution}
            </div>
          )}
          <button type="button" className="btn primary block" onClick={() => setI(0)} data-testid="begin">
            {t.begin(total)}
          </button>
        </>
      )}

      {step && (
        <div className="card step" key={`${lang}-${i}`}>
          <p className="muted small">{t.stepOf(i + 1, total)}</p>
          {step.title && <h2 className="h-small">{step.title}</h2>}
          <StepView step={step} />
          <div className="row between">
            <button type="button" className="btn ghost" onClick={() => setI(i - 1)} data-testid="step-back">
              {t.back}
            </button>
            <button type="button" className="btn primary" onClick={() => setI(i + 1)} data-testid="step-next">
              {i + 1 === total ? t.finish : t.next}
            </button>
          </div>
        </div>
      )}

      {finished && (
        <div className="card step">
          <h2 className="h-small">{t.howNow}</h2>
          <div className="options">
            <button type="button" className="option with-icon" onClick={() => onDone('better')} data-testid="feel-better">
              <Icon as={Smile} size={20} />
              {t.better}
            </button>
            <button type="button" className="option with-icon" onClick={() => onDone('same')} data-testid="feel-same">
              <Icon as={Meh} size={20} />
              {t.same}
            </button>
            <button type="button" className="option with-icon" onClick={() => onDone('worse')} data-testid="feel-worse">
              <Icon as={Frown} size={20} />
              {t.worse}
            </button>
          </div>
        </div>
      )}

      <SourceList sources={e.sources} />
      <button type="button" className="btn ghost block" onClick={onBack} data-testid="back-to-suggestions">
        {t.backToSuggestions}
      </button>
    </section>
  );
}

export function BookQuote({ e }: { e: Exercise }) {
  const t = useT();
  const q = e.quote!;
  const lang = useLang();
  const translated = quoteTranslation(e, lang);
  return (
    <figure className="quote">
      <blockquote>{translated ?? q.text}</blockquote>
      <figcaption>
        {q.book === 'feeling-good' ? t.authorsFG : t.authorsCourage}, <cite>{localWhere(q.where, lang)}</cite>
        {translated && (
          <span className="block small">
            {t.quoteTranslation} “{q.text}”
          </span>
        )}
      </figcaption>
    </figure>
  );
}

export function SourceList({ sources, title }: { sources: Source[]; title?: string }) {
  const t = useT();
  const lang = useLang();
  return (
    <details className="sources">
      <summary>
        {title ?? t.sources} ({sources.length})
      </summary>
      <ol>
        {sources.map((raw) => {
          const s = localSource(raw, lang);
          return (
            <li key={s.citation}>
              {s.url ? (
                <a href={s.url} target="_blank" rel="noopener noreferrer nofollow">
                  {s.citation}
                </a>
              ) : (
                s.citation
              )}
              {s.note && <span className="muted small block">{s.note}</span>}
            </li>
          );
        })}
      </ol>
      <p className="muted small">{t.sourcesNote}</p>
    </details>
  );
}

// ---------------------------------------------------------------- After exercise
export function AfterExercise({
  result,
  onAnother,
  onCrisis,
  onHome,
}: {
  result: 'better' | 'same' | 'worse';
  onAnother: () => void;
  onCrisis: () => void;
  onHome: () => void;
}) {
  const t = useT();
  const [title, text] =
    result === 'better' ? [t.betterTitle, t.betterText] : result === 'same' ? [t.sameTitle, t.sameText] : [t.worseTitle, t.worseText];
  return (
    <section className="card" aria-live="polite">
      <h1 className="q-title">{title}</h1>
      <p>{text}</p>
      {result === 'worse' && (
        <button type="button" className="btn danger block" onClick={onCrisis} data-testid="show-crisis">
          {t.showCrisis}
        </button>
      )}
      <button type="button" className="btn primary block" onClick={onAnother} data-testid="try-another">
        {t.tryAnother}
      </button>
      <button type="button" className="btn ghost block" onClick={onHome}>
        {t.backToFeelings}
      </button>
    </section>
  );
}

// ---------------------------------------------------------------- Crisis
export function CrisisPanel({ onExercise, onClose }: { onExercise: (id: string) => void; onClose: () => void }) {
  const t = useT();
  const lang = useLang();
  const c = localCrisis(lang);
  return (
    <section aria-labelledby="crisis-title" className="crisis">
      <h1 id="crisis-title" className="q-title">
        {t.crisisTitle}
      </h1>
      <div className="alert strong" role="alert">
        <Icon as={Siren} /> {c.emergency}
      </div>
      <p>{t.crisisLead}</p>
      {c.lines.map((r) => (
        <div key={r.region} className="card crisis-region">
          <h2 className="h-small">{r.region}</h2>
          <ul>
            {r.lines.map((l) => (
              <li key={l.name + l.number}>
                <a href={tel(l.number)} className="tel">
                  <Icon as={Phone} size={15} /> {l.number}
                </a>{' '}
                {l.name}
                {l.note && <span className="muted small"> · {l.note}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p>
        {t.crisisElsewhere1}
        <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer nofollow">
          findahelpline.com
        </a>
        {t.crisisElsewhere2}
      </p>
      <div className="card soft">
        <h2 className="h-small">{t.crisisWhile}</h2>
        <p className="small">{t.crisisWhileSub}</p>
        <div className="options">
          {['safety-plan', 'tipp-cold', 'drop-anchor', 'cyclic-sigh'].map((id) => (
            <button key={id} type="button" className="option" onClick={() => onExercise(id)} data-testid={`crisis-ex-${id}`}>
              {localExercise(EXERCISE_BY_ID[id], lang).title}
            </button>
          ))}
        </div>
      </div>
      <button type="button" className="btn ghost block" onClick={onClose} data-testid="close">
        {t.close}
      </button>
    </section>
  );
}

// ---------------------------------------------------------------- About
export function About({ onClose }: { onClose: () => void }) {
  const t = useT();
  const allSources = useMemo(() => {
    const m = new Map<string, Source>();
    EXERCISES.forEach((e) => e.sources.forEach((s) => m.set(s.citation, s)));
    return [...m.values()].sort((a, b) => a.citation.localeCompare(b.citation));
  }, []);
  return (
    <section aria-labelledby="about-title">
      <h1 id="about-title" className="q-title">
        {t.aboutTitle}
      </h1>
      <div className="card">
        <h2 className="h-small">{t.notAdviceTitle}</h2>
        {t.notAdvice.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <div className="card">
        <h2 className="h-small">{t.privacyTitle}</h2>
        <ul>
          {t.privacy.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
      <div className="card">
        <h2 className="h-small">{t.booksTitle}</h2>
        <p>{t.books}</p>
      </div>
      <ApproachGuide />
      <SourceList sources={allSources} title={t.allSources} />
      <button type="button" className="btn ghost block" onClick={onClose} data-testid="close">
        {t.close}
      </button>
    </section>
  );
}

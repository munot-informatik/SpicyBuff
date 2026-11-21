import { useEffect, useRef, useState } from 'react';
import type { BreathPattern, Step } from '../data/types';
import { localDistortions, useLang, useT } from '../i18n/localize';
import { Lock } from 'lucide-react';
import { Icon } from './icons';

function useInterval(cb: () => void, ms: number | null) {
  const saved = useRef(cb);
  saved.current = cb;
  useEffect(() => {
    if (ms === null) return;
    const id = setInterval(() => saved.current(), ms);
    return () => clearInterval(id);
  }, [ms]);
}

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

export function Timer({ seconds, writing }: { seconds: number; writing?: boolean }) {
  const t = useT();
  const [left, setLeft] = useState(seconds);
  const [running, setRunning] = useState(false);
  useInterval(() => setLeft((l) => Math.max(0, l - 1)), running && left > 0 ? 1000 : null);
  const done = left === 0;
  return (
    <div className="timer" role="timer" aria-live="off">
      <div className={`timer-face ${done ? 'done' : ''}`} aria-label={t.timeLeft(fmt(left))}>
        {done ? t.done : fmt(left)}
      </div>
      <div className="row">
        {!done && (
          <button type="button" className="btn small" onClick={() => setRunning((r) => !r)}>
            {running ? t.pause : left === seconds ? (writing ? t.timerStartWriting : t.timerStart) : t.resume}
          </button>
        )}
        {left !== seconds && (
          <button
            type="button"
            className="btn small ghost"
            onClick={() => {
              setRunning(false);
              setLeft(seconds);
            }}
          >
            {t.reset}
          </button>
        )}
      </div>
    </div>
  );
}

interface PacerState {
  phase: number;
  tick: number;
  round: number;
  running: boolean;
  finished: boolean;
}
const START: PacerState = { phase: 0, tick: 0, round: 1, running: false, finished: false };

/** Pure state transition for one second of breathing. Exported for tests. */
export function pacerTick(s: PacerState, pattern: BreathPattern, rounds: number): PacerState {
  if (!s.running) return s;
  if (s.tick + 1 < pattern.phases[s.phase].seconds) return { ...s, tick: s.tick + 1 };
  if (s.phase + 1 < pattern.phases.length) return { ...s, tick: 0, phase: s.phase + 1 };
  if (s.round < rounds) return { ...s, tick: 0, phase: 0, round: s.round + 1 };
  return { ...START, round: rounds, finished: true };
}

export function BreathPacer({ pattern, rounds }: { pattern: BreathPattern; rounds: number }) {
  const t = useT();
  const [s, setS] = useState<PacerState>(START);
  useInterval(() => setS((cur) => pacerTick(cur, pattern, rounds)), s.running ? 1000 : null);
  const p = pattern.phases[s.phase];

  // Holds and rests keep the size of the phase before them.
  const sizeOf = (label: string) => (label === 'Inhale' ? 1 : label === 'Top-up inhale' ? 1.12 : label === 'Exhale' ? 0.6 : null);
  let scale = sizeOf(p.label);
  for (let i = s.phase - 1; scale === null && i >= 0; i--) scale = sizeOf(pattern.phases[i].label);
  if (scale === null) scale = 0.6;
  if (!s.running) scale = 0.75;

  const fresh = s.round === 1 && s.phase === 0 && s.tick === 0;
  return (
    <div className="breath">
      <div className="breath-stage">
        <div
          className={`breath-circle ${s.running ? 'on' : ''}`}
          style={{ transform: `scale(${scale})`, transitionDuration: `${p.seconds}s` }}
          aria-hidden="true"
        />
        <div className="breath-label" aria-live="polite">
          {s.finished ? t.wellDone : s.running ? `${t.phase[p.label]} · ${p.seconds - s.tick}` : t.patterns[pattern.name] ?? pattern.name}
        </div>
      </div>
      <p className="muted small center">
        {pattern.phases.map((ph) => `${t.phase[ph.label]} ${ph.seconds}s`).join(' → ')} · {t.round(s.round, rounds)}
      </p>
      <div className="row center">
        <button
          type="button"
          className="btn small"
          onClick={() => setS((cur) => (cur.finished ? { ...START, running: true } : { ...cur, running: !cur.running }))}
        >
          {s.running ? t.pause : s.finished ? t.again : fresh ? t.startBreathing : t.resume}
        </button>
      </div>
    </div>
  );
}

export function StepView({ step }: { step: Step }) {
  switch (step.kind) {
    case 'text':
      return <p className="step-body">{step.body}</p>;
    case 'breath':
      return (
        <>
          {step.body && <p className="step-body">{step.body}</p>}
          <BreathPacer pattern={step.pattern} rounds={step.rounds} />
        </>
      );
    case 'timer':
      return (
        <>
          <p className="step-body">{step.body}</p>
          <Timer seconds={step.seconds} />
        </>
      );
    case 'write':
      return <WriteStep body={step.body} fields={step.fields} seconds={step.seconds} />;
    case 'checklist':
      return <Checklist body={step.body} items={step.items} />;
    case 'distortions':
      return <DistortionPicker body={step.body} />;
  }
}

function WriteStep({ body, fields, seconds }: { body: string; fields: string[]; seconds?: number }) {
  const t = useT();
  // Kept only in component memory. Never persisted, never sent anywhere.
  const [vals, setVals] = useState<string[]>(() => fields.map(() => ''));
  return (
    <div>
      <p className="step-body">{body}</p>
      {seconds && <Timer seconds={seconds} writing />}
      {fields.map((f, i) => (
        <label key={i} className="field">
          <span className="field-label">{f}</span>
          <textarea
            rows={fields.length === 1 ? 5 : 2}
            value={vals[i]}
            autoComplete="off"
            spellCheck={false}
            onChange={(e) => setVals((v) => v.map((x, j) => (j === i ? e.target.value : x)))}
          />
        </label>
      ))}
      <p className="privacy-note">
        <Icon as={Lock} size={15} /> {t.privacyNote}
      </p>
    </div>
  );
}

function Checklist({ body, items }: { body?: string; items: string[] }) {
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false));
  return (
    <div>
      {body && <p className="step-body">{body}</p>}
      <ul className="checklist">
        {items.map((it, i) => (
          <li key={i}>
            <label>
              <input type="checkbox" checked={checked[i]} onChange={() => setChecked((c) => c.map((x, j) => (j === i ? !x : x)))} />
              <span>{it}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DistortionPicker({ body }: { body: string }) {
  const t = useT();
  const list = localDistortions(useLang());
  const [checked, setChecked] = useState<boolean[]>(() => list.map(() => false));
  return (
    <div>
      <p className="step-body">{body}</p>
      <ul className="checklist distortions">
        {list.map((d, i) => (
          <li key={d.name}>
            <label>
              <input type="checkbox" checked={checked[i]} onChange={() => setChecked((c) => c.map((x, j) => (j === i ? !x : x)))} />
              <span>
                <strong>{d.name}</strong>
                <span className="muted small block">{d.desc}</span>
                <span className="muted small block">
                  <em>{d.example}</em>
                </span>
              </span>
            </label>
          </li>
        ))}
      </ul>
      <p className="muted small">{t.distortionsCredit}</p>
    </div>
  );
}

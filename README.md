# 🌶️ SpicyBuff

Research-informed brain exercises for the feeling you have **right now**, built for neurospicy brains (ADHD, autism, BPD, anxiety, depression and more). A companion to Neurospicy.

**English & Deutsch · light & dark mode · 100 % on-device · nothing stored**

> SpicyBuff is an information and self-help tool. It is **not** medical advice, diagnosis or treatment. In a crisis, call 112 / 144 / 911 / 999 or a crisis line.

## How it works

1. **Disclaimer gate.** You acknowledge that the app is information only. It is shown on every load, because nothing is remembered.
2. **Pick a feeling.** There are 31 feelings in 5 groups (fear, body, mood, people, focus), plus a crisis tile that goes straight to crisis lines.
3. **Answer 3–5 multiple-choice questions.** Feeling-specific questions come first, then three common ones: intensity, where you are, time available. Safety questions route to crisis lines, and medical red flags show a warning.
4. **Choose an approach.** Options: CBT, DBT, ACT, Mindfulness, Self-compassion/CFT, Adlerian, Body-based, Sensory regulation, Journaling, or "best match". If an approach has nothing for that feeling, the app says so and shows the closest match.
5. **Do the exercise.** Guided steps with a breathing pacer, timers, checklists, writing fields (memory only) and Burns' 10 thinking traps. Each exercise explains why it can help, links its research sources, and some include a short quote from *Feeling Good* or *The Courage to Be Disliked*.
6. **Check in.** Pick better, same or worse. "Worse" offers crisis lines.

### How exercises are ranked

The rules are in `src/engine/recommend.ts`, applied in this order:

1. **Setting.** In public you only get discreet exercises, and in bed nothing that needs you to get up and move.
2. **Intensity.** At 8–10 you get body-first exercises that work under overwhelm.
3. **Soft fit.** How well the exercise matches your answers, how much time you have, and small bonuses.

## Privacy

- No backend, accounts, cookies, `localStorage`, analytics or third-party scripts.
- Everything you tap or type lives in React state only. Reloading the page clears it, including language and theme.
- The production build ships a strict Content-Security-Policy with `connect-src 'none'`, so the app cannot send data anywhere.

## Content & sources

- `src/data/` holds the English content: feelings, questions, ~55 exercises, approaches, sources and crisis lines.
- `src/i18n/de/` holds the German version of every string. A test makes sure it is complete and has the same structure as the English.
- Every exercise cites peer-reviewed research or a primary text. The `note` fields say honestly how strong the evidence is.
- Book material: exercises are paraphrased in our own words, and quotes are short (≤15 words) and checked word-for-word against the books. In German, quotes are our own translations, shown with the English original. If you publish this commercially, have the book quotes reviewed for rights.
- Crisis numbers were last reviewed in November 2026. Check them periodically.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # data, i18n, exhaustive engine and UI tests
npm run build      # static site in dist/ (deploy anywhere)
npm run preview    # serve the production build (with CSP)
```

### Tests (336)

- **engine**: all **64,800** answer × approach combinations. Each must return a sourced exercise for that feeling, respect setting and intensity, honour the chosen approach (or fall back honestly), show warnings, and route crisis answers.
- **data / i18n**: unique IDs, every feeling has ≥4 exercises from ≥3 approaches, and German is complete and the same shape as English.
- **app** (both languages): every feeling end-to-end, every feeling × every approach, every exercise step by step (timers, breathing, writing, checklists), crisis routes, navigation and search. Also a privacy test showing a session never touches storage, cookies or the network.

## Not a medical device

SpicyBuff does not diagnose, treat or monitor any condition, and is not intended as a medical device. The "commonly reported in" labels are informational only. If you plan to distribute it widely, have a lawyer review the disclaimer for your jurisdiction (e.g. CH/EU medical-device and consumer law).

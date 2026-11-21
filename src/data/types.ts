/** Schools / fields of psychology a user can choose a solution from. */
export type ModalityId =
  | 'cbt'
  | 'dbt'
  | 'act'
  | 'mindfulness'
  | 'compassion'
  | 'adlerian'
  | 'somatic'
  | 'sensory'
  | 'writing';

export interface Modality {
  id: ModalityId;
  name: string;
  short: string;
  /** Who developed it and when, in one line. */
  origin: string;
  /** Plain-language explanation of the ideas behind the approach, one string per paragraph. */
  philosophy: string[];
  description: string;
  /** Honest, plain-language note about how strong the research base is. */
  evidence: string;
}

export type Intensity = 'low' | 'mid' | 'high';
export type Setting = 'home' | 'bed' | 'public' | 'work';
export type TimeBudget = 'short' | 'mid' | 'long';

export interface Source {
  /** Full citation, APA-ish. */
  citation: string;
  /** Stable link (DOI or publisher / registry page). Optional for books. */
  url?: string;
  /** What this source shows, in one honest sentence. */
  note?: string;
}

export interface BookQuote {
  book: 'feeling-good' | 'courage';
  text: string;
  where: string;
}

/** Step types make exercises interactive without storing anything. */
export type Step =
  | { kind: 'text'; title?: string; body: string }
  | { kind: 'breath'; title?: string; pattern: BreathPattern; rounds: number; body?: string }
  | { kind: 'timer'; title?: string; seconds: number; body: string }
  | { kind: 'write'; title?: string; body: string; fields: string[]; seconds?: number }
  | { kind: 'checklist'; title?: string; body?: string; items: string[] }
  | { kind: 'distortions'; title?: string; body: string };

export interface BreathPhase {
  label: 'Inhale' | 'Top-up inhale' | 'Hold' | 'Exhale' | 'Rest';
  seconds: number;
}

export interface BreathPattern {
  name: string;
  phases: BreathPhase[];
}

export interface Exercise {
  id: string;
  title: string;
  modality: ModalityId;
  /** Approximate minutes needed. */
  minutes: number;
  /** One-sentence summary shown on cards. */
  summary: string;
  /** Feeling ids this exercise is designed for. */
  targets: string[];
  /** Answer tags that make this exercise a better fit. */
  tags: string[];
  /** Intensities it works for. High-arousal states need body-first tools. */
  intensity: Intensity[];
  /** Can be done silently, without anyone noticing. */
  discreet: boolean;
  /** Needs the user to get up / move around. */
  movement?: boolean;
  /** Needs writing (on screen or paper). */
  writing?: boolean;
  why: string;
  steps: Step[];
  sources: Source[];
  quote?: BookQuote;
  /** Safety notes, e.g. medical cautions. */
  caution?: string;
}

export interface AnswerOption {
  id: string;
  label: string;
  tags: string[];
  /** If chosen, route straight to crisis resources. */
  crisis?: boolean;
  /** If chosen, show this safety note above the results. */
  warning?: string;
}

export interface Question {
  id: string;
  text: string;
  options: AnswerOption[];
}

export type CategoryId = 'fear' | 'body' | 'mood' | 'people' | 'brain';

export interface Feeling {
  id: string;
  label: string;
  category: CategoryId;
  /** Short validating line shown after tapping. */
  blurb: string;
  /** Which condition communities report it often (informational only). */
  commonIn: string[];
  questions: Question[];
  /** If true, show crisis resources first. */
  crisisFirst?: boolean;
}

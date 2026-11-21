import type { Modality } from './types';

export const MODALITIES: Modality[] = [
  {
    id: 'cbt',
    name: 'Cognitive Behavioral Therapy (CBT)',
    short: 'CBT',
    description:
      'Notice the thoughts that drive a feeling, test them against the evidence, and try small behavioral experiments.',
    evidence:
      'The most-researched talking therapy. Hundreds of trials support it for anxiety, depression, panic, insomnia (CBT-I) and more.',
  },
  {
    id: 'dbt',
    name: 'Dialectical Behavior Therapy (DBT)',
    short: 'DBT',
    description:
      'Skills for riding out intense emotions without making things worse: distress tolerance, emotion regulation, mindfulness.',
    evidence:
      'Strong evidence as a full program for borderline personality disorder and self-harm. Single skills are less tested on their own.',
  },
  {
    id: 'act',
    name: 'Acceptance & Commitment Therapy (ACT)',
    short: 'ACT',
    description:
      'Make room for hard thoughts and feelings instead of fighting them, then take a step toward what matters to you.',
    evidence:
      'Meta-analyses show it works about as well as other established therapies for anxiety, depression and chronic pain.',
  },
  {
    id: 'mindfulness',
    name: 'Mindfulness-based approaches (MBSR / MBCT)',
    short: 'Mindfulness',
    description: 'Anchor attention in the present moment and watch thoughts pass without following them.',
    evidence:
      'Moderate effects on anxiety and stress. MBCT has good evidence for preventing depression relapse.',
  },
  {
    id: 'compassion',
    name: 'Compassion-Focused Therapy (CFT) & Self-Compassion',
    short: 'Self-compassion',
    description: 'Soothe the threat system by treating yourself the way you would treat a friend who is struggling.',
    evidence:
      'A growing evidence base. Randomized trials show moderate improvements in self-criticism, shame, anxiety and depression.',
  },
  {
    id: 'adlerian',
    name: 'Adlerian (Individual) Psychology',
    short: 'Adlerian',
    description:
      'Alfred Adler\'s ideas, made popular by "The Courage to Be Disliked": separate your tasks from other people\'s, live in the here and now, and find belonging through contribution.',
    evidence:
      'A philosophy-rich school with fewer controlled trials than CBT. Some of its core ideas, like acts of kindness and social connection, are well supported on their own.',
  },
  {
    id: 'somatic',
    name: 'Body-based / physiological regulation',
    short: 'Body-based',
    description:
      'Calm the nervous system through the body: slow breathing, muscle relaxation, temperature and movement.',
    evidence:
      'Slow-breathing and relaxation trials show small to moderate drops in stress and anxiety. Movement has strong evidence for mood.',
  },
  {
    id: 'sensory',
    name: 'Sensory regulation (neuro-affirming / occupational therapy)',
    short: 'Sensory',
    description:
      'Tools from autistic and ADHD communities and occupational therapy: reduce input, add calming input, and plan recovery.',
    evidence:
      'Much of this research is qualitative and led with autistic people. Some tools, like noise reduction and weighted blankets, have small trials.',
  },
  {
    id: 'writing',
    name: 'Expressive & structured writing (journaling)',
    short: 'Journaling',
    description:
      'Get it out of your head and onto the page: expressive writing, brain dumps and bedtime lists.',
    evidence:
      'Expressive writing has a small but consistent benefit across many trials. Specific bedtime to-do lists helped people fall asleep faster in a lab study.',
  },
];

export const MODALITY_BY_ID = Object.fromEntries(MODALITIES.map((m) => [m.id, m])) as Record<
  Modality['id'],
  Modality
>;

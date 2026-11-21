import type { Modality } from './types';

export const MODALITIES: Modality[] = [
  {
    id: 'cbt',
    name: 'Cognitive Behavioral Therapy (CBT)',
    short: 'CBT',
    origin: 'Aaron T. Beck and Albert Ellis, from the 1950s–60s. Made popular by David Burns\' "Feeling Good".',
    philosophy: [
      'The core idea: it is not only what happens to us that shapes how we feel, but how we interpret it. Thoughts, feelings, body sensations and actions keep feeding each other in a loop.',
      'Anxious or low moods often come with automatic thoughts that feel true but are distorted, like "this will be a disaster" or "everyone thinks I\'m stupid". CBT treats these thoughts as guesses you can check, not facts you have to obey.',
      'It is practical and focused on the present. You catch a thought, look at the evidence, try a small experiment and see what actually happens. The goal is to become your own therapist.',
    ],
    description:
      'Notice the thoughts that drive a feeling, test them against the evidence, and try small behavioral experiments.',
    evidence:
      'The most-researched talking therapy. Hundreds of trials support it for anxiety, depression, panic, insomnia (CBT-I) and more.',
  },
  {
    id: 'dbt',
    name: 'Dialectical Behavior Therapy (DBT)',
    short: 'DBT',
    origin: 'Marsha Linehan, 1980s–90s, first for people with very intense emotions and borderline personality disorder.',
    philosophy: [
      '"Dialectical" means holding two things that seem opposite as true at the same time. The central one: you are doing the best you can right now, and you can still learn to do things differently. Acceptance and change, together.',
      'DBT sees intense emotions as coming from a sensitive nervous system meeting an environment that did not understand or validate it. Nobody is to blame, but new skills help.',
      'It blends CBT with mindfulness from Zen practice and teaches four skill sets: mindfulness, getting through a crisis without making it worse (distress tolerance), emotion regulation, and asking for what you need in relationships.',
    ],
    description:
      'Skills for riding out intense emotions without making things worse: distress tolerance, emotion regulation, mindfulness.',
    evidence:
      'Strong evidence as a full program for borderline personality disorder and self-harm. Single skills are less tested on their own.',
  },
  {
    id: 'act',
    name: 'Acceptance & Commitment Therapy (ACT)',
    short: 'ACT',
    origin: 'Steven C. Hayes and colleagues, from the 1980s. Said like the word "act".',
    philosophy: [
      'ACT starts from the idea that pain is a normal part of being human. Suffering grows when we spend our energy fighting, avoiding or arguing with painful thoughts and feelings.',
      'Instead of changing what your thoughts say, ACT changes your relationship to them. You learn to see a thought as words passing through your mind ("I\'m having the thought that…"), and to make room for a feeling instead of struggling with it.',
      'The freed-up energy goes into your values: what kind of person you want to be and what matters to you. The aim is not to feel good all the time, but to live a full, meaningful life with whatever feelings come along.',
    ],
    description:
      'Make room for hard thoughts and feelings instead of fighting them, then take a step toward what matters to you.',
    evidence:
      'Meta-analyses show it works about as well as other established therapies for anxiety, depression and chronic pain.',
  },
  {
    id: 'mindfulness',
    name: 'Mindfulness-based approaches (MBSR / MBCT)',
    short: 'Mindfulness',
    origin: 'Rooted in Buddhist meditation. Brought into medicine by Jon Kabat-Zinn (MBSR, 1979) and combined with CBT in MBCT (Segal, Williams & Teasdale).',
    philosophy: [
      'Mindfulness means paying attention on purpose, to the present moment, without judging what you find.',
      'Much of our distress happens on autopilot: replaying the past, rehearsing the future, getting pulled along by thoughts. Mindfulness trains you to notice that this is happening and gently come back to now.',
      'Thoughts and feelings are treated as passing events, like weather, not as commands or facts about you. You don\'t have to stop them, just watch them come and go.',
    ],
    description: 'Anchor attention in the present moment and watch thoughts pass without following them.',
    evidence:
      'Moderate effects on anxiety and stress. MBCT has good evidence for preventing depression relapse.',
  },
  {
    id: 'compassion',
    name: 'Compassion-Focused Therapy (CFT) & Self-Compassion',
    short: 'Self-compassion',
    origin: 'Paul Gilbert (Compassion-Focused Therapy, 2000s) and Kristin Neff\'s research on self-compassion.',
    philosophy: [
      'CFT draws on evolution. We have a threat system (alarm, protection), a drive system (wanting, achieving) and a soothing system (safety, connection). Many people who struggle with shame and self-criticism have a loud threat system and a soothing system that never got much practice.',
      'Self-compassion is not self-pity or letting yourself off the hook. It has three parts: kindness toward yourself, remembering that struggling is part of being human (you\'re not the only one), and noticing your pain without drowning in it.',
      'Research suggests people keep going better after a setback when they treat themselves kindly instead of attacking themselves.',
    ],
    description: 'Soothe the threat system by treating yourself the way you would treat a friend who is struggling.',
    evidence:
      'A growing evidence base. Randomized trials show moderate improvements in self-criticism, shame, anxiety and depression.',
  },
  {
    id: 'adlerian',
    name: 'Adlerian (Individual) Psychology',
    short: 'Adlerian',
    origin: 'Alfred Adler (1870–1937), a Viennese doctor who broke with Freud. Retold as a dialogue in "The Courage to Be Disliked".',
    philosophy: [
      'Adler looked forward rather than backward. Instead of asking "what in my past caused this?", he asked "what is this feeling or behavior doing for me now, and what goal does it serve?" We are not simply pushed by our past; we can choose what meaning we give it.',
      'He believed most problems are about relationships with other people. Key ideas: separate your own tasks from other people\'s (what they think of you is their task), relate to others as equals instead of ranking above or below them, and find belonging by contributing to others.',
      'Feeling inferior is normal and can push us to grow. It only becomes a problem when life turns into a competition. Note: the book\'s claim that trauma "does not exist" is a provocative stance. Today\'s research clearly shows that the past can affect us; SpicyBuff uses Adler\'s ideas to widen your choices, not to deny what happened.',
    ],
    description:
      'Alfred Adler\'s ideas, made popular by "The Courage to Be Disliked": separate your tasks from other people\'s, live in the here and now, and find belonging through contribution.',
    evidence:
      'A philosophy-rich school with fewer controlled trials than CBT. Some of its core ideas, like acts of kindness and social connection, are well supported on their own.',
  },
  {
    id: 'somatic',
    name: 'Body-based / physiological regulation',
    short: 'Body-based',
    origin: 'Physiology and stress research, e.g. Edmund Jacobson\'s muscle relaxation (1930s) and modern breathing studies.',
    philosophy: [
      'This works "bottom-up": from the body to the mind, instead of from thoughts to feelings. Your nervous system has an accelerator (fight-or-flight) and a brake (rest-and-recover).',
      'When the alarm is very loud, the thinking parts of the brain are harder to reach, so arguing with your thoughts rarely helps. Changing the body\'s state is often the fastest way in.',
      'Long, slow breaths out help activate the brake and slow your heart. Cold water on the face triggers a reflex that calms the body. Tensing and releasing muscles, or moving hard for a minute, uses up stress energy. Once the wave drops, thinking tools work better.',
    ],
    description:
      'Calm the nervous system through the body: slow breathing, muscle relaxation, temperature and movement.',
    evidence:
      'Slow-breathing and relaxation trials show small to moderate drops in stress and anxiety. Movement has strong evidence for mood.',
  },
  {
    id: 'sensory',
    name: 'Sensory regulation (neuro-affirming / occupational therapy)',
    short: 'Sensory',
    origin: 'Occupational therapy (e.g. Winnie Dunn\'s sensory processing work) and knowledge shared by autistic and ADHD communities.',
    philosophy: [
      'It starts from the neurodiversity view: autistic and ADHD brains process sound, light, touch and other input differently. That is a difference, not a flaw.',
      'Overload, shutdowns and meltdowns often mean "too much input and not enough recovery", not weakness or bad behavior. So instead of forcing yourself to cope, you change the input: less of what drains you, more of what calms you.',
      'Stimming is treated as healthy self-regulation, not something to hide. Energy is seen as a budget, so planning recovery time is part of the tool kit.',
    ],
    description:
      'Tools from autistic and ADHD communities and occupational therapy: reduce input, add calming input, and plan recovery.',
    evidence:
      'Much of this research is qualitative and led with autistic people. Some tools, like noise reduction and weighted blankets, have small trials.',
  },
  {
    id: 'writing',
    name: 'Expressive & structured writing (journaling)',
    short: 'Journaling',
    origin: 'James Pennebaker\'s expressive-writing studies (from 1986) and later research on putting feelings into words.',
    philosophy: [
      'Putting feelings into words changes them. Brain studies show that naming a feeling can turn down the brain\'s alarm response.',
      'Writing turns a swirl of thoughts into a sequence you can look at from the outside. It also frees up working memory, which helps ADHD brains in particular: once it\'s on paper, your mind doesn\'t have to keep holding it.',
      'There are two styles: free, expressive writing about what you really feel, and structured lists, like worries, to-dos or plans. Expressive writing can stir things up for a short while at first; that is normal and usually settles.',
    ],
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

import type { AnswerOption, CategoryId, Feeling, Question } from './types';

const o = (id: string, label: string, tags: string[], extra: Partial<AnswerOption> = {}): AnswerOption => ({
  id,
  label,
  tags,
  ...extra,
});
const q = (id: string, text: string, options: AnswerOption[]): Question => ({ id, text, options });

const SAFETY_CHECK = (id: string) =>
  q(id, 'Are you having thoughts of ending your life or hurting yourself?', [
    o('no', 'No', []),
    o('yes', 'Yes, I am', [], { crisis: true }),
  ]);

const MEDICAL_NEW = 'medical';


/** Safety notes shown above results, keyed so they can be translated. */
export const EN_WARNINGS: Record<string, string> = {
  medical:
    'New, severe or unexplained physical symptoms (like chest pain, fainting or trouble breathing) need a medical check. If it could be an emergency, call your local emergency number (112 in Europe, 911 in the US/Canada, 999 in the UK) now.',
  paranoiaDanger:
    'If you are in danger right now, call your local emergency number. If these fears keep coming back or are getting stronger, please talk to a doctor or mental health professional soon. That is exactly what they are there for.',
  sleepMania:
    'Several nights of very little sleep with unusually high energy can be a sign of a mood episode, like hypomania or mania. Please contact a doctor soon, especially if you have bipolar disorder.',
  emptyUrge:
    'If the urge is to hurt yourself, please use the crisis resources. The "Help now" button at the top is always available.',
  racingMania:
    'Racing thoughts plus very little sleep and unusually high energy can be signs of hypomania or mania. Please contact a doctor soon.',
};

export const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: 'fear', label: 'Fear & worry' },
  { id: 'body', label: 'Body & senses' },
  { id: 'mood', label: 'Mood & self' },
  { id: 'people', label: 'People & big emotions' },
  { id: 'brain', label: 'Focus & thinking' },
];

export const FEELINGS: Feeling[] = [
  // ---------------- FEAR ----------------
  {
    id: 'anxiety',
    label: 'Anxious / worried',
    category: 'fear',
    blurb: 'Anxiety is your alarm system working a little too hard. It is uncomfortable, but it is not dangerous.',
    commonIn: ['Anxiety disorders', 'ADHD', 'Autism', 'BPD', 'Depression'],
    questions: [
      q('topic', 'What is the worry mostly about?', [
        o('future', 'Something that might happen', ['future', 'uncertainty']),
        o('practical', 'A real problem I could do something about', ['practical', 'task']),
        o('people', 'What people think of me', ['people', 'self']),
        o('vague', 'Nothing specific – just a bad feeling', ['uncertainty', 'body']),
      ]),
      q('where', 'Where do you notice it most?', [
        o('head', 'In my head – thoughts won\'t stop', ['thoughts']),
        o('body', 'In my body – tight chest, stomach, tension', ['body']),
        o('both', 'Both', ['thoughts', 'body']),
      ]),
    ],
  },
  {
    id: 'panic',
    label: 'Panic attack',
    category: 'fear',
    blurb: 'Panic attacks feel terrifying, but they peak and pass, usually within about 10 minutes. You are not alone in this.',
    commonIn: ['Panic disorder', 'Anxiety disorders', 'PTSD', 'BPD', 'Autism'],
    questions: [
      q('now', 'What is happening right now?', [
        o('body', 'Heart racing, can\'t get enough air, dizzy', ['body', 'high']),
        o('fear', 'I\'m scared I\'m dying, going crazy or losing control', ['thoughts', 'catastrophe']),
        o('building', 'I feel it building up', ['body', 'early']),
        o('after', 'It just passed and I\'m shaken', ['after', 'body']),
      ]),
      q('known', 'Have you had panic attacks before, and has a doctor ruled out a physical cause?', [
        o('yes', 'Yes, I know this is panic', ['known']),
        o('unsure', 'No, or this feels different from before', ['medical'], { warning: MEDICAL_NEW }),
      ]),
    ],
  },
  {
    id: 'doom',
    label: 'Feeling of doom',
    category: 'fear',
    blurb: 'A sense that something terrible is about to happen. This feeling is common with anxiety, and it is a feeling, not a forecast.',
    commonIn: ['Anxiety disorders', 'Panic disorder', 'Depression', 'BPD', 'ADHD'],
    questions: [
      q('what', 'Is there something specific you fear?', [
        o('general', 'No, it\'s a general sense that something is wrong', ['uncertainty', 'body']),
        o('world', 'World events, news, the future of everything', ['future', 'tech', 'world']),
        o('life', 'Something in my own life', ['future', 'practical']),
        o('physical', 'It came with physical symptoms', ['body'], { warning: MEDICAL_NEW }),
      ]),
    ],
  },
  {
    id: 'dread',
    label: 'Dread about something coming',
    category: 'fear',
    blurb: 'Dread grows when we picture the worst version of what is coming. Shrinking it into steps often shrinks the dread too.',
    commonIn: ['Anxiety disorders', 'ADHD', 'Autism', 'Depression'],
    questions: [
      q('what', 'What are you dreading?', [
        o('task', 'A task or deadline', ['task']),
        o('social', 'A conversation, call or social event', ['people', 'future']),
        o('appointment', 'An appointment, result or decision', ['future', 'uncertainty']),
        o('day', 'Just getting through the day', ['energy-low', 'task']),
      ]),
    ],
  },
  {
    id: 'paranoia',
    label: 'Paranoid / suspicious',
    category: 'fear',
    blurb: 'Suspicious thoughts are more common than most people think, and they get louder with stress, poor sleep and worry.',
    commonIn: ['Anxiety', 'BPD (under stress)', 'PTSD', 'Psychosis', 'Sleep loss'],
    questions: [
      q('what', 'What does it feel like?', [
        o('judged', 'People are talking about me or judging me', ['people', 'thoughts']),
        o('harm', 'Someone wants to hurt or trick me', ['threat', 'thoughts']),
        o('watched', 'I\'m being watched or followed', ['threat', 'uncertainty']),
        o('trust', 'I can\'t trust anyone right now', ['people', 'connection']),
      ]),
      q('belief', 'How convinced are you right now?', [
        o('insight', 'Part of me thinks it might be my mind', ['insight']),
        o('real', 'It feels very real', ['conviction']),
        o('danger', 'I\'m scared for my safety', ['conviction'], {
          warning: 'paranoiaDanger',
        }),
      ]),
    ],
  },
  {
    id: 'techparanoia',
    label: 'Tech paranoia',
    category: 'fear',
    blurb: 'Feeling spied on, hacked or tracked by devices. Some tech worries are realistic, so it helps to separate what you can check from what you can\'t.',
    commonIn: ['Anxiety disorders', 'OCD', 'Paranoia', 'Autism', 'ADHD'],
    questions: [
      q('what', 'What is the fear about?', [
        o('listening', 'My phone or computer is listening or watching', ['tech', 'uncertainty']),
        o('hacked', 'My accounts or devices are hacked', ['tech', 'practical']),
        o('ai', 'AI or algorithms know or control too much', ['tech', 'future', 'world']),
        o('checking', 'I keep checking settings and can\'t stop', ['tech', 'checking', 'urge']),
      ]),
      q('evidence', 'Is there concrete evidence, like a strange login alert or an unknown charge?', [
        o('yes', 'Yes, something concrete happened', ['practical']),
        o('no', 'No, it\'s more of a feeling', ['uncertainty', 'thoughts']),
      ]),
    ],
  },
  {
    id: 'social',
    label: 'Social anxiety',
    category: 'fear',
    blurb: 'Fear of being judged is one of the most common human fears. People notice far less than our brain tells us.',
    commonIn: ['Social anxiety disorder', 'Autism', 'ADHD', 'Depression'],
    questions: [
      q('when', 'When is it happening?', [
        o('before', 'Before a social situation', ['future', 'people']),
        o('during', 'Right now, around people', ['people', 'now']),
        o('after', 'After, replaying what I said', ['past', 'people']),
      ]),
      q('scary', 'What is the scariest part?', [
        o('judged', 'Looking stupid or being judged', ['self', 'people']),
        o('symptoms', 'Blushing, shaking or people seeing I\'m nervous', ['body']),
        o('words', 'Not knowing what to say', ['task', 'thoughts']),
      ]),
    ],
  },
  {
    id: 'intrusive',
    label: 'Intrusive thoughts',
    category: 'fear',
    blurb: 'Unwanted, disturbing thoughts pop into almost everyone\'s head. Having a thought does not mean you want it or will act on it.',
    commonIn: ['OCD', 'Anxiety disorders', 'Postpartum', 'PTSD', 'ADHD'],
    questions: [
      q('type', 'What kind of thoughts?', [
        o('harm', 'Violent or harmful thoughts I don\'t want', ['intrusive', 'thoughts']),
        o('ritual', 'Something bad will happen if I don\'t do X', ['checking', 'urge']),
        o('taboo', 'Sexual, religious or taboo thoughts that upset me', ['intrusive', 'self']),
        o('doubt', '"What if" doubts I can\'t settle', ['uncertainty', 'thoughts']),
      ]),
      q('urge', 'Do you feel an urge to check, fix, confess or neutralize it?', [
        o('yes', 'Yes, strongly', ['urge', 'checking']),
        o('no', 'No, I just want the thoughts gone', ['thoughts']),
      ]),
    ],
  },
  {
    id: 'health',
    label: 'Health anxiety',
    category: 'fear',
    blurb: 'When you are anxious, the brain scans the body for danger and finds sensations that were always there.',
    commonIn: ['Health anxiety', 'Panic disorder', 'OCD', 'Autism'],
    questions: [
      q('what', 'What is going on?', [
        o('googling', 'I keep googling symptoms', ['checking', 'tech', 'urge']),
        o('scanning', 'I keep noticing a sensation in my body', ['body']),
        o('illness', 'I\'m afraid I have a serious illness', ['future', 'uncertainty']),
      ]),
      q('checked', 'Has a doctor looked at this?', [
        o('yes', 'Yes, and they said it\'s fine', ['known']),
        o('no', 'No, or it\'s new or getting worse', ['medical'], { warning: MEDICAL_NEW }),
      ]),
    ],
  },

  // ---------------- BODY ----------------
  {
    id: 'shaking',
    label: 'Inner shaking / restless',
    category: 'body',
    blurb: 'That buzzing, vibrating feeling inside is often extra stress energy. The body usually calms when that energy gets used or released.',
    commonIn: ['Anxiety disorders', 'ADHD', 'Autism', 'PTSD', 'BPD'],
    questions: [
      q('what', 'What does it feel like?', [
        o('buzz', 'Buzzing inside, can\'t sit still', ['energy-high', 'body']),
        o('tense', 'Trembling, tense muscles', ['body', 'tension']),
        o('wired', 'Jittery after caffeine or little sleep', ['body', 'energy-high']),
        o('anxious', 'It comes with anxious thoughts', ['thoughts', 'body']),
      ]),
    ],
  },
  {
    id: 'sleep',
    label: 'Can\'t sleep',
    category: 'body',
    blurb: 'Lying awake is frustrating. Trying harder to sleep usually backfires, so these tools work by letting go, not forcing.',
    commonIn: ['Insomnia', 'ADHD', 'Autism', 'Anxiety', 'Depression', 'Bipolar'],
    questions: [
      q('why', 'What is keeping you awake?', [
        o('racing', 'My mind is racing', ['thoughts', 'sleep']),
        o('tomorrow', 'Worrying about tomorrow', ['future', 'task', 'sleep']),
        o('body', 'My body feels wired or restless', ['body', 'energy-high', 'sleep']),
        o('long', 'I\'ve been awake a long time and I\'m frustrated', ['sleep', 'frustration']),
      ]),
      q('days', 'Have you been sleeping very little for several days but feel unusually energized?', [
        o('no', 'No', []),
        o('yes', 'Yes', ['energy-high'], {
          warning: 'sleepMania',
        }),
      ]),
    ],
  },
  {
    id: 'sensory',
    label: 'Sensory overload',
    category: 'body',
    blurb: 'When input is more than your nervous system can process, it is not a weakness. It is a signal to turn the input down.',
    commonIn: ['Autism', 'ADHD', 'PTSD', 'Sensory processing differences', 'Migraine'],
    questions: [
      q('what', 'What is too much?', [
        o('sound', 'Noise and sounds', ['sensory', 'sound']),
        o('light', 'Light, screens, visual clutter', ['sensory']),
        o('people', 'Too many people or demands', ['people', 'sensory']),
        o('everything', 'Everything at once, I\'m close to meltdown or shutdown', ['sensory', 'high']),
      ]),
    ],
  },
  {
    id: 'dissociation',
    label: 'Unreal / detached',
    category: 'body',
    blurb: 'Feeling unreal or far away is your brain\'s protective dimmer switch under stress. It is unsettling, but not dangerous.',
    commonIn: ['PTSD', 'BPD', 'Anxiety', 'Depersonalization/derealization', 'Autism'],
    questions: [
      q('what', 'What is it like?', [
        o('world', 'The world looks foggy, flat or unreal', ['unreal']),
        o('body', 'I feel detached from my body', ['unreal', 'body']),
        o('numb', 'Numb and far away after stress', ['unreal', 'numb']),
        o('time', 'Spacing out or losing time', ['unreal', 'thoughts']),
      ]),
    ],
  },
  {
    id: 'burnout',
    label: 'Burnout / drained',
    category: 'body',
    blurb: 'Burnout happens when demands outweigh your resources for too long. Recovery needs less input, not more effort.',
    commonIn: ['Autistic burnout', 'ADHD', 'Depression', 'Chronic stress'],
    questions: [
      q('cause', 'What drained you most?', [
        o('masking', 'Masking, socializing, pretending to be fine', ['people', 'sensory', 'masking']),
        o('demands', 'Too many demands and responsibilities', ['task']),
        o('skills', 'I\'m losing skills I usually have', ['energy-low', 'sensory']),
        o('rest', 'I\'m exhausted but can\'t rest', ['energy-low', 'body', 'guilt-rest']),
      ]),
    ],
  },

  // ---------------- MOOD ----------------
  {
    id: 'low',
    label: 'Low / sad',
    category: 'mood',
    blurb: 'Low mood makes everything heavier, including the tools that help. Small is the right size today.',
    commonIn: ['Depression', 'Bipolar', 'ADHD', 'Autism', 'BPD'],
    questions: [
      q('what', 'What fits best?', [
        o('energy', 'No energy or motivation', ['energy-low']),
        o('critic', 'Harsh thoughts about myself', ['self', 'thoughts']),
        o('loss', 'Sad about something that happened', ['past']),
        o('anhedonia', 'Nothing feels enjoyable', ['numb', 'energy-low']),
      ]),
      SAFETY_CHECK('safety'),
    ],
  },
  {
    id: 'empty',
    label: 'Empty / numb',
    category: 'mood',
    blurb: 'Chronic emptiness is one of the hardest feelings to describe. It often softens through connection and small meaningful actions.',
    commonIn: ['BPD', 'Depression', 'PTSD', 'Autism'],
    questions: [
      q('what', 'What is it like?', [
        o('hollow', 'Hollow inside', ['numb', 'meaning']),
        o('pointless', 'Nothing seems to matter', ['meaning']),
        o('urge', 'I want to do something risky just to feel something', ['urge'], {
          warning: 'emptyUrge',
        }),
        o('disconnected', 'Disconnected from people', ['connection']),
      ]),
      SAFETY_CHECK('safety'),
    ],
  },
  {
    id: 'hopeless',
    label: 'Hopeless',
    category: 'mood',
    blurb: 'Hopelessness is a symptom that lies about the future. It is a reason to reach out, not to give up.',
    commonIn: ['Depression', 'BPD', 'Bipolar', 'PTSD'],
    questions: [
      SAFETY_CHECK('safety'),
      q('about', 'Hopeless about what?', [
        o('future', 'The future in general', ['future', 'meaning']),
        o('self', 'That I will never change or get better', ['self']),
        o('situation', 'A specific situation', ['practical', 'past']),
      ]),
    ],
  },
  {
    id: 'shame',
    label: 'Shame / self-hate',
    category: 'mood',
    blurb: 'Shame says "I am bad", not "I did something bad". It shrinks when it meets understanding instead of more criticism.',
    commonIn: ['BPD', 'ADHD', 'Autism', 'Depression', 'PTSD', 'Social anxiety'],
    questions: [
      q('what', 'Where is it coming from?', [
        o('embarrassing', 'I did something embarrassing', ['past', 'people']),
        o('broken', 'I feel fundamentally bad or broken', ['self']),
        o('critic', 'My inner critic won\'t stop', ['self', 'thoughts']),
        o('neuro', 'Shame about my brain, my diagnosis or my needs', ['self', 'neuro']),
      ]),
    ],
  },
  {
    id: 'guilt',
    label: 'Guilt',
    category: 'mood',
    blurb: 'Guilt can be useful when it points to something you can repair, and useless when it is just punishment.',
    commonIn: ['Depression', 'OCD', 'BPD', 'ADHD', 'Autism'],
    questions: [
      q('what', 'What is the guilt about?', [
        o('hurt', 'I hurt someone', ['people', 'past']),
        o('enough', 'I didn\'t do enough', ['task', 'self']),
        o('responsible', 'I feel responsible for other people\'s feelings', ['people', 'control']),
        o('rest', 'I feel guilty for resting', ['self', 'guilt-rest']),
      ]),
    ],
  },
  {
    id: 'lonely',
    label: 'Lonely',
    category: 'mood',
    blurb: 'Loneliness is a signal, like hunger, that you need connection. It is not proof that you are unlovable.',
    commonIn: ['Depression', 'Autism', 'ADHD', 'BPD', 'Social anxiety'],
    questions: [
      q('what', 'What kind of lonely?', [
        o('none', 'No one to talk to', ['connection']),
        o('misunderstood', 'Around people, but not understood', ['connection', 'people']),
        o('unwanted', 'I think people don\'t want me around', ['people', 'thoughts']),
        o('miss', 'I miss a specific person', ['past', 'connection']),
      ]),
    ],
  },

  // ---------------- PEOPLE & BIG EMOTIONS ----------------
  {
    id: 'rejection',
    label: 'Rejected / criticized',
    category: 'people',
    blurb: 'For many ADHD and BPD brains, rejection hits with physical force. People often call it rejection sensitivity. The pain is real, and it passes.',
    commonIn: ['ADHD (rejection sensitivity)', 'BPD', 'Autism', 'Depression', 'Social anxiety'],
    questions: [
      q('what', 'What happened?', [
        o('criticized', 'Someone criticized me', ['criticism']),
        o('ignored', 'I was left out or ignored', ['people', 'abandon']),
        o('upset', 'I think someone is upset with me', ['people', 'thoughts', 'uncertainty']),
        o('small', 'Something small hit me really hard', ['criticism', 'body', 'high']),
      ]),
    ],
  },
  {
    id: 'abandonment',
    label: 'Fear of abandonment',
    category: 'people',
    blurb: 'The terror that someone will leave can flood you. That flood is a feeling about the past showing up in the present.',
    commonIn: ['BPD', 'Attachment trauma', 'ADHD', 'Anxiety'],
    questions: [
      q('what', 'What set it off?', [
        o('reply', 'They haven\'t replied', ['uncertainty', 'abandon']),
        o('distant', 'They seem distant or different', ['abandon', 'thoughts']),
        o('argue', 'We argued', ['people', 'anger']),
        o('urge', 'I want to text them over and over', ['urge', 'abandon']),
      ]),
    ],
  },
  {
    id: 'anger',
    label: 'Angry / rage',
    category: 'people',
    blurb: 'Anger is energy that says "something is wrong". You get to decide what to do with that energy.',
    commonIn: ['BPD', 'ADHD', 'Autism', 'PTSD', 'Depression'],
    questions: [
      q('what', 'What is behind it?', [
        o('unfair', 'Someone treated me unfairly', ['people', 'anger']),
        o('self', 'I\'m frustrated with myself', ['self']),
        o('irritated', 'Everything is irritating me', ['sensory', 'energy-high']),
        o('urge', 'I want to lash out or say something I\'ll regret', ['urge', 'anger', 'high']),
      ]),
    ],
  },
  {
    id: 'storm',
    label: 'Emotional storm',
    category: 'people',
    blurb: 'Emotions that switch fast and hit hard. Storms feel endless while you are inside them, but they do pass.',
    commonIn: ['BPD', 'ADHD (emotional dysregulation)', 'Bipolar', 'PTSD', 'Autism'],
    questions: [
      q('what', 'What fits best?', [
        o('switching', 'My emotions are switching fast', ['high', 'urge']),
        o('impulse', 'I want to do something impulsive', ['urge']),
        o('control', 'I feel out of control', ['control', 'high']),
        o('triggered', 'Someone triggered me', ['people', 'anger']),
      ]),
      SAFETY_CHECK('safety'),
    ],
  },
  {
    id: 'pleasing',
    label: 'People-pleasing / can\'t say no',
    category: 'people',
    blurb: 'Bending yourself to keep everyone happy is exhausting, and you are allowed to have limits.',
    commonIn: ['Autism (masking)', 'ADHD', 'BPD', 'Codependency', 'Trauma'],
    questions: [
      q('what', 'What is happening?', [
        o('no', 'I can\'t say no', ['people', 'control']),
        o('liked', 'I need everyone to like me', ['people', 'self']),
        o('disappointed', 'I\'m afraid I disappointed someone', ['people', 'past']),
      ]),
    ],
  },

  // ---------------- BRAIN ----------------
  {
    id: 'paralysis',
    label: 'Can\'t start (task paralysis)',
    category: 'brain',
    blurb: 'Task paralysis is not laziness. It often comes from an overloaded brain or fear of getting it wrong.',
    commonIn: ['ADHD', 'Autism', 'Depression', 'Anxiety'],
    questions: [
      q('why', 'What gets in the way?', [
        o('big', 'The task feels too big', ['task', 'overwhelm']),
        o('boring', 'It\'s boring and my brain won\'t engage', ['task', 'energy-low']),
        o('wrong', 'I\'m afraid of doing it wrong', ['self', 'perfectionism']),
        o('frozen', 'I want to, but my body won\'t move', ['energy-low', 'body']),
      ]),
    ],
  },
  {
    id: 'overwhelm',
    label: 'Overwhelmed – too much',
    category: 'brain',
    blurb: 'When everything feels urgent, nothing gets done. Getting it out of your head is the first step.',
    commonIn: ['ADHD', 'Autism', 'Anxiety', 'Burnout', 'BPD'],
    questions: [
      q('what', 'Too much of what?', [
        o('tasks', 'Too many tasks', ['task']),
        o('info', 'Too much information or news', ['tech', 'sensory', 'world']),
        o('emotions', 'Too many emotions at once', ['thoughts', 'high']),
        o('people', 'Too many people needing me', ['people']),
      ]),
    ],
  },
  {
    id: 'racing',
    label: 'Racing thoughts',
    category: 'brain',
    blurb: 'A busy brain can feel like 20 browser tabs playing music at once. You don\'t have to close them all, just turn the volume down.',
    commonIn: ['ADHD', 'Anxiety', 'Bipolar', 'BPD', 'OCD'],
    questions: [
      q('what', 'What are the thoughts like?', [
        o('jumping', 'Jumping from topic to topic', ['thoughts', 'energy-high']),
        o('loop', 'The same worry looping', ['future', 'thoughts']),
        o('ideas', 'Ideas I\'m afraid of forgetting', ['task']),
        o('focus', 'I can\'t focus on anything', ['task', 'thoughts']),
      ]),
      q('days', 'Have you been sleeping very little for days and feel unusually energized or invincible?', [
        o('no', 'No', []),
        o('yes', 'Yes', ['energy-high'], {
          warning: 'racingMania',
        }),
      ]),
    ],
  },
  {
    id: 'rumination',
    label: 'Replaying / overthinking',
    category: 'brain',
    blurb: 'Replaying feels like problem-solving, but it usually keeps you stuck. The trick is changing how you think, not just what you think.',
    commonIn: ['Depression', 'Anxiety', 'ADHD', 'Autism', 'OCD', 'BPD'],
    questions: [
      q('what', 'What are you replaying?', [
        o('conversation', 'A conversation or social moment', ['past', 'people']),
        o('mistake', 'A mistake I made', ['past', 'self']),
        o('why', 'Why I feel this way or why I\'m like this', ['thoughts', 'why']),
        o('whatif', 'What could have been', ['past', 'meaning']),
      ]),
    ],
  },
  {
    id: 'fomo',
    label: 'FOMO / comparison',
    category: 'brain',
    blurb: 'Feeds show everyone else\'s highlight reel. FOMO is a signal about your own needs, not proof you are behind.',
    commonIn: ['ADHD', 'Social anxiety', 'Depression', 'BPD'],
    questions: [
      q('what', 'What triggers it?', [
        o('fun', 'Others are having more fun than me', ['comparison', 'people']),
        o('ahead', 'Others are further ahead in life', ['comparison', 'self']),
        o('scrolling', 'I keep scrolling and can\'t stop', ['tech', 'urge']),
        o('opportunity', 'I\'m afraid I\'ll miss an opportunity', ['future', 'uncertainty']),
      ]),
    ],
  },
  {
    id: 'perfectionism',
    label: 'Not good enough / impostor',
    category: 'brain',
    blurb: 'Most high achievers feel like frauds at some point. Your worth is not your output.',
    commonIn: ['ADHD', 'Autism', 'Anxiety', 'OCD', 'Eating disorders', 'Depression'],
    questions: [
      q('what', 'What fits best?', [
        o('impostor', 'They\'ll find out I\'m not good enough', ['self', 'people']),
        o('perfect', 'It has to be perfect or it\'s worthless', ['perfectionism']),
        o('compare', 'Everyone else is better than me', ['comparison']),
        o('mistake', 'I can\'t stop beating myself up over a mistake', ['self', 'past']),
      ]),
    ],
  },

  // ---------------- CRISIS ----------------
  {
    id: 'crisis',
    label: 'I\'m in crisis / might hurt myself',
    category: 'mood',
    blurb: 'You deserve support right now. Please reach out to a real person.',
    commonIn: [],
    questions: [],
    crisisFirst: true,
  },
];

export const FEELING_BY_ID: Record<string, Feeling> = Object.fromEntries(FEELINGS.map((f) => [f.id, f]));

/** Questions asked for every feeling after the feeling-specific ones. */
export const COMMON_QUESTIONS: Question[] = [
  q('intensity', 'How strong is it right now?', [
    o('low', 'Mild', ['intensity:low']),
    o('mid', 'Medium', ['intensity:mid']),
    o('high', 'Strong', ['intensity:high', 'high']),
  ]),
  q('setting', 'Where are you right now?', [
    o('home', 'At home, I can move around', ['setting:home']),
    o('bed', 'In bed', ['setting:bed', 'bed']),
    o('public', 'Out, or around people (I need something discreet)', ['setting:public']),
    o('work', 'At work or school', ['setting:work']),
  ]),
  q('time', 'How much time do you have?', [
    o('short', '1–2 minutes', ['time:short']),
    o('mid', 'About 5–10 minutes', ['time:mid']),
    o('long', '15 minutes or more', ['time:long']),
  ]),
];

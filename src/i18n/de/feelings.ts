/**
 * German overlay for feelings and questions. Keys mirror src/data/feelings.ts.
 * Swiss-friendly spelling (ss instead of ß), informal "du".
 */
export interface FeelingTr {
  label: string;
  blurb: string;
  commonIn: string[];
  questions: Record<string, { text: string; options: Record<string, string> }>;
}

const SAFETY = {
  text: 'Hast du gerade Gedanken, dir das Leben zu nehmen oder dich zu verletzen?',
  options: { no: 'Nein', yes: 'Ja, habe ich' },
};

export const DE_CATEGORIES: Record<string, string> = {
  fear: 'Angst & Sorgen',
  body: 'Körper & Sinne',
  mood: 'Stimmung & Selbstbild',
  people: 'Menschen & starke Gefühle',
  brain: 'Fokus & Denken',
};

export const DE_COMMON: Record<string, { text: string; options: Record<string, string> }> = {
  intensity: {
    text: 'Wie stark ist es gerade?',
    options: { low: 'Leicht', mid: 'Mittel', high: 'Stark' },
  },
  setting: {
    text: 'Wo bist du gerade?',
    options: {
      home: 'Zuhause, ich kann mich bewegen',
      bed: 'Im Bett',
      public: 'Unterwegs oder unter Leuten (ich brauche etwas Unauffälliges)',
      work: 'Bei der Arbeit oder in der Schule',
    },
  },
  time: {
    text: 'Wie viel Zeit hast du?',
    options: { short: '1–2 Minuten', mid: 'Etwa 5–10 Minuten', long: '15 Minuten oder mehr' },
  },
};

export const DE_WARNINGS: Record<string, string> = {
  medical:
    'Neue, starke oder unerklärliche körperliche Beschwerden (z. B. Brustschmerzen, Ohnmacht oder Atemnot) gehören ärztlich abgeklärt. Wenn es ein Notfall sein könnte, ruf jetzt den Notruf an (112 in Europa, 144 Sanität in der Schweiz, 911 in den USA/Kanada, 999 in Grossbritannien).',
  paranoiaDanger:
    'Wenn du gerade in Gefahr bist, ruf den Notruf an. Wenn diese Ängste immer wiederkommen oder stärker werden, sprich bitte bald mit einer Ärztin, einem Arzt oder einer Fachperson für psychische Gesundheit. Genau dafür sind sie da.',
  sleepMania:
    'Mehrere Nächte mit sehr wenig Schlaf und ungewöhnlich viel Energie können ein Zeichen für eine Stimmungsepisode sein, etwa Hypomanie oder Manie. Bitte melde dich bald bei einer Ärztin oder einem Arzt, besonders wenn du eine bipolare Störung hast.',
  emptyUrge:
    'Wenn der Drang ist, dich selbst zu verletzen, nutze bitte die Krisenangebote. Der Button «Hilfe jetzt» oben ist immer da.',
  racingMania:
    'Rasende Gedanken plus sehr wenig Schlaf und ungewöhnlich viel Energie können Anzeichen einer Hypomanie oder Manie sein. Bitte melde dich bald bei einer Ärztin oder einem Arzt.',
};

export const DE_FEELINGS: Record<string, FeelingTr> = {
  anxiety: {
    label: 'Ängstlich / besorgt',
    blurb: 'Angst ist dein Alarmsystem, das etwas zu fleissig arbeitet. Das ist unangenehm, aber nicht gefährlich.',
    commonIn: ['Angststörungen', 'ADHS', 'Autismus', 'BPS', 'Depression'],
    questions: {
      topic: {
        text: 'Worum geht es bei der Sorge hauptsächlich?',
        options: {
          future: 'Um etwas, das passieren könnte',
          practical: 'Um ein echtes Problem, gegen das ich etwas tun könnte',
          people: 'Darum, was andere von mir denken',
          vague: 'Um nichts Bestimmtes, nur ein schlechtes Gefühl',
        },
      },
      where: {
        text: 'Wo spürst du es am meisten?',
        options: {
          head: 'Im Kopf, die Gedanken hören nicht auf',
          body: 'Im Körper, enge Brust, Bauch, Anspannung',
          both: 'Beides',
        },
      },
    },
  },
  panic: {
    label: 'Panikattacke',
    blurb: 'Panikattacken fühlen sich furchtbar an, aber sie erreichen einen Höhepunkt und klingen ab, meist innerhalb von etwa 10 Minuten. Du bist damit nicht allein.',
    commonIn: ['Panikstörung', 'Angststörungen', 'PTBS', 'BPS', 'Autismus'],
    questions: {
      now: {
        text: 'Was passiert gerade?',
        options: {
          body: 'Herzrasen, ich bekomme nicht genug Luft, mir ist schwindlig',
          fear: 'Ich habe Angst zu sterben, verrückt zu werden oder die Kontrolle zu verlieren',
          building: 'Ich spüre, wie es sich aufbaut',
          after: 'Es ist gerade vorbei und ich bin noch erschüttert',
        },
      },
      known: {
        text: 'Hattest du schon Panikattacken, und hat eine Ärztin oder ein Arzt eine körperliche Ursache ausgeschlossen?',
        options: { yes: 'Ja, ich weiss, dass es Panik ist', unsure: 'Nein, oder es fühlt sich anders an als sonst' },
      },
    },
  },
  doom: {
    label: 'Gefühl von Unheil',
    blurb: 'Das Gefühl, dass gleich etwas Schreckliches passiert. Bei Angst ist das häufig, und es ist ein Gefühl, keine Vorhersage.',
    commonIn: ['Angststörungen', 'Panikstörung', 'Depression', 'BPS', 'ADHS'],
    questions: {
      what: {
        text: 'Gibt es etwas Bestimmtes, wovor du Angst hast?',
        options: {
          general: 'Nein, es ist ein allgemeines Gefühl, dass etwas nicht stimmt',
          world: 'Weltgeschehen, Nachrichten, die Zukunft von allem',
          life: 'Etwas in meinem eigenen Leben',
          physical: 'Es kam zusammen mit körperlichen Beschwerden',
        },
      },
    },
  },
  dread: {
    label: 'Grauen vor etwas, das ansteht',
    blurb: 'Das Grauen wächst, wenn wir uns die schlimmste Version vorstellen. Wenn man es in Schritte zerlegt, schrumpft oft auch das Grauen.',
    commonIn: ['Angststörungen', 'ADHS', 'Autismus', 'Depression'],
    questions: {
      what: {
        text: 'Wovor graut es dir?',
        options: {
          task: 'Vor einer Aufgabe oder Deadline',
          social: 'Vor einem Gespräch, Anruf oder Treffen',
          appointment: 'Vor einem Termin, Ergebnis oder einer Entscheidung',
          day: 'Einfach davor, den Tag zu überstehen',
        },
      },
    },
  },
  paranoia: {
    label: 'Paranoid / misstrauisch',
    blurb: 'Misstrauische Gedanken sind häufiger, als die meisten denken, und sie werden lauter bei Stress, wenig Schlaf und Sorgen.',
    commonIn: ['Angst', 'BPS (unter Stress)', 'PTBS', 'Psychose', 'Schlafmangel'],
    questions: {
      what: {
        text: 'Wie fühlt es sich an?',
        options: {
          judged: 'Leute reden über mich oder urteilen über mich',
          harm: 'Jemand will mir schaden oder mich reinlegen',
          watched: 'Ich werde beobachtet oder verfolgt',
          trust: 'Ich kann gerade niemandem vertrauen',
        },
      },
      belief: {
        text: 'Wie überzeugt bist du gerade?',
        options: {
          insight: 'Ein Teil von mir denkt, es könnte mein Kopf sein',
          real: 'Es fühlt sich sehr echt an',
          danger: 'Ich habe Angst um meine Sicherheit',
        },
      },
    },
  },
  techparanoia: {
    label: 'Tech-Paranoia',
    blurb: 'Das Gefühl, von Geräten ausspioniert, gehackt oder getrackt zu werden. Manche Tech-Sorgen sind realistisch, darum hilft es, zu trennen, was du prüfen kannst und was nicht.',
    commonIn: ['Angststörungen', 'Zwangsstörung', 'Paranoia', 'Autismus', 'ADHS'],
    questions: {
      what: {
        text: 'Worum geht die Angst?',
        options: {
          listening: 'Mein Handy oder Computer hört mit oder beobachtet mich',
          hacked: 'Meine Konten oder Geräte sind gehackt',
          ai: 'KI oder Algorithmen wissen oder steuern zu viel',
          checking: 'Ich prüfe ständig Einstellungen und kann nicht aufhören',
        },
      },
      evidence: {
        text: 'Gibt es konkrete Hinweise, etwa eine seltsame Login-Warnung oder eine unbekannte Abbuchung?',
        options: { yes: 'Ja, es ist etwas Konkretes passiert', no: 'Nein, es ist eher ein Gefühl' },
      },
    },
  },
  social: {
    label: 'Soziale Angst',
    blurb: 'Die Angst, bewertet zu werden, gehört zu den häufigsten menschlichen Ängsten. Andere bemerken viel weniger, als unser Gehirn uns erzählt.',
    commonIn: ['Soziale Angststörung', 'Autismus', 'ADHS', 'Depression'],
    questions: {
      when: {
        text: 'Wann passiert es?',
        options: {
          before: 'Vor einer sozialen Situation',
          during: 'Gerade jetzt, unter Leuten',
          after: 'Danach, ich spiele ab, was ich gesagt habe',
        },
      },
      scary: {
        text: 'Was ist das Schlimmste daran?',
        options: {
          judged: 'Dumm dazustehen oder bewertet zu werden',
          symptoms: 'Rot werden, zittern oder dass man meine Nervosität sieht',
          words: 'Nicht zu wissen, was ich sagen soll',
        },
      },
    },
  },
  intrusive: {
    label: 'Aufdringliche Gedanken',
    blurb: 'Ungewollte, verstörende Gedanken tauchen bei fast allen Menschen auf. Einen Gedanken zu haben heisst nicht, dass du ihn willst oder danach handelst.',
    commonIn: ['Zwangsstörung', 'Angststörungen', 'Nach der Geburt', 'PTBS', 'ADHS'],
    questions: {
      type: {
        text: 'Was für Gedanken?',
        options: {
          harm: 'Gewalttätige oder schädliche Gedanken, die ich nicht will',
          ritual: 'Etwas Schlimmes passiert, wenn ich nicht X tue',
          taboo: 'Sexuelle, religiöse oder tabuisierte Gedanken, die mich belasten',
          doubt: '«Was wäre, wenn»-Zweifel, die ich nicht klären kann',
        },
      },
      urge: {
        text: 'Spürst du den Drang, etwas zu kontrollieren, zu reparieren, zu beichten oder zu neutralisieren?',
        options: { yes: 'Ja, stark', no: 'Nein, ich will nur, dass die Gedanken weggehen' },
      },
    },
  },
  health: {
    label: 'Gesundheitsangst',
    blurb: 'Wenn du ängstlich bist, sucht das Gehirn den Körper nach Gefahr ab und findet Empfindungen, die schon immer da waren.',
    commonIn: ['Krankheitsangst', 'Panikstörung', 'Zwangsstörung', 'Autismus'],
    questions: {
      what: {
        text: 'Was ist los?',
        options: {
          googling: 'Ich google ständig Symptome',
          scanning: 'Ich bemerke ständig ein Gefühl in meinem Körper',
          illness: 'Ich habe Angst, ernsthaft krank zu sein',
        },
      },
      checked: {
        text: 'Hat sich eine Ärztin oder ein Arzt das angeschaut?',
        options: { yes: 'Ja, und es hiess, alles ist in Ordnung', no: 'Nein, oder es ist neu oder wird schlimmer' },
      },
    },
  },
  shaking: {
    label: 'Inneres Zittern / Unruhe',
    blurb: 'Dieses summende, vibrierende Gefühl im Inneren ist oft überschüssige Stressenergie. Der Körper beruhigt sich meist, wenn diese Energie genutzt oder losgelassen wird.',
    commonIn: ['Angststörungen', 'ADHS', 'Autismus', 'PTBS', 'BPS'],
    questions: {
      what: {
        text: 'Wie fühlt es sich an?',
        options: {
          buzz: 'Es summt innerlich, ich kann nicht stillsitzen',
          tense: 'Zittern, angespannte Muskeln',
          wired: 'Zappelig nach Koffein oder wenig Schlaf',
          anxious: 'Es kommt zusammen mit ängstlichen Gedanken',
        },
      },
    },
  },
  sleep: {
    label: 'Kann nicht schlafen',
    blurb: 'Wach zu liegen ist frustrierend. Sich mehr anzustrengen, um zu schlafen, geht meist nach hinten los. Diese Übungen wirken durch Loslassen, nicht durch Erzwingen.',
    commonIn: ['Schlafstörung', 'ADHS', 'Autismus', 'Angst', 'Depression', 'Bipolare Störung'],
    questions: {
      why: {
        text: 'Was hält dich wach?',
        options: {
          racing: 'Mein Kopf rast',
          tomorrow: 'Sorgen wegen morgen',
          body: 'Mein Körper ist aufgedreht oder unruhig',
          long: 'Ich bin schon lange wach und frustriert',
        },
      },
      days: {
        text: 'Schläfst du seit mehreren Tagen sehr wenig, fühlst dich aber ungewöhnlich voller Energie?',
        options: { no: 'Nein', yes: 'Ja' },
      },
    },
  },
  sensory: {
    label: 'Reizüberflutung',
    blurb: 'Wenn mehr Input kommt, als dein Nervensystem verarbeiten kann, ist das keine Schwäche. Es ist ein Signal, den Input herunterzudrehen.',
    commonIn: ['Autismus', 'ADHS', 'PTBS', 'Wahrnehmungsbesonderheiten', 'Migräne'],
    questions: {
      what: {
        text: 'Was ist zu viel?',
        options: {
          sound: 'Lärm und Geräusche',
          light: 'Licht, Bildschirme, visuelles Durcheinander',
          people: 'Zu viele Menschen oder Anforderungen',
          everything: 'Alles auf einmal, ich bin kurz vor einem Meltdown oder Shutdown',
        },
      },
    },
  },
  dissociation: {
    label: 'Unwirklich / losgelöst',
    blurb: 'Sich unwirklich oder weit weg zu fühlen ist der Schutz-Dimmer deines Gehirns unter Stress. Das ist verunsichernd, aber nicht gefährlich.',
    commonIn: ['PTBS', 'BPS', 'Angst', 'Depersonalisation/Derealisation', 'Autismus'],
    questions: {
      what: {
        text: 'Wie ist es?',
        options: {
          world: 'Die Welt wirkt neblig, flach oder unwirklich',
          body: 'Ich fühle mich von meinem Körper losgelöst',
          numb: 'Taub und weit weg nach Stress',
          time: 'Ich drifte weg oder verliere Zeit',
        },
      },
    },
  },
  burnout: {
    label: 'Burnout / ausgelaugt',
    blurb: 'Burnout entsteht, wenn die Anforderungen zu lange grösser sind als deine Kräfte. Erholung braucht weniger Input, nicht mehr Anstrengung.',
    commonIn: ['Autistisches Burnout', 'ADHS', 'Depression', 'Chronischer Stress'],
    questions: {
      cause: {
        text: 'Was hat dich am meisten ausgelaugt?',
        options: {
          masking: 'Masking, unter Leuten sein, so tun, als wäre alles gut',
          demands: 'Zu viele Anforderungen und Verpflichtungen',
          skills: 'Ich verliere Fähigkeiten, die ich sonst habe',
          rest: 'Ich bin erschöpft, kann mich aber nicht ausruhen',
        },
      },
    },
  },
  low: {
    label: 'Niedergeschlagen / traurig',
    blurb: 'Eine gedrückte Stimmung macht alles schwerer, auch die Dinge, die helfen. Klein ist heute genau die richtige Grösse.',
    commonIn: ['Depression', 'Bipolare Störung', 'ADHS', 'Autismus', 'BPS'],
    questions: {
      what: {
        text: 'Was passt am besten?',
        options: {
          energy: 'Keine Energie oder Motivation',
          critic: 'Harte Gedanken über mich selbst',
          loss: 'Traurig über etwas, das passiert ist',
          anhedonia: 'Nichts macht Freude',
        },
      },
      safety: SAFETY,
    },
  },
  empty: {
    label: 'Leer / taub',
    blurb: 'Chronische Leere ist eines der am schwersten beschreibbaren Gefühle. Sie wird oft weicher durch Verbindung und kleine, sinnvolle Handlungen.',
    commonIn: ['BPS', 'Depression', 'PTBS', 'Autismus'],
    questions: {
      what: {
        text: 'Wie ist es?',
        options: {
          hollow: 'Hohl im Inneren',
          pointless: 'Nichts scheint wichtig zu sein',
          urge: 'Ich will etwas Riskantes tun, nur um etwas zu fühlen',
          disconnected: 'Abgeschnitten von anderen Menschen',
        },
      },
      safety: SAFETY,
    },
  },
  hopeless: {
    label: 'Hoffnungslos',
    blurb: 'Hoffnungslosigkeit ist ein Symptom, das über die Zukunft lügt. Sie ist ein Grund, Hilfe zu holen, nicht aufzugeben.',
    commonIn: ['Depression', 'BPS', 'Bipolare Störung', 'PTBS'],
    questions: {
      safety: SAFETY,
      about: {
        text: 'Hoffnungslos in Bezug auf was?',
        options: {
          future: 'Die Zukunft allgemein',
          self: 'Dass ich mich nie ändern oder es mir nie besser gehen wird',
          situation: 'Eine bestimmte Situation',
        },
      },
    },
  },
  shame: {
    label: 'Scham / Selbsthass',
    blurb: 'Scham sagt «Ich bin schlecht», nicht «Ich habe etwas Schlechtes getan». Sie schrumpft, wenn sie auf Verständnis statt auf noch mehr Kritik trifft.',
    commonIn: ['BPS', 'ADHS', 'Autismus', 'Depression', 'PTBS', 'Soziale Angst'],
    questions: {
      what: {
        text: 'Woher kommt sie?',
        options: {
          embarrassing: 'Ich habe etwas Peinliches getan',
          broken: 'Ich fühle mich grundsätzlich schlecht oder kaputt',
          critic: 'Mein innerer Kritiker hört nicht auf',
          neuro: 'Scham wegen meines Gehirns, meiner Diagnose oder meiner Bedürfnisse',
        },
      },
    },
  },
  guilt: {
    label: 'Schuldgefühle',
    blurb: 'Schuld kann nützlich sein, wenn sie auf etwas zeigt, das du wiedergutmachen kannst, und nutzlos, wenn sie nur Strafe ist.',
    commonIn: ['Depression', 'Zwangsstörung', 'BPS', 'ADHS', 'Autismus'],
    questions: {
      what: {
        text: 'Worum geht es bei den Schuldgefühlen?',
        options: {
          hurt: 'Ich habe jemanden verletzt',
          enough: 'Ich habe nicht genug getan',
          responsible: 'Ich fühle mich für die Gefühle anderer verantwortlich',
          rest: 'Ich fühle mich schuldig, wenn ich mich ausruhe',
        },
      },
    },
  },
  lonely: {
    label: 'Einsam',
    blurb: 'Einsamkeit ist ein Signal, wie Hunger, dass du Verbindung brauchst. Sie ist kein Beweis, dass du nicht liebenswert bist.',
    commonIn: ['Depression', 'Autismus', 'ADHS', 'BPS', 'Soziale Angst'],
    questions: {
      what: {
        text: 'Welche Art von Einsamkeit?',
        options: {
          none: 'Niemand zum Reden',
          misunderstood: 'Unter Leuten, aber nicht verstanden',
          unwanted: 'Ich glaube, andere wollen mich nicht dabeihaben',
          miss: 'Ich vermisse eine bestimmte Person',
        },
      },
    },
  },
  rejection: {
    label: 'Abgelehnt / kritisiert',
    blurb: 'Für viele Gehirne mit ADHS oder BPS trifft Ablehnung mit körperlicher Wucht. Man nennt das oft Zurückweisungsempfindlichkeit. Der Schmerz ist echt, und er geht vorbei.',
    commonIn: ['ADHS (Zurückweisungsempfindlichkeit)', 'BPS', 'Autismus', 'Depression', 'Soziale Angst'],
    questions: {
      what: {
        text: 'Was ist passiert?',
        options: {
          criticized: 'Jemand hat mich kritisiert',
          ignored: 'Ich wurde ausgeschlossen oder ignoriert',
          upset: 'Ich glaube, jemand ist sauer auf mich',
          small: 'Etwas Kleines hat mich sehr hart getroffen',
        },
      },
    },
  },
  abandonment: {
    label: 'Verlassensangst',
    blurb: 'Die panische Angst, dass jemand geht, kann dich überfluten. Diese Flut ist ein Gefühl aus der Vergangenheit, das sich in der Gegenwart zeigt.',
    commonIn: ['BPS', 'Bindungstrauma', 'ADHS', 'Angst'],
    questions: {
      what: {
        text: 'Was hat es ausgelöst?',
        options: {
          reply: 'Die Person hat nicht geantwortet',
          distant: 'Die Person wirkt distanziert oder anders',
          argue: 'Wir hatten Streit',
          urge: 'Ich will ihr immer wieder schreiben',
        },
      },
    },
  },
  anger: {
    label: 'Wütend / Zorn',
    blurb: 'Wut ist Energie, die sagt: «Etwas stimmt nicht.» Du entscheidest, was du mit dieser Energie machst.',
    commonIn: ['BPS', 'ADHS', 'Autismus', 'PTBS', 'Depression'],
    questions: {
      what: {
        text: 'Was steckt dahinter?',
        options: {
          unfair: 'Jemand hat mich unfair behandelt',
          self: 'Ich bin frustriert über mich selbst',
          irritated: 'Alles nervt mich',
          urge: 'Ich will ausrasten oder etwas sagen, das ich bereuen werde',
        },
      },
    },
  },
  storm: {
    label: 'Gefühlssturm',
    blurb: 'Gefühle, die schnell wechseln und hart treffen. Stürme fühlen sich endlos an, solange man drin ist, aber sie ziehen vorbei.',
    commonIn: ['BPS', 'ADHS (emotionale Dysregulation)', 'Bipolare Störung', 'PTBS', 'Autismus'],
    questions: {
      what: {
        text: 'Was passt am besten?',
        options: {
          switching: 'Meine Gefühle wechseln schnell',
          impulse: 'Ich will etwas Impulsives tun',
          control: 'Ich fühle mich ausser Kontrolle',
          triggered: 'Jemand hat mich getriggert',
        },
      },
      safety: SAFETY,
    },
  },
  pleasing: {
    label: 'Es allen recht machen / kann nicht Nein sagen',
    blurb: 'Sich zu verbiegen, damit alle zufrieden sind, ist erschöpfend. Du darfst Grenzen haben.',
    commonIn: ['Autismus (Masking)', 'ADHS', 'BPS', 'Co-Abhängigkeit', 'Trauma'],
    questions: {
      what: {
        text: 'Was passiert gerade?',
        options: {
          no: 'Ich kann nicht Nein sagen',
          liked: 'Ich brauche es, dass mich alle mögen',
          disappointed: 'Ich habe Angst, jemanden enttäuscht zu haben',
        },
      },
    },
  },
  paralysis: {
    label: 'Komme nicht in die Gänge',
    blurb: 'Aufgabenlähmung ist keine Faulheit. Sie kommt oft von einem überlasteten Gehirn oder der Angst, es falsch zu machen.',
    commonIn: ['ADHS', 'Autismus', 'Depression', 'Angst'],
    questions: {
      why: {
        text: 'Was steht im Weg?',
        options: {
          big: 'Die Aufgabe fühlt sich zu gross an',
          boring: 'Sie ist langweilig und mein Gehirn springt nicht an',
          wrong: 'Ich habe Angst, es falsch zu machen',
          frozen: 'Ich will ja, aber mein Körper bewegt sich nicht',
        },
      },
    },
  },
  overwhelm: {
    label: 'Überfordert – zu viel',
    blurb: 'Wenn alles dringend wirkt, wird nichts erledigt. Es aus dem Kopf zu bekommen, ist der erste Schritt.',
    commonIn: ['ADHS', 'Autismus', 'Angst', 'Burnout', 'BPS'],
    questions: {
      what: {
        text: 'Zu viel wovon?',
        options: {
          tasks: 'Zu viele Aufgaben',
          info: 'Zu viele Informationen oder Nachrichten',
          emotions: 'Zu viele Gefühle auf einmal',
          people: 'Zu viele Menschen, die etwas von mir brauchen',
        },
      },
    },
  },
  racing: {
    label: 'Rasende Gedanken',
    blurb: 'Ein voller Kopf kann sich anfühlen wie 20 Browser-Tabs, die gleichzeitig Musik spielen. Du musst nicht alle schliessen, nur die Lautstärke runterdrehen.',
    commonIn: ['ADHS', 'Angst', 'Bipolare Störung', 'BPS', 'Zwangsstörung'],
    questions: {
      what: {
        text: 'Wie sind die Gedanken?',
        options: {
          jumping: 'Sie springen von Thema zu Thema',
          loop: 'Dieselbe Sorge in Dauerschleife',
          ideas: 'Ideen, die ich nicht vergessen will',
          focus: 'Ich kann mich auf nichts konzentrieren',
        },
      },
      days: {
        text: 'Schläfst du seit Tagen sehr wenig und fühlst dich ungewöhnlich energiegeladen oder unbesiegbar?',
        options: { no: 'Nein', yes: 'Ja' },
      },
    },
  },
  rumination: {
    label: 'Grübeln / zerdenken',
    blurb: 'Grübeln fühlt sich wie Problemlösen an, hält dich aber meist fest. Der Trick ist, zu ändern, wie du denkst, nicht nur was.',
    commonIn: ['Depression', 'Angst', 'ADHS', 'Autismus', 'Zwangsstörung', 'BPS'],
    questions: {
      what: {
        text: 'Was spielst du immer wieder ab?',
        options: {
          conversation: 'Ein Gespräch oder einen sozialen Moment',
          mistake: 'Einen Fehler, den ich gemacht habe',
          why: 'Warum ich mich so fühle oder warum ich so bin',
          whatif: 'Was hätte sein können',
        },
      },
    },
  },
  fomo: {
    label: 'FOMO / Vergleichen',
    blurb: 'Feeds zeigen die Highlights der anderen. FOMO ist ein Signal über deine eigenen Bedürfnisse, kein Beweis, dass du hinterherhinkst.',
    commonIn: ['ADHS', 'Soziale Angst', 'Depression', 'BPS'],
    questions: {
      what: {
        text: 'Was löst es aus?',
        options: {
          fun: 'Andere haben mehr Spass als ich',
          ahead: 'Andere sind im Leben weiter',
          scrolling: 'Ich scrolle und kann nicht aufhören',
          opportunity: 'Ich habe Angst, eine Chance zu verpassen',
        },
      },
    },
  },
  perfectionism: {
    label: 'Nicht gut genug / Hochstapler-Gefühl',
    blurb: 'Die meisten Leistungsstarken fühlen sich irgendwann wie Hochstapler. Dein Wert ist nicht deine Leistung.',
    commonIn: ['ADHS', 'Autismus', 'Angst', 'Zwangsstörung', 'Essstörungen', 'Depression'],
    questions: {
      what: {
        text: 'Was passt am besten?',
        options: {
          impostor: 'Man wird merken, dass ich nicht gut genug bin',
          perfect: 'Es muss perfekt sein, sonst ist es wertlos',
          compare: 'Alle anderen sind besser als ich',
          mistake: 'Ich mache mich wegen eines Fehlers ständig fertig',
        },
      },
    },
  },
  crisis: {
    label: 'Ich bin in einer Krise / könnte mir etwas antun',
    blurb: 'Du verdienst jetzt Unterstützung. Bitte wende dich an einen echten Menschen.',
    commonIn: [],
    questions: {},
  },
};

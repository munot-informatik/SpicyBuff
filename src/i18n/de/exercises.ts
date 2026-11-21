/**
 * German overlay for exercises. Each `steps` entry mirrors the English step at
 * the same index (a test enforces equal counts of steps, fields and items).
 */
export interface StepTr {
  title?: string;
  body?: string;
  fields?: string[];
  items?: string[];
}
export interface ExerciseTr {
  title: string;
  summary: string;
  why: string;
  caution?: string;
  /** Our own German translation of the English book quote. */
  quote?: string;
  steps: StepTr[];
}

const HEART_CAUTION =
  'Lass das weg, wenn du eine Herzerkrankung, einen sehr tiefen Puls, Betablocker oder eine Essstörung hast, ausser eine Ärztin oder ein Arzt hat es dir erlaubt.';

export const DE_EXERCISES: Record<string, ExerciseTr> = {
  'cyclic-sigh': {
    title: 'Zyklisches Seufzen',
    summary: 'Zweimal kurz durch die Nase einatmen, einmal lang ausseufzen. Der schnellste bekannte Weg, runterzufahren.',
    why: 'Ein langes Ausatmen aktiviert die parasympathische «Bremse» deines Nervensystems. Das doppelte Einatmen öffnet winzige Lungenbläschen wieder, so fällt das lange Ausatmen leichter.',
    steps: [
      { body: 'Sitz oder steh einfach so, wie du gerade bist. Du kannst das mit geschlossenem Mund machen, niemand merkt es.' },
      { body: 'Durch die Nase einatmen, dann noch einen kleinen Schluck Luft obendrauf. Alles langsam durch Mund oder Nase rauslassen.' },
      { body: 'Achte auf Schultern und Kiefer. Hat sich etwas gelockert, auch nur 5 %? Mach gern noch eine Runde.' },
    ],
  },
  'resonance-breathing': {
    title: 'Langsam atmen: 4 ein, 6 aus',
    summary: 'Atme etwa sechsmal pro Minute. In diesem Rhythmus ist der Beruhigungsreflex deines Körpers am stärksten.',
    why: 'Bei etwa 6 Atemzügen pro Minute schwingen Herzschlag und Atmung im Takt (Resonanz). Das erhöht die Herzratenvariabilität, ein Zeichen für Ruhe und flexible Stressreaktionen.',
    steps: [
      { body: 'Lass den Bauch weich werden. Atme durch die Nase, wenn es geht. Nichts erzwingen, folge einfach dem Kreis.' },
      {},
      { body: 'Bewerte deine Anspannung jetzt von 0 bis 10. Vergleiche mit vorher. Auch ein kleiner Rückgang zählt.' },
    ],
  },
  'box-breathing': {
    title: 'Box-Atmung',
    summary: 'Einatmen, halten, ausatmen, halten, je vier Sekunden. Ein fester Rhythmus, der einem vollen Kopf etwas zum Zählen gibt.',
    why: 'Zählen gibt deiner Aufmerksamkeit eine Aufgabe, und langsameres Atmen senkt die Erregung. In einer Studie verbesserte Box-Atmung die Stimmung, etwas weniger als zyklisches Seufzen.',
    steps: [
      { body: 'Zeichne in Gedanken ein Quadrat. Jede Seite dauert vier Sekunden. Wenn das Halten unangenehm ist, halte kürzer.' },
      {},
    ],
  },
  pmr: {
    title: 'Progressive Muskelentspannung',
    summary: 'Spanne jede Muskelgruppe 5 Sekunden an und lass dann los. So lernt dein Körper den Unterschied zwischen angespannt und entspannt.',
    why: 'Muskeln bewusst anspannen und lösen senkt die allgemeine Muskelspannung und Erregung. In Meta-Analysen hat Entspannungstraining eine mittlere bis grosse Wirkung auf Angst.',
    caution: 'Geh behutsam mit Verletzungen oder schmerzenden Stellen um.',
    steps: [
      { body: 'Leg oder setz dich bequem hin. Für jeden Bereich: etwa 70 % stark für 5 Sekunden anspannen, dann 10 Sekunden ganz loslassen und den Unterschied spüren.' },
      {
        title: 'Geh deinen Körper durch',
        items: [
          'Hände: Fäuste machen',
          'Arme: anwinkeln und Bizeps anspannen',
          'Schultern: zu den Ohren hochziehen',
          'Gesicht: Augen und Kiefer zusammenkneifen',
          'Bauch: Bauchmuskeln anspannen',
          'Beine: Oberschenkel zusammendrücken',
          'Füsse: Zehen einrollen',
        ],
      },
      { body: 'Zum Schluss drei langsame Atemzüge. Such nach Stellen, die noch fest sind, und lass sie noch einmal los.' },
    ],
  },
  'shake-out': {
    title: 'Schüttel es ab',
    summary: 'Schüttle eine Minute lang Hände, Arme und Beine, um die summende Stressenergie loszuwerden.',
    why: 'Stresshormone bereiten den Körper auf Bewegung vor. Bewegung verbraucht diese Energie. Schütteln selbst ist wenig erforscht, aber kurze Bewegungseinheiten senken Angst zuverlässig.',
    steps: [
      { body: 'Steh auf, wenn du kannst. Schüttle locker die Hände, als würdest du Wasser abschütteln.' },
      { body: 'Lass das Schütteln in Arme, Schultern und dann Beine wandern. Federe auf den Fersen. Es darf albern aussehen.' },
      { body: 'Hör auf und steh still. Spür das Kribbeln. Ein langer Seufzer aus.' },
    ],
  },
  'panic-wave': {
    title: 'Reite die Welle: Panik ist keine Gefahr',
    summary: 'Benenne die Symptome als harmlosen Fehlalarm und lass die Welle steigen und fallen, ohne gegen sie zu kämpfen.',
    why: 'Im kognitiven Modell der Panik schaukelt sich eine Attacke hoch, wenn normale Körperempfindungen (schneller Puls, Schwindel) als Katastrophe gedeutet werden. Wer sie als «Adrenalin, keine Gefahr» liest, unterbricht den Kreislauf. KVT auf dieser Grundlage hat die beständigste Evidenz bei Panikstörung.',
    caution: 'Wenn das deine erste Attacke ist oder es sich anders anfühlt (Brustschmerzen, Ohnmacht), hol medizinische Hilfe.',
    quote: 'Deine Gefühle sind keine Tatsachen!',
    steps: [
      { title: 'Benenne es', body: 'Sag dir: «Das ist eine Panikattacke. Das ist Adrenalin. Es fühlt sich furchtbar an, aber es ist nicht gefährlich, und es geht vorbei.»' },
      {
        title: 'Deute neu, was du spürst',
        body: 'Hak ab, was du bemerkst. Für alles gibt es eine harmlose Erklärung.',
        items: [
          'Herzrasen: Dein Herz pumpt extra Blut in die Muskeln. Es ist dafür gebaut.',
          'Atemnot: Du bekommst eigentlich genug Luft. Schnelles Atmen lässt es anders wirken.',
          'Schwindel oder Unwirklichkeit: eine kurzfristige Veränderung des CO₂ im Blut. Du wirst nicht ohnmächtig.',
          'Kribbeln in den Händen: ebenfalls vom schnellen Atmen. Harmlos.',
          'Angst, verrückt zu werden: Panik wird nie zu einer Psychose.',
        ],
      },
      { title: 'Nicht kämpfen, treiben lassen', body: 'Statt sie wegzudrücken, stell dir vor, du treibst oben auf der Welle. Lass sie ihren Höhepunkt erreichen. Die meisten Attacken erreichen ihn innerhalb von 10 Minuten.' },
      { body: 'Atme langsam, mit langem Ausatmen. Du versuchst nicht, die Panik zu stoppen, du leistest dir nur Gesellschaft, bis sie vorbeigeht.' },
    ],
  },
  'deep-pressure': {
    title: 'Tiefendruck & schwere Arbeit',
    summary: 'Fester, gleichmässiger Druck auf den Körper (Gewichtsdecke, feste Selbstumarmung, gegen eine Wand drücken), um ein aufgewühltes Nervensystem zu beruhigen.',
    why: 'Viele autistische Menschen und Menschen mit ADHS empfinden Tiefendruck als beruhigend. In der Ergotherapie nennt man das propriozeptiven Input. In einer randomisierten Studie verringerten Gewichtsdecken Schlafstörungen bei Menschen mit ADHS, Angst und Depression.',
    steps: [
      {
        title: 'Wähle ein oder zwei',
        items: [
          'Gewichtsdecke oder ein Stapel schwerer Decken',
          'Wickle dich fest in eine Decke ein, wie ein Burrito',
          'Feste Selbstumarmung: Arme kreuzen und die Schultern drücken',
          'Wand-Liegestütze: 10 Sekunden fest gegen eine Wand drücken, 5-mal',
          'Leg dich auf den Bauch auf den Boden und spür, wie dein Gewicht einsinkt',
          'Trag etwas Schweres, etwa einen Wäschekorb oder Wasserflaschen',
        ],
      },
      { body: 'Bleib beim Druck. Lass deinen Atem von selbst langsamer werden.' },
    ],
  },
  'tipp-cold': {
    title: 'Kaltwasser-Reset (TIPP: Temperatur)',
    summary: 'Kaltes Wasser im Gesicht für 15–30 Sekunden löst den Tauchreflex aus und verlangsamt dein Herz.',
    why: 'Kälte im Gesicht (besonders um Augen und Wangen) löst den Tauchreflex der Säugetiere aus. Das Herz schlägt langsamer, die Erregung sinkt innerhalb von Sekunden. DBT lehrt es als Krisen-Skill, wenn Gefühle zu stark zum Denken sind. Der Reflex ist gut belegt, aber Studien, die ihn als emotionalen Skill testen, fehlen noch.',
    caution: HEART_CAUTION,
    steps: [
      { body: 'Füll eine Schüssel oder das Waschbecken mit kaltem Wasser, mit Eis, wenn du hast. Oder nimm ein Kühlpack oder eine Tüte Tiefkühlerbsen in einem Tuch.' },
      { body: 'Beug dich vor, halt die Luft an und tauch dein Gesicht ins Wasser (oder halt das Kühlpack über Augen und Wangen).' },
      { body: 'Halte 15–30 Sekunden. Komm hoch, wann immer du musst.' },
      { body: 'Jetzt langsam ausatmen. Spür, wie dein Herz langsamer wird.' },
    ],
  },
  'tipp-exercise': {
    title: 'Auspowern (TIPP: Intensive Bewegung)',
    summary: 'Ein paar Minuten harte Bewegung, um den Treibstoff des Gefühls zu verbrauchen, bevor er dich verbraucht.',
    why: 'Starke Gefühle bereiten den Körper aufs Handeln vor. Intensive Bewegung verbraucht diese Erregung. Kurze, kräftige Aktivität hat solide Evidenz für weniger Angst und Belastung.',
    caution: 'Beweg dich nur so stark, wie es dein Körper sicher zulässt.',
    steps: [
      { title: 'Wähle eins', items: ['Schnell Treppen steigen', 'Hampelmänner', 'Sprint auf der Stelle', 'Liegestütze oder Kniebeugen bis zur Ermüdung', 'Zu einem lauten Song wild tanzen'] },
      { body: 'Geh so hart, wie es für dich sicher ist. Bring deinen Puls hoch.' },
      { body: 'Stopp, Hände auf die Knie und lang ausatmen. Bewerte dein Gefühl von 0 bis 10. Ist es tiefer?' },
    ],
  },
  'stop-skill': {
    title: 'STOP-Skill',
    summary: 'Stopp. Tritt einen Schritt zurück. Beobachte. Handle achtsam weiter. Eine einminütige Notbremse für Impulse.',
    why: 'Starke Gefühle drängen uns, sofort zu handeln. STOP schafft bewusst eine Lücke zwischen Impuls und Handlung. DBT, woher der Skill stammt, ist die am besten erforschte Behandlung bei BPS.',
    steps: [
      { title: 'S – Stopp', body: 'Erstarre. Reagiere nicht. Sende, sag oder tu in den nächsten 60 Sekunden nichts. Dein Gefühl hat nicht die Kontrolle über deine Hände.' },
      { title: 'T – Tritt zurück', body: 'Tritt wirklich einen Schritt zurück, leg das Handy weg oder atme einmal lang aus.' },
      { title: 'O – Beobachte', body: 'Was passiert in dir und um dich herum? Was fühle ich? Was will der Impuls, dass ich tue?', fields: ['Ich fühle…', 'Der Impuls will…'] },
      { title: 'P – Achtsam weitermachen', body: 'Frag dich: Welche Handlung werde ich morgen gut finden?', fields: ['Was ich stattdessen tue…'] },
    ],
  },
  'check-facts': {
    title: 'Fakten prüfen',
    summary: 'Frag dich, ob dein Gefühl zu den tatsächlichen Fakten passt oder zur Geschichte, die dein Gehirn dazuerfunden hat.',
    why: 'Gefühle reagieren oft auf unsere Deutungen, nicht auf Ereignisse. Fakten prüfen ist ein DBT-Skill der Emotionsregulation. Passt das Gefühl zu den Fakten, wird das Problem gelöst. Passt es nicht, sinkt die Intensität meist.',
    steps: [
      {
        body: 'Antworte so nüchtern, wie es eine Kamera sehen würde.',
        fields: [
          'Was genau ist passiert? (nur Fakten, z. B. «Die Person hat seit 3 Stunden nicht geantwortet»)',
          'Was nehme ich darüber an?',
          'Welche 2 anderen Erklärungen wären möglich?',
          'Passen mein Gefühl und seine Stärke zu den Fakten? (ja / teilweise / nein)',
        ],
      },
      { body: 'Wenn es passt: Was ist eine hilfreiche Sache, die du gegen die Situation tun kannst? Wenn nicht: Sag dem Gefühl, dass es leiser werden darf. Dann probier «Entgegengesetztes Handeln».' },
    ],
  },
  'opposite-action': {
    title: 'Entgegengesetztes Handeln',
    summary: 'Wenn ein Gefühl nicht zu den Fakten passt, tu das Gegenteil von dem, wozu es drängt, und zwar ganz.',
    why: 'Jedes Gefühl kommt mit einem Handlungsdrang. Scham sagt «versteck dich», Angst sagt «weich aus», Wut sagt «greif an». Dem Gegenteil eines unbegründeten Drangs zu folgen, schwächt das Gefühl mit der Zeit, dasselbe Prinzip wie bei der Expositionstherapie.',
    steps: [
      {
        title: 'Finde dein Gefühl und sein Gegenteil',
        items: [
          'Angst → nähere dich dem, was du vermeidest (in einem kleinen Schritt)',
          'Scham → richte dich auf, halte Blickkontakt, versteck dich nicht (wenn du deine eigenen Werte nicht verletzt hast)',
          'Traurigkeit → werde aktiv, geh zu Menschen oder ins Licht',
          'Wut → geh sanft auf Abstand, tu etwas Freundliches oder sprich leise',
          'Verlassensangst → statt nochmal zu schreiben, tu etwas Fürsorgliches für dich und warte',
        ],
      },
      { body: 'Wähle eine entgegengesetzte Handlung, die du in den nächsten 10 Minuten tun kannst.', fields: ['Mein Gefühl und sein Drang…', 'Meine entgegengesetzte Handlung…'] },
      { body: 'Mach es ganz: mit Haltung, Gesicht und Stimme. Achte darauf, was danach mit dem Gefühl passiert.' },
    ],
  },
  'urge-surfing': {
    title: 'Urge Surfing (auf dem Drang surfen)',
    summary: 'Beobachte, wie ein Drang steigt, seinen Höhepunkt erreicht und abflaut wie eine Welle, ohne ihm zu folgen.',
    why: 'Ein Drang fühlt sich an, als würde er ewig wachsen, wenn wir nicht handeln, aber er erreicht einen Höhepunkt und flaut ab, meist innerhalb von Minuten. Jedes Mal, wenn du ihn aussurfst, wird er beim nächsten Mal etwas schwächer. Achtsames Annehmen von Impulsen ist Teil der DBT und der achtsamkeitsbasierten Rückfallprävention.',
    steps: [
      { body: 'Benenne den Drang: «Ich habe den Drang zu…» (schreiben, kontrollieren, scrollen, etwas Riskantes tun).' },
      { body: 'Finde, wo du ihn im Körper spürst: Brust, Hände, Bauch? Bewerte ihn von 0 bis 10.' },
      { body: 'Stell dir den Drang als Welle vor. Atme und reite sie. Bewerte ihn etwa jede Minute neu. Beobachte, wie sich die Zahl verändert.' },
      { body: 'Die Welle ist vorbei oder kleiner geworden, und du musstest ihr nicht gehorchen. Das ist ein echter Erfolg.' },
    ],
  },
  'self-soothe': {
    title: 'Sich selbst beruhigen mit allen fünf Sinnen',
    summary: 'Behandle dich so, wie du ein aufgewühltes Kind trösten würdest: eine beruhigende Sache für jeden Sinn.',
    why: 'Beruhigende Sinneseindrücke beruhigen das Bedrohungssystem. In der DBT ist das ein Skill der Stresstoleranz: Du kommst durch den Moment, ohne ihn schlimmer zu machen.',
    steps: [
      {
        title: 'Wähle für möglichst viele Sinne etwas aus',
        items: [
          'Sehen: sanftes Licht, ein Lieblingsbild, der Himmel',
          'Hören: ein ruhiger Song, Regengeräusche oder Stille mit Ohrstöpseln',
          'Riechen: Tee, eine Kerze, Seife, frische Luft',
          'Schmecken: etwas Warmes, etwas Süsses, ein Pfefferminz',
          'Fühlen: eine weiche Decke, eine warme Dusche, ein Haustier, ein Hoodie',
        ],
      },
      { body: 'Bleib bei den beruhigenden Eindrücken. Du musst gerade nichts reparieren.' },
    ],
  },
  'radical-acceptance': {
    title: 'Radikale Akzeptanz',
    summary: 'Hör auf, gegen das zu kämpfen, was schon passiert ist. Akzeptieren heisst nicht gutheissen. Es setzt Energie für das Nächste frei.',
    why: 'Schmerz plus Nicht-Akzeptieren ergibt Leiden. Radikale Akzeptanz ist ein zentraler DBT-Skill der Stresstoleranz: Du hörst auf, gegen die Realität zu kämpfen, damit du auf sie reagieren kannst.',
    steps: [
      { body: 'Benenne, wogegen du kämpfst.', fields: ['Was passiert ist, das ich mir anders wünsche…'] },
      { body: 'Sag langsam, vielleicht laut: «Es ist, wie es ist. Ich muss es nicht mögen. Es ist passiert, und Dagegen-Ankämpfen macht es nicht ungeschehen.»' },
      { body: 'Spür deinen Körper. Entspann dein Gesicht, öffne die Handflächen auf dem Schoss (in der DBT «bereitwillige Hände» genannt).' },
      { body: 'Jetzt, wo ich es akzeptiere: Was ist eine Sache, die ich als Nächstes tun kann?', fields: ['Nächster Schritt…'] },
    ],
  },
  'grounding-54321': {
    title: '5-4-3-2-1-Erdung',
    summary: 'Nenne 5 Dinge, die du siehst, 4, die du berühren kannst, 3, die du hörst, 2, die du riechst, 1, das du schmeckst. Das holt dich zurück in den Raum.',
    why: 'Angst zieht die Aufmerksamkeit in vorgestellte Zukünfte, Dissoziation zieht sie vom Körper weg. Bewusstes Wahrnehmen der Sinne verankert die Aufmerksamkeit im Jetzt. 5-4-3-2-1 selbst wurde nicht einzeln getestet, aber Training der Gegenwartsaufmerksamkeit hat mittlere Effekte auf Angst.',
    steps: [
      { title: '5 Dinge, die du SIEHST', body: 'Schau dich um und benenne sie still, z. B. «blaue Tasse».', items: ['1', '2', '3', '4', '5'] },
      { title: '4 Dinge, die du BERÜHREN kannst', body: 'Deine Füsse auf dem Boden, Stoff, der Stuhl…', items: ['1', '2', '3', '4'] },
      { title: '3 Dinge, die du HÖRST', items: ['1', '2', '3'] },
      { title: '2 Dinge, die du RIECHST', items: ['1', '2'] },
      { title: '1 Sache, die du SCHMECKST', items: ['1'] },
      { body: 'Du bist hier, in diesem Raum, genau jetzt.' },
    ],
  },
  'name-it': {
    title: 'Benennen, um zu bändigen',
    summary: 'Fass das Gefühl in genaue Worte. Ein Gefühl zu benennen dreht den Alarm im Gehirn herunter.',
    why: 'In Bildgebungsstudien senkte das Benennen eines Gefühls («das ist Wut») die Aktivität der Amygdala, des Bedrohungsmelders im Gehirn. Es ist eines der einfachsten Regulationswerkzeuge überhaupt.',
    steps: [
      {
        title: 'Welche Wörter passen? Hak alle an, die zutreffen',
        items: [
          'Verängstigt', 'Ängstlich', 'Beschämt', 'Peinlich berührt', 'Verletzt', 'Abgelehnt', 'Wütend', 'Frustriert',
          'Eifersüchtig', 'Einsam', 'Traurig', 'Schuldig', 'Überfordert', 'Taub', 'Enttäuscht', 'Hilflos',
        ],
      },
      { body: 'Sag es dir jetzt in einem ruhigen Satz: «Ich merke, dass ich mich ___ und ___ fühle. Das ergibt gerade Sinn.»' },
    ],
  },
  'breathing-space': {
    title: '3-Minuten-Atemraum',
    summary: 'Die Kernübung der MBCT: wahrnehmen, was da ist, die Aufmerksamkeit beim Atem sammeln und dann auf den ganzen Körper weiten.',
    why: 'MBCT lehrt, aus dem Autopiloten und dem Grübeln auszusteigen. In einer Analyse gepoolter Patientendaten aus neun Studien senkte MBCT das Risiko, dass eine Depression zurückkehrt, im Vergleich zur üblichen Behandlung.',
    steps: [
      { title: '1. Gewahrsein', body: 'Welche Gedanken, Gefühle und Körperempfindungen sind gerade da? Nimm sie einfach wahr, ohne etwas zu ändern.' },
      { title: '2. Sammeln', body: 'Bring deine ganze Aufmerksamkeit zum Atem in deinem Bauch. Jedes Mal, wenn der Geist abschweift, komm sanft zurück.' },
      { title: '3. Weiten', body: 'Weite die Aufmerksamkeit auf den ganzen Körper: Haltung, Gesicht, Hände. Nimm diese weitere Wahrnehmung mit in den nächsten Moment.' },
    ],
  },
  'body-scan-sleep': {
    title: 'Body-Scan zum Einschlafen',
    summary: 'Wandere mit der Aufmerksamkeit langsam von den Zehen bis zum Kopf, ohne zu versuchen einzuschlafen.',
    why: 'Sich anzustrengen, um zu schlafen, hält das Gehirn wach. Ein Body-Scan gibt der Aufmerksamkeit eine langsame, neutrale Aufgabe und ersetzt die Anstrengung durch reines Wahrnehmen. Er ist Teil von Achtsamkeitsprogrammen, die Stress und Angst senken.',
    steps: [
      { body: 'Leg dich auf den Rücken oder die Seite. Sag dir: «Ich versuche nicht zu schlafen. Ich ruhe nur und nehme wahr.»' },
      {
        title: 'Verweile etwa eine Minute bei jedem Bereich, einfach wahrnehmend',
        items: ['Zehen und Füsse', 'Waden und Knie', 'Oberschenkel und Hüften', 'Bauch, wie er sich hebt und senkt', 'Brust und Rücken', 'Hände und Arme', 'Schultern und Nacken', 'Kiefer, Gesicht und Kopfhaut'],
      },
      { body: 'Wenn du noch wach bist, ist das in Ordnung. Dein Körper ruht trotzdem. Wenn du schon über 20 Minuten wach bist, probier «Die Aufsteh-Regel».' },
    ],
  },
  'triple-column': {
    title: 'Dreispalten-Technik',
    summary: 'Der Klassiker von David Burns: automatischen Gedanken aufschreiben, die Denkfalle erkennen, eine realistischere Antwort schreiben.',
    why: 'Gefühle folgen Gedanken, und schmerzhafte Gedanken sind oft verzerrt. Sie aufzuschreiben und zu beantworten ist eine Kernfähigkeit der KVT. In einer Studie sank die Depression deutlich bei Menschen, die «Feeling Good» selbstständig durcharbeiteten.',
    quote: 'Du fühlst, wie du denkst',
    steps: [
      { title: 'Spalte 1: Automatischer Gedanke', body: 'Schreib den Gedanken genau so auf, wie er in deinem Kopf klingt.', fields: ['z. B. «Ich mache immer alles kaputt.»'] },
      { title: 'Spalte 2: Denkfalle', body: 'Welche der 10 kognitiven Verzerrungen nach Burns stecken in dem Gedanken? Tippen zum Lesen und Abhaken.' },
      { title: 'Spalte 3: Vernünftige Antwort', body: 'Schreib eine ausgewogenere, realistische Antwort. Sie muss etwas sein, das du wirklich glaubst, nicht nur positives Denken.', fields: ['Ein realistischerer Gedanke…', 'Wie sehr glaube ich den ursprünglichen Gedanken jetzt? (0–100 %)'] },
    ],
  },
  'worry-time': {
    title: 'Sorgen verschieben («Sorgenzeit»)',
    summary: 'Schreib die Sorge auf und buch sie für ein 15-minütiges Sorgen-Zeitfenster später am Tag. Nicht jetzt.',
    why: 'Sorgen fühlen sich dringend an, aber sie lassen sich verschieben. In den ursprünglichen Studien zur Reizkontrolle verkürzte ein tägliches Sorgen-Zeitfenster die Zeit des Grübelns und half auch bei Schlafstörungen. In einer grossen Studie verringerte weniger Sorgen sogar paranoides Denken.',
    steps: [
      { body: 'Schreib die Sorge in einer kurzen Zeile auf, damit dein Gehirn weiss, dass sie nicht vergessen wird. (Nichts wird gespeichert. Nimm Papier, wenn du sie für dein Zeitfenster behalten willst.)', fields: ['Meine Sorge…'] },
      { body: 'Wähle ein 15-minütiges Sorgen-Zeitfenster später heute, nicht direkt vor dem Schlafen. Zum Beispiel: 18:00–18:15 Uhr am Küchentisch.' },
      { body: 'Bis dahin, wenn die Sorge zurückkommt, sag ihr: «Nicht jetzt. Ich habe um 18 Uhr einen Termin mit dir.» Dann bring deine Aufmerksamkeit sanft zurück zu dem, was du gerade tust.' },
      { body: 'Im Zeitfenster sorgst du dich absichtlich. Oft wirkt die Sorge bis dahin kleiner oder unwichtig. Genau darum geht es.' },
    ],
  },
  'worry-tree': {
    title: 'Der Sorgenbaum: praktisch oder hypothetisch?',
    summary: 'Sortier die Sorge. Wenn du etwas tun kannst, plan den nächsten Schritt. Wenn nicht, übe, sie loszulassen.',
    why: 'KVT bei generalisierter Angst unterscheidet aktuelle, lösbare Probleme von hypothetischen «Was wäre, wenn»-Sorgen. Die ersten werden gelöst. Bei den zweiten übt man, Ungewissheit auszuhalten, ein Haupttreiber von Angst.',
    steps: [
      { body: 'Worüber genau mache ich mir Sorgen?', fields: ['Meine Sorge…'] },
      { title: 'Frage', body: 'Ist das ein aktuelles Problem, gegen das ich jetzt etwas tun kann, oder ein «Was wäre, wenn» über etwas, das vielleicht nie passiert?' },
      { title: 'Wenn du handeln KANNST', body: 'Was ist der allernächste kleine Schritt, und wann machst du ihn?', fields: ['Nächster Schritt…', 'Wann…'] },
      { title: 'Wenn du NICHT handeln kannst', body: 'Sag: «Das ist ein Was-wäre-wenn. Ich kann es jetzt nicht lösen, und ich kann damit leben, es nicht zu wissen.» Dann lenk deine Aufmerksamkeit auf etwas vor dir, etwa eine Aufgabe, ein Geräusch oder deinen Atem.' },
    ],
  },
  'evidence-check': {
    title: 'Die Beweise abwägen',
    summary: 'Behandle den ängstlichen Gedanken wie eine Hypothese. Was spricht dafür, was dagegen, und was ist wahrscheinlicher?',
    why: 'Ängstliche und misstrauische Gedanken fühlen sich wie Tatsachen an. Sie behutsam an Belegen zu prüfen, ist ein zentrales KVT-Werkzeug. KVT gegen Sorgen verringerte nachweislich paranoides Denken.',
    quote: 'Deine Gefühle sind keine Tatsachen!',
    steps: [
      {
        body: 'Antworte ehrlich. Du musst dich von nichts überzeugen.',
        fields: [
          'Der Gedanke, vor dessen Wahrheit ich Angst habe…',
          'Wie sicher bin ich gerade? (0–100 %)',
          'Belege DAFÜR (Fakten, keine Gefühle)…',
          'Belege DAGEGEN, oder was nicht passt…',
          'Was könnte das, was ich bemerkt habe, sonst erklären?',
          'Was würde ich einer Freundin oder einem Freund mit diesem Gedanken sagen?',
          'Wie sicher bin ich jetzt? (0–100 %)',
        ],
      },
      { body: 'Müdigkeit, Stress oder Alleinsein machen Bedrohungsgedanken lauter. Wenn du wenig geschlafen hast, rechne das mit ein.' },
    ],
  },
  'tic-toc': {
    title: 'TIC-TOC-Technik',
    summary: 'Tausche aufgabenhemmende Gedanken (TICs) gegen aufgabenorientierte Gedanken (TOCs).',
    why: 'Aufschieben wird oft von Gedanken wie «Es muss perfekt sein» oder «Es ist zu viel» angetrieben. Burns\' TIC-TOC-Technik setzt direkt an diesen Gedanken an. KVT mit Fokus auf Planung und Denkfallen verringerte ADHS-Symptome in einer randomisierten Studie.',
    quote: 'Die Motivation kommt nicht zuerst, sondern das Handeln!',
    steps: [
      { title: 'TIC: der Gedanke, der dich stoppt', body: 'Was sagt dein Gehirn, wenn du ans Anfangen denkst?', fields: ['z. B. «Ich muss heute alles schaffen, und es muss super werden.»'] },
      { body: 'Welche Denkfallen stecken darin? (Alles-oder-nichts und Soll-Aussagen sind hier häufig.)' },
      { title: 'TOC: ein aufgabenorientierter Ersatz', body: 'Schreib ihn so um, dass er zum Handeln führt.', fields: ['z. B. «Ich muss nur die ersten 10 Minuten machen. Ein grober Entwurf reicht.»'] },
    ],
  },
  'little-steps': {
    title: 'Kleine Schritte + 5-Minuten-Start',
    summary: 'Zerleg die Aufgabe in winzige Schritte (Burns\' «Kleine Schritte für kleine Füsse») und mach dann nur den ersten, 5 Minuten lang.',
    why: 'Grosse Aufgaben überlasten das Arbeitsgedächtnis. Winzige, konkrete Schritte und eine «Wenn-dann»-Startzeit machen den Anfang viel wahrscheinlicher. Solche Vorsätze haben eine mittlere bis grosse Wirkung aufs Dranbleiben.',
    quote: 'Die Motivation kommt nicht zuerst, sondern das Handeln!',
    steps: [
      { body: 'Schreib die Aufgabe auf, dann die ersten drei winzigen Schritte. Mach jeden so klein, dass er fast albern wirkt.', fields: ['Aufgabe…', 'Schritt 1 (z. B. «das Dokument öffnen»)', 'Schritt 2', 'Schritt 3'] },
      { body: 'Mach einen Plan: «Wenn der Timer startet, mache ich Schritt 1.» Du schuldest der Aufgabe nur 5 Minuten. Danach darfst du ohne schlechtes Gewissen aufhören.' },
      { body: 'Mach Schritt 1. Nur Schritt 1.' },
      { body: 'Geschafft! Willst du noch 5 Minuten? Beide Antworten sind okay. Anfangen war der schwierige Teil.' },
    ],
  },
  pomodoro: {
    title: 'Fokus-Sprint (optional mit Body Double)',
    summary: 'Arbeite 20 Minuten, ruh dich 5 Minuten aus. Wenn du willst, mit jemandem (am Telefon oder in der Nähe), der still neben dir arbeitet.',
    why: 'Äussere Struktur unterstützt ADHS-Gehirne. Festgelegte Arbeits- und Pausenblöcke verbesserten in einer Studie die Stimmung im Vergleich zu spontanen Pausen. «Body Doubling» ist in ADHS-Communities weit verbreitet, wurde aber noch nicht wissenschaftlich getestet.',
    steps: [
      { body: 'Wähle EINE Aufgabe. Leg das Handy mit dem Bildschirm nach unten hin oder in ein anderes Zimmer. Optional: Bitte eine Freundin oder einen Freund um einen Videoanruf, während ihr beide arbeitet, oder starte einen «Study with me»-Stream.' },
      { body: 'Arbeite. Wenn ein ablenkender Gedanke kommt, notier ihn auf Papier und mach weiter.' },
      { body: 'Pause. Steh auf, trink Wasser, beweg dich. Kein Scrollen, wenn du es schaffst.' },
    ],
  },
  'pleasure-predicting': {
    title: 'Freude-Vorhersage-Experiment',
    summary: 'Sag voraus, wie viel Freude dir eine kleine Aktivität macht, tu sie und bewerte sie danach. Eine gedrückte Stimmung liegt meist falsch.',
    why: 'Depression sagt dir, dass nichts guttun wird, also versuchst du es nicht, und die Stimmung bleibt unten. Burns\' Freude-Vorhersage-Bogen testet diese Vorhersage. Verhaltensaktivierung beruht auf demselben Prinzip und wirkt bei Depression so gut wie eine komplette KVT.',
    steps: [
      { body: 'Wähle eine kleine Aktivität, die du jetzt tun könntest (ein Spaziergang, eine Dusche, ein Song, ein Anruf, etwas Einfaches kochen).', fields: ['Aktivität…', 'Vorhergesagte Zufriedenheit (0–100 %)…'] },
      { body: 'Tu es. Du musst es nicht geniessen, nur tun.' },
      { body: 'Bewerte es jetzt ehrlich.', fields: ['Tatsächliche Zufriedenheit (0–100 %)…', 'Was habe ich über meine Vorhersage gelernt?'] },
    ],
  },
  'one-tiny-thing': {
    title: 'Eine winzige Sache (Verhaltensaktivierung)',
    summary: 'Wähle eine winzige Handlung, die ein bisschen Freude oder ein Erfolgserlebnis bringt, und mach nur diese.',
    why: 'Handeln kommt vor der Motivation, besonders bei gedrückter Stimmung. Verhaltensaktivierung heisst, kleine lohnende Aktivitäten einzuplanen, und gehört zu den am besten belegten Behandlungen bei Depression.',
    quote: 'Die Motivation kommt nicht zuerst, sondern das Handeln!',
    steps: [
      {
        title: 'Wähle EINE (kleiner ist besser)',
        items: [
          'Ein Glas Wasser trinken',
          'Ein Fenster öffnen oder für 2 Minuten rausgehen',
          'Gesicht waschen oder Zähne putzen',
          'Etwas essen, egal was',
          'Jemandem ein Emoji schicken',
          'Einen Song anmachen, den du früher mochtest',
          'Frische Kleidung anziehen',
        ],
      },
      { body: 'Mach es jetzt. Das zählt.' },
      { body: 'Du hast etwas getan, während du dich so fühlst. Das ist nicht wenig.' },
    ],
  },
  'double-standard': {
    title: 'Doppelte-Standards-Technik',
    summary: 'Würdest du mit einer Freundin oder einem Freund so reden, wie du gerade mit dir redest? Dann antworte dir so, wie du ihnen antworten würdest.',
    why: 'Die meisten von uns messen sich an einem viel härteren Massstab als alle anderen. Burns\' Doppelte-Standards-Technik nutzt dein natürliches Mitgefühl für andere, um deinem inneren Kritiker zu antworten.',
    steps: [
      { body: 'Was erzählst du dir gerade?', fields: ['Mein innerer Kritiker sagt…'] },
      { body: 'Stell dir eine liebe Freundin oder einen lieben Freund in genau deiner Lage vor, die das über sich sagen. Würdest du zustimmen und sagen «Ja, du bist hoffnungslos»? Wahrscheinlich nicht.' },
      { body: 'Was würdest du ihnen tatsächlich sagen?', fields: ['Meiner Freundin / meinem Freund würde ich sagen…'] },
      { body: 'Lies das nochmal, aber an dich selbst gerichtet. Gibt es einen Grund, warum dieselbe Wahrheit nicht für dich gelten sollte?' },
    ],
  },
  antiperfectionism: {
    title: 'Trau dich, durchschnittlich zu sein: das 80-%-Experiment',
    summary: 'Erledige eine Aufgabe bewusst «gut genug» und bewerte dann, wie zufrieden du wirklich bist.',
    why: 'Perfektionismus sagt voraus, dass sich «gut genug» schrecklich anfühlen wird. Burns\' Anti-Perfektionismus-Bogen prüft diese Vorhersage an der echten Zufriedenheit. KVT gegen Perfektionismus verringert Perfektionismus, Angst und Depression.',
    quote: 'Trau dich, durchschnittlich zu sein',
    steps: [
      { body: 'Wähle eine Aufgabe und ziel auf 80 %, nicht 100 %.', fields: ['Aufgabe…', 'Wie würde «gut genug» aussehen?', 'Vorhergesagte Zufriedenheit, wenn es nur 80 % sind (0–100)…'] },
      { body: 'Mach es mit 80 %. Wenn der Drang zum Polieren kommt, nimm ihn wahr und mach weiter.' },
      { body: 'Bewerte es.', fields: ['Tatsächliche Zufriedenheit (0–100)…', 'Ist etwas Schlimmes passiert?'] },
    ],
  },
  'cost-benefit': {
    title: 'Kosten-Nutzen-Analyse',
    summary: 'Liste die Vor- und Nachteile einer Überzeugung oder eines Gefühls auf und entscheide, ob es sich lohnt, daran festzuhalten.',
    why: 'Wir halten an Wut, «Sollte»-Sätzen und Perfektionismus fest, weil sie uns scheinbar helfen. Echte Kosten und Nutzen aufzulisten, eine Burns-Technik, zeigt oft, dass der Preis höher ist als der Gewinn. Das stärkt die Motivation zur Veränderung.',
    quote: 'Deine Arbeit ist nicht dein Wert',
    steps: [
      { body: 'Benenne die Überzeugung oder das Gefühl (z. B. «Ich darf nie jemanden enttäuschen» oder meine Wut auf X).', fields: ['Die Überzeugung / das Gefühl…'] },
      { body: 'Sei auf beiden Seiten ehrlich.', fields: ['Wie es mir hilft…', 'Was es mich kostet…'] },
      { body: 'Wäge ab: Wie würdest du 100 Punkte auf Nutzen und Kosten verteilen? Wenn die Kosten gewinnen, schreib eine ausgewogenere Version der Überzeugung.', fields: ['Verteilung (z. B. 30 / 70)…', 'Eine überarbeitete Überzeugung…'] },
    ],
  },
  disarming: {
    title: 'Entwaffnungstechnik («Verbal-Judo»)',
    summary: 'Finde das Körnchen Wahrheit in der Kritik, antworte neugierig statt verteidigend und entscheide, was wirklich deins ist.',
    why: 'In «Feeling Good» zeigt Burns, wie Selbstverteidigung Konflikte verschärft, während Zustimmung zu einem Körnchen Wahrheit sie entschärft. KVT bei Wut und zwischenmenschlichen Konflikten ist gut belegt.',
    steps: [
      { body: 'Was wurde gesagt, in ihren Worten?', fields: ['Die Kritik…'] },
      { body: 'Steckt darin ein kleines Körnchen Wahrheit? Es zu finden heisst nicht, dass du schlecht bist. Es heisst, dass du fair bist.', fields: ['Das Körnchen Wahrheit…'] },
      { body: 'Entwirf eine ruhige Antwort, die 1) dem Körnchen Wahrheit zustimmt und 2) eine neugierige Frage stellt. Beispiel: «Du hast recht, ich war zu spät. Was war daran für dich am schwierigsten?»', fields: ['Meine Antwort…'] },
      { body: 'Was an der Kritik NICHT stimmt, darfst du bei ihnen lassen. Ein Kommentar definiert dich nicht.' },
    ],
  },
  'drop-safety': {
    title: 'Ein Sicherheitsverhalten weglassen, nach aussen schauen',
    summary: 'Lenk deine Aufmerksamkeit von dir weg auf den Raum und die Menschen und lass eine «Sicherheits»-Gewohnheit los.',
    why: 'Soziale Angst hält sich durch Selbstaufmerksamkeit und Sicherheitsverhalten aufrecht, etwa Sätze proben, Blickkontakt meiden oder die Hände verstecken. Sie bei der Exposition wegzulassen, verringerte die Angst stärker als Exposition allein. KVT ist die wirksamste Therapie bei sozialer Angst.',
    steps: [
      {
        title: 'Welche Sicherheitsverhalten nutzt du?',
        items: [
          'Im Kopf proben, was ich sagen will',
          'Blickkontakt vermeiden',
          'Gesicht oder Hände verstecken',
          'Am Handy bleiben',
          'Still bleiben, damit ich nichts Falsches sagen kann',
          'Kontrollieren, wie ich aussehe oder klinge',
        ],
      },
      { body: 'Wähle EINS, das du in den nächsten Minuten weglässt. Weniger Sicherheitsverhalten heisst mehr Chancen zu lernen, dass es okay ist.' },
      { body: 'Richte deine Aufmerksamkeit nach aussen: Was sagt die andere Person eigentlich? Welche Farben sind im Raum? Was ist hier interessant?' },
      { body: 'Prüf danach: Ist das, wovor du Angst hattest, wirklich passiert? Wie auffällig warst du tatsächlich?' },
    ],
  },
  'test-prediction': {
    title: 'Teste deine Vorhersage (Verhaltensexperiment)',
    summary: 'Schreib auf, was du befürchtest, wenn du dich meldest, und teste es dann mit einem kleinen, echten Schritt.',
    why: 'Einsame und ängstliche Köpfe sagen Ablehnung voraus, also melden wir uns nicht, und die Vorhersage wird nie getestet. In einer Meta-Analyse wirkten jene Interventionen gegen Einsamkeit am besten, die genau diese sozialen Bedrohungsgedanken angingen.',
    steps: [
      { body: 'Wähle einen kleinen sozialen Schritt (einer Freundin schreiben, den Nachbarn grüssen, in einem Chat mitmachen).', fields: ['Der Schritt…', 'Was ich vorhersage…', 'Wie sicher bin ich (0–100 %)?'] },
      { body: 'Mach es jetzt oder leg heute eine bestimmte Zeit fest. Halte es klein. «Hey, hab an dich gedacht, wie geht\'s dir?» reicht.' },
      { body: 'Später: Was ist tatsächlich passiert? (Wenn noch keine Antwort da ist: Schweigen ist keine Ablehnung. Menschen sind beschäftigt.)', fields: ['Was passiert ist…', 'Was ich gelernt habe…'] },
    ],
  },
  'get-up-rule': {
    title: 'Die Aufsteh-Regel (Reizkontrolle)',
    summary: 'Wenn du etwa 20 Minuten wach liegst, steh auf, tu etwas Langweiliges bei gedämpftem Licht und geh erst zurück, wenn du müde bist.',
    why: 'Wach im Bett zu liegen bringt dem Gehirn bei, dass das Bett ein Ort zum Wachsein und Frustriertsein ist. Reizkontrolle baut die Verbindung Bett–Schlaf wieder auf. Sie ist ein Kernbestandteil der KVT-I, der Behandlung erster Wahl bei chronischen Schlafstörungen.',
    steps: [
      { body: 'Schau nicht auf die Uhr. Wenn du das Gefühl hast, du bist etwa 20 Minuten wach und nicht müde, steh auf.' },
      {
        title: 'Geh in einen anderen Raum und tu bei gedämpftem Licht etwas Langweiliges',
        items: ['Etwas Langweiliges auf Papier lesen', 'Wäsche falten', 'Einen ruhigen Podcast hören', 'Sitzen und langsam atmen (probier 4 ein / 6 aus)'],
      },
      { body: 'Vermeide helle Bildschirme, Essen und alles Aufregende. Geh erst zurück ins Bett, wenn du dich müde fühlst. Wiederhole das so oft wie nötig. Am Anfang ist es schwer, und es wirkt über Nächte, nicht Minuten.' },
    ],
  },
  'skip-ritual': {
    title: 'Den Gedanken da sein lassen, das Ritual aufschieben',
    summary: 'Benenne ihn als aufdringlichen Gedanken, diskutier nicht mit ihm und verschieb das Kontrollieren oder Neutralisieren.',
    why: 'Die meisten Menschen haben ungewollte aufdringliche Gedanken. Klebrig werden sie durch Dagegen-Ankämpfen, Kontrollieren oder Rückversicherung. Exposition mit Reaktionsverhinderung, bei der du den Gedanken zulässt und das Ritual weglässt, hat grosse Effekte bei Zwangsstörungen.',
    caution: 'Wenn aufdringliche Gedanken und Rituale viel von deinem Tag einnehmen, ist ERP mit einer ausgebildeten Therapeutin oder einem Therapeuten sehr wirksam. Diese Übung ist nur ein kleiner Vorgeschmack.',
    steps: [
      { body: 'Benenne ihn: «Das ist ein aufdringlicher Gedanke. Mein Gehirn schickt einen Fehlalarm. Gedanken sind keine Taten, und sie sagen nichts darüber, wer ich bin.»' },
      { body: 'Diskutier nicht mit ihm, analysier ihn nicht und schieb ihn nicht weg. Lass ihn dasitzen wie Hintergrundgeräusch.' },
      { body: 'Schieb den Drang zu kontrollieren, zu googeln, zu beichten oder zu neutralisieren für 10 Minuten auf. Beobachte, wie die Angst von selbst steigt und fällt.' },
      { body: 'Nach 10 Minuten: Ist der Drang noch genauso stark? Jedes Aufschieben bringt deinem Gehirn bei, dass du mit Ungewissheit umgehen kannst.' },
    ],
  },
  'tech-check': {
    title: 'Ein echter Sicherheits-Check, dann Schluss',
    summary: 'Mach eine kurze, abgeschlossene Reihe sinnvoller Sicherheitsschritte und hör dann bewusst auf zu kontrollieren.',
    why: 'Manche Tech-Sorgen sind realistisch, und danach zu handeln ist gesundes Problemlösen. Endloses Kontrollieren nährt die Angst. Eine Checkliste mit festem Ende behandelt den praktischen Teil und stoppt die Rückversicherungsschleife.',
    steps: [
      {
        title: 'Mach das einmal (nur über die offizielle App oder Website)',
        items: [
          'Ändere das Passwort deines Haupt-E-Mail-Kontos in ein langes, einzigartiges',
          'Aktiviere die Zwei-Faktor-Authentifizierung für E-Mail und Banking',
          'Prüf «Letzte Anmeldungen / Geräte» in deinen Konto-Einstellungen und entferne Unbekanntes',
          'Aktualisiere das System auf Handy oder Computer',
          'Prüf, welche Apps Zugriff auf Mikrofon, Kamera und Standort haben',
          'Wenn es um Geld geht, ruf deine Bank über die Nummer auf deiner Karte an',
        ],
      },
      { title: 'Jetzt: Schluss', body: 'Du hast das Vernünftige getan. Weiteres Kontrollieren bringt keine Sicherheit mehr, nur Angst. Sag: «Ich habe getan, was in meiner Macht steht.» Wenn der Drang zum erneuten Prüfen kommt, probier «Urge Surfing».' },
    ],
  },
  'info-diet': {
    title: 'Feed zu: eine 24-Stunden-Infodiät',
    summary: 'Setz für einen Tag Grenzen bei Nachrichten und Social Media und schau, was das mit deiner Stimmung macht.',
    why: 'Doomscrolling und Vergleichen nähren Grauen und FOMO. In einer randomisierten Studie verringerte es Einsamkeit und Depression, Social Media drei Wochen lang auf 30 Minuten pro Tag zu begrenzen.',
    steps: [
      {
        title: 'Wähle deine Grenzen für die nächsten 24 Stunden',
        items: [
          'Log dich aus der App aus, die dich am meisten zieht, oder verschieb sie',
          'Schalte Nachrichten- und Social-Media-Benachrichtigungen aus',
          'Wähle EINE Zeit für Nachrichten (z. B. 12:00 für 10 Minuten)',
          'Keine Feeds im Bett',
          'Ersetze das erste Scrollen am Morgen durch etwas Analoges',
        ],
      },
      { body: 'Achte morgen darauf: Was hast du wirklich verpasst? Wie ging es dir?' },
    ],
  },
  'unreal-not-dangerous': {
    title: 'Unwirklich ist unangenehm, nicht gefährlich',
    summary: 'Deute das Unwirklichkeitsgefühl als harmlose Stressreaktion und erde dich dann über starke, echte Empfindungen.',
    why: 'Depersonalisation wird oft schlimmer, wenn wir sie fürchten («Werde ich verrückt?»). In der KVT bei Depersonalisation verringerte es die Symptome, sie als schützende, harmlose Stressreaktion zu deuten und Erdung zu nutzen.',
    steps: [
      { body: 'Sag dir: «Das ist Depersonalisation. Mein Gehirn dreht wegen Stress die Lautstärke runter. Es ist nicht gefährlich, und ich verliere nicht den Verstand. Es geht vorbei.»' },
      {
        title: 'Hol dir starke, echte Empfindungen',
        items: [
          'Halte etwas Kaltes oder ein Stück Eis',
          'Drück die Füsse fest in den Boden',
          'Riech an etwas Intensivem (Kaffee, Pfefferminz, Parfum)',
          'Sag laut deinen Namen, das Datum und wo du bist',
          'Kau etwas Saures oder Minziges',
        ],
      },
      { body: 'Prüf nicht ständig, ob du dich schon echt fühlst. Das Prüfen hält es aufrecht. Tu als Nächstes etwas Normales.' },
    ],
  },
  'safety-plan': {
    title: 'Mach jetzt einen Sicherheitsplan',
    summary: 'Ein kurzer schriftlicher Plan für die nächsten Stunden: Warnzeichen, Bewältigungsschritte, Menschen und Krisenkontakte.',
    why: 'Die Sicherheitsplanung ist ein empfohlener erster Schritt in der Suizidprävention. In einer grossen Studie zeigten Menschen mit Sicherheitsplan danach etwa halb so viel suizidales Verhalten. Schreib ihn auch auf Papier, denn diese App speichert nichts.',
    steps: [
      {
        body: 'Füll aus, was du kannst. Kurze Antworten reichen. Schreib es auf Papier oder in eine Notiz, die du später findest.',
        fields: [
          '1. Meine Warnzeichen (Gedanken, Gefühle, Situationen)…',
          '2. Was ich allein tun kann, um durchzukommen (z. B. Dusche, Musik, Spaziergang, kaltes Wasser)…',
          '3. Menschen oder Orte, die mich ablenken…',
          '4. Menschen, die ich um Hilfe bitten kann (Namen + Nummern)…',
          '5. Fachleute / Krisentelefone (siehe «Hilfe jetzt»)…',
          '6. Wie ich meine Umgebung sicherer machen kann (z. B. Medikamente jemandem geben, den Raum verlassen)…',
          '7. Ein Grund, heute Nacht sicher zu bleiben…',
        ],
      },
      { body: 'Wenn du in unmittelbarer Gefahr bist, ruf jetzt den Notruf an (112 in Europa, 144 in der Schweiz, 911 in den USA/Kanada, 999 in Grossbritannien).' },
    ],
  },
  'why-to-how': {
    title: 'Von «Warum?» zu «Wie?» wechseln',
    summary: 'Mach aus abstrakten, kreisenden «Warum»-Fragen konkrete «Wie»- und «Was als Nächstes»-Fragen.',
    why: 'Grübeln ist abstrakt: «Warum bin ich so?» Grübel-fokussierte KVT trainiert einen konkreten, spezifischen Denkstil («Wie hat es sich entwickelt? Was könnte ich nächstes Mal probieren?»). Das verringerte Grübeln und Depression in einer randomisierten Studie.',
    steps: [
      { body: 'Schreib die «Warum»-Frage auf, die dein Kopf immer wieder stellt.', fields: ['Warum…?'] },
      {
        body: 'Werde jetzt konkret, wie eine Regisseurin, die eine Szene beschreibt.',
        fields: [
          'Was genau ist passiert, Schritt für Schritt?',
          'Wie hat es sich entwickelt? Welcher Moment hat den Verlauf bestimmt?',
          'Was könnte ich nächstes Mal anders probieren, in einer konkreten Handlung?',
        ],
      },
      { body: 'Fertig. Wenn die Schleife wieder anfängt, erinnere dich: «Ich habe daraus schon einen Plan gemacht.» Dann wechsle zu etwas, das deine Hände braucht.' },
    ],
  },
  defusion: {
    title: '«Ich habe den Gedanken, dass…»',
    summary: 'Schaff ein wenig Abstand zu einem klebrigen Gedanken, damit er etwas ist, das du hast, nicht etwas, das du bist.',
    why: 'Kognitive Defusion verändert deine Beziehung zu Gedanken statt ihres Inhalts. Sie ist ein Kernprozess der ACT. ACT wirkt bei vielen Beschwerden etwa so gut wie andere etablierte Behandlungen.',
    steps: [
      { body: 'Schreib den Gedanken in seiner kürzesten Form auf.', fields: ['z. B. «Ich bin ein Versager»'] },
      { body: 'Sag ihn dir jetzt mit einem Vorsatz: «Ich habe den Gedanken, dass ich ein Versager bin.»' },
      { body: 'Dann: «Ich bemerke, dass ich den Gedanken habe, dass ich ein Versager bin.»' },
      { body: 'Spür die kleine Lücke, die entsteht. Der Gedanke ist noch da, aber du bist die Person, die ihn bemerkt. Du kannst deinem Kopf auch danken: «Danke, Kopf, ich weiss, du willst mich beschützen.»' },
    ],
  },
  'word-repetition': {
    title: 'Milch, Milch, Milch (Wortwiederholung)',
    summary: 'Sag ein hartes Wort über dich 30 Sekunden lang schnell und laut, bis es nur noch ein Klang ist.',
    why: 'Ein 100 Jahre alter Trick, in der ACT-Forschung getestet: Ein selbstkritisches Wort 30 Sekunden lang schnell zu wiederholen, verringerte deutlich, wie glaubwürdig und belastend es war.',
    steps: [
      { body: 'Wähle ein Wort, das dein innerer Kritiker benutzt, etwa «dumm», «komisch» oder «Versager». Wärm dich erst ein paar Sekunden mit «Milch» auf.' },
      { body: 'Sag jetzt dein Wort laut, so schnell du kannst, immer wieder.' },
      { body: 'Was ist mit dem Wort passiert? Für die meisten wird es zu einem seltsamen Klang und verliert etwas von seinem Stachel.' },
    ],
  },
  'leaves-stream': {
    title: 'Blätter auf dem Fluss',
    summary: 'Stell dir vor, du legst jeden Gedanken auf ein Blatt und siehst ihm nach, wie es davontreibt. Nicht schieben, einfach vorbeiziehen lassen.',
    why: 'Eine klassische ACT-Defusionsübung, die trainiert, Gedanken zu beobachten, ohne in sie hineingezogen zu werden. Sie wirkt besonders gut, wenn dein Kopf zu voll ist, um ihn zu «leeren».',
    steps: [
      { body: 'Schliess die Augen. Stell dir einen sanften Bach vor, auf dem Blätter vorbeitreiben.' },
      { body: 'Jedes Mal, wenn ein Gedanke auftaucht, als Wort oder Bild, leg ihn auf ein Blatt und lass ihn flussabwärts treiben. Wenn du hängen bleibst, ist das normal. Bemerke es und kehr zum Bach zurück.' },
      { body: 'Bemerke, dass Gedanken kamen und gingen, und du warst immer noch da und hast zugeschaut.' },
    ],
  },
  'values-step': {
    title: 'Ein Schritt zu dem, was dir wichtig ist',
    summary: 'Benenne, was dir wichtig ist, und wähle eine kleine Handlung in diese Richtung, auch wenn das Gefühl noch da ist.',
    why: 'Leere und FOMO zeigen oft eine Lücke zwischen dem, wie wir leben, und dem, was uns wichtig ist. Die Werte- und Handlungsarbeit der ACT hilft, auf ein sinnvolles Leben zuzugehen, ohne zu warten, bis sich die Gefühle ändern.',
    steps: [
      {
        title: 'Was ist dir wichtig? Hak ein paar an',
        items: ['Verbindung / Freundschaft', 'Kreativität', 'Lernen', 'Freundlichkeit', 'Gesundheit', 'Natur', 'Ehrlichkeit', 'Spass / Spiel', 'Gerechtigkeit', 'Unabhängigkeit', 'Familie', 'Handwerk / Dinge gut machen'],
      },
      { body: 'Wähle einen Wert. Was ist eine winzige Handlung in diese Richtung, die du heute tun könntest (5 Minuten oder weniger)?', fields: ['Wert…', 'Winzige Handlung…'] },
      { body: 'Du darfst das Gefühl mitnehmen. Es muss nicht zuerst gehen.' },
    ],
  },
  expansion: {
    title: 'Platz machen (Ausdehnung)',
    summary: 'Statt gegen das Gefühl im Körper zu kämpfen, atme hinein und gib ihm Raum.',
    why: 'Gegen ein Gefühl zu kämpfen, verstärkt es oft. Die Akzeptanzübung der ACT heisst, sich einer Empfindung neugierig zu öffnen. Das verringert den Kampf und damit oft auch die Intensität.',
    steps: [
      { body: 'Finde, wo das Gefühl im Körper am stärksten ist. Nimm seine Ränder, Form, Temperatur und sein Gewicht wahr, wie eine neugierige Forscherin.' },
      { body: 'Atme hinein und drumherum. Stell dir vor, du schaffst innen mehr Raum, damit sich das Gefühl bewegen kann.' },
      { body: 'Sag: «Ich mag dieses Gefühl nicht, aber ich kann ihm Platz machen.» Du musst es nicht mögen, um es zuzulassen.' },
    ],
  },
  'drop-anchor': {
    title: 'Anker werfen',
    summary: 'Den Sturm anerkennen, zurück in den Körper kommen, sich der Welt zuwenden. Für sehr starke Gefühle.',
    why: 'Eine ACT-Erdungsübung für Gefühlsstürme. Du versuchst nicht, den Sturm zu stoppen. Du verankerst dich, damit er dich nicht mitreisst, indem du Akzeptanz mit Kontakt zur Gegenwart verbindest.',
    steps: [
      { title: 'A – Anerkennen', body: 'Benenne still, was da ist: «Ich bemerke Angst… rasende Gedanken… eine enge Brust.»' },
      { title: 'C – Zurück in den Körper', body: 'Drück die Füsse in den Boden. Richte den Rücken auf. Drück die Fingerspitzen zusammen. Streck langsam die Arme.' },
      { title: 'E – Zuwenden', body: 'Schau dich um und benenne drei Dinge, die du siehst, und zwei, die du hörst. Nimm wahr, wo du bist und was du tust.' },
      { body: 'Wiederhole den Kreis 3-mal, langsam. Der Sturm ist vielleicht noch da, aber du bist verankert.' },
    ],
  },
  'self-compassion-break': {
    title: 'Selbstmitgefühls-Pause',
    summary: 'Drei Sätze, die Schmerz mit Freundlichkeit statt mit Kritik begegnen. Hand aufs Herz optional.',
    why: 'Aus Kristin Neffs Programm «Mindful Self-Compassion». In einer Meta-Analyse randomisierter Studien verringerte Selbstmitgefühls-Training Selbstkritik, Grübeln, Angst und Depression.',
    steps: [
      { body: 'Wenn es sich gut anfühlt, leg eine Hand aufs Herz oder an eine andere Stelle, die beruhigt. Spür die Wärme.' },
      { title: '1. Achtsamkeit', body: 'Sag: «Das ist ein Moment des Leidens.» (Oder: «Das tut weh.» «Das ist schwer.»)' },
      { title: '2. Gemeinsames Menschsein', body: 'Sag: «Leiden gehört zum Menschsein. Andere fühlen das auch. Ich bin nicht allein.»' },
      { title: '3. Freundlichkeit', body: 'Sag: «Möge ich in diesem Moment freundlich zu mir sein.» Oder frag: «Was muss ich gerade hören?» und sag dir genau das.' },
    ],
  },
  'compassionate-letter': {
    title: 'Ein Brief von deinem mitfühlenden Selbst',
    summary: 'Schreib dir aus der Sicht einer weisen, warmherzigen Freundin, die alles weiss und dich trotzdem liebt.',
    why: 'Die mitgefühlsfokussierte Therapie arbeitet mit Scham, indem sie ein «Beruhigungssystem» als Gegengewicht zum Bedrohungssystem aufbaut. Der mitfühlende Brief ist eine ihrer Kernübungen, und Selbstmitgefühls-Interventionen zeigen in Studien mittlere Effekte.',
    steps: [
      { body: 'Stell dir eine mitfühlende Figur vor: weise, stark, warm und nie verurteilend. Das kann ein Mensch, ein Tier oder ein erdachtes Wesen sein.' },
      { body: 'Schreib einen kurzen Brief von ihr an dich, über das, was du gerade durchmachst. (Nichts wird gespeichert. Wenn du das schliesst, ist es weg.)', fields: ['Liebes Ich, …'] },
      { body: 'Lies ihn langsam, am besten mit einer warmen inneren Stimme. Achte auf alles, was weicher wird.' },
    ],
  },
  'soothing-rhythm': {
    title: 'Beruhigende Rhythmus-Atmung',
    summary: 'Ein langsamer, tröstender Atemrhythmus mit warmem Gesichtsausdruck und freundlicher innerer Stimme.',
    why: 'In der mitgefühlsfokussierten Therapie hilft langsameres Atmen mit sanftem Gesichtsausdruck, das Beruhigungssystem zu aktivieren, das Bedrohung und Scham ausgleicht.',
    steps: [
      { body: 'Lass dein Gesicht in ein leichtes, freundliches Lächeln weich werden. Lass die Schultern sinken.' },
      { body: 'Atme langsam und gleichmässig. Sag dir bei jedem Ausatmen innerlich: «Es ist okay. Ich bin da.»' },
    ],
  },
  'neuro-compassion': {
    title: 'Anders, nicht kaputt',
    summary: 'Trenne die Verdrahtung deines Gehirns von deinem Wert und sag das Freundliche laut.',
    why: 'Menschen mit ADHS-Symptomen berichten weniger Selbstmitgefühl und mehr Zurückweisungsempfindlichkeit, und Masking ist ein Haupttreiber von autistischem Burnout. Selbstmitgefühls-Training verringert Selbstkritik, darum ist es ein guter Anfang.',
    steps: [
      { body: 'Wofür machst du dir Vorwürfe?', fields: ['Ich mache mir Vorwürfe, weil…'] },
      { body: 'Frag dich: Geht es um meinen Charakter oder darum, wie mein Gehirn Zeit, Aufmerksamkeit, Sinnesreize oder soziale Energie verarbeitet?' },
      { body: 'Schreib es neutral um, wie eine Bedienungsanleitung: «Mein Gehirn braucht ___, um ___ zu können.»', fields: ['Mein Gehirn braucht…'] },
      { body: 'Sag: «Ich bin nicht faul, unhöflich oder zu viel. Ich habe ein anderes Gehirn, das sein Bestes gibt in einer Welt, die nicht dafür gebaut ist.»' },
    ],
  },
  'separation-of-tasks': {
    title: 'Trennung der Aufgaben: Wessen Aufgabe ist das?',
    summary: 'Frag bei jeder Sorge, wer am Ende die Folgen trägt. Erledige deine Aufgaben und überlass die der anderen ihnen.',
    why: 'Die adlerianische Psychologie, wie sie in «The Courage to Be Disliked» dargestellt wird, sagt: Viel zwischenmenschliches Leid entsteht, wenn wir die Aufgaben anderer übernehmen (wie sie über uns denken) oder sie in unsere hineinlassen. Beides zu trennen, gibt ein Gefühl von Kontrolle zurück. Das ist ein philosophischer Ansatz, keine in Studien getestete Technik.',
    quote: 'Du kannst ein Pferd zum Wasser führen, aber du kannst es nicht zum Trinken zwingen',
    steps: [
      { body: 'Schreib auf, was dich belastet.', fields: ['z. B. «Meine Freundin ist vielleicht genervt von mir»'] },
      { title: 'Frage', body: '«Wer bekommt am Ende das Ergebnis davon zu spüren?» Wie sich deine Freundin fühlt, ist ihre Aufgabe. Ob du freundlich und ehrlich warst, ist deine.' },
      { body: 'Sortier es.', fields: ['Meine Aufgabe (was ich tun kann)…', 'Ihre Aufgabe (was ich loslasse)…'] },
      { body: 'Mach deinen Teil und lass den Rest los. Du kannst Hilfe anbieten, aber du kannst nicht die Aufgabe eines anderen für ihn erledigen.' },
    ],
  },
  'courage-disliked': {
    title: 'Ein kleiner Akt des Mutes, nicht gemocht zu werden',
    summary: 'Übe eine ehrliche Handlung, etwa Nein sagen, eine Meinung äussern oder eine Grenze setzen, und akzeptiere, dass es nicht allen gefallen wird.',
    why: 'Kishimi und Koga argumentieren, dass uns das Leben für die Zustimmung aller unfrei macht. Kleine authentische Handlungen sind auch eine Form der Exposition: Sie bringen deinem Nervensystem bei, dass Ablehnung überlebbar ist.',
    quote: 'Der Mut, glücklich zu sein, schliesst auch den Mut ein, nicht gemocht zu werden.',
    steps: [
      { body: 'Wo verbiegst du dich, um gemocht zu werden?', fields: ['Ich sage immer Ja zu / verstecke…'] },
      { body: 'Was ist eine kleine, freundliche, aber ehrliche Handlung, die du heute tun könntest?', fields: ['z. B. «Nein, dieses Wochenende kann ich nicht» / «Ich mag eigentlich lieber…»'] },
      { body: 'Wie die andere Person reagiert, ist ihre Aufgabe. Ehrlich und freundlich zu sein, ist deine.' },
    ],
  },
  'here-and-now': {
    title: 'Den Scheinwerfer auf das Hier und Jetzt richten',
    summary: 'Das Leben findet in Momenten statt, nicht in der vorgestellten Zukunft oder der abgespielten Vergangenheit. Hol den Scheinwerfer zurück zu diesem Moment.',
    why: 'Adler beschreibt, über Kishimi, das Leben als eine Reihe von Momenten, wie ein Tanz, statt als Linie zu einem Ziel. Das passt zur Forschung über Gegenwartsaufmerksamkeit, die mittlere Effekte auf Angst und Depression hat.',
    quote: 'Das Leben ist eine Reihe von Momenten, und weder Vergangenheit noch Zukunft existieren.',
    steps: [
      { body: 'Bemerke, wo dein Kopf ist: in der Zukunft (Grauen, Unheil) oder in der Vergangenheit (Abspielen)? Benenne es: «Zukunft» oder «Vergangenheit».' },
      { body: 'Stell dir einen Theaterscheinwerfer vor. Gerade beleuchtet er eine trübe Vergangenheit und eine trübe Zukunft. Richte ihn ganz auf diesen Moment: diesen Raum, diesen Atemzug, diesen Körper.' },
      { body: 'Was ist eine Sache, die du hier in den nächsten 10 Minuten ernsthaft tun kannst?', fields: ['Gerade jetzt kann ich…'] },
      { body: 'Tanze diesen Moment. Nicht das Ziel ist der Punkt, sondern das Tanzen.' },
    ],
  },
  'meaning-you-give': {
    title: 'Du wählst die Bedeutung, die du ihm gibst',
    summary: 'Du kannst nicht ändern, was passiert ist, aber du kannst wählen, was es für deinen nächsten Schritt bedeutet.',
    why: 'Die adlerianische Psychologie ist teleologisch: Sie fragt, wofür wir eine Erfahrung nutzen, statt nur, was sie verursacht hat. Die Bedeutung von Ereignissen neu zu rahmen, ähnelt der kognitiven Neubewertung, einer gut belegten Strategie der Emotionsregulation.',
    caution: 'Das heisst nicht, dass Trauma nicht echt ist oder dass das Geschehene okay war. Wenn du mit Trauma lebst, ist traumafokussierte Therapie (z. B. TF-KVT, EMDR) der evidenzbasierte Weg.',
    quote: 'Wir werden nicht von unseren Erfahrungen bestimmt, aber die Bedeutung, die wir ihnen geben, ist selbstbestimmt.',
    steps: [
      { body: 'An welcher Erfahrung hängst du fest?', fields: ['Was passiert ist…'] },
      { body: 'Welche Bedeutung hast du ihr bisher gegeben?', fields: ['Es bedeutet, dass ich…'] },
      { body: 'Welche andere Bedeutung könntest du wählen, eine, die dir hilft weiterzugehen?', fields: ['Es könnte auch bedeuten…'] },
      { body: 'Frag dich: «Was will ich angesichts dessen jetzt tun?» Die Vergangenheit informiert dich. Sie muss dich nicht bestimmen.' },
    ],
  },
  contribution: {
    title: 'Gefühl des Beitragens: eine kleine Freundlichkeit',
    summary: 'Tu eine kleine Sache, die jemand anderem nützt. Nicht für Anerkennung, nur für das Gefühl, nützlich zu sein.',
    why: 'Adler sah Gemeinschaftsgefühl und Beitragen als Grundlage des Glücks. Die moderne Forschung stimmt zu: In einer Meta-Analyse steigerten freundliche Taten zuverlässig das Wohlbefinden der Helfenden.',
    quote: 'Glück ist das Gefühl, etwas beizutragen.',
    steps: [
      {
        title: 'Wähle eins',
        items: [
          'Jemandem ein ehrliches Kompliment oder Danke schicken',
          'Ungefragt bei einer Aufgabe zuhause helfen',
          'Eine Frage in einer Community beantworten, zu der du gehörst',
          'Eine Pflanze giessen, einen Vogel füttern, sich um etwas Lebendiges kümmern',
          'Einem kleinen Geschäft eine nette Bewertung schreiben',
          'Nach jemandem schauen, der vielleicht einsam ist',
        ],
      },
      { body: 'Tu es, ohne dass sie es bemerken müssen. Spür das Gefühl «Ich bin für jemanden nützlich». Dieses Gefühl gehört dir, egal wie sie reagieren.' },
    ],
  },
  'anger-goal': {
    title: 'Wofür ist meine Wut da?',
    summary: 'Frag, welches Ziel deine Wut erreichen will, und finde einen Weg, es mit Worten zu erreichen.',
    why: 'Die adlerianische Psychologie sieht Wut als Werkzeug, das gewählt wird, um ein Ziel zu erreichen, etwa gehört zu werden oder einen Machtkampf zu gewinnen. Das Ziel zu benennen, öffnet ruhigere Wege dahin. KVT gegen Wut setzt ähnlich bei den Bewertungen hinter der Wut an und hat starke Effekte.',
    quote: 'Wut ist ein Werkzeug. Ein Mittel, um ein Ziel zu erreichen.',
    steps: [
      { body: 'Zuerst: Wenn du bei 8+ von 10 bist, mach 10 zyklische Seufzer oder geh kurz raus. Bei voller Lautstärke kann man nicht klar denken.' },
      { body: 'Was will ich, dass passiert? Was will die Wut erreichen?', fields: ['Ich will, dass sie… / Ich will…'] },
      { body: 'Wie könnte ich direkt darum bitten, ohne dass die Wut spricht?', fields: ['Ich könnte sagen…'] },
    ],
  },
  'self-acceptance': {
    title: 'Selbstannahme: ändere, was du kannst',
    summary: 'Trenne, was du ändern kannst, von dem, was du nicht ändern kannst. Akzeptiere das Zweite und nutze deine Energie für das Erste.',
    why: 'Kishimi unterscheidet Selbstannahme von «Selbstbestätigung»: annehmen, was sich nicht ändern lässt, und den Mut haben, zu ändern, was sich ändern lässt. Das erinnert an akzeptanzbasierte Therapien wie ACT, die gut belegt sind.',
    quote: 'sich auf das konzentrieren, was man ändern kann, statt auf das, was man nicht ändern kann.',
    steps: [
      { body: 'Womit kämpfst du bei dir oder deiner Situation?', fields: ['…'] },
      { body: 'Sortier es ehrlich.', fields: ['Was ich nicht ändern kann (annehmen)…', 'Was ich ändern kann (nutzen, was ich habe)…'] },
      { body: 'Sag: «Das ist die Ausstattung, die ich habe. Entscheidend ist, was ich damit mache.»' },
    ],
  },
  'not-a-competition': {
    title: 'Das Leben ist kein Wettkampf',
    summary: 'Tausche den Vergleich mit anderen gegen den Vergleich mit deinem eigenen Ideal und sieh andere als Weggefährten, nicht als Rivalen.',
    why: 'Adler schlug «horizontale» Beziehungen vor, in denen niemand über oder unter jemandem steht, statt vertikaler Ranglisten. FOMO-Forschung zeigt, dass Vergleiche und unerfüllte Bedürfnisse nach Kompetenz und Verbindung das Gefühl antreiben. Der Wechsel vom Ranking zur eigenen Richtung setzt an der Wurzel an.',
    quote: 'Wir leben nicht, um die Erwartungen anderer Menschen zu erfüllen.',
    steps: [
      { body: 'Mit wem vergleichst du dich, und worin?', fields: ['Ich vergleiche mich mit… in…'] },
      { body: 'Stell dir vor, alle gehen auf demselben flachen Boden, in unterschiedlichem Tempo und in verschiedene Richtungen. Niemand ist voraus oder hinterher, nur woanders.' },
      { body: 'Verglichen mit deinem eigenen Ideal, nicht mit ihnen: Was ist ein Schritt nach vorn für dich?', fields: ['Mein eigener nächster Schritt…'] },
    ],
  },
  'turn-down': {
    title: 'Die Welt leiser drehen',
    summary: 'Reduziere Reize schnell: Ruhe, Dunkelheit, weniger Anforderungen. Nicht zu sprechen ist erlaubt.',
    why: 'Autistische Menschen beschreiben Reizüberflutung immer wieder als Auslöser von Meltdown und Shutdown, und weniger Input als das, was hilft. In einer Interviewstudie halfen geräuschreduzierende Kopfhörer geräuschempfindlichen autistischen Kindern, am Alltag teilzunehmen.',
    steps: [
      {
        title: 'Mach so viel davon, wie du kannst',
        items: [
          'Kopfhörer, Ohrstöpsel oder Noise-Cancelling an',
          'Sonnenbrille, Kapuze, oder die Augen schliessen',
          'An einen ruhigeren Ort gehen (Toilette, Auto, draussen)',
          'Bildschirmhelligkeit runter oder Handy weglegen',
          'Jemandem sagen (oder diesen Bildschirm zeigen): «Ich brauche ein paar Minuten Ruhe.»',
          'Hör auf zu reden, wenn das hilft. Du schuldest gerade niemandem Worte.',
        ],
      },
      { body: 'Wenig Input. Lang ausatmen. Nichts zu tun.' },
    ],
  },
  stim: {
    title: 'Bewusst stimmen',
    summary: 'Nutze wiederholte Bewegung oder Berührung (Wippen, Fidgeten, mit den Händen flattern, Summen) zur Regulation. Das ist erlaubt.',
    why: 'Autistische Erwachsene beschreiben Stimming als nützliche Art, mit überwältigenden Reizen und Gefühlen umzugehen. Es zu unterdrücken, als Teil von Masking, kann die Belastung erhöhen.',
    steps: [
      {
        title: 'Was will dein Körper?',
        items: ['Wippen oder Schaukeln', 'Fidget-Spielzeug, Ring, Haare oder Stoff', 'Mit Fingern oder Füssen tippen', 'Summen oder ein Wort oder Lied wiederholen', 'Hände oder einen Stressball drücken', 'Auf und ab gehen'],
      },
      { body: 'Lass es ganz zu, ohne zu bewerten, wie es aussieht.' },
    ],
  },
  'burnout-plan': {
    title: 'Burnout-Erholung: Anforderungen kürzen, Ruhe planen',
    summary: 'Streiche, verschiebe oder delegiere diese Woche, was geht, und buch reizarme Erholungszeit wie einen Termin.',
    why: 'Autistische Erwachsene beschreiben Burnout als Anforderungen, die die Kräfte übersteigen. Bei der Erholung half es, Erwartungen zu senken, freizunehmen, das Masking abzulegen und mehr Zeit allein oder mit wenig Reizen zu haben.',
    steps: [
      { body: 'Liste auf, was diese Woche ansteht, und markiere jedes: Streichen / Verschieben / Delegieren / Machen.', fields: ['Streichen…', 'Verschieben…', 'Delegieren / um Hilfe bitten…', 'Muss ich machen (halte das kurz)…'] },
      { body: 'Wo kannst du das Masking ablegen, mit wem oder allein?', fields: ['Ich kann ganz ich selbst sein…'] },
      { body: 'Buch Erholungszeit wie einen Arzttermin: wenig Licht, wenig Geräusche, Spezialinteressen, keine sozialen Anforderungen. Ruhe ist keine Belohnung. Sie ist Wartung.' },
    ],
  },
  'expressive-writing': {
    title: 'Expressives Schreiben (15 Minuten)',
    summary: 'Schreib deine tiefsten Gedanken und Gefühle über das auf, was dich belastet, ohne anzuhalten oder zu korrigieren.',
    why: 'James Pennebakers Studien zum expressiven Schreiben fanden, dass 15–20 Minuten Schreiben über emotionale Erfahrungen an einigen Tagen mit besserer Stimmung und Gesundheit zusammenhing. Meta-Analysen zeigen einen kleinen, aber beständigen Nutzen.',
    caution: 'Wenn das Schreiben über etwas dich deutlich schlechter fühlen lässt oder Trauma-Flashbacks auslöst, hör auf und wechsle zu einer Erdungsübung.',
    steps: [
      { body: 'Das ist nur für dich. Rechtschreibung ist egal. Nichts, was du hier tippst, wird gespeichert, und es verschwindet, wenn du gehst. Papier geht auch.' },
      { body: 'Schreib über deine tiefsten Gedanken und Gefühle zu dem, was dich belastet. Wie es dich beeinflusst, deine Beziehungen, wer du bist, wer du sein willst. Schreib weiter, bis der Timer endet. Wenn dir nichts mehr einfällt, wiederhole, was du schon geschrieben hast.', fields: ['Schreib frei…'] },
      { body: 'Es ist normal, sich direkt danach etwas traurig zu fühlen. Der Nutzen zeigt sich meist in den Tagen danach.' },
    ],
  },
  'bedtime-list': {
    title: '5-Minuten-To-do-Liste vor dem Schlafen',
    summary: 'Schreib die To-dos für morgen so konkret wie möglich auf, damit dein Gehirn sie nicht mehr festhalten muss.',
    why: 'In einer Schlaflabor-Studie schliefen Menschen, die 5 Minuten lang eine konkrete To-do-Liste schrieben, deutlich schneller ein als solche, die über erledigte Aufgaben schrieben. Je konkreter die Liste, desto schneller schliefen sie ein.',
    steps: [
      { body: 'Dimm den Bildschirm so weit wie möglich, oder besser: nimm Papier neben dem Bett.' },
      { body: 'Schreib alles auf, was du morgen und in den nächsten Tagen tun musst. Sei konkret («Sam wegen Freitag mailen», nicht «Arbeitszeug»).', fields: ['To-do…'] },
      { body: 'Es ist aufgeschrieben. Dein Gehirn darf es loslassen. Leg das Handy weg und probier den Body-Scan oder die 4-ein-/6-aus-Atmung.' },
    ],
  },
  'brain-dump': {
    title: 'Brain-Dump & eins auswählen',
    summary: 'Leere alle Gedanken, Aufgaben und Sorgen aufs Papier und kreise dann nur eine Sache ein, die du als Nächstes tust.',
    why: 'Das Arbeitsgedächtnis ist begrenzt, besonders bei ADHS. Aufgaben auszulagern, macht es frei. Das Aufschreiben von To-dos verringerte in einer Laborstudie die gedankliche Last vor dem Schlafen, und KVT bei ADHS im Erwachsenenalter setzt stark auf schriftliche Listen und Planung.',
    steps: [
      { body: 'Kipp alles aus. Aufgaben, Sorgen, zufällige Gedanken, halbe Sätze. Keine Ordnung. (Nichts wird gespeichert.)', fields: ['Alles in meinem Kopf…'] },
      { body: 'Schau auf die Liste. Welche EINE Sache würde, wenn erledigt, den grössten Unterschied oder die grösste Erleichterung bringen?', fields: ['Die eine Sache…'] },
      { body: 'Nur die existiert jetzt. Brauchst du Hilfe beim Anfangen? Probier «Kleine Schritte + 5-Minuten-Start».' },
    ],
  },
};

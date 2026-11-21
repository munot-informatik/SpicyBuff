import type { Source } from './types';

/**
 * Central reference list. Every exercise links to one or more of these.
 * Notes are deliberately honest about the strength of the evidence.
 */
const doi = (d: string) => `https://doi.org/${d}`;

export const S = {
  // ---------- CBT general ----------
  hofmann2012: {
    citation:
      'Hofmann, S. G., Asnaani, A., Vonk, I. J., Sawyer, A. T., & Fang, A. (2012). The efficacy of cognitive behavioral therapy: A review of meta-analyses. Cognitive Therapy and Research, 36(5), 427–440.',
    url: doi('10.1007/s10608-012-9476-1'),
    note: 'Reviews 269 meta-analyses. CBT has strong support for anxiety disorders, anger and general stress.',
  },
  cuijpers2016: {
    citation:
      'Cuijpers, P., Cristea, I. A., Karyotaki, E., Reijnders, M., & Huibers, M. J. (2016). How effective are cognitive behavior therapies for major depression and anxiety disorders? World Psychiatry, 15(3), 245–258.',
    url: doi('10.1002/wps.20346'),
    note: 'CBT is effective for depression and anxiety disorders, though effects may be somewhat smaller than older studies suggested.',
  },
  jamison1995: {
    citation:
      'Jamison, C., & Scogin, F. (1995). The outcome of cognitive bibliotherapy with depressed adults. Journal of Consulting and Clinical Psychology, 63(4), 644–650.',
    url: doi('10.1037/0022-006X.63.4.644'),
    note: 'Reading and working through "Feeling Good" reduced depressive symptoms compared with a waiting list.',
  },
  burns1980: {
    citation: 'Burns, D. D. (1980/1999). Feeling Good: The New Mood Therapy. New York: William Morrow / Avon.',
    note: 'Source of the triple-column technique, the 10 cognitive distortions, TIC-TOC and the anti-perfectionism sheet.',
  },
  // ---------- Panic / anxiety ----------
  clark1986: {
    citation: 'Clark, D. M. (1986). A cognitive approach to panic. Behaviour Research and Therapy, 24(4), 461–470.',
    url: doi('10.1016/0005-7967(86)90011-2'),
    note: 'Panic is driven by misreading normal body sensations as a catastrophe. Re-interpreting them breaks the loop.',
  },
  pompoli2016: {
    citation:
      'Pompoli, A., Furukawa, T. A., Imai, H., Tajika, A., Efthimiou, O., & Salanti, G. (2016). Psychological therapies for panic disorder with or without agoraphobia in adults: A network meta-analysis. Cochrane Database of Systematic Reviews, 4, CD011004.',
    url: doi('10.1002/14651858.CD011004.pub2'),
    note: 'CBT was the psychological therapy with the most consistent evidence for panic disorder.',
  },
  borkovec1983: {
    citation:
      'Borkovec, T. D., Wilkinson, L., Folensbee, R., & Lerman, C. (1983). Stimulus control applications to the treatment of worry. Behaviour Research and Therapy, 21(3), 247–251.',
    url: doi('10.1016/0005-7967(83)90206-1'),
    note: 'The original "worry time" study. Postponing worry to a set 30-minute slot reduced time spent worrying.',
  },
  mcgowan2013: {
    citation:
      'McGowan, S. K., & Behar, E. (2013). A preliminary investigation of stimulus control training for worry: Effects on anxiety and insomnia. Behavior Modification, 37(1), 90–112.',
    url: doi('10.1177/0145445512455661'),
    note: 'Worry postponement lowered worry, anxiety and insomnia symptoms in people with high worry.',
  },
  carleton2016: {
    citation:
      'Carleton, R. N. (2016). Into the unknown: A review and synthesis of contemporary models involving uncertainty. Journal of Anxiety Disorders, 39, 30–43.',
    url: doi('10.1016/j.janxdis.2016.02.007'),
    note: 'Intolerance of uncertainty is a shared driver across many anxiety problems, and a useful target for treatment.',
  },
  dugas2007: {
    citation:
      'Dugas, M. J., & Robichaud, M. (2007). Cognitive-Behavioral Treatment for Generalized Anxiety Disorder: From Science to Practice. New York: Routledge.',
    note: 'Treatment manual that includes the "worry tree" style split between practical and hypothetical worries.',
  },
  // ---------- Social anxiety ----------
  mayowilson2014: {
    citation:
      'Mayo-Wilson, E., Dias, S., Mavranezouli, I., et al. (2014). Psychological and pharmacological interventions for social anxiety disorder in adults: A systematic review and network meta-analysis. The Lancet Psychiatry, 1(5), 368–376.',
    url: doi('10.1016/S2215-0366(14)70329-3'),
    note: 'Individual CBT had the strongest effects of the psychological treatments for social anxiety.',
  },
  wells1995: {
    citation:
      'Wells, A., Clark, D. M., Salkovskis, P., Ludgate, J., Hackmann, A., & Gelder, M. (1995). Social phobia: The role of in-situation safety behaviors in maintaining anxiety and negative beliefs. Behavior Therapy, 26(1), 153–161.',
    url: doi('10.1016/S0005-7894(05)80088-7'),
    note: 'Dropping "safety behaviors" during exposure reduced anxiety more than exposure alone.',
  },
  // ---------- Paranoia ----------
  freeman2015: {
    citation:
      'Freeman, D., Dunn, G., Startup, H., et al. (2015). Effects of cognitive behaviour therapy for worry on persecutory delusions in patients with psychosis (WIT): A parallel, single-blind, randomised controlled trial with a mediation analysis. The Lancet Psychiatry, 2(4), 305–313.',
    url: doi('10.1016/S2215-0366(15)00039-5'),
    note: 'Reducing worry with CBT also reduced paranoid thinking. Worry fuels paranoia.',
  },
  freemanBook2008: {
    citation: 'Freeman, D., & Freeman, J. (2008). Paranoia: The 21st-Century Fear. Oxford University Press.',
    note: 'Accessible overview showing that mild paranoid thoughts are common in the general population.',
  },
  // ---------- OCD / intrusive ----------
  rachman1978: {
    citation:
      'Rachman, S., & de Silva, P. (1978). Abnormal and normal obsessions. Behaviour Research and Therapy, 16(4), 233–248.',
    url: doi('10.1016/0005-7967(78)90022-0'),
    note: 'Nearly 80% of people without OCD reported unwanted intrusive thoughts similar in content to clinical obsessions.',
  },
  ost2015: {
    citation:
      'Öst, L.-G., Havnen, A., Hansen, B., & Kvale, G. (2015). Cognitive behavioral treatments of obsessive–compulsive disorder: A systematic review and meta-analysis of studies published 1993–2014. Clinical Psychology Review, 40, 156–169.',
    url: doi('10.1016/j.cpr.2015.06.003'),
    note: 'Exposure and response prevention and cognitive therapy show large effects for OCD.',
  },
  // ---------- Breathing / relaxation / body ----------
  balban2023: {
    citation:
      'Balban, M. Y., Neri, E., Kogon, M. M., et al. (2023). Brief structured respiration practices enhance mood and reduce physiological arousal. Cell Reports Medicine, 4(1), 100895.',
    url: doi('10.1016/j.xcrm.2022.100895'),
    note: 'Five minutes a day of exhale-focused "cyclic sighing" improved mood more than mindfulness meditation. It is one trial, and a replication attempt found weaker effects.',
  },
  fincham2023: {
    citation:
      'Fincham, G. W., Strauss, C., Montero-Marin, J., & Cavanagh, K. (2023). Effect of breathwork on stress and mental health: A meta-analysis of randomised-controlled trials. Scientific Reports, 13, 432.',
    url: doi('10.1038/s41598-022-27247-y'),
    note: 'Across RCTs, breathwork produced small-to-moderate reductions in stress, anxiety and depressive symptoms.',
  },
  zaccaro2018: {
    citation:
      'Zaccaro, A., Piarulli, A., Laurino, M., et al. (2018). How breath-control can change your life: A systematic review on psycho-physiological correlates of slow breathing. Frontiers in Human Neuroscience, 12, 353.',
    url: doi('10.3389/fnhum.2018.00353'),
    note: 'Slow breathing (around 6 breaths a minute) is linked to higher heart-rate variability, more relaxation and less anxiety.',
  },
  lehrer2014: {
    citation:
      'Lehrer, P. M., & Gevirtz, R. (2014). Heart rate variability biofeedback: How and why does it work? Frontiers in Psychology, 5, 756.',
    url: doi('10.3389/fpsyg.2014.00756'),
    note: 'Explains how breathing at about 6 breaths a minute boosts the body\'s calming reflexes.',
  },
  manzoni2008: {
    citation:
      'Manzoni, G. M., Pagnini, F., Castelnuovo, G., & Molinari, E. (2008). Relaxation training for anxiety: A ten-years systematic review with meta-analysis. BMC Psychiatry, 8, 41.',
    url: doi('10.1186/1471-244X-8-41'),
    note: 'Relaxation training, including progressive muscle relaxation, had a medium-to-large effect on anxiety.',
  },
  ackermann2023: {
    citation:
      'Ackermann, S. P., Raab, M., Backschat, S., Javelle, F., Laborde, S., et al. (2023). The diving response and cardiac vagal activity: A systematic review and meta-analysis. Psychophysiology, 60(3), e14183.',
    url: doi('10.1111/psyp.14183'),
    note: 'Cold water on the face reliably triggers the "diving response" that slows the heart. The authors rate the evidence quality as low, and it was not tested in emotional crises.',
  },
  singh2023: {
    citation:
      'Singh, B., Olds, T., Curtis, R., et al. (2023). Effectiveness of physical activity interventions for improving depression, anxiety and distress: An overview of systematic reviews. British Journal of Sports Medicine, 57(18), 1203–1209.',
    url: doi('10.1136/bjsports-2022-106195'),
    note: 'Physical activity had medium effects on depression and anxiety, and short, higher-intensity sessions worked well.',
  },
  // ---------- DBT ----------
  linehan2015: {
    citation: 'Linehan, M. M. (2015). DBT Skills Training Manual (2nd ed.). New York: Guilford Press.',
    note: 'The official source for the TIPP, STOP, Check the Facts and Opposite Action skills.',
  },
  storebo2020: {
    citation:
      'Storebø, O. J., Stoffers-Winterling, J. M., Völlm, B. A., et al. (2020). Psychological therapies for people with borderline personality disorder. Cochrane Database of Systematic Reviews, 5, CD012955.',
    url: doi('10.1002/14651858.CD012955.pub2'),
    note: 'DBT was the most-studied therapy for BPD, with benefits for BPD severity and self-harm compared with usual care.',
  },
  arntz2022: {
    citation:
      'Arntz, A., Jacob, G. A., Lee, C. W., et al. (2022). Effectiveness of predominantly group schema therapy and combined individual and group schema therapy for borderline personality disorder: A randomized clinical trial. JAMA Psychiatry, 79(4), 287–299.',
    url: doi('10.1001/jamapsychiatry.2022.0010'),
    note: 'Schema therapy, which works directly with abandonment fears, outperformed usual treatment for BPD.',
  },
  // ---------- ACT ----------
  atjak2015: {
    citation:
      'A-Tjak, J. G., Davis, M. L., Morina, N., Powers, M. B., Smits, J. A., & Emmelkamp, P. M. (2015). A meta-analysis of the efficacy of acceptance and commitment therapy for clinically relevant mental and physical health problems. Psychotherapy and Psychosomatics, 84(1), 30–36.',
    url: doi('10.1159/000365764'),
    note: 'ACT outperformed waitlist and usual care, and performed similarly to established treatments.',
  },
  masuda2004: {
    citation:
      'Masuda, A., Hayes, S. C., Sackett, C. F., & Twohig, M. P. (2004). Cognitive defusion and self-relevant negative thoughts: Examining the impact of a ninety year old technique. Behaviour Research and Therapy, 42(4), 477–485.',
    url: doi('10.1016/j.brat.2003.10.008'),
    note: 'Repeating a negative word aloud quickly for 30 seconds reduced its believability and distress.',
  },
  hayes2012: {
    citation:
      'Hayes, S. C., Strosahl, K. D., & Wilson, K. G. (2012). Acceptance and Commitment Therapy: The Process and Practice of Mindful Change (2nd ed.). New York: Guilford Press.',
    note: 'The core ACT text, covering defusion, acceptance, values and committed action.',
  },
  // ---------- Mindfulness ----------
  hofmann2010: {
    citation:
      'Hofmann, S. G., Sawyer, A. T., Witt, A. A., & Oh, D. (2010). The effect of mindfulness-based therapy on anxiety and depression: A meta-analytic review. Journal of Consulting and Clinical Psychology, 78(2), 169–183.',
    url: doi('10.1037/a0018555'),
    note: 'Mindfulness-based therapy had moderate effects on anxiety and mood symptoms.',
  },
  kuyken2016: {
    citation:
      'Kuyken, W., Warren, F. C., Taylor, R. S., et al. (2016). Efficacy of mindfulness-based cognitive therapy in prevention of depressive relapse: An individual patient data meta-analysis from randomized trials. JAMA Psychiatry, 73(6), 565–574.',
    url: doi('10.1001/jamapsychiatry.2016.0076'),
    note: 'MBCT reduced the risk of depression coming back compared with usual care.',
  },
  lieberman2007: {
    citation:
      'Lieberman, M. D., Eisenberger, N. I., Crockett, M. J., Tom, S. M., Pfeifer, J. H., & Way, B. M. (2007). Putting feelings into words: Affect labeling disrupts amygdala activity in response to affective stimuli. Psychological Science, 18(5), 421–428.',
    url: doi('10.1111/j.1467-9280.2007.01916.x'),
    note: 'Naming an emotion ("this is fear") reduced activity in the brain\'s threat center.',
  },
  torre2018: {
    citation:
      'Torre, J. B., & Lieberman, M. D. (2018). Putting feelings into words: Affect labeling as implicit emotion regulation. Emotion Review, 10(2), 116–124.',
    url: doi('10.1177/1754073917742706'),
    note: 'Review showing affect labeling reliably dampens emotional reactions.',
  },
  // ---------- Compassion ----------
  ferrari2019: {
    citation:
      'Ferrari, M., Hunt, C., Harrysunker, A., Abbott, M. J., Beath, A. P., & Einstein, D. A. (2019). Self-compassion interventions and psychosocial outcomes: A meta-analysis of RCTs. Mindfulness, 10, 1455–1473.',
    url: doi('10.1007/s12671-019-01134-6'),
    note: 'Self-compassion training reduced self-criticism, rumination, depression and anxiety.',
  },
  neff2013: {
    citation:
      'Neff, K. D., & Germer, C. K. (2013). A pilot study and randomized controlled trial of the mindful self-compassion program. Journal of Clinical Psychology, 69(1), 28–44.',
    url: doi('10.1002/jclp.21923'),
    note: 'The Mindful Self-Compassion program increased self-compassion and reduced anxiety, stress and depression.',
  },
  gilbert2009: {
    citation: 'Gilbert, P. (2009). Introducing compassion-focused therapy. Advances in Psychiatric Treatment, 15(3), 199–208.',
    url: doi('10.1192/apt.bp.107.005264'),
    note: 'Describes the threat, drive and soothing systems and why shame responds to compassion.',
  },
  // ---------- Behavioral activation / motivation ----------
  ekers2014: {
    citation:
      'Ekers, D., Webster, L., Van Straten, A., Cuijpers, P., Richards, D., & Gilbody, S. (2014). Behavioural activation for depression: An update of meta-analysis of effectiveness and sub group analysis. PLoS ONE, 9(6), e100100.',
    url: doi('10.1371/journal.pone.0100100'),
    note: 'Scheduling small rewarding activities was as effective as full CBT for depression.',
  },
  gollwitzer2006: {
    citation:
      'Gollwitzer, P. M., & Sheeran, P. (2006). Implementation intentions and goal achievement: A meta-analysis of effects and processes. Advances in Experimental Social Psychology, 38, 69–119.',
    url: doi('10.1016/S0065-2601(06)38002-1'),
    note: '"If X, then I will Y" plans had a medium-to-large effect on actually following through.',
  },
  safren2010: {
    citation:
      'Safren, S. A., Sprich, S., Mimiaga, M. J., et al. (2010). Cognitive behavioral therapy vs relaxation with educational support for medication-treated adults with ADHD and persistent symptoms: A randomized controlled trial. JAMA, 304(8), 875–880.',
    url: doi('10.1001/jama.2010.1192'),
    note: 'CBT focused on organizing, planning and task-breaking reduced ADHD symptoms beyond medication.',
  },
  biwer2023: {
    citation:
      'Biwer, F., Wiradhany, W., oude Egbrink, M. G. A., & de Bruin, A. B. H. (2023). Understanding effort regulation: Comparing "Pomodoro" breaks and self-regulated breaks. British Journal of Educational Psychology, 93(S2), 353–367.',
    url: doi('10.1111/bjep.12593'),
    note: 'Pre-set work-and-break intervals gave mood benefits and similar output in less time than ad-hoc breaks. Students, not an ADHD sample, and later work questions some results.',
  },
  // ---------- Sleep ----------
  trauer2015: {
    citation:
      'Trauer, J. M., Qian, M. Y., Doyle, J. S., Rajaratnam, S. M., & Cunnington, D. (2015). Cognitive behavioral therapy for chronic insomnia: A systematic review and meta-analysis. Annals of Internal Medicine, 163(3), 191–204.',
    url: doi('10.7326/M14-2841'),
    note: 'CBT-I cut the time to fall asleep by about 19 minutes and the time awake at night by about 26 minutes.',
  },
  scullin2018: {
    citation:
      'Scullin, M. K., Krueger, M. L., Ballard, H. K., Pruett, N., & Bliwise, D. L. (2018). The effects of bedtime writing on difficulty falling asleep: A polysomnographic study comparing to-do lists and completed activity lists. Journal of Experimental Psychology: General, 147(1), 139–146.',
    url: doi('10.1037/xge0000374'),
    note: 'Writing a specific to-do list for 5 minutes before bed helped people fall asleep faster.',
  },
  ekholm2020: {
    citation:
      'Ekholm, B., Spulber, S., & Adler, M. (2020). A randomized controlled study of weighted chain blankets for insomnia in psychiatric disorders. Journal of Clinical Sleep Medicine, 16(9), 1567–1577.',
    url: doi('10.5664/jcsm.8636'),
    note: 'Weighted blankets reduced insomnia severity in people with ADHD, depression, anxiety and bipolar disorder.',
  },
  // ---------- Writing ----------
  pennebaker1997: {
    citation:
      'Pennebaker, J. W. (1997). Writing about emotional experiences as a therapeutic process. Psychological Science, 8(3), 162–166.',
    url: doi('10.1111/j.1467-9280.1997.tb00403.x'),
    note: 'Writing about deep feelings for 15–20 minutes on a few days was linked to better health and mood.',
  },
  frattaroli2006: {
    citation:
      'Frattaroli, J. (2006). Experimental disclosure and its moderators: A meta-analysis. Psychological Bulletin, 132(6), 823–865.',
    url: doi('10.1037/0033-2909.132.6.823'),
    note: 'Expressive writing has a small but real average benefit. It works best when done privately and without rushing.',
  },
  // ---------- Rumination ----------
  watkins2011: {
    citation:
      'Watkins, E. R., Mullan, E., Wingrove, J., et al. (2011). Rumination-focused cognitive–behavioural therapy for residual depression: Phase II randomised controlled trial. British Journal of Psychiatry, 199(4), 317–322.',
    url: doi('10.1192/bjp.bp.110.090282'),
    note: 'Shifting from abstract "why?" thinking to concrete "how?" thinking reduced rumination and depression.',
  },
  // ---------- Anger ----------
  beck1998: {
    citation:
      'Beck, R., & Fernandez, E. (1998). Cognitive-behavioral therapy in the treatment of anger: A meta-analysis. Cognitive Therapy and Research, 22(1), 63–74.',
    url: doi('10.1023/A:1018763902991'),
    note: 'CBT for anger produced about a 76% improvement over untreated comparison groups.',
  },
  // ---------- Loneliness / social / contribution ----------
  masi2011: {
    citation:
      'Masi, C. M., Chen, H.-Y., Hawkley, L. C., & Cacioppo, J. T. (2011). A meta-analysis of interventions to reduce loneliness. Personality and Social Psychology Review, 15(3), 219–266.',
    url: doi('10.1177/1088868310377394'),
    note: 'The most effective loneliness interventions targeted negative "social threat" thinking, not just more contact.',
  },
  curry2018: {
    citation:
      'Curry, O. S., Rowland, L. A., Van Lissa, C. J., Zlotowitz, S., McAlaney, J., & Whitehouse, H. (2018). Happy to help? A systematic review and meta-analysis of the effects of performing acts of kindness on the well-being of the actor. Journal of Experimental Social Psychology, 76, 320–329.',
    url: doi('10.1016/j.jesp.2018.02.014'),
    note: 'Doing kind things for others produced a small-to-medium boost in the helper\'s own well-being.',
  },
  // ---------- FOMO / social media ----------
  przybylski2013: {
    citation:
      'Przybylski, A. K., Murayama, K., DeHaan, C. R., & Gladwell, V. (2013). Motivational, emotional, and behavioral correlates of fear of missing out. Computers in Human Behavior, 29(4), 1841–1848.',
    url: doi('10.1016/j.chb.2013.02.014'),
    note: 'FOMO is linked to unmet needs for competence, autonomy and connection, and to more social-media use.',
  },
  hunt2018: {
    citation:
      'Hunt, M. G., Marx, R., Lipson, C., & Young, J. (2018). No more FOMO: Limiting social media decreases loneliness and depression. Journal of Social and Clinical Psychology, 37(10), 751–768.',
    url: doi('10.1521/jscp.2018.37.10.751'),
    note: 'Limiting social media to 30 minutes a day for three weeks reduced loneliness and depression.',
  },
  // ---------- Perfectionism / impostor ----------
  galloway2022: {
    citation:
      'Galloway, R., Watson, H., Greene, D., Shafran, R., & Egan, S. J. (2022). The efficacy of randomised controlled trials of cognitive behaviour therapy for perfectionism: A systematic review and meta-analysis. Cognitive Behaviour Therapy, 51(2), 170–184.',
    url: doi('10.1080/16506073.2021.1952302'),
    note: 'CBT for perfectionism reduced perfectionism, and also reduced anxiety and depression.',
  },
  bravata2020: {
    citation:
      'Bravata, D. M., Watts, S. A., Keefer, A. L., et al. (2020). Prevalence, predictors, and treatment of impostor syndrome: A systematic review. Journal of General Internal Medicine, 35(4), 1252–1275.',
    url: doi('10.1007/s11606-019-05364-1'),
    note: 'Impostor feelings are very common, up to 82% in some samples. Normalizing them and talking openly helps.',
  },
  // ---------- Dissociation ----------
  hunter2005: {
    citation:
      'Hunter, E. C. M., Baker, D., Phillips, M. L., Sierra, M., & David, A. S. (2005). Cognitive-behaviour therapy for depersonalisation disorder: An open study. Behaviour Research and Therapy, 43(9), 1121–1130.',
    url: doi('10.1016/j.brat.2004.08.003'),
    note: 'CBT, including grounding and re-interpreting the "unreal" feeling as a harmless anxiety response, reduced depersonalisation.',
  },
  // ---------- Autism / sensory ----------
  raymaker2020: {
    citation:
      'Raymaker, D. M., Teo, A. R., Steckler, N. A., et al. (2020). "Having all of your internal resources exhausted beyond measure and being left with no clean-up crew": Defining autistic burnout. Autism in Adulthood, 2(2), 132–143.',
    url: doi('10.1089/aut.2019.0079'),
    note: 'Defines autistic burnout as exhaustion, loss of skills and reduced tolerance to stimuli. Rest and withdrawal from demands helped recovery.',
  },
  phung2021: {
    citation:
      'Phung, J., Penner, M., Pirlot, C., & Welch, C. (2021). What I wish you knew: Insights on burnout, inertia, meltdown, and shutdown from autistic youth. Frontiers in Psychology, 12, 741421.',
    url: doi('10.3389/fpsyg.2021.741421'),
    note: 'Autistic youth describe sensory overload as a key trigger of meltdowns and shutdowns, and reducing input as a key relief.',
  },
  pfeiffer2019: {
    citation:
      'Pfeiffer, B., Erb, S. R., & Slugg, L. (2019). Impact of noise-attenuating headphones on participation in the home, community, and school for children with autism spectrum disorder. Physical & Occupational Therapy in Pediatrics, 39(1), 60–76.',
    url: doi('10.1080/01942638.2018.1496963'),
    note: 'An interview study: parents and teachers reported that noise-reducing headphones helped sound-sensitive autistic children take part at home, school and in public.',
  },
  kapp2019: {
    citation:
      'Kapp, S. K., Steward, R., Crane, L., Elliott, D., Elphick, C., Pellicano, E., & Russell, G. (2019). "People should be allowed to do what they like": Autistic adults\' views and experiences of stimming. Autism, 23(7), 1782–1792.',
    url: doi('10.1177/1362361319829628'),
    note: 'Autistic adults describe stimming as a self-regulation tool that helps manage overwhelming input and emotions.',
  },
  // ---------- Adlerian ----------
  kishimi2018: {
    citation:
      'Kishimi, I., & Koga, F. (2013/2018). The Courage to Be Disliked. London: Allen & Unwin.',
    note: 'A popular dialogue-style introduction to Adlerian psychology. Philosophy, not a clinical trial.',
  },
  carlson2006: {
    citation:
      'Carlson, J., Watts, R. E., & Maniacci, M. (2006). Adlerian Therapy: Theory and Practice. Washington, DC: American Psychological Association.',
    note: 'The APA\'s clinical overview of Adlerian therapy, covering encouragement, social interest and life tasks.',
  },
  // ---------- Safety ----------
  stanley2012: {
    citation:
      'Stanley, B., & Brown, G. K. (2012). Safety Planning Intervention: A brief intervention to mitigate suicide risk. Cognitive and Behavioral Practice, 19(2), 256–264.',
    url: doi('10.1016/j.cbpra.2011.01.001'),
    note: 'A written safety plan (warning signs, coping steps, people and crisis lines) is a recommended first step in a crisis.',
  },
  stanley2018: {
    citation:
      'Stanley, B., Brown, G. K., Brenner, L. A., et al. (2018). Comparison of the safety planning intervention with follow-up vs usual care of suicidal patients treated in the emergency department. JAMA Psychiatry, 75(9), 894–900.',
    url: doi('10.1001/jamapsychiatry.2018.1776'),
    note: 'Safety planning was linked to about half as much suicidal behavior over six months.',
  },
} satisfies Record<string, Source>;

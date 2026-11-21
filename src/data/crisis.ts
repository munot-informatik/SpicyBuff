export interface CrisisLine {
  region: string;
  lines: { name: string; number: string; note?: string }[];
}

/**
 * Crisis lines. Numbers can change, so verify locally. findahelpline.com lists
 * services worldwide. Last reviewed: November 2026.
 */
export const EMERGENCY_NOTE =
  'If you or someone else is in immediate danger, call your local emergency number now: 112 (EU and much of the world), 911 (US / Canada), 999 (UK), 000 (Australia).';

export const CRISIS_LINES: CrisisLine[] = [
  {
    region: 'Switzerland',
    lines: [
      { name: 'Die Dargebotene Hand / La Main Tendue', number: '143', note: '24/7, free' },
      { name: 'Pro Juventute (children & young people)', number: '147', note: '24/7, also chat & SMS' },
      { name: 'Emergency', number: '112' },
    ],
  },
  {
    region: 'Germany',
    lines: [
      { name: 'TelefonSeelsorge', number: '0800 111 0 111', note: '24/7, free' },
      { name: 'TelefonSeelsorge', number: '0800 111 0 222', note: '24/7, free' },
      { name: 'Emergency', number: '112' },
    ],
  },
  {
    region: 'Austria',
    lines: [
      { name: 'Telefonseelsorge', number: '142', note: '24/7, free' },
      { name: 'Emergency', number: '112' },
    ],
  },
  {
    region: 'United Kingdom & Ireland',
    lines: [
      { name: 'Samaritans', number: '116 123', note: '24/7, free' },
      { name: 'Emergency', number: '999 / 112' },
    ],
  },
  {
    region: 'United States',
    lines: [
      { name: '988 Suicide & Crisis Lifeline', number: '988', note: 'Call or text, 24/7' },
      { name: 'Emergency', number: '911' },
    ],
  },
  {
    region: 'Canada',
    lines: [
      { name: '9-8-8 Suicide Crisis Helpline', number: '988', note: 'Call or text, 24/7' },
      { name: 'Emergency', number: '911' },
    ],
  },
  {
    region: 'Australia',
    lines: [
      { name: 'Lifeline', number: '13 11 14', note: '24/7' },
      { name: 'Emergency', number: '000' },
    ],
  },
];

export const tel = (n: string) => `tel:${n.split('/')[0].replace(/[^0-9+]/g, '')}`;

import {
  BatteryLow,
  Bell,
  Brain,
  Circle,
  CircleDashed,
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  Compass,
  DoorOpen,
  Ear,
  Eye,
  EyeOff,
  Flame,
  Gauge,
  HandHeart,
  Headphones,
  Heart,
  HeartCrack,
  HeartHandshake,
  HeartPulse,
  Hourglass,
  Layers,
  Leaf,
  LifeBuoy,
  MonitorSmartphone,
  Moon,
  Pause,
  PenLine,
  RefreshCw,
  Ruler,
  Scale,
  Sparkles,
  Stethoscope,
  Tornado,
  User,
  Users,
  Vibrate,
  Waves,
  Wind,
  Zap,
  type LucideIcon,
  type LucideProps,
} from 'lucide-react';
import type { ModalityId } from '../data/types';

/** One line icon per feeling (replaces the old emoji). */
export const FEELING_ICONS: Record<string, LucideIcon> = {
  anxiety: CloudDrizzle,
  panic: HeartPulse,
  doom: CloudLightning,
  dread: Hourglass,
  paranoia: Eye,
  techparanoia: MonitorSmartphone,
  social: Users,
  intrusive: Zap,
  health: Stethoscope,
  shaking: Vibrate,
  sleep: Moon,
  sensory: Ear,
  dissociation: CircleDashed,
  burnout: BatteryLow,
  low: Cloud,
  empty: Circle,
  hopeless: CloudFog,
  shame: EyeOff,
  guilt: Scale,
  lonely: User,
  rejection: HeartCrack,
  abandonment: DoorOpen,
  anger: Flame,
  storm: Tornado,
  pleasing: HandHeart,
  paralysis: Pause,
  overwhelm: Layers,
  racing: Gauge,
  rumination: RefreshCw,
  fomo: Bell,
  perfectionism: Ruler,
  crisis: LifeBuoy,
};

export const MODALITY_ICONS: Record<ModalityId, LucideIcon> = {
  cbt: Brain,
  dbt: Waves,
  act: Compass,
  mindfulness: Leaf,
  compassion: Heart,
  adlerian: HeartHandshake,
  somatic: Wind,
  sensory: Headphones,
  writing: PenLine,
};

export const BestMatchIcon = Sparkles;

const base: LucideProps = { strokeWidth: 1.5, 'aria-hidden': true, focusable: false };

export function FeelingIcon({ id, size = 22 }: { id: string; size?: number }) {
  const I = FEELING_ICONS[id] ?? Circle;
  return <I {...base} size={size} className="icon" />;
}

export function ModalityIcon({ id, size = 22 }: { id: ModalityId; size?: number }) {
  const I = MODALITY_ICONS[id];
  return <I {...base} size={size} className="icon" />;
}

/** Any Lucide icon with the app's default line weight, hidden from screen readers. */
export function Icon({ as: I, size = 18 }: { as: LucideIcon; size?: number }) {
  return <I {...base} size={size} className="icon" />;
}

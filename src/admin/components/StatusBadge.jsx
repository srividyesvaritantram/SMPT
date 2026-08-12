import { CheckCircle2, XCircle, Clock, AlertCircle, Radio, Eye, Lock } from 'lucide-react';

const TONES = {
  active: 'success',
  paid: 'success',
  published: 'success',
  sent: 'success',
  live: 'live',
  pending: 'warning',
  scheduled: 'warning',
  draft: 'neutral',
  inactive: 'neutral',
  failed: 'danger',
  upcoming: 'gold',
  completed: 'maroon',
};

const ICONS = {
  success: CheckCircle2,
  warning: Clock,
  danger: XCircle,
  neutral: Lock,
  gold: Eye,
  live: Radio,
  maroon: AlertCircle,
};

export default function StatusBadge({ status }) {
  const key = String(status).toLowerCase();
  const tone = TONES[key] || 'neutral';
  const Cmp = ICONS[tone] || Eye;
  return (
    <span className={`admin-badge admin-badge--${tone}`}>
      <Cmp />
      {status}
    </span>
  );
}

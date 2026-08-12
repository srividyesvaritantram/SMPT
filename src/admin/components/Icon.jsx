import {
  LayoutDashboard, Users, BookOpen, PlayCircle, CalendarDays, Wallet,
  FileText, Bell, UserCircle, Settings, UserPlus, Video, Megaphone,
  CalendarPlus, Sparkles, Image, GraduationCap, BookMarked, Clock, CheckCircle2,
} from 'lucide-react';

const ICONS = {
  dashboard: LayoutDashboard,
  users: Users,
  book: BookOpen,
  play: PlayCircle,
  calendar: CalendarDays,
  wallet: Wallet,
  file: FileText,
  bell: Bell,
  userCircle: UserCircle,
  settings: Settings,
  user: UserPlus,
  video: Video,
  megaphone: Megaphone,
  event: CalendarPlus,
  course: BookMarked,
  content: Sparkles,
  image: Image,
  graduation: GraduationCap,
  clock: Clock,
  check: CheckCircle2,
};

export default function Icon({ name, ...rest }) {
  const Cmp = ICONS[name] || Sparkles;
  return <Cmp {...rest} />;
}

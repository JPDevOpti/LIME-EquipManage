import type { LucideIcon, LucideProps } from 'lucide-react'
import {
  LayoutDashboard,
  Boxes,
  CalendarClock,
  LifeBuoy,
  MessageCircleQuestion,
  UserRound,
  BookOpen,
  Settings,
  PackagePlus,
  PackageSearch,
  BarChart3,
  HandCoins,
  Circle
} from 'lucide-react'
import { cn } from '@/lib/cn'

const ChartColumnBigIcon = ({ className, strokeWidth = 1.5, ...props }: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M3 3v18" />
    <path d="M3 21h18" />
    <rect x="7" y="12" width="3.5" height="6" rx="0.8" />
    <rect x="12" y="8" width="3.5" height="10" rx="0.8" />
    <rect x="17" y="5" width="3.5" height="13" rx="0.8" />
  </svg>
)

const iconMap: Record<string, LucideIcon | typeof ChartColumnBigIcon> = {
  layout: LayoutDashboard,
  boxes: Boxes,
  calendar: CalendarClock,
  lifebuoy: LifeBuoy,
  'message-circle-question-mark': MessageCircleQuestion,
  user: UserRound,
  book: BookOpen,
  settings: Settings,
  packagePlus: PackagePlus,
  'package-search': PackageSearch,
  'bar-chart': BarChart3,
  'chart-column-big': ChartColumnBigIcon,
  'hand-coins': HandCoins
}

interface SidebarIconProps {
  name?: string
  className?: string
}

export function SidebarIcon({ name, className }: SidebarIconProps) {
  const Icon = name ? iconMap[name] ?? Circle : Circle
  return <Icon className={cn('h-5 w-5 text-white/50', className)} strokeWidth={1.5} />
}


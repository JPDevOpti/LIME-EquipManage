import type { LucideIcon } from 'lucide-react'
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
  Circle
} from 'lucide-react'
import { cn } from '@/lib/cn'

const iconMap: Record<string, LucideIcon> = {
  layout: LayoutDashboard,
  boxes: Boxes,
  calendar: CalendarClock,
  lifebuoy: LifeBuoy,
  'message-circle-question-mark': MessageCircleQuestion,
  user: UserRound,
  book: BookOpen,
  settings: Settings,
  packagePlus: PackagePlus,
  'package-search': PackageSearch
}

interface SidebarIconProps {
  name?: string
  className?: string
}

export function SidebarIcon({ name, className }: SidebarIconProps) {
  const Icon = name ? iconMap[name] ?? Circle : Circle
  return <Icon className={cn('h-5 w-5 text-white/50', className)} strokeWidth={1.5} />
}


"use client"

import { UserCircle, Mail, Phone, FileText, Users, CheckCircle, XCircle } from 'lucide-react'
import { cn } from '@/lib/cn'

interface InfoCardProps {
  icon: string
  label: string
  value: string
  isEmpty?: boolean
  statusColor?: 'green' | 'red' | 'yellow'
  tooltip?: string
}

export function InfoCard({
  icon,
  label,
  value,
  isEmpty = false,
  statusColor,
  tooltip
}: InfoCardProps) {
  const getIconComponent = () => {
    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
      user: UserCircle,
      email: Mail,
      phone: Phone,
      document: FileText,
      role: Users,
      status: statusColor === 'green' ? CheckCircle : XCircle,
      initials: UserCircle,
      registro: FileText
    }
    return iconMap[icon] || UserCircle
  }

  const getIconColor = () => {
    if (isEmpty) return 'text-slate-400'
    
    if (icon === 'status') {
      return statusColor === 'green' ? 'text-green-500' : 'text-red-500'
    }
    
    // Todos los iconos en azul claro
    return 'text-blue-400'
  }

  const getValueColor = () => {
    if (isEmpty) return 'text-slate-400'
    
    if (icon === 'status') {
      return statusColor === 'green' ? 'text-green-700' : 'text-red-700'
    }
    
    return 'text-slate-900'
  }

  const Icon = getIconComponent()

  return (
    <div
      className={cn(
        "p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-sm transition-all duration-200",
        isEmpty && 'opacity-60'
      )}
      title={tooltip}
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className="p-2 bg-white rounded-lg shadow-sm">
          <Icon className={cn("w-5 h-5", getIconColor())} />
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-slate-500 mb-1">
            {label}
          </p>
          <p className={cn("text-sm font-semibold truncate", getValueColor())}>
            {value}
          </p>
        </div>
      </div>
    </div>
  )
}


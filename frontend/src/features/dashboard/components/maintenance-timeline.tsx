'use client'

import { Card } from '@/components/ui/card'
import { Settings, SlidersHorizontal, AlertCircle } from 'lucide-react'
import { useServiceFilter } from '../context/service-filter-context'

import { MAINTENANCE_SCHEDULE } from '../data/mock-data'

export function MaintenanceTimeline() {
  const { selectedService } = useServiceFilter()

  const filteredSchedule = selectedService === 'all'
    ? MAINTENANCE_SCHEDULE
    : MAINTENANCE_SCHEDULE.filter(item => item.servicioKey === selectedService)

  return (
    <Card
      title="Agenda de mantenimientos"
      className="border-slate-200 bg-white shadow-sm"
    >
      <div className="space-y-3">
        {filteredSchedule.length === 0 ? (
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-8 text-center">
            <p className="text-sm text-slate-600">No hay mantenimientos programados para este servicio</p>
          </div>
        ) : (
          filteredSchedule.map((item, index) => (
            <div key={item.title} className="group relative">
              {/* Línea conectora */}
              {index < filteredSchedule.length - 1 && (
                <div className="absolute left-[18px] top-10 h-[calc(100%+0.25rem)] w-[2px] bg-gradient-to-b from-slate-200 to-transparent" />
              )}

              {/* Item */}
              <div className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50/50 p-2.5 transition-all hover:border-slate-200 hover:bg-white hover:shadow-sm">
                <span className={`grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg ${item.iconBg}`}>
                  <item.icon className={`h-4.5 w-4.5 ${item.iconColor}`} strokeWidth={2} />
                </span>
                <div className="min-w-0 flex-1 space-y-1">
                  <p className="text-sm font-semibold leading-tight text-slate-900">{item.title}</p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-600">
                    <span className="font-medium">{item.sede}</span>
                    <span className="text-slate-400">•</span>
                    <span>{item.servicio}</span>
                  </div>
                  <p className="text-xs text-slate-500">{item.technician}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  )
}


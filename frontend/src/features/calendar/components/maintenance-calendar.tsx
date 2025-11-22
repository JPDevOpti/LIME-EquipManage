"use client"

import { Settings, AlertTriangle, Gauge } from 'lucide-react'
import type { MonthData } from '../types'
import { cn } from '@/lib/cn'

interface MaintenanceCalendarProps {
  months: MonthData[]
  isLoading: boolean
  onSelectMonth?: (month: number) => void
  onShowEvents?: (month: number, type: 'Preventivo' | 'Correctivo' | 'Calibración') => void
}

export function MaintenanceCalendar({
  months,
  isLoading,
  onSelectMonth,
  onShowEvents
}: MaintenanceCalendarProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="p-4 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {months.map((month) => (
            <div
              key={month.number}
              onClick={() => onSelectMonth?.(month.number)}
              className={cn(
                "relative bg-white border rounded-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-md",
                month.isCurrent 
                  ? 'border-blue-500 ring-1 ring-blue-200' 
                  : 'border-slate-200 hover:border-slate-300'
              )}
            >
              {/* Nombre del mes */}
              <div 
                className={cn(
                  "mb-3 -mx-4 -mt-4 px-4 pt-3 pb-3 rounded-t-lg border-b-2",
                  month.isCurrent 
                    ? 'bg-emerald-50 border-emerald-400' 
                    : 'bg-cyan-50 border-cyan-400'
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 
                    className={cn(
                      "text-base font-bold",
                      month.isCurrent 
                        ? 'text-emerald-700' 
                        : 'text-cyan-800'
                    )}
                  >
                    {month.name}
                  </h3>
                  {month.isCurrent && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500 text-white">
                      Actual
                    </span>
                  )}
                </div>
              </div>

              {/* Información compacta */}
              <div className="space-y-2">
                {/* Preventivos */}
                <div 
                  onClick={(e) => {
                    e.stopPropagation()
                    onShowEvents?.(month.number, 'Preventivo')
                  }}
                  className="flex items-center justify-between text-sm p-2 rounded-md bg-cyan-50/30 border border-cyan-200/30 cursor-pointer hover:bg-cyan-50/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-cyan-800" />
                    <span className="text-slate-700 font-medium">Preventivos</span>
                  </div>
                  <span className="font-bold text-cyan-800">{month.preventivos}</span>
                </div>

                {/* Calibraciones */}
                <div 
                  onClick={(e) => {
                    e.stopPropagation()
                    onShowEvents?.(month.number, 'Calibración')
                  }}
                  className="flex items-center justify-between text-sm p-2 rounded-md bg-emerald-50/50 border border-emerald-200/50 cursor-pointer hover:bg-emerald-50/70 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-emerald-600" />
                    <span className="text-slate-700 font-medium">Calibraciones</span>
                  </div>
                  <span className="font-bold text-emerald-600">{month.calibraciones}</span>
                </div>

                {/* Correctivos */}
                <div 
                  onClick={(e) => {
                    e.stopPropagation()
                    onShowEvents?.(month.number, 'Correctivo')
                  }}
                  className="flex items-center justify-between text-sm p-2 rounded-md bg-orange-50/50 border border-orange-100/50 cursor-pointer hover:bg-orange-50/70 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600" />
                    <span className="text-slate-700 font-medium">Correctivos</span>
                  </div>
                  <span className="font-bold text-orange-600">{month.correctivos}</span>
                </div>
              </div>

              {/* Total */}
              <div className="mt-3 pt-3 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Total</span>
                  <span className="text-lg font-bold text-slate-900">{month.total}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading overlay */}
        {isLoading && (
          <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center rounded-xl">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 border-4 border-slate-300 border-t-slate-600 rounded-full animate-spin"></div>
              <p className="text-sm text-slate-600 font-medium">Cargando datos...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


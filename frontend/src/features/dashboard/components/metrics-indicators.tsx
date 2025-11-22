"use client"

import { Card } from '@/components/ui/card'
import { TrendingUp, TrendingDown, AlertCircle, Settings, SlidersHorizontal } from 'lucide-react'

const indicators = [
  {
    title: 'Mantenimientos preventivos',
    percentage: 92,
    trend: '+2.5%',
    trendUp: true,
    total: 156,
    completados: 143,
    pendientes: 13,
    mes: 'Noviembre 2025',
    icon: Settings,
    color: 'blue'
  },
  {
    title: 'Calibraciones',
    percentage: 86,
    trend: '+3.1%',
    trendUp: true,
    total: 65,
    completados: 56,
    pendientes: 9,
    mes: 'Noviembre 2025',
    icon: SlidersHorizontal,
    color: 'teal'
  },
  {
    title: 'Mantenimientos correctivos',
    percentage: 78,
    trend: '-1.2%',
    trendUp: false,
    total: 27,
    completados: 21,
    pendientes: 6,
    mes: 'Noviembre 2025',
    icon: AlertCircle,
    color: 'red',
    mesActual: 21,
    mesAnterior: 24,
    añoTotal: 245
  }
]

const colorClasses = {
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    icon: 'text-blue-600',
    border: 'border-blue-200'
  },
  red: {
    bg: 'bg-red-50',
    text: 'text-red-700',
    icon: 'text-red-600',
    border: 'border-red-200'
  },
  teal: {
    bg: 'bg-teal-50',
    text: 'text-teal-700',
    icon: 'text-teal-600',
    border: 'border-teal-200'
  }
}

export function MetricsIndicators() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {indicators.map((indicator) => {
        const colors = colorClasses[indicator.color as keyof typeof colorClasses]
        const Icon = indicator.icon
        const isCorrectivo = indicator.title === 'Mantenimientos correctivos'
        
        return (
          <Card
            key={indicator.title}
            className={`border ${colors.border} ${colors.bg} shadow-sm`}
          >
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className={`rounded-lg p-1.5 ${colors.bg} border ${colors.border}`}>
                    <Icon className={`h-4 w-4 ${colors.icon}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xs font-semibold text-slate-900 leading-tight">{indicator.title}</h3>
                    <p className="text-xs text-slate-500">{indicator.mes}</p>
                  </div>
                </div>
              </div>

              <div className="mt-3 space-y-2">
                {isCorrectivo ? (
                  <>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-3xl font-bold ${colors.text}`}>
                        {indicator.mesActual}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 border-t border-slate-200/60 pt-2">
                      <div className="text-center">
                        <p className="text-xs text-slate-500">Mes pasado</p>
                        <p className="text-sm font-semibold text-slate-900">{indicator.mesAnterior}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-slate-500">En el año</p>
                        <p className="text-sm font-semibold text-slate-900">{indicator.añoTotal}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-slate-500">Pendientes</p>
                        <p className="text-sm font-semibold text-amber-600">{indicator.pendientes}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-3xl font-bold ${colors.text}`}>
                        {indicator.percentage}%
                      </span>
                      <div className={`flex items-center gap-0.5 text-xs font-medium ${indicator.trendUp ? 'text-emerald-600' : 'text-red-600'}`}>
                        {indicator.trendUp ? (
                          <TrendingUp className="h-3 w-3" />
                        ) : (
                          <TrendingDown className="h-3 w-3" />
                        )}
                        {indicator.trend}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 border-t border-slate-200/60 pt-2">
                      <div className="text-center">
                        <p className="text-xs text-slate-500">Total</p>
                        <p className="text-sm font-semibold text-slate-900">{indicator.total}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-slate-500">Completados</p>
                        <p className="text-sm font-semibold text-emerald-600">{indicator.completados}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-slate-500">Pendientes</p>
                        <p className="text-sm font-semibold text-amber-600">{indicator.pendientes}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}


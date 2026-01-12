"use client"

import { BarChartMonthly } from '@/features/dashboard/components/bar-chart-monthly'
import { TrendChart } from '@/features/dashboard/components/trend-chart'
import { MetricsIndicators } from '@/features/dashboard/components/metrics-indicators'
import { MaintenanceTimeline } from '@/features/dashboard/components/maintenance-timeline'

import { ServiceSelector } from '@/features/dashboard/components/service-selector'
import { ServiceFilterProvider } from '@/features/dashboard/context/service-filter-context'

export default function DashboardPage() {
  return (
    <ServiceFilterProvider>
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        {/* Columna izquierda: Indicadores + Gráficos */}
        <div className="space-y-6">
          <MetricsIndicators />
          <BarChartMonthly />
          <TrendChart />
        </div>

        {/* Columna derecha: Filtro + Estado + Agenda */}
        <div className="space-y-6">
          <ServiceSelector />

          <MaintenanceTimeline />
        </div>
      </div>
    </ServiceFilterProvider>
  )
}


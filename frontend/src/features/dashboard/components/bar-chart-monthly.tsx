"use client"

import { Card } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { useServiceFilter } from '../context/service-filter-context'
import { getMonthlyChartData } from '../data/mock-data'

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const total = payload.reduce((sum: number, entry: any) => sum + entry.value, 0)

    return (
      <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
        <p className="mb-2 text-xs font-semibold text-slate-900">{label}</p>
        <div className="space-y-1.5">
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }} />
                <span className="text-xs text-slate-600">{entry.name}</span>
              </div>
              <span className="text-xs font-semibold text-slate-900">{entry.value}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 border-t border-slate-200 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-700">Total</span>
            <span className="text-xs font-bold text-slate-900">{total}</span>
          </div>
        </div>
      </div>
    )
  }
  return null
}

export function BarChartMonthly() {
  const { selectedService } = useServiceFilter()
  const monthlyData = getMonthlyChartData(selectedService)

  return (
    <Card
      className="border-slate-200 bg-white shadow-sm"
      title="Distribución Mensual de Mantenimientos"
    >
      <div className="h-[320px] w-full px-3 py-3 sm:px-4 sm:py-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={monthlyData}
            margin={{ top: 10, right: 10, left: -10, bottom: 5 }}
            barGap={4}
            barCategoryGap="20%"
          >
            <defs>
              <linearGradient id="preventivosGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#059669" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="correctivosGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#0891b2" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="calibracionesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#0d9488" stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
              vertical={false}
              opacity={0.5}
            />
            <XAxis
              dataKey="mes"
              tick={{ fill: '#64748b', fontSize: 11 }}
              axisLine={{ stroke: '#cbd5e1' }}
              tickLine={false}
              dy={8}
            />
            <YAxis
              tick={{ fill: '#64748b', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              dx={-8}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(148, 163, 184, 0.1)', radius: 4 }} />
            <Legend
              wrapperStyle={{
                paddingTop: '16px',
                fontSize: '12px'
              }}
              iconType="circle"
              iconSize={8}
            />
            <Bar
              dataKey="preventivos"
              fill="url(#preventivosGradient)"
              name="Preventivos"
              radius={[6, 6, 0, 0]}
              maxBarSize={60}
            />
            <Bar
              dataKey="correctivos"
              fill="url(#correctivosGradient)"
              name="Correctivos"
              radius={[6, 6, 0, 0]}
              maxBarSize={60}
            />
            <Bar
              dataKey="calibraciones"
              fill="url(#calibracionesGradient)"
              name="Calibraciones"
              radius={[6, 6, 0, 0]}
              maxBarSize={60}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

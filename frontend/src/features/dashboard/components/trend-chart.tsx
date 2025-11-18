"use client"

import { Card } from '@/components/ui/card'
import { ReferenceArea, ReferenceLine, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts'

// Datos simulados de cumplimiento por mes
const complianceData = [
  { mes: 'Ene', preventivos: 88, calibraciones: 82, objetivo: 90 },
  { mes: 'Feb', preventivos: 91, calibraciones: 85, objetivo: 90 },
  { mes: 'Mar', preventivos: 89, calibraciones: 84, objetivo: 90 },
  { mes: 'Abr', preventivos: 93, calibraciones: 87, objetivo: 90 },
  { mes: 'May', preventivos: 90, calibraciones: 86, objetivo: 90 },
  { mes: 'Jun', preventivos: 94, calibraciones: 89, objetivo: 90 },
  { mes: 'Jul', preventivos: 92, calibraciones: 88, objetivo: 90 },
  { mes: 'Ago', preventivos: 90, calibraciones: 85, objetivo: 90 },
  { mes: 'Sep', preventivos: 95, calibraciones: 90, objetivo: 90 },
  { mes: 'Oct', preventivos: 88, calibraciones: 83, objetivo: 90 },
  { mes: 'Nov', preventivos: 92, calibraciones: 86, objetivo: 90 },
  { mes: 'Dic', preventivos: 94, calibraciones: 88, objetivo: 90 }
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
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
              <span className="text-xs font-semibold text-slate-900">{entry.value}%</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return null
}

const CustomDot = (props: any) => {
  const { cx, cy, fill } = props
  return (
    <circle 
      cx={cx} 
      cy={cy} 
      r={4} 
      fill={fill} 
      stroke="white" 
      strokeWidth={2}
      className="transition-all hover:r-6"
    />
  )
}

export function TrendChart() {
  return (
    <Card className="border-slate-200 bg-white shadow-sm">
      <div className="h-[320px] w-full px-3 py-3 sm:px-4 sm:py-4">
          <ResponsiveContainer width="100%" height="100%">
          <AreaChart 
            data={complianceData} 
            margin={{ top: 10, right: 10, left: -10, bottom: 5 }}
          >
            <defs>
              <linearGradient id="preventivosAreaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="calibracionesAreaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.05} />
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
              domain={[60, 100]}
              tick={{ fill: '#64748b', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              dx={-8}
              label={{ 
                value: '% Cumplimiento', 
                angle: -90, 
                position: 'insideLeft', 
                fill: '#64748b',
                style: { fontSize: 11 }
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ 
                paddingTop: '16px',
                fontSize: '12px'
              }}
              iconType="circle"
              iconSize={8}
            />
            {/* Zona objetivo */}
            <ReferenceArea y1={90} y2={100} fill="#fee2e2" fillOpacity={0.2} strokeOpacity={0} />
            <Line
              type="monotone"
              dataKey="objetivo"
              stroke="#ef4444"
              strokeDasharray="4 4"
              strokeWidth={2}
              isAnimationActive={false}
              dot={false}
              activeDot={false}
              legendType="line"
              name="Meta 90%"
              strokeOpacity={0}
            />
            <Area
              type="monotone"
              dataKey="preventivos"
              stroke="#10b981"
              strokeWidth={3}
              fill="url(#preventivosAreaGradient)"
              name="Preventivos"
              dot={<CustomDot fill="#10b981" />}
              activeDot={{ r: 6, stroke: 'white', strokeWidth: 2 }}
            />
            <Area
              type="monotone"
              dataKey="calibraciones"
              stroke="#06b6d4"
              strokeWidth={3}
              fill="url(#calibracionesAreaGradient)"
              name="Calibraciones"
              dot={<CustomDot fill="#06b6d4" />}
              activeDot={{ r: 6, stroke: 'white', strokeWidth: 2 }}
            />
            {/* Línea de objetivo 90% */}
            <ReferenceLine
              y={90}
              stroke="#ef4444"
              strokeWidth={2.5}
              strokeDasharray="4 4"
              isFront
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}


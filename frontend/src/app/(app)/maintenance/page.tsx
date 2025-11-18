import { CalendarPreview } from '@/features/maintenance/components/calendar-preview'
import { WorkloadBoard } from '@/features/maintenance/components/workload-board'
import { Card } from '@/components/ui/card'

export default function MaintenancePage() {
  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-white">Mantenimiento</h1>
          <p className="text-sm text-white/60">
            Panel visual de programación. Todas las interacciones son mock y se conectarán luego a FastAPI.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
          Semana 46 · 27 órdenes activas · 88 % cumplimiento anual
        </div>
      </header>

      <CalendarPreview />
      <WorkloadBoard />

      <Card title="Indicadores de servicio" className="border-white/10 bg-white/5">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['Tiempo medio de respuesta', '5h 42m'],
            ['Tiempo medio de reparación', '11h 25m'],
            ['SLA proveedores externos', '82 %'],
            ['Alertas críticas activas', '3']
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-xs text-white/50">{label}</p>
              <p className="text-lg font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}


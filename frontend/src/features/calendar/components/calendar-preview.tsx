import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CalendarDays, ArrowRightCircle } from 'lucide-react'

const months = [
  { name: 'Nov', preventivos: 18, correctivos: 9, calibraciones: 6 },
  { name: 'Dic', preventivos: 22, correctivos: 7, calibraciones: 8 },
  { name: 'Ene', preventivos: 15, correctivos: 10, calibraciones: 4 },
  { name: 'Feb', preventivos: 19, correctivos: 5, calibraciones: 9 }
]

export function CalendarPreview() {
  return (
    <Card
      title="Calendario anual"
      description="Distribución de intervenciones. Los datos provienen de un mock y se reemplazarán con la API real."
      className="border-white/10 bg-white/5"
      actions={
        <Button variant="ghost" size="sm" className="gap-2">
          <CalendarDays className="h-4 w-4" />
          Ver calendario completo
        </Button>
      }
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {months.map((month) => (
          <div key={month.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold text-white/80">{month.name} 2025</p>
            <dl className="mt-3 space-y-2 text-xs text-white/60">
              <div className="flex justify-between">
                <dt>Preventivos</dt>
                <dd className="font-medium text-emerald-300">{month.preventivos}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Correctivos</dt>
                <dd className="font-medium text-amber-300">{month.correctivos}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Calibraciones</dt>
                <dd className="font-medium text-sky-300">{month.calibraciones}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between rounded-2xl border border-brand-500/30 bg-brand-500/10 px-4 py-3 text-sm text-brand-100">
        <p>
          Próxima oleada: semana del 25 de noviembre. Requiere coordinación con proveedores externos para 5 equipos.
        </p>
        <ArrowRightCircle className="hidden h-5 w-5 md:block" />
      </div>
    </Card>
  )
}


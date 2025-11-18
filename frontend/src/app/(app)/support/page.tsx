import { TicketBoard } from '@/features/support/components/ticket-board'
import { SupportStats } from '@/features/support/components/support-stats'
import { Card } from '@/components/ui/card'

export default function SupportPage() {
  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-white">Soporte</h1>
          <p className="text-sm text-white/60">
            Consola visual para seguimiento de tickets. Datos de ejemplo que serán reemplazados por llamadas a FastAPI.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
          Tiempo de primera respuesta: 1h 20m · 92 % tickets dentro de SLA
        </div>
      </header>

      <SupportStats />
      <TicketBoard />

      <Card title="Historial de interacciones" className="border-dashed border-white/15 bg-transparent text-white/50">
        <div className="flex h-56 items-center justify-center text-sm">
          Aquí vivirá una línea de tiempo con comunicación, adjuntos y actualizaciones en tiempo real.
        </div>
      </Card>
    </div>
  )
}


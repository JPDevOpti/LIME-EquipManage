import { Card } from '@/components/ui/card'
import { BadgeCheck, ClockAlert, Flame } from 'lucide-react'

const columns = [
  {
    title: 'Pendientes',
    icon: ClockAlert,
    color: 'text-amber-300',
    items: [
      { equipment: 'Calentador de tejidos', code: 'BIO-16870', due: '16 nov', owner: 'Martha Londoño' },
      { equipment: 'Sistema de agua ultra pura', code: 'BIO-16516', due: '20 nov', owner: 'Juan Quintero' }
    ]
  },
  {
    title: 'En proceso',
    icon: Flame,
    color: 'text-orange-300',
    items: [
      { equipment: 'Citocentrífuga Cytospin 4', code: 'BIO-16463', due: '14 nov', owner: 'Ana Rodríguez' },
      { equipment: 'Balanza analítica HR-200', code: 'BIO-16453', due: '15 nov', owner: 'Carlos Méndez' }
    ]
  },
  {
    title: 'Completadas',
    icon: BadgeCheck,
    color: 'text-emerald-300',
    items: [
      { equipment: 'Microscopio Olympus CX31', code: 'BIO-16526', due: '12 nov', owner: 'Equipo laboratorio' },
      { equipment: 'Estación de inclusión Arcadia', code: 'BIO-16467', due: '11 nov', owner: 'Proveedor externo' }
    ]
  }
]

export function WorkloadBoard() {
  return (
    <Card
      title="Carga de mantenimiento semanal"
      description="Tablero kanban simplificado. Las tarjetas interactuarán con el backend para mover estados."
      className="border-white/10 bg-white/5"
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {columns.map((column) => (
          <div key={column.title} className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2">
              <column.icon className={`h-4 w-4 ${column.color}`} />
              <p className="text-sm font-semibold text-white/80">{column.title}</p>
            </div>
            <div className="space-y-3">
              {column.items.map((item) => (
                <article key={item.code} className="space-y-2 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white/70">
                  <p className="text-sm font-semibold text-white">{item.equipment}</p>
                  <p>Código: {item.code}</p>
                  <p>Fecha objetivo: {item.due}</p>
                  <p>Responsable: {item.owner}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}


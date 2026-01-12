"use client"

import { useState, useRef, useEffect, Fragment } from 'react'
import { X, Settings, AlertTriangle, Gauge, CheckCircle, Save } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { MaintenanceEvent, MaintenanceType } from '../types'
import { cn } from '@/lib/cn'
import { MaintenanceCompleteModal } from './maintenance-complete-modal'

interface MaintenanceEventsModalProps {
  isOpen: boolean
  events: MaintenanceEvent[]
  type: MaintenanceType | null
  month: number | null
  year: number | null
  onClose: () => void
  onUpdateProcess?: (eventId: string, process: 'En proceso' | 'Pendiente' | 'Completado' | '') => void
  onComplete?: (data: {
    eventId: string
    exactCompletionDate: string
    reportNumber?: string
    reportFile?: File
    completionNotes?: string
  }) => void
  onUpdateEvent?: (event: MaintenanceEvent) => void
}

const monthNames = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
]

export function MaintenanceEventsModal({
  isOpen,
  events,
  type,
  month,
  year,
  onClose,
  onUpdateProcess,
  onComplete,
  onUpdateEvent
}: MaintenanceEventsModalProps) {
  const [selectedEventForComplete, setSelectedEventForComplete] = useState<MaintenanceEvent | null>(null)
  const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false)
  const [expandedEventId, setExpandedEventId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState({
    month: '',
    supplier: '',
    cost: ''
  })
  const selectRefs = useRef<Record<string, HTMLSelectElement>>({})

  const toggleEdit = (event: MaintenanceEvent) => {
    if (expandedEventId === event.id) {
      setExpandedEventId(null)
    } else {
      const eventDate = new Date(event.scheduledDate)
      const eventYear = eventDate.getFullYear()
      const eventMonth = String(eventDate.getMonth() + 1).padStart(2, '0')

      setExpandedEventId(event.id)
      setEditForm({
        month: `${eventYear}-${eventMonth}`,
        supplier: event.supplier || '',
        cost: event.cost ? event.cost.toString() : ''
      })
    }
  }

  const saveEdit = () => {
    if (!expandedEventId) return

    // Find the event
    const eventToUpdate = events.find(e => e.id === expandedEventId)
    if (!eventToUpdate) return

    // Create updated event
    const updatedEvent = { ...eventToUpdate }
    
    // Update fields
    if (editForm.supplier) updatedEvent.supplier = editForm.supplier
    if (editForm.cost) updatedEvent.cost = Number(editForm.cost)
    
    // Update date if changed (assumes day 1 of selected month)
    if (editForm.month) {
      updatedEvent.scheduledDate = `${editForm.month}-01` // Naive date update
    }

    onUpdateEvent?.(updatedEvent)
    setExpandedEventId(null)
  }

  useEffect(() => {
    if (!isOpen) {
      setSelectedEventForComplete(null)
      setIsCompleteModalOpen(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  const modalTitle = type && month !== null
    ? `${type}s - ${monthNames[month]} ${year || new Date().getFullYear()}`
    : 'Eventos de Mantenimiento'

  const modalSubtitle = `Lista de eventos de mantenimiento ${type?.toLowerCase() || ''}`

  const headerIcon = type === 'Preventivo' ? Settings : type === 'Correctivo' ? AlertTriangle : Gauge
  const headerIconClass = type === 'Preventivo' 
    ? 'bg-cyan-50' 
    : type === 'Correctivo' 
    ? 'bg-orange-50' 
    : 'bg-emerald-50'
  const headerIconColorClass = type === 'Preventivo'
    ? 'text-cyan-800'
    : type === 'Correctivo'
    ? 'text-orange-600'
    : 'text-emerald-600'

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(amount)
  }

  const getEquipmentStatusClass = (status?: string) => {
    const statusClasses: Record<string, string> = {
      'Operativo': 'bg-green-100 text-green-800',
      'Inactivo': 'bg-slate-100 text-slate-800',
      'Reparación': 'bg-orange-100 text-orange-800'
    }
    return statusClasses[status || ''] || 'bg-slate-100 text-slate-800'
  }

  const getProcessSelectClass = (process?: string) => {
    const processClasses: Record<string, string> = {
      'En proceso': 'bg-blue-100 text-blue-800 px-3 py-1.5',
      'Pendiente': 'bg-yellow-100 text-yellow-800 px-3 py-1.5',
      'Completado': 'bg-green-100 text-green-800 px-3 py-1.5'
    }
    return processClasses[process || ''] || 'bg-slate-100 text-slate-800 px-3 py-1.5'
  }

  const handleProcessChange = async (eventId: string, process: string, event: MaintenanceEvent) => {
    if (process === 'Completado') {
      setSelectedEventForComplete(event)
      setIsCompleteModalOpen(true)
      // Restaurar el valor anterior del select
      const selectElement = selectRefs.current[eventId]
      if (selectElement) {
        selectElement.value = event.process || ''
      }
    } else if (process && (process === 'En proceso' || process === 'Pendiente')) {
      onUpdateProcess?.(eventId, process as 'En proceso' | 'Pendiente')
    } else {
      onUpdateProcess?.(eventId, '')
    }
  }

  const handleComplete = (data: {
    eventId: string
    exactCompletionDate: string
    reportNumber?: string
    reportFile?: File
    completionNotes?: string
  }) => {
    // Primero actualizar el proceso a Completado
    onUpdateProcess?.(data.eventId, 'Completado')
    // Luego emitir el evento de completado con los datos adicionales
    onComplete?.(data)
    // Cerrar el modal
    setIsCompleteModalOpen(false)
    setSelectedEventForComplete(null)
  }

  const closeCompleteModal = () => {
    setIsCompleteModalOpen(false)
    setSelectedEventForComplete(null)
  }

  const Icon = headerIcon

  return (
    <>
      <div 
        className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/40"
        onClick={onClose}
      >
        <div 
          className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header fijo */}
          <div className="flex-shrink-0 px-6 py-5 border-b border-slate-200 bg-white rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", headerIconClass)}>
                    <Icon className={cn("w-5 h-5", headerIconColorClass)} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{modalTitle}</h3>
                  <p className="text-slate-600 text-xs mt-1">{modalSubtitle}</p>
                </div>
              </div>
              
              <button
                onClick={onClose}
                className="flex-shrink-0 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-all duration-200 text-slate-600 hover:text-slate-800"
                title="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Contenido scrolleable */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Tabla de eventos */}
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="w-10 px-4 py-3"></th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Equipo / Código
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Sede / Servicio
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Marca / Modelo / Serie
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Proveedor
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Estado
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Costo
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Proceso
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {events.map((event) => (
                      <Fragment key={event.id}>
                        <tr 
                          className="hover:bg-slate-50 transition-colors"
                        >
                          <td className="px-2 py-3 whitespace-nowrap">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 text-slate-400 hover:text-blue-600"
                              onClick={() => toggleEdit(event)}
                            >
                              <Settings className="h-4 w-4" />
                            </Button>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm font-medium text-slate-900">{event.equipmentName}</div>
                            <div className="text-xs text-slate-500 font-mono">{event.equipmentCode}</div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm text-slate-900 font-medium">{event.sede}</div>
                            {event.service ? (
                              <div className="text-xs text-slate-500">{event.service}</div>
                            ) : (
                              <div className="text-xs text-slate-400 italic">Sin servicio</div>
                            )}
                          </td>
                          <td className="px-4 py-3">
                            {event.brand ? (
                              <>
                                <div className="text-sm text-slate-900 font-medium">{event.brand}</div>
                                {event.model && <div className="text-xs text-slate-700 mt-0.5">{event.model}</div>}
                                {event.serialNumber && (
                                  <div className="text-xs text-slate-500 font-mono mt-0.5">{event.serialNumber}</div>
                                )}
                              </>
                            ) : (
                              <div className="text-sm text-slate-400">-</div>
                            )}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm text-slate-900">{event.supplier || '-'}</div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span 
                              className={cn(
                                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                                getEquipmentStatusClass(event.equipmentStatus)
                              )}
                            >
                              {event.equipmentStatus || 'N/A'}
                            </span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm text-slate-900 font-medium">
                              {event.cost ? formatCurrency(event.cost) : '-'}
                            </div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <Select
                              value={event.process || ''}
                              onValueChange={(value) => handleProcessChange(event.id, value, event)}
                            >
                              <SelectTrigger 
                                className={cn(
                                  "h-8 text-xs font-medium rounded-full border-0 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 w-[130px]",
                                  getProcessSelectClass(event.process)
                                )}
                              >
                                <SelectValue placeholder="Seleccionar" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="En proceso">En proceso</SelectItem>
                                <SelectItem value="Pendiente">Pendiente</SelectItem>
                                <SelectItem value="Completado">Completado</SelectItem>
                              </SelectContent>
                            </Select>
                          </td>
                        </tr>
                        {expandedEventId === event.id && (
                          <tr className="bg-blue-50/50">
                            <td colSpan={8} className="px-4 py-4">
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end animate-in fade-in slide-in-from-top-2">
                                <div>
                                  <label className="block text-xs font-medium text-slate-700 mb-1">
                                    Mes Programado
                                  </label>
                                  <Input 
                                    type="month"
                                    value={editForm.month}
                                    onChange={(e) => setEditForm(prev => ({ ...prev, month: e.target.value }))}
                                    className="bg-white h-8 text-xs"
                                  />
                                </div>
                                <div>
                                  <label className="block text-xs font-medium text-slate-700 mb-1">
                                    Proveedor
                                  </label>
                                  <Input 
                                    type="text"
                                    value={editForm.supplier}
                                    onChange={(e) => setEditForm(prev => ({ ...prev, supplier: e.target.value }))}
                                    className="bg-white h-8 text-xs"
                                    placeholder="Proveedor..."
                                  />
                                </div>
                                <div>
                                  <label className="block text-xs font-medium text-slate-700 mb-1">
                                    Costo Estimado
                                  </label>
                                  <Input 
                                    type="number"
                                    value={editForm.cost}
                                    onChange={(e) => setEditForm(prev => ({ ...prev, cost: e.target.value }))}
                                    className="bg-white h-8 text-xs"
                                    placeholder="0"
                                  />
                                </div>
                                <div className="flex gap-2">
                                  <Button 
                                    size="sm" 
                                    className="h-8 text-xs bg-blue-600 hover:bg-blue-700 text-white"
                                    onClick={saveEdit}
                                  >
                                    Guardar
                                  </Button>
                                  <Button 
                                    size="sm" 
                                    variant="outline" 
                                    className="h-8 text-xs bg-white"
                                    onClick={() => setExpandedEventId(null)}
                                  >
                                    Cancelar
                                  </Button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </Fragment>
                    ))}
                    {events.length === 0 && (
                      <tr>
                        <td colSpan={7} className="px-4 py-8 text-center text-slate-500">
                          No hay eventos para mostrar
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Footer fijo */}
          <div className="flex-shrink-0 flex items-center justify-between pt-3 border-t border-slate-200 px-6 pb-4 bg-white rounded-b-2xl">
            <div className="text-sm text-slate-600">
              Total: <span className="font-semibold text-slate-900">{events.length}</span> evento{events.length !== 1 ? 's' : ''}
            </div>
            <Button variant="outline" onClick={onClose}>
              Cerrar
            </Button>
          </div>
        </div>
      </div>

      {/* Modal de completar mantenimiento */}
      <MaintenanceCompleteModal
        isOpen={isCompleteModalOpen}
        event={selectedEventForComplete}
        onClose={closeCompleteModal}
        onComplete={handleComplete}
      />
    </>
  )
}


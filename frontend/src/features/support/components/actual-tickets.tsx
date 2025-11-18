"use client"

import { useState, useMemo } from 'react'
import { List, ChevronRight, X, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CustomSelect } from '@/components/ui/custom-select'
import { Badge } from '@/components/ui/badge'
import type { SupportTicket, TicketFilters, TicketStatusEnum, TicketCategoryEnum } from '../types'
import { TicketDetailModal } from './ticket-detail-modal'
import { cn } from '@/lib/cn'

interface ActualTicketsProps {
  tickets: SupportTicket[]
  onTicketStatusChanged?: (ticketCode: string, newStatus: string) => void
  onTicketDeleted?: (ticketCode: string) => void
  onTicketsUpdated?: () => void
  canManageSupportTickets?: boolean
}

export function ActualTickets({
  tickets,
  onTicketStatusChanged,
  onTicketDeleted,
  onTicketsUpdated,
  canManageSupportTickets = false
}: ActualTicketsProps) {
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [pendingDeleteCode, setPendingDeleteCode] = useState<string | null>(null)
  const [filters, setFilters] = useState<TicketFilters>({
    status: 'all',
    category: 'all',
    search: ''
  })

  const statusOptions = [
    { value: 'all', label: 'Estados' },
    { value: 'open', label: 'Abiertos' },
    { value: 'in-progress', label: 'En progreso' },
    { value: 'resolved', label: 'Resueltos' },
    { value: 'closed', label: 'Cerrados' }
  ]

  const categoryOptions = [
    { value: 'all', label: 'Categorías' },
    { value: 'bug', label: 'Error / Bug' },
    { value: 'feature', label: 'Nueva característica' },
    { value: 'question', label: 'Pregunta' },
    { value: 'technical', label: 'Problema técnico' }
  ]

  const statusOptionsForAdmin = [
    { value: 'open', label: 'Abierto' },
    { value: 'in-progress', label: 'En Progreso' },
    { value: 'resolved', label: 'Resuelto' },
    { value: 'closed', label: 'Cerrado' }
  ]

  const filteredTickets = useMemo(() => {
    return tickets.filter(ticket => {
      const matchesStatus = filters.status === 'all' || ticket.status === filters.status
      const matchesCategory = filters.category === 'all' || ticket.category === filters.category
      const matchesSearch = filters.search === '' ||
        ticket.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        ticket.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        ticket.ticket_code.toLowerCase().includes(filters.search.toLowerCase())

      return matchesStatus && matchesCategory && matchesSearch
    })
  }, [tickets, filters])

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getStatusLabel = (status: string): string => {
    const labels: Record<string, string> = {
      open: 'Abierto',
      'in-progress': 'En progreso',
      resolved: 'Resuelto',
      closed: 'Cerrado'
    }
    return labels[status] || status
  }

  const getStatusBadgeClass = (status: string): string => {
    const classes: Record<string, string> = {
      open: 'bg-red-100 text-red-800',
      'in-progress': 'bg-yellow-100 text-yellow-800',
      resolved: 'bg-green-100 text-green-800',
      closed: 'bg-slate-100 text-slate-800'
    }
    return classes[status] || 'bg-slate-100 text-slate-800'
  }

  const getCategoryLabel = (category: string): string => {
    const labels: Record<string, string> = {
      bug: 'Error / Bug',
      feature: 'Nueva característica',
      question: 'Pregunta',
      technical: 'Problema técnico'
    }
    return labels[category] || category
  }

  const selectTicket = (ticket: SupportTicket) => {
    setSelectedTicket(ticket)
  }

  const changeTicketStatus = async (ticketCode: string, newStatus: string) => {
    try {
      setIsLoading(true)
      onTicketStatusChanged?.(ticketCode, newStatus)
      onTicketsUpdated?.()
    } catch (error: any) {
      console.error('Error cambiando estado:', error)
      alert(error?.response?.data?.detail || 'Error al cambiar el estado')
    } finally {
      setIsLoading(false)
    }
  }

  const deleteTicket = (ticketCode: string) => {
    setPendingDeleteCode(ticketCode)
    setShowConfirm(true)
  }

  const confirmDelete = async () => {
    if (!pendingDeleteCode) return
    try {
      setIsLoading(true)
      onTicketDeleted?.(pendingDeleteCode)
      onTicketsUpdated?.()

      if (selectedTicket?.ticket_code === pendingDeleteCode) {
        setSelectedTicket(null)
      }
    } catch (error: any) {
      console.error('Error eliminando ticket:', error)
      alert(error?.response?.data?.detail || 'Error al eliminar el ticket')
    } finally {
      setIsLoading(false)
      setShowConfirm(false)
      setPendingDeleteCode(null)
    }
  }

  return (
    <>
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <List className="w-5 h-5 mr-2 text-blue-600" />
              <h2 className="text-lg font-semibold text-slate-900">Tickets Actuales</h2>
            </div>

            {/* Filtros */}
            <div className="flex items-center space-x-3">
              <div className="w-48">
                <Input
                  value={filters.search}
                  onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                  placeholder="Buscar tickets..."
                />
              </div>
              <div className="w-40">
                <CustomSelect
                  options={statusOptions}
                  value={filters.status}
                  onChange={(value) => setFilters(prev => ({ ...prev, status: value as TicketStatusEnum | 'all' }))}
                  placeholder="Estado"
                />
              </div>
              <div className="w-44">
                <CustomSelect
                  options={categoryOptions}
                  value={filters.category}
                  onChange={(value) => setFilters(prev => ({ ...prev, category: value as TicketCategoryEnum | 'all' }))}
                  placeholder="Categoría"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Estado sin tickets */}
          {filteredTickets.length === 0 && (
            <div className="text-center py-8">
              <div className="flex flex-col items-center space-y-2">
                <List className="w-12 h-12 text-slate-300" />
                <div className="text-center">
                  <p className="text-slate-500 text-sm font-medium">
                    {tickets.length === 0 ? 'No hay tickets en el sistema' : 'No se encontraron tickets con los filtros seleccionados'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Lista de tickets */}
          {filteredTickets.length > 0 && (
            <div className="space-y-4">
              {filteredTickets.map((ticket) => (
                <div
                  key={ticket.ticket_code}
                  className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => selectTicket(ticket)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-medium text-slate-900">{ticket.title}</h3>
                        <Badge className={cn("text-xs font-medium px-2 py-1 rounded-full", getStatusBadgeClass(ticket.status))}>
                          {getStatusLabel(ticket.status)}
                        </Badge>
                        <Badge variant="secondary" className="text-xs px-2 py-1 rounded-full">
                          {getCategoryLabel(ticket.category)}
                        </Badge>
                      </div>
                      {ticket.description && (
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-2">
                          <p className="text-sm text-slate-700 whitespace-pre-line line-clamp-3">
                            {ticket.description}
                          </p>
                        </div>
                      )}
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span>Ticket {ticket.ticket_code}</span>
                        <span>{ticket.ticket_date ? formatDate(ticket.ticket_date) : ''}</span>
                        {ticket.image && <span>1 imagen adjunta</span>}
                      </div>

                      {/* Controles de administración */}
                      {canManageSupportTickets && (
                        <div
                          className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="w-40">
                            <CustomSelect
                              options={statusOptionsForAdmin}
                              value={ticket.status}
                              onChange={(value) => changeTicketStatus(ticket.ticket_code, value)}
                            />
                          </div>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation()
                              deleteTicket(ticket.ticket_code)
                            }}
                            disabled={isLoading && pendingDeleteCode === ticket.ticket_code}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal de detalle del ticket */}
      <TicketDetailModal
        ticket={selectedTicket}
        onClose={() => setSelectedTicket(null)}
      />

      {/* Confirmación de eliminación */}
      {showConfirm && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Eliminar ticket</h3>
            <p className="text-sm text-slate-600 mb-6">
              ¿Estás seguro de eliminar este ticket? Esta acción no se puede deshacer.
            </p>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setShowConfirm(false)}>
                Cancelar
              </Button>
              <Button variant="destructive" onClick={confirmDelete} disabled={isLoading}>
                Eliminar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}


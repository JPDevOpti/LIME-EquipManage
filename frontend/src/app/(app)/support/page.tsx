"use client"

import { useState, useEffect } from 'react'
import { NewTicket } from '@/features/support/components/new-ticket'
import { ActualTickets } from '@/features/support/components/actual-tickets'
import { supportApi } from '@/features/support/services/supportApi'
import type { SupportTicket } from '@/features/support/types'

export default function SupportPage() {
  const [tickets, setTickets] = useState<SupportTicket[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Función para cargar tickets desde la API
  const loadTickets = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const loadedTickets = await supportApi.getTickets()
      setTickets(loadedTickets)
    } catch (err: any) {
      console.error('Error cargando tickets:', err)
      setError(err?.response?.data?.detail || 'Error al cargar los tickets')
    } finally {
      setIsLoading(false)
    }
  }

  // Función para manejar la creación de tickets
  const onTicketCreated = (newTicket: SupportTicket) => {
    setTickets(prev => [newTicket, ...prev])
  }

  // Función para manejar el cambio de estado de tickets
  const onTicketStatusChanged = async (ticketCode: string, newStatus: string) => {
    try {
      await supportApi.changeStatus(ticketCode, newStatus as any)
      setTickets(prev =>
        prev.map(ticket =>
          ticket.ticket_code === ticketCode
            ? { ...ticket, status: newStatus as any }
            : ticket
        )
      )
    } catch (error: any) {
      console.error('Error cambiando estado:', error)
      alert(error?.response?.data?.detail || 'Error al cambiar el estado')
    }
  }

  // Función para manejar la eliminación de tickets
  const onTicketDeleted = async (ticketCode: string) => {
    try {
      await supportApi.deleteTicket(ticketCode)
      setTickets(prev => prev.filter(ticket => ticket.ticket_code !== ticketCode))
    } catch (error: any) {
      console.error('Error eliminando ticket:', error)
      alert(error?.response?.data?.detail || 'Error al eliminar el ticket')
    }
  }

  // Cargar tickets al montar el componente
  useEffect(() => {
    loadTickets()
  }, [])

  return (
    <div className="w-full space-y-8 pb-8">
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Componente para crear nuevo ticket */}
          <div className="lg:col-span-1">
            <NewTicket onTicketCreated={onTicketCreated} />
          </div>

          {/* Componente para mostrar tickets existentes */}
          <div className="lg:col-span-2">
            {isLoading && (
              <div className="flex items-center justify-center py-8">
                <div className="text-center space-y-4">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-emerald-600 border-r-transparent"></div>
                  <p className="text-sm text-slate-600">Cargando tickets...</p>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            {!isLoading && !error && (
              <ActualTickets
                tickets={tickets}
                onTicketStatusChanged={onTicketStatusChanged}
                onTicketDeleted={onTicketDeleted}
                onTicketsUpdated={loadTickets}
                canManageSupportTickets={true} // En producción, obtener del contexto de autenticación
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

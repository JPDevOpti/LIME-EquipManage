"use client"

import { useState } from 'react'
import { MaintenanceCalendar } from '@/features/maintenance/components/maintenance-calendar'
import { MaintenanceEventsModal } from '@/features/maintenance/components/maintenance-events-modal'
import { useYearlyMaintenanceCalendar } from '@/features/maintenance/hooks/useYearlyMaintenanceCalendar'
import { maintenanceApi } from '@/features/maintenance/services/maintenanceApi'
import type { MaintenanceType } from '@/features/maintenance/types'

export default function MaintenancePage() {
  const {
    months,
    isLoading,
    selectedYear,
    loadEvents,
    getEventsByMonthAndType
  } = useYearlyMaintenanceCalendar()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedEvents, setSelectedEvents] = useState<any[]>([])
  const [selectedType, setSelectedType] = useState<MaintenanceType | null>(null)
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null)

  function handleShowEvents(month: number, type: MaintenanceType) {
    setSelectedMonth(month)
    setSelectedType(type)
    const events = getEventsByMonthAndType(month, type)
    setSelectedEvents(events)
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
    setSelectedType(null)
    setSelectedMonth(null)
    setSelectedEvents([])
  }

  async function handleProcessUpdate(eventId: string, process: 'En proceso' | 'Pendiente' | 'Completado' | '') {
    try {
      // Actualizar en el API
      await maintenanceApi.updateMaintenanceEvent(eventId, {
        process: process || undefined
      })
      
      // Recargar eventos para sincronizar
      if (selectedMonth !== null && selectedType) {
        const updatedEvents = getEventsByMonthAndType(selectedMonth, selectedType)
        setSelectedEvents(updatedEvents)
      }
    } catch (error) {
      console.error('Error actualizando proceso:', error)
    }
  }

  async function handleMaintenanceComplete(data: {
    eventId: string
    exactCompletionDate: string
    reportNumber?: string
    reportFile?: File
    completionNotes?: string
  }) {
    try {
      // Actualizar en el API
      await maintenanceApi.updateMaintenanceEvent(data.eventId, {
        process: 'Completado',
        completedDate: data.exactCompletionDate.split('T')[0],
        exactCompletionDate: data.exactCompletionDate,
        reportNumber: data.reportNumber,
        completionNotes: data.completionNotes,
        reportFile: data.reportFile ? data.reportFile.name : undefined
      })
      
      // Recargar eventos para sincronizar
      if (selectedMonth !== null && selectedType) {
        const updatedEvents = getEventsByMonthAndType(selectedMonth, selectedType)
        setSelectedEvents(updatedEvents)
      }
      
      // Recargar todos los eventos del año
      loadEvents()
    } catch (error) {
      console.error('Error completando mantenimiento:', error)
      alert('Error al completar el mantenimiento. Por favor, inténtelo de nuevo.')
    }
  }

  return (
    <div className="w-full space-y-8 pb-8">
      <div className="space-y-4">
        <MaintenanceCalendar
          months={months}
          isLoading={isLoading}
          onSelectMonth={(month) => console.log('Mes seleccionado:', month)}
          onShowEvents={handleShowEvents}
        />
      </div>

      {/* Modal de eventos */}
      <MaintenanceEventsModal
        isOpen={isModalOpen}
        events={selectedEvents}
        type={selectedType}
        month={selectedMonth}
        year={selectedYear}
        onClose={closeModal}
        onUpdateProcess={handleProcessUpdate}
        onComplete={handleMaintenanceComplete}
      />
    </div>
  )
}

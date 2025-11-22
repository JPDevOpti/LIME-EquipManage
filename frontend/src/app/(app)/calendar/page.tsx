"use client"

import { useState } from "react"
import { CalendarFilters } from "@/features/calendar/components/calendar-filters"
import { MaintenanceCalendar } from "@/features/calendar/components/maintenance-calendar"
import { MaintenanceEventsModal } from "@/features/calendar/components/maintenance-events-modal"
import { useYearlyMaintenanceCalendar } from "@/features/calendar/hooks/useYearlyMaintenanceCalendar"
import { maintenanceApi } from "@/features/calendar/services/maintenanceApi"
import type { MaintenanceType } from "@/features/calendar/types"

export default function CalendarPage() {
  const {
    months,
    isLoading,
    selectedYear,
    loadEvents,
    getEventsByMonthAndType,
  } = useYearlyMaintenanceCalendar()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedEvents, setSelectedEvents] = useState<any[]>([])
  const [selectedType, setSelectedType] = useState<MaintenanceType | null>(null)
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null)

  // filtros
  const [filterMonth, setFilterMonth] = useState(new Date().getMonth())
  const [selectedHeadquarters, setSelectedHeadquarters] = useState("Todas las sedes")
  const [selectedService, setSelectedService] = useState("Todos los servicios")

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
      await maintenanceApi.updateMaintenanceEvent(eventId, { process: process || undefined })
      if (selectedMonth !== null && selectedType) {
        const updated = getEventsByMonthAndType(selectedMonth, selectedType)
        setSelectedEvents(updated)
      }
    } catch (e) {
      console.error(e)
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
      await maintenanceApi.updateMaintenanceEvent(data.eventId, {
        process: 'Completado',
        completedDate: data.exactCompletionDate.split('T')[0],
        exactCompletionDate: data.exactCompletionDate,
        reportNumber: data.reportNumber,
        completionNotes: data.completionNotes,
        reportFile: data.reportFile ? data.reportFile.name : undefined,
      })
      if (selectedMonth !== null && selectedType) {
        const updated = getEventsByMonthAndType(selectedMonth, selectedType)
        setSelectedEvents(updated)
      }
      loadEvents()
    } catch (e) {
      console.error(e)
      alert('Error al completar el mantenimiento.')
    }
  }

  return (
    <div className="w-full space-y-6 pb-8">
      {/* Filtros */}
      <CalendarFilters
        selectedYear={selectedYear}
        selectedMonth={filterMonth}
        selectedHeadquarters={selectedHeadquarters}
        selectedService={selectedService}
        onYearChange={(year) => {
          // TODO: implementar cambio de año si es necesario
          console.log('Año seleccionado:', year)
        }}
        onMonthChange={(month) => {
          setFilterMonth(month)
          console.log('Mes seleccionado:', month)
        }}
        onHeadquartersChange={setSelectedHeadquarters}
        onServiceChange={setSelectedService}
      />

      {/* Calendario */}
      <MaintenanceCalendar
        months={months}
        isLoading={isLoading}
        onSelectMonth={(month) => console.log('Mes seleccionado:', month)}
        onShowEvents={handleShowEvents}
      />

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

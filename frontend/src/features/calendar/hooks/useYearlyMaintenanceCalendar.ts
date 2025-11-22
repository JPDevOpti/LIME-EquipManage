import { useState, useEffect, useMemo } from 'react'
import type { MaintenanceEvent, MonthData } from '../types'
import { maintenanceApi } from '../services/maintenanceApi'

export function useYearlyMaintenanceCalendar() {
  const currentDate = new Date()
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear())
  const [events, setEvents] = useState<MaintenanceEvent[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null)

  // Nombres de meses
  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ]

  // Título del calendario
  const calendarTitle = useMemo(() => {
    return `Año ${selectedYear}`
  }, [selectedYear])

  // Generar datos por mes
  const months = useMemo((): MonthData[] => {
    const currentMonth = currentDate.getMonth()
    const currentYear = currentDate.getFullYear()

    return monthNames.map((name, index) => {
      // Filtrar eventos del mes
      const monthEvents = events.filter(event => {
        const eventDate = new Date(event.scheduledDate)
        return eventDate.getMonth() === index && eventDate.getFullYear() === selectedYear
      })

      // Contar por tipo
      const preventivos = monthEvents.filter(e => e.type === 'Preventivo').length
      const correctivos = monthEvents.filter(e => e.type === 'Correctivo').length
      const calibraciones = monthEvents.filter(e => e.type === 'Calibración').length

      return {
        number: index,
        name,
        preventivos,
        correctivos,
        calibraciones,
        total: monthEvents.length,
        isCurrent: index === currentMonth && selectedYear === currentYear
      }
    })
  }, [events, selectedYear])

  // Cargar eventos
  async function loadEvents() {
    setIsLoading(true)
    try {
      // Cargar todos los eventos del año
      const allEvents: MaintenanceEvent[] = []
      
      for (let month = 0; month < 12; month++) {
        const monthEvents = await maintenanceApi.getMaintenanceEvents({
          selectedMonth: month,
          selectedYear: selectedYear,
          selectedType: 'all',
          selectedStatus: 'all',
          selectedSede: 'all',
          searchQuery: ''
        })
        allEvents.push(...monthEvents)
      }
      
      setEvents(allEvents)
    } catch (error) {
      console.error('Error cargando eventos:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Navegación
  function previousYear() {
    setSelectedYear(prev => prev - 1)
  }

  function nextYear() {
    setSelectedYear(prev => prev + 1)
  }

  function goToToday() {
    setSelectedYear(currentDate.getFullYear())
  }

  function selectMonth(month: number) {
    setSelectedMonth(month)
    console.log('Mes seleccionado:', monthNames[month], selectedYear)
  }

  // Función para obtener eventos filtrados por mes y tipo
  function getEventsByMonthAndType(month: number, type: string) {
    return events.filter(event => {
      const eventDate = new Date(event.scheduledDate)
      return eventDate.getMonth() === month && 
             eventDate.getFullYear() === selectedYear &&
             event.type === type
    })
  }

  // Cargar eventos cuando cambia el año
  useEffect(() => {
    loadEvents()
  }, [selectedYear])

  return {
    calendarTitle,
    months,
    isLoading,
    selectedYear,
    selectedMonth,
    events,
    loadEvents,
    previousYear,
    nextYear,
    goToToday,
    selectMonth,
    getEventsByMonthAndType
  }
}


import type { MaintenanceEvent, MaintenanceFilters, MonthlyStats } from '../types'

// Función para generar eventos de mantenimiento para todos los meses
function generateMockEvents(): MaintenanceEvent[] {
  const events: MaintenanceEvent[] = []
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()
  
  const equipmentList = [
    { id: '1', name: 'Criostato', code: '109414' },
    { id: '2', name: 'Equipo de IHQ', code: '111251' },
    { id: '3', name: 'Micrótomo de rotación', code: '114982' },
    { id: '4', name: 'Citocentrífuga', code: '122967' },
    { id: '5', name: 'Estación de inclusión', code: '178684' },
    { id: '6', name: 'Horno de Laboratorio', code: '111251' },
    { id: '7', name: 'Criostato', code: '187701' },
    { id: '8', name: 'Balanza Analítica', code: '109414' },
    { id: '9', name: 'Autoclave', code: '198765' },
    { id: '10', name: 'Centrífuga', code: '145678' }
  ]
  
  const technicians = ['Carlos Méndez', 'Ana Rodríguez', 'Pedro Jiménez', 'María González']
  const locations = ['Histoquímica', 'Histotécnica', 'Cuarto criostato', 'Laboratorio Central']
  const sedes = ['San Vicente', 'Prado', 'SIU']
  const types = ['Preventivo', 'Correctivo', 'Calibración'] as const
  const statuses = ['Completado', 'Pendiente', 'En Proceso', 'Vencido'] as const
  const priorities = ['Alta', 'Media', 'Baja'] as const
  
  let eventId = 1
  
  // Generar eventos para cada mes del año actual
  for (let month = 0; month < 12; month++) {
    const daysInMonth = new Date(currentYear, month + 1, 0).getDate()
    
    // Generar entre 3 y 8 eventos por mes
    const eventsPerMonth = Math.floor(Math.random() * 6) + 3
    
    for (let i = 0; i < eventsPerMonth; i++) {
      const day = Math.floor(Math.random() * daysInMonth) + 1
      const equipment = equipmentList[Math.floor(Math.random() * equipmentList.length)]
      const type = types[Math.floor(Math.random() * types.length)]
      
      // Distribuir estados: más completados en meses pasados, más pendientes en meses futuros
      let status: typeof statuses[number]
      if (month < currentMonth) {
        // Meses pasados: más completados
        const rand = Math.random()
        status = rand < 0.6 ? 'Completado' : rand < 0.8 ? 'En Proceso' : rand < 0.9 ? 'Pendiente' : 'Vencido'
      } else if (month === currentMonth) {
        // Mes actual: mezcla
        const rand = Math.random()
        status = rand < 0.3 ? 'Completado' : rand < 0.5 ? 'En Proceso' : rand < 0.8 ? 'Pendiente' : 'Vencido'
      } else {
        // Meses futuros: más pendientes
        const rand = Math.random()
        status = rand < 0.7 ? 'Pendiente' : rand < 0.85 ? 'En Proceso' : rand < 0.95 ? 'Completado' : 'Vencido'
      }
      
      const scheduledDate = `${currentYear}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
      const priority = priorities[Math.floor(Math.random() * priorities.length)]
      const technician = technicians[Math.floor(Math.random() * technicians.length)]
      const location = locations[Math.floor(Math.random() * locations.length)]
      const sede = sedes[Math.floor(Math.random() * sedes.length)]
      
      const event: MaintenanceEvent = {
        id: String(eventId++),
        equipmentId: equipment.id,
        equipmentName: equipment.name,
        equipmentCode: equipment.code,
        type,
        status,
        scheduledDate,
        sede,
        location,
        technician,
        priority,
        estimatedDuration: type === 'Calibración' ? 3 : type === 'Correctivo' ? 4 : 2
      }
      
      // Agregar costo para algunos eventos
      if (Math.random() > 0.3) {
        event.cost = type === 'Calibración' 
          ? Math.floor(Math.random() * 200000) + 200000
          : type === 'Correctivo'
          ? Math.floor(Math.random() * 300000) + 150000
          : Math.floor(Math.random() * 100000) + 100000
      }
      
      // Si está completado, agregar fecha de completado
      if (status === 'Completado') {
        const completedDay = Math.min(day + Math.floor(Math.random() * 3), daysInMonth)
        event.completedDate = `${currentYear}-${String(month + 1).padStart(2, '0')}-${String(completedDay).padStart(2, '0')}`
        if (Math.random() > 0.5) {
          event.notes = type === 'Preventivo' 
            ? 'Limpieza y lubricación completa'
            : type === 'Calibración'
            ? 'Calibración exitosa'
            : 'Reparación completada'
        }
      } else if (status === 'En Proceso' && Math.random() > 0.5) {
        event.notes = 'En proceso de ejecución'
      } else if (status === 'Vencido') {
        event.notes = type === 'Calibración' ? 'Calibración atrasada' : 'Mantenimiento atrasado'
      }
      
      events.push(event)
    }
  }
  
  return events
}

// Generar datos mock de mantenimientos
const mockMaintenanceEvents: MaintenanceEvent[] = generateMockEvents()

export const maintenanceApi = {
  // Obtener eventos de mantenimiento con filtros
  async getMaintenanceEvents(filters: MaintenanceFilters): Promise<MaintenanceEvent[]> {
    await new Promise(resolve => setTimeout(resolve, 50))

    let filtered = [...mockMaintenanceEvents]

    // Filtrar por mes y año
    filtered = filtered.filter(event => {
      const eventDate = new Date(event.scheduledDate)
      return eventDate.getMonth() === filters.selectedMonth &&
             eventDate.getFullYear() === filters.selectedYear
    })

    // Filtrar por tipo
    if (filters.selectedType !== 'all') {
      filtered = filtered.filter(event => event.type === filters.selectedType)
    }

    // Filtrar por estado
    if (filters.selectedStatus !== 'all') {
      filtered = filtered.filter(event => event.status === filters.selectedStatus)
    }

    // Filtrar por sede
    if (filters.selectedSede && filters.selectedSede !== 'all') {
      filtered = filtered.filter(event => event.sede === filters.selectedSede)
    }

    // Búsqueda por texto
    if (filters.searchQuery.trim()) {
      const query = filters.searchQuery.toLowerCase()
      filtered = filtered.filter(event =>
        event.equipmentName.toLowerCase().includes(query) ||
        event.equipmentCode.toLowerCase().includes(query) ||
        event.technician?.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query)
      )
    }

    return filtered
  },

  // Obtener estadísticas del mes
  async getMonthlyStats(month: number, year: number): Promise<MonthlyStats> {
    await new Promise(resolve => setTimeout(resolve, 200))

    const events = mockMaintenanceEvents.filter(event => {
      const eventDate = new Date(event.scheduledDate)
      return eventDate.getMonth() === month && eventDate.getFullYear() === year
    })

    return {
      total: events.length,
      preventivo: events.filter(e => e.type === 'Preventivo').length,
      correctivo: events.filter(e => e.type === 'Correctivo').length,
      calibracion: events.filter(e => e.type === 'Calibración').length,
      pendiente: events.filter(e => e.status === 'Pendiente').length,
      enProceso: events.filter(e => e.status === 'En Proceso').length,
      completado: events.filter(e => e.status === 'Completado').length,
      vencido: events.filter(e => e.status === 'Vencido').length
    }
  },

  // Obtener detalles de un evento específico
  async getMaintenanceEvent(id: string): Promise<MaintenanceEvent | null> {
    await new Promise(resolve => setTimeout(resolve, 200))
    return mockMaintenanceEvents.find(event => event.id === id) || null
  },

  // Crear nuevo evento de mantenimiento
  async createMaintenanceEvent(event: Omit<MaintenanceEvent, 'id'>): Promise<MaintenanceEvent> {
    await new Promise(resolve => setTimeout(resolve, 300))
    const newEvent: MaintenanceEvent = {
      ...event,
      id: `${Date.now()}`
    }
    mockMaintenanceEvents.push(newEvent)
    return newEvent
  },

  // Actualizar evento de mantenimiento
  async updateMaintenanceEvent(id: string, updates: Partial<MaintenanceEvent>): Promise<MaintenanceEvent> {
    await new Promise(resolve => setTimeout(resolve, 300))
    const index = mockMaintenanceEvents.findIndex(event => event.id === id)
    if (index === -1) throw new Error('Evento no encontrado')
    
    mockMaintenanceEvents[index] = { ...mockMaintenanceEvents[index], ...updates }
    return mockMaintenanceEvents[index]
  },

  // Eliminar evento de mantenimiento
  async deleteMaintenanceEvent(id: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 300))
    const index = mockMaintenanceEvents.findIndex(event => event.id === id)
    if (index !== -1) {
      mockMaintenanceEvents.splice(index, 1)
    }
  }
}


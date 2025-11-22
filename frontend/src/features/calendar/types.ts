export type MaintenanceType = 'Preventivo' | 'Correctivo' | 'Calibración'

export type MaintenanceStatus = 'Pendiente' | 'En Proceso' | 'Completado' | 'Vencido' | 'Cancelado'

export interface MaintenanceEvent {
  id: string
  equipmentId: string
  equipmentName: string
  equipmentCode: string
  type: MaintenanceType
  status: MaintenanceStatus
  scheduledDate: string
  completedDate?: string
  exactCompletionDate?: string
  technician?: string
  notes?: string
  completionNotes?: string
  sede: string
  location: string
  service?: string
  brand?: string
  model?: string
  serialNumber?: string
  supplier?: string
  equipmentStatus?: string
  priority: 'Alta' | 'Media' | 'Baja'
  estimatedDuration?: number // en horas
  cost?: number
  process?: 'En proceso' | 'Pendiente' | 'Completado'
  reportNumber?: string
  reportFile?: string
}

export interface CalendarDay {
  date: Date
  dateString: string
  isCurrentMonth: boolean
  isToday: boolean
  events: MaintenanceEvent[]
}

export interface MaintenanceFilters {
  selectedMonth: number
  selectedYear: number
  selectedType: MaintenanceType | 'all'
  selectedStatus: MaintenanceStatus | 'all'
  selectedSede: string
  searchQuery: string
}

export interface MonthlyStats {
  total: number
  preventivo: number
  correctivo: number
  calibracion: number
  pendiente: number
  enProceso: number
  completado: number
  vencido: number
}

export interface MonthData {
  number: number
  name: string
  preventivos: number
  correctivos: number
  calibraciones: number
  total: number
  isCurrent: boolean
}


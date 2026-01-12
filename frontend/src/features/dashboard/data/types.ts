import { LucideIcon } from 'lucide-react'

export interface ServiceOption {
    value: string
    label: string
}

export interface MaintenanceItem {
    title: string
    sede: string
    servicio: string
    servicioKey: string
    technician: string
    type: 'preventivo' | 'calibracion' | 'correctivo'
    icon: LucideIcon
    iconBg: string
    iconColor: string
}

export interface MetricIndicator {
    title: string
    percentage?: number
    trend?: string
    trendUp?: boolean
    total?: number
    completados?: number
    pendientes: number
    mes: string
    icon: LucideIcon
    color: 'blue' | 'red' | 'teal'
    // Fields specific to 'correctivo'
    mesActual?: number
    mesAnterior?: number
    añoTotal?: number
}

export interface MonthlyChartData {
    mes: string
    preventivos: number
    correctivos: number
    calibraciones: number
}

export interface TrendChartData {
    mes: string
    preventivos: number
    calibraciones: number
    objetivo: number
}

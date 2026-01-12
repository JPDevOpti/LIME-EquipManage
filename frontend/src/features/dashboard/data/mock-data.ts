import { Settings, SlidersHorizontal, AlertCircle } from 'lucide-react'
import { ServiceOption, MaintenanceItem, MetricIndicator, MonthlyChartData, TrendChartData } from './types'

export const SERVICES: ServiceOption[] = [
    { value: 'all', label: 'Todos los servicios' },
    { value: 'laboratorio', label: 'Laboratorio Clínico' },
    { value: 'patologia', label: 'Patología' },
    { value: 'farmacia', label: 'Farmacia' },
    { value: 'microbiologia', label: 'Microbiología' },
    { value: 'imagenes', label: 'Imágenes Diagnósticas' },
    { value: 'quirofano', label: 'Quirófano' }
]

export const MAINTENANCE_SCHEDULE: MaintenanceItem[] = [
    {
        title: 'Preventivo - Centrífuga HANIL FLETA 40P',
        sede: 'Hospital San Vicente',
        servicio: 'Laboratorio Clínico',
        servicioKey: 'laboratorio',
        technician: 'Carlos Méndez',
        type: 'preventivo',
        icon: Settings,
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600'
    },
    {
        title: 'Preventivo - Microscopio Olympus CX31',
        sede: 'Clínica León XIII',
        servicio: 'Microbiología',
        servicioKey: 'microbiologia',
        technician: 'Ana Rodríguez',
        type: 'preventivo',
        icon: Settings,
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600'
    },
    {
        title: 'Preventivo - Mesa Quirúrgica Motorizada',
        sede: 'Clínica León XIII',
        servicio: 'Quirófano',
        servicioKey: 'quirofano',
        technician: 'Técnico Biomédico',
        type: 'preventivo',
        icon: Settings,
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600'
    },
    {
        title: 'Calibración - Balanza Analítica A&D HR-200',
        sede: 'Hospital San Vicente',
        servicio: 'Farmacia',
        servicioKey: 'farmacia',
        technician: 'Laboratorio Metrotech',
        type: 'calibracion',
        icon: SlidersHorizontal,
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600'
    },
    {
        title: 'Calibración - Resonancia Magnética Siemens',
        sede: 'Hospital San Vicente',
        servicio: 'Imágenes Diagnósticas',
        servicioKey: 'imagenes',
        technician: 'Siemens Healthcare',
        type: 'calibracion',
        icon: SlidersHorizontal,
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600'
    },
    {
        title: 'Correctivo - Criostato Leica CM1860 UV',
        sede: 'Hospital Universitario',
        servicio: 'Patología',
        servicioKey: 'patologia',
        technician: 'Soporte externo',
        type: 'correctivo',
        icon: AlertCircle,
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600'
    }
]

// Base metrics that we will "adjust" based on filter
const BASE_METRICS: MetricIndicator[] = [
    {
        title: 'Mantenimientos preventivos',
        percentage: 92,
        trend: '+2.5%',
        trendUp: true,
        total: 156,
        completados: 143,
        pendientes: 13,
        mes: 'Noviembre 2025',
        icon: Settings,
        color: 'blue'
    },
    {
        title: 'Calibraciones',
        percentage: 86,
        trend: '+3.1%',
        trendUp: true,
        total: 65,
        completados: 56,
        pendientes: 9,
        mes: 'Noviembre 2025',
        icon: SlidersHorizontal,
        color: 'teal'
    },
    {
        title: 'Mantenimientos correctivos',
        percentage: 78,
        trend: '-1.2%',
        trendUp: false,
        total: 27,
        completados: 21,
        pendientes: 6,
        mes: 'Noviembre 2025',
        icon: AlertCircle,
        color: 'red',
        mesActual: 21,
        mesAnterior: 24,
        añoTotal: 245
    }
]

export function getMetricsByService(serviceKey: string): MetricIndicator[] {
    if (serviceKey === 'all') {
        return BASE_METRICS
    }

    // Simulate different data for different services using a simple hash-like logic
    // This is just for demo purposes to show values changing
    const multiplier = serviceKey.length / 10 // Arbitrary factor based on string length

    return BASE_METRICS.map(metric => {
        // Clone to avoid mutating base
        const newMetric = { ...metric }

        if (newMetric.total) {
            newMetric.total = Math.floor(newMetric.total * multiplier) || 5
            newMetric.completados = Math.floor(newMetric.total * 0.8)
            newMetric.pendientes = newMetric.total - newMetric.completados

            if (newMetric.percentage) {
                newMetric.percentage = Math.floor((newMetric.completados / newMetric.total) * 100)
            }
        }

        if (newMetric.mesActual) {
            newMetric.mesActual = Math.floor(newMetric.mesActual * multiplier) || 2
            newMetric.mesAnterior = Math.floor(newMetric.mesAnterior! * multiplier) || 3
            newMetric.añoTotal = Math.floor(newMetric.añoTotal! * multiplier) || 20
        }

        return newMetric
    })
}

const BASE_MONTHLY_DATA: MonthlyChartData[] = [
    { mes: 'Ene', preventivos: 45, correctivos: 12, calibraciones: 18 },
    { mes: 'Feb', preventivos: 52, correctivos: 8, calibraciones: 22 },
    { mes: 'Mar', preventivos: 48, correctivos: 15, calibraciones: 20 },
    { mes: 'Abr', preventivos: 55, correctivos: 10, calibraciones: 25 },
    { mes: 'May', preventivos: 50, correctivos: 14, calibraciones: 23 },
    { mes: 'Jun', preventivos: 58, correctivos: 9, calibraciones: 27 },
    { mes: 'Jul', preventivos: 53, correctivos: 11, calibraciones: 24 },
    { mes: 'Ago', preventivos: 49, correctivos: 13, calibraciones: 21 },
    { mes: 'Sep', preventivos: 56, correctivos: 7, calibraciones: 26 },
    { mes: 'Oct', preventivos: 51, correctivos: 16, calibraciones: 22 },
    { mes: 'Nov', preventivos: 47, correctivos: 12, calibraciones: 20 },
    { mes: 'Dic', preventivos: 54, correctivos: 9, calibraciones: 24 }
]

const BASE_TREND_DATA: TrendChartData[] = [
    { mes: 'Ene', preventivos: 88, calibraciones: 82, objetivo: 90 },
    { mes: 'Feb', preventivos: 91, calibraciones: 85, objetivo: 90 },
    { mes: 'Mar', preventivos: 89, calibraciones: 84, objetivo: 90 },
    { mes: 'Abr', preventivos: 93, calibraciones: 87, objetivo: 90 },
    { mes: 'May', preventivos: 90, calibraciones: 86, objetivo: 90 },
    { mes: 'Jun', preventivos: 94, calibraciones: 89, objetivo: 90 },
    { mes: 'Jul', preventivos: 92, calibraciones: 88, objetivo: 90 },
    { mes: 'Ago', preventivos: 90, calibraciones: 85, objetivo: 90 },
    { mes: 'Sep', preventivos: 95, calibraciones: 90, objetivo: 90 },
    { mes: 'Oct', preventivos: 88, calibraciones: 83, objetivo: 90 },
    { mes: 'Nov', preventivos: 92, calibraciones: 86, objetivo: 90 },
    { mes: 'Dic', preventivos: 94, calibraciones: 88, objetivo: 90 }
]

export function getMonthlyChartData(serviceKey: string): MonthlyChartData[] {
    if (serviceKey === 'all') return BASE_MONTHLY_DATA

    // Simple simulation: alter values based on service name length to create variety
    const factor = (serviceKey.length % 5) / 10 + 0.5

    return BASE_MONTHLY_DATA.map(item => ({
        ...item,
        preventivos: Math.floor(item.preventivos * factor),
        correctivos: Math.floor(item.correctivos * factor),
        calibraciones: Math.floor(item.calibraciones * factor)
    }))
}

export function getTrendChartData(serviceKey: string): TrendChartData[] {
    if (serviceKey === 'all') return BASE_TREND_DATA

    // Simulate variation
    const offset = (serviceKey.length % 3) * 2

    return BASE_TREND_DATA.map(item => ({
        ...item,
        preventivos: Math.min(100, Math.max(0, item.preventivos - offset)),
        calibraciones: Math.min(100, Math.max(0, item.calibraciones + offset))
    }))
}

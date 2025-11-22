"use client"

import { Building2, Briefcase, Calendar } from 'lucide-react'
import { Select } from '@/components/ui/select'

interface CalendarFiltersProps {
    selectedYear: number
    selectedMonth: number
    selectedHeadquarters: string
    selectedService: string
    onYearChange: (year: number) => void
    onMonthChange: (month: number) => void
    onHeadquartersChange: (headquarters: string) => void
    onServiceChange: (service: string) => void
}

const MONTHS = [
    { value: 0, label: 'Enero' },
    { value: 1, label: 'Febrero' },
    { value: 2, label: 'Marzo' },
    { value: 3, label: 'Abril' },
    { value: 4, label: 'Mayo' },
    { value: 5, label: 'Junio' },
    { value: 6, label: 'Julio' },
    { value: 7, label: 'Agosto' },
    { value: 8, label: 'Septiembre' },
    { value: 9, label: 'Octubre' },
    { value: 10, label: 'Noviembre' },
    { value: 11, label: 'Diciembre' }
]

const HEADQUARTERS = [
    'Todas las sedes',
    'Sede San Vicente',
    'Sede Prado',
    'Sede SIU'
]

const SERVICES = [
    'Todos los servicios',
    'Infraestructura',
    'Laboratorio',
    'Diagnóstico',
    'Tratamiento'
]

// Generar años desde 2020 hasta 5 años en el futuro
const currentYear = new Date().getFullYear()
const YEARS = Array.from({ length: currentYear - 2020 + 6 }, (_, i) => 2020 + i)

export function CalendarFilters({
    selectedYear,
    selectedMonth,
    selectedHeadquarters,
    selectedService,
    onYearChange,
    onMonthChange,
    onHeadquartersChange,
    onServiceChange
}: CalendarFiltersProps) {
    return (
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Filtro de Año */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        Año
                    </label>
                    <Select
                        value={selectedYear.toString()}
                        onChange={(e) => onYearChange(parseInt(e.target.value))}
                        className="w-full"
                    >
                        {YEARS.map(year => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </Select>
                </div>

                {/* Filtro de Mes */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        Mes
                    </label>
                    <Select
                        value={selectedMonth.toString()}
                        onChange={(e) => onMonthChange(parseInt(e.target.value))}
                        className="w-full"
                    >
                        {MONTHS.map(month => (
                            <option key={month.value} value={month.value}>
                                {month.label}
                            </option>
                        ))}
                    </Select>
                </div>

                {/* Filtro de Sede */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <Building2 className="h-4 w-4 text-blue-600" />
                        Sede
                    </label>
                    <Select
                        value={selectedHeadquarters}
                        onChange={(e) => onHeadquartersChange(e.target.value)}
                        className="w-full"
                    >
                        {HEADQUARTERS.map(hq => (
                            <option key={hq} value={hq}>
                                {hq}
                            </option>
                        ))}
                    </Select>
                </div>

                {/* Filtro de Servicio */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <Briefcase className="h-4 w-4 text-blue-600" />
                        Servicio
                    </label>
                    <Select
                        value={selectedService}
                        onChange={(e) => onServiceChange(e.target.value)}
                        className="w-full"
                    >
                        {SERVICES.map(service => (
                            <option key={service} value={service}>
                                {service}
                            </option>
                        ))}
                    </Select>
                </div>
            </div>

            {/* Indicador de filtros activos */}
            {(selectedHeadquarters !== 'Todas las sedes' || selectedService !== 'Todos los servicios') && (
                <div className="mt-4 pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="font-medium">Filtros activos:</span>
                        <div className="flex gap-2 flex-wrap">
                            {selectedHeadquarters !== 'Todas las sedes' && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    {selectedHeadquarters}
                                </span>
                            )}
                            {selectedService !== 'Todos los servicios' && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                    {selectedService}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

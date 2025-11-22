"use client"

import { useState, useEffect } from 'react'
import {
    X,
    Calendar,
    ClipboardList,
    Wrench,
    Ruler,
    Award,
    Save,
    FileText,
    ChevronDown
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import type { EquipmentRecord, MetrologicalPlanning, MetrologicalRecord } from '@/features/inventory/data/mock-equipment'
import { cn } from '@/lib/cn'

interface MetrologicalHistoryModalProps {
    isOpen: boolean
    equipment: EquipmentRecord | null
    onClose: () => void
}

const MONTHS = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
]

export function MetrologicalHistoryModal({ isOpen, equipment, onClose }: MetrologicalHistoryModalProps) {
    if (!isOpen || !equipment) return null

    // Estado local para la planificación (simulado)
    const [planning, setPlanning] = useState<MetrologicalPlanning>(equipment.planning || {
        preventiveFrequency: 0,
        nextPreventiveMonth: '',
        calibrationFrequency: 0,
        nextCalibrationMonth: '',
        correctiveFrequency: 0,
        nextCorrectiveMonth: ''
    })

    // Estado para controlar qué tipos de mantenimiento aplican
    const [hasPreventive, setHasPreventive] = useState(true)
    const [hasCalibration, setHasCalibration] = useState(true)
    const [hasCorrective, setHasCorrective] = useState(false)

    // Estado para el registro seleccionado (detalle)
    const [selectedRecord, setSelectedRecord] = useState<MetrologicalRecord | null>(null)

    // Estado para controlar si la sección de planificación está expandida
    const [isPlanningExpanded, setIsPlanningExpanded] = useState(false)

    // Estado para controlar si hay cambios sin guardar
    const [isDirty, setIsDirty] = useState(false)

    // Efecto para detectar cambios en la planificación
    useEffect(() => {
        if (!equipment.planning) {
            setIsDirty(true) // Si no había planning y ahora hay (estado inicial), asume cambio si se edita
            return
        }

        const hasChanges =
            planning.preventiveFrequency !== equipment.planning.preventiveFrequency ||
            planning.nextPreventiveMonth !== equipment.planning.nextPreventiveMonth ||
            planning.calibrationFrequency !== equipment.planning.calibrationFrequency ||
            planning.nextCalibrationMonth !== equipment.planning.nextCalibrationMonth ||
            planning.correctiveFrequency !== equipment.planning.correctiveFrequency ||
            planning.nextCorrectiveMonth !== equipment.planning.nextCorrectiveMonth

        setIsDirty(hasChanges)
    }, [planning, equipment.planning])

    const handleSavePlanning = () => {
        console.log('Guardando planificación:', planning)
        // Aquí iría la lógica para guardar en backend
        setIsDirty(false) // Simular guardado
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={onClose}
        >
            <div
                className="relative max-h-[95vh] w-full max-w-7xl overflow-hidden rounded-2xl bg-white shadow-xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="border-b border-slate-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="rounded-lg bg-white p-2 shadow-sm">
                                <ClipboardList className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">Historial Metrológico y Planificación</h2>
                                <p className="text-sm text-slate-600 mt-1">{equipment.name} - {equipment.code}</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors"
                            aria-label="Cerrar"
                        >
                            <X className="h-5 w-5 text-slate-700" />
                        </button>
                    </div>
                </div>

                {/* Content Scrollable */}
                <div className="flex-1 overflow-y-auto p-8 space-y-8">

                    {/* 1. Tabla de Historial */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-slate-500" />
                            <h3 className="text-lg font-bold text-slate-800">Registro Histórico</h3>
                        </div>

                        <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                                    <tr>
                                        <th className="px-6 py-3 w-[140px]">Fecha</th>
                                        <th className="px-6 py-3">No. Informe</th>
                                        <th className="px-6 py-3">Tipo</th>
                                        <th className="px-6 py-3">Proveedor</th>
                                        <th className="px-6 py-3">Observaciones</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {equipment.metrologicalHistory && equipment.metrologicalHistory.length > 0 ? (
                                        equipment.metrologicalHistory.map((record) => (
                                            <tr
                                                key={record.id}
                                                className="hover:bg-slate-50/80 transition-colors cursor-pointer"
                                                onClick={() => setSelectedRecord(record)}
                                            >
                                                <td className="px-6 py-3 font-medium text-slate-900 w-[140px]">{record.date}</td>
                                                <td className="px-6 py-3 font-mono text-slate-600">{record.reportNumber}</td>
                                                <td className="px-6 py-3">
                                                    <Badge
                                                        variant={
                                                            record.type === 'Preventivo' ? 'info' :
                                                                record.type === 'Calibración' ? 'secondary' :
                                                                    'warning'
                                                        }
                                                    >
                                                        {record.type}
                                                    </Badge>
                                                </td>
                                                <td className="px-6 py-3 text-slate-600">{record.provider}</td>
                                                <td className="px-6 py-3 text-slate-500 max-w-xs truncate" title={record.observations}>
                                                    {record.observations}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-8 text-center text-slate-400 italic">
                                                No hay registros históricos disponibles
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                                <tfoot className="bg-blue-50 border-t-2 border-blue-200">
                                    <tr>
                                        <td colSpan={5} className="px-6 py-4">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="h-5 w-5 text-blue-600" />
                                                    <span className="font-semibold text-slate-700">Próximos Mantenimientos:</span>
                                                </div>
                                                <div className="flex gap-6 text-sm">
                                                    {hasPreventive && planning.nextPreventiveMonth && (
                                                        <div className="flex items-center gap-2">
                                                            <Badge variant="info">Preventivo</Badge>
                                                            <span className="text-slate-600">{planning.nextPreventiveMonth}</span>
                                                        </div>
                                                    )}
                                                    {hasCalibration && planning.nextCalibrationMonth && (
                                                        <div className="flex items-center gap-2">
                                                            <Badge variant="secondary">Calibración</Badge>
                                                            <span className="text-slate-600">{planning.nextCalibrationMonth}</span>
                                                        </div>
                                                    )}
                                                    {hasCorrective && planning.nextCorrectiveMonth && (
                                                        <div className="flex items-center gap-2">
                                                            <Badge variant="warning">Correctivo</Badge>
                                                            <span className="text-slate-600">{planning.nextCorrectiveMonth}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </section>

                    {/* 2. Planificación */}
                    <section className="space-y-4 pt-4 border-t border-slate-100">
                        <div className="flex items-center justify-between">
                            <button
                                onClick={() => setIsPlanningExpanded(!isPlanningExpanded)}
                                className="flex items-center gap-2 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors flex-1"
                            >
                                <ClipboardList className="h-5 w-5 text-slate-500" />
                                <h3 className="text-lg font-bold text-slate-800">Planificación de Eventos</h3>
                                <ChevronDown className={cn(
                                    "h-5 w-5 text-slate-400 transition-transform duration-200",
                                    isPlanningExpanded && "rotate-180"
                                )} />
                            </button>
                            {isDirty && (
                                <Button onClick={handleSavePlanning} size="sm" className="bg-blue-600 hover:bg-blue-700 text-white animate-in fade-in zoom-in duration-200">
                                    <Save className="mr-2 h-4 w-4" />
                                    Guardar Planificación
                                </Button>
                            )}
                        </div>

                        {isPlanningExpanded && (
                            <div className="grid gap-6 md:grid-cols-3">
                                {/* Card Mantenimiento Preventivo */}
                                < div className={cn(
                                    "rounded-xl border p-5 space-y-4 transition-opacity",
                                    hasPreventive ? "border-blue-100 bg-blue-50/30" : "border-slate-200 bg-slate-50/30 opacity-60"
                                )}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-blue-700 font-semibold">
                                            <Wrench className="h-5 w-5" />
                                            <h4>Mantenimiento Preventivo</h4>
                                        </div>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={hasPreventive}
                                                onChange={(e) => setHasPreventive(e.target.checked)}
                                                className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                            />
                                            <span className="text-xs text-slate-600">Aplica</span>
                                        </label>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-medium text-slate-600">Frecuencia (veces/año)</label>
                                            <Input
                                                type="number"
                                                min="0"
                                                value={planning.preventiveFrequency}
                                                onChange={(e) => setPlanning({ ...planning, preventiveFrequency: parseInt(e.target.value) || 0 })}
                                                className="bg-white"
                                                disabled={!hasPreventive}
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-medium text-slate-600">Próximo mes</label>
                                            <Select
                                                value={planning.nextPreventiveMonth}
                                                onChange={(e) => setPlanning({ ...planning, nextPreventiveMonth: e.target.value })}
                                                disabled={!hasPreventive}
                                            >
                                                <option value="" disabled>Seleccionar mes</option>
                                                {MONTHS.map(month => (
                                                    <option key={month} value={month}>{month}</option>
                                                ))}
                                            </Select>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Calibración */}
                                <div className={cn(
                                    "rounded-xl border p-5 space-y-4 transition-opacity",
                                    hasCalibration ? "border-purple-100 bg-purple-50/30" : "border-slate-200 bg-slate-50/30 opacity-60"
                                )}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-purple-700 font-semibold">
                                            <Ruler className="h-5 w-5" />
                                            <h4>Calibración</h4>
                                        </div>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={hasCalibration}
                                                onChange={(e) => setHasCalibration(e.target.checked)}
                                                className="w-4 h-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                                            />
                                            <span className="text-xs text-slate-600">Aplica</span>
                                        </label>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-medium text-slate-600">Frecuencia (veces/año)</label>
                                            <Input
                                                type="number"
                                                min="0"
                                                value={planning.calibrationFrequency}
                                                onChange={(e) => setPlanning({ ...planning, calibrationFrequency: parseInt(e.target.value) || 0 })}
                                                className="bg-white"
                                                disabled={!hasCalibration}
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-medium text-slate-600">Próximo mes</label>
                                            <Select
                                                value={planning.nextCalibrationMonth}
                                                onChange={(e) => setPlanning({ ...planning, nextCalibrationMonth: e.target.value })}
                                                disabled={!hasCalibration}
                                            >
                                                <option value="" disabled>Seleccionar mes</option>
                                                {MONTHS.map(month => (
                                                    <option key={month} value={month}>{month}</option>
                                                ))}
                                            </Select>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Mantenimiento Correctivo */}
                                <div className={cn(
                                    "rounded-xl border p-5 space-y-4 transition-opacity",
                                    hasCorrective ? "border-amber-100 bg-amber-50/30" : "border-slate-200 bg-slate-50/30 opacity-60"
                                )}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-amber-700 font-semibold">
                                            <Award className="h-5 w-5" />
                                            <h4>Mantenimiento Correctivo</h4>
                                        </div>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={hasCorrective}
                                                onChange={(e) => setHasCorrective(e.target.checked)}
                                                className="w-4 h-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
                                            />
                                            <span className="text-xs text-slate-600">Aplica</span>
                                        </label>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-medium text-slate-600">Mes</label>
                                            <Select
                                                value={planning.nextCorrectiveMonth}
                                                onChange={(e) => setPlanning({ ...planning, nextCorrectiveMonth: e.target.value })}
                                                disabled={!hasCorrective}
                                            >
                                                <option value="" disabled>Seleccionar mes</option>
                                                {MONTHS.map(month => (
                                                    <option key={month} value={month}>{month}</option>
                                                ))}
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>
                </div>
            </div >

            {/* Modal de Detalle de Registro */}
            {
                selectedRecord && (
                    <div
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-200"
                        onClick={() => setSelectedRecord(null)}
                    >
                        <div
                            className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-200"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="border-b border-slate-100 px-6 py-4 flex items-center justify-between bg-slate-50/50">
                                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                                    <FileText className="h-4 w-4 text-slate-500" />
                                    Detalle del Registro
                                </h3>
                                <button
                                    onClick={() => setSelectedRecord(null)}
                                    className="text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-xs font-medium text-slate-500 mb-1">Fecha</p>
                                        <p className="text-sm font-semibold text-slate-900">{selectedRecord?.date}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-slate-500 mb-1">No. Informe</p>
                                        <p className="text-sm font-mono text-slate-700 bg-slate-100 px-2 py-0.5 rounded inline-block">
                                            {selectedRecord?.reportNumber}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-slate-500 mb-1">Tipo</p>
                                        <Badge
                                            variant={
                                                selectedRecord?.type === 'Preventivo' ? 'info' :
                                                    selectedRecord?.type === 'Calibración' ? 'secondary' :
                                                        'warning'
                                            }
                                        >
                                            {selectedRecord?.type}
                                        </Badge>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-slate-500 mb-1">Proveedor</p>
                                        <p className="text-sm text-slate-700">{selectedRecord?.provider}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-slate-500 mb-1">Observaciones</p>
                                    <div className="bg-slate-50 rounded-lg p-3 text-sm text-slate-700 border border-slate-100">
                                        {selectedRecord?.observations}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-50 px-6 py-3 flex justify-end">
                                <Button variant="outline" size="sm" onClick={() => setSelectedRecord(null)}>
                                    Cerrar
                                </Button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    )
}

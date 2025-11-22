"use client"

import { useState, useEffect } from 'react'
import {
    X,
    Calendar,
    ClipboardList,
    FileText,
    Settings
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { EquipmentRecord, MetrologicalPlanning, MetrologicalRecord } from '@/features/inventory/data/mock-equipment'
import { cn } from '@/lib/cn'
import { MaintenancePlanningModal } from './maintenance-planning-modal'

interface MetrologicalHistoryModalProps {
    isOpen: boolean
    equipment: EquipmentRecord | null
    onClose: () => void
}

export function MetrologicalHistoryModal({ isOpen, equipment, onClose }: MetrologicalHistoryModalProps) {
    // Estado local para la planificación (simulado)
    const [planning, setPlanning] = useState<MetrologicalPlanning>(equipment?.planning || {
        preventiveFrequency: 0,
        nextPreventiveMonth: '',
        preventiveProvider: '',
        preventiveCost: 0,
        calibrationFrequency: 0,
        nextCalibrationMonth: '',
        calibrationProvider: '',
        calibrationCost: 0,
        correctiveFrequency: 0,
        nextCorrectiveMonth: '',
        correctiveProvider: '',
        correctiveCost: 0
    })

    // Estado para el registro seleccionado (detalle)
    const [selectedRecord, setSelectedRecord] = useState<MetrologicalRecord | null>(null)

    // Estado para controlar si el modal de planificación está abierto
    const [isPlanningModalOpen, setIsPlanningModalOpen] = useState(false)

    if (!isOpen || !equipment) return null

    const handleSavePlanning = (newPlanning: MetrologicalPlanning) => {
        setPlanning(newPlanning)
        console.log('Guardando planificación:', newPlanning)
        // Aquí iría la lógica para guardar en backend
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
                                                    {planning.nextPreventiveMonth && (
                                                        <div className="flex items-center gap-2">
                                                            <Badge variant="info">Preventivo</Badge>
                                                            <span className="text-slate-600">{planning.nextPreventiveMonth}</span>
                                                        </div>
                                                    )}
                                                    {planning.nextCalibrationMonth && (
                                                        <div className="flex items-center gap-2">
                                                            <Badge variant="secondary">Calibración</Badge>
                                                            <span className="text-slate-600">{planning.nextCalibrationMonth}</span>
                                                        </div>
                                                    )}
                                                    {planning.nextCorrectiveMonth && (
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

                </div>

                {/* Footer con botón de planificación */}
                <div className="border-t border-slate-200 bg-slate-50 px-8 py-4 flex justify-end">
                    <Button
                        onClick={() => setIsPlanningModalOpen(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                        <Settings className="mr-2 h-4 w-4" />
                        Planificación de Mantenimientos
                    </Button>
                </div>
            </div>

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

            {/* Modal de Planificación de Mantenimientos */}
            <MaintenancePlanningModal
                isOpen={isPlanningModalOpen}
                planning={planning}
                onClose={() => setIsPlanningModalOpen(false)}
                onSave={handleSavePlanning}
            />
        </div>
    )
}

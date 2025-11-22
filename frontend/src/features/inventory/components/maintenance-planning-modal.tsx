"use client"

import { useState, useEffect } from 'react'
import {
    X,
    Wrench,
    Ruler,
    Award,
    Save,
    Settings
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import type { MetrologicalPlanning } from '@/features/inventory/data/mock-equipment'
import { cn } from '@/lib/cn'

interface MaintenancePlanningModalProps {
    isOpen: boolean
    planning: MetrologicalPlanning
    onClose: () => void
    onSave: (planning: MetrologicalPlanning) => void
}

const MONTHS = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
]

export function MaintenancePlanningModal({ isOpen, planning: initialPlanning, onClose, onSave }: MaintenancePlanningModalProps) {
    if (!isOpen) return null

    const [planning, setPlanning] = useState<MetrologicalPlanning>(initialPlanning)
    const [hasPreventive, setHasPreventive] = useState(true)
    const [hasCalibration, setHasCalibration] = useState(true)
    const [hasCorrective, setHasCorrective] = useState(false)

    // Detectar cambios
    const [isDirty, setIsDirty] = useState(false)

    useEffect(() => {
        const hasChanges =
            planning.preventiveFrequency !== initialPlanning.preventiveFrequency ||
            planning.nextPreventiveMonth !== initialPlanning.nextPreventiveMonth ||
            planning.preventiveProvider !== initialPlanning.preventiveProvider ||
            planning.preventiveCost !== initialPlanning.preventiveCost ||
            planning.calibrationFrequency !== initialPlanning.calibrationFrequency ||
            planning.nextCalibrationMonth !== initialPlanning.nextCalibrationMonth ||
            planning.calibrationProvider !== initialPlanning.calibrationProvider ||
            planning.calibrationCost !== initialPlanning.calibrationCost ||
            planning.correctiveFrequency !== initialPlanning.correctiveFrequency ||
            planning.nextCorrectiveMonth !== initialPlanning.nextCorrectiveMonth ||
            planning.correctiveProvider !== initialPlanning.correctiveProvider ||
            planning.correctiveCost !== initialPlanning.correctiveCost

        setIsDirty(hasChanges)
    }, [planning, initialPlanning])

    const handleSave = () => {
        onSave(planning)
        onClose()
    }

    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="border-b border-slate-100 px-6 py-4 flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2">
                        <Settings className="h-5 w-5 text-blue-600" />
                        Planificación de Mantenimientos
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {/* Mantenimiento Preventivo */}
                    <div className={cn(
                        "rounded-xl border p-5 space-y-4 transition-all",
                        hasPreventive ? "border-blue-200 bg-blue-50/50" : "border-slate-200 bg-slate-50/30 opacity-60"
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

                        <div className="grid grid-cols-2 gap-4">
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

                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-slate-600">Proveedor</label>
                                <Input
                                    type="text"
                                    value={planning.preventiveProvider || ''}
                                    onChange={(e) => setPlanning({ ...planning, preventiveProvider: e.target.value })}
                                    className="bg-white"
                                    disabled={!hasPreventive}
                                    placeholder="Nombre del proveedor"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-slate-600">Costo estimado</label>
                                <Input
                                    type="number"
                                    min="0"
                                    value={planning.preventiveCost || 0}
                                    onChange={(e) => setPlanning({ ...planning, preventiveCost: parseFloat(e.target.value) || 0 })}
                                    className="bg-white"
                                    disabled={!hasPreventive}
                                    placeholder="0"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Calibración */}
                    <div className={cn(
                        "rounded-xl border p-5 space-y-4 transition-all",
                        hasCalibration ? "border-purple-200 bg-purple-50/50" : "border-slate-200 bg-slate-50/30 opacity-60"
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

                        <div className="grid grid-cols-2 gap-4">
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

                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-slate-600">Proveedor</label>
                                <Input
                                    type="text"
                                    value={planning.calibrationProvider || ''}
                                    onChange={(e) => setPlanning({ ...planning, calibrationProvider: e.target.value })}
                                    className="bg-white"
                                    disabled={!hasCalibration}
                                    placeholder="Nombre del proveedor"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-slate-600">Costo estimado</label>
                                <Input
                                    type="number"
                                    min="0"
                                    value={planning.calibrationCost || 0}
                                    onChange={(e) => setPlanning({ ...planning, calibrationCost: parseFloat(e.target.value) || 0 })}
                                    className="bg-white"
                                    disabled={!hasCalibration}
                                    placeholder="0"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mantenimiento Correctivo */}
                    <div className={cn(
                        "rounded-xl border p-5 space-y-4 transition-all",
                        hasCorrective ? "border-amber-200 bg-amber-50/50" : "border-slate-200 bg-slate-50/30 opacity-60"
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

                        <div className="grid grid-cols-2 gap-4">
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

                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-slate-600">Proveedor</label>
                                <Input
                                    type="text"
                                    value={planning.correctiveProvider || ''}
                                    onChange={(e) => setPlanning({ ...planning, correctiveProvider: e.target.value })}
                                    className="bg-white"
                                    disabled={!hasCorrective}
                                    placeholder="Nombre del proveedor"
                                />
                            </div>

                            <div className="space-y-1.5 col-span-2">
                                <label className="text-xs font-medium text-slate-600">Costo estimado</label>
                                <Input
                                    type="number"
                                    min="0"
                                    value={planning.correctiveCost || 0}
                                    onChange={(e) => setPlanning({ ...planning, correctiveCost: parseFloat(e.target.value) || 0 })}
                                    className="bg-white"
                                    disabled={!hasCorrective}
                                    placeholder="0"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 flex justify-between items-center">
                    <Button
                        variant="outline"
                        onClick={onClose}
                    >
                        Cancelar
                    </Button>
                    {isDirty && (
                        <Button
                            onClick={handleSave}
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            <Save className="mr-2 h-4 w-4" />
                            Guardar Planificación
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}

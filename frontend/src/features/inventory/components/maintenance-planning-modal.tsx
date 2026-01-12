"use client"

import { useState, useEffect } from 'react'
import {
    X,
    Wrench,
    Ruler,
    Save,
    Settings,
    Plus,
    Trash2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import type { MetrologicalPlanning, ScheduledEvent } from '@/features/inventory/data/mock-equipment'
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
    const [planning, setPlanning] = useState<MetrologicalPlanning>(initialPlanning)
    const [hasPreventive, setHasPreventive] = useState(initialPlanning?.preventiveFrequency > 0)
    const [hasCalibration, setHasCalibration] = useState(initialPlanning?.calibrationFrequency > 0)

    // Detectar cambios
    const [isDirty, setIsDirty] = useState(false)

    useEffect(() => {
        // Deep comparison for dirty state is tricky with arrays. 
        // For simplicity, we just check if the object reference changed or stringified content changed.
        // But since we are mutating a local state copy, we compare with initialPlanning.

        const isDifferent = JSON.stringify(planning) !== JSON.stringify(initialPlanning)
        setIsDirty(isDifferent)
    }, [planning, initialPlanning])

    const handleSave = () => {
        onSave(planning)
        onClose()
    }

    const updatePreventiveFrequency = (newFrequency: number) => {
        const currentEvents = planning.preventiveEvents || []
        let newEvents = [...currentEvents]

        if (newFrequency > currentEvents.length) {
            // Add missing events
            const toAdd = newFrequency - currentEvents.length
            for (let i = 0; i < toAdd; i++) {
                newEvents.push({ month: '', provider: '', cost: 0 })
            }
        } else if (newFrequency < currentEvents.length) {
            // Remove extra events
            newEvents = newEvents.slice(0, newFrequency)
        }

        setPlanning({
            ...planning,
            preventiveFrequency: newFrequency,
            preventiveEvents: newEvents
        })
    }

    const updateCalibrationFrequency = (newFrequency: number) => {
        const currentEvents = planning.calibrationEvents || []
        let newEvents = [...currentEvents]

        if (newFrequency > currentEvents.length) {
            const toAdd = newFrequency - currentEvents.length
            for (let i = 0; i < toAdd; i++) {
                newEvents.push({ month: '', provider: '', cost: 0 })
            }
        } else if (newFrequency < currentEvents.length) {
            newEvents = newEvents.slice(0, newFrequency)
        }

        setPlanning({
            ...planning,
            calibrationFrequency: newFrequency,
            calibrationEvents: newEvents
        })
    }

    const updatePreventiveEvent = (index: number, field: keyof ScheduledEvent, value: any) => {
        const newEvents = [...(planning.preventiveEvents || [])]
        newEvents[index] = { ...newEvents[index], [field]: value }
        setPlanning({ ...planning, preventiveEvents: newEvents })
    }

    const updateCalibrationEvent = (index: number, field: keyof ScheduledEvent, value: any) => {
        const newEvents = [...(planning.calibrationEvents || [])]
        newEvents[index] = { ...newEvents[index], [field]: value }
        setPlanning({ ...planning, calibrationEvents: newEvents })
    }

    const handleTogglePreventive = (checked: boolean) => {
        setHasPreventive(checked)
        if (!checked) {
            setPlanning({ ...planning, preventiveFrequency: 0, preventiveEvents: [] })
        } else {
            // Initialize with 1 event if it was 0
            if (planning.preventiveFrequency === 0) {
                setPlanning({ ...planning, preventiveFrequency: 1, preventiveEvents: [{ month: '', provider: '', cost: 0 }] })
            }
        }
    }

    const handleToggleCalibration = (checked: boolean) => {
        setHasCalibration(checked)
        if (!checked) {
            setPlanning({ ...planning, calibrationFrequency: 0, calibrationEvents: [] })
        } else {
            if (planning.calibrationFrequency === 0) {
                setPlanning({ ...planning, calibrationFrequency: 1, calibrationEvents: [{ month: '', provider: '', cost: 0 }] })
            }
        }
    }

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col"
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
                <div className="flex-1 overflow-y-auto p-6 space-y-8">
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
                                    onChange={(e) => handleTogglePreventive(e.target.checked)}
                                    className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-xs text-slate-600">Aplica</span>
                            </label>
                        </div>

                        {hasPreventive && (
                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs font-medium text-slate-600">Frecuencia (veces/año)</label>
                                    <Input
                                        type="number"
                                        min="0"
                                        max="12"
                                        value={planning.preventiveFrequency}
                                        onChange={(e) => updatePreventiveFrequency(parseInt(e.target.value) || 0)}
                                        className="bg-white w-32 mt-1"
                                    />
                                </div>

                                <div className="space-y-3">
                                    {(planning.preventiveEvents || []).map((event, index) => (
                                        <div key={index} className="grid grid-cols-12 gap-3 items-end p-3 bg-white/50 rounded-lg border border-slate-100">
                                            <div className="col-span-1 flex items-center justify-center h-full pb-2">
                                                <span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                                                    {index + 1}
                                                </span>
                                            </div>
                                            <div className="col-span-3 space-y-1">
                                                <label className="text-xs font-medium text-slate-500">Mes</label>
                                                <Select
                                                    value={event.month}
                                                    onValueChange={(value) => updatePreventiveEvent(index, 'month', value)}
                                                >
                                                    <SelectTrigger className="w-full bg-white h-9">
                                                        <SelectValue placeholder="Seleccionar" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {MONTHS.map(month => (
                                                            <SelectItem key={month} value={month}>{month}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="col-span-5 space-y-1">
                                                <label className="text-xs font-medium text-slate-500">Proveedor</label>
                                                <Input
                                                    value={event.provider}
                                                    onChange={(e) => updatePreventiveEvent(index, 'provider', e.target.value)}
                                                    placeholder="Nombre del proveedor"
                                                    className="h-9"
                                                />
                                            </div>
                                            <div className="col-span-3 space-y-1">
                                                <label className="text-xs font-medium text-slate-500">Costo</label>
                                                <Input
                                                    type="number"
                                                    min="0"
                                                    value={event.cost}
                                                    onChange={(e) => updatePreventiveEvent(index, 'cost', parseFloat(e.target.value) || 0)}
                                                    placeholder="0"
                                                    className="h-9"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
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
                                    onChange={(e) => handleToggleCalibration(e.target.checked)}
                                    className="w-4 h-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                                />
                                <span className="text-xs text-slate-600">Aplica</span>
                            </label>
                        </div>

                        {hasCalibration && (
                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs font-medium text-slate-600">Frecuencia (veces/año)</label>
                                    <Input
                                        type="number"
                                        min="0"
                                        max="12"
                                        value={planning.calibrationFrequency}
                                        onChange={(e) => updateCalibrationFrequency(parseInt(e.target.value) || 0)}
                                        className="bg-white w-32 mt-1"
                                    />
                                </div>

                                <div className="space-y-3">
                                    {(planning.calibrationEvents || []).map((event, index) => (
                                        <div key={index} className="grid grid-cols-12 gap-3 items-end p-3 bg-white/50 rounded-lg border border-slate-100">
                                            <div className="col-span-1 flex items-center justify-center h-full pb-2">
                                                <span className="bg-purple-100 text-purple-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                                                    {index + 1}
                                                </span>
                                            </div>
                                            <div className="col-span-3 space-y-1">
                                                <label className="text-xs font-medium text-slate-500">Mes</label>
                                                <Select
                                                    value={event.month}
                                                    onValueChange={(value) => updateCalibrationEvent(index, 'month', value)}
                                                >
                                                    <SelectTrigger className="w-full bg-white h-9">
                                                        <SelectValue placeholder="Seleccionar" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {MONTHS.map(month => (
                                                            <SelectItem key={month} value={month}>{month}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="col-span-5 space-y-1">
                                                <label className="text-xs font-medium text-slate-500">Proveedor</label>
                                                <Input
                                                    value={event.provider}
                                                    onChange={(e) => updateCalibrationEvent(index, 'provider', e.target.value)}
                                                    placeholder="Nombre del proveedor"
                                                    className="h-9"
                                                />
                                            </div>
                                            <div className="col-span-3 space-y-1">
                                                <label className="text-xs font-medium text-slate-500">Costo</label>
                                                <Input
                                                    type="number"
                                                    min="0"
                                                    value={event.cost}
                                                    onChange={(e) => updateCalibrationEvent(index, 'cost', parseFloat(e.target.value) || 0)}
                                                    placeholder="0"
                                                    className="h-9"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
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
                    <Button
                        onClick={handleSave}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        disabled={!isDirty}
                    >
                        <Save className="mr-2 h-4 w-4" />
                        Guardar Planificación
                    </Button>
                </div>
            </div>
        </div>
    )
}

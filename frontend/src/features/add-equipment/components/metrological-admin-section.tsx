"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { YesNoToggle } from '@/components/ui/yes-no-toggle'
import type { EquipmentFormData } from '../types'

interface MetrologicalAdminSectionProps {
  formData: EquipmentFormData
  setFormData: React.Dispatch<React.SetStateAction<EquipmentFormData>>
}

export function MetrologicalAdminSection({ formData, setFormData }: MetrologicalAdminSectionProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-8 py-6 text-center">
        <h2 className="text-xl font-bold text-slate-900">Información metrológica administrativa</h2>
        <p className="text-sm text-slate-600 mt-1">Datos de mantenimiento y calibración</p>
      </div>
      
      <div className="p-8 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <YesNoToggle
            label="Mantenimiento Si/No"
            value={formData.maintenanceYesNo}
            onChange={(value) => setFormData(prev => ({ ...prev, maintenanceYesNo: value }))}
          />

          <div className="space-y-3">
            <Label className="text-sm font-semibold text-slate-700">Frecuencia anual mantenimiento</Label>
            <Input
              type="number"
              min="0"
              value={formData.annualMaintenanceFrequency}
              onChange={(e) => setFormData(prev => ({ ...prev, annualMaintenanceFrequency: e.target.value }))}
              placeholder="Ej: 1, 2"
              className="font-mono"
            />
          </div>

          <YesNoToggle
            label="Calibración Si/No"
            value={formData.calibrationYesNo}
            onChange={(value) => setFormData(prev => ({ ...prev, calibrationYesNo: value }))}
          />

          <div className="space-y-3">
            <Label className="text-sm font-semibold text-slate-700">Frecuencia anual calibración</Label>
            <Input
              value={formData.annualCalibrationFrequency}
              onChange={(e) => setFormData(prev => ({ ...prev, annualCalibrationFrequency: e.target.value }))}
              placeholder="Ej: 1, 2, N/A, 1 (Calificación)"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


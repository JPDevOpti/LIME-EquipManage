"use client"

import { Label } from '@/components/ui/label'
import { YesNoToggle } from '@/components/ui/yes-no-toggle'
import type { EquipmentFormData } from '../types'

interface DocumentInventorySectionProps {
  formData: EquipmentFormData
  setFormData: React.Dispatch<React.SetStateAction<EquipmentFormData>>
}

export function DocumentInventorySection({ formData, setFormData }: DocumentInventorySectionProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-8 py-6 text-center">
        <h2 className="text-xl font-bold text-slate-900">Inventario de documentos</h2>
        <p className="text-sm text-slate-600 mt-1">Documentación asociada al equipo</p>
      </div>
      
      <div className="p-8 space-y-6">
        <div className="grid gap-6 md:grid-cols-3">
          <YesNoToggle
            label="Hoja de vida"
            value={formData.lifeSheet}
            onChange={(value) => setFormData(prev => ({ ...prev, lifeSheet: value }))}
          />

          <YesNoToggle
            label="Registro de importación"
            value={formData.importRegistration}
            onChange={(value) => setFormData(prev => ({ ...prev, importRegistration: value }))}
          />

          <YesNoToggle
            label="Manual operación (Esp)"
            value={formData.operationManual}
            onChange={(value) => setFormData(prev => ({ ...prev, operationManual: value }))}
          />

          <YesNoToggle
            label="Manual servicio mto (Esp)"
            value={formData.serviceMaintenanceManual}
            onChange={(value) => setFormData(prev => ({ ...prev, serviceMaintenanceManual: value }))}
          />

          <YesNoToggle
            label="Guía Rápida de uso"
            value={formData.quickUseGuide}
            onChange={(value) => setFormData(prev => ({ ...prev, quickUseGuide: value }))}
          />

          <YesNoToggle
            label="Instructivo de manejo rápido"
            value={formData.quickHandlingInstruction}
            onChange={(value) => setFormData(prev => ({ ...prev, quickHandlingInstruction: value }))}
          />

          <YesNoToggle
            label="Protocolo Mto Prev."
            value={formData.preventiveMaintenanceProtocol}
            onChange={(value) => setFormData(prev => ({ ...prev, preventiveMaintenanceProtocol: value }))}
          />

          {/* Frecuencia metrológica fabricante - Ocupa 2 columnas */}
          <div className="space-y-3 md:col-span-2">
            <Label className="text-sm font-semibold text-slate-700">Frecuencia metrológica fabricante</Label>
            <div className="flex gap-2 flex-wrap">
              {(['Anual', 'Semestral', 'Trimestral', 'Mensual', 'N/A'] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, manufacturerMetrologicalFrequency: prev.manufacturerMetrologicalFrequency === option ? '' : option }))}
                  className={`flex-1 min-w-[100px] px-3 py-2 rounded-lg border-2 text-sm font-semibold transition ${
                    formData.manufacturerMetrologicalFrequency === option
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                      : 'border-slate-200 text-slate-600 hover:border-emerald-200 hover:bg-emerald-50/50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


"use client"

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import type { EquipmentFormData } from '../types'

interface OperatingConditionsSectionProps {
  formData: EquipmentFormData
  setFormData: React.Dispatch<React.SetStateAction<EquipmentFormData>>
}

export function OperatingConditionsSection({ formData, setFormData }: OperatingConditionsSectionProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-8 py-6 text-center">
        <h2 className="text-xl font-bold text-slate-900">Condiciones de funcionamiento</h2>
        <p className="text-sm text-slate-600 mt-1">Especificaciones técnicas y requisitos operativos</p>
      </div>
      
      <div className="p-8 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <Label className="text-sm font-semibold text-slate-700">Voltaje</Label>
            <Input
              value={formData.voltage}
              onChange={(e) => setFormData(prev => ({ ...prev, voltage: e.target.value }))}
              placeholder="Ej: 110-220 VAC, 115 VAC"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-semibold text-slate-700">Corriente</Label>
            <Input
              value={formData.current}
              onChange={(e) => setFormData(prev => ({ ...prev, current: e.target.value }))}
              placeholder="Ej: 4 A, 2.5 A, NI"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-semibold text-slate-700">Humedad relativa</Label>
            <Input
              value={formData.relativeHumidity}
              onChange={(e) => setFormData(prev => ({ ...prev, relativeHumidity: e.target.value }))}
              placeholder="Ej: 30-85 %HR, 45% - 85% HR, NI"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-semibold text-slate-700">Temperatura</Label>
            <Input
              value={formData.temperature}
              onChange={(e) => setFormData(prev => ({ ...prev, temperature: e.target.value }))}
              placeholder="Ej: 15-30°C, Max 38°C, NI"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-semibold text-slate-700">Dimensiones</Label>
            <Input
              value={formData.dimensions}
              onChange={(e) => setFormData(prev => ({ ...prev, dimensions: e.target.value }))}
              placeholder="Ej: 53.5 x 53 x 142 cm, 305 x 385 x 400 mm"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-semibold text-slate-700">Peso</Label>
            <Input
              value={formData.weight}
              onChange={(e) => setFormData(prev => ({ ...prev, weight: e.target.value }))}
              placeholder="Ej: 55.5 kg, 25 kg, NI"
            />
          </div>

          <div className="space-y-3 md:col-span-2">
            <Label className="text-sm font-semibold text-slate-700">Otros</Label>
            <Textarea
              value={formData.otherConditions}
              onChange={(e) => setFormData(prev => ({ ...prev, otherConditions: e.target.value }))}
              placeholder="Ej: Frecuencia 50/60 Hz, NI, otros requisitos especiales..."
              rows={3}
            />
          </div>
        </div>
      </div>
    </div>
  )
}


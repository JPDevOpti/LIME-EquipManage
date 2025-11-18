"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CustomSelect } from '@/components/ui/custom-select'
import { DateInput } from '@/components/ui/date-input'
import type { EquipmentFormData, AcquisitionForm } from '../types'

interface HistoricalRecordSectionProps {
  formData: EquipmentFormData
  setFormData: React.Dispatch<React.SetStateAction<EquipmentFormData>>
}

export function HistoricalRecordSection({ formData, setFormData }: HistoricalRecordSectionProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-8 py-6 text-center">
        <h2 className="text-xl font-bold text-slate-900">Registro Histórico</h2>
        <p className="text-sm text-slate-600 mt-1">Información de adquisición y garantía del equipo</p>
      </div>
      
      <div className="p-8 space-y-6">
        {/* Primera fila - Fechas */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <Label className="text-sm">Antigüedad del equipo (Fecha de adquisición)</Label>
            <DateInput
              value={formData.equipmentAge}
              onChange={(e) => setFormData(prev => ({ ...prev, equipmentAge: e.target.value }))}
              placeholder="10/12/2009"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm">Fecha de fabricación</Label>
            <DateInput
              value={formData.manufactureDate}
              onChange={(e) => setFormData(prev => ({ ...prev, manufactureDate: e.target.value }))}
              placeholder="NI"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm">Fecha finalización garantía</Label>
            <DateInput
              value={formData.warrantyEndDate}
              onChange={(e) => setFormData(prev => ({ ...prev, warrantyEndDate: e.target.value }))}
              placeholder="N/A"
            />
          </div>
        </div>

        {/* Segunda fila */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <Label className="text-sm">Propietario del equipo</Label>
            <Input
              value={formData.equipmentOwner}
              onChange={(e) => setFormData(prev => ({ ...prev, equipmentOwner: e.target.value }))}
              placeholder="UdeA"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm">NIT</Label>
            <Input
              value={formData.nit}
              onChange={(e) => setFormData(prev => ({ ...prev, nit: e.target.value }))}
              placeholder="890.934.939-8"
              className="font-mono"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm">Proveedor equipo</Label>
            <Input
              value={formData.equipmentSupplier}
              onChange={(e) => setFormData(prev => ({ ...prev, equipmentSupplier: e.target.value }))}
              placeholder="Almacén Navarro Ospina S.A."
            />
          </div>
        </div>

        {/* Tercera fila */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label className="text-sm">Está en garantía (Si/No)</Label>
            <CustomSelect
              options={[
                { value: 'Si', label: 'Sí' },
                { value: 'No', label: 'No' },
                { value: 'N/A', label: 'N/A' }
              ]}
              value={formData.underWarranty}
              onChange={(value) => setFormData(prev => ({ ...prev, underWarranty: value }))}
              placeholder="Selecciona"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm">Forma de adquisición</Label>
            <CustomSelect
              options={[
                { value: 'Compra', label: 'Compra' },
                { value: 'Donación', label: 'Donación' },
                { value: 'Comodato', label: 'Comodato' },
                { value: 'Arriendo', label: 'Arriendo' },
                { value: 'Otro', label: 'Otro' }
              ]}
              value={formData.acquisitionForm}
              onChange={(value) => setFormData(prev => ({ ...prev, acquisitionForm: value as AcquisitionForm }))}
              placeholder="Selecciona"
            />
          </div>
        </div>

        {/* Cuarta fila */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <Label className="text-sm">Tipo de documento</Label>
            <Input
              value={formData.documentType}
              onChange={(e) => setFormData(prev => ({ ...prev, documentType: e.target.value }))}
              placeholder="Factura"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm">Número de documento</Label>
            <Input
              value={formData.documentNumber}
              onChange={(e) => setFormData(prev => ({ ...prev, documentNumber: e.target.value }))}
              placeholder="47736"
              className="font-mono"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm">Valor de compra</Label>
            <Input
              value={formData.purchaseValue}
              onChange={(e) => setFormData(prev => ({ ...prev, purchaseValue: e.target.value }))}
              placeholder="$0"
              className="font-mono"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


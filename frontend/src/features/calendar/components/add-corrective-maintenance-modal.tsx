"use client"

import { useState } from 'react'
import { X, ArrowLeft, Gauge, Save, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { EquipmentSearch, type EquipmentSearchResult } from '@/features/add-equipment/components/equipment-search'

interface AddCorrectiveMaintenanceModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (data: {
    equipment: EquipmentSearchResult
    supplier: string
    cost: number
  }) => void
}

export function AddCorrectiveMaintenanceModal({
  isOpen,
  onClose,
  onSave
}: AddCorrectiveMaintenanceModalProps) {
  const [step, setStep] = useState<'search' | 'details'>('search')
  const [selectedEquipment, setSelectedEquipment] = useState<EquipmentSearchResult | null>(null)
  const [formData, setFormData] = useState({
    supplier: '',
    cost: ''
  })

  if (!isOpen) return null

  const handleEquipmentSelect = (equipment: EquipmentSearchResult) => {
    setSelectedEquipment(equipment)
    setStep('details')
  }

  const handleSave = () => {
    if (selectedEquipment && formData.supplier && formData.cost) {
      onSave({
        equipment: selectedEquipment,
        supplier: formData.supplier,
        cost: Number(formData.cost)
      })
      // Reset state handled by parent closing/reopening or manual reset if kept open
      // For now, next open will have old state unless we reset on close.
      // Better to rely on unmount or reset in Close handler if component stays mounted.
    }
  }

  const handleBack = () => {
    setStep('search')
    setSelectedEquipment(null)
    setFormData({ supplier: '', cost: '' })
  }

  const handleClose = () => {
    setStep('search')
    setSelectedEquipment(null)
    setFormData({ supplier: '', cost: '' })
    onClose()
  }

  return (
    <div 
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/40"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-shrink-0 px-6 py-5 border-b border-slate-200 bg-white rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-50 text-orange-600">
                  <Search className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {step === 'search' ? 'Seleccionar Equipo' : 'Detalles del Mantenimiento'}
                </h3>
                <p className="text-slate-600 text-xs mt-1">
                  {step === 'search' ? 'Busque el equipo para el mantenimiento correctivo' : 'Ingrese la información del proveedor y costos'}
                </p>
              </div>
            </div>
            
            <button
              onClick={handleClose}
              className="flex-shrink-0 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-all duration-200 text-slate-600 hover:text-slate-800"
              title="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
          {step === 'search' ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
              <EquipmentSearch onSelectEquipment={handleEquipmentSelect} />
            </div>
          ) : (
            <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-right-8 duration-300">
              {/* Equipment Summary */}
              {selectedEquipment && (
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                    Equipo Seleccionado
                  </h4>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                      <Gauge className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{selectedEquipment.name}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2 py-0.5 bg-slate-100 rounded text-xs font-mono text-slate-700 border border-slate-200">
                          {selectedEquipment.code}
                        </span>
                        <span className="px-2 py-0.5 bg-slate-100 rounded text-xs text-slate-700 border border-slate-200">
                          {selectedEquipment.service}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Fields */}
              <div className="space-y-6 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-slate-900">
                    Proveedor del Mantenimiento
                  </label>
                  <Input
                    value={formData.supplier}
                    onChange={(e) => setFormData(prev => ({ ...prev, supplier: e.target.value }))}
                    placeholder="Ingrese el nombre del proveedor..."
                    className="h-11"
                    autoFocus
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-slate-900">
                    Costo Estimado
                  </label>
                  <Input
                    type="number"
                    value={formData.cost}
                    onChange={(e) => setFormData(prev => ({ ...prev, cost: e.target.value }))}
                    placeholder="0"
                    className="h-11"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 flex items-center justify-between pt-3 border-t border-slate-200 px-6 pb-4 bg-white rounded-b-2xl">
          <div className="text-sm text-slate-500">
            Paso {step === 'search' ? '1' : '2'} de 2
          </div>
          <div className="flex gap-3">
            {step === 'details' ? (
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Atrás
              </Button>
            ) : (
              <Button variant="outline" onClick={handleClose}>
                Cancelar
              </Button>
            )}
            
            {step === 'details' && (
              <Button 
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={handleSave}
                disabled={!formData.supplier || !formData.cost}
              >
                <Save className="mr-2 h-4 w-4" />
                Guardar Mantenimiento
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

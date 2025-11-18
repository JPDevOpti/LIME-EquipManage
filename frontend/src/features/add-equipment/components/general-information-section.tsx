"use client"

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MultiSelect } from '@/components/ui/multi-select'
import { CustomSelect } from '@/components/ui/custom-select'
import { cn } from '@/lib/cn'
import { ImagePlus, X, Tags, MapPin } from 'lucide-react'
import type { EquipmentFormData, IpsClassification, InvimaClassification, MissionAxis } from '../types'

interface GeneralInformationSectionProps {
  formData: EquipmentFormData
  setFormData: React.Dispatch<React.SetStateAction<EquipmentFormData>>
  imagePreview: string | null
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onRemoveImage: () => void
}

export function GeneralInformationSection({
  formData,
  setFormData,
  imagePreview,
  onImageChange,
  onRemoveImage
}: GeneralInformationSectionProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-8 py-6 text-center">
        <h2 className="text-xl font-bold text-slate-900">Información general</h2>
        <p className="text-sm text-slate-600 mt-1">Datos básicos de identificación del equipo</p>
      </div>
      
      <div className="p-8 space-y-6">
        {/* Imagen y datos básicos */}
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          {/* Imagen */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold text-slate-700">Imagen del equipo</Label>
            <label htmlFor="image-upload" className="cursor-pointer group block">
              {imagePreview ? (
                <div className="relative w-full">
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={imagePreview}
                      alt="Vista previa"
                      className="h-full w-full rounded-2xl object-cover border-2 border-slate-200 transition-all group-hover:border-emerald-400 shadow-lg"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      onRemoveImage()
                    }}
                    className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition shadow-lg"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="aspect-[4/3] w-full rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center bg-slate-50 transition-all group-hover:border-emerald-400 group-hover:bg-emerald-50/50">
                  <ImagePlus className="h-12 w-12 text-slate-400 mb-2 transition-colors group-hover:text-emerald-600" />
                  <span className="text-sm font-semibold text-slate-500 group-hover:text-emerald-700">Subir imagen</span>
                  <span className="text-xs text-slate-400 mt-1">JPG, PNG, WebP</span>
                  <span className="text-xs text-slate-400">(Máx. 5MB)</span>
                </div>
              )}
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={onImageChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Datos básicos */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2 md:col-span-2">
              <Label className="text-sm">Nombre del equipo</Label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Ej: LUMINEX - fluoroanalizador"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Código UdeA</Label>
              <Input
                value={formData.udeaCode}
                onChange={(e) => setFormData(prev => ({ ...prev, udeaCode: e.target.value }))}
                placeholder="BIO-16869"
                className="font-mono"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Código IPS</Label>
              <Input
                value={formData.ipsCode}
                onChange={(e) => setFormData(prev => ({ ...prev, ipsCode: e.target.value }))}
                placeholder="180235"
                className="font-mono"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Código ECRI</Label>
              <Input
                value={formData.ecriCode}
                onChange={(e) => setFormData(prev => ({ ...prev, ecriCode: e.target.value }))}
                placeholder="008811"
                className="font-mono"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Marca</Label>
              <Input
                value={formData.brand}
                onChange={(e) => setFormData(prev => ({ ...prev, brand: e.target.value }))}
                placeholder="Ej: LUMINEX"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Modelo</Label>
              <Input
                value={formData.model}
                onChange={(e) => setFormData(prev => ({ ...prev, model: e.target.value }))}
                placeholder="Ej: LUMINEX LX 100 / 200"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Serie</Label>
              <Input
                value={formData.serialNumber}
                onChange={(e) => setFormData(prev => ({ ...prev, serialNumber: e.target.value }))}
                placeholder="Ej: LX10017065423"
                className="font-mono"
              />
            </div>
          </div>
        </div>

        {/* Clasificaciones */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <Tags className="h-4 w-4 text-slate-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Clasificaciones</h3>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <div className={cn(
            'grid gap-4',
            formData.invimaClassification ? 'md:grid-cols-4' : 'md:grid-cols-3'
          )}>
            <div className="space-y-2">
              <Label className="text-sm">Clasificación por eje misional</Label>
              <MultiSelect
                options={['Docencia', 'Investigación', 'Extensión']}
                value={formData.missionAxisClassification}
                onChange={(value) => setFormData(prev => ({ ...prev, missionAxisClassification: value as MissionAxis[] }))}
                placeholder="Selecciona uno o más ejes"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm">Clasificación IPS</Label>
              <CustomSelect
                options={[
                  { value: 'IND', label: 'IND' },
                  { value: 'BIO', label: 'BIO' },
                  { value: 'GASES', label: 'GASES' }
                ]}
                value={formData.ipsClassification || ''}
                onChange={(value) => setFormData(prev => ({ ...prev, ipsClassification: value as IpsClassification || null }))}
                placeholder="Selecciona una opción"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm">Clasificación Invima</Label>
              <CustomSelect
                options={[
                  { value: 'Clase I', label: 'Clase I' },
                  { value: 'Clase IIA', label: 'Clase IIA' },
                  { value: 'Clase IIB', label: 'Clase IIB' },
                  { value: 'Clase III', label: 'Clase III' }
                ]}
                value={formData.invimaClassification || ''}
                onChange={(value) => setFormData(prev => ({ ...prev, invimaClassification: value as InvimaClassification || null }))}
                placeholder="Selecciona una clase"
              />
            </div>

            {formData.invimaClassification && (
              <div className="space-y-2">
                <Label className="text-sm">Código del registro Invima</Label>
                <Input
                  value={formData.invimaCode}
                  onChange={(e) => setFormData(prev => ({ ...prev, invimaCode: e.target.value }))}
                  placeholder="INVIMA 2020DM-0022003"
                  className="font-mono"
                />
              </div>
            )}
          </div>
        </div>

        {/* Ubicación y responsable */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-slate-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Ubicación y responsable</h3>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <Label className="text-sm">Sede</Label>
              <Input
                value={formData.sede}
                onChange={(e) => setFormData(prev => ({ ...prev, sede: e.target.value }))}
                placeholder="Ej: SIU"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Servicio</Label>
              <Input
                value={formData.service}
                onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                placeholder="Ej: Laboratorio trasplantes"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Ubicación</Label>
              <Input
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                placeholder="Ej: Torre 1, Lab 410"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Responsable</Label>
              <Input
                value={formData.responsible}
                onChange={(e) => setFormData(prev => ({ ...prev, responsible: e.target.value }))}
                placeholder="Ej: Juan Jose Serrano"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


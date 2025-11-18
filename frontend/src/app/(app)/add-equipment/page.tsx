"use client"

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { MultiSelect } from '@/components/ui/multi-select'
import { CustomSelect } from '@/components/ui/custom-select'
import { DateInput } from '@/components/ui/date-input'
import { YesNoToggle } from '@/components/ui/yes-no-toggle'
import { cn } from '@/lib/cn'
import { 
  ImagePlus, 
  X, 
  Tags,
  MapPin,
  FileText
} from 'lucide-react'

type IpsClassification = 'IND' | 'BIO' | 'GASES'
type InvimaClassification = 'Clase I' | 'Clase IIA' | 'Clase IIB' | 'Clase III'
type MissionAxis = 'Docencia' | 'Investigación' | 'Extensión'
type AcquisitionForm = 'Compra' | 'Donación' | 'Comodato' | 'Arriendo' | 'Otro'

export default function AddEquipmentPage() {
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    // Identificación
    name: '',
    udeaCode: '',
    ipsCode: '',
    ecriCode: '',
    brand: '',
    model: '',
    serialNumber: '',
    missionAxisClassification: [] as MissionAxis[],
    ipsClassification: null as IpsClassification | null,
    invimaClassification: null as InvimaClassification | null,
    invimaCode: '',
    sede: '',
    service: '',
    location: '',
    responsible: '',
    
    // Registro histórico
    equipmentAge: '',
    equipmentOwner: '',
    manufactureDate: '',
    warrantyEndDate: '',
    nit: '',
    equipmentSupplier: '',
    underWarranty: '',
    acquisitionForm: '' as AcquisitionForm | '',
    documentType: '',
    documentNumber: '',
    purchaseValue: '',
    
    // Inventario de documentos
    lifeSheet: '',
    importRegistration: '',
    operationManual: '',
    serviceMaintenanceManual: '',
    quickUseGuide: '',
    quickHandlingInstruction: '',
    preventiveMaintenanceProtocol: '',
    manufacturerMetrologicalFrequency: '',
    
    // Información metrológica administrativa
    maintenanceYesNo: '',
    annualMaintenanceFrequency: '',
    calibrationYesNo: '',
    annualCalibrationFrequency: '',
    
    // Condiciones de funcionamiento
    voltage: '',
    current: '',
    relativeHumidity: '',
    temperature: '',
    dimensions: '',
    weight: '',
    otherConditions: '',
  })

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setImage(null)
    setImagePreview(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form data:', { ...formData, image })
  }

  return (
    <div className="w-full space-y-8 pb-8">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Información general */}
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
                          removeImage()
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
                    onChange={handleImageChange}
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

                {/* Código registro Invima (solo si tiene clasificación) */}
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

        {/* Registro Histórico */}
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

        {/* Inventario de documentos */}
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

        {/* Información metrológica administrativa */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-8 py-6 text-center">
            <h2 className="text-xl font-bold text-slate-900">Información metrológica administrativa</h2>
            <p className="text-sm text-slate-600 mt-1">Datos de mantenimiento y calibración</p>
          </div>
          
          <div className="p-8 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Mantenimiento Si/No */}
              <YesNoToggle
                label="Mantenimiento Si/No"
                value={formData.maintenanceYesNo}
                onChange={(value) => setFormData(prev => ({ ...prev, maintenanceYesNo: value }))}
              />

              {/* Frecuencia anual mantenimiento */}
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

              {/* Calibración Si/No */}
              <YesNoToggle
                label="Calibración Si/No"
                value={formData.calibrationYesNo}
                onChange={(value) => setFormData(prev => ({ ...prev, calibrationYesNo: value }))}
              />

              {/* Frecuencia anual calibración */}
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

        {/* Condiciones de funcionamiento */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-8 py-6 text-center">
            <h2 className="text-xl font-bold text-slate-900">Condiciones de funcionamiento</h2>
            <p className="text-sm text-slate-600 mt-1">Especificaciones técnicas y requisitos operativos</p>
          </div>
          
          <div className="p-8 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Voltaje */}
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-slate-700">Voltaje</Label>
                <Input
                  value={formData.voltage}
                  onChange={(e) => setFormData(prev => ({ ...prev, voltage: e.target.value }))}
                  placeholder="Ej: 110-220 VAC, 115 VAC"
                />
              </div>

              {/* Corriente */}
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-slate-700">Corriente</Label>
                <Input
                  value={formData.current}
                  onChange={(e) => setFormData(prev => ({ ...prev, current: e.target.value }))}
                  placeholder="Ej: 4 A, 2.5 A, NI"
                />
              </div>

              {/* Humedad relativa */}
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-slate-700">Humedad relativa</Label>
                <Input
                  value={formData.relativeHumidity}
                  onChange={(e) => setFormData(prev => ({ ...prev, relativeHumidity: e.target.value }))}
                  placeholder="Ej: 30-85 %HR, 45% - 85% HR, NI"
                />
              </div>

              {/* Temperatura */}
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-slate-700">Temperatura</Label>
                <Input
                  value={formData.temperature}
                  onChange={(e) => setFormData(prev => ({ ...prev, temperature: e.target.value }))}
                  placeholder="Ej: 15-30°C, Max 38°C, NI"
                />
              </div>

              {/* Dimensiones */}
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-slate-700">Dimensiones</Label>
                <Input
                  value={formData.dimensions}
                  onChange={(e) => setFormData(prev => ({ ...prev, dimensions: e.target.value }))}
                  placeholder="Ej: 53.5 x 53 x 142 cm, 305 x 385 x 400 mm"
                />
              </div>

              {/* Peso */}
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-slate-700">Peso</Label>
                <Input
                  value={formData.weight}
                  onChange={(e) => setFormData(prev => ({ ...prev, weight: e.target.value }))}
                  placeholder="Ej: 55.5 kg, 25 kg, NI"
                />
              </div>

              {/* Otros */}
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

        {/* Botones de acción */}
        <div className="flex items-center justify-end gap-4 pt-4">
          <Button type="button" variant="outline" size="lg" className="min-w-[140px]">
            Cancelar
          </Button>
          <Button type="submit" size="lg" className="min-w-[180px]">
            Guardar equipo
          </Button>
        </div>
      </form>
    </div>
  )
}

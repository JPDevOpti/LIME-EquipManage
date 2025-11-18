"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { GeneralInformationSection } from '@/features/add-equipment/components/general-information-section'
import { HistoricalRecordSection } from '@/features/add-equipment/components/historical-record-section'
import { DocumentInventorySection } from '@/features/add-equipment/components/document-inventory-section'
import { MetrologicalAdminSection } from '@/features/add-equipment/components/metrological-admin-section'
import { OperatingConditionsSection } from '@/features/add-equipment/components/operating-conditions-section'
import type { EquipmentFormData, MissionAxis, IpsClassification, InvimaClassification, AcquisitionForm } from '@/features/add-equipment/types'

export default function AddEquipmentPage() {
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const [formData, setFormData] = useState<EquipmentFormData>({
    // Identificación
    name: '',
    udeaCode: '',
    ipsCode: '',
    ecriCode: '',
    brand: '',
    model: '',
    serialNumber: '',
    missionAxisClassification: [],
    ipsClassification: null,
    invimaClassification: null,
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
    acquisitionForm: '',
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
        <GeneralInformationSection
          formData={formData}
          setFormData={setFormData}
          imagePreview={imagePreview}
          onImageChange={handleImageChange}
          onRemoveImage={removeImage}
        />

        <HistoricalRecordSection
          formData={formData}
          setFormData={setFormData}
        />

        <DocumentInventorySection
          formData={formData}
          setFormData={setFormData}
        />

        <MetrologicalAdminSection
          formData={formData}
          setFormData={setFormData}
        />

        <OperatingConditionsSection
          formData={formData}
          setFormData={setFormData}
        />

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

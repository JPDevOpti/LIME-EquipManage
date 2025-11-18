"use client"

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { GeneralInformationSection } from '@/features/add-equipment/components/general-information-section'
import { HistoricalRecordSection } from '@/features/add-equipment/components/historical-record-section'
import { DocumentInventorySection } from '@/features/add-equipment/components/document-inventory-section'
import { MetrologicalAdminSection } from '@/features/add-equipment/components/metrological-admin-section'
import { OperatingConditionsSection } from '@/features/add-equipment/components/operating-conditions-section'
import type { EquipmentFormData } from '@/features/add-equipment/types'

// Función simulada para cargar datos del equipo (reemplazar con llamada a API)
async function loadEquipmentData(id: string): Promise<EquipmentFormData | null> {
  // TODO: Reemplazar con llamada real a la API
  // Por ahora retornamos datos de ejemplo
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'LUMINEX - fluoroanalizador',
        udeaCode: 'BIO-16869',
        ipsCode: '180235',
        ecriCode: '008811',
        brand: 'LUMINEX',
        model: 'LUMINEX LX 100 / 200',
        serialNumber: 'LX10017065423',
        missionAxisClassification: ['Docencia', 'Investigación'],
        ipsClassification: 'BIO',
        invimaClassification: 'Clase IIA',
        invimaCode: 'INVIMA 2020DM-0022003',
        sede: 'SIU',
        service: 'Laboratorio trasplantes',
        location: 'Torre 1, Lab 410',
        responsible: 'Juan Jose Serrano',
        equipmentAge: '10/12/2009',
        equipmentOwner: 'UdeA',
        manufactureDate: '01/01/2009',
        warrantyEndDate: '10/12/2012',
        nit: '890.934.939-8',
        equipmentSupplier: 'Almacén Navarro Ospina S.A.',
        underWarranty: 'No',
        acquisitionForm: 'Compra',
        documentType: 'Factura',
        documentNumber: '47736',
        purchaseValue: '$5000000',
        lifeSheet: 'SI',
        importRegistration: 'SI',
        operationManual: 'SI',
        serviceMaintenanceManual: 'SI',
        quickUseGuide: 'SI',
        quickHandlingInstruction: 'SI',
        preventiveMaintenanceProtocol: 'SI',
        manufacturerMetrologicalFrequency: 'Semestral',
        maintenanceYesNo: 'SI',
        annualMaintenanceFrequency: '2',
        calibrationYesNo: 'SI',
        annualCalibrationFrequency: '1',
        voltage: '110-220 VAC',
        current: '4 A',
        relativeHumidity: '30-85 %HR',
        temperature: '15-30°C',
        dimensions: '53.5 x 53 x 142 cm',
        weight: '55.5 kg',
        otherConditions: 'Frecuencia 50/60 Hz'
      })
    }, 500)
  })
}

// Función simulada para cargar imagen (reemplazar con llamada a API)
async function loadEquipmentImage(id: string): Promise<string | null> {
  // TODO: Reemplazar con llamada real a la API
  return null
}

export default function EditEquipmentPage() {
  const params = useParams()
  const router = useRouter()
  const equipmentId = params?.id as string

  const [loading, setLoading] = useState(true)
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const [formData, setFormData] = useState<EquipmentFormData>({
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
    lifeSheet: '',
    importRegistration: '',
    operationManual: '',
    serviceMaintenanceManual: '',
    quickUseGuide: '',
    quickHandlingInstruction: '',
    preventiveMaintenanceProtocol: '',
    manufacturerMetrologicalFrequency: '',
    maintenanceYesNo: '',
    annualMaintenanceFrequency: '',
    calibrationYesNo: '',
    annualCalibrationFrequency: '',
    voltage: '',
    current: '',
    relativeHumidity: '',
    temperature: '',
    dimensions: '',
    weight: '',
    otherConditions: '',
  })

  useEffect(() => {
    async function fetchEquipmentData() {
      if (!equipmentId) return

      try {
        setLoading(true)
        const data = await loadEquipmentData(equipmentId)
        const imageUrl = await loadEquipmentImage(equipmentId)

        if (data) {
          setFormData(data)
        }

        if (imageUrl) {
          setImagePreview(imageUrl)
        }
      } catch (error) {
        console.error('Error al cargar datos del equipo:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchEquipmentData()
  }, [equipmentId])

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
    console.log('Actualizando equipo:', { id: equipmentId, ...formData, image })
    // TODO: Implementar llamada a API para actualizar
    // router.push('/inventory')
  }

  const handleCancel = () => {
    router.push('/inventory')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-emerald-600 border-r-transparent"></div>
          <p className="text-sm text-slate-600">Cargando datos del equipo...</p>
        </div>
      </div>
    )
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
          <Button type="button" variant="outline" size="lg" className="min-w-[140px]" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button type="submit" size="lg" className="min-w-[180px]">
            Actualizar equipo
          </Button>
        </div>
      </form>
    </div>
  )
}


export type IpsClassification = 'IND' | 'BIO' | 'GASES'
export type InvimaClassification = 'Clase I' | 'Clase IIA' | 'Clase IIB' | 'Clase III'
export type MissionAxis = 'Docencia' | 'Investigación' | 'Extensión'
export type AcquisitionForm = 'Compra' | 'Donación' | 'Comodato' | 'Arriendo' | 'Otro'

export interface EquipmentFormData {
  // Identificación
  name: string
  udeaCode: string
  ipsCode: string
  ecriCode: string
  brand: string
  model: string
  serialNumber: string
  missionAxisClassification: MissionAxis[]
  ipsClassification: IpsClassification | null
  invimaClassification: InvimaClassification | null
  invimaCode: string
  sede: string
  service: string
  location: string
  responsible: string
  
  // Registro histórico
  equipmentAge: string
  equipmentOwner: string
  manufactureDate: string
  warrantyEndDate: string
  nit: string
  equipmentSupplier: string
  underWarranty: string
  acquisitionForm: AcquisitionForm | ''
  documentType: string
  documentNumber: string
  purchaseValue: string
  
  // Inventario de documentos
  lifeSheet: string
  importRegistration: string
  operationManual: string
  serviceMaintenanceManual: string
  quickUseGuide: string
  quickHandlingInstruction: string
  preventiveMaintenanceProtocol: string
  manufacturerMetrologicalFrequency: string
  
  // Información metrológica administrativa
  maintenanceYesNo: string
  annualMaintenanceFrequency: string
  calibrationYesNo: string
  annualCalibrationFrequency: string
  
  // Condiciones de funcionamiento
  voltage: string
  current: string
  relativeHumidity: string
  temperature: string
  dimensions: string
  weight: string
  otherConditions: string
}


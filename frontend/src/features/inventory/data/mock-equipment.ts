export type CriticalityLevel = 'Alta' | 'Media' | 'Baja'
export type CalibrationStatus = 'Al día' | 'Por vencer' | 'Expirada'
export type MaintenanceFocus = 'Preventivo' | 'Correctivo'
export type EquipmentClassification = 'BIO' | 'IND' | 'GASES' | 'N/A'
export type RiskClass = 'Clase I' | 'Clase IIa' | 'Clase IIb' | 'Clase III'
export type InvimaStatus = 'Con registro' | 'Sin registro'
export type EquipmentCategory =
  | 'Diagnóstico'
  | 'Laboratorio'
  | 'Cadena de frío'
  | 'Investigación'
  | 'Esterilización'
  | 'Control de calidad'
  | 'Soporte clínico'

export interface MetrologicalRecord {
  id: string
  date: string
  reportNumber: string
  type: 'Preventivo' | 'Calibración' | 'Correctivo'
  provider: string
  observations: string
}

export interface MetrologicalPlanning {
  preventiveFrequency: number
  nextPreventiveMonth: string
  preventiveProvider?: string
  preventiveCost?: number
  calibrationFrequency: number
  nextCalibrationMonth: string
  calibrationProvider?: string
  calibrationCost?: number
  correctiveFrequency: number
  nextCorrectiveMonth: string
  correctiveProvider?: string
  correctiveCost?: number
}

export interface EquipmentRecord {
  id: string
  code: string
  ipsCode: string
  ecriCode?: string // Nuevo
  name: string
  brand: string
  model: string
  serial: string
  location: string
  service?: string // Nuevo
  headquarters?: string // Nuevo (Sede)
  process: string
  area: string
  status: string

  // Clasificación
  maintenanceType: MaintenanceFocus
  criticality: CriticalityLevel
  calibrationStatus: CalibrationStatus
  category: EquipmentCategory
  classification: EquipmentClassification
  riskClass?: RiskClass
  invimaStatus: InvimaStatus
  invimaCode?: string
  missionClassification: string

  // Fechas y Frecuencias
  lastMaintenance: string
  nextMaintenance: string
  maintenanceFrequency?: string // Nuevo
  calibrationFrequency?: string // Nuevo
  manufacturerMetrologicalFrequency?: string // Nuevo

  // Responsables y Adquisición
  assignedTo: string
  provider: string
  warrantyActive: boolean
  warrantyExpirationDate?: string // Nuevo
  acquisitionDate?: string // Nuevo
  manufacturingDate?: string // Nuevo
  owner?: string // Nuevo
  ownerNit?: string // Nuevo
  acquisitionType?: string // Nuevo
  purchaseValue?: number // Nuevo

  // Documentación Administrativa
  documentType?: string // Nuevo
  documentNumber?: string // Nuevo

  // Especificaciones Técnicas
  voltage?: string // Nuevo
  current?: string // Nuevo
  power?: string // Nuevo
  dimensions?: string // Nuevo
  weight?: string // Nuevo
  temperatureRange?: string // Nuevo
  humidityRange?: string // Nuevo
  technicalSpecifications?: string // Nuevo (Otros)

  // Inventario de Documentos (Checklist)
  hasLifeSheet?: boolean // Nuevo
  hasImportDeclaration?: boolean // Nuevo
  hasOperationManual?: boolean // Nuevo
  hasServiceManual?: boolean // Nuevo
  hasQuickGuide?: boolean // Nuevo
  hasUserTraining?: boolean // Nuevo
  hasMaintenanceProtocol?: boolean // Nuevo

  // Historial y Planificación Metrológica
  metrologicalHistory?: MetrologicalRecord[]
  planning?: MetrologicalPlanning
}

export const equipmentInventory: EquipmentRecord[] = [
  {
    id: 'eq-001',
    code: '71246',
    ipsCode: 'BIO-16452',
    ecriCode: '15-651',
    name: 'Agitador Vórtex',
    brand: 'Scientific Industries',
    model: 'G-560',
    serial: '2-218817',
    location: 'Inmunohistoquímica',
    service: 'Laboratorio de Patología',
    headquarters: 'Sede San Vicente',
    missionClassification: 'Extensión e Investigación',
    process: 'Patología',
    area: 'Inmunohistoquímica',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Al día',
    category: 'Laboratorio',
    classification: 'BIO',
    invimaStatus: 'Sin registro',
    lastMaintenance: '2025-08-15',
    nextMaintenance: '2025-12-15',
    maintenanceFrequency: 'Semestral',
    calibrationFrequency: 'Anual',
    manufacturerMetrologicalFrequency: 'Anual',
    assignedTo: 'Martha Londoño',
    provider: 'Scientific Industries',
    warrantyActive: false,
    acquisitionDate: '2018-05-10',
    manufacturingDate: '2017-11-20',
    owner: 'UdeA',
    ownerNit: '890980040-8',
    acquisitionType: 'Compra',
    documentType: 'Factura',
    documentNumber: 'F-12345',
    purchaseValue: 1200000,
    voltage: '110V',
    current: '0.5A',
    power: '60W',
    weight: '4kg',
    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: true,
    hasMaintenanceProtocol: true,
    metrologicalHistory: [
      {
        id: 'hist-001',
        date: '2025-08-15',
        reportNumber: 'INF-2025-001',
        type: 'Preventivo',
        provider: 'Scientific Industries',
        observations: 'Mantenimiento preventivo realizado con éxito. Se reemplazaron empaques.'
      },
      {
        id: 'hist-002',
        date: '2025-02-10',
        reportNumber: 'INF-2025-002',
        type: 'Calibración',
        provider: 'Metrología SAS',
        observations: 'Equipo dentro de especificaciones.'
      }
    ],
    planning: {
      preventiveFrequency: 2,
      nextPreventiveMonth: 'Diciembre',
      calibrationFrequency: 1,
      nextCalibrationMonth: 'Agosto',
      correctiveFrequency: 0,
      nextCorrectiveMonth: ''
    }
  },
  {
    id: 'eq-002',
    code: '149289',
    ipsCode: 'Pendiente',
    ecriCode: '18-449',
    name: 'Aire Acondicionado',
    brand: 'LG',
    model: 'P131CM',
    serial: '305CYYQ00562',
    location: 'Cuarto criostato',
    service: 'Infraestructura',
    headquarters: 'Sede San Vicente',
    missionClassification: 'Extensión e Investigación',
    process: 'Patología',
    area: 'Climatización',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Al día',
    category: 'Soporte clínico',
    classification: 'IND',
    invimaStatus: 'Sin registro',
    lastMaintenance: '2025-07-10',
    nextMaintenance: '2025-11-10',
    maintenanceFrequency: 'Trimestral',
    assignedTo: 'Juliana',
    provider: 'Comercial y servicios Larco S.A.S',
    warrantyActive: false,
    acquisitionDate: '2020-02-15',
    owner: 'UdeA',
    acquisitionType: 'Compra',
    voltage: '220V',
    power: '12000 BTU',
    hasLifeSheet: true,
    hasOperationManual: true,
    metrologicalHistory: [
      {
        id: 'hist-003',
        date: '2025-07-10',
        reportNumber: 'INF-2025-003',
        type: 'Preventivo',
        provider: 'Comercial y servicios Larco S.A.S',
        observations: 'Limpieza de filtros y revisión general del sistema.'
      }
    ],
    planning: {
      preventiveFrequency: 0,
      nextPreventiveMonth: 'Noviembre',
      calibrationFrequency: 0,
      nextCalibrationMonth: '',
      correctiveFrequency: 0,
      nextCorrectiveMonth: ''
    }
  },
  {
    id: 'eq-003',
    code: '163471',
    ipsCode: 'Pendiente',
    name: 'Aire Acondicionado Residentes',
    brand: 'LG',
    model: 'LP1214GXR',
    serial: '511CYTB00105',
    location: 'Salón de residentes',
    service: 'Infraestructura',
    headquarters: 'Sede San Vicente',
    missionClassification: 'N/A',
    process: 'Patología',
    area: 'Apoyo académico',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Por vencer',
    category: 'Soporte clínico',
    classification: 'IND',
    invimaStatus: 'Sin registro',
    lastMaintenance: '2025-07-22',
    nextMaintenance: '2025-11-30',
    maintenanceFrequency: 'Trimestral',
    assignedTo: 'Patólogos, residentes y personal del almacén',
    provider: 'Comercial y servicios Larco S.A.S',
    warrantyActive: false,
    owner: 'UdeA',
    voltage: '110V',
    power: '12000 BTU',
    hasLifeSheet: true,
    metrologicalHistory: [
      {
        id: 'hist-004',
        date: '2025-07-22',
        reportNumber: 'INF-2025-004',
        type: 'Preventivo',
        provider: 'Comercial y servicios Larco S.A.S',
        observations: 'Mantenimiento preventivo trimestral realizado.'
      }
    ],
    planning: {
      preventiveFrequency: 0,
      nextPreventiveMonth: 'Noviembre',
      calibrationFrequency: 0,
      nextCalibrationMonth: '',
      correctiveFrequency: 0,
      nextCorrectiveMonth: ''
    }
  },
  {
    id: 'eq-004',
    code: '167302 / 064529',
    ipsCode: 'Pendiente',
    name: 'Aire Acondicionado Secretaría',
    brand: 'LG',
    model: 'LP1214GXR',
    serial: '603CYNL00223',
    location: 'Secretaría principal',
    missionClassification: 'N/A',
    process: 'Patología',
    area: 'Administrativo',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Al día',
    category: 'Soporte clínico',
    classification: 'IND',
    invimaStatus: 'Sin registro',
    lastMaintenance: '2025-07-05',
    nextMaintenance: '2025-11-05',
    assignedTo: 'Secretarias y personal del almacén',
    provider: 'Comercial y servicios Larco S.A.S',
    warrantyActive: false,
    metrologicalHistory: [
      {
        id: 'hist-005',
        date: '2025-07-05',
        reportNumber: 'INF-2025-005',
        type: 'Preventivo',
        provider: 'Comercial y servicios Larco S.A.S',
        observations: 'Revisión y limpieza del equipo.'
      }
    ],
    planning: {
      preventiveFrequency: 0,
      nextPreventiveMonth: 'Noviembre',
      calibrationFrequency: 0,
      nextCalibrationMonth: '',
      correctiveFrequency: 0,
      nextCorrectiveMonth: ''
    }
  },
  {
    id: 'eq-005',
    code: '109414 / 063762',
    ipsCode: 'BIO-16453',
    name: 'Balanza Analítica',
    brand: 'A&D Company',
    model: 'HR-200',
    serial: '12312707',
    location: 'Histoquímica',
    missionClassification: 'Extensión e Investigación',
    process: 'Patología',
    area: 'Control de masas',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Alta',
    calibrationStatus: 'Al día',
    category: 'Control de calidad',
    classification: 'BIO',
    riskClass: 'Clase I',
    invimaStatus: 'Con registro',
    invimaCode: '2021DM-0012345',
    lastMaintenance: '2025-08-02',
    nextMaintenance: '2025-11-28',
    assignedTo: 'Juliana',
    provider: 'A&D Company',
    warrantyActive: false,
    metrologicalHistory: [
      {
        id: 'hist-006',
        date: '2025-08-02',
        reportNumber: 'INF-2025-006',
        type: 'Calibración',
        provider: 'Metrología SAS',
        observations: 'Calibración anual. Equipo dentro de especificaciones.'
      }
    ],
    planning: {
      preventiveFrequency: 0,
      nextPreventiveMonth: 'Diciembre',
      calibrationFrequency: 1,
      nextCalibrationMonth: 'Agosto',
      correctiveFrequency: 0,
      nextCorrectiveMonth: ''
    }
  },
  {
    id: 'eq-006',
    code: '072235',
    ipsCode: 'BIO-16454',
    name: 'Balanza Analítica',
    brand: 'A&D Company',
    model: 'HA-202M',
    serial: '10400268',
    location: 'Cuarto criostato',
    missionClassification: 'Extensión e Investigación',
    process: 'Patología',
    area: 'Control de masas',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Alta',
    calibrationStatus: 'Por vencer',
    category: 'Control de calidad',
    classification: 'BIO',
    riskClass: 'Clase I',
    invimaStatus: 'Con registro',
    invimaCode: '2020DM-0009876',
    lastMaintenance: '2025-08-25',
    nextMaintenance: '2025-12-10',
    assignedTo: 'Juliana',
    provider: 'A&D Company',
    warrantyActive: false,
    metrologicalHistory: [
      {
        id: 'hist-007',
        date: '2025-08-25',
        reportNumber: 'INF-2025-007',
        type: 'Calibración',
        provider: 'Metrología SAS',
        observations: 'Calibración realizada. Equipo operando correctamente.'
      }
    ],
    planning: {
      preventiveFrequency: 0,
      nextPreventiveMonth: 'Diciembre',
      calibrationFrequency: 1,
      nextCalibrationMonth: 'Agosto',
      correctiveFrequency: 0,
      nextCorrectiveMonth: ''
    }
  },
  {
    id: 'eq-007',
    code: '170369 / 063749',
    ipsCode: 'BIO-16455',
    name: 'Balanza de precisión',
    brand: 'BBG',
    model: 'S1',
    serial: '6110090',
    location: 'Corte macro',
    missionClassification: 'Extensión e Investigación',
    process: 'Patología',
    area: 'Pesaje general',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Al día',
    category: 'Control de calidad',
    classification: 'BIO',
    invimaStatus: 'Con registro',
    invimaCode: '2022DM-0015432',
    lastMaintenance: '2025-08-12',
    nextMaintenance: '2025-12-01',
    assignedTo: 'Juliana',
    provider: 'BBG',
    warrantyActive: false,
    metrologicalHistory: [
      {
        id: 'hist-008',
        date: '2025-08-12',
        reportNumber: 'INF-2025-008',
        type: 'Preventivo',
        provider: 'BBG',
        observations: 'Mantenimiento preventivo y verificación de funcionamiento.'
      }
    ],
    planning: {
      preventiveFrequency: 0,
      nextPreventiveMonth: 'Diciembre',
      calibrationFrequency: 0,
      nextCalibrationMonth: '',
      correctiveFrequency: 0,
      nextCorrectiveMonth: ''
    }
  },
  {
    id: 'eq-008',
    code: '3 / 305660300 / 063768',
    ipsCode: 'BIO-16456',
    name: 'Baño de Flotación',
    brand: 'J.P Selecta',
    model: 'Termofin',
    serial: '0355033',
    location: 'Histoquímica',
    missionClassification: 'Extensión e Investigación',
    process: 'Patología',
    area: 'Preparación de láminas',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Al día',
    category: 'Laboratorio',
    classification: 'BIO',
    invimaStatus: 'Sin registro',
    lastMaintenance: '2025-07-30',
    nextMaintenance: '2025-11-25',
    assignedTo: 'Juliana',
    provider: 'J.P Selecta',
    warrantyActive: false,
    metrologicalHistory: [
      {
        id: 'hist-009',
        date: '2025-07-30',
        reportNumber: 'INF-2025-009',
        type: 'Preventivo',
        provider: 'J.P Selecta',
        observations: 'Limpieza y verificación de temperatura.'
      }
    ],
    planning: {
      preventiveFrequency: 0,
      nextPreventiveMonth: 'Noviembre',
      calibrationFrequency: 0,
      nextCalibrationMonth: '',
      correctiveFrequency: 0,
      nextCorrectiveMonth: ''
    }
  },
  {
    id: 'eq-009',
    code: '6 / 168099 / 061549',
    ipsCode: 'BIO-16457',
    name: 'Baño de Flotación',
    brand: 'Lupetec',
    model: 'BH2015',
    serial: '160140',
    location: 'Inmunohistoquímica',
    missionClassification: 'Extensión e Investigación',
    process: 'Patología',
    area: 'Preparación de láminas',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Por vencer',
    category: 'Laboratorio',
    classification: 'BIO',
    invimaStatus: 'Sin registro',
    lastMaintenance: '2025-07-05',
    nextMaintenance: '2025-11-05',
    assignedTo: 'Martha Londoño',
    provider: 'Lupetec',
    warrantyActive: false,
    metrologicalHistory: [
      {
        id: 'hist-010',
        date: '2025-07-05',
        reportNumber: 'INF-2025-010',
        type: 'Preventivo',
        provider: 'Lupetec',
        observations: 'Mantenimiento preventivo. Equipo en buen estado.'
      }
    ],
    planning: {
      preventiveFrequency: 0,
      nextPreventiveMonth: 'Noviembre',
      calibrationFrequency: 0,
      nextCalibrationMonth: '',
      correctiveFrequency: 0,
      nextCorrectiveMonth: ''
    }
  },
  {
    id: 'eq-010',
    code: '7 / 168100 / 063776',
    ipsCode: 'BIO-16458',
    name: 'Baño de Flotación',
    brand: 'Lupetec',
    model: 'BH2015',
    serial: '160141',
    location: 'Inmunohistoquímica',
    missionClassification: 'Extensión e Investigación',
    process: 'Patología',
    area: 'Preparación de láminas',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Al día',
    category: 'Laboratorio',
    classification: 'BIO',
    invimaStatus: 'Sin registro',
    lastMaintenance: '2025-08-08',
    nextMaintenance: '2025-12-02',
    assignedTo: 'Martha Londoño',
    provider: 'Lupetec',
    warrantyActive: false,
    metrologicalHistory: [
      {
        id: 'hist-011',
        date: '2025-08-08',
        reportNumber: 'INF-2025-011',
        type: 'Preventivo',
        provider: 'Lupetec',
        observations: 'Revisión general y limpieza del baño de flotación.'
      }
    ],
    planning: {
      preventiveFrequency: 0,
      nextPreventiveMonth: 'Diciembre',
      calibrationFrequency: 0,
      nextCalibrationMonth: '',
      correctiveFrequency: 0,
      nextCorrectiveMonth: ''
    }
  },
  {
    id: 'eq-011',
    code: '1 / 305660200 / 063770',
    ipsCode: 'BIO-16459',
    name: 'Baño de Flotación',
    brand: 'J.P Selecta',
    model: 'Termofin',
    serial: '409366',
    location: 'Histotécnica',
    missionClassification: 'Extensión e Investigación',
    process: 'Patología',
    area: 'Preparación de láminas',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Al día',
    category: 'Laboratorio',
    classification: 'BIO',
    invimaStatus: 'Sin registro',
    lastMaintenance: '2025-07-18',
    nextMaintenance: '2025-11-20',
    assignedTo: 'Juliana',
    provider: 'J.P Selecta',
    warrantyActive: false,
    metrologicalHistory: [
      {
        id: 'hist-012',
        date: '2025-07-18',
        reportNumber: 'INF-2025-012',
        type: 'Preventivo',
        provider: 'J.P Selecta',
        observations: 'Mantenimiento preventivo realizado satisfactoriamente.'
      }
    ],
    planning: {
      preventiveFrequency: 0,
      nextPreventiveMonth: 'Noviembre',
      calibrationFrequency: 0,
      nextCalibrationMonth: '',
      correctiveFrequency: 0,
      nextCorrectiveMonth: ''
    }
  },
  {
    id: 'eq-012',
    code: '2 / 305660100 / 061547',
    ipsCode: 'BIO-16460',
    name: 'Baño de Flotación',
    brand: 'Selecta',
    model: 'Termofin',
    serial: '355032',
    location: 'Histotécnica',
    missionClassification: 'Extensión e Investigación',
    process: 'Patología',
    area: 'Preparación de láminas',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Por vencer',
    category: 'Laboratorio',
    classification: 'BIO',
    invimaStatus: 'Sin registro',
    lastMaintenance: '2025-07-01',
    nextMaintenance: '2025-10-29',
    assignedTo: 'Juliana',
    provider: 'Selecta',
    warrantyActive: false,
    metrologicalHistory: [
      {
        id: 'hist-013',
        date: '2025-07-01',
        reportNumber: 'INF-2025-013',
        type: 'Preventivo',
        provider: 'Selecta',
        observations: 'Mantenimiento preventivo y limpieza.'
      }
    ],
    planning: {
      preventiveFrequency: 0,
      nextPreventiveMonth: 'Octubre',
      calibrationFrequency: 0,
      nextCalibrationMonth: '',
      correctiveFrequency: 0,
      nextCorrectiveMonth: ''
    }
  },
  {
    id: 'eq-013',
    code: '146832',
    ipsCode: 'BIO-16461',
    name: 'Baño María',
    brand: 'Indulab',
    model: 'N/I',
    serial: '13539',
    location: 'Inmunohistoquímica',
    missionClassification: 'Extensión e Investigación',
    process: 'Patología',
    area: 'Procesamiento térmico',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Al día',
    category: 'Laboratorio',
    classification: 'BIO',
    invimaStatus: 'Sin registro',
    lastMaintenance: '2025-08-04',
    nextMaintenance: '2025-12-03',
    assignedTo: 'Martha Londoño',
    provider: 'Indulab',
    warrantyActive: false,
    metrologicalHistory: [
      {
        id: 'hist-014',
        date: '2025-08-04',
        reportNumber: 'INF-2025-014',
        type: 'Preventivo',
        provider: 'Indulab',
        observations: 'Revisión y limpieza del baño maría.'
      }
    ],
    planning: {
      preventiveFrequency: 0,
      nextPreventiveMonth: 'Diciembre',
      calibrationFrequency: 0,
      nextCalibrationMonth: '',
      correctiveFrequency: 0,
      nextCorrectiveMonth: ''
    }
  },
  {
    id: 'eq-014',
    code: '305703300 / 063771',
    ipsCode: 'BIO-16462',
    name: 'Baño María',
    brand: 'Memmert',
    model: 'WB7',
    serial: '12.010.372',
    location: 'Inmunohistoquímica',
    missionClassification: 'Extensión e Investigación',
    process: 'Patología',
    area: 'Procesamiento térmico',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Por vencer',
    category: 'Laboratorio',
    classification: 'BIO',
    invimaStatus: 'Sin registro',
    lastMaintenance: '2025-09-01',
    nextMaintenance: '2025-12-20',
    assignedTo: 'Martha Londoño',
    provider: 'Memmert',
    warrantyActive: false,
    metrologicalHistory: [
      {
        id: 'hist-015',
        date: '2025-09-01',
        reportNumber: 'INF-2025-015',
        type: 'Preventivo',
        provider: 'Memmert',
        observations: 'Mantenimiento preventivo. Equipo funcionando correctamente.'
      }
    ],
    planning: {
      preventiveFrequency: 0,
      nextPreventiveMonth: 'Diciembre',
      calibrationFrequency: 0,
      nextCalibrationMonth: '',
      correctiveFrequency: 0,
      nextCorrectiveMonth: ''
    }
  },
  {
    id: 'eq-015',
    code: '073938 / 063782',
    ipsCode: 'BIO-16519',
    name: 'Baño María 70 ºC',
    brand: 'Indulab',
    model: '009B',
    serial: '3244',
    location: 'Inmunohistoquímica',
    missionClassification: 'Investigación',
    process: 'Patología',
    area: 'Procesamiento térmico',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Al día',
    category: 'Laboratorio',
    classification: 'BIO',
    invimaStatus: 'Sin registro',
    lastMaintenance: '2025-08-21',
    nextMaintenance: '2025-12-18',
    assignedTo: 'Jesica y Juliana',
    provider: 'Indulab',
    warrantyActive: false,
    metrologicalHistory: [
      {
        id: 'hist-016',
        date: '2025-08-21',
        reportNumber: 'INF-2025-016',
        type: 'Preventivo',
        provider: 'Indulab',
        observations: 'Mantenimiento preventivo realizado.'
      }
    ],
    planning: {
      preventiveFrequency: 0,
      nextPreventiveMonth: 'Diciembre',
      calibrationFrequency: 0,
      nextCalibrationMonth: '',
      correctiveFrequency: 0,
      nextCorrectiveMonth: ''
    }
  },
  {
    id: 'eq-016',
    code: '29546',
    ipsCode: 'Pendiente',
    name: 'Centrífuga',
    brand: 'Clay Adams',
    model: 'N/I',
    serial: 'A114043',
    location: 'Almacén',
    missionClassification: 'N/A',
    process: 'Patología',
    area: 'Procesamiento básico',
    status: 'Inactivo',
    maintenanceType: 'Correctivo',
    criticality: 'Media',
    calibrationStatus: 'Expirada',
    category: 'Laboratorio',
    classification: 'BIO',
    invimaStatus: 'Sin registro',
    lastMaintenance: '2025-05-12',
    nextMaintenance: '2025-10-10',
    assignedTo: 'Jesica y Juliana',
    provider: 'Clay Adams',
    warrantyActive: false,
    metrologicalHistory: [
      {
        id: 'hist-017',
        date: '2025-05-12',
        reportNumber: 'INF-2025-017',
        type: 'Correctivo',
        provider: 'Clay Adams',
        observations: 'Reparación de motor. Equipo fuera de servicio.'
      }
    ],
    planning: {
      preventiveFrequency: 0,
      nextPreventiveMonth: '',
      calibrationFrequency: 0,
      nextCalibrationMonth: '',
      correctiveFrequency: 0,
      nextCorrectiveMonth: 'Octubre'
    }
  },
  {
    id: 'eq-017',
    code: '122967',
    ipsCode: 'BIO-16463',
    name: 'Citocentrífuga',
    brand: 'Thermo Scientific',
    model: 'Shandon Cytospin 4',
    serial: 'CY3310-0601',
    location: 'Histoquímica',
    missionClassification: 'Extensión e Investigación',
    process: 'Patología',
    area: 'Procesamiento celular',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Alta',
    calibrationStatus: 'Al día',
    category: 'Laboratorio',
    classification: 'BIO',
    riskClass: 'Clase IIa',
    invimaStatus: 'Con registro',
    invimaCode: '2019DM-0007654',
    lastMaintenance: '2025-09-05',
    nextMaintenance: '2025-12-05',
    assignedTo: 'Juliana',
    provider: 'Thermo Scientific',
    warrantyActive: false,
    metrologicalHistory: [
      {
        id: 'hist-018',
        date: '2025-09-05',
        reportNumber: 'INF-2025-018',
        type: 'Preventivo',
        provider: 'Thermo Scientific',
        observations: 'Mantenimiento preventivo y calibración.'
      }
    ],
    planning: {
      preventiveFrequency: 0,
      nextPreventiveMonth: 'Diciembre',
      calibrationFrequency: 1,
      nextCalibrationMonth: 'Septiembre',
      correctiveFrequency: 0,
      nextCorrectiveMonth: ''
    }
  },
  {
    id: 'eq-018',
    code: '131255 / 063778',
    ipsCode: 'Pendiente',
    name: 'Congelador',
    brand: 'Indufrial',
    model: 'ICVS-15',
    serial: '685959',
    location: 'Cuarto criostato (contingencia)',
    missionClassification: 'Extensión e Investigación',
    process: 'Patología',
    area: 'Cadena de frío',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Alta',
    calibrationStatus: 'Por vencer',
    category: 'Cadena de frío',
    classification: 'IND',
    invimaStatus: 'Sin registro',
    lastMaintenance: '2025-08-10',
    nextMaintenance: '2025-12-08',
    assignedTo: 'Juliana',
    provider: 'Indufrial',
    warrantyActive: false,
    metrologicalHistory: [
      {
        id: 'hist-019',
        date: '2025-08-10',
        reportNumber: 'INF-2025-019',
        type: 'Preventivo',
        provider: 'Indufrial',
        observations: 'Mantenimiento preventivo y verificación de temperatura.'
      }
    ],
    planning: {
      preventiveFrequency: 0,
      nextPreventiveMonth: 'Diciembre',
      calibrationFrequency: 0,
      nextCalibrationMonth: '',
      correctiveFrequency: 0,
      nextCorrectiveMonth: ''
    }
  },
  {
    id: 'eq-019',
    code: '73709',
    ipsCode: 'BIO-16520',
    name: 'Congelador',
    brand: 'Philips',
    model: 'WCV900AF6510',
    serial: 'N/I',
    location: 'Inmunohistoquímica',
    missionClassification: 'Extensión e Investigación',
    process: 'Patología',
    area: 'Cadena de frío',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Alta',
    calibrationStatus: 'Al día',
    category: 'Cadena de frío',
    classification: 'IND',
    invimaStatus: 'Sin registro',
    lastMaintenance: '2025-07-16',
    nextMaintenance: '2025-11-14',
    assignedTo: 'Martha Londoño',
    provider: 'Philips',
    warrantyActive: false,
    metrologicalHistory: [
      {
        id: 'hist-020',
        date: '2025-07-16',
        reportNumber: 'INF-2025-020',
        type: 'Preventivo',
        provider: 'Philips',
        observations: 'Limpieza y verificación de funcionamiento.'
      }
    ],
    planning: {
      preventiveFrequency: 0,
      nextPreventiveMonth: 'Noviembre',
      calibrationFrequency: 0,
      nextCalibrationMonth: '',
      correctiveFrequency: 0,
      nextCorrectiveMonth: ''
    }
  },
  {
    id: 'eq-020',
    code: '114982',
    ipsCode: 'BIO-16521',
    name: 'Criostato histotécnico',
    brand: 'Leica',
    model: 'CM1850-3-1',
    serial: '47131148',
    location: 'Área histotécnica',
    missionClassification: 'N/A',
    process: 'Patología',
    area: 'Criostomía',
    status: 'Inactivo',
    maintenanceType: 'Correctivo',
    criticality: 'Alta',
    calibrationStatus: 'Expirada',
    category: 'Diagnóstico',
    classification: 'BIO',
    invimaStatus: 'Sin registro',
    lastMaintenance: '2025-04-30',
    nextMaintenance: '2025-09-30',
    assignedTo: 'Jesica y Juliana',
    provider: 'Leica Biosystems',
    warrantyActive: false,
    metrologicalHistory: [
      {
        id: 'hist-021',
        date: '2025-04-30',
        reportNumber: 'INF-2025-021',
        type: 'Correctivo',
        provider: 'Leica Biosystems',
        observations: 'Equipo fuera de servicio. Requiere reparación mayor.'
      }
    ],
    planning: {
      preventiveFrequency: 0,
      nextPreventiveMonth: '',
      calibrationFrequency: 0,
      nextCalibrationMonth: '',
      correctiveFrequency: 0,
      nextCorrectiveMonth: 'Septiembre'
    }
  }
]

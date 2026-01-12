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

export interface ScheduledEvent {
  month: string
  provider: string
  cost: number
  status?: 'pending' | 'completed' | 'cancelled'
}

export interface MetrologicalPlanning {
  preventiveFrequency: number
  preventiveEvents: ScheduledEvent[]
  calibrationFrequency: number
  calibrationEvents: ScheduledEvent[]
}

export interface MetrologicalRecord {
  id: string
  date: string
  type: 'Mantenimiento Preventivo' | 'Calibración' | 'Mantenimiento Correctivo'
  provider: string
  performer?: string
  reportNumber: string
  result?: 'Aprobado' | 'Reprobado' | 'Con observaciones'
  nextDate?: string
  observations: string
  cost?: number
}

export interface EquipmentLocation {
  sede: string
  process: string // Servicio
  specificLocation: string
  responsible: string
}

export interface EquipmentRecord {
  id: string
  code: string
  ipsCode: string
  ecriCode?: string
  name: string
  brand: string
  model: string
  serial: string

  // Categorización
  classification?: 'BIO' | 'IND' | 'GASES' | 'N/A'
  riskClass?: 'Clase I' | 'Clase IIa' | 'Clase IIb' | 'Clase III' | 'N/A'
  missionClassification?: 'Docencia' | 'Investigación' | 'Extensión' | 'Apoyo' | 'Docencia e Investigación' | 'Extensión e Investigación' | 'N/A'

  // Ubicación
  location: string // Sede
  process: string // Servicio
  assignedTo: string // Responsable

  // Compatibility fields for old data
  service?: string
  headquarters?: string
  area?: string

  // Estado
  status: 'Activo' | 'En mantenimiento' | 'De baja' | 'Inactivo'
  maintenanceType?: string
  criticality?: string
  calibrationStatus?: string
  category?: string

  invimaStatus?: 'Con registro' | 'Sin registro' | 'No requiere'
  invimaCode?: string

  // Datos adicionales para detalles
  provider?: string
  acquisitionDate?: string
  warrantyExpiry?: string
  warrantyActive?: boolean
  purchaseValue?: number
  acquisitionType?: string
  owner?: string

  // Technical specs
  voltage?: string
  current?: string
  power?: string
  dimensions?: string
  weight?: string
  temperatureRange?: string
  humidityRange?: string
  technicalSpecifications?: string

  // Documents flags
  hasLifeSheet?: boolean
  hasOperationManual?: boolean
  hasQuickGuide?: boolean
  hasMaintenanceProtocol?: boolean
  hasImportDeclaration?: boolean
  hasServiceManual?: boolean
  hasUserTraining?: boolean

  // Vida útil
  lifeTime?: number | string // Años

  // Dates & Purchase
  manufacturingDate?: string
  ownerNit?: string
  documentType?: string
  documentNumber?: string

  // Datos metrológicos
  lastMaintenance?: string
  nextMaintenance?: string
  maintenanceFrequency?: number | string // meses
  lastCalibration?: string
  nextCalibration?: string
  calibrationFrequency?: number | string // meses
  manufacturerMetrologicalFrequency?: string

  details?: {
    technical?: {
      voltage?: string
      current?: string
      power?: string
      frequency?: string
      weight?: string
      dimensions?: string
      temperature?: string
      humidity?: string
    }
    documents?: {
      manual?: boolean
      serviceManual?: boolean
      quickGuide?: boolean
      declaration?: boolean
    }
    planning?: MetrologicalPlanning
    history?: MetrologicalRecord[]
  }

  // Flat history/planning for backward compatibility if needed, or migration
  metrologicalHistory?: MetrologicalRecord[]
  planning?: MetrologicalPlanning
}

export const equipmentInventory: EquipmentRecord[] = [
  {
    id: '1',
    code: 'BIO-16869',
    ipsCode: '180235',
    ecriCode: '008811',
    name: 'LUMINEX - fluoroanalizador',
    brand: 'LUMINEX',
    model: 'LUMINEX LX 100 / 200',
    serial: 'LX10017065423',
    classification: 'BIO',
    riskClass: 'Clase IIa',
    missionClassification: 'Investigación',
    location: 'SIU',
    process: 'Laboratorio trasplantes',
    assignedTo: 'Juan Jose Serrano',
    status: 'Activo',
    invimaStatus: 'Con registro',
    invimaCode: 'INVIMA 2020DM-0022003',
    provider: 'Almacén Navarro Ospina S.A.',
    acquisitionDate: '2009-12-10',
    manufacturingDate: '2009-10-15',
    warrantyExpiry: '2012-12-10',
    warrantyActive: false,

    purchaseValue: 5000000,
    acquisitionType: 'Compra directa',
    owner: 'Universidad de Antioquia',
    ownerNit: '890.980.040-8',
    documentType: 'Factura',
    documentNumber: 'FE-98765',
    voltage: '110-220 VAC',
    current: '4 A',
    weight: '55.5 kg',
    dimensions: '53.5 x 53 x 142 cm',
    temperatureRange: '15-30°C',
    humidityRange: '30-85 %HR',
    technicalSpecifications: 'Requiere estabilizador de tensión. Conexión a tierra certificada.',
    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: true,
    hasMaintenanceProtocol: true,
    hasImportDeclaration: true,
    hasServiceManual: true,
    hasUserTraining: true,
    details: {
      technical: {
        voltage: '110-220 VAC',
        current: '4 A',
        weight: '55.5 kg',
        dimensions: '53.5 x 53 x 142 cm',
        temperature: '15-30°C',
        humidity: '30-85 %HR'
      },
      planning: {
        preventiveFrequency: 2,
        preventiveEvents: [
          { month: 'Junio', provider: 'Biomedical Support SAS', cost: 150000 },
          { month: 'Diciembre', provider: 'Biomedical Support SAS', cost: 150000 }
        ],
        calibrationFrequency: 1,
        calibrationEvents: [
          { month: 'Agosto', provider: 'Metrología Integral', cost: 350000 }
        ]
      },
      history: [
        {
          id: 'hist-1',
          date: '2023-12-15',
          type: 'Mantenimiento Preventivo',
          provider: 'Biomedical Support SAS',
          performer: 'Carlos Ruiz',
          reportNumber: 'MP-2023-458',
          result: 'Aprobado',
          nextDate: '2024-06-15',
          observations: 'Equipo operativo. Se realizó limpieza general y verificación de parámetros.',
          cost: 150000
        },
        {
          id: 'hist-2',
          date: '2023-08-10',
          type: 'Calibración',
          provider: 'Metrología Integral',
          performer: 'Ana María Giraldo',
          reportNumber: 'CAL-23-098',
          result: 'Aprobado',
          nextDate: '2024-08-10',
          observations: 'Parámetros dentro de especificaciones de fábrica.',
          cost: 350000
        }
      ]
    }
  },
  {
    id: 'eq-001',
    code: '71246',
    ipsCode: 'BIO-16452',
    ecriCode: '15-651',
    name: 'Agitador Vórtex',
    brand: 'Scientific Industries',
    model: 'G-560',
    serial: '2-218817',
    location: 'Sede San Vicente',
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
    manufacturingDate: '2018-01-20',
    warrantyExpiry: '2019-05-10',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    acquisitionType: 'Compra',
    purchaseValue: 1200000,
    documentType: 'Factura',
    documentNumber: 'A-1234',
    voltage: '110V',
    current: '0.5A',
    power: '60W',
    weight: '4kg',
    temperatureRange: '10-40°C',
    humidityRange: '20-80 %HR',
    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: true,
    hasMaintenanceProtocol: true,
    hasImportDeclaration: false,
    hasServiceManual: false,
    hasUserTraining: true,
    metrologicalHistory: [
      {
        id: 'hist-001',
        date: '2025-08-15',
        reportNumber: 'INF-2025-001',
        type: 'Mantenimiento Preventivo',
        provider: 'Scientific Industries',
        observations: 'Mantenimiento preventivo realizado con éxito. Se reemplazaron empaques.'
      }
    ],
    planning: {
      preventiveFrequency: 2,
      preventiveEvents: [
        { month: 'Junio', provider: 'Scientific Industries', cost: 0 },
        { month: 'Diciembre', provider: 'Scientific Industries', cost: 0 }
      ],
      calibrationFrequency: 1,
      calibrationEvents: [
        { month: 'Agosto', provider: 'Metrología SAS', cost: 0 }
      ]
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
    location: 'Sede San Vicente',
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
    manufacturingDate: '2020-01-15',
    ownerNit: '890.980.040-8',
    documentType: 'Factura',
    documentNumber: 'F-12345',
    temperatureRange: '15-25°C',
    humidityRange: '40-60 %HR',
    technicalSpecifications: 'Especificaciones estándar del fabricante.',
    hasImportDeclaration: true,
    hasServiceManual: true,
    hasUserTraining: true,
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
        type: 'Mantenimiento Preventivo',
        provider: 'Comercial y servicios Larco S.A.S',
        observations: 'Limpieza de filtros y revisión general del sistema.'
      }
    ],
    planning: {
      preventiveFrequency: 4,
      preventiveEvents: [
        { month: 'Febrero', provider: 'Comercial y servicios Larco S.A.S', cost: 0 },
        { month: 'Mayo', provider: 'Comercial y servicios Larco S.A.S', cost: 0 },
        { month: 'Agosto', provider: 'Comercial y servicios Larco S.A.S', cost: 0 },
        { month: 'Noviembre', provider: 'Comercial y servicios Larco S.A.S', cost: 0 }
      ],
      calibrationFrequency: 0,
      calibrationEvents: []
    }
  },

  {
    id: 'eq-003',
    code: 'EQ-67791',
    ipsCode: 'IPS-5534',
    name: 'Microscopio óptico',
    brand: 'Nikon',
    model: 'Eclipse E200',
    serial: 'SN-430344',
    location: 'Sede Norte',
    process: 'Investigación',
    assignedTo: 'Ana Giraldo',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Por vencer',
    category: 'Diagnóstico',
    classification: 'BIO',
    invimaStatus: 'Con registro',
    invimaCode: 'INVIMA 2018DM-1479',

    acquisitionDate: '2022-12-09',
    manufacturingDate: '2022-05-17',
    warrantyExpiry: '2027-01-07',
    warrantyActive: false,

    provider: 'Casa Médica',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 6402341,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '123W',
    weight: '74kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: false,
    hasMaintenanceProtocol: true,
    hasServiceManual: true,
    hasUserTraining: true,
    hasImportDeclaration: false,

    lastMaintenance: '2024-10-17',
    nextMaintenance: '2026-03-13',
    maintenanceFrequency: 2,
    calibrationFrequency: 0,

    planning: {
      preventiveFrequency: 2,
      preventiveEvents: [{ month: 'Enero', provider: 'Metrología Integral', cost: 196949 }, { month: 'Julio', provider: 'Metrología Integral', cost: 339302 }],
      calibrationFrequency: 0,
      calibrationEvents: []
    },

    metrologicalHistory: [
      {
        id: 'hist-5522',
        date: '2025-02-11',
        type: 'Mantenimiento Preventivo',
        provider: 'Casa Médica',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-521',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 177654
      },
      {
        id: 'hist-4147',
        date: '2025-09-23',
        type: 'Mantenimiento Correctivo',
        provider: 'Mantenimiento Ya',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-958',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 911769
      },
      {
        id: 'hist-8912',
        date: '2024-08-06',
        type: 'Mantenimiento Preventivo',
        provider: 'Metrología Integral',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-549',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 301444
      },
      {
        id: 'hist-5134',
        date: '2025-04-17',
        type: 'Mantenimiento Preventivo',
        provider: 'Casa Médica',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-542',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 338808
      },
      {
        id: 'hist-4564',
        date: '2025-08-07',
        type: 'Mantenimiento Correctivo',
        provider: 'Mantenimiento Ya',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-207',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1962200
      }
    ],
    details: {
      history: [
        {
          id: 'hist-5507',
          date: '2024-04-12',
          type: 'Calibración',
          provider: 'Equipos y Laboratorios',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-722',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 739268
        },
        {
          id: 'hist-1143',
          date: '2024-11-04',
          type: 'Mantenimiento Correctivo',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-775',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1906840
        },
        {
          id: 'hist-4108',
          date: '2024-02-22',
          type: 'Calibración',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-560',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 325480
        },
        {
          id: 'hist-3076',
          date: '2025-06-10',
          type: 'Mantenimiento Preventivo',
          provider: 'Metrología Integral',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-609',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 218949
        }
      ]
    }
  },

  {
    id: 'eq-004',
    code: 'EQ-80132',
    ipsCode: 'IPS-1824',
    name: 'Cámara de flujo laminar',
    brand: 'Esco',
    model: 'Airstream',
    serial: 'SN-202393',
    location: 'Sede Centro',
    process: 'Investigación',
    assignedTo: 'Carlos Ruiz',
    status: 'En mantenimiento',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Al día',
    category: 'Laboratorio',
    classification: 'IND',
    invimaStatus: 'Sin registro',
    invimaCode: 'INVIMA 2018DM-6220',

    acquisitionDate: '2023-08-05',
    manufacturingDate: '2021-06-30',
    warrantyExpiry: '2027-01-07',
    warrantyActive: false,

    provider: 'Equipos y Laboratorios',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 38236879,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '236W',
    weight: '14kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: true,
    hasMaintenanceProtocol: true,
    hasServiceManual: true,
    hasUserTraining: true,
    hasImportDeclaration: true,

    lastMaintenance: '2025-06-01',
    nextMaintenance: '2026-04-12',
    maintenanceFrequency: 1,
    calibrationFrequency: 1,

    planning: {
      preventiveFrequency: 1,
      preventiveEvents: [{ month: 'Enero', provider: 'Equipos y Laboratorios', cost: 445486 }],
      calibrationFrequency: 1,
      calibrationEvents: [{ month: 'Mayo', provider: 'Biomedical Support SAS', cost: 599484 }]
    },

    metrologicalHistory: [
      {
        id: 'hist-8464',
        date: '2025-07-04',
        type: 'Mantenimiento Correctivo',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-213',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1912177
      },
      {
        id: 'hist-9205',
        date: '2025-07-29',
        type: 'Mantenimiento Correctivo',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-600',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 938022
      },
      {
        id: 'hist-4823',
        date: '2025-02-26',
        type: 'Mantenimiento Correctivo',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-646',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1625041
      }
    ],
    details: {
      history: [
        {
          id: 'hist-9545',
          date: '2024-06-10',
          type: 'Mantenimiento Correctivo',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-466',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 810177
        },
        {
          id: 'hist-1634',
          date: '2024-12-26',
          type: 'Mantenimiento Correctivo',
          provider: 'Metrología Integral',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-700',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1653037
        },
        {
          id: 'hist-8191',
          date: '2025-02-23',
          type: 'Calibración',
          provider: 'Metrología Integral',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-400',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 414861
        },
        {
          id: 'hist-8600',
          date: '2024-11-18',
          type: 'Calibración',
          provider: 'Metrología Integral',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-474',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 575579
        },
        {
          id: 'hist-1109',
          date: '2025-12-15',
          type: 'Mantenimiento Preventivo',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-656',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 181542
        },
        {
          id: 'hist-1507',
          date: '2024-08-25',
          type: 'Calibración',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-957',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 644829
        }
      ]
    }
  },

  {
    id: 'eq-005',
    code: 'EQ-33830',
    ipsCode: 'IPS-1558',
    name: 'Centrífuga refrigerada',
    brand: 'Eppendorf',
    model: '5424 R',
    serial: 'SN-149449',
    location: 'Sede Norte',
    process: 'Investigación',
    assignedTo: 'Ana Giraldo',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Baja',
    calibrationStatus: 'Por vencer',
    category: 'Laboratorio',
    classification: 'BIO',
    invimaStatus: 'Con registro',
    invimaCode: 'INVIMA 2018DM-9371',

    acquisitionDate: '2017-04-26',
    manufacturingDate: '2020-12-31',
    warrantyExpiry: '2027-01-07',
    warrantyActive: true,

    provider: 'Metrología Integral',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 14636998,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '234W',
    weight: '93kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: true,
    hasMaintenanceProtocol: true,
    hasServiceManual: false,
    hasUserTraining: true,
    hasImportDeclaration: false,

    lastMaintenance: '2025-03-01',
    nextMaintenance: '2026-02-11',
    maintenanceFrequency: 4,
    calibrationFrequency: 1,

    planning: {
      preventiveFrequency: 4,
      preventiveEvents: [{ month: 'Enero', provider: 'Biomedical Support SAS', cost: 251734 }, { month: 'Abril', provider: 'Metrología Integral', cost: 107296 }, { month: 'Julio', provider: 'Metrología Integral', cost: 240082 }, { month: 'Octubre', provider: 'Casa Médica', cost: 365551 }],
      calibrationFrequency: 1,
      calibrationEvents: [{ month: 'Septiembre', provider: 'Metrología Integral', cost: 687307 }]
    },

    metrologicalHistory: [
      {
        id: 'hist-1362',
        date: '2024-09-08',
        type: 'Mantenimiento Preventivo',
        provider: 'Metrología Integral',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-900',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 162029
      },
      {
        id: 'hist-3584',
        date: '2025-02-08',
        type: 'Mantenimiento Correctivo',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-604',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1099569
      },
      {
        id: 'hist-8297',
        date: '2024-03-01',
        type: 'Mantenimiento Correctivo',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-980',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1634884
      },
      {
        id: 'hist-3326',
        date: '2024-10-08',
        type: 'Calibración',
        provider: 'Mantenimiento Ya',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-733',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 551354
      }
    ],
    details: {
      history: [
        {
          id: 'hist-8990',
          date: '2024-08-24',
          type: 'Mantenimiento Correctivo',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-205',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 802098
        },
        {
          id: 'hist-1080',
          date: '2024-02-03',
          type: 'Calibración',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-807',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 566992
        },
        {
          id: 'hist-6894',
          date: '2024-06-29',
          type: 'Mantenimiento Correctivo',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-874',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 795613
        },
        {
          id: 'hist-1076',
          date: '2024-04-27',
          type: 'Mantenimiento Correctivo',
          provider: 'Metrología Integral',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-569',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1380441
        }
      ]
    }
  },

  {
    id: 'eq-006',
    code: 'EQ-13544',
    ipsCode: 'IPS-7341',
    name: 'Monitor de signos vitales',
    brand: 'Philips',
    model: 'IntelliVue MX40',
    serial: 'SN-962470',
    location: 'Sede Centro',
    process: 'Investigación',
    assignedTo: 'Juan Perez',
    status: 'En mantenimiento',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Por vencer',
    category: 'Soporte clínico',
    classification: 'BIO',
    invimaStatus: 'Con registro',
    invimaCode: 'INVIMA 2018DM-4286',

    acquisitionDate: '2022-06-07',
    manufacturingDate: '2014-09-11',
    warrantyExpiry: '2027-01-07',
    warrantyActive: true,

    provider: 'Biomedical Support SAS',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 34194620,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '292W',
    weight: '84kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: true,
    hasMaintenanceProtocol: true,
    hasServiceManual: true,
    hasUserTraining: true,
    hasImportDeclaration: false,

    lastMaintenance: '2025-03-30',
    nextMaintenance: '2026-04-12',
    maintenanceFrequency: 1,
    calibrationFrequency: 0,

    planning: {
      preventiveFrequency: 1,
      preventiveEvents: [{ month: 'Enero', provider: 'Metrología Integral', cost: 284115 }],
      calibrationFrequency: 0,
      calibrationEvents: []
    },

    metrologicalHistory: [
      {
        id: 'hist-5312',
        date: '2025-12-28',
        type: 'Calibración',
        provider: 'Metrología Integral',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-274',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 557135
      },
      {
        id: 'hist-5054',
        date: '2025-11-02',
        type: 'Mantenimiento Correctivo',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-603',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1489539
      },
      {
        id: 'hist-7147',
        date: '2024-08-29',
        type: 'Calibración',
        provider: 'Metrología Integral',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-464',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 530570
      }
    ],
    details: {
      history: [
        {
          id: 'hist-5945',
          date: '2024-04-15',
          type: 'Calibración',
          provider: 'Casa Médica',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-980',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 521445
        },
        {
          id: 'hist-1407',
          date: '2024-04-19',
          type: 'Calibración',
          provider: 'Metrología Integral',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-615',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 645876
        },
        {
          id: 'hist-3133',
          date: '2024-04-23',
          type: 'Calibración',
          provider: 'Equipos y Laboratorios',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-243',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 682241
        },
        {
          id: 'hist-5092',
          date: '2024-04-24',
          type: 'Calibración',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-777',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 763090
        },
        {
          id: 'hist-9182',
          date: '2025-03-27',
          type: 'Mantenimiento Correctivo',
          provider: 'Equipos y Laboratorios',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-615',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 580707
        },
        {
          id: 'hist-9171',
          date: '2024-06-03',
          type: 'Mantenimiento Preventivo',
          provider: 'Metrología Integral',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-193',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 360207
        }
      ]
    }
  },

  {
    id: 'eq-007',
    code: 'EQ-88653',
    ipsCode: 'IPS-9691',
    name: 'Agitador magnético',
    brand: 'IKA',
    model: 'C-Mag HS 7',
    serial: 'SN-333434',
    location: 'Sede Sur',
    process: 'UCI',
    assignedTo: 'Carlos Ruiz',
    status: 'Inactivo',
    maintenanceType: 'Preventivo',
    criticality: 'Alta',
    calibrationStatus: 'Por vencer',
    category: 'Laboratorio',
    classification: 'IND',
    invimaStatus: 'Con registro',
    invimaCode: 'INVIMA 2022DM-9906',

    acquisitionDate: '2016-06-08',
    manufacturingDate: '2014-01-13',
    warrantyExpiry: '2027-01-07',
    warrantyActive: false,

    provider: 'Biomedical Support SAS',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 16832369,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '127W',
    weight: '34kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: true,
    hasMaintenanceProtocol: true,
    hasServiceManual: false,
    hasUserTraining: true,
    hasImportDeclaration: false,

    lastMaintenance: '2024-02-03',
    nextMaintenance: '2026-04-12',
    maintenanceFrequency: 4,
    calibrationFrequency: 0,

    planning: {
      preventiveFrequency: 4,
      preventiveEvents: [{ month: 'Enero', provider: 'Casa Médica', cost: 228157 }, { month: 'Abril', provider: 'Equipos y Laboratorios', cost: 182478 }, { month: 'Julio', provider: 'Equipos y Laboratorios', cost: 109541 }, { month: 'Octubre', provider: 'Casa Médica', cost: 110437 }],
      calibrationFrequency: 0,
      calibrationEvents: []
    },

    metrologicalHistory: [
      {
        id: 'hist-9157',
        date: '2024-07-03',
        type: 'Mantenimiento Preventivo',
        provider: 'Metrología Integral',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-874',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 442075
      },
      {
        id: 'hist-2108',
        date: '2024-03-22',
        type: 'Calibración',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-665',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 648347
      },
      {
        id: 'hist-7803',
        date: '2024-06-23',
        type: 'Calibración',
        provider: 'Casa Médica',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-979',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 519746
      },
      {
        id: 'hist-9141',
        date: '2024-09-07',
        type: 'Mantenimiento Correctivo',
        provider: 'Metrología Integral',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-165',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1030748
      },
      {
        id: 'hist-7167',
        date: '2024-07-06',
        type: 'Calibración',
        provider: 'Metrología Integral',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-633',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 404467
      },
      {
        id: 'hist-5731',
        date: '2025-09-19',
        type: 'Calibración',
        provider: 'Mantenimiento Ya',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-841',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 497319
      }
    ],
    details: {
      history: [
        {
          id: 'hist-3864',
          date: '2024-06-26',
          type: 'Mantenimiento Preventivo',
          provider: 'Metrología Integral',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-341',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 280585
        },
        {
          id: 'hist-2176',
          date: '2025-09-18',
          type: 'Calibración',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-987',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 592630
        },
        {
          id: 'hist-6952',
          date: '2024-08-23',
          type: 'Calibración',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-698',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 536141
        },
        {
          id: 'hist-6066',
          date: '2024-09-26',
          type: 'Mantenimiento Preventivo',
          provider: 'Metrología Integral',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-826',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 478186
        },
        {
          id: 'hist-2078',
          date: '2024-10-19',
          type: 'Calibración',
          provider: 'Equipos y Laboratorios',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-482',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 651276
        }
      ]
    }
  },

  {
    id: 'eq-008',
    code: 'EQ-41057',
    ipsCode: 'IPS-7872',
    name: 'Centrífuga refrigerada',
    brand: 'Eppendorf',
    model: '5424 R',
    serial: 'SN-779444',
    location: 'Sede Sur',
    process: 'Urgencias',
    assignedTo: 'Carlos Ruiz',
    status: 'Inactivo',
    maintenanceType: 'Preventivo',
    criticality: 'Alta',
    calibrationStatus: 'Al día',
    category: 'Laboratorio',
    classification: 'BIO',
    invimaStatus: 'Con registro',
    invimaCode: 'INVIMA 2019DM-4855',

    acquisitionDate: '2016-12-30',
    manufacturingDate: '2019-06-04',
    warrantyExpiry: '2027-01-07',
    warrantyActive: true,

    provider: 'Mantenimiento Ya',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 39354963,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '266W',
    weight: '46kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: true,
    hasMaintenanceProtocol: true,
    hasServiceManual: true,
    hasUserTraining: true,
    hasImportDeclaration: false,

    lastMaintenance: '2024-04-12',
    nextMaintenance: '2026-02-11',
    maintenanceFrequency: 2,
    calibrationFrequency: 0,

    planning: {
      preventiveFrequency: 2,
      preventiveEvents: [{ month: 'Enero', provider: 'Mantenimiento Ya', cost: 298033 }, { month: 'Julio', provider: 'Mantenimiento Ya', cost: 473633 }],
      calibrationFrequency: 0,
      calibrationEvents: []
    },

    metrologicalHistory: [
      {
        id: 'hist-1769',
        date: '2025-08-28',
        type: 'Calibración',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-782',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 341190
      },
      {
        id: 'hist-9960',
        date: '2025-04-04',
        type: 'Mantenimiento Preventivo',
        provider: 'Metrología Integral',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-608',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 221552
      },
      {
        id: 'hist-1477',
        date: '2024-03-04',
        type: 'Mantenimiento Preventivo',
        provider: 'Casa Médica',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-939',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 342212
      },
      {
        id: 'hist-5826',
        date: '2024-08-30',
        type: 'Calibración',
        provider: 'Metrología Integral',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-817',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 511260
      },
      {
        id: 'hist-7364',
        date: '2025-07-23',
        type: 'Mantenimiento Correctivo',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-397',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1355281
      },
      {
        id: 'hist-7517',
        date: '2024-03-06',
        type: 'Mantenimiento Correctivo',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-288',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1987917
      }
    ],
    details: {
      history: [
        {
          id: 'hist-2776',
          date: '2025-04-24',
          type: 'Mantenimiento Preventivo',
          provider: 'Casa Médica',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-170',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 157463
        },
        {
          id: 'hist-2267',
          date: '2025-05-20',
          type: 'Mantenimiento Correctivo',
          provider: 'Equipos y Laboratorios',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-322',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1210642
        },
        {
          id: 'hist-5480',
          date: '2025-11-27',
          type: 'Mantenimiento Preventivo',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-528',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 301024
        },
        {
          id: 'hist-6820',
          date: '2025-06-28',
          type: 'Mantenimiento Preventivo',
          provider: 'Metrología Integral',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-896',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 250117
        },
        {
          id: 'hist-3271',
          date: '2024-11-27',
          type: 'Mantenimiento Correctivo',
          provider: 'Equipos y Laboratorios',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-539',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1528416
        }
      ]
    }
  },

  {
    id: 'eq-009',
    code: 'EQ-42893',
    ipsCode: 'IPS-9097',
    name: 'Incubadora de CO2',
    brand: 'Thermo Fisher',
    model: 'Heracell 150i',
    serial: 'SN-203740',
    location: 'Sede Centro',
    process: 'Laboratorio Clínico',
    assignedTo: 'Ana Giraldo',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Baja',
    calibrationStatus: 'Por vencer',
    category: 'Investigación',
    classification: 'BIO',
    invimaStatus: 'Con registro',
    invimaCode: 'INVIMA 2018DM-3381',

    acquisitionDate: '2020-11-30',
    manufacturingDate: '2019-08-29',
    warrantyExpiry: '2027-01-07',
    warrantyActive: true,

    provider: 'Mantenimiento Ya',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 4172442,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '417W',
    weight: '14kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: false,
    hasMaintenanceProtocol: true,
    hasServiceManual: true,
    hasUserTraining: true,
    hasImportDeclaration: true,

    lastMaintenance: '2025-05-03',
    nextMaintenance: '2026-04-12',
    maintenanceFrequency: 2,
    calibrationFrequency: 1,

    planning: {
      preventiveFrequency: 2,
      preventiveEvents: [{ month: 'Enero', provider: 'Mantenimiento Ya', cost: 134775 }, { month: 'Julio', provider: 'Biomedical Support SAS', cost: 265327 }],
      calibrationFrequency: 1,
      calibrationEvents: [{ month: 'Enero', provider: 'Mantenimiento Ya', cost: 339173 }]
    },

    metrologicalHistory: [
      {
        id: 'hist-3606',
        date: '2024-02-10',
        type: 'Mantenimiento Correctivo',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-193',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 651440
      },
      {
        id: 'hist-3759',
        date: '2024-04-12',
        type: 'Calibración',
        provider: 'Mantenimiento Ya',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-859',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 366965
      },
      {
        id: 'hist-1952',
        date: '2025-12-06',
        type: 'Mantenimiento Preventivo',
        provider: 'Mantenimiento Ya',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-748',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 173192
      }
    ],
    details: {
      history: [
        {
          id: 'hist-8709',
          date: '2025-11-01',
          type: 'Calibración',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-934',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 415336
        },
        {
          id: 'hist-7160',
          date: '2025-06-06',
          type: 'Calibración',
          provider: 'Casa Médica',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-967',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 541382
        },
        {
          id: 'hist-3224',
          date: '2025-12-10',
          type: 'Calibración',
          provider: 'Casa Médica',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-106',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 680822
        },
        {
          id: 'hist-7646',
          date: '2025-02-17',
          type: 'Calibración',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-655',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 536190
        },
        {
          id: 'hist-4718',
          date: '2025-03-01',
          type: 'Mantenimiento Preventivo',
          provider: 'Equipos y Laboratorios',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-452',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 346026
        },
        {
          id: 'hist-9738',
          date: '2025-04-12',
          type: 'Mantenimiento Correctivo',
          provider: 'Metrología Integral',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-689',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1220641
        }
      ]
    }
  },

  {
    id: 'eq-010',
    code: 'EQ-47683',
    ipsCode: 'IPS-4290',
    name: 'Agitador magnético',
    brand: 'IKA',
    model: 'C-Mag HS 7',
    serial: 'SN-626595',
    location: 'Sede Sur',
    process: 'UCI',
    assignedTo: 'Ana Giraldo',
    status: 'Inactivo',
    maintenanceType: 'Preventivo',
    criticality: 'Baja',
    calibrationStatus: 'Por vencer',
    category: 'Laboratorio',
    classification: 'IND',
    invimaStatus: 'Sin registro',
    invimaCode: 'INVIMA 2021DM-5543',

    acquisitionDate: '2016-05-21',
    manufacturingDate: '2021-12-10',
    warrantyExpiry: '2027-01-07',
    warrantyActive: true,

    provider: 'Casa Médica',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 25926714,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '164W',
    weight: '97kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: false,
    hasMaintenanceProtocol: true,
    hasServiceManual: false,
    hasUserTraining: true,
    hasImportDeclaration: false,

    lastMaintenance: '2025-04-01',
    nextMaintenance: '2026-05-12',
    maintenanceFrequency: 2,
    calibrationFrequency: 1,

    planning: {
      preventiveFrequency: 2,
      preventiveEvents: [{ month: 'Enero', provider: 'Equipos y Laboratorios', cost: 356126 }, { month: 'Julio', provider: 'Casa Médica', cost: 254391 }],
      calibrationFrequency: 1,
      calibrationEvents: [{ month: 'Mayo', provider: 'Metrología Integral', cost: 730194 }]
    },

    metrologicalHistory: [
      {
        id: 'hist-1924',
        date: '2025-05-05',
        type: 'Mantenimiento Correctivo',
        provider: 'Mantenimiento Ya',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-230',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1080041
      },
      {
        id: 'hist-8580',
        date: '2024-10-07',
        type: 'Calibración',
        provider: 'Metrología Integral',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-995',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 384971
      },
      {
        id: 'hist-9189',
        date: '2024-06-10',
        type: 'Calibración',
        provider: 'Casa Médica',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-598',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 443960
      },
      {
        id: 'hist-9550',
        date: '2024-08-31',
        type: 'Calibración',
        provider: 'Mantenimiento Ya',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-552',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 544486
      },
      {
        id: 'hist-5424',
        date: '2025-06-06',
        type: 'Mantenimiento Correctivo',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-192',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 702501
      }
    ],
    details: {
      history: [
        {
          id: 'hist-5323',
          date: '2024-11-03',
          type: 'Calibración',
          provider: 'Metrología Integral',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-921',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 333473
        },
        {
          id: 'hist-3959',
          date: '2025-03-20',
          type: 'Mantenimiento Preventivo',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-289',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 499924
        },
        {
          id: 'hist-6765',
          date: '2024-07-16',
          type: 'Calibración',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-551',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 679070
        },
        {
          id: 'hist-6138',
          date: '2024-10-27',
          type: 'Mantenimiento Correctivo',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-325',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1920061
        },
        {
          id: 'hist-2338',
          date: '2024-05-29',
          type: 'Mantenimiento Correctivo',
          provider: 'Equipos y Laboratorios',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-657',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1166181
        }
      ]
    }
  },

  {
    id: 'eq-011',
    code: 'EQ-40093',
    ipsCode: 'IPS-8485',
    name: 'pHmetro',
    brand: 'Hanna Instruments',
    model: 'HI2211',
    serial: 'SN-575686',
    location: 'Sede Centro',
    process: 'Urgencias',
    assignedTo: 'Juan Perez',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Alta',
    calibrationStatus: 'Al día',
    category: 'Control de calidad',
    classification: 'BIO',
    invimaStatus: 'Sin registro',
    invimaCode: 'INVIMA 2021DM-8492',

    acquisitionDate: '2023-07-24',
    manufacturingDate: '2020-05-28',
    warrantyExpiry: '2027-01-07',
    warrantyActive: true,

    provider: 'Metrología Integral',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 7672596,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '56W',
    weight: '95kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: false,
    hasMaintenanceProtocol: true,
    hasServiceManual: true,
    hasUserTraining: true,
    hasImportDeclaration: true,

    lastMaintenance: '2024-10-03',
    nextMaintenance: '2026-07-11',
    maintenanceFrequency: 1,
    calibrationFrequency: 0,

    planning: {
      preventiveFrequency: 1,
      preventiveEvents: [{ month: 'Enero', provider: 'Mantenimiento Ya', cost: 170055 }],
      calibrationFrequency: 0,
      calibrationEvents: []
    },

    metrologicalHistory: [
      {
        id: 'hist-7927',
        date: '2024-07-22',
        type: 'Mantenimiento Correctivo',
        provider: 'Metrología Integral',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-663',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1183940
      },
      {
        id: 'hist-2696',
        date: '2025-05-24',
        type: 'Mantenimiento Preventivo',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-391',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 277623
      },
      {
        id: 'hist-6694',
        date: '2024-07-18',
        type: 'Mantenimiento Correctivo',
        provider: 'Casa Médica',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-339',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1765862
      }
    ],
    details: {
      history: [
        {
          id: 'hist-6165',
          date: '2024-08-01',
          type: 'Mantenimiento Correctivo',
          provider: 'Casa Médica',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-456',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 570119
        },
        {
          id: 'hist-2399',
          date: '2024-03-10',
          type: 'Mantenimiento Preventivo',
          provider: 'Equipos y Laboratorios',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-129',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 160738
        },
        {
          id: 'hist-9282',
          date: '2025-11-24',
          type: 'Mantenimiento Correctivo',
          provider: 'Metrología Integral',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-909',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 612299
        }
      ]
    }
  },

  {
    id: 'eq-012',
    code: 'EQ-23120',
    ipsCode: 'IPS-2764',
    name: 'Micropipeta',
    brand: 'Gilson',
    model: 'Pipetman L',
    serial: 'SN-896089',
    location: 'Sede Norte',
    process: 'Investigación',
    assignedTo: 'Carlos Ruiz',
    status: 'En mantenimiento',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Al día',
    category: 'Laboratorio',
    classification: 'N/A',
    invimaStatus: 'Sin registro',
    invimaCode: 'INVIMA 2018DM-7386',

    acquisitionDate: '2022-05-18',
    manufacturingDate: '2014-03-01',
    warrantyExpiry: '2027-01-07',
    warrantyActive: false,

    provider: 'Mantenimiento Ya',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 40474467,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '309W',
    weight: '77kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: true,
    hasMaintenanceProtocol: true,
    hasServiceManual: false,
    hasUserTraining: true,
    hasImportDeclaration: false,

    lastMaintenance: '2025-03-09',
    nextMaintenance: '2026-06-11',
    maintenanceFrequency: 1,
    calibrationFrequency: 0,

    planning: {
      preventiveFrequency: 1,
      preventiveEvents: [{ month: 'Enero', provider: 'Mantenimiento Ya', cost: 414626 }],
      calibrationFrequency: 0,
      calibrationEvents: []
    },

    metrologicalHistory: [
      {
        id: 'hist-6006',
        date: '2025-10-03',
        type: 'Calibración',
        provider: 'Casa Médica',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-531',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 319492
      },
      {
        id: 'hist-2042',
        date: '2025-12-27',
        type: 'Mantenimiento Correctivo',
        provider: 'Metrología Integral',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-158',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 937066
      },
      {
        id: 'hist-3753',
        date: '2024-04-02',
        type: 'Calibración',
        provider: 'Mantenimiento Ya',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-867',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 762628
      },
      {
        id: 'hist-3877',
        date: '2024-06-07',
        type: 'Calibración',
        provider: 'Metrología Integral',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-455',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 629004
      }
    ],
    details: {
      history: [
        {
          id: 'hist-8201',
          date: '2024-07-14',
          type: 'Mantenimiento Preventivo',
          provider: 'Metrología Integral',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-855',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 475438
        },
        {
          id: 'hist-4191',
          date: '2024-03-19',
          type: 'Mantenimiento Correctivo',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-385',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1471386
        },
        {
          id: 'hist-6620',
          date: '2025-02-22',
          type: 'Calibración',
          provider: 'Metrología Integral',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-777',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 676671
        }
      ]
    }
  },

  {
    id: 'eq-013',
    code: 'EQ-31858',
    ipsCode: 'IPS-9463',
    name: 'Balanza analítica',
    brand: 'Mettler Toledo',
    model: 'XPR205',
    serial: 'SN-532562',
    location: 'Sede Norte',
    process: 'Investigación',
    assignedTo: 'Carlos Ruiz',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Alta',
    calibrationStatus: 'Al día',
    category: 'Control de calidad',
    classification: 'BIO',
    invimaStatus: 'Sin registro',
    invimaCode: 'INVIMA 2023DM-8860',

    acquisitionDate: '2015-04-28',
    manufacturingDate: '2017-01-29',
    warrantyExpiry: '2027-01-07',
    warrantyActive: false,

    provider: 'Biomedical Support SAS',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 6156974,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '163W',
    weight: '90kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: false,
    hasMaintenanceProtocol: true,
    hasServiceManual: true,
    hasUserTraining: true,
    hasImportDeclaration: false,

    lastMaintenance: '2024-03-09',
    nextMaintenance: '2026-05-12',
    maintenanceFrequency: 2,
    calibrationFrequency: 0,

    planning: {
      preventiveFrequency: 2,
      preventiveEvents: [{ month: 'Enero', provider: 'Casa Médica', cost: 321939 }, { month: 'Julio', provider: 'Casa Médica', cost: 110649 }],
      calibrationFrequency: 0,
      calibrationEvents: []
    },

    metrologicalHistory: [
      {
        id: 'hist-2290',
        date: '2025-04-23',
        type: 'Mantenimiento Preventivo',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-588',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 127960
      },
      {
        id: 'hist-2372',
        date: '2025-11-10',
        type: 'Calibración',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-314',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 670433
      },
      {
        id: 'hist-3268',
        date: '2024-09-22',
        type: 'Calibración',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-446',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 437698
      },
      {
        id: 'hist-7075',
        date: '2024-08-02',
        type: 'Calibración',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-458',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 412556
      }
    ],
    details: {
      history: [
        {
          id: 'hist-9951',
          date: '2024-06-01',
          type: 'Mantenimiento Preventivo',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-433',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 389690
        },
        {
          id: 'hist-4626',
          date: '2025-06-19',
          type: 'Mantenimiento Correctivo',
          provider: 'Casa Médica',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-599',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1232468
        },
        {
          id: 'hist-2675',
          date: '2025-11-30',
          type: 'Calibración',
          provider: 'Casa Médica',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-255',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 330779
        }
      ]
    }
  },

  {
    id: 'eq-014',
    code: 'EQ-13651',
    ipsCode: 'IPS-3932',
    name: 'Autoclave',
    brand: 'Tuttnauer',
    model: '3870EL',
    serial: 'SN-116329',
    location: 'Sede Centro',
    process: 'UCI',
    assignedTo: 'Ana Giraldo',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Alta',
    calibrationStatus: 'Por vencer',
    category: 'Esterilización',
    classification: 'IND',
    invimaStatus: 'Con registro',
    invimaCode: 'INVIMA 2024DM-1231',

    acquisitionDate: '2020-08-15',
    manufacturingDate: '2016-07-31',
    warrantyExpiry: '2027-01-07',
    warrantyActive: true,

    provider: 'Casa Médica',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 46716044,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '58W',
    weight: '45kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: true,
    hasMaintenanceProtocol: true,
    hasServiceManual: false,
    hasUserTraining: true,
    hasImportDeclaration: false,

    lastMaintenance: '2025-06-16',
    nextMaintenance: '2026-06-11',
    maintenanceFrequency: 1,
    calibrationFrequency: 0,

    planning: {
      preventiveFrequency: 1,
      preventiveEvents: [{ month: 'Enero', provider: 'Casa Médica', cost: 231607 }],
      calibrationFrequency: 0,
      calibrationEvents: []
    },

    metrologicalHistory: [
      {
        id: 'hist-1863',
        date: '2025-03-04',
        type: 'Mantenimiento Correctivo',
        provider: 'Casa Médica',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-319',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1820939
      },
      {
        id: 'hist-7469',
        date: '2024-06-11',
        type: 'Calibración',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-583',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 554215
      },
      {
        id: 'hist-5519',
        date: '2024-08-16',
        type: 'Calibración',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-358',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 488568
      },
      {
        id: 'hist-1533',
        date: '2024-06-07',
        type: 'Calibración',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-570',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 476608
      },
      {
        id: 'hist-7471',
        date: '2025-07-14',
        type: 'Mantenimiento Preventivo',
        provider: 'Metrología Integral',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-504',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 318958
      },
      {
        id: 'hist-7010',
        date: '2024-01-17',
        type: 'Mantenimiento Correctivo',
        provider: 'Casa Médica',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-818',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1039350
      }
    ],
    details: {
      history: [
        {
          id: 'hist-6012',
          date: '2026-01-10',
          type: 'Mantenimiento Correctivo',
          provider: 'Metrología Integral',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-462',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1673985
        },
        {
          id: 'hist-5731',
          date: '2024-04-25',
          type: 'Mantenimiento Correctivo',
          provider: 'Metrología Integral',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-528',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1176468
        },
        {
          id: 'hist-1405',
          date: '2024-08-20',
          type: 'Calibración',
          provider: 'Metrología Integral',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-553',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 701956
        },
        {
          id: 'hist-5974',
          date: '2025-03-19',
          type: 'Calibración',
          provider: 'Casa Médica',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-879',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 701818
        },
        {
          id: 'hist-4286',
          date: '2025-04-25',
          type: 'Mantenimiento Preventivo',
          provider: 'Casa Médica',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-162',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 150723
        },
        {
          id: 'hist-4611',
          date: '2024-07-22',
          type: 'Mantenimiento Correctivo',
          provider: 'Equipos y Laboratorios',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-406',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 812969
        }
      ]
    }
  },

  {
    id: 'eq-015',
    code: 'EQ-82007',
    ipsCode: 'IPS-6231',
    name: 'Baño María',
    brand: 'Memmert',
    model: 'WNB 14',
    serial: 'SN-656099',
    location: 'Sede Centro',
    process: 'UCI',
    assignedTo: 'Maria Gomez',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Alta',
    calibrationStatus: 'Por vencer',
    category: 'Laboratorio',
    classification: 'IND',
    invimaStatus: 'Sin registro',
    invimaCode: 'INVIMA 2020DM-7188',

    acquisitionDate: '2019-10-12',
    manufacturingDate: '2019-12-23',
    warrantyExpiry: '2027-01-07',
    warrantyActive: true,

    provider: 'Equipos y Laboratorios',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 26104247,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '92W',
    weight: '38kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: true,
    hasMaintenanceProtocol: true,
    hasServiceManual: true,
    hasUserTraining: true,
    hasImportDeclaration: true,

    lastMaintenance: '2024-12-10',
    nextMaintenance: '2026-05-12',
    maintenanceFrequency: 2,
    calibrationFrequency: 0,

    planning: {
      preventiveFrequency: 2,
      preventiveEvents: [{ month: 'Enero', provider: 'Mantenimiento Ya', cost: 280279 }, { month: 'Julio', provider: 'Biomedical Support SAS', cost: 243315 }],
      calibrationFrequency: 0,
      calibrationEvents: []
    },

    metrologicalHistory: [
      {
        id: 'hist-4776',
        date: '2024-08-18',
        type: 'Mantenimiento Correctivo',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-204',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1602664
      },
      {
        id: 'hist-1624',
        date: '2025-11-25',
        type: 'Calibración',
        provider: 'Metrología Integral',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-571',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 411502
      },
      {
        id: 'hist-6516',
        date: '2024-03-08',
        type: 'Calibración',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-619',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 450264
      },
      {
        id: 'hist-2794',
        date: '2024-12-29',
        type: 'Mantenimiento Correctivo',
        provider: 'Metrología Integral',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-495',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1333180
      }
    ],
    details: {
      history: [
        {
          id: 'hist-9357',
          date: '2024-05-20',
          type: 'Mantenimiento Preventivo',
          provider: 'Casa Médica',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-119',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 162769
        },
        {
          id: 'hist-9954',
          date: '2025-07-30',
          type: 'Mantenimiento Correctivo',
          provider: 'Equipos y Laboratorios',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-152',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1570560
        },
        {
          id: 'hist-6110',
          date: '2024-08-26',
          type: 'Calibración',
          provider: 'Metrología Integral',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-201',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 617931
        },
        {
          id: 'hist-5072',
          date: '2025-10-25',
          type: 'Mantenimiento Correctivo',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-825',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1093356
        }
      ]
    }
  },

  {
    id: 'eq-016',
    code: 'EQ-89490',
    ipsCode: 'IPS-5841',
    name: 'Congelador -80°C',
    brand: 'Haier',
    model: 'DW-86L338J',
    serial: 'SN-281597',
    location: 'Sede Centro',
    process: 'Urgencias',
    assignedTo: 'Ana Giraldo',
    status: 'En mantenimiento',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Por vencer',
    category: 'Cadena de frío',
    classification: 'IND',
    invimaStatus: 'Con registro',
    invimaCode: 'INVIMA 2018DM-9482',

    acquisitionDate: '2018-10-07',
    manufacturingDate: '2017-12-09',
    warrantyExpiry: '2027-01-07',
    warrantyActive: true,

    provider: 'Mantenimiento Ya',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 20403747,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '159W',
    weight: '3kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: true,
    hasMaintenanceProtocol: true,
    hasServiceManual: true,
    hasUserTraining: true,
    hasImportDeclaration: true,

    lastMaintenance: '2025-10-08',
    nextMaintenance: '2026-07-11',
    maintenanceFrequency: 2,
    calibrationFrequency: 1,

    planning: {
      preventiveFrequency: 2,
      preventiveEvents: [{ month: 'Enero', provider: 'Metrología Integral', cost: 438758 }, { month: 'Julio', provider: 'Metrología Integral', cost: 158071 }],
      calibrationFrequency: 1,
      calibrationEvents: [{ month: 'Febrero', provider: 'Metrología Integral', cost: 691693 }]
    },

    metrologicalHistory: [
      {
        id: 'hist-6215',
        date: '2024-04-14',
        type: 'Mantenimiento Correctivo',
        provider: 'Casa Médica',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-722',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1183237
      },
      {
        id: 'hist-8842',
        date: '2024-08-22',
        type: 'Mantenimiento Preventivo',
        provider: 'Casa Médica',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-546',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 349638
      },
      {
        id: 'hist-2022',
        date: '2025-02-09',
        type: 'Calibración',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-777',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 603081
      },
      {
        id: 'hist-3491',
        date: '2024-12-13',
        type: 'Mantenimiento Correctivo',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-481',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1649143
      },
      {
        id: 'hist-9076',
        date: '2024-08-13',
        type: 'Mantenimiento Correctivo',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-118',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1868164
      }
    ],
    details: {
      history: [
        {
          id: 'hist-9956',
          date: '2024-04-23',
          type: 'Calibración',
          provider: 'Casa Médica',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-316',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 418396
        },
        {
          id: 'hist-6171',
          date: '2024-11-08',
          type: 'Calibración',
          provider: 'Equipos y Laboratorios',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-543',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 673231
        },
        {
          id: 'hist-7447',
          date: '2025-05-06',
          type: 'Mantenimiento Preventivo',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-903',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 287668
        },
        {
          id: 'hist-2965',
          date: '2025-04-02',
          type: 'Mantenimiento Correctivo',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-253',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1448635
        },
        {
          id: 'hist-1452',
          date: '2025-08-14',
          type: 'Calibración',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-112',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 370840
        },
        {
          id: 'hist-3953',
          date: '2025-08-07',
          type: 'Calibración',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-730',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 561367
        }
      ]
    }
  },

  {
    id: 'eq-017',
    code: 'EQ-73821',
    ipsCode: 'IPS-3734',
    name: 'Agitador magnético',
    brand: 'IKA',
    model: 'C-Mag HS 7',
    serial: 'SN-434231',
    location: 'Sede Centro',
    process: 'Urgencias',
    assignedTo: 'Juan Perez',
    status: 'En mantenimiento',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Al día',
    category: 'Laboratorio',
    classification: 'IND',
    invimaStatus: 'Con registro',
    invimaCode: 'INVIMA 2019DM-7515',

    acquisitionDate: '2015-04-23',
    manufacturingDate: '2019-12-23',
    warrantyExpiry: '2027-01-07',
    warrantyActive: true,

    provider: 'Casa Médica',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 31327222,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '201W',
    weight: '70kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: true,
    hasMaintenanceProtocol: true,
    hasServiceManual: true,
    hasUserTraining: true,
    hasImportDeclaration: true,

    lastMaintenance: '2025-10-03',
    nextMaintenance: '2026-03-13',
    maintenanceFrequency: 2,
    calibrationFrequency: 0,

    planning: {
      preventiveFrequency: 2,
      preventiveEvents: [{ month: 'Enero', provider: 'Casa Médica', cost: 469345 }, { month: 'Julio', provider: 'Mantenimiento Ya', cost: 139553 }],
      calibrationFrequency: 0,
      calibrationEvents: []
    },

    metrologicalHistory: [
      {
        id: 'hist-9403',
        date: '2025-04-27',
        type: 'Mantenimiento Preventivo',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-812',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 132085
      },
      {
        id: 'hist-5032',
        date: '2024-05-01',
        type: 'Mantenimiento Correctivo',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-931',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 543244
      },
      {
        id: 'hist-8863',
        date: '2025-11-01',
        type: 'Mantenimiento Correctivo',
        provider: 'Mantenimiento Ya',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-695',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1910234
      }
    ],
    details: {
      history: [
        {
          id: 'hist-3466',
          date: '2025-01-10',
          type: 'Mantenimiento Preventivo',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-370',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 354427
        },
        {
          id: 'hist-2789',
          date: '2025-01-04',
          type: 'Mantenimiento Preventivo',
          provider: 'Equipos y Laboratorios',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-272',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 118909
        },
        {
          id: 'hist-4428',
          date: '2025-04-20',
          type: 'Calibración',
          provider: 'Casa Médica',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-240',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 464625
        },
        {
          id: 'hist-2938',
          date: '2026-01-11',
          type: 'Mantenimiento Correctivo',
          provider: 'Casa Médica',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-602',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 942627
        }
      ]
    }
  },

  {
    id: 'eq-018',
    code: 'EQ-81591',
    ipsCode: 'IPS-7486',
    name: 'Baño María',
    brand: 'Memmert',
    model: 'WNB 14',
    serial: 'SN-521169',
    location: 'Sede Centro',
    process: 'UCI',
    assignedTo: 'Juan Perez',
    status: 'En mantenimiento',
    maintenanceType: 'Preventivo',
    criticality: 'Baja',
    calibrationStatus: 'Al día',
    category: 'Laboratorio',
    classification: 'IND',
    invimaStatus: 'Sin registro',
    invimaCode: 'INVIMA 2020DM-9849',

    acquisitionDate: '2018-08-06',
    manufacturingDate: '2019-03-29',
    warrantyExpiry: '2027-01-07',
    warrantyActive: true,

    provider: 'Equipos y Laboratorios',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 7664613,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '264W',
    weight: '33kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: true,
    hasMaintenanceProtocol: true,
    hasServiceManual: false,
    hasUserTraining: true,
    hasImportDeclaration: false,

    lastMaintenance: '2024-02-04',
    nextMaintenance: '2026-07-11',
    maintenanceFrequency: 4,
    calibrationFrequency: 0,

    planning: {
      preventiveFrequency: 4,
      preventiveEvents: [{ month: 'Enero', provider: 'Biomedical Support SAS', cost: 372063 }, { month: 'Abril', provider: 'Metrología Integral', cost: 429492 }, { month: 'Julio', provider: 'Metrología Integral', cost: 458131 }, { month: 'Octubre', provider: 'Casa Médica', cost: 119676 }],
      calibrationFrequency: 0,
      calibrationEvents: []
    },

    metrologicalHistory: [
      {
        id: 'hist-2946',
        date: '2024-06-23',
        type: 'Calibración',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-826',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 317428
      },
      {
        id: 'hist-2931',
        date: '2025-10-13',
        type: 'Mantenimiento Preventivo',
        provider: 'Mantenimiento Ya',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-621',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 415077
      },
      {
        id: 'hist-3980',
        date: '2024-06-05',
        type: 'Calibración',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-454',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 537954
      }
    ],
    details: {
      history: [
        {
          id: 'hist-1458',
          date: '2025-02-17',
          type: 'Calibración',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-748',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 792366
        },
        {
          id: 'hist-2011',
          date: '2025-11-29',
          type: 'Mantenimiento Correctivo',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-507',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 885983
        },
        {
          id: 'hist-8821',
          date: '2025-04-05',
          type: 'Mantenimiento Preventivo',
          provider: 'Equipos y Laboratorios',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-217',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 356673
        },
        {
          id: 'hist-3005',
          date: '2025-09-09',
          type: 'Mantenimiento Preventivo',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-508',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 469487
        }
      ]
    }
  },

  {
    id: 'eq-019',
    code: 'EQ-81525',
    ipsCode: 'IPS-8918',
    name: 'Micropipeta',
    brand: 'Gilson',
    model: 'Pipetman L',
    serial: 'SN-366827',
    location: 'Sede Sur',
    process: 'Laboratorio Clínico',
    assignedTo: 'Carlos Ruiz',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Baja',
    calibrationStatus: 'Por vencer',
    category: 'Laboratorio',
    classification: 'N/A',
    invimaStatus: 'Con registro',
    invimaCode: 'INVIMA 2018DM-7892',

    acquisitionDate: '2018-12-09',
    manufacturingDate: '2015-01-13',
    warrantyExpiry: '2027-01-07',
    warrantyActive: true,

    provider: 'Biomedical Support SAS',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 8917586,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '219W',
    weight: '95kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: false,
    hasMaintenanceProtocol: true,
    hasServiceManual: false,
    hasUserTraining: true,
    hasImportDeclaration: true,

    lastMaintenance: '2024-02-08',
    nextMaintenance: '2026-03-13',
    maintenanceFrequency: 1,
    calibrationFrequency: 0,

    planning: {
      preventiveFrequency: 1,
      preventiveEvents: [{ month: 'Enero', provider: 'Casa Médica', cost: 109542 }],
      calibrationFrequency: 0,
      calibrationEvents: []
    },

    metrologicalHistory: [
      {
        id: 'hist-8657',
        date: '2025-06-27',
        type: 'Calibración',
        provider: 'Metrología Integral',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-815',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 736904
      },
      {
        id: 'hist-7342',
        date: '2025-01-26',
        type: 'Mantenimiento Preventivo',
        provider: 'Casa Médica',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-615',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 126629
      },
      {
        id: 'hist-8586',
        date: '2024-12-09',
        type: 'Mantenimiento Correctivo',
        provider: 'Casa Médica',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-758',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1476227
      }
    ],
    details: {
      history: [
        {
          id: 'hist-6465',
          date: '2024-02-02',
          type: 'Mantenimiento Correctivo',
          provider: 'Metrología Integral',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-363',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1810825
        },
        {
          id: 'hist-1492',
          date: '2025-03-15',
          type: 'Mantenimiento Correctivo',
          provider: 'Metrología Integral',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-460',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1879544
        },
        {
          id: 'hist-6031',
          date: '2025-10-12',
          type: 'Calibración',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-641',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 460307
        },
        {
          id: 'hist-3974',
          date: '2025-12-18',
          type: 'Calibración',
          provider: 'Metrología Integral',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-342',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 453528
        },
        {
          id: 'hist-5814',
          date: '2024-05-13',
          type: 'Calibración',
          provider: 'Casa Médica',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-315',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 571013
        }
      ]
    }
  },

  {
    id: 'eq-020',
    code: 'EQ-16228',
    ipsCode: 'IPS-2984',
    name: 'Agitador magnético',
    brand: 'IKA',
    model: 'C-Mag HS 7',
    serial: 'SN-628742',
    location: 'Sede Sur',
    process: 'Laboratorio Clínico',
    assignedTo: 'Carlos Ruiz',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Al día',
    category: 'Laboratorio',
    classification: 'IND',
    invimaStatus: 'Con registro',
    invimaCode: 'INVIMA 2023DM-8367',

    acquisitionDate: '2019-05-09',
    manufacturingDate: '2014-01-10',
    warrantyExpiry: '2027-01-07',
    warrantyActive: false,

    provider: 'Biomedical Support SAS',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 26147462,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '115W',
    weight: '85kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: false,
    hasMaintenanceProtocol: true,
    hasServiceManual: true,
    hasUserTraining: true,
    hasImportDeclaration: false,

    lastMaintenance: '2024-08-15',
    nextMaintenance: '2026-05-12',
    maintenanceFrequency: 1,
    calibrationFrequency: 0,

    planning: {
      preventiveFrequency: 1,
      preventiveEvents: [{ month: 'Enero', provider: 'Biomedical Support SAS', cost: 279630 }],
      calibrationFrequency: 0,
      calibrationEvents: []
    },

    metrologicalHistory: [
      {
        id: 'hist-4072',
        date: '2024-05-25',
        type: 'Mantenimiento Preventivo',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-546',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 197762
      },
      {
        id: 'hist-3464',
        date: '2024-02-14',
        type: 'Mantenimiento Preventivo',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-338',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 190089
      },
      {
        id: 'hist-7269',
        date: '2024-06-03',
        type: 'Mantenimiento Preventivo',
        provider: 'Mantenimiento Ya',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-102',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 451165
      }
    ],
    details: {
      history: [
        {
          id: 'hist-5462',
          date: '2024-07-30',
          type: 'Calibración',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-384',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 739864
        },
        {
          id: 'hist-4184',
          date: '2024-03-28',
          type: 'Mantenimiento Correctivo',
          provider: 'Casa Médica',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-278',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1576800
        },
        {
          id: 'hist-7853',
          date: '2025-07-10',
          type: 'Mantenimiento Correctivo',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-940',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 595031
        },
        {
          id: 'hist-2787',
          date: '2025-05-25',
          type: 'Calibración',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-753',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 661309
        }
      ]
    }
  },

  {
    id: 'eq-021',
    code: 'EQ-75731',
    ipsCode: 'IPS-5133',
    name: 'Cámara de flujo laminar',
    brand: 'Esco',
    model: 'Airstream',
    serial: 'SN-388550',
    location: 'Sede Centro',
    process: 'Investigación',
    assignedTo: 'Ana Giraldo',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Por vencer',
    category: 'Laboratorio',
    classification: 'IND',
    invimaStatus: 'Con registro',
    invimaCode: 'INVIMA 2020DM-4660',

    acquisitionDate: '2017-06-17',
    manufacturingDate: '2016-06-07',
    warrantyExpiry: '2027-01-07',
    warrantyActive: false,

    provider: 'Biomedical Support SAS',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 33667394,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '359W',
    weight: '95kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: false,
    hasMaintenanceProtocol: true,
    hasServiceManual: false,
    hasUserTraining: true,
    hasImportDeclaration: false,

    lastMaintenance: '2024-05-18',
    nextMaintenance: '2026-06-11',
    maintenanceFrequency: 1,
    calibrationFrequency: 1,

    planning: {
      preventiveFrequency: 1,
      preventiveEvents: [{ month: 'Enero', provider: 'Mantenimiento Ya', cost: 120865 }],
      calibrationFrequency: 1,
      calibrationEvents: [{ month: 'Enero', provider: 'Mantenimiento Ya', cost: 658302 }]
    },

    metrologicalHistory: [
      {
        id: 'hist-1988',
        date: '2024-12-28',
        type: 'Mantenimiento Correctivo',
        provider: 'Metrología Integral',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-515',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 544578
      },
      {
        id: 'hist-8294',
        date: '2025-11-04',
        type: 'Mantenimiento Correctivo',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-519',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 810423
      },
      {
        id: 'hist-7823',
        date: '2025-04-07',
        type: 'Mantenimiento Preventivo',
        provider: 'Casa Médica',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-128',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 248990
      },
      {
        id: 'hist-4400',
        date: '2024-12-20',
        type: 'Mantenimiento Preventivo',
        provider: 'Mantenimiento Ya',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-184',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 362319
      },
      {
        id: 'hist-2514',
        date: '2025-03-26',
        type: 'Calibración',
        provider: 'Metrología Integral',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-418',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 712601
      },
      {
        id: 'hist-1751',
        date: '2024-06-10',
        type: 'Mantenimiento Correctivo',
        provider: 'Mantenimiento Ya',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-173',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1709302
      }
    ],
    details: {
      history: [
        {
          id: 'hist-6542',
          date: '2025-05-11',
          type: 'Calibración',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-771',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 454671
        },
        {
          id: 'hist-2651',
          date: '2025-06-28',
          type: 'Mantenimiento Preventivo',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-113',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 210609
        },
        {
          id: 'hist-5502',
          date: '2025-12-17',
          type: 'Mantenimiento Preventivo',
          provider: 'Metrología Integral',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-895',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 263037
        },
        {
          id: 'hist-1986',
          date: '2025-01-13',
          type: 'Mantenimiento Preventivo',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-571',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 337542
        },
        {
          id: 'hist-4001',
          date: '2025-02-01',
          type: 'Calibración',
          provider: 'Metrología Integral',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-724',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 611564
        },
        {
          id: 'hist-8483',
          date: '2025-11-16',
          type: 'Mantenimiento Preventivo',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-253',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 472214
        }
      ]
    }
  },

  {
    id: 'eq-022',
    code: 'EQ-74794',
    ipsCode: 'IPS-5077',
    name: 'Incubadora de CO2',
    brand: 'Thermo Fisher',
    model: 'Heracell 150i',
    serial: 'SN-661265',
    location: 'Sede Centro',
    process: 'Urgencias',
    assignedTo: 'Ana Giraldo',
    status: 'En mantenimiento',
    maintenanceType: 'Preventivo',
    criticality: 'Alta',
    calibrationStatus: 'Por vencer',
    category: 'Investigación',
    classification: 'BIO',
    invimaStatus: 'Sin registro',
    invimaCode: 'INVIMA 2018DM-7195',

    acquisitionDate: '2021-12-03',
    manufacturingDate: '2020-11-04',
    warrantyExpiry: '2027-01-07',
    warrantyActive: true,

    provider: 'Biomedical Support SAS',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 19643625,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '416W',
    weight: '98kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: true,
    hasMaintenanceProtocol: true,
    hasServiceManual: true,
    hasUserTraining: true,
    hasImportDeclaration: true,

    lastMaintenance: '2024-10-04',
    nextMaintenance: '2026-02-11',
    maintenanceFrequency: 4,
    calibrationFrequency: 0,

    planning: {
      preventiveFrequency: 4,
      preventiveEvents: [{ month: 'Enero', provider: 'Mantenimiento Ya', cost: 347496 }, { month: 'Abril', provider: 'Metrología Integral', cost: 363261 }, { month: 'Julio', provider: 'Casa Médica', cost: 400946 }, { month: 'Octubre', provider: 'Biomedical Support SAS', cost: 411150 }],
      calibrationFrequency: 0,
      calibrationEvents: []
    },

    metrologicalHistory: [
      {
        id: 'hist-2500',
        date: '2025-11-05',
        type: 'Calibración',
        provider: 'Casa Médica',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-796',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 621492
      },
      {
        id: 'hist-9320',
        date: '2025-06-14',
        type: 'Mantenimiento Correctivo',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-389',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1488436
      },
      {
        id: 'hist-2518',
        date: '2025-03-20',
        type: 'Calibración',
        provider: 'Casa Médica',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-380',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 400617
      }
    ],
    details: {
      history: [
        {
          id: 'hist-4427',
          date: '2024-01-18',
          type: 'Mantenimiento Correctivo',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-131',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1060870
        },
        {
          id: 'hist-4114',
          date: '2025-03-10',
          type: 'Calibración',
          provider: 'Casa Médica',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-511',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 325103
        },
        {
          id: 'hist-3418',
          date: '2025-08-26',
          type: 'Mantenimiento Preventivo',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-420',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 234274
        },
        {
          id: 'hist-4102',
          date: '2024-02-14',
          type: 'Calibración',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-401',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 482709
        },
        {
          id: 'hist-5117',
          date: '2024-05-27',
          type: 'Calibración',
          provider: 'Equipos y Laboratorios',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-258',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 631966
        },
        {
          id: 'hist-9509',
          date: '2024-08-11',
          type: 'Mantenimiento Correctivo',
          provider: 'Casa Médica',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-377',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1985971
        }
      ]
    }
  },

  {
    id: 'eq-023',
    code: 'EQ-18640',
    ipsCode: 'IPS-5633',
    name: 'Agitador magnético',
    brand: 'IKA',
    model: 'C-Mag HS 7',
    serial: 'SN-123576',
    location: 'Sede Norte',
    process: 'Urgencias',
    assignedTo: 'Carlos Ruiz',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Alta',
    calibrationStatus: 'Por vencer',
    category: 'Laboratorio',
    classification: 'IND',
    invimaStatus: 'Sin registro',
    invimaCode: 'INVIMA 2019DM-4464',

    acquisitionDate: '2023-11-03',
    manufacturingDate: '2015-11-06',
    warrantyExpiry: '2027-01-07',
    warrantyActive: false,

    provider: 'Metrología Integral',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 49107009,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '300W',
    weight: '41kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: false,
    hasMaintenanceProtocol: true,
    hasServiceManual: true,
    hasUserTraining: true,
    hasImportDeclaration: false,

    lastMaintenance: '2024-10-15',
    nextMaintenance: '2026-02-11',
    maintenanceFrequency: 1,
    calibrationFrequency: 0,

    planning: {
      preventiveFrequency: 1,
      preventiveEvents: [{ month: 'Enero', provider: 'Metrología Integral', cost: 165877 }],
      calibrationFrequency: 0,
      calibrationEvents: []
    },

    metrologicalHistory: [
      {
        id: 'hist-9554',
        date: '2024-08-27',
        type: 'Mantenimiento Correctivo',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-241',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1711239
      },
      {
        id: 'hist-4102',
        date: '2024-12-07',
        type: 'Calibración',
        provider: 'Metrología Integral',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-954',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 419805
      },
      {
        id: 'hist-3896',
        date: '2024-08-23',
        type: 'Mantenimiento Preventivo',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-798',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 292784
      },
      {
        id: 'hist-8423',
        date: '2024-04-12',
        type: 'Mantenimiento Preventivo',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-913',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 147732
      },
      {
        id: 'hist-3630',
        date: '2024-06-21',
        type: 'Calibración',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-161',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 380548
      }
    ],
    details: {
      history: [
        {
          id: 'hist-6216',
          date: '2025-11-21',
          type: 'Mantenimiento Correctivo',
          provider: 'Equipos y Laboratorios',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-240',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1223644
        },
        {
          id: 'hist-5316',
          date: '2025-11-27',
          type: 'Calibración',
          provider: 'Casa Médica',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-940',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 647452
        },
        {
          id: 'hist-3282',
          date: '2024-04-24',
          type: 'Mantenimiento Correctivo',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-478',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1853087
        },
        {
          id: 'hist-1049',
          date: '2024-07-27',
          type: 'Mantenimiento Correctivo',
          provider: 'Casa Médica',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-263',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1848812
        },
        {
          id: 'hist-2360',
          date: '2025-10-07',
          type: 'Mantenimiento Correctivo',
          provider: 'Casa Médica',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-872',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 884577
        }
      ]
    }
  },

  {
    id: 'eq-024',
    code: 'EQ-57442',
    ipsCode: 'IPS-1305',
    name: 'Microscopio óptico',
    brand: 'Nikon',
    model: 'Eclipse E200',
    serial: 'SN-439742',
    location: 'Sede Norte',
    process: 'Urgencias',
    assignedTo: 'Juan Perez',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Alta',
    calibrationStatus: 'Por vencer',
    category: 'Diagnóstico',
    classification: 'BIO',
    invimaStatus: 'Sin registro',
    invimaCode: 'INVIMA 2018DM-8041',

    acquisitionDate: '2017-04-11',
    manufacturingDate: '2014-01-30',
    warrantyExpiry: '2027-01-07',
    warrantyActive: false,

    provider: 'Casa Médica',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 4866364,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '182W',
    weight: '11kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: true,
    hasMaintenanceProtocol: true,
    hasServiceManual: false,
    hasUserTraining: true,
    hasImportDeclaration: true,

    lastMaintenance: '2025-08-29',
    nextMaintenance: '2026-05-12',
    maintenanceFrequency: 4,
    calibrationFrequency: 1,

    planning: {
      preventiveFrequency: 4,
      preventiveEvents: [{ month: 'Enero', provider: 'Metrología Integral', cost: 136909 }, { month: 'Abril', provider: 'Casa Médica', cost: 229850 }, { month: 'Julio', provider: 'Biomedical Support SAS', cost: 365348 }, { month: 'Octubre', provider: 'Mantenimiento Ya', cost: 448498 }],
      calibrationFrequency: 1,
      calibrationEvents: [{ month: 'Octubre', provider: 'Mantenimiento Ya', cost: 761229 }]
    },

    metrologicalHistory: [
      {
        id: 'hist-6064',
        date: '2024-07-06',
        type: 'Mantenimiento Preventivo',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-340',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 372371
      },
      {
        id: 'hist-7803',
        date: '2024-12-28',
        type: 'Mantenimiento Correctivo',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-856',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1372837
      },
      {
        id: 'hist-1018',
        date: '2025-12-26',
        type: 'Mantenimiento Correctivo',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-904',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1379772
      },
      {
        id: 'hist-2755',
        date: '2024-09-13',
        type: 'Calibración',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-192',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 637137
      },
      {
        id: 'hist-5917',
        date: '2024-08-30',
        type: 'Mantenimiento Correctivo',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-274',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1365534
      }
    ],
    details: {
      history: [
        {
          id: 'hist-4828',
          date: '2024-11-01',
          type: 'Mantenimiento Preventivo',
          provider: 'Metrología Integral',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-493',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 353715
        },
        {
          id: 'hist-3642',
          date: '2024-02-19',
          type: 'Mantenimiento Correctivo',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-306',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 783107
        },
        {
          id: 'hist-2266',
          date: '2025-03-21',
          type: 'Calibración',
          provider: 'Casa Médica',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-287',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 387056
        },
        {
          id: 'hist-8493',
          date: '2026-01-02',
          type: 'Calibración',
          provider: 'Casa Médica',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-596',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 491890
        }
      ]
    }
  },

  {
    id: 'eq-025',
    code: 'EQ-43940',
    ipsCode: 'IPS-8623',
    name: 'Autoclave',
    brand: 'Tuttnauer',
    model: '3870EL',
    serial: 'SN-203012',
    location: 'Sede Norte',
    process: 'Urgencias',
    assignedTo: 'Juan Perez',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Al día',
    category: 'Esterilización',
    classification: 'IND',
    invimaStatus: 'Sin registro',
    invimaCode: 'INVIMA 2021DM-5630',

    acquisitionDate: '2022-05-02',
    manufacturingDate: '2019-06-06',
    warrantyExpiry: '2027-01-07',
    warrantyActive: false,

    provider: 'Metrología Integral',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 21243735,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '363W',
    weight: '64kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: false,
    hasMaintenanceProtocol: true,
    hasServiceManual: false,
    hasUserTraining: true,
    hasImportDeclaration: true,

    lastMaintenance: '2024-07-09',
    nextMaintenance: '2026-06-11',
    maintenanceFrequency: 1,
    calibrationFrequency: 0,

    planning: {
      preventiveFrequency: 1,
      preventiveEvents: [{ month: 'Enero', provider: 'Equipos y Laboratorios', cost: 265589 }],
      calibrationFrequency: 0,
      calibrationEvents: []
    },

    metrologicalHistory: [
      {
        id: 'hist-2106',
        date: '2024-07-29',
        type: 'Calibración',
        provider: 'Casa Médica',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-335',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 782168
      },
      {
        id: 'hist-3089',
        date: '2025-01-27',
        type: 'Calibración',
        provider: 'Metrología Integral',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-765',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 711050
      },
      {
        id: 'hist-5180',
        date: '2025-02-07',
        type: 'Mantenimiento Correctivo',
        provider: 'Metrología Integral',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-668',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 573664
      },
      {
        id: 'hist-1846',
        date: '2024-02-02',
        type: 'Mantenimiento Correctivo',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-312',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1391544
      },
      {
        id: 'hist-9985',
        date: '2024-03-30',
        type: 'Mantenimiento Preventivo',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-555',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 320592
      },
      {
        id: 'hist-6384',
        date: '2025-08-19',
        type: 'Mantenimiento Preventivo',
        provider: 'Mantenimiento Ya',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-859',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 403528
      }
    ],
    details: {
      history: [
        {
          id: 'hist-2620',
          date: '2024-04-18',
          type: 'Mantenimiento Correctivo',
          provider: 'Casa Médica',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-451',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 708376
        },
        {
          id: 'hist-1306',
          date: '2025-09-27',
          type: 'Mantenimiento Correctivo',
          provider: 'Casa Médica',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-976',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1435724
        },
        {
          id: 'hist-2259',
          date: '2025-07-18',
          type: 'Mantenimiento Preventivo',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-808',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 286338
        },
        {
          id: 'hist-6974',
          date: '2024-09-23',
          type: 'Mantenimiento Preventivo',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-752',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 418509
        },
        {
          id: 'hist-6204',
          date: '2026-01-04',
          type: 'Mantenimiento Preventivo',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-783',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 206275
        }
      ]
    }
  },

  {
    id: 'eq-026',
    code: 'EQ-84328',
    ipsCode: 'IPS-9768',
    name: 'Desfibrilador',
    brand: 'Zoll',
    model: 'R Series',
    serial: 'SN-393273',
    location: 'Sede Norte',
    process: 'Laboratorio Clínico',
    assignedTo: 'Carlos Ruiz',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Baja',
    calibrationStatus: 'Al día',
    category: 'Soporte clínico',
    classification: 'BIO',
    invimaStatus: 'Sin registro',
    invimaCode: 'INVIMA 2022DM-8908',

    acquisitionDate: '2017-03-03',
    manufacturingDate: '2017-09-21',
    warrantyExpiry: '2027-01-07',
    warrantyActive: true,

    provider: 'Equipos y Laboratorios',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 13833187,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '431W',
    weight: '5kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: true,
    hasMaintenanceProtocol: true,
    hasServiceManual: false,
    hasUserTraining: true,
    hasImportDeclaration: false,

    lastMaintenance: '2024-06-13',
    nextMaintenance: '2026-03-13',
    maintenanceFrequency: 4,
    calibrationFrequency: 0,

    planning: {
      preventiveFrequency: 4,
      preventiveEvents: [{ month: 'Enero', provider: 'Equipos y Laboratorios', cost: 476494 }, { month: 'Abril', provider: 'Casa Médica', cost: 136347 }, { month: 'Julio', provider: 'Equipos y Laboratorios', cost: 333792 }, { month: 'Octubre', provider: 'Equipos y Laboratorios', cost: 365351 }],
      calibrationFrequency: 0,
      calibrationEvents: []
    },

    metrologicalHistory: [
      {
        id: 'hist-4239',
        date: '2024-08-16',
        type: 'Calibración',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-247',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 673006
      },
      {
        id: 'hist-4184',
        date: '2025-02-23',
        type: 'Mantenimiento Correctivo',
        provider: 'Metrología Integral',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-356',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1184803
      },
      {
        id: 'hist-7914',
        date: '2025-06-11',
        type: 'Calibración',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-408',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 666141
      },
      {
        id: 'hist-3683',
        date: '2025-05-22',
        type: 'Mantenimiento Preventivo',
        provider: 'Casa Médica',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-787',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 149945
      }
    ],
    details: {
      history: [
        {
          id: 'hist-8904',
          date: '2025-06-23',
          type: 'Mantenimiento Preventivo',
          provider: 'Equipos y Laboratorios',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-690',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 420530
        },
        {
          id: 'hist-8789',
          date: '2025-04-28',
          type: 'Mantenimiento Correctivo',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-317',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1601827
        },
        {
          id: 'hist-7547',
          date: '2024-05-14',
          type: 'Mantenimiento Correctivo',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-992',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1402648
        }
      ]
    }
  },

  {
    id: 'eq-027',
    code: 'EQ-28675',
    ipsCode: 'IPS-3372',
    name: 'Congelador -80°C',
    brand: 'Haier',
    model: 'DW-86L338J',
    serial: 'SN-880939',
    location: 'Sede Sur',
    process: 'Urgencias',
    assignedTo: 'Ana Giraldo',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Baja',
    calibrationStatus: 'Al día',
    category: 'Cadena de frío',
    classification: 'IND',
    invimaStatus: 'Sin registro',
    invimaCode: 'INVIMA 2020DM-6733',

    acquisitionDate: '2015-12-19',
    manufacturingDate: '2021-11-02',
    warrantyExpiry: '2027-01-07',
    warrantyActive: true,

    provider: 'Casa Médica',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 15816437,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '294W',
    weight: '50kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: false,
    hasMaintenanceProtocol: true,
    hasServiceManual: false,
    hasUserTraining: true,
    hasImportDeclaration: true,

    lastMaintenance: '2024-07-05',
    nextMaintenance: '2026-05-12',
    maintenanceFrequency: 1,
    calibrationFrequency: 1,

    planning: {
      preventiveFrequency: 1,
      preventiveEvents: [{ month: 'Enero', provider: 'Equipos y Laboratorios', cost: 280049 }],
      calibrationFrequency: 1,
      calibrationEvents: [{ month: 'Marzo', provider: 'Equipos y Laboratorios', cost: 571137 }]
    },

    metrologicalHistory: [
      {
        id: 'hist-9017',
        date: '2025-08-05',
        type: 'Calibración',
        provider: 'Metrología Integral',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-312',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 402940
      },
      {
        id: 'hist-7604',
        date: '2025-04-25',
        type: 'Calibración',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-428',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 590129
      },
      {
        id: 'hist-1067',
        date: '2025-12-09',
        type: 'Calibración',
        provider: 'Casa Médica',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-755',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 577617
      },
      {
        id: 'hist-1799',
        date: '2024-09-17',
        type: 'Calibración',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-545',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 494798
      },
      {
        id: 'hist-6673',
        date: '2024-07-23',
        type: 'Calibración',
        provider: 'Casa Médica',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-374',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 560185
      }
    ],
    details: {
      history: [
        {
          id: 'hist-4545',
          date: '2025-02-16',
          type: 'Mantenimiento Correctivo',
          provider: 'Casa Médica',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-875',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1420121
        },
        {
          id: 'hist-8519',
          date: '2024-09-15',
          type: 'Mantenimiento Preventivo',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-413',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 441283
        },
        {
          id: 'hist-5610',
          date: '2024-07-12',
          type: 'Mantenimiento Correctivo',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-907',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 787437
        }
      ]
    }
  },

  {
    id: 'eq-028',
    code: 'EQ-57307',
    ipsCode: 'IPS-5803',
    name: 'Espectrofotómetro',
    brand: 'Agilent',
    model: 'Cary 60 UV-Vis',
    serial: 'SN-551908',
    location: 'Sede Norte',
    process: 'Laboratorio Clínico',
    assignedTo: 'Carlos Ruiz',
    status: 'En mantenimiento',
    maintenanceType: 'Preventivo',
    criticality: 'Baja',
    calibrationStatus: 'Al día',
    category: 'Laboratorio',
    classification: 'BIO',
    invimaStatus: 'Sin registro',
    invimaCode: 'INVIMA 2021DM-7379',

    acquisitionDate: '2023-08-09',
    manufacturingDate: '2021-02-23',
    warrantyExpiry: '2027-01-07',
    warrantyActive: true,

    provider: 'Equipos y Laboratorios',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 13434248,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '381W',
    weight: '12kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: true,
    hasMaintenanceProtocol: true,
    hasServiceManual: false,
    hasUserTraining: true,
    hasImportDeclaration: false,

    lastMaintenance: '2024-03-17',
    nextMaintenance: '2026-04-12',
    maintenanceFrequency: 2,
    calibrationFrequency: 1,

    planning: {
      preventiveFrequency: 2,
      preventiveEvents: [{ month: 'Enero', provider: 'Casa Médica', cost: 277491 }, { month: 'Julio', provider: 'Equipos y Laboratorios', cost: 267780 }],
      calibrationFrequency: 1,
      calibrationEvents: [{ month: 'Diciembre', provider: 'Mantenimiento Ya', cost: 517608 }]
    },

    metrologicalHistory: [
      {
        id: 'hist-2497',
        date: '2024-12-21',
        type: 'Mantenimiento Preventivo',
        provider: 'Metrología Integral',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-779',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 432035
      },
      {
        id: 'hist-5526',
        date: '2025-05-25',
        type: 'Calibración',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-836',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 637673
      },
      {
        id: 'hist-4689',
        date: '2025-03-08',
        type: 'Calibración',
        provider: 'Casa Médica',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-924',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 492061
      },
      {
        id: 'hist-8592',
        date: '2025-01-21',
        type: 'Mantenimiento Correctivo',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-941',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1897754
      },
      {
        id: 'hist-7261',
        date: '2025-09-06',
        type: 'Mantenimiento Correctivo',
        provider: 'Casa Médica',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-335',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 931523
      },
      {
        id: 'hist-1044',
        date: '2024-06-24',
        type: 'Calibración',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-821',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 604315
      }
    ],
    details: {
      history: [
        {
          id: 'hist-4425',
          date: '2024-04-15',
          type: 'Mantenimiento Correctivo',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-101',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1111108
        },
        {
          id: 'hist-7161',
          date: '2024-02-02',
          type: 'Mantenimiento Correctivo',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-146',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1222029
        },
        {
          id: 'hist-4094',
          date: '2025-06-22',
          type: 'Calibración',
          provider: 'Casa Médica',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-360',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 347308
        },
        {
          id: 'hist-5832',
          date: '2024-07-28',
          type: 'Calibración',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-728',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 714855
        }
      ]
    }
  },

  {
    id: 'eq-029',
    code: 'EQ-98118',
    ipsCode: 'IPS-5286',
    name: 'pHmetro',
    brand: 'Hanna Instruments',
    model: 'HI2211',
    serial: 'SN-699114',
    location: 'Sede Sur',
    process: 'UCI',
    assignedTo: 'Carlos Ruiz',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Por vencer',
    category: 'Control de calidad',
    classification: 'BIO',
    invimaStatus: 'Con registro',
    invimaCode: 'INVIMA 2023DM-8254',

    acquisitionDate: '2023-08-18',
    manufacturingDate: '2015-12-24',
    warrantyExpiry: '2027-01-07',
    warrantyActive: true,

    provider: 'Casa Médica',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 39550086,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '417W',
    weight: '85kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: false,
    hasMaintenanceProtocol: true,
    hasServiceManual: false,
    hasUserTraining: true,
    hasImportDeclaration: false,

    lastMaintenance: '2025-04-18',
    nextMaintenance: '2026-05-12',
    maintenanceFrequency: 4,
    calibrationFrequency: 0,

    planning: {
      preventiveFrequency: 4,
      preventiveEvents: [{ month: 'Enero', provider: 'Biomedical Support SAS', cost: 189988 }, { month: 'Abril', provider: 'Biomedical Support SAS', cost: 169018 }, { month: 'Julio', provider: 'Equipos y Laboratorios', cost: 406961 }, { month: 'Octubre', provider: 'Casa Médica', cost: 238168 }],
      calibrationFrequency: 0,
      calibrationEvents: []
    },

    metrologicalHistory: [
      {
        id: 'hist-7307',
        date: '2025-10-06',
        type: 'Mantenimiento Preventivo',
        provider: 'Mantenimiento Ya',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-719',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 122388
      },
      {
        id: 'hist-9297',
        date: '2024-12-03',
        type: 'Mantenimiento Preventivo',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-354',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 466290
      },
      {
        id: 'hist-1595',
        date: '2025-10-10',
        type: 'Mantenimiento Preventivo',
        provider: 'Metrología Integral',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-317',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 163618
      },
      {
        id: 'hist-2486',
        date: '2024-08-10',
        type: 'Calibración',
        provider: 'Mantenimiento Ya',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-982',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 527363
      },
      {
        id: 'hist-1587',
        date: '2025-04-09',
        type: 'Calibración',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-186',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 459577
      }
    ],
    details: {
      history: [
        {
          id: 'hist-3978',
          date: '2024-03-25',
          type: 'Mantenimiento Correctivo',
          provider: 'Metrología Integral',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-598',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1712823
        },
        {
          id: 'hist-7942',
          date: '2025-12-17',
          type: 'Calibración',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-538',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 725981
        },
        {
          id: 'hist-5557',
          date: '2025-02-04',
          type: 'Calibración',
          provider: 'Casa Médica',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-533',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 689654
        },
        {
          id: 'hist-2193',
          date: '2024-12-16',
          type: 'Calibración',
          provider: 'Metrología Integral',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-279',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 389558
        }
      ]
    }
  },

  {
    id: 'eq-030',
    code: 'EQ-28906',
    ipsCode: 'IPS-6500',
    name: 'Cámara de flujo laminar',
    brand: 'Esco',
    model: 'Airstream',
    serial: 'SN-177979',
    location: 'Sede Norte',
    process: 'Urgencias',
    assignedTo: 'Ana Giraldo',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Al día',
    category: 'Laboratorio',
    classification: 'IND',
    invimaStatus: 'Con registro',
    invimaCode: 'INVIMA 2024DM-2340',

    acquisitionDate: '2020-09-28',
    manufacturingDate: '2015-10-11',
    warrantyExpiry: '2027-01-07',
    warrantyActive: true,

    provider: 'Metrología Integral',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 25833087,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '136W',
    weight: '47kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: true,
    hasMaintenanceProtocol: true,
    hasServiceManual: true,
    hasUserTraining: true,
    hasImportDeclaration: false,

    lastMaintenance: '2025-12-07',
    nextMaintenance: '2026-04-12',
    maintenanceFrequency: 1,
    calibrationFrequency: 0,

    planning: {
      preventiveFrequency: 1,
      preventiveEvents: [{ month: 'Enero', provider: 'Equipos y Laboratorios', cost: 194762 }],
      calibrationFrequency: 0,
      calibrationEvents: []
    },

    metrologicalHistory: [
      {
        id: 'hist-2276',
        date: '2024-11-20',
        type: 'Mantenimiento Correctivo',
        provider: 'Mantenimiento Ya',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-528',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1014658
      },
      {
        id: 'hist-9258',
        date: '2024-06-17',
        type: 'Calibración',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-796',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 600879
      },
      {
        id: 'hist-3448',
        date: '2024-06-08',
        type: 'Mantenimiento Preventivo',
        provider: 'Metrología Integral',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-900',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 335808
      },
      {
        id: 'hist-2478',
        date: '2025-12-27',
        type: 'Mantenimiento Correctivo',
        provider: 'Casa Médica',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-636',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1243439
      },
      {
        id: 'hist-6301',
        date: '2025-10-23',
        type: 'Calibración',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-510',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 628894
      }
    ],
    details: {
      history: [
        {
          id: 'hist-5003',
          date: '2024-08-12',
          type: 'Calibración',
          provider: 'Equipos y Laboratorios',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-153',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 608502
        },
        {
          id: 'hist-6844',
          date: '2024-06-06',
          type: 'Mantenimiento Preventivo',
          provider: 'Equipos y Laboratorios',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-186',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 261574
        },
        {
          id: 'hist-2041',
          date: '2025-11-03',
          type: 'Mantenimiento Correctivo',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-935',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1135285
        }
      ]
    }
  },

  {
    id: 'eq-031',
    code: 'EQ-42773',
    ipsCode: 'IPS-9077',
    name: 'Incubadora de CO2',
    brand: 'Thermo Fisher',
    model: 'Heracell 150i',
    serial: 'SN-245185',
    location: 'Sede Sur',
    process: 'Urgencias',
    assignedTo: 'Maria Gomez',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Baja',
    calibrationStatus: 'Por vencer',
    category: 'Investigación',
    classification: 'BIO',
    invimaStatus: 'Sin registro',
    invimaCode: 'INVIMA 2019DM-3007',

    acquisitionDate: '2019-06-12',
    manufacturingDate: '2018-02-07',
    warrantyExpiry: '2027-01-07',
    warrantyActive: false,

    provider: 'Mantenimiento Ya',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 19182972,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '319W',
    weight: '74kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: false,
    hasMaintenanceProtocol: true,
    hasServiceManual: false,
    hasUserTraining: true,
    hasImportDeclaration: true,

    lastMaintenance: '2025-06-01',
    nextMaintenance: '2026-05-12',
    maintenanceFrequency: 2,
    calibrationFrequency: 1,

    planning: {
      preventiveFrequency: 2,
      preventiveEvents: [{ month: 'Enero', provider: 'Mantenimiento Ya', cost: 357784 }, { month: 'Julio', provider: 'Equipos y Laboratorios', cost: 365169 }],
      calibrationFrequency: 1,
      calibrationEvents: [{ month: 'Enero', provider: 'Casa Médica', cost: 662191 }]
    },

    metrologicalHistory: [
      {
        id: 'hist-3204',
        date: '2025-01-20',
        type: 'Mantenimiento Preventivo',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-782',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 406569
      },
      {
        id: 'hist-6963',
        date: '2024-02-14',
        type: 'Mantenimiento Preventivo',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-574',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 209595
      },
      {
        id: 'hist-5767',
        date: '2024-08-13',
        type: 'Calibración',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-752',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 523358
      },
      {
        id: 'hist-9935',
        date: '2025-08-23',
        type: 'Mantenimiento Correctivo',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-248',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1531178
      },
      {
        id: 'hist-1042',
        date: '2024-06-18',
        type: 'Mantenimiento Correctivo',
        provider: 'Mantenimiento Ya',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-953',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1000110
      },
      {
        id: 'hist-2078',
        date: '2025-05-03',
        type: 'Mantenimiento Correctivo',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-289',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1919096
      }
    ],
    details: {
      history: [
        {
          id: 'hist-7022',
          date: '2025-06-09',
          type: 'Calibración',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-108',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 354711
        },
        {
          id: 'hist-6894',
          date: '2024-05-02',
          type: 'Calibración',
          provider: 'Casa Médica',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-207',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 674619
        },
        {
          id: 'hist-4677',
          date: '2026-01-03',
          type: 'Calibración',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-681',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 710649
        },
        {
          id: 'hist-2537',
          date: '2025-01-19',
          type: 'Calibración',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-576',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 454380
        }
      ]
    }
  },

  {
    id: 'eq-032',
    code: 'EQ-71827',
    ipsCode: 'IPS-6196',
    name: 'Microscopio óptico',
    brand: 'Nikon',
    model: 'Eclipse E200',
    serial: 'SN-634120',
    location: 'Sede Norte',
    process: 'Laboratorio Clínico',
    assignedTo: 'Ana Giraldo',
    status: 'En mantenimiento',
    maintenanceType: 'Preventivo',
    criticality: 'Alta',
    calibrationStatus: 'Por vencer',
    category: 'Diagnóstico',
    classification: 'BIO',
    invimaStatus: 'Con registro',
    invimaCode: 'INVIMA 2024DM-5686',

    acquisitionDate: '2020-06-24',
    manufacturingDate: '2015-01-05',
    warrantyExpiry: '2027-01-07',
    warrantyActive: false,

    provider: 'Equipos y Laboratorios',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 39211132,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '482W',
    weight: '47kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: true,
    hasMaintenanceProtocol: true,
    hasServiceManual: true,
    hasUserTraining: true,
    hasImportDeclaration: true,

    lastMaintenance: '2025-11-18',
    nextMaintenance: '2026-02-11',
    maintenanceFrequency: 1,
    calibrationFrequency: 1,

    planning: {
      preventiveFrequency: 1,
      preventiveEvents: [{ month: 'Enero', provider: 'Equipos y Laboratorios', cost: 174339 }],
      calibrationFrequency: 1,
      calibrationEvents: [{ month: 'Mayo', provider: 'Casa Médica', cost: 487843 }]
    },

    metrologicalHistory: [
      {
        id: 'hist-6433',
        date: '2024-12-27',
        type: 'Mantenimiento Correctivo',
        provider: 'Mantenimiento Ya',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-355',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 864140
      },
      {
        id: 'hist-7505',
        date: '2025-09-26',
        type: 'Calibración',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-625',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 648197
      },
      {
        id: 'hist-5251',
        date: '2024-08-12',
        type: 'Calibración',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-843',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 353663
      },
      {
        id: 'hist-6707',
        date: '2024-07-09',
        type: 'Mantenimiento Preventivo',
        provider: 'Metrología Integral',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-716',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 384523
      }
    ],
    details: {
      history: [
        {
          id: 'hist-5371',
          date: '2024-09-30',
          type: 'Mantenimiento Preventivo',
          provider: 'Metrología Integral',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-138',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 254700
        },
        {
          id: 'hist-5801',
          date: '2024-06-28',
          type: 'Calibración',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-553',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 352888
        },
        {
          id: 'hist-2805',
          date: '2025-01-09',
          type: 'Mantenimiento Preventivo',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-330',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 336419
        },
        {
          id: 'hist-4355',
          date: '2024-06-09',
          type: 'Calibración',
          provider: 'Casa Médica',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-111',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 448491
        }
      ]
    }
  },

  {
    id: 'eq-033',
    code: 'EQ-42329',
    ipsCode: 'IPS-3474',
    name: 'Autoclave',
    brand: 'Tuttnauer',
    model: '3870EL',
    serial: 'SN-355087',
    location: 'Sede Centro',
    process: 'UCI',
    assignedTo: 'Juan Perez',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Media',
    calibrationStatus: 'Al día',
    category: 'Esterilización',
    classification: 'IND',
    invimaStatus: 'Sin registro',
    invimaCode: 'INVIMA 2020DM-6592',

    acquisitionDate: '2018-05-20',
    manufacturingDate: '2018-10-24',
    warrantyExpiry: '2027-01-07',
    warrantyActive: false,

    provider: 'Equipos y Laboratorios',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 29304085,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '128W',
    weight: '22kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: false,
    hasMaintenanceProtocol: true,
    hasServiceManual: false,
    hasUserTraining: true,
    hasImportDeclaration: true,

    lastMaintenance: '2025-04-03',
    nextMaintenance: '2026-02-11',
    maintenanceFrequency: 4,
    calibrationFrequency: 0,

    planning: {
      preventiveFrequency: 4,
      preventiveEvents: [{ month: 'Enero', provider: 'Casa Médica', cost: 490538 }, { month: 'Abril', provider: 'Equipos y Laboratorios', cost: 403264 }, { month: 'Julio', provider: 'Mantenimiento Ya', cost: 380283 }, { month: 'Octubre', provider: 'Equipos y Laboratorios', cost: 197920 }],
      calibrationFrequency: 0,
      calibrationEvents: []
    },

    metrologicalHistory: [
      {
        id: 'hist-6240',
        date: '2025-11-06',
        type: 'Mantenimiento Correctivo',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-531',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 822236
      },
      {
        id: 'hist-9586',
        date: '2025-10-07',
        type: 'Mantenimiento Correctivo',
        provider: 'Metrología Integral',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-360',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 823631
      },
      {
        id: 'hist-8192',
        date: '2024-12-30',
        type: 'Mantenimiento Correctivo',
        provider: 'Mantenimiento Ya',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-877',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 1657170
      }
    ],
    details: {
      history: [
        {
          id: 'hist-4011',
          date: '2025-02-14',
          type: 'Mantenimiento Preventivo',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-467',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 223286
        },
        {
          id: 'hist-8771',
          date: '2024-06-27',
          type: 'Mantenimiento Correctivo',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-208',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1567849
        },
        {
          id: 'hist-1893',
          date: '2025-05-25',
          type: 'Mantenimiento Correctivo',
          provider: 'Casa Médica',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-320',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1589562
        }
      ]
    }
  },

  {
    id: 'eq-034',
    code: 'EQ-83567',
    ipsCode: 'IPS-6440',
    name: 'Microscopio óptico',
    brand: 'Nikon',
    model: 'Eclipse E200',
    serial: 'SN-143341',
    location: 'Sede Centro',
    process: 'UCI',
    assignedTo: 'Juan Perez',
    status: 'Activo',
    maintenanceType: 'Preventivo',
    criticality: 'Baja',
    calibrationStatus: 'Al día',
    category: 'Diagnóstico',
    classification: 'BIO',
    invimaStatus: 'Con registro',
    invimaCode: 'INVIMA 2024DM-7132',

    acquisitionDate: '2018-12-23',
    manufacturingDate: '2020-03-14',
    warrantyExpiry: '2027-01-07',
    warrantyActive: false,

    provider: 'Metrología Integral',
    owner: 'UdeA',
    ownerNit: '890.980.040-8',
    purchaseValue: 1730259,

    technicalSpecifications: 'Especificaciones estándar.',
    voltage: '110V',
    power: '244W',
    weight: '46kg',
    temperatureRange: '15-25°C',
    humidityRange: '30-60 %HR',

    hasLifeSheet: true,
    hasOperationManual: true,
    hasQuickGuide: false,
    hasMaintenanceProtocol: true,
    hasServiceManual: true,
    hasUserTraining: true,
    hasImportDeclaration: false,

    lastMaintenance: '2025-06-24',
    nextMaintenance: '2026-06-11',
    maintenanceFrequency: 4,
    calibrationFrequency: 0,

    planning: {
      preventiveFrequency: 4,
      preventiveEvents: [{ month: 'Enero', provider: 'Biomedical Support SAS', cost: 446577 }, { month: 'Abril', provider: 'Equipos y Laboratorios', cost: 197857 }, { month: 'Julio', provider: 'Biomedical Support SAS', cost: 202393 }, { month: 'Octubre', provider: 'Biomedical Support SAS', cost: 163940 }],
      calibrationFrequency: 0,
      calibrationEvents: []
    },

    metrologicalHistory: [
      {
        id: 'hist-1134',
        date: '2025-01-28',
        type: 'Mantenimiento Preventivo',
        provider: 'Metrología Integral',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-969',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 277110
      },
      {
        id: 'hist-3700',
        date: '2025-04-20',
        type: 'Mantenimiento Correctivo',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-807',
        result: 'Con observaciones',
        observations: 'Observaciones de prueba para el evento.',
        cost: 785911
      },
      {
        id: 'hist-8059',
        date: '2024-06-26',
        type: 'Calibración',
        provider: 'Biomedical Support SAS',
        performer: 'Ing. Juan Perez',
        reportNumber: 'REP-191',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 311449
      },
      {
        id: 'hist-1616',
        date: '2025-03-07',
        type: 'Mantenimiento Preventivo',
        provider: 'Equipos y Laboratorios',
        performer: 'Ing. Maria Gomez',
        reportNumber: 'REP-350',
        result: 'Aprobado',
        observations: 'Observaciones de prueba para el evento.',
        cost: 365563
      }
    ],
    details: {
      history: [
        {
          id: 'hist-6926',
          date: '2024-07-02',
          type: 'Mantenimiento Correctivo',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-353',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1460357
        },
        {
          id: 'hist-3169',
          date: '2024-07-09',
          type: 'Mantenimiento Correctivo',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-413',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 1240359
        },
        {
          id: 'hist-5022',
          date: '2024-08-27',
          type: 'Mantenimiento Correctivo',
          provider: 'Casa Médica',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-796',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 820456
        },
        {
          id: 'hist-5695',
          date: '2024-11-20',
          type: 'Calibración',
          provider: 'Casa Médica',
          performer: 'Ing. Juan Perez',
          reportNumber: 'REP-781',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 618941
        },
        {
          id: 'hist-7902',
          date: '2025-11-29',
          type: 'Mantenimiento Preventivo',
          provider: 'Biomedical Support SAS',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-819',
          result: 'Aprobado',
          observations: 'Observaciones de prueba para el evento.',
          cost: 151907
        },
        {
          id: 'hist-9299',
          date: '2025-10-20',
          type: 'Mantenimiento Preventivo',
          provider: 'Mantenimiento Ya',
          performer: 'Ing. Maria Gomez',
          reportNumber: 'REP-597',
          result: 'Con observaciones',
          observations: 'Observaciones de prueba para el evento.',
          cost: 315939
        }
      ]
    }
  },]

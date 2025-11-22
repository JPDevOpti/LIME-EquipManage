import type { MaintenanceEvent, MaintenanceFilters, MonthlyStats } from '../types'

type EventTemplate = Omit<
  MaintenanceEvent,
  'scheduledDate' | 'completedDate' | 'exactCompletionDate'
> & {
  day: number
  completedOffsetDays?: number
  completionTime?: string
}

const currentYear = new Date().getFullYear()

const monthlyEventTemplates: { month: number; events: EventTemplate[] }[] = [
  {
    month: 0,
    events: [
      {
        id: 'JAN-PREV-001',
        equipmentId: 'BIO-17001',
        equipmentName: 'Microscopio Leica DM500',
        equipmentCode: 'BIO-17001',
        type: 'Preventivo',
        status: 'Pendiente',
        sede: 'San Vicente',
        location: 'Laboratorio central',
        service: 'Patología',
        technician: 'Martha Londoño',
        priority: 'Alta',
        estimatedDuration: 2,
        equipmentStatus: 'Operativo',
        brand: 'Leica',
        model: 'DM500',
        serialNumber: 'DM500-2103',
        supplier: 'Lima Instruments',
        notes: 'Revisión anual programada',
        process: 'Pendiente',
        day: 6
      },
      {
        id: 'JAN-PREV-002',
        equipmentId: 'BIO-16516',
        equipmentName: 'Sistema de agua ultrapura Milli-Q',
        equipmentCode: 'BIO-16516',
        type: 'Preventivo',
        status: 'En Proceso',
        sede: 'Prado',
        location: 'Sala de histotecnología',
        service: 'Soporte laboratorio',
        technician: 'Juan Quintero',
        priority: 'Media',
        estimatedDuration: 3,
        equipmentStatus: 'Operativo',
        brand: 'Millipore',
        model: 'Milli-Q IQ 7000',
        serialNumber: 'MQ-77831',
        supplier: 'PureLab',
        notes: 'Cambio de cartuchos y verificación de resistividad',
        process: 'En proceso',
        day: 18
      },
      {
        id: 'JAN-CAL-001',
        equipmentId: 'BIO-16453',
        equipmentName: 'Balanza analítica HR-200',
        equipmentCode: 'BIO-16453',
        type: 'Calibración',
        status: 'En Proceso',
        sede: 'SIU',
        location: 'Laboratorio químico',
        service: 'Metrología',
        technician: 'Lina Mejía',
        priority: 'Media',
        estimatedDuration: 3,
        cost: 260000,
        equipmentStatus: 'Operativo',
        brand: 'A&D',
        model: 'HR-200',
        serialNumber: 'HR200-9821',
        supplier: 'Metrotech SAS',
        notes: 'Ajuste fino requerido para peso patrón de 1 mg',
        process: 'En proceso',
        day: 12
      },
      {
        id: 'JAN-COR-001',
        equipmentId: 'BIO-16870',
        equipmentName: 'Criostato HM525 NX',
        equipmentCode: 'BIO-16870',
        type: 'Correctivo',
        status: 'Completado',
        sede: 'San Vicente',
        location: 'Sala de criosección',
        service: 'Histoquímica',
        technician: 'Equipo proveedor',
        priority: 'Alta',
        estimatedDuration: 5,
        cost: 480000,
        equipmentStatus: 'Operativo',
        brand: 'Thermo Fisher',
        model: 'HM525 NX',
        serialNumber: 'HM525-5567',
        supplier: 'CryoService',
        notes: 'Cambio de motor y limpieza profunda',
        completionNotes: 'Pruebas térmicas aprobadas',
        reportNumber: 'INF-25-001',
        reportFile: 'INF-25-001.pdf',
        process: 'Completado',
        day: 24,
        completedOffsetDays: 3,
        completionTime: '16:30'
      }
    ]
  },
  {
    month: 1,
    events: [
      {
        id: 'FEB-PREV-001',
        equipmentId: 'BIO-16911',
        equipmentName: 'Cabina de flujo laminar Esco A2',
        equipmentCode: 'BIO-16911',
        type: 'Preventivo',
        status: 'Pendiente',
        sede: 'Prado',
        location: 'Sala de cultivos',
        service: 'Microbiología',
        technician: 'Andrea Franco',
        priority: 'Alta',
        estimatedDuration: 4,
        equipmentStatus: 'Operativo',
        brand: 'Esco',
        model: 'Airstream A2',
        serialNumber: 'AS2-4419',
        supplier: 'BioSolutions',
        notes: 'Cambio de prefiltros HEPA y prueba de integridad',
        process: 'Pendiente',
        day: 5
      },
      {
        id: 'FEB-PREV-002',
        equipmentId: 'BIO-16480',
        equipmentName: 'Centrífuga refrigerada 5810R',
        equipmentCode: 'BIO-16480',
        type: 'Preventivo',
        status: 'En Proceso',
        sede: 'SIU',
        location: 'Laboratorio de biología molecular',
        service: 'Investigación clínica',
        technician: 'Carlos Méndez',
        priority: 'Media',
        estimatedDuration: 3,
        equipmentStatus: 'Operativo',
        brand: 'Eppendorf',
        model: '5810R',
        serialNumber: '58R-23100',
        supplier: 'LabWare SAS',
        notes: 'Lubricación de rotor y pruebas de balanceo',
        process: 'En proceso',
        day: 16
      },
      {
        id: 'FEB-CAL-001',
        equipmentId: 'BIO-17210',
        equipmentName: 'Cromatógrafo HPLC 1260 Infinity',
        equipmentCode: 'BIO-17210',
        type: 'Calibración',
        status: 'Pendiente',
        sede: 'San Vicente',
        location: 'Laboratorio de farmacocinética',
        service: 'Química clínica',
        technician: 'María González',
        priority: 'Alta',
        estimatedDuration: 6,
        cost: 620000,
        equipmentStatus: 'Operativo',
        brand: 'Agilent',
        model: '1260 Infinity II',
        serialNumber: 'AG-1260-5512',
        supplier: 'ChromLine',
        notes: 'Validación de gradiente y detección UV',
        process: 'Pendiente',
        day: 11
      },
      {
        id: 'FEB-COR-001',
        equipmentId: 'BIO-198765',
        equipmentName: 'Autoclave Tuttnauer 3870',
        equipmentCode: 'BIO-198765',
        type: 'Correctivo',
        status: 'En Proceso',
        sede: 'Prado',
        location: 'Central de esterilización',
        service: 'Soporte quirúrgico',
        technician: 'Proveedor externo',
        priority: 'Alta',
        estimatedDuration: 6,
        cost: 530000,
        equipmentStatus: 'Reparación',
        brand: 'Tuttnauer',
        model: '3870 EA',
        serialNumber: 'TT-3870-0911',
        supplier: 'SterilLab',
        notes: 'Fuga en sello de puerta',
        process: 'En proceso',
        day: 22
      }
    ]
  },
  {
    month: 2,
    events: [
      {
        id: 'MAR-PREV-001',
        equipmentId: 'BIO-16463',
        equipmentName: 'Citocentrífuga Cytospin 4',
        equipmentCode: 'BIO-16463',
        type: 'Preventivo',
        status: 'Pendiente',
        sede: 'San Vicente',
        location: 'Histoquímica',
        service: 'Patología',
        technician: 'Ana Rodríguez',
        priority: 'Media',
        estimatedDuration: 2,
        equipmentStatus: 'Operativo',
        brand: 'Thermo Fisher',
        model: 'Cytospin 4',
        serialNumber: 'CY4-2331',
        supplier: 'MicroTech',
        notes: 'Recambio de platos y revisión de motor',
        process: 'Pendiente',
        day: 8
      },
      {
        id: 'MAR-PREV-002',
        equipmentId: 'BIO-17110',
        equipmentName: 'Sistema de incubación CO₂ Heracell',
        equipmentCode: 'BIO-17110',
        type: 'Preventivo',
        status: 'En Proceso',
        sede: 'SIU',
        location: 'Sala de cultivos celulares',
        service: 'Investigación básica',
        technician: 'Pedro Jiménez',
        priority: 'Alta',
        estimatedDuration: 3,
        equipmentStatus: 'Operativo',
        brand: 'Thermo',
        model: 'Heracell VIOS 160i',
        serialNumber: 'HC-160-8820',
        supplier: 'IncubaLab',
        notes: 'Ajuste de sensores de CO₂ y humedad',
        process: 'En proceso',
        day: 21
      },
      {
        id: 'MAR-CAL-001',
        equipmentId: 'BIO-17120',
        equipmentName: 'Espectrofotómetro UV-Vis Cary 60',
        equipmentCode: 'BIO-17120',
        type: 'Calibración',
        status: 'Completado',
        sede: 'Prado',
        location: 'Laboratorio químico',
        service: 'Metrología',
        technician: 'Juan Quintero',
        priority: 'Media',
        estimatedDuration: 4,
        cost: 310000,
        equipmentStatus: 'Operativo',
        brand: 'Agilent',
        model: 'Cary 60',
        serialNumber: 'C60-5122',
        supplier: 'OpticLab',
        notes: 'Validación espectral completa',
        completionNotes: 'Se ajustó lámpara deuterio',
        reportNumber: 'INF-25-014',
        reportFile: 'INF-25-014.pdf',
        process: 'Completado',
        day: 14,
        completedOffsetDays: 2,
        completionTime: '13:15'
      },
      {
        id: 'MAR-COR-001',
        equipmentId: 'BIO-16022',
        equipmentName: 'Incubadora Heracell 150i',
        equipmentCode: 'BIO-16022',
        type: 'Correctivo',
        status: 'Vencido',
        sede: 'San Vicente',
        location: 'Laboratorio de cultivos',
        service: 'Biología celular',
        technician: 'Equipo interno',
        priority: 'Alta',
        estimatedDuration: 5,
        cost: 0,
        equipmentStatus: 'Reparación',
        brand: 'Thermo',
        model: 'Heracell 150i',
        serialNumber: 'H150-1199',
        supplier: 'Thermo Fisher',
        notes: 'Pendiente de repuesto para ventilador',
        process: 'Pendiente',
        day: 27
      }
    ]
  },
  {
    month: 3,
    events: [
      {
        id: 'APR-PREV-001',
        equipmentId: 'BIO-17550',
        equipmentName: 'Biorreactor BenchTop 5L',
        equipmentCode: 'BIO-17550',
        type: 'Preventivo',
        status: 'Pendiente',
        sede: 'SIU',
        location: 'Laboratorio de bioprocesos',
        service: 'Investigación avanzada',
        technician: 'Laura Herrera',
        priority: 'Alta',
        estimatedDuration: 4,
        equipmentStatus: 'Operativo',
        brand: 'Applikon',
        model: 'Applikon ez-Control',
        serialNumber: 'EZ5-2209',
        supplier: 'BioSyntec',
        notes: 'Verificación de sensores de pH y DO',
        process: 'Pendiente',
        day: 9
      },
      {
        id: 'APR-PREV-002',
        equipmentId: 'BIO-17610',
        equipmentName: 'Sistema de imagen digital Amersham',
        equipmentCode: 'BIO-17610',
        type: 'Preventivo',
        status: 'En Proceso',
        sede: 'Prado',
        location: 'Unidad de investigación clínica',
        service: 'Biología molecular',
        technician: 'Camila Ospina',
        priority: 'Media',
        estimatedDuration: 2,
        equipmentStatus: 'Operativo',
        brand: 'Cytiva',
        model: 'Amersham Imager 600',
        serialNumber: 'AMI-600-512',
        supplier: 'GE Healthcare',
        notes: 'Actualización de firmware y limpieza óptica',
        process: 'En proceso',
        day: 19
      },
      {
        id: 'APR-CAL-001',
        equipmentId: 'BIO-16742',
        equipmentName: 'Osciloscopio Tektronix MSO54',
        equipmentCode: 'BIO-16742',
        type: 'Calibración',
        status: 'Pendiente',
        sede: 'San Vicente',
        location: 'Taller biomédico',
        service: 'Ingeniería clínica',
        technician: 'Ricardo Díaz',
        priority: 'Media',
        estimatedDuration: 3,
        cost: 210000,
        equipmentStatus: 'Operativo',
        brand: 'Tektronix',
        model: 'MSO54',
        serialNumber: 'MSO54-9041',
        supplier: 'CalibraTec',
        notes: 'Requiere certificación anual',
        process: 'Pendiente',
        day: 13
      },
      {
        id: 'APR-COR-001',
        equipmentId: 'BIO-15090',
        equipmentName: 'Sistema HVAC sala limpia',
        equipmentCode: 'BIO-15090',
        type: 'Correctivo',
        status: 'En Proceso',
        sede: 'SIU',
        location: 'Sala limpia',
        service: 'Control ambiental',
        technician: 'Proveedor HVAC',
        priority: 'Alta',
        estimatedDuration: 8,
        cost: 820000,
        equipmentStatus: 'Reparación',
        brand: 'Trane',
        model: 'CleanAir 3000',
        serialNumber: 'HVAC-3000-77',
        supplier: 'AirFlow SAS',
        notes: 'Desbalance en flujo laminar',
        process: 'En proceso',
        day: 25
      }
    ]
  },
  {
    month: 4,
    events: [
      {
        id: 'MAY-PREV-001',
        equipmentId: 'BIO-16912',
        equipmentName: 'Cámara de flujo laminar Serie A',
        equipmentCode: 'BIO-16912',
        type: 'Preventivo',
        status: 'Pendiente',
        sede: 'San Vicente',
        location: 'Laboratorio de microbiología',
        service: 'Control de calidad',
        technician: 'David Rojas',
        priority: 'Media',
        estimatedDuration: 3,
        equipmentStatus: 'Operativo',
        brand: 'Thermo Scientific',
        model: 'Serie A2',
        serialNumber: 'A2-7711',
        supplier: 'LabCare',
        notes: 'Prueba de humo y validación de flujo',
        process: 'Pendiente',
        day: 7
      },
      {
        id: 'MAY-PREV-002',
        equipmentId: 'BIO-17440',
        equipmentName: 'Homogeneizador TissueLyser II',
        equipmentCode: 'BIO-17440',
        type: 'Preventivo',
        status: 'Pendiente',
        sede: 'Prado',
        location: 'Sala de biología molecular',
        service: 'Genética',
        technician: 'Juliana Gómez',
        priority: 'Baja',
        estimatedDuration: 2,
        equipmentStatus: 'Operativo',
        brand: 'Qiagen',
        model: 'TissueLyser II',
        serialNumber: 'TL2-6610',
        supplier: 'GenLab',
        notes: 'Revisión de soportes y lubricación',
        process: 'Pendiente',
        day: 18
      },
      {
        id: 'MAY-CAL-001',
        equipmentId: 'BIO-16330',
        equipmentName: 'Analizador de gases GEM5000',
        equipmentCode: 'BIO-16330',
        type: 'Calibración',
        status: 'En Proceso',
        sede: 'SIU',
        location: 'Unidad ambiental',
        service: 'Seguridad industrial',
        technician: 'Felipe Torres',
        priority: 'Media',
        estimatedDuration: 4,
        cost: 180000,
        equipmentStatus: 'Operativo',
        brand: 'Geotech',
        model: 'GEM5000',
        serialNumber: 'GEM-5000-190',
        supplier: 'EnviroTech',
        notes: 'Calibración multigás con cilindros patrón',
        process: 'En proceso',
        day: 14
      },
      {
        id: 'MAY-COR-001',
        equipmentId: 'BIO-15220',
        equipmentName: 'Bomba de vacío Edwards RV12',
        equipmentCode: 'BIO-15220',
        type: 'Correctivo',
        status: 'Completado',
        sede: 'San Vicente',
        location: 'Sala de instrumentación',
        service: 'Ingeniería clínica',
        technician: 'Héctor Parra',
        priority: 'Alta',
        estimatedDuration: 4,
        cost: 290000,
        equipmentStatus: 'Operativo',
        brand: 'Edwards',
        model: 'RV12',
        serialNumber: 'RV12-9901',
        supplier: 'VacuumPro',
        notes: 'Cambio de aceite y sellos',
        completionNotes: 'Vacío final dentro de especificaciones',
        reportNumber: 'INF-25-028',
        reportFile: 'INF-25-028.pdf',
        process: 'Completado',
        day: 23,
        completedOffsetDays: 1,
        completionTime: '15:20'
      }
    ]
  },
  {
    month: 5,
    events: [
      {
        id: 'JUN-PREV-001',
        equipmentId: 'BIO-17770',
        equipmentName: 'Microscopio confocal Zeiss LSM800',
        equipmentCode: 'BIO-17770',
        type: 'Preventivo',
        status: 'Pendiente',
        sede: 'SIU',
        location: 'Centro de imagenología',
        service: 'Investigación avanzada',
        technician: 'Carolina Vélez',
        priority: 'Alta',
        estimatedDuration: 5,
        equipmentStatus: 'Operativo',
        brand: 'Zeiss',
        model: 'LSM800',
        serialNumber: 'LSM-800-771',
        supplier: 'Zeiss Colombia',
        notes: 'Alineación de láser y limpieza óptica',
        process: 'Pendiente',
        day: 4
      },
      {
        id: 'JUN-PREV-002',
        equipmentId: 'BIO-17590',
        equipmentName: 'Sistema de electroforesis capilar',
        equipmentCode: 'BIO-17590',
        type: 'Preventivo',
        status: 'En Proceso',
        sede: 'Prado',
        location: 'Laboratorio clínico',
        service: 'Diagnóstico especializado',
        technician: 'Daniel Pardo',
        priority: 'Media',
        estimatedDuration: 3,
        equipmentStatus: 'Operativo',
        brand: 'Beckman Coulter',
        model: 'PA 800 Plus',
        serialNumber: 'PA800-561',
        supplier: 'AnalitLab',
        notes: 'Reemplazo de cartuchos y limpieza hidráulica',
        process: 'En proceso',
        day: 17
      },
      {
        id: 'JUN-CAL-001',
        equipmentId: 'BIO-16660',
        equipmentName: 'Termociclador Applied Biosystems 7500',
        equipmentCode: 'BIO-16660',
        type: 'Calibración',
        status: 'Completado',
        sede: 'San Vicente',
        location: 'Laboratorio PCR',
        service: 'Biología molecular',
        technician: 'Sebastián Jaramillo',
        priority: 'Media',
        estimatedDuration: 3,
        cost: 240000,
        equipmentStatus: 'Operativo',
        brand: 'Applied Biosystems',
        model: '7500 Fast',
        serialNumber: 'AB7500-1180',
        supplier: 'Thermo Fisher',
        notes: 'Verificación de rampas térmicas',
        completionNotes: 'Curvas de calibración dentro de tolerancia',
        reportNumber: 'INF-25-039',
        reportFile: 'INF-25-039.pdf',
        process: 'Completado',
        day: 10,
        completedOffsetDays: 1,
        completionTime: '11:45'
      },
      {
        id: 'JUN-COR-001',
        equipmentId: 'BIO-14880',
        equipmentName: 'Sistema de refrigeración criogénica',
        equipmentCode: 'BIO-14880',
        type: 'Correctivo',
        status: 'Pendiente',
        sede: 'SIU',
        location: 'Almacén biológico',
        service: 'Biobanco',
        technician: 'Proveedor externo',
        priority: 'Alta',
        estimatedDuration: 6,
        cost: 710000,
        equipmentStatus: 'Reparación',
        brand: 'Taylor-Wharton',
        model: 'K-Series',
        serialNumber: 'TW-K-311',
        supplier: 'CryoLife',
        notes: 'Fuga en línea de nitrógeno',
        process: 'Pendiente',
        day: 26
      }
    ]
  },
  {
    month: 6,
    events: [
      {
        id: 'JUL-PREV-001',
        equipmentId: 'BIO-15430',
        equipmentName: 'Cabina de bioseguridad Clase II',
        equipmentCode: 'BIO-15430',
        type: 'Preventivo',
        status: 'Vencido',
        sede: 'San Vicente',
        location: 'Laboratorio de micología',
        service: 'Microbiología',
        technician: 'Tatiana Botero',
        priority: 'Alta',
        estimatedDuration: 3,
        equipmentStatus: 'Operativo',
        brand: 'Labconco',
        model: 'Purifier Logic+',
        serialNumber: 'LOGIC-221',
        supplier: 'BioShield',
        notes: 'Reprogramar pruebas de contención',
        process: 'Pendiente',
        day: 3
      },
      {
        id: 'JUL-PREV-002',
        equipmentId: 'BIO-14550',
        equipmentName: 'Sistema UPS APC Symmetra PX',
        equipmentCode: 'BIO-14550',
        type: 'Preventivo',
        status: 'Pendiente',
        sede: 'SIU',
        location: 'Sala eléctrica',
        service: 'Infraestructura',
        technician: 'Mauricio Cataño',
        priority: 'Alta',
        estimatedDuration: 4,
        equipmentStatus: 'Operativo',
        brand: 'APC',
        model: 'Symmetra PX',
        serialNumber: 'SYM-PX-033',
        supplier: 'PowerTech',
        notes: 'Prueba de autonomía y revisión de módulos',
        process: 'Pendiente',
        day: 20
      },
      {
        id: 'JUL-CAL-001',
        equipmentId: 'BIO-17340',
        equipmentName: 'Detector de partículas Lighthouse',
        equipmentCode: 'BIO-17340',
        type: 'Calibración',
        status: 'Pendiente',
        sede: 'Prado',
        location: 'Sala limpia',
        service: 'Control ambiental',
        technician: 'Ingrid Duque',
        priority: 'Media',
        estimatedDuration: 3,
        cost: 195000,
        equipmentStatus: 'Operativo',
        brand: 'Lighthouse',
        model: 'Handheld 3016',
        serialNumber: 'LH-3016-09',
        supplier: 'EnviroSense',
        notes: 'Se requiere certificado ISO 21501',
        process: 'Pendiente',
        day: 11
      },
      {
        id: 'JUL-COR-001',
        equipmentId: 'BIO-14001',
        equipmentName: 'Compresor principal Atlas Copco',
        equipmentCode: 'BIO-14001',
        type: 'Correctivo',
        status: 'En Proceso',
        sede: 'San Vicente',
        location: 'Planta física',
        service: 'Infraestructura',
        technician: 'Proveedor Atlas Copco',
        priority: 'Alta',
        estimatedDuration: 7,
        cost: 940000,
        equipmentStatus: 'Reparación',
        brand: 'Atlas Copco',
        model: 'GA90+',
        serialNumber: 'GA90-511',
        supplier: 'Atlas Copco Colombia',
        notes: 'Vibración en etapa 2',
        process: 'En proceso',
        day: 28
      }
    ]
  },
  {
    month: 7,
    events: [
      {
        id: 'AUG-PREV-001',
        equipmentId: 'BIO-17620',
        equipmentName: 'Sistema de imagen digital iBright',
        equipmentCode: 'BIO-17620',
        type: 'Preventivo',
        status: 'Pendiente',
        sede: 'Prado',
        location: 'Unidad de genómica',
        service: 'Investigación clínica',
        technician: 'Sara Restrepo',
        priority: 'Media',
        estimatedDuration: 2,
        equipmentStatus: 'Operativo',
        brand: 'Thermo Fisher',
        model: 'iBright FL1500',
        serialNumber: 'IB-1500-44',
        supplier: 'Thermo Fisher',
        notes: 'Calibración de filtros de fluorescencia',
        process: 'Pendiente',
        day: 9
      },
      {
        id: 'AUG-PREV-002',
        equipmentId: 'BIO-17510',
        equipmentName: 'Plataforma automatizada ELISA DS2',
        equipmentCode: 'BIO-17510',
        type: 'Preventivo',
        status: 'En Proceso',
        sede: 'San Vicente',
        location: 'Laboratorio clínico',
        service: 'Inmunología',
        technician: 'Nelson Rivas',
        priority: 'Alta',
        estimatedDuration: 3,
        equipmentStatus: 'Operativo',
        brand: 'Dynex',
        model: 'DS2',
        serialNumber: 'DS2-3311',
        supplier: 'ImmunoLab',
        notes: 'Reemplazo de agujas y limpieza de sistema hidráulico',
        process: 'En proceso',
        day: 18
      },
      {
        id: 'AUG-CAL-001',
        equipmentId: 'BIO-16210',
        equipmentName: 'Manómetro digital Fluke 700',
        equipmentCode: 'BIO-16210',
        type: 'Calibración',
        status: 'Completado',
        sede: 'SIU',
        location: 'Taller biomédico',
        service: 'Ingeniería clínica',
        technician: 'Ricardo Díaz',
        priority: 'Media',
        estimatedDuration: 2,
        cost: 120000,
        equipmentStatus: 'Operativo',
        brand: 'Fluke',
        model: '700G',
        serialNumber: '700G-1811',
        supplier: 'CalibraTec',
        notes: 'Certificación anual completa',
        completionNotes: 'Ajuste mínimo requerido',
        reportNumber: 'INF-25-052',
        reportFile: 'INF-25-052.pdf',
        process: 'Completado',
        day: 6,
        completedOffsetDays: 1,
        completionTime: '10:20'
      },
      {
        id: 'AUG-COR-001',
        equipmentId: 'BIO-14770',
        equipmentName: 'Generador de vapor Fulton',
        equipmentCode: 'BIO-14770',
        type: 'Correctivo',
        status: 'Pendiente',
        sede: 'San Vicente',
        location: 'Planta de servicios',
        service: 'Infraestructura',
        technician: 'Proveedor externo',
        priority: 'Alta',
        estimatedDuration: 5,
        cost: 560000,
        equipmentStatus: 'Reparación',
        brand: 'Fulton',
        model: 'VSRT-40',
        serialNumber: 'VSRT-40-18',
        supplier: 'SteamTech',
        notes: 'Oscilación de presión durante picos',
        process: 'Pendiente',
        day: 27
      }
    ]
  },
  {
    month: 8,
    events: [
      {
        id: 'SEP-PREV-001',
        equipmentId: 'BIO-17450',
        equipmentName: 'Lector de placas SpectraMax i3x',
        equipmentCode: 'BIO-17450',
        type: 'Preventivo',
        status: 'En Proceso',
        sede: 'Prado',
        location: 'Unidad de biotecnología',
        service: 'Investigación aplicada',
        technician: 'Valentina Ruiz',
        priority: 'Media',
        estimatedDuration: 3,
        equipmentStatus: 'Operativo',
        brand: 'Molecular Devices',
        model: 'SpectraMax i3x',
        serialNumber: 'SMX-2331',
        supplier: 'BioSense',
        notes: 'Ajuste de lámparas y verificación de filtros',
        process: 'En proceso',
        day: 12
      },
      {
        id: 'SEP-PREV-002',
        equipmentId: 'BIO-17310',
        equipmentName: 'Homogeneizador TissueLyser II',
        equipmentCode: 'BIO-17310',
        type: 'Preventivo',
        status: 'Pendiente',
        sede: 'San Vicente',
        location: 'Laboratorio central',
        service: 'Patología',
        technician: 'Juliana Gómez',
        priority: 'Baja',
        estimatedDuration: 2,
        equipmentStatus: 'Operativo',
        brand: 'Qiagen',
        model: 'TissueLyser II',
        serialNumber: 'TL2-7720',
        supplier: 'GenLab',
        notes: 'Inspección de soportes y tapas',
        process: 'Pendiente',
        day: 25
      },
      {
        id: 'SEP-CAL-001',
        equipmentId: 'BIO-14990',
        equipmentName: 'Medidor de pH Metrohm 913',
        equipmentCode: 'BIO-14990',
        type: 'Calibración',
        status: 'Pendiente',
        sede: 'SIU',
        location: 'Laboratorio químico',
        service: 'Calidad de agua',
        technician: 'Felipe Torres',
        priority: 'Media',
        estimatedDuration: 2,
        cost: 95000,
        equipmentStatus: 'Operativo',
        brand: 'Metrohm',
        model: '913 pH Meter',
        serialNumber: '913-5511',
        supplier: 'ChemLab',
        notes: 'Se requieren buffers certificados',
        process: 'Pendiente',
        day: 7
      },
      {
        id: 'SEP-COR-001',
        equipmentId: 'BIO-14580',
        equipmentName: 'Sistema UPS Galaxy VS',
        equipmentCode: 'BIO-14580',
        type: 'Correctivo',
        status: 'En Proceso',
        sede: 'Prado',
        location: 'Sala eléctrica',
        service: 'Infraestructura',
        technician: 'Proveedor Schneider',
        priority: 'Alta',
        estimatedDuration: 6,
        cost: 630000,
        equipmentStatus: 'Reparación',
        brand: 'Schneider',
        model: 'Galaxy VS',
        serialNumber: 'GVS-2291',
        supplier: 'PowerTech',
        notes: 'Batería secundaria fuera de rango',
        process: 'En proceso',
        day: 19
      }
    ]
  },
  {
    month: 9,
    events: [
      {
        id: 'OCT-PREV-001',
        equipmentId: 'BIO-17880',
        equipmentName: 'Analizador hematológico Sysmex XN',
        equipmentCode: 'BIO-17880',
        type: 'Preventivo',
        status: 'Pendiente',
        sede: 'San Vicente',
        location: 'Laboratorio hematología',
        service: 'Diagnóstico clínico',
        technician: 'Kelly Henao',
        priority: 'Alta',
        estimatedDuration: 4,
        equipmentStatus: 'Operativo',
        brand: 'Sysmex',
        model: 'XN-1000',
        serialNumber: 'XN-1000-882',
        supplier: 'Sysmex Colombia',
        notes: 'Recambio de reactivos y limpieza interna',
        process: 'Pendiente',
        day: 6
      },
      {
        id: 'OCT-PREV-002',
        equipmentId: 'BIO-17810',
        equipmentName: 'Equipo de coagulación ACL TOP 550',
        equipmentCode: 'BIO-17810',
        type: 'Preventivo',
        status: 'En Proceso',
        sede: 'Prado',
        location: 'Laboratorio clínico',
        service: 'Coagulación',
        technician: 'Oscar Lema',
        priority: 'Media',
        estimatedDuration: 3,
        equipmentStatus: 'Operativo',
        brand: 'Instrumentation Laboratory',
        model: 'ACL TOP 550',
        serialNumber: 'ACL-550-202',
        supplier: 'Werfen',
        notes: 'Ajuste de módulos de pipeteo',
        process: 'En proceso',
        day: 17
      },
      {
        id: 'OCT-CAL-001',
        equipmentId: 'BIO-15110',
        equipmentName: 'Cámara climática Binder MKF',
        equipmentCode: 'BIO-15110',
        type: 'Calibración',
        status: 'En Proceso',
        sede: 'SIU',
        location: 'Unidad de estabilidad',
        service: 'Calidad farmacéutica',
        technician: 'Luisa Arango',
        priority: 'Media',
        estimatedDuration: 4,
        cost: 330000,
        equipmentStatus: 'Operativo',
        brand: 'Binder',
        model: 'MKF 240',
        serialNumber: 'MKF-240-77',
        supplier: 'EnviroSense',
        notes: 'Ensayo de estabilidad 40°C/75%HR',
        process: 'En proceso',
        day: 11
      },
      {
        id: 'OCT-COR-001',
        equipmentId: 'BIO-14220',
        equipmentName: 'Sistema de aire comprimido Kaeser',
        equipmentCode: 'BIO-14220',
        type: 'Correctivo',
        status: 'Vencido',
        sede: 'San Vicente',
        location: 'Planta física',
        service: 'Infraestructura',
        technician: 'Equipo interno',
        priority: 'Alta',
        estimatedDuration: 6,
        cost: 0,
        equipmentStatus: 'Reparación',
        brand: 'Kaeser',
        model: 'CSD 105',
        serialNumber: 'CSD-105-44',
        supplier: 'AirFlow SAS',
        notes: 'Pendiente llegada de válvula moduladora',
        process: 'Pendiente',
        day: 28
      }
    ]
  },
  {
    month: 10,
    events: [
      {
        id: 'NOV-PREV-001',
        equipmentId: 'BIO-16467',
        equipmentName: 'Estación de inclusión Arcadia',
        equipmentCode: 'BIO-16467',
        type: 'Preventivo',
        status: 'Pendiente',
        sede: 'San Vicente',
        location: 'Histoquímica',
        service: 'Patología',
        technician: 'Martha Londoño',
        priority: 'Alta',
        estimatedDuration: 2,
        equipmentStatus: 'Operativo',
        brand: 'Leica',
        model: 'Arcadia H',
        serialNumber: 'ARH-5512',
        supplier: 'Leica Biosystems',
        notes: 'Revisión de temperatura y boquillas',
        process: 'Pendiente',
        day: 4
      },
      {
        id: 'NOV-PREV-002',
        equipmentId: 'BIO-17690',
        equipmentName: 'Criopreservador Cryomed',
        equipmentCode: 'BIO-17690',
        type: 'Preventivo',
        status: 'En Proceso',
        sede: 'SIU',
        location: 'Biobanco',
        service: 'Investigación avanzada',
        technician: 'Cristian Vélez',
        priority: 'Media',
        estimatedDuration: 3,
        equipmentStatus: 'Operativo',
        brand: 'Cryomed',
        model: 'Controlled Rate Freezer',
        serialNumber: 'CRF-1181',
        supplier: 'CryoLife',
        notes: 'Validación de curvas de congelación',
        process: 'En proceso',
        day: 15
      },
      {
        id: 'NOV-CAL-001',
        equipmentId: 'BIO-17950',
        equipmentName: 'Detector de masas Q Exactive',
        equipmentCode: 'BIO-17950',
        type: 'Calibración',
        status: 'Pendiente',
        sede: 'Prado',
        location: 'Plataforma ómica',
        service: 'Metabolómica',
        technician: 'Laura Herrera',
        priority: 'Alta',
        estimatedDuration: 6,
        cost: 780000,
        equipmentStatus: 'Operativo',
        brand: 'Thermo Fisher',
        model: 'Q Exactive',
        serialNumber: 'QE-4411',
        supplier: 'Thermo Fisher',
        notes: 'Calibración externa con mix estándar',
        process: 'Pendiente',
        day: 9
      },
      {
        id: 'NOV-COR-001',
        equipmentId: 'BIO-14440',
        equipmentName: 'Sistema de vacío central Busch',
        equipmentCode: 'BIO-14440',
        type: 'Correctivo',
        status: 'En Proceso',
        sede: 'San Vicente',
        location: 'Planta física',
        service: 'Infraestructura',
        technician: 'Proveedor Busch',
        priority: 'Alta',
        estimatedDuration: 5,
        cost: 610000,
        equipmentStatus: 'Reparación',
        brand: 'Busch',
        model: 'R5 RA 0630',
        serialNumber: 'R5-0630-09',
        supplier: 'Busch Colombia',
        notes: 'Presión de vacío inestable',
        process: 'En proceso',
        day: 23
      }
    ]
  },
  {
    month: 11,
    events: [
      {
        id: 'DEC-PREV-001',
        equipmentId: 'BIO-15330',
        equipmentName: 'Congelador -80°C Thermo TSX',
        equipmentCode: 'BIO-15330',
        type: 'Preventivo',
        status: 'En Proceso',
        sede: 'Prado',
        location: 'Biobanco',
        service: 'Investigación clínica',
        technician: 'Daniela Naranjo',
        priority: 'Alta',
        estimatedDuration: 3,
        equipmentStatus: 'Operativo',
        brand: 'Thermo Scientific',
        model: 'TSX600',
        serialNumber: 'TSX-600-51',
        supplier: 'Thermo Fisher',
        notes: 'Revisión de sellos y limpieza de serpentines',
        process: 'En proceso',
        day: 8
      },
      {
        id: 'DEC-PREV-002',
        equipmentId: 'BIO-15280',
        equipmentName: 'Liofilizador VirTis Advantage',
        equipmentCode: 'BIO-15280',
        type: 'Preventivo',
        status: 'Pendiente',
        sede: 'San Vicente',
        location: 'Laboratorio farmacéutico',
        service: 'Desarrollo galénico',
        technician: 'Eliana Múnera',
        priority: 'Media',
        estimatedDuration: 4,
        equipmentStatus: 'Operativo',
        brand: 'VirTis',
        model: 'Advantage Plus',
        serialNumber: 'VAP-2210',
        supplier: 'SP Industries',
        notes: 'Cambio de aceite y verificación de vacío',
        process: 'Pendiente',
        day: 19
      },
      {
        id: 'DEC-CAL-001',
        equipmentId: 'BIO-14660',
        equipmentName: 'Báscula industrial Avery',
        equipmentCode: 'BIO-14660',
        type: 'Calibración',
        status: 'Pendiente',
        sede: 'SIU',
        location: 'Almacén central',
        service: 'Logística',
        technician: 'Felipe Torres',
        priority: 'Media',
        estimatedDuration: 2,
        cost: 85000,
        equipmentStatus: 'Operativo',
        brand: 'Avery Weigh-Tronix',
        model: 'ZP218',
        serialNumber: 'ZP218-551',
        supplier: 'Pesco SAS',
        notes: 'Requiere masas patrón de 200 kg',
        process: 'Pendiente',
        day: 4
      },
      {
        id: 'DEC-COR-001',
        equipmentId: 'BIO-14110',
        equipmentName: 'Sistema eléctrico redundante',
        equipmentCode: 'BIO-14110',
        type: 'Correctivo',
        status: 'Pendiente',
        sede: 'San Vicente',
        location: 'Sala eléctrica',
        service: 'Infraestructura',
        technician: 'Equipo interno',
        priority: 'Alta',
        estimatedDuration: 6,
        cost: 450000,
        equipmentStatus: 'Reparación',
        brand: 'Schneider',
        model: 'PRISMA',
        serialNumber: 'PR-8820',
        supplier: 'ElectroTech',
        notes: 'Requiere reemplazo de contactores críticos',
        process: 'Pendiente',
        day: 27
      }
    ]
  }
]

function formatDate(year: number, month: number, day: number) {
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const safeDay = Math.min(day, daysInMonth)
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(safeDay).padStart(2, '0')}`
}

function generateMockEvents(): MaintenanceEvent[] {
  const events: MaintenanceEvent[] = []

  monthlyEventTemplates.forEach(({ month, events: templates }) => {
    templates.forEach((template) => {
      const { day, completedOffsetDays, completionTime, ...rest } = template
      const scheduledDate = formatDate(currentYear, month, day)
      const event: MaintenanceEvent = {
        ...rest,
        scheduledDate
      }

      if (typeof completedOffsetDays === 'number') {
        const completedDate = formatDate(currentYear, month, day + completedOffsetDays)
        event.completedDate = completedDate
        event.exactCompletionDate = `${completedDate}T${completionTime ?? '10:00'}`
      }

      events.push(event)
    })
  })

  return events
}

const mockMaintenanceEvents: MaintenanceEvent[] = generateMockEvents()

export const maintenanceApi = {
  // Obtener eventos de mantenimiento con filtros
  async getMaintenanceEvents(filters: MaintenanceFilters): Promise<MaintenanceEvent[]> {
    await new Promise(resolve => setTimeout(resolve, 50))

    let filtered = [...mockMaintenanceEvents]

    // Filtrar por mes y año
    filtered = filtered.filter(event => {
      const eventDate = new Date(event.scheduledDate)
      return eventDate.getMonth() === filters.selectedMonth &&
             eventDate.getFullYear() === filters.selectedYear
    })

    // Filtrar por tipo
    if (filters.selectedType !== 'all') {
      filtered = filtered.filter(event => event.type === filters.selectedType)
    }

    // Filtrar por estado
    if (filters.selectedStatus !== 'all') {
      filtered = filtered.filter(event => event.status === filters.selectedStatus)
    }

    // Filtrar por sede
    if (filters.selectedSede && filters.selectedSede !== 'all') {
      filtered = filtered.filter(event => event.sede === filters.selectedSede)
    }

    // Búsqueda por texto
    if (filters.searchQuery.trim()) {
      const query = filters.searchQuery.toLowerCase()
      filtered = filtered.filter(event =>
        event.equipmentName.toLowerCase().includes(query) ||
        event.equipmentCode.toLowerCase().includes(query) ||
        event.technician?.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query)
      )
    }

    const typeOrder: Record<MaintenanceEvent['type'], number> = {
      Preventivo: 0,
      'Calibración': 1,
      Correctivo: 2
    }

    return filtered.sort((a, b) => {
      if (a.type === b.type) {
        return a.scheduledDate.localeCompare(b.scheduledDate)
      }
      return typeOrder[a.type] - typeOrder[b.type]
    })
  },

  // Obtener estadísticas del mes
  async getMonthlyStats(month: number, year: number): Promise<MonthlyStats> {
    await new Promise(resolve => setTimeout(resolve, 200))

    const events = mockMaintenanceEvents.filter(event => {
      const eventDate = new Date(event.scheduledDate)
      return eventDate.getMonth() === month && eventDate.getFullYear() === year
    })

    return {
      total: events.length,
      preventivo: events.filter(e => e.type === 'Preventivo').length,
      correctivo: events.filter(e => e.type === 'Correctivo').length,
      calibracion: events.filter(e => e.type === 'Calibración').length,
      pendiente: events.filter(e => e.status === 'Pendiente').length,
      enProceso: events.filter(e => e.status === 'En Proceso').length,
      completado: events.filter(e => e.status === 'Completado').length,
      vencido: events.filter(e => e.status === 'Vencido').length
    }
  },

  // Obtener detalles de un evento específico
  async getMaintenanceEvent(id: string): Promise<MaintenanceEvent | null> {
    await new Promise(resolve => setTimeout(resolve, 200))
    return mockMaintenanceEvents.find(event => event.id === id) || null
  },

  // Crear nuevo evento de mantenimiento
  async createMaintenanceEvent(event: Omit<MaintenanceEvent, 'id'>): Promise<MaintenanceEvent> {
    await new Promise(resolve => setTimeout(resolve, 300))
    const newEvent: MaintenanceEvent = {
      ...event,
      id: `${Date.now()}`
    }
    mockMaintenanceEvents.push(newEvent)
    return newEvent
  },

  // Actualizar evento de mantenimiento
  async updateMaintenanceEvent(id: string, updates: Partial<MaintenanceEvent>): Promise<MaintenanceEvent> {
    await new Promise(resolve => setTimeout(resolve, 300))
    const index = mockMaintenanceEvents.findIndex(event => event.id === id)
    if (index === -1) throw new Error('Evento no encontrado')
    
    mockMaintenanceEvents[index] = { ...mockMaintenanceEvents[index], ...updates }
    return mockMaintenanceEvents[index]
  },

  // Eliminar evento de mantenimiento
  async deleteMaintenanceEvent(id: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 300))
    const index = mockMaintenanceEvents.findIndex(event => event.id === id)
    if (index !== -1) {
      mockMaintenanceEvents.splice(index, 1)
    }
  }
}


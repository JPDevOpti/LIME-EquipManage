"use client"

import { useState } from 'react'
import type { BillingFilters, BillingRecord } from '@/features/statistics/types'
import { defaultFilters, filterFields } from '@/features/statistics/data/constants'
import { StatisticsFiltersPanel } from '@/features/statistics/components/statistics-filters-panel'
import { StatisticsTablePanel } from '@/features/statistics/components/statistics-table-panel'

const billingRecords: BillingRecord[] = [
  // Enero 2025
  { id: '1', month: '2025-01', date: '2025-01-08', service: 'Quirófano', provider: 'biocontrol', providerName: 'BioControl', maintenanceType: 'preventivo', equipmentCode: 'EQ-1450', equipmentName: 'Incubadora neonatal Giraffe', cost: 4200000 },
  { id: '2', month: '2025-01', date: '2025-01-15', service: 'Quirófano', provider: 'biocontrol', providerName: 'BioControl', maintenanceType: 'calibracion', equipmentCode: 'EQ-1505', equipmentName: 'Bomba de infusión Alaris', cost: 890000 },
  { id: '3', month: '2025-01', date: '2025-01-22', service: 'Farmacia', provider: 'tecnosalud', providerName: 'Tecnosalud', maintenanceType: 'preventivo', equipmentCode: 'EQ-1180', equipmentName: 'Monitor Mindray BeneVision', cost: 2650000 },
  { id: '4', month: '2025-01', date: '2025-01-28', service: 'Imágenes Diagnósticas', provider: 'medequipos', providerName: 'MedEquipos', maintenanceType: 'correctivo', equipmentCode: 'EQ-1624', equipmentName: 'Rayos X digital Siemens', cost: 6400000 },
  
  // Febrero 2025
  { id: '5', month: '2025-02', date: '2025-02-03', service: 'Quirófano', provider: 'biocontrol', providerName: 'BioControl', maintenanceType: 'correctivo', equipmentCode: 'EQ-1302', equipmentName: 'Ventilador Puritan Bennett 980', cost: 6800000 },
  { id: '6', month: '2025-02', date: '2025-02-11', service: 'Quirófano', provider: 'biocontrol', providerName: 'BioControl', maintenanceType: 'preventivo', equipmentCode: 'EQ-1420', equipmentName: 'Cuna de calor radiante', cost: 3100000 },
  { id: '7', month: '2025-02', date: '2025-02-18', service: 'Farmacia', provider: 'tecnosalud', providerName: 'Tecnosalud', maintenanceType: 'calibracion', equipmentCode: 'EQ-1708', equipmentName: 'Termómetro infrarrojo Fluke', cost: 450000 },
  { id: '8', month: '2025-02', date: '2025-02-25', service: 'Quirófano', provider: 'externo', providerName: 'Proveedor externo', maintenanceType: 'preventivo', equipmentCode: 'EQ-1701', equipmentName: 'Autoclave Tuttnauer 3870', cost: 1950000 },
  
  // Marzo 2025
  { id: '9', month: '2025-03', date: '2025-03-05', service: 'Farmacia', provider: 'biocontrol', providerName: 'BioControl', maintenanceType: 'calibracion', equipmentCode: 'EQ-1510', equipmentName: 'Bomba de infusión Hospira Plum', cost: 520000 },
  { id: '10', month: '2025-03', date: '2025-03-12', service: 'Quirófano', provider: 'biocontrol', providerName: 'BioControl', maintenanceType: 'preventivo', equipmentCode: 'EQ-1305', equipmentName: 'Ventilador Servo-i Maquet', cost: 5200000 },
  { id: '11', month: '2025-03', date: '2025-03-19', service: 'Farmacia', provider: 'tecnosalud', providerName: 'Tecnosalud', maintenanceType: 'correctivo', equipmentCode: 'EQ-1320', equipmentName: 'Desfibrilador Zoll X Series', cost: 4100000 },
  { id: '12', month: '2025-03', date: '2025-03-26', service: 'Quirófano', provider: 'medequipos', providerName: 'MedEquipos', maintenanceType: 'preventivo', equipmentCode: 'EQ-1710', equipmentName: 'Mesa de anestesia Dräger Perseus', cost: 3300000 },
  
  // Abril 2025
  { id: '13', month: '2025-04', date: '2025-04-02', service: 'Quirófano', provider: 'biocontrol', providerName: 'BioControl', maintenanceType: 'correctivo', equipmentCode: 'EQ-1450', equipmentName: 'Incubadora neonatal Giraffe', cost: 3800000 },
  { id: '14', month: '2025-04', date: '2025-04-09', service: 'Farmacia', provider: 'tecnosalud', providerName: 'Tecnosalud', maintenanceType: 'preventivo', equipmentCode: 'EQ-1185', equipmentName: 'Monitor multiparamétrico Philips IntelliVue', cost: 2900000 },
  { id: '15', month: '2025-04', date: '2025-04-16', service: 'Farmacia', provider: 'tecnosalud', providerName: 'Tecnosalud', maintenanceType: 'calibracion', equipmentCode: 'EQ-1515', equipmentName: 'Bomba de infusión volumétrica B.Braun', cost: 680000 },
  { id: '16', month: '2025-04', date: '2025-04-23', service: 'Imágenes Diagnósticas', provider: 'medequipos', providerName: 'MedEquipos', maintenanceType: 'correctivo', equipmentCode: 'EQ-1630', equipmentName: 'Equipo de ultrasonido GE Voluson', cost: 7200000 },
  { id: '17', month: '2025-04', date: '2025-04-30', service: 'Laboratorio Clínico', provider: 'externo', providerName: 'Proveedor externo', maintenanceType: 'calibracion', equipmentCode: 'EQ-1520', equipmentName: 'Balanza de precisión Ohaus', cost: 470000 },
  
  // Mayo 2025
  { id: '18', month: '2025-05', date: '2025-05-07', service: 'Quirófano', provider: 'biocontrol', providerName: 'BioControl', maintenanceType: 'preventivo', equipmentCode: 'EQ-1308', equipmentName: 'Respirador Neonatal Babylog 8000', cost: 4500000 },
  { id: '19', month: '2025-05', date: '2025-05-14', service: 'Farmacia', provider: 'biocontrol', providerName: 'BioControl', maintenanceType: 'calibracion', equipmentCode: 'EQ-1525', equipmentName: 'Bomba de jeringa Terumo TE-331', cost: 550000 },
  { id: '20', month: '2025-05', date: '2025-05-21', service: 'Farmacia', provider: 'tecnosalud', providerName: 'Tecnosalud', maintenanceType: 'correctivo', equipmentCode: 'EQ-1180', equipmentName: 'Monitor Mindray BeneVision', cost: 2400000 },
  { id: '21', month: '2025-05', date: '2025-05-28', service: 'Quirófano', provider: 'medequipos', providerName: 'MedEquipos', maintenanceType: 'preventivo', equipmentCode: 'EQ-1715', equipmentName: 'Máquina de anestesia Datex Ohmeda', cost: 3800000 },
  { id: '22', month: '2025-05', date: '2025-05-30', service: 'Laboratorio Clínico', provider: 'externo', providerName: 'Proveedor externo', maintenanceType: 'correctivo', equipmentCode: 'EQ-1660', equipmentName: 'Centrífuga Eppendorf 5804', cost: 2100000 },
  
  // Junio 2025
  { id: '23', month: '2025-06', date: '2025-06-04', service: 'Quirófano', provider: 'biocontrol', providerName: 'BioControl', maintenanceType: 'correctivo', equipmentCode: 'EQ-1302', equipmentName: 'Ventilador Puritan Bennett 980', cost: 5900000 },
  { id: '24', month: '2025-06', date: '2025-06-11', service: 'Quirófano', provider: 'biocontrol', providerName: 'BioControl', maintenanceType: 'preventivo', equipmentCode: 'EQ-1455', equipmentName: 'Incubadora de transporte Dräger', cost: 3700000 },
  { id: '25', month: '2025-06', date: '2025-06-18', service: 'Farmacia', provider: 'tecnosalud', providerName: 'Tecnosalud', maintenanceType: 'calibracion', equipmentCode: 'EQ-1505', equipmentName: 'Bomba de infusión Alaris', cost: 980000 },
  { id: '26', month: '2025-06', date: '2025-06-25', service: 'Farmacia', provider: 'tecnosalud', providerName: 'Tecnosalud', maintenanceType: 'preventivo', equipmentCode: 'EQ-1325', equipmentName: 'Desfibrilador Lifepak 15', cost: 3200000 },
  { id: '27', month: '2025-06', date: '2025-06-30', service: 'Imágenes Diagnósticas', provider: 'medequipos', providerName: 'MedEquipos', maintenanceType: 'correctivo', equipmentCode: 'EQ-1750', equipmentName: 'Monitor fetal Philips Avalon', cost: 2800000 },
  
  // Julio 2025
  { id: '28', month: '2025-07', date: '2025-07-02', service: 'Quirófano', provider: 'biocontrol', providerName: 'BioControl', maintenanceType: 'preventivo', equipmentCode: 'EQ-1310', equipmentName: 'Ventilador Hamilton C6', cost: 4800000 },
  { id: '29', month: '2025-07', date: '2025-07-09', service: 'Farmacia', provider: 'tecnosalud', providerName: 'Tecnosalud', maintenanceType: 'correctivo', equipmentCode: 'EQ-1190', equipmentName: 'Monitor de signos vitales Welch Allyn', cost: 1950000 },
  { id: '30', month: '2025-07', date: '2025-07-16', service: 'Farmacia', provider: 'tecnosalud', providerName: 'Tecnosalud', maintenanceType: 'calibracion', equipmentCode: 'EQ-1710', equipmentName: 'Termómetro digital Braun', cost: 380000 },
  { id: '31', month: '2025-07', date: '2025-07-23', service: 'Imágenes Diagnósticas', provider: 'medequipos', providerName: 'MedEquipos', maintenanceType: 'preventivo', equipmentCode: 'EQ-1625', equipmentName: 'Equipo de rayos X portátil Carestream', cost: 4200000 },
  { id: '32', month: '2025-07', date: '2025-07-30', service: 'Laboratorio Clínico', provider: 'externo', providerName: 'Proveedor externo', maintenanceType: 'calibracion', equipmentCode: 'EQ-1665', equipmentName: 'Analizador de gases ABL90 Radiometer', cost: 1850000 },
  
  // Agosto 2025
  { id: '33', month: '2025-08', date: '2025-08-06', service: 'Farmacia', provider: 'biocontrol', providerName: 'BioControl', maintenanceType: 'calibracion', equipmentCode: 'EQ-1530', equipmentName: 'Bomba de nutrición Kangaroo', cost: 620000 },
  { id: '34', month: '2025-08', date: '2025-08-13', service: 'Quirófano', provider: 'biocontrol', providerName: 'BioControl', maintenanceType: 'correctivo', equipmentCode: 'EQ-1450', equipmentName: 'Incubadora neonatal Giraffe', cost: 4100000 },
  { id: '35', month: '2025-08', date: '2025-08-20', service: 'Farmacia', provider: 'tecnosalud', providerName: 'Tecnosalud', maintenanceType: 'preventivo', equipmentCode: 'EQ-1320', equipmentName: 'Desfibrilador Zoll X Series', cost: 2850000 },
  { id: '36', month: '2025-08', date: '2025-08-27', service: 'Quirófano', provider: 'medequipos', providerName: 'MedEquipos', maintenanceType: 'correctivo', equipmentCode: 'EQ-1710', equipmentName: 'Mesa de anestesia Dräger Perseus', cost: 3500000 },
  { id: '37', month: '2025-08', date: '2025-08-29', service: 'Imágenes Diagnósticas', provider: 'medequipos', providerName: 'MedEquipos', maintenanceType: 'calibracion', equipmentCode: 'EQ-1755', equipmentName: 'Doppler fetal Huntleigh', cost: 480000 },
  
  // Septiembre 2025
  { id: '38', month: '2025-09', date: '2025-09-03', service: 'Quirófano', provider: 'biocontrol', providerName: 'BioControl', maintenanceType: 'preventivo', equipmentCode: 'EQ-1305', equipmentName: 'Ventilador Servo-i Maquet', cost: 5100000 },
  { id: '39', month: '2025-09', date: '2025-09-10', service: 'Farmacia', provider: 'biocontrol', providerName: 'BioControl', maintenanceType: 'correctivo', equipmentCode: 'EQ-1510', equipmentName: 'Bomba de infusión Hospira Plum', cost: 1850000 },
  { id: '40', month: '2025-09', date: '2025-09-17', service: 'Farmacia', provider: 'tecnosalud', providerName: 'Tecnosalud', maintenanceType: 'calibracion', equipmentCode: 'EQ-1185', equipmentName: 'Monitor multiparamétrico Philips IntelliVue', cost: 920000 },
  { id: '41', month: '2025-09', date: '2025-09-24', service: 'Imágenes Diagnósticas', provider: 'medequipos', providerName: 'MedEquipos', maintenanceType: 'preventivo', equipmentCode: 'EQ-1630', equipmentName: 'Equipo de ultrasonido GE Voluson', cost: 4500000 },
  { id: '42', month: '2025-09', date: '2025-09-30', service: 'Quirófano', provider: 'externo', providerName: 'Proveedor externo', maintenanceType: 'correctivo', equipmentCode: 'EQ-1701', equipmentName: 'Autoclave Tuttnauer 3870', cost: 2300000 },
  
  // Octubre 2025
  { id: '43', month: '2025-10', date: '2025-10-01', service: 'Quirófano', provider: 'biocontrol', providerName: 'BioControl', maintenanceType: 'calibracion', equipmentCode: 'EQ-1505', equipmentName: 'Bomba de infusión Alaris', cost: 890000 },
  { id: '44', month: '2025-10', date: '2025-10-08', service: 'Quirófano', provider: 'biocontrol', providerName: 'BioControl', maintenanceType: 'preventivo', equipmentCode: 'EQ-1420', equipmentName: 'Cuna de calor radiante', cost: 2950000 },
  { id: '45', month: '2025-10', date: '2025-10-15', service: 'Farmacia', provider: 'tecnosalud', providerName: 'Tecnosalud', maintenanceType: 'correctivo', equipmentCode: 'EQ-1180', equipmentName: 'Monitor Mindray BeneVision', cost: 2600000 },
  { id: '46', month: '2025-10', date: '2025-10-22', service: 'Farmacia', provider: 'tecnosalud', providerName: 'Tecnosalud', maintenanceType: 'preventivo', equipmentCode: 'EQ-1325', equipmentName: 'Desfibrilador Lifepak 15', cost: 3100000 },
  { id: '47', month: '2025-10', date: '2025-10-29', service: 'Imágenes Diagnósticas', provider: 'medequipos', providerName: 'MedEquipos', maintenanceType: 'calibracion', equipmentCode: 'EQ-1750', equipmentName: 'Monitor fetal Philips Avalon', cost: 750000 },
  { id: '48', month: '2025-10', date: '2025-10-31', service: 'Quirófano', provider: 'externo', providerName: 'Proveedor externo', maintenanceType: 'preventivo', equipmentCode: 'EQ-1670', equipmentName: 'Microscopio quirúrgico Zeiss', cost: 3200000 },
  
  // Noviembre 2025
  { id: '49', month: '2025-11', date: '2025-11-05', service: 'Quirófano', provider: 'biocontrol', providerName: 'BioControl', maintenanceType: 'correctivo', equipmentCode: 'EQ-1302', equipmentName: 'Ventilador Puritan Bennett 980', cost: 6200000 },
  { id: '50', month: '2025-11', date: '2025-11-12', service: 'Quirófano', provider: 'biocontrol', providerName: 'BioControl', maintenanceType: 'preventivo', equipmentCode: 'EQ-1308', equipmentName: 'Respirador Neonatal Babylog 8000', cost: 4300000 },
  { id: '51', month: '2025-11', date: '2025-11-19', service: 'Farmacia', provider: 'tecnosalud', providerName: 'Tecnosalud', maintenanceType: 'calibracion', equipmentCode: 'EQ-1515', equipmentName: 'Bomba de infusión volumétrica B.Braun', cost: 720000 },
  { id: '52', month: '2025-11', date: '2025-11-26', service: 'Imágenes Diagnósticas', provider: 'medequipos', providerName: 'MedEquipos', maintenanceType: 'correctivo', equipmentCode: 'EQ-1624', equipmentName: 'Rayos X digital Siemens', cost: 6800000 },
  { id: '53', month: '2025-11', date: '2025-11-28', service: 'Laboratorio Clínico', provider: 'externo', providerName: 'Proveedor externo', maintenanceType: 'preventivo', equipmentCode: 'EQ-1660', equipmentName: 'Centrífuga Eppendorf 5804', cost: 1750000 },
  
  // Diciembre 2025
  { id: '54', month: '2025-12', date: '2025-12-03', service: 'Quirófano', provider: 'biocontrol', providerName: 'BioControl', maintenanceType: 'preventivo', equipmentCode: 'EQ-1450', equipmentName: 'Incubadora neonatal Giraffe', cost: 4100000 },
  { id: '55', month: '2025-12', date: '2025-12-10', service: 'Farmacia', provider: 'biocontrol', providerName: 'BioControl', maintenanceType: 'calibracion', equipmentCode: 'EQ-1525', equipmentName: 'Bomba de jeringa Terumo TE-331', cost: 590000 },
  { id: '56', month: '2025-12', date: '2025-12-17', service: 'Farmacia', provider: 'tecnosalud', providerName: 'Tecnosalud', maintenanceType: 'correctivo', equipmentCode: 'EQ-1320', equipmentName: 'Desfibrilador Zoll X Series', cost: 3950000 },
  { id: '57', month: '2025-12', date: '2025-12-20', service: 'Farmacia', provider: 'tecnosalud', providerName: 'Tecnosalud', maintenanceType: 'preventivo', equipmentCode: 'EQ-1190', equipmentName: 'Monitor de signos vitales Welch Allyn', cost: 1800000 },
  { id: '58', month: '2025-12', date: '2025-12-24', service: 'Patología', provider: 'medequipos', providerName: 'MedEquipos', maintenanceType: 'calibracion', equipmentCode: 'EQ-1755', equipmentName: 'Doppler fetal Huntleigh', cost: 520000 },
  { id: '59', month: '2025-12', date: '2025-12-27', service: 'Quirófano', provider: 'medequipos', providerName: 'MedEquipos', maintenanceType: 'preventivo', equipmentCode: 'EQ-1715', equipmentName: 'Máquina de anestesia Datex Ohmeda', cost: 3700000 },
  { id: '60', month: '2025-12', date: '2025-12-30', service: 'Microbiología', provider: 'externo', providerName: 'Proveedor externo', maintenanceType: 'correctivo', equipmentCode: 'EQ-1520', equipmentName: 'Balanza de precisión Ohaus', cost: 950000 }
]

const moneyFormatter = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 })
const dateFormatter = new Intl.DateTimeFormat('es-CO', { day: '2-digit', month: 'short', year: 'numeric' })

function getFilteredRecords(records: BillingRecord[], filters: BillingFilters): BillingRecord[] {
  return records.filter((record) => {
    if (filters.month && record.month !== filters.month) return false
    if (filters.service && record.service !== filters.service) return false
    if (filters.provider && record.provider !== filters.provider) return false
    if (filters.maintenanceType && record.maintenanceType !== filters.maintenanceType) return false
    return true
  })
}

export default function StatisticsPage() {
  const [filters, setFilters] = useState<BillingFilters>({ ...defaultFilters })

  const handleFilterChange = (key: keyof BillingFilters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value
    }))
  }

  const handleResetFilters = () => {
    setFilters({ ...defaultFilters })
  }

  const handleApplyFilters = () => {
    console.log('Aplicando filtros', filters)
  }

  const filteredRecords = getFilteredRecords(billingRecords, filters)

  return (
    <div className="w-full space-y-8 pb-8">
      <StatisticsFiltersPanel
        filters={filters}
        filterFields={filterFields}
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
        onApplyFilters={handleApplyFilters}
      />
      <StatisticsTablePanel
        records={filteredRecords}
        formatMoney={(value) => moneyFormatter.format(value)}
        formatDate={(date) => dateFormatter.format(new Date(date))}
      />
    </div>
  )
}

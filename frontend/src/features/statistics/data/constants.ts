import type { BillingFilters, FilterField, FilterOption, MaintenanceType } from '../types'

export const monthOptions: FilterOption[] = [
  { value: '2025-01', label: 'Enero 2025' },
  { value: '2025-02', label: 'Febrero 2025' },
  { value: '2025-03', label: 'Marzo 2025' },
  { value: '2025-04', label: 'Abril 2025' },
  { value: '2025-05', label: 'Mayo 2025' },
  { value: '2025-06', label: 'Junio 2025' },
  { value: '2025-07', label: 'Julio 2025' },
  { value: '2025-08', label: 'Agosto 2025' },
  { value: '2025-09', label: 'Septiembre 2025' },
  { value: '2025-10', label: 'Octubre 2025' },
  { value: '2025-11', label: 'Noviembre 2025' },
  { value: '2025-12', label: 'Diciembre 2025' }
]

export const providerOptions: FilterOption[] = [
  { value: 'biocontrol', label: 'BioControl' },
  { value: 'tecnosalud', label: 'Tecnosalud' },
  { value: 'medequipos', label: 'MedEquipos' },
  { value: 'externo', label: 'Proveedor externo' }
]

export const serviceOptions: FilterOption[] = [
  { value: 'Laboratorio Clínico', label: 'Laboratorio Clínico' },
  { value: 'Patología', label: 'Patología' },
  { value: 'Farmacia', label: 'Farmacia' },
  { value: 'Microbiología', label: 'Microbiología' },
  { value: 'Imágenes Diagnósticas', label: 'Imágenes Diagnósticas' },
  { value: 'Quirófano', label: 'Quirófano' }
]

export const maintenanceTypes: { value: MaintenanceType; label: string }[] = [
  { value: 'preventivo', label: 'Preventivo' },
  { value: 'correctivo', label: 'Correctivo' },
  { value: 'calibracion', label: 'Calibración' }
]

export const yearOptions: FilterOption[] = [
  { value: '2025', label: '2025' },
  { value: '2024', label: '2024' },
  { value: '2023', label: '2023' }
]

export const filterFields: FilterField[] = [
  {
    key: 'year',
    label: 'Año',
    placeholder: 'Selecciona un año',
    ariaLabel: 'Seleccionar año de facturación',
    helpText: 'Filtra por año.',
    options: yearOptions
  },
  {
    key: 'month',
    label: 'Mes',
    placeholder: 'Selecciona un mes',
    ariaLabel: 'Seleccionar mes de facturación',
    helpText: 'Usa el mes como periodo contable.',
    options: monthOptions
  },
  {
    key: 'service',
    label: 'Servicio',
    placeholder: 'Selecciona un servicio',
    ariaLabel: 'Seleccionar servicio hospitalario',
    helpText: 'Filtra por el servicio donde se realizó la intervención.',
    options: serviceOptions
  },
  {
    key: 'provider',
    label: 'Proveedor',
    placeholder: 'Selecciona un proveedor',
    ariaLabel: 'Seleccionar proveedor registrado',
    helpText: 'Filtra por el aliado que ejecutó el servicio.',
    options: providerOptions
  },
  {
    key: 'maintenanceType',
    label: 'Tipo de mantenimiento',
    placeholder: 'Selecciona un tipo',
    ariaLabel: 'Seleccionar tipo de mantenimiento',
    helpText: 'Encuentra órdenes preventivas, correctivas o calibraciones.',
    options: maintenanceTypes
  }
]

export const defaultFilters: BillingFilters = {
  year: new Date().getFullYear().toString(),
  month: '',
  service: '',
  provider: '',
  maintenanceType: ''
}

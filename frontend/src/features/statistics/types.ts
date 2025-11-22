export type MaintenanceType = 'preventivo' | 'correctivo' | 'calibracion'

export interface BillingFilters {
  year: string
  month: string
  provider: string
  service: string
  maintenanceType: string
}

export type BillingFilterKey = keyof BillingFilters

export interface BillingRecord {
  id: string
  month: string
  date: string
  provider: string
  providerName: string
  service: string
  maintenanceType: MaintenanceType
  equipmentCode: string
  equipmentName: string
  cost: number
}

export interface FilterOption {
  value: string
  label: string
}

export interface FilterField {
  key: BillingFilterKey
  label: string
  placeholder: string
  ariaLabel: string
  helpText: string
  options: FilterOption[]
}

export interface ProviderSummaryRow {
  provider: string
  providerName: string
  totals: Partial<Record<MaintenanceType, number>>
  count: Partial<Record<MaintenanceType, number>>
  overallCost: number
}

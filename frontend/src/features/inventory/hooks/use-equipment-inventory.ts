import { useMemo, useState } from 'react'
import { equipmentInventory, type EquipmentRecord } from '../data/mock-equipment'

export type FilterSelectableValue = 'all' | string

export interface EquipmentFiltersState {
  location: FilterSelectableValue
  process: FilterSelectableValue
  status: FilterSelectableValue
  classification: FilterSelectableValue
  invimaStatus: FilterSelectableValue
  riskClass: FilterSelectableValue
  missionClassification: FilterSelectableValue
}

export interface EquipmentFilterOptions {
  locations: string[]
  processes: string[]
  statuses: string[]
  classifications: string[]
  invimaStatuses: string[]
  riskClasses: string[]
  missionClassifications: string[]
}

const DEFAULT_FILTERS: EquipmentFiltersState = {
  location: 'all',
  process: 'all',
  status: 'all',
  classification: 'all',
  invimaStatus: 'all',
  riskClass: 'all',
  missionClassification: 'all'
}

const PAGE_SIZE = 10

const uniqueValues = <K extends keyof EquipmentRecord>(key: K) => {
  return Array.from(new Set(equipmentInventory.map((item) => item[key] as string))).sort()
}

const determineStatusBucket = (item: EquipmentRecord) => {
  if (item.status === 'Activo') return 'operativo'
  if (item.status === 'Inactivo' || item.status === 'De baja') return 'fuera'
  if (item.status === 'En mantenimiento' || item.maintenanceType === 'Correctivo') return 'correctivo'
  if (item.maintenanceType === 'Preventivo' || item.maintenanceType === 'Calibración') return 'preventivo'
  return 'operativo'
}

export function useEquipmentInventory() {
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState<EquipmentFiltersState>(DEFAULT_FILTERS)
  const [page, setPage] = useState(1)

  const availableFilters = useMemo(
    (): EquipmentFilterOptions => ({
      locations: uniqueValues('location'),
      processes: uniqueValues('process'),
      statuses: uniqueValues('status'),
      classifications: uniqueValues('classification'),
      invimaStatuses: uniqueValues('invimaStatus'),
      riskClasses: uniqueValues('riskClass'),
      missionClassifications: uniqueValues('missionClassification')
    }),
    []
  )

  const filteredEquipment = useMemo(() => {
    const query = search.trim().toLowerCase()

    return equipmentInventory.filter((item) => {
      const matchesSearch = query
        ? [item.code, item.name, item.location, item.process, item.assignedTo].some((field) =>
          field.toLowerCase().includes(query)
        )
        : true

      const matchesFilters =
        (filters.location === 'all' || item.location === filters.location) &&
        (filters.process === 'all' || item.process === filters.process) &&
        (filters.status === 'all' || item.status === filters.status) &&
        (filters.classification === 'all' || item.classification === filters.classification) &&
        (filters.invimaStatus === 'all' || item.invimaStatus === filters.invimaStatus) &&
        (filters.riskClass === 'all' || item.riskClass === filters.riskClass) &&
        (filters.missionClassification === 'all' || item.missionClassification === filters.missionClassification)

      return matchesSearch && matchesFilters
    })
  }, [search, filters])

  const paginatedEquipment = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE
    return filteredEquipment.slice(start, start + PAGE_SIZE)
  }, [filteredEquipment, page])

  const totalPages = Math.max(1, Math.ceil(filteredEquipment.length / PAGE_SIZE))

  const statusSummary = useMemo(() => {
    const base = {
      operativo: 0,
      preventivo: 0,
      correctivo: 0,
      fuera: 0
    }

    filteredEquipment.forEach((item) => {
      const bucket = determineStatusBucket(item)
      base[bucket as keyof typeof base] += 1
    })

    return [
      {
        label: 'Listos para uso',
        value: base.operativo,
        description: 'Equipos operativos y calibrados'
      },
      {
        label: 'Programados',
        value: base.preventivo,
        description: 'Con preventivo o calibración en agenda'
      },
      {
        label: 'Correctivos',
        value: base.correctivo,
        description: 'Con intervención correctiva activa'
      },
      {
        label: 'Fuera de servicio',
        value: base.fuera,
        description: 'Requieren decisión operativa'
      }
    ]
  }, [filteredEquipment])

  const activeFiltersCount = useMemo(
    () => Object.values(filters).filter((value) => value !== 'all').length,
    [filters]
  )

  const handleFilterChange = <K extends keyof EquipmentFiltersState>(key: K, value: EquipmentFiltersState[K]) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value
    }))
    setPage(1)
  }

  const handleSearchChange = (value: string) => {
    setSearch(value)
    setPage(1)
  }

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS)
    setSearch('')
    setPage(1)
  }

  return {
    search,
    setSearch: handleSearchChange,
    filters,
    setFilter: handleFilterChange,
    resetFilters,
    equipment: paginatedEquipment,
    filteredTotal: filteredEquipment.length,
    total: equipmentInventory.length,
    page,
    pageSize: PAGE_SIZE,
    totalPages,
    goToPage: setPage,
    availableFilters,
    statusSummary,
    activeFiltersCount
  }
}

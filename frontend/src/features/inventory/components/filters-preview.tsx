"use client"

import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { ArrowDownWideNarrow, RotateCcw, Search, RefreshCw, FileSpreadsheet, Building2, Briefcase, CheckCircle, Tag, Shield, Folder, AlertTriangle } from 'lucide-react'
import type {
  EquipmentFilterOptions,
  EquipmentFiltersState
} from '@/features/inventory/hooks/use-equipment-inventory'

type FilterKey = keyof EquipmentFiltersState

interface InventoryFiltersProps {
  search?: string
  onSearchChange?: (value: string) => void
  filters?: EquipmentFiltersState
  onFilterChange?: <K extends FilterKey>(key: K, value: EquipmentFiltersState[K]) => void
  options?: EquipmentFilterOptions
  activeFiltersCount?: number
  onReset?: () => void
  onSubmit?: () => void
  onRefresh?: () => void
  onExport?: () => void
  canExport?: boolean
  isLoading?: boolean
}

const FILTER_LABELS: Record<FilterKey, string> = {
  location: 'Sede',
  process: 'Servicio',
  status: 'Estado',
  classification: 'Clasificación',
  invimaStatus: 'Invima',
  category: 'Categoría',
  riskClass: 'Clase de riesgo'
}

const FILTER_PLACEHOLDERS: Record<FilterKey, string> = {
  location: 'Todas las sedes',
  process: 'Todos los servicios',
  status: 'Todos los estados',
  classification: 'Todas las clasificaciones',
  invimaStatus: 'Todos',
  category: 'Todas las categorías',
  riskClass: 'Todas las clases'
}

const FALLBACK_FILTERS: EquipmentFiltersState = {
  location: 'all',
  process: 'all',
  status: 'all',
  classification: 'all',
  invimaStatus: 'all',
  category: 'all',
  riskClass: 'all'
}

export function InventoryFilters({
  search = '',
  onSearchChange = () => {},
  filters = FALLBACK_FILTERS,
  onFilterChange = () => {},
  options,
  activeFiltersCount = 0,
  onReset = () => {},
  onSubmit = () => {},
  onRefresh = () => {},
  onExport = () => {},
  canExport = true,
  isLoading = false
}: InventoryFiltersProps) {
  const resolvedOptions: EquipmentFilterOptions = options ?? {
    locations: [],
    processes: [],
    statuses: [],
    classifications: [],
    invimaStatuses: [],
    categories: [],
    riskClasses: []
  }
  const firstRowFilters: Array<{ key: FilterKey; data: string[] }> = [
    { key: 'location', data: resolvedOptions.locations },
    { key: 'process', data: resolvedOptions.processes }
  ]
  const secondRowFilters: Array<{ key: FilterKey; data: string[] }> = [
    { key: 'status', data: resolvedOptions.statuses },
    { key: 'classification', data: resolvedOptions.classifications },
    { key: 'invimaStatus', data: resolvedOptions.invimaStatuses },
    { key: 'category', data: resolvedOptions.categories },
    { key: 'riskClass', data: resolvedOptions.riskClasses }
  ]

  const activeFilters = (Object.entries(filters) as Array<[FilterKey, string]>).filter(([, value]) => value !== 'all')
  const hasFiltersApplied = activeFiltersCount > 0 || search.length > 0
  const totalActiveFilters = activeFiltersCount + (search ? 1 : 0)
  const filtersSummaryList = activeFilters.map(([key]) => FILTER_LABELS[key])

  if (search) {
    filtersSummaryList.unshift('Búsqueda por texto')
  }

  const handleSubmit = () => {
    onSubmit()
  }

  const getIcon = (key: FilterKey) => {
    switch (key) {
      case 'location':
        return Building2
      case 'process':
        return Briefcase
      case 'status':
        return CheckCircle
      case 'classification':
        return Tag
      case 'invimaStatus':
        return Shield
      case 'category':
        return Folder
      case 'riskClass':
        return AlertTriangle
      default:
        return null
    }
  }

  return (
    <Card className="bg-white p-6">
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-[minmax(0,_2fr)_minmax(0,_1fr)] md:items-end">
          <div className="w-full space-y-2 text-sm">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700" htmlFor="inventory-search">
              <Search className="h-4 w-4 text-blue-600" />
              Buscar equipo
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                id="inventory-search"
                fullWidth
                value={search}
                onChange={(event) => onSearchChange(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault()
                    handleSubmit()
                  }
                }}
                placeholder="Código interno, IPS, ECRI, nombre, marca, modelo o serie"
                className="h-11 rounded-2xl border-slate-200 bg-white pl-11 text-slate-900"
                aria-label="Buscar equipo"
              />
            </div>
          </div>

          <div className="grid w-full gap-4 sm:grid-cols-2">
            {firstRowFilters.map(({ key, data }) => {
              const Icon = getIcon(key)
              return (
              <div key={key} className="space-y-2 text-sm">
                <label className="flex items-center gap-2 font-medium text-slate-700" htmlFor={`filter-${key}`}>
                  {Icon && <Icon className="h-4 w-4 text-blue-600" />}
                  {FILTER_LABELS[key]}
                </label>
                <Select
                  id={`filter-${key}`}
                  value={filters[key]}
                  onChange={(event) => onFilterChange(key, event.target.value as EquipmentFiltersState[typeof key])}
                  className="h-11 rounded-2xl border-slate-200 bg-white text-slate-900"
                >
                  <option value="all">{FILTER_PLACEHOLDERS[key]}</option>
                  {data.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </div>
            )
            })}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {secondRowFilters.map(({ key, data }) => {
            const Icon = getIcon(key)
            return (
            <div key={key} className="space-y-2 text-sm">
              <label className="flex items-center gap-2 font-medium text-slate-700" htmlFor={`filter-${key}`}>
                {Icon && <Icon className="h-4 w-4 text-blue-600" />}
                {FILTER_LABELS[key]}
              </label>
              <Select
                id={`filter-${key}`}
                value={filters[key]}
                onChange={(event) => onFilterChange(key, event.target.value as EquipmentFiltersState[typeof key])}
                className="h-11 rounded-2xl border-slate-200 bg-white text-slate-900"
              >
                <option value="all">{FILTER_PLACEHOLDERS[key]}</option>
                {data.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </div>
          )
          })}
        </div>
      </div>

  <div className="mt-6 rounded-2xl bg-slate-100 p-4 text-sm text-slate-600 md:flex md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <ArrowDownWideNarrow className="h-4 w-4 text-slate-400" />
          {hasFiltersApplied ? (
            <span>
              {totalActiveFilters} filtros activos
              {filtersSummaryList.length > 0 ? ` · ${filtersSummaryList.join(', ')}` : null}
            </span>
          ) : (
            <span>No hay filtros activos</span>
          )}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm md:mt-0">
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 text-slate-600"
            onClick={onReset}
            disabled={!hasFiltersApplied}
          >
            <RotateCcw className="h-4 w-4" />
            Limpiar
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 border border-slate-200 text-slate-600"
            onClick={onExport}
            disabled={!canExport}
          >
            <FileSpreadsheet className="h-4 w-4" />
            Exportar Excel
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 border border-slate-200 text-slate-600"
            onClick={onRefresh}
            disabled={isLoading}
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            Actualizar
          </Button>
          <Button size="sm" className="gap-2" onClick={handleSubmit} disabled={isLoading}>
            <Search className="h-4 w-4" />
            Buscar
          </Button>
        </div>
      </div>
    </Card>
  )
}

// Export temporal para mantener compatibilidad con la página mientras se actualiza la importación
export { InventoryFilters as FiltersPreview }


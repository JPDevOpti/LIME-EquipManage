"use client"

import { memo } from 'react'
import type { ChangeEvent } from 'react'
import type { BillingFilterKey, BillingFilters, FilterField } from '../types'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/cn'
import { Calendar, Briefcase, Building2, Settings } from 'lucide-react'

interface StatisticsFiltersPanelProps {
  filters: BillingFilters
  filterFields: FilterField[]
  onFilterChange: (key: BillingFilterKey, value: string) => void
  onResetFilters: () => void
  onApplyFilters?: () => void
  title?: string
  description?: string
}

export const StatisticsFiltersPanel = memo(function StatisticsFiltersPanel({
  filters,
  filterFields,
  onFilterChange,
  onResetFilters,
  onApplyFilters,
  title = 'Filtros de búsqueda',
  description = 'Ajusta los parámetros para refinar los indicadores de facturación.'
}: StatisticsFiltersPanelProps) {
  const handleSelectChange = (key: BillingFilterKey) => (event: ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(key, event.target.value)
  }

  const getIcon = (key: BillingFilterKey) => {
    switch (key) {
      case 'year':
      case 'month':
        return Calendar
      case 'service':
        return Briefcase
      case 'provider':
        return Building2
      case 'maintenanceType':
        return Settings
      default:
        return null
    }
  }

  return (
    <Card className="overflow-hidden border border-emerald-200 shadow-sm">
      <div className="px-6 pb-6 pt-6">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-5">
          {filterFields.map((field) => {
            const Icon = getIcon(field.key)
            return (
              <div key={field.key} className="space-y-2">
                <Label htmlFor={`filter-${field.key}`} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  {Icon && <Icon className="h-4 w-4 text-emerald-600" />}
                  {field.label}
                </Label>
                <Select
                  id={`filter-${field.key}`}
                  value={filters[field.key]}
                  onChange={handleSelectChange(field.key)}
                  aria-label={field.ariaLabel}
                  className="h-11 rounded-2xl border-slate-200 bg-white text-slate-900 w-full"
                >
                  <option value="">{field.placeholder}</option>
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              </div>
            )
          })}
        </div>

        {/* Botones eliminados, filtros se aplican automáticamente */}
      </div>
    </Card>
  )
})

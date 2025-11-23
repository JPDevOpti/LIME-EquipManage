"use client"

import { memo } from 'react'
import type { ChangeEvent } from 'react'
import type { BillingFilterKey, BillingFilters, FilterField } from '../types'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/cn'

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

  return (
    <Card className="overflow-hidden border border-emerald-200 shadow-sm">
      <div className="px-6 pb-6 pt-6">
        <div className="grid gap-4 grid-cols-6">
          {/* Año y Mes juntos en una columna amplia */}
          <div className="col-span-1 flex flex-col gap-2 min-w-[180px]">
            <div className="flex gap-2">
              <div className="flex-1">
                <Label htmlFor="filter-year" className="text-sm font-medium text-slate-700">Año</Label>
                <Select
                  id="filter-year"
                  value={filters['year']}
                  onChange={handleSelectChange('year')}
                  aria-label="Seleccionar año de facturación"
                  className="h-11 rounded-2xl border-slate-200 bg-white text-slate-900 w-full"
                >
                  <option value="">Selecciona un año</option>
                  {filterFields.find(f => f.key === 'year')?.options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </Select>
              </div>
              <div className="flex-1">
                <Label htmlFor="filter-month" className="text-sm font-medium text-slate-700">Mes</Label>
                <Select
                  id="filter-month"
                  value={filters['month']}
                  onChange={handleSelectChange('month')}
                  aria-label="Seleccionar mes de facturación"
                  className="h-11 rounded-2xl border-slate-200 bg-white text-slate-900 w-full"
                >
                  <option value="">Selecciona un mes</option>
                  {filterFields.find(f => f.key === 'month')?.options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </Select>
              </div>
            </div>
          </div>
          {/* El resto de los filtros, cada uno ocupa 2 columnas */}
          {filterFields.filter(f => f.key !== 'year' && f.key !== 'month').map((field) => (
            <div key={field.key} className="space-y-2 col-span-2">
              <Label htmlFor={`filter-${field.key}`} className="text-sm font-medium text-slate-700">
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
          ))}
        </div>

        {/* Botones eliminados, filtros se aplican automáticamente */}
      </div>
    </Card>
  )
})

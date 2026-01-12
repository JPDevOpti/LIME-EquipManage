"use client"

import { memo } from 'react'
import type { BillingFilterKey, BillingFilters, FilterField } from '../types'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
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
  const handleSelectChange = (key: BillingFilterKey) => (value: string) => {
    onFilterChange(key, value)
  }

  return (
    <Card className="overflow-hidden border border-emerald-200 shadow-sm bg-slate-50/50">
      <div className="p-4">
        <div className="flex flex-wrap items-end gap-4">
          {filterFields.map((field) => (
            <div key={field.key} className="flex-1 min-w-[180px] space-y-1.5">
              <Label 
                htmlFor={`filter-${field.key}`} 
                className="text-xs font-semibold text-slate-700 ml-1"
              >
                {field.label}
              </Label>
              <Select
                value={filters[field.key] || ''}
                onValueChange={handleSelectChange(field.key)}
              >
                <SelectTrigger 
                  id={`filter-${field.key}`}
                  className="h-10 rounded-xl border-slate-200 bg-white text-sm w-full focus:ring-emerald-500/20 focus:border-emerald-500"
                >
                  <SelectValue placeholder={field.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  {field.options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
})

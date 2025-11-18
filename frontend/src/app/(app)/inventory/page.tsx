"use client"

import { InventoryFilters } from '@/features/inventory/components/filters-preview'
import { EquipmentTable } from '@/features/inventory/components/equipment-table'
import { useEquipmentInventory } from '@/features/inventory/hooks/use-equipment-inventory'

export default function InventoryPage() {
  const {
    search,
    setSearch,
    filters,
    setFilter,
    resetFilters,
    availableFilters,
    activeFiltersCount,
    equipment,
    filteredTotal,
    total,
    page,
    pageSize,
    totalPages,
    goToPage
  } = useEquipmentInventory()

  const handleExportSelected = (ids: string[]) => {
    console.log('Exportar equipos seleccionados', ids)
  }

  return (
    <div className="space-y-6">
      <InventoryFilters
        search={search}
        onSearchChange={setSearch}
        filters={filters}
        onFilterChange={setFilter}
        options={availableFilters}
        activeFiltersCount={activeFiltersCount}
        onReset={resetFilters}
      />
      <EquipmentTable
        equipment={equipment}
        filteredTotal={filteredTotal}
        total={total}
        page={page}
        pageSize={pageSize}
        totalPages={totalPages}
        onPageChange={goToPage}
        onExportSelected={handleExportSelected}
      />
    </div>
  )
}


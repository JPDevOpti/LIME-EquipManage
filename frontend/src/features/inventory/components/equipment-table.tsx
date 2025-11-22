"use client"

import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import type { EquipmentRecord } from '@/features/inventory/data/mock-equipment'
import { cn } from '@/lib/cn'
import {
  AlertCircle,
  FileText,
  FolderOpen,
  MapPin,
  Package2,
  PackageSearch,
  Building2 as Hospital,
  ShieldCheck,
  ShieldX,
  User,
  ClipboardList
} from 'lucide-react'

import { EquipmentDetailsModal } from './equipment-details-modal'
import { MetrologicalHistoryModal } from './metrological-history-modal'

interface EquipmentTableProps {
  equipment: EquipmentRecord[]
  filteredTotal: number
  total: number
  page: number
  pageSize: number
  totalPages: number
  onPageChange?: (page: number) => void
  onExportSelected?: (ids: string[]) => void
  className?: string
  emptyMessage?: string
}

const statusVariant = (status: string) => {
  return status === 'Activo' ? 'success' : 'error'
}

const invimaVariant = (status: EquipmentRecord['invimaStatus']) => {
  return status === 'Con registro' ? 'success' : 'warning'
}

const shouldDisplayField = (value?: string | null) => {
  if (!value) return false
  const normalized = value.trim()
  if (normalized.length === 0) return false
  return normalized.toUpperCase() !== 'N/A'
}

interface ColumnConfig {
  key: string
  label: string
  width: string
  align?: 'left' | 'center'
  render: (item: EquipmentRecord) => ReactNode
}

const desktopColumns: ColumnConfig[] = [
  {
    key: 'codes',
    label: 'Codigos',
    width: '8%',
    align: 'center',
    render: (item) => (
      <div className="flex flex-col items-center gap-2">
        <Badge size="sm" variant="info" className="font-mono">
          {item.ipsCode}
        </Badge>
        <Badge size="sm" variant="success" className="font-mono">
          {item.code}
        </Badge>
      </div>
    )
  },
  {
    key: 'equipment',
    label: 'Equipo',
    width: '16%',
    align: 'center',
    render: (item) => (
      <div className="space-y-1 text-center">
        <p className="font-semibold text-slate-900">{item.name}</p>
        {shouldDisplayField(item.provider) && <p className="text-xs text-slate-500">{item.provider}</p>}
      </div>
    )
  },
  {
    key: 'location',
    label: 'Ubicación',
    width: '20%',
    align: 'center',
    render: (item) => {
      const rows = [
        {
          icon: Hospital,
          value: item.location,
          textClass: 'text-slate-700'
        },
        {
          icon: MapPin,
          value: item.process,
          textClass: 'text-slate-500'
        },
        {
          icon: User,
          value: item.assignedTo,
          textClass: 'text-slate-700'
        }
      ].filter((row) => shouldDisplayField(row.value))

      if (rows.length === 0) {
        return <p className="text-xs text-slate-400">Sin información</p>
      }

      return (
        <div className="space-y-2 text-sm">
          {rows.map((row, index) => {
            const Icon = row.icon
            return (
              <div key={index} className="flex justify-center">
                <div className={cn('inline-flex items-start gap-2', row.textClass)}>
                  <Icon className="mt-0.5 h-4 w-4 text-slate-400" />
                  <span className="max-w-[10rem] text-center leading-snug">{row.value}</span>
                </div>
              </div>
            )
          })}
        </div>
      )
    }
  },
  {
    key: 'brand',
    label: 'Especificaciones',
    width: '15%',
    align: 'center',
    render: (item) => {
      const hasBrand = shouldDisplayField(item.brand)
      const hasModel = shouldDisplayField(item.model)
      const hasSerial = shouldDisplayField(item.serial)

      if (!hasBrand && !hasModel && !hasSerial) {
        return <p className="text-xs text-slate-400">Sin detalles</p>
      }

      return (
        <div className="space-y-1 text-center text-sm">
          {hasBrand && <p className="font-semibold text-slate-900">{item.brand}</p>}
          {hasModel && <p className="text-xs text-slate-500">{item.model}</p>}
          {hasSerial && (
            <div className="flex justify-center">
              <Badge size="sm" variant="secondary" className="font-mono">
                {item.serial}
              </Badge>
            </div>
          )}
        </div>
      )
    }
  },
  {
    key: 'classification',
    label: 'Clasificación',
    width: '12%',
    align: 'center',
    render: (item) => {
      const showClassification = shouldDisplayField(item.classification)
      const showMission = shouldDisplayField(item.missionClassification)

      if (!showClassification && !showMission) {
        return <p className="text-xs text-slate-400">Sin clasificación</p>
      }

      return (
        <div className="space-y-3 text-sm">
          {showClassification && (
            <div className="flex justify-center">
              <Badge size="sm" variant="info">
                {item.classification}
              </Badge>
            </div>
          )}
          {showMission && (
            <div className="flex justify-center">
              <p className="max-w-[10rem] text-center text-sm font-medium text-slate-900 leading-snug">
                {item.missionClassification}
              </p>
            </div>
          )}
        </div>
      )
    }
  },
  {
    key: 'invima',
    label: 'Invima',
    width: '10%',
    align: 'center',
    render: (item) => {
      const hasCertificate = item.invimaStatus === 'Con registro'
      const Icon = hasCertificate ? ShieldCheck : ShieldX
      return (
        <div className="space-y-1.5 text-center text-sm">
          <div className="flex justify-center">
            <span className={cn('rounded-full p-1.5', hasCertificate ? 'text-emerald-500' : 'text-slate-400')}>
              <Icon className="h-5 w-5" />
              <span className="sr-only">{hasCertificate ? 'Con registro Invima' : 'Sin registro Invima'}</span>
            </span>
          </div>
          {hasCertificate && item.invimaCode && (
            <div className="flex justify-center">
              <Badge size="sm" variant="info" className="font-mono text-[10px]">
                {item.invimaCode}
              </Badge>
            </div>
          )}
          {item.riskClass && (
            <div className="flex justify-center">
              <Badge size="sm" variant="secondary">
                {item.riskClass}
              </Badge>
            </div>
          )}
        </div>
      )
    }
  },
  {
    key: 'status',
    label: 'Estado',
    width: '7%',
    align: 'center',
    render: (item) => (
      <Badge size="sm" variant={statusVariant(item.status)}>
        {item.status}
      </Badge>
    )
  },
]

export function EquipmentTable({
  equipment,
  filteredTotal,
  total,
  page,
  pageSize,
  totalPages,
  onPageChange,
  onExportSelected,
  className,
  emptyMessage = 'No se encontraron equipos con los filtros aplicados.'
}: EquipmentTableProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [lifeSheetModalOpen, setLifeSheetModalOpen] = useState(false)
  const [metrologyModalOpen, setMetrologyModalOpen] = useState(false)
  const [selectedEquipment, setSelectedEquipment] = useState<EquipmentRecord | null>(null)
  const selectAllRef = useRef<HTMLInputElement>(null)

  const handleEdit = (item: EquipmentRecord) => {
    // Navegar a la página de edición
    window.location.href = `/inventory/${item.id}/edit`
  }

  const handleViewLifeSheet = (item: EquipmentRecord) => {
    setSelectedEquipment(item)
    setLifeSheetModalOpen(true)
  }

  const handleViewDocuments = (item: EquipmentRecord) => {
    // TODO: Implementar navegación a Drive
    console.log('Ver documentos de:', item.name)
  }

  const handleViewMetrology = (item: EquipmentRecord) => {
    setSelectedEquipment(item)
    setMetrologyModalOpen(true)
  }

  // Columna de acciones con acceso a los handlers
  const actionsColumn = {
    key: 'actions',
    label: 'Acciones',
    width: '10%',
    align: 'center' as const,
    render: (item: EquipmentRecord) => (
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => handleViewLifeSheet(item)}
          className="rounded-xl border border-slate-200 p-2 text-slate-500 transition hover:border-emerald-200 hover:text-emerald-600"
          aria-label="Ver detalles del equipo"
        >
          <FileText className="h-4 w-4" />
        </button>
        <button
          onClick={() => handleEdit(item)}
          className="rounded-xl border border-slate-200 p-2 text-slate-500 transition hover:border-amber-200 hover:text-amber-600"
          aria-label="Editar equipo"
        >
          <PackageSearch className="h-4 w-4" />
        </button>
        <button
          onClick={() => handleViewDocuments(item)}
          className="rounded-xl border border-slate-200 p-2 text-slate-500 transition hover:border-blue-200 hover:text-blue-600"
          aria-label="Ver documentos"
        >
          <FolderOpen className="h-4 w-4" />
        </button>
        <button
          onClick={() => handleViewMetrology(item)}
          className="rounded-xl border border-slate-200 p-2 text-slate-500 transition hover:border-purple-200 hover:text-purple-600"
          aria-label="Ver historial metrológico"
        >
          <ClipboardList className="h-4 w-4" />
        </button>
      </div>
    )
  }

  // Combinar columnas base con columna de acciones
  const allColumns = [...desktopColumns, actionsColumn]

  useEffect(() => {
    setSelectedIds((prev) => prev.filter((id) => equipment.some((item) => item.id === id)))
  }, [equipment])

  useEffect(() => {
    if (!selectAllRef.current) return
    selectAllRef.current.indeterminate = selectedIds.length > 0 && selectedIds.length < equipment.length
  }, [selectedIds, equipment.length])

  const isAllSelected = equipment.length > 0 && selectedIds.length === equipment.length

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds([])
      return
    }
    setSelectedIds(equipment.map((item) => item.id))
  }

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id]))
  }

  const clearSelection = () => setSelectedIds([])

  const handleExportSelected = () => {
    if (selectedIds.length === 0) return
    onExportSelected?.(selectedIds)
  }

  const rangeStart = filteredTotal === 0 ? 0 : (page - 1) * pageSize + 1
  const rangeEnd = filteredTotal === 0 ? 0 : rangeStart + equipment.length - 1

  const handlePrevPage = () => {
    if (page === 1) return
    onPageChange?.(page - 1)
  }

  const handleNextPage = () => {
    if (page >= totalPages) return
    onPageChange?.(page + 1)
  }

  const emptyState = (
    <div className="flex flex-col items-center gap-3 px-6 py-12 text-center text-slate-500">
      <AlertCircle className="h-12 w-12 text-slate-300" />
      <div className="space-y-1">
        <p className="text-base font-semibold text-slate-700">Sin resultados</p>
        <p className="text-sm text-slate-500">{emptyMessage}</p>
      </div>
      {selectedIds.length > 0 && (
        <Button variant="ghost" size="sm" onClick={clearSelection}>
          Limpiar selección
        </Button>
      )}
    </div>
  )

  return (
    <div className={cn('overflow-hidden rounded-2xl border border-slate-200 bg-white', className)}>
      {selectedIds.length > 0 && (
        <div className="flex flex-col gap-2 border-b border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-900 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-semibold">{selectedIds.length} equipo{selectedIds.length > 1 ? 's' : ''} seleccionado{selectedIds.length > 1 ? 's' : ''}</span>
            <button className="text-sm font-medium text-emerald-700 hover:underline" onClick={clearSelection}>
              Deseleccionar todo
            </button>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              className="border border-emerald-100 bg-white text-emerald-700 hover:bg-emerald-50"
              onClick={handleExportSelected}
              disabled={!onExportSelected}
            >
              <FileText className="h-4 w-4" /> Exportar seleccionados
            </Button>
          </div>
        </div>
      )}

      {filteredTotal === 0 ? (
        emptyState
      ) : (
        <>
          <div className="hidden lg:block">
            <div className="w-full overflow-x-auto">
              <table className="min-w-full table-auto text-sm">
                <colgroup>
                  <col style={{ width: '2%' }} />
                  {allColumns.map((column) => (
                    <col key={column.key} style={{ width: column.width }} />
                  ))}
                </colgroup>
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600">
                    <th className="px-3 py-4 text-center">
                      <div className="flex justify-center">
                        <Checkbox ref={selectAllRef} checked={isAllSelected} onChange={toggleSelectAll} aria-label="Seleccionar todos" />
                      </div>
                    </th>
                    {allColumns.map((column) => (
                      <th
                        key={column.key}
                        className={cn(
                          'px-4 py-4 text-xs font-semibold uppercase tracking-wide text-slate-600',
                          column.align === 'center' ? 'text-center' : 'text-left'
                        )}
                      >
                        {column.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {equipment.map((item) => (
                    <tr key={item.id} className="hover:bg-emerald-50/30">
                      <td className="px-3 py-4 text-center align-middle">
                        <div className="flex justify-center">
                          <Checkbox checked={selectedIds.includes(item.id)} onChange={() => toggleSelect(item.id)} aria-label={`Seleccionar ${item.name}`} />
                        </div>
                      </td>
                      {allColumns.map((column) => (
                        <td
                          key={column.key}
                          className={cn('px-4 py-4 align-middle text-slate-700', column.align === 'center' ? 'text-center' : 'text-left')}
                        >
                          {column.render(item)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="divide-y divide-slate-200 lg:hidden">
            {equipment.map((item) => (
              <div key={item.id} className="space-y-4 px-4 py-5">
                <div className="flex items-start gap-3">
                  <Checkbox checked={selectedIds.includes(item.id)} onChange={() => toggleSelect(item.id)} aria-label={`Seleccionar ${item.name}`} />
                  <div className="flex-1 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <div>
                        <p className="text-base font-semibold text-slate-900">{item.name}</p>
                        <p className="font-mono text-xs text-slate-500">{item.code}</p>
                      </div>
                      <Badge size="sm" variant={statusVariant(item.status)}>
                        {item.status}
                      </Badge>
                    </div>
                    <div className="mt-3 grid gap-2 text-sm text-slate-600">
                      {[{
                        icon: Hospital,
                        label: item.location
                      }, {
                        icon: MapPin,
                        label: item.process
                      }, {
                        icon: User,
                        label: item.assignedTo
                      }, {
                        icon: Package2,
                        label: item.category
                      }]
                        .filter((info) => shouldDisplayField(info.label))
                        .map((info, index) => {
                          const Icon = info.icon
                          return (
                            <div key={index} className="flex justify-center">
                              <div className="inline-flex items-start gap-2">
                                <Icon className="mt-0.5 h-4 w-4 text-slate-400" />
                                <span className="max-w-[14rem] text-center leading-snug">{info.label}</span>
                              </div>
                            </div>
                          )
                        })}
                    </div>
                    <div className="mt-3 space-y-3 rounded-2xl bg-slate-50 p-3 text-sm">
                      {shouldDisplayField(item.missionClassification) && (
                        <div>
                          <p className="text-[11px] uppercase tracking-wide text-slate-400">Eje misional</p>
                          <p className="font-semibold text-slate-900">{item.missionClassification}</p>
                        </div>
                      )}
                      {(shouldDisplayField(item.brand) || shouldDisplayField(item.model) || shouldDisplayField(item.serial)) && (
                        <div className="space-y-1">
                          <p className="text-[11px] uppercase tracking-wide text-slate-400">Marca · Modelo · Serie</p>
                          {shouldDisplayField(item.brand) && <p className="font-semibold text-slate-900">{item.brand}</p>}
                          {shouldDisplayField(item.model) && <p className="text-xs text-slate-500">{item.model}</p>}
                          {shouldDisplayField(item.serial) && (
                            <Badge size="sm" variant="secondary" className="font-mono">
                              {item.serial}
                            </Badge>
                          )}
                        </div>
                      )}
                      <div className="flex flex-wrap items-center justify-center gap-2">
                        {shouldDisplayField(item.classification) && (
                          <Badge size="sm" variant="info">
                            {item.classification}
                          </Badge>
                        )}
                        <span className="rounded-full border border-slate-200 p-2">
                          {item.invimaStatus === 'Con registro' ? (
                            <ShieldCheck className="h-4 w-4 text-emerald-500" />
                          ) : (
                            <ShieldX className="h-4 w-4 text-slate-400" />
                          )}
                        </span>
                        {item.riskClass && (
                          <Badge size="sm" variant="secondary">
                            {item.riskClass}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleViewLifeSheet(item)}
                        className="rounded-xl border border-slate-200 p-2 text-slate-500 transition hover:border-emerald-200 hover:text-emerald-600"
                        aria-label="Ver detalles del equipo"
                      >
                        <FileText className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleEdit(item)}
                        className="rounded-xl border border-slate-200 p-2 text-slate-500 transition hover:border-amber-200 hover:text-amber-600"
                        aria-label="Editar equipo"
                      >
                        <PackageSearch className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleViewDocuments(item)}
                        className="rounded-xl border border-slate-200 p-2 text-slate-500 transition hover:border-blue-200 hover:text-blue-600"
                        aria-label="Ver documentos en Drive"
                      >
                        <FolderOpen className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {filteredTotal === 0 ? (
              <span>Sin equipos para mostrar · {total} en catálogo</span>
            ) : (
              <span>
                Mostrando {rangeStart}-{rangeEnd} de {filteredTotal} equipos · Catálogo total: {total}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={handlePrevPage} disabled={page === 1}>
              Anterior
            </Button>
            <span className="text-slate-500">
              Página {page} de {totalPages}
            </span>
            <Button variant="ghost" size="sm" onClick={handleNextPage} disabled={page >= totalPages}>
              Siguiente
            </Button>
          </div>
        </div>
      </div>

      {/* Modales */}
      <EquipmentDetailsModal
        isOpen={lifeSheetModalOpen}
        equipment={selectedEquipment}
        onClose={() => setLifeSheetModalOpen(false)}
        onEdit={handleEdit}
      />

      <MetrologicalHistoryModal
        isOpen={metrologyModalOpen}
        equipment={selectedEquipment}
        onClose={() => setMetrologyModalOpen(false)}
      />
    </div>
  )
}

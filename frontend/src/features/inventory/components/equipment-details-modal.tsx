"use client"

import {
  X,
  Package2,
  Hash,
  Tag,
  Building2,
  Users,
  MapPin,
  Calendar,
  Wrench,
  Activity,
  AlertCircle,
  Shield,
  Zap,
  Thermometer,
  Droplets,
  Ruler,
  Weight,
  FileText,
  Truck,
  CreditCard,
  DollarSign,
  CheckCircle2,
  Clock,
  PackageSearch,
  FileDown
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { EquipmentRecord } from '@/features/inventory/data/mock-equipment'
import { EquipmentImage } from './equipment-image-modal'
import { cn } from '@/lib/cn'

interface EquipmentDetailsModalProps {
  isOpen: boolean
  equipment: EquipmentRecord | null
  onClose: () => void
  onEdit: (equipment: EquipmentRecord) => void
}

const DetailItem = ({
  icon: Icon,
  label,
  value,
  className
}: {
  icon: any,
  label: string,
  value: React.ReactNode,
  className?: string
}) => (
  <div className={cn("flex flex-col gap-1.5", className)}>
    <div className="flex items-center gap-1.5">
      <Icon className="h-3.5 w-3.5 text-slate-400 flex-shrink-0" />
      <p className="text-xs font-semibold text-slate-600">{label}</p>
    </div>
    <div className="rounded-lg bg-slate-100 px-3 py-2">
      <div className="text-sm font-medium text-slate-900">{value || <span className="text-slate-400 italic">N/A</span>}</div>
    </div>
  </div>
)

export function EquipmentDetailsModal({ isOpen, equipment, onClose, onEdit }: EquipmentDetailsModalProps) {
  if (!isOpen || !equipment) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[95vh] w-full max-w-6xl overflow-auto rounded-2xl bg-white shadow-xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Detalles del equipo</h2>
              <p className="text-sm text-slate-600 mt-1">{equipment.name}</p>
            </div>
            <button
              onClick={onClose}
              className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5 text-slate-700" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 p-6 overflow-y-auto flex-1">
          {/* 1. Información general */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-8 py-6 text-center">
              <h2 className="text-xl font-bold text-slate-900">Información general</h2>
              <p className="text-sm text-slate-600 mt-1">Datos básicos de identificación del equipo</p>
            </div>
            <div className="p-6 space-y-6">

              <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
                {/* Imagen */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-700">Imagen del equipo</p>
                  <EquipmentImage equipment={equipment} />
                </div>

                {/* Datos básicos */}
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Nombre del equipo - 2 columnas */}
                  <DetailItem
                    icon={Package2}
                    label="Nombre del equipo"
                    value={equipment.name}
                    className="md:col-span-2"
                  />

                  {/* Código UdeA */}
                  <DetailItem
                    icon={Hash}
                    label="Código UdeA"
                    value={<span className="font-mono">{equipment.code}</span>}
                  />

                  {/* Código IPS */}
                  <DetailItem
                    icon={Hash}
                    label="Código IPS"
                    value={<span className="font-mono">{equipment.ipsCode}</span>}
                  />

                  {/* Código ECRI */}
                  <DetailItem
                    icon={Hash}
                    label="Código ECRI"
                    value={<span className="font-mono">{equipment.ecriCode}</span>}
                  />

                  {/* Marca */}
                  <DetailItem
                    icon={Tag}
                    label="Marca"
                    value={equipment.brand}
                  />

                  {/* Modelo */}
                  <DetailItem
                    icon={Tag}
                    label="Modelo"
                    value={equipment.model}
                  />

                  {/* Serie */}
                  <DetailItem
                    icon={Hash}
                    label="Serie"
                    value={<span className="font-mono">{equipment.serial}</span>}
                  />
                </div>
              </div>

              {/* Clasificaciones - todas en una línea */}
              <div className="space-y-3 pt-3">
                {/* Título en medio de la línea divisora */}
                <div className="relative flex items-center pb-4">
                  <div className="flex-grow border-t border-slate-200"></div>
                  <h3 className="px-4 text-xs font-bold uppercase tracking-wider text-slate-500">Clasificaciones</h3>
                  <div className="flex-grow border-t border-slate-200"></div>
                </div>
                <div className="grid gap-4 md:grid-cols-10">
                  {/* Clasificación por eje misional - 3 columnas */}
                  <DetailItem
                    icon={Tag}
                    label="Clasificación por eje misional"
                    value={equipment.missionClassification}
                    className="md:col-span-3"
                  />

                  {/* Clasificación IPS - 2 columnas */}
                  <DetailItem
                    icon={Tag}
                    label="Clasificación IPS"
                    value={equipment.classification}
                    className="md:col-span-2"
                  />

                  {/* Clasificación Invima - 2 columnas */}
                  <DetailItem
                    icon={Shield}
                    label="Clasificación Invima"
                    value={equipment.riskClass}
                    className="md:col-span-2"
                  />

                  {/* Código del registro Invima - 3 columnas */}
                  <DetailItem
                    icon={Shield}
                    label="Código del registro Invima"
                    value={<span className="font-mono">{equipment.invimaCode}</span>}
                    className="md:col-span-3"
                  />
                </div>
              </div>

              {/* Ubicación y responsable */}
              <div className="space-y-3 pt-3">
                {/* Título en medio de la línea divisora */}
                <div className="relative flex items-center pb-4">
                  <div className="flex-grow border-t border-slate-200"></div>
                  <h3 className="px-4 text-xs font-bold uppercase tracking-wider text-slate-500">Ubicación y responsable</h3>
                  <div className="flex-grow border-t border-slate-200"></div>
                </div>
                <div className="grid gap-4 md:grid-cols-10">
                  {/* Sede - 3 columnas */}
                  <DetailItem
                    icon={Building2}
                    label="Sede"
                    value={equipment.headquarters}
                    className="md:col-span-3"
                  />

                  {/* Servicio - 2 columnas */}
                  <DetailItem
                    icon={Building2}
                    label="Servicio"
                    value={equipment.service}
                    className="md:col-span-2"
                  />

                  {/* Ubicación - 2 columnas */}
                  <DetailItem
                    icon={MapPin}
                    label="Ubicación"
                    value={equipment.location}
                    className="md:col-span-2"
                  />

                  {/* Responsable - 3 columnas */}
                  <DetailItem
                    icon={Users}
                    label="Responsable"
                    value={equipment.assignedTo}
                    className="md:col-span-3"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2. Información metrológica administrativa */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-8 py-6 text-center">
              <h2 className="text-xl font-bold text-slate-900">Información metrológica administrativa</h2>
              <p className="text-sm text-slate-600 mt-1">Datos de mantenimiento y calibración</p>
            </div>
            <div className="p-6">
              <div className="grid gap-4 md:grid-cols-10">
                {/* Mantenimiento Si/No - 2 columnas */}
                <DetailItem
                  icon={Wrench}
                  label="Mantenimiento Si/No"
                  value={equipment.maintenanceType}
                  className="md:col-span-2"
                />

                {/* Frecuencia anual mantenimiento - 3 columnas */}
                <DetailItem
                  icon={Clock}
                  label="Frecuencia anual mantenimiento"
                  value={equipment.maintenanceFrequency}
                  className="md:col-span-3"
                />

                {/* Calibración Si/No - 2 columnas */}
                <DetailItem
                  icon={Ruler}
                  label="Calibración Si/No"
                  value={equipment.calibrationStatus}
                  className="md:col-span-2"
                />

                {/* Frecuencia anual calibración - 3 columnas */}
                <DetailItem
                  icon={Clock}
                  label="Frecuencia anual calibración"
                  value={equipment.calibrationFrequency}
                  className="md:col-span-3"
                />
              </div>
            </div>
          </div>

          {/* 3. Condiciones de funcionamiento */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-8 py-6 text-center">
              <h2 className="text-xl font-bold text-slate-900">Condiciones de funcionamiento</h2>
              <p className="text-sm text-slate-600 mt-1">Especificaciones técnicas y requisitos operativos</p>
            </div>
            <div className="p-6">
              <div className="grid gap-4 md:grid-cols-4">
                {/* Primera fila: 4 elementos */}
                {/* Voltaje */}
                <DetailItem
                  icon={Zap}
                  label="Voltaje"
                  value={equipment.voltage}
                />

                {/* Corriente */}
                <DetailItem
                  icon={Zap}
                  label="Corriente"
                  value={equipment.current}
                />

                {/* Humedad relativa */}
                <DetailItem
                  icon={Droplets}
                  label="Humedad relativa"
                  value={equipment.humidityRange}
                />

                {/* Temperatura */}
                <DetailItem
                  icon={Thermometer}
                  label="Temperatura"
                  value={equipment.temperatureRange}
                />

                {/* Segunda fila: 4 elementos */}
                {/* Dimensiones */}
                <DetailItem
                  icon={Ruler}
                  label="Dimensiones"
                  value={equipment.dimensions}
                />

                {/* Peso */}
                <DetailItem
                  icon={Weight}
                  label="Peso"
                  value={equipment.weight}
                />

                {/* Potencia */}
                <DetailItem
                  icon={Zap}
                  label="Potencia"
                  value={equipment.power}
                />

                {/* Otros */}
                <DetailItem
                  icon={FileText}
                  label="Otros"
                  value={equipment.technicalSpecifications}
                />
              </div>
            </div>
          </div>

          {/* 4. Registro Histórico */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-8 py-6 text-center">
              <h2 className="text-xl font-bold text-slate-900">Registro Histórico</h2>
              <p className="text-sm text-slate-600 mt-1">Información de adquisición y garantía del equipo</p>
            </div>
            <div className="p-6 space-y-6">
              {/* Fechas */}
              <div className="grid gap-4 md:grid-cols-4">
                {/* Fecha de adquisición */}
                <DetailItem
                  icon={Calendar}
                  label="Fecha de adquisición"
                  value={equipment.acquisitionDate}
                />

                {/* Fecha de fabricación */}
                <DetailItem
                  icon={Calendar}
                  label="Fecha de fabricación"
                  value={equipment.manufacturingDate}
                />

                {/* Fecha fin garantía */}
                <DetailItem
                  icon={Calendar}
                  label="Fecha fin garantía"
                  value={equipment.warrantyExpirationDate}
                />

                {/* Está en garantía */}
                <DetailItem
                  icon={CheckCircle2}
                  label="Está en garantía"
                  value={equipment.warrantyActive ? 'Sí' : 'No'}
                />
              </div>

              {/* Propietario del equipo */}
              <div className="space-y-3 pt-3">
                {/* Título en medio de la línea divisora */}
                <div className="relative flex items-center pb-4">
                  <div className="flex-grow border-t border-slate-200"></div>
                  <h3 className="px-4 text-xs font-bold uppercase tracking-wider text-slate-500">Propietario del equipo</h3>
                  <div className="flex-grow border-t border-slate-200"></div>
                </div>
                <div className="grid gap-4 md:grid-cols-4">
                  {/* Propietario del equipo - 2 columnas */}
                  <DetailItem
                    icon={Users}
                    label="Propietario del equipo"
                    value={equipment.owner}
                    className="md:col-span-2"
                  />

                  {/* NIT */}
                  <DetailItem
                    icon={Hash}
                    label="NIT"
                    value={equipment.ownerNit}
                  />

                  {/* Forma de adquisición */}
                  <DetailItem
                    icon={FileText}
                    label="Forma de adquisición"
                    value={equipment.acquisitionType}
                  />
                </div>
              </div>

              {/* Información de compra */}
              <div className="space-y-3 pt-3">
                {/* Título en medio de la línea divisora */}
                <div className="relative flex items-center pb-4">
                  <div className="flex-grow border-t border-slate-200"></div>
                  <h3 className="px-4 text-xs font-bold uppercase tracking-wider text-slate-500">Información de compra</h3>
                  <div className="flex-grow border-t border-slate-200"></div>
                </div>
                <div className="grid gap-4 md:grid-cols-4">
                  {/* Proveedor equipo */}
                  <DetailItem
                    icon={Truck}
                    label="Proveedor equipo"
                    value={equipment.provider}
                  />

                  {/* Tipo de documento */}
                  <DetailItem
                    icon={FileText}
                    label="Tipo de documento"
                    value={equipment.documentType}
                  />

                  {/* Número de documento */}
                  <DetailItem
                    icon={Hash}
                    label="Número de documento"
                    value={equipment.documentNumber}
                  />

                  {/* Valor de compra */}
                  <DetailItem
                    icon={DollarSign}
                    label="Valor de compra"
                    value={equipment.purchaseValue ? `$ ${equipment.purchaseValue.toLocaleString()}` : null}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 5. Inventario de documentos */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-8 py-6 text-center">
              <h2 className="text-xl font-bold text-slate-900">Inventario de documentos</h2>
              <p className="text-sm text-slate-600 mt-1">Documentación asociada al equipo</p>
            </div>
            <div className="p-6">
              <div className="grid gap-4 md:grid-cols-10">
                {/* Hoja de vida - 2 columnas */}
                <DetailItem
                  icon={FileText}
                  label="Hoja de vida"
                  value={equipment.hasLifeSheet ? "Sí" : "No"}
                  className="md:col-span-2"
                />

                {/* Registro de importación - 2 columnas */}
                <DetailItem
                  icon={FileText}
                  label="Registro de importación"
                  value={equipment.hasImportDeclaration ? "Sí" : "No"}
                  className="md:col-span-2"
                />

                {/* Manual operación (Esp) - 2 columnas */}
                <DetailItem
                  icon={FileText}
                  label="Manual operación (Esp)"
                  value={equipment.hasOperationManual ? "Sí" : "No"}
                  className="md:col-span-2"
                />

                {/* Manual servicio mto (Esp) - 2 columnas */}
                <DetailItem
                  icon={FileText}
                  label="Manual servicio mto (Esp)"
                  value={equipment.hasServiceManual ? "Sí" : "No"}
                  className="md:col-span-2"
                />

                {/* Guía Rápida de uso - 2 columnas */}
                <DetailItem
                  icon={FileText}
                  label="Guía Rápida de uso"
                  value={equipment.hasQuickGuide ? "Sí" : "No"}
                  className="md:col-span-2"
                />

                {/* Instructivo de manejo rápido - 2 columnas */}
                <DetailItem
                  icon={FileText}
                  label="Instructivo de manejo rápido"
                  value={equipment.hasUserTraining ? "Sí" : "No"}
                  className="md:col-span-2"
                />

                {/* Protocolo Mto Prev. - 2 columnas */}
                <DetailItem
                  icon={FileText}
                  label="Protocolo Mto Prev."
                  value={equipment.hasMaintenanceProtocol ? "Sí" : "No"}
                  className="md:col-span-2"
                />

                {/* Frecuencia metrológica fabricante - 2 columnas */}
                <DetailItem
                  icon={Clock}
                  label="Frecuencia metrológica fabricante"
                  value={equipment.manufacturerMetrologicalFrequency}
                  className="md:col-span-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 border-t border-slate-200 bg-white px-6 py-4 flex justify-end gap-3">
          <Button
            onClick={() => onEdit(equipment)}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <PackageSearch className="mr-2 h-4 w-4" />
            Editar Equipo
          </Button>
          <Button
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
            onClick={() => console.log("Descargar hoja de vida")}
          >
            <FileDown className="mr-2 h-4 w-4" />
            Hoja de Vida
          </Button>
        </div>
      </div>
    </div>
  )
}

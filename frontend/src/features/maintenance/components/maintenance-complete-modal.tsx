"use client"

import { useState, useEffect, useRef } from 'react'
import { X, CheckCircle, Upload, FileText, X as XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import type { MaintenanceEvent } from '../types'
import { cn } from '@/lib/cn'

interface MaintenanceCompleteModalProps {
  isOpen: boolean
  event: MaintenanceEvent | null
  onClose: () => void
  onComplete: (data: {
    eventId: string
    exactCompletionDate: string
    reportNumber?: string
    reportFile?: File
    completionNotes?: string
  }) => void
}

export function MaintenanceCompleteModal({
  isOpen,
  event,
  onClose,
  onComplete
}: MaintenanceCompleteModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [formData, setFormData] = useState({
    exactCompletionDate: '',
    reportNumber: '',
    completionNotes: ''
  })

  useEffect(() => {
    if (isOpen) {
      const now = new Date()
      const year = now.getFullYear()
      const month = String(now.getMonth() + 1).padStart(2, '0')
      const day = String(now.getDate()).padStart(2, '0')
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      setFormData({
        exactCompletionDate: `${year}-${month}-${day}T${hours}:${minutes}`,
        reportNumber: '',
        completionNotes: ''
      })
      setSelectedFile(null)
    }
  }, [isOpen])

  if (!isOpen) return null

  const isFormValid = !!formData.exactCompletionDate

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    const files = e.dataTransfer?.files
    if (files && files.length > 0) {
      handleFile(files[0])
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFile(files[0])
    }
  }

  const handleFile = (file: File) => {
    // Validar tipo de archivo
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowedTypes.includes(file.type)) {
      alert('Formato de archivo no válido. Solo se permiten PDF, DOC y DOCX.')
      return
    }
    
    // Validar tamaño (10MB)
    const maxSize = 10 * 1024 * 1024
    if (file.size > maxSize) {
      alert('El archivo es demasiado grande. El tamaño máximo es 10MB.')
      return
    }
    
    setSelectedFile(file)
  }

  const removeFile = () => {
    setSelectedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
  }

  const handleSubmit = () => {
    if (!event || !isFormValid) return
    
    onComplete({
      eventId: event.id,
      exactCompletionDate: formData.exactCompletionDate,
      reportNumber: formData.reportNumber || undefined,
      reportFile: selectedFile || undefined,
      completionNotes: formData.completionNotes || undefined
    })
  }

  return (
    <div 
      className="fixed inset-0 z-[10002] flex items-center justify-center p-4 bg-black/40"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header fijo */}
        <div className="flex-shrink-0 px-6 py-5 border-b border-slate-200 bg-white rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Completar Mantenimiento</h3>
                <p className="text-slate-600 text-xs mt-1">Complete la información del mantenimiento realizado</p>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="flex-shrink-0 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-all duration-200 text-slate-600 hover:text-slate-800"
              title="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Contenido scrolleable */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Información del equipo */}
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <h4 className="text-sm font-semibold text-slate-900 mb-2">Equipo</h4>
            <p className="text-base font-medium text-slate-900">{event?.equipmentName}</p>
            <p className="text-sm text-slate-600 font-mono">{event?.equipmentCode}</p>
          </div>

          {/* Fecha exacta */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Fecha Exacta de Completado
            </label>
            <Input
              type="datetime-local"
              value={formData.exactCompletionDate}
              onChange={(e) => setFormData(prev => ({ ...prev, exactCompletionDate: e.target.value }))}
              required
            />
          </div>

          {/* Número de informe */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Número de Informe
            </label>
            <Input
              type="text"
              placeholder="Ej: INF-2025-001"
              value={formData.reportNumber}
              onChange={(e) => setFormData(prev => ({ ...prev, reportNumber: e.target.value }))}
            />
          </div>

          {/* Subir informe */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Subir Informe
            </label>
            <div
              className={cn(
                "border border-dashed border-slate-300 rounded-lg bg-slate-50 p-6 hover:border-emerald-500 transition-colors cursor-pointer",
                isDragOver && "border-emerald-500 bg-emerald-50/50"
              )}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={triggerFileInput}
            >
              {selectedFile ? (
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <FileText className="w-8 h-8 text-emerald-600" />
                    <div className="text-left">
                      <p className="text-sm font-medium text-slate-900">{selectedFile.name}</p>
                      <p className="text-xs text-slate-500">{formatFileSize(selectedFile.size)}</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        removeFile()
                      }}
                      className="ml-2 p-1 rounded-full hover:bg-red-100 text-red-600 transition-colors"
                      title="Eliminar archivo"
                    >
                      <XIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Upload className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium text-slate-700 mb-1">Haz clic para seleccionar o arrastra el archivo aquí</p>
                  <p className="text-xs text-slate-500">Formatos aceptados: PDF, DOC, DOCX. Tamaño máximo: 10MB</p>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={handleFileSelect}
              />
            </div>
          </div>

          {/* Observaciones */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Observaciones
            </label>
            <Textarea
              rows={4}
              placeholder="Ingrese las observaciones del mantenimiento realizado..."
              value={formData.completionNotes}
              onChange={(e) => setFormData(prev => ({ ...prev, completionNotes: e.target.value }))}
            />
          </div>
        </div>

        {/* Footer fijo */}
        <div className="flex-shrink-0 flex items-center justify-end gap-3 pt-3 border-t border-slate-200 px-6 pb-4 bg-white rounded-b-2xl">
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Completar Mantenimiento
          </Button>
        </div>
      </div>
    </div>
  )
}


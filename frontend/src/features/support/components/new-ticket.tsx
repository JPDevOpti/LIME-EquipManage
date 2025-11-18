"use client"

import { useState, useRef } from 'react'
import { FileText, Paperclip, X, Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CustomSelect } from '@/components/ui/custom-select'
import { Label } from '@/components/ui/label'
import type { NewTicketForm, TicketCategoryEnum, SupportTicket } from '../types'
import { supportApi } from '../services/supportApi'
import { cn } from '@/lib/cn'

interface NewTicketProps {
  onTicketCreated?: (ticket: SupportTicket) => void
}

export function NewTicket({ onTicketCreated }: NewTicketProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState<NewTicketForm>({
    title: '',
    category: '' as TicketCategoryEnum,
    description: '',
    image: undefined
  })
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const categoryOptions = [
    { value: 'bug', label: 'Error / Bug' },
    { value: 'feature', label: 'Nueva característica' },
    { value: 'question', label: 'Pregunta' },
    { value: 'technical', label: 'Problema técnico' }
  ]

  const isFormValid = formData.title.trim() !== '' &&
    formData.category !== '' &&
    formData.description.trim() !== '' &&
    !isSubmitting

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const validation = supportApi.validateImage(file)
    if (!validation.valid) {
      alert(validation.error || 'Archivo inválido')
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
      return
    }

    setFormData(prev => ({ ...prev, image: file }))

    const reader = new FileReader()
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string)
    }
    reader.readAsDataURL(file)

    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const removeImage = () => {
    setFormData(prev => ({ ...prev, image: undefined }))
    setImagePreview(null)
  }

  const clearForm = () => {
    setFormData({
      title: '',
      category: '' as TicketCategoryEnum,
      description: '',
      image: undefined
    })
    setImagePreview(null)
  }

  const submitTicket = async () => {
    if (!isFormValid || isSubmitting) return

    setIsSubmitting(true)

    try {
      const newTicket = await supportApi.createTicket(formData)
      onTicketCreated?.(newTicket)
      clearForm()
      alert('¡Ticket creado exitosamente!')
    } catch (error: any) {
      console.error('Error creando ticket:', error)
      const message = error?.response?.data?.detail || 'Error al crear el ticket'
      alert(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-6 py-4 border-b border-slate-200">
        <div className="flex items-center">
          <FileText className="w-5 h-5 mr-2 text-blue-600" />
          <h2 className="text-lg font-semibold text-slate-900">Nuevo Ticket</h2>
        </div>
        <p className="mt-1 text-sm text-slate-600">
          Crea un ticket de soporte para reportar problemas o solicitar ayuda
        </p>
      </div>

      <div className="p-6 space-y-4">
        {/* Título */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-slate-700">
            Título del ticket <span className="text-red-500">*</span>
          </Label>
          <Input
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            placeholder="Describe brevemente el problema..."
            maxLength={100}
          />
          <p className="text-xs text-slate-500">{formData.title.length}/100</p>
        </div>

        {/* Categoría */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-slate-700">
            Categoría <span className="text-red-500">*</span>
          </Label>
          <CustomSelect
            options={categoryOptions}
            value={formData.category}
            onChange={(value) => setFormData(prev => ({ ...prev, category: value as TicketCategoryEnum }))}
            placeholder="Selecciona una categoría"
          />
        </div>

        {/* Descripción */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-slate-700">
            Descripción <span className="text-red-500">*</span>
          </Label>
          <Textarea
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Describe detalladamente el problema, pasos para reproducirlo, comportamiento esperado, etc..."
            rows={4}
            maxLength={500}
          />
          <p className="text-xs text-slate-500">{formData.description.length}/500</p>
        </div>

        {/* Imagen adjunta */}
        <div>
          <Label className="block text-sm font-medium text-slate-700 mb-1">
            Imagen adjunta (opcional)
          </Label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-800"
              >
                <Paperclip className="w-4 h-4 mr-2" />
                Seleccionar imagen
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <p className="text-xs text-slate-500">
                PNG, JPG, GIF, WEBP hasta 5MB
              </p>
            </div>
          </div>
        </div>

        {/* Imagen seleccionada */}
        {(formData.image || imagePreview) && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-slate-700">Imagen seleccionada:</h4>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded border">
              <div className="flex items-center">
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-12 h-12 object-cover rounded mr-3"
                  />
                )}
                <div>
                  <span className="text-sm text-slate-700">{formData.image?.name || 'Imagen'}</span>
                  {formData.image && (
                    <span className="text-xs text-slate-500 block">
                      ({(formData.image.size / 1024).toFixed(1)} KB)
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={removeImage}
                className="text-red-600 hover:text-red-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Botones de acción */}
        <div className="flex justify-end space-x-3 pt-4 border-t border-slate-200">
          <Button variant="outline" size="sm" onClick={clearForm}>
            Limpiar
          </Button>
          <Button
            size="sm"
            disabled={!isFormValid}
            onClick={submitTicket}
            loading={isSubmitting}
          >
            Crear Ticket
          </Button>
        </div>
      </div>
    </div>
  )
}


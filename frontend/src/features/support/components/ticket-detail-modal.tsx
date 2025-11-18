"use client"

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { SupportTicket } from '../types'
import { cn } from '@/lib/cn'

interface TicketDetailModalProps {
  ticket: SupportTicket | null
  onClose: () => void
}

export function TicketDetailModal({ ticket, onClose }: TicketDetailModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!ticket) return null

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A'
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      'open': 'Abierto',
      'in-progress': 'En Progreso',
      'resolved': 'Resuelto',
      'closed': 'Cerrado'
    }
    return labels[status] || status
  }

  const getStatusBadgeClass = (status: string) => {
    const classes: Record<string, string> = {
      'open': 'bg-red-100 text-red-800',
      'in-progress': 'bg-yellow-100 text-yellow-800',
      'resolved': 'bg-green-100 text-green-800',
      'closed': 'bg-slate-100 text-slate-800'
    }
    return classes[status] || 'bg-slate-100 text-slate-800'
  }

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      'bug': 'Error / Bug',
      'feature': 'Nueva característica',
      'question': 'Pregunta',
      'technical': 'Problema técnico'
    }
    return labels[category] || category
  }

  const getImageSrc = (src?: string) => {
    if (!src) return ''
    if (src.startsWith('data:') || src.startsWith('http')) return src
    return src
  }

  return (
    <>
      <div
        className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-2 sm:p-4 bg-black/40 top-16"
        onClick={onClose}
      >
        <div
          className="relative bg-white w-full max-w-4xl rounded-t-2xl sm:rounded-2xl shadow-2xl h-[85vh] sm:h-auto sm:max-h-[90vh] overflow-y-auto overflow-x-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-white border-b border-slate-200 px-6 py-4 rounded-t-2xl flex items-center justify-between">
            <h3 className="text-xl font-semibold text-slate-900">{ticket.title}</h3>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Columna izquierda: información + descripción */}
              <div className="md:col-span-2 space-y-6">
                {/* Información del ticket */}
                <div className="grid grid-cols-2 gap-4 bg-slate-50 rounded-xl p-4">
                  <div>
                    <p className="text-sm text-slate-500">Código del Ticket</p>
                    <p className="text-base font-medium text-slate-900">{ticket.ticket_code}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Estado</p>
                    <Badge className={cn("text-xs font-medium px-2 py-1 rounded-full", getStatusBadgeClass(ticket.status))}>
                      {getStatusLabel(ticket.status)}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Categoría</p>
                    <p className="text-base font-medium text-slate-900">{getCategoryLabel(ticket.category)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Fecha de Creación</p>
                    <p className="text-base font-medium text-slate-900">{formatDate(ticket.ticket_date)}</p>
                  </div>
                </div>

                {/* Descripción */}
                <div className="bg-slate-50 rounded-xl p-4">
                  <h5 className="text-sm font-medium text-slate-700 mb-3">Descripción</h5>
                  <div className="bg-white border border-slate-200 rounded-lg p-3">
                    <p className="text-sm text-slate-800 whitespace-pre-wrap">{ticket.description}</p>
                  </div>
                </div>
              </div>

              {/* Columna derecha: imagen */}
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-xl p-4 h-full">
                  <h5 className="text-sm font-medium text-slate-700 mb-3">Imagen</h5>
                  {ticket.image ? (
                    <div
                      className="cursor-pointer group"
                      onClick={() => setSelectedImage(getImageSrc(ticket.image))}
                    >
                      <img
                        src={getImageSrc(ticket.image)}
                        alt="Imagen del ticket"
                        className="w-full h-56 object-cover rounded-lg border border-slate-200 group-hover:border-blue-300 transition-colors"
                      />
                      <p className="mt-2 text-xs text-slate-500">Click para ver en grande</p>
                    </div>
                  ) : (
                    <div className="w-full h-56 rounded-lg border border-dashed border-slate-200 flex items-center justify-center text-xs text-slate-400">
                      Sin imagen adjunta
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-white border-t border-slate-200 px-4 sm:px-6 py-3 sm:py-4 rounded-b-2xl">
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
              <div className="flex justify-center sm:justify-start">
                {/* Espacio para futuras acciones */}
              </div>
              <div className="flex gap-2 justify-center sm:justify-end">
                <Button variant="outline" onClick={onClose}>
                  Cerrar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para ver imagen completa */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/75 top-0"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}


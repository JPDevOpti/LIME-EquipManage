"use client"

import { useState } from 'react'
import { X, Edit } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProfileEditForm } from './profile-edit-form'
import type { UserProfile, ProfileEditPayload, ValidationError } from '../types'
import { profileApi } from '../services/profileApi'
import { cn } from '@/lib/cn'

interface EditModalProps {
  user: UserProfile
  onUpdate?: (updatedUser: UserProfile) => void
}

export function EditModal({ user, onUpdate }: EditModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<ValidationError[]>([])

  const handleSubmit = async (payload: ProfileEditPayload) => {
    try {
      setIsLoading(true)
      setErrors([])

      // Validar contraseñas
      if (payload.password) {
        if (payload.password.length < 6) {
          setErrors([{ field: 'password', message: 'La contraseña debe tener al menos 6 caracteres' }])
          return
        }
        if (payload.password !== payload.passwordConfirm) {
          setErrors([{ field: 'passwordConfirm', message: 'Las contraseñas no coinciden' }])
          return
        }
      }

      const updatedProfile = await profileApi.updateProfile(payload)
      onUpdate?.(updatedProfile)
      setIsOpen(false)
      alert('Perfil actualizado exitosamente')
    } catch (error: any) {
      console.error('Error actualizando perfil:', error)
      const message = error?.message || 'Error al actualizar el perfil'
      setErrors([{ field: '', message }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    setErrors([])
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
      >
        <Edit className="w-4 h-4 mr-2" />
        Editar
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          onClick={handleClose}
          onKeyDown={(e) => {
            if (e.key === 'Escape') handleClose()
          }}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />

          {/* Modal Container */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div
              className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 transform transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50">
                    <Edit className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Editar Información Personal
                    </h3>
                    <p className="text-sm text-slate-500">
                      Actualice sus datos para mantener su perfil al día
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={handleClose}
                  className="flex items-center justify-center w-8 h-8 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                  aria-label="Cerrar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <ProfileEditForm
                  user={user}
                  isLoading={isLoading}
                  errors={errors}
                  onSubmit={handleSubmit}
                  onCancel={handleClose}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}


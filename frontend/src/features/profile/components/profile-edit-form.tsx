"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { UserProfile, ProfileEditPayload, ValidationError } from '../types'

interface ProfileEditFormProps {
  user: UserProfile
  isLoading?: boolean
  errors?: ValidationError[]
  onSubmit: (payload: ProfileEditPayload) => void
  onCancel: () => void
}

export function ProfileEditForm({
  user,
  isLoading = false,
  errors = [],
  onSubmit,
  onCancel
}: ProfileEditFormProps) {
  const [formData, setFormData] = useState<ProfileEditPayload>({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone || '',
    password: '',
    passwordConfirm: ''
  })

  const [originalState, setOriginalState] = useState<string>('')

  useEffect(() => {
    const initialState = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone || '',
      password: '',
      passwordConfirm: ''
    }
    setFormData(initialState)
    setOriginalState(JSON.stringify(initialState))
  }, [user])

  const hasChanges = JSON.stringify(formData) !== originalState

  const validatePasswords = (): boolean => {
    if (!formData.password || !formData.password.trim()) {
      return true
    }
    
    if (formData.password.length < 6) {
      return false
    }
    if (formData.password !== formData.passwordConfirm) {
      return false
    }
    return true
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validatePasswords()) {
      return
    }
    
    const payload: ProfileEditPayload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone || undefined,
      password: formData.password || undefined,
      passwordConfirm: formData.passwordConfirm || undefined
    }
    
    onSubmit(payload)
  }

  const getFieldError = (field: string): string | undefined => {
    return errors.find(e => e.field === field)?.message
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <h4 className="text-lg font-medium text-slate-900 mb-1">Editar Perfil</h4>
          <p className="text-sm text-slate-500">Modifica tus datos básicos</p>
        </div>
        
        <div>
          <Label className="text-sm font-medium text-slate-700 mb-1">
            Nombre <span className="text-red-500">*</span>
          </Label>
          <Input
            value={formData.firstName}
            onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
            error={!!getFieldError('firstName')}
          />
          {getFieldError('firstName') && (
            <p className="text-xs text-red-600 mt-1">{getFieldError('firstName')}</p>
          )}
        </div>
        
        <div>
          <Label className="text-sm font-medium text-slate-700 mb-1">
            Apellido <span className="text-red-500">*</span>
          </Label>
          <Input
            value={formData.lastName}
            onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
            error={!!getFieldError('lastName')}
          />
          {getFieldError('lastName') && (
            <p className="text-xs text-red-600 mt-1">{getFieldError('lastName')}</p>
          )}
        </div>
        
        <div>
          <Label className="text-sm font-medium text-slate-700 mb-1">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            autoComplete="email"
            error={!!getFieldError('email')}
          />
          {getFieldError('email') && (
            <p className="text-xs text-red-600 mt-1">{getFieldError('email')}</p>
          )}
        </div>
        
        <div>
          <Label className="text-sm font-medium text-slate-700 mb-1">Teléfono</Label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            error={!!getFieldError('phone')}
          />
          {getFieldError('phone') && (
            <p className="text-xs text-red-600 mt-1">{getFieldError('phone')}</p>
          )}
        </div>
        
        <div>
          <Label className="text-sm font-medium text-slate-700 mb-1">Nueva contraseña (opcional)</Label>
          <Input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
            placeholder="••••••••"
            autoComplete="new-password"
            error={!!getFieldError('password')}
          />
          {getFieldError('password') && (
            <p className="text-xs text-red-600 mt-1">{getFieldError('password')}</p>
          )}
        </div>
        
        <div>
          <Label className="text-sm font-medium text-slate-700 mb-1">Confirmar contraseña</Label>
          <Input
            type="password"
            value={formData.passwordConfirm}
            onChange={(e) => setFormData(prev => ({ ...prev, passwordConfirm: e.target.value }))}
            placeholder="••••••••"
            autoComplete="new-password"
            error={!!getFieldError('passwordConfirm')}
          />
          {getFieldError('passwordConfirm') && (
            <p className="text-xs text-red-600 mt-1">{getFieldError('passwordConfirm')}</p>
          )}
        </div>
      </div>

      {/* Validation Errors */}
      {errors.length > 0 && errors.filter(e => !e.field).length > 0 && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <ul className="list-disc list-inside text-sm text-red-800">
            {errors.filter(e => !e.field).map((error, index) => (
              <li key={index}>{error.message}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Form Actions */}
      <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-200">
        <Button
          type="submit"
          disabled={isLoading || !hasChanges}
          loading={isLoading}
          className="flex-1 sm:flex-none sm:order-2"
        >
          Guardar Cambios
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isLoading}
          className="flex-1 sm:flex-none sm:order-1"
        >
          Cancelar
        </Button>
      </div>
    </form>
  )
}


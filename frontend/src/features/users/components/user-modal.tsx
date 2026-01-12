"use client"

import { useEffect, useState } from 'react'
import type { UserProfile, UserRole, UserStatus } from '../types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { X, UserPlus, Save, User } from 'lucide-react'
import { cn } from '@/lib/cn'

interface UserModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (user: Partial<UserProfile>) => void
  user?: UserProfile
}

export function UserModal({ isOpen, onClose, onSave, user }: UserModalProps) {
  const [formData, setFormData] = useState<Partial<UserProfile>>({
    name: '',
    email: '',
    role: 'Ingeniero',
    status: 'active',
    company: '',
    documentId: '',
    phone: '',
    observations: '',
    password: ''
  })
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (user) {
      setFormData({
        ...user,
        password: '' // Don't populate password on edit
      })
      setConfirmPassword('')
    } else {
      setFormData({
        name: '',
        email: '',
        role: 'Ingeniero',
        status: 'active',
        company: '',
        documentId: '',
        phone: '',
        observations: '',
        password: ''
      })
      setConfirmPassword('')
    }
    setError('')
  }, [user, isOpen])

  if (!isOpen) return null

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    
    // Password validation for new users (non-providers)
    if (!user && formData.role !== 'Proveedor') {
      if (formData.password !== confirmPassword) {
        setError('Las contraseñas no coinciden')
        return
      }
      if (!formData.password || formData.password.length < 6) {
        setError('La contraseña debe tener al menos 6 caracteres')
        return
      }
    }

    onSave(formData)
  }

  const isProvider = formData.role === 'Proveedor'

  return (
    <div 
      className="fixed inset-0 z-[10002] flex items-center justify-center p-4 bg-black/40"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header fijo */}
        <div className="flex-shrink-0 px-6 py-5 border-b border-slate-200 bg-white rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center">
                  <UserPlus className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{user ? 'Editar Usuario' : 'Crear Nuevo Perfil'}</h3>
                <p className="text-slate-600 text-xs mt-1">
                  {user 
                    ? 'Modifica los datos del perfil seleccionado.' 
                    : 'Ingresa la información para registrar un nuevo perfil.'}
                </p>
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
        <div className="flex-1 overflow-y-auto p-6">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-sm text-red-700 animate-in fade-in slide-in-from-top-1">
                <AlertTriangle className="h-4 w-4" />
                {error}
              </div>
            )}

            {/* Rol Selection - FIRST */}
            <div className="grid gap-2">
              <Label htmlFor="role" className="text-sm font-semibold text-slate-700">Rol</Label>
              <Select
                value={formData.role}
                onValueChange={(value) => setFormData({ ...formData, role: value as UserRole })}
              >
                <SelectTrigger id="role" className="bg-slate-50 border-slate-200">
                  <SelectValue placeholder="Selecciona un rol" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ingeniero">Ingeniero</SelectItem>
                  <SelectItem value="Facturación">Facturación</SelectItem>
                  <SelectItem value="Proveedor">Proveedor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Common Fields: Name & Email */}
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-sm font-semibold text-slate-700">
                {isProvider ? 'Nombre de la Empresa / Proveedor' : 'Nombre completo'}
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={isProvider ? "Ej. TecnoSalud S.A.S" : "Ej. Juan Pérez"}
                  className="pl-9 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                  required
                />
              </div>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-sm font-semibold text-slate-700">
                {isProvider ? 'Correo de contacto' : 'Correo electrónico'}
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="ejemplo@lime.com"
                className="bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                required
              />
            </div>

            {/* Provider Specific: Phone Only */}
            {isProvider && (
              <div className="grid gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                <Label htmlFor="phone" className="text-sm font-semibold text-slate-700">Teléfono de contacto</Label>
                <Input
                  id="phone"
                  value={formData.phone || ''}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Ej. +57 300 123 4567"
                  className="bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                />
              </div>
            )}

            {/* Non-Provider Specific Fields (excluding password for now) */}
            {!isProvider && (
              <div className="space-y-5 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="documentId" className="text-sm font-semibold text-slate-700">Documento</Label>
                    <Input
                      id="documentId"
                      value={formData.documentId || ''}
                      onChange={(e) => setFormData({ ...formData, documentId: e.target.value })}
                      placeholder="C.C. 1234567890"
                      className="bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone" className="text-sm font-semibold text-slate-700">Teléfono</Label>
                    <Input
                      id="phone"
                      value={formData.phone || ''}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+57 300..."
                      className="bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

              </div>
            )}

            {/* Status Field - ALWAYS LAST as requested */}
            <div className="grid gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
              <Label htmlFor="status" className="text-sm font-semibold text-slate-700">Estado</Label>
              <div className="flex items-center space-x-3 h-10 px-3 rounded-md border border-slate-200 bg-slate-50">
                <Switch
                  id="status"
                  checked={formData.status === 'active'}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, status: checked ? 'active' : 'inactive' })
                  }
                />
                <span className={cn(
                  "text-sm font-medium",
                  formData.status === 'active' ? "text-emerald-700" : "text-slate-500"
                )}>
                  {formData.status === 'active' ? 'Activo' : 'Inactivo'}
                </span>
              </div>
            </div>

            {/* Hidden submit button to allow Enter key submission */}
            <button type="submit" className="hidden" />
          </form>
        </div>

        {/* Footer fijo */}
        <div className="flex-shrink-0 flex items-center justify-end gap-3 pt-3 border-t border-slate-200 px-6 pb-4 bg-white rounded-b-2xl">
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button 
            onClick={() => handleSubmit()}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            <Save className="w-4 h-4 mr-2" />
            {user ? 'Guardar Cambios' : 'Crear Perfil'}
          </Button>
        </div>
      </div>
    </div>
  )
}

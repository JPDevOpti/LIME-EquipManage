"use client"

import { useMemo } from 'react'
import { InfoCard } from './info-card'
import { Button } from '@/components/ui/button'
import { Edit } from 'lucide-react'
import type { UserProfile } from '../types'
import { EditModal } from './edit-modal'

interface ProfileInfoProps {
  user: UserProfile
  onUpdate?: (updatedUser: UserProfile) => void
}

export function ProfileInfo({ user, onUpdate }: ProfileInfoProps) {
  const hasRoleSpecificData = useMemo(() => {
    if (!user.roleSpecificData) return false
    
    const data = user.roleSpecificData
    return !!(
      data.iniciales ||
      data.registroMedico ||
      data.observaciones
    )
  }, [user.roleSpecificData])

  const getRoleLabel = (role: string): string => {
    const labels: Record<string, string> = {
      admin: 'Administrador',
      coordinator: 'Coordinador',
      technician: 'Técnico'
    }
    return labels[role] || role
  }

  return (
    <>
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-teal-50">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">Información Personal</h3>
            <EditModal user={user} onUpdate={onUpdate} />
          </div>
        </div>

        <div className="p-6">
          {/* Personal Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {/* Nombre completo */}
            <InfoCard
              icon="user"
              label="Nombre Completo"
              value={`${user.firstName} ${user.lastName}`}
            />

            {/* Correo electrónico */}
            <InfoCard
              icon="email"
              label="Correo Electrónico"
              value={user.email}
            />

            {/* Estado */}
            <InfoCard
              icon="status"
              label="Estado"
              value={user.isActive ? 'Activo' : 'Inactivo'}
              statusColor={user.isActive ? 'green' : 'red'}
            />

            {/* Teléfono */}
            {user.phone && (
              <InfoCard
                icon="phone"
                label="Teléfono"
                value={user.phone}
              />
            )}

            {/* Documento */}
            {user.document && (
              <InfoCard
                icon="document"
                label="Documento"
                value={`${user.documentType} ${user.document}`}
              />
            )}

            {/* Rol */}
            <InfoCard
              icon="role"
              label="Rol"
              value={getRoleLabel(user.role)}
            />
          </div>

          {/* Role Specific Information */}
          {hasRoleSpecificData && (
            <div className="border-t border-slate-200 pt-6">
              <h4 className="text-md font-semibold text-slate-900 mb-4">
                Información Adicional
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {user.roleSpecificData.observaciones && (
                  <InfoCard
                    icon="document"
                    label="Observaciones"
                    value={user.roleSpecificData.observaciones}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}


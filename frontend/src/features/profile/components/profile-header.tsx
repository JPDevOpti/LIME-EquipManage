"use client"

import { UserCircle } from 'lucide-react'
import type { UserProfile } from '../types'
import { cn } from '@/lib/cn'

interface ProfileHeaderProps {
  user: UserProfile
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  const formatLastLogin = (date: Date): string => {
    return new Intl.DateTimeFormat('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(date))
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* User Info Section */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Avatar */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto sm:mx-0">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-blue-200 shadow-lg group">
                <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center text-slate-700">
                  <UserCircle className="w-[86%] h-[86%]" />
                </div>
              </div>
              
              {/* Status Indicator */}
              <div
                className={cn(
                  "absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white shadow-sm",
                  user.isActive ? 'bg-green-500' : 'bg-slate-400'
                )}
                title={user.isActive ? 'Usuario activo' : 'Usuario inactivo'}
              />
            </div>

            {/* User Details */}
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-slate-900 mb-1">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-sm text-slate-600">
                {user.email}
              </p>
              {user.lastLogin && (
                <p className="text-xs text-slate-500 mt-1">
                  Último acceso: {formatLastLogin(user.lastLogin)}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

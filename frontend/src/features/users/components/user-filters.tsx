"use client"

import type { ChangeEvent } from 'react'
import type { UserFilters, UserRole, UserStatus } from '../types'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Search, UserPlus } from 'lucide-react'

interface UserFiltersPanelProps {
  filters: UserFilters
  onFilterChange: (key: keyof UserFilters, value: string) => void
  onCreateUser: () => void
}

export function UserFiltersPanel({ filters, onFilterChange, onCreateUser }: UserFiltersPanelProps) {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    onFilterChange('search', e.target.value)
  }

  const handleRoleChange = (value: string) => {
    onFilterChange('role', value === 'all' ? '' : value)
  }
  
  const handleStatusChange = (value: string) => {
    onFilterChange('status', value === 'all' ? '' : value)
  }

  return (
    <Card className="bg-white/50 border-slate-200 overflow-hidden">
      <div className="p-4">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1 w-full space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 ml-1">Buscar usuario</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Nombre, email o empresa..."
                value={filters.search}
                onChange={handleSearchChange}
                className="pl-9 h-10 rounded-xl bg-white border-slate-200 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="w-full md:w-[200px] space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 ml-1">Rol</label>
            <Select value={filters.role || 'all'} onValueChange={handleRoleChange}>
              <SelectTrigger className="h-10 rounded-xl bg-white border-slate-200">
                <SelectValue placeholder="Todos los roles" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los roles</SelectItem>
                <SelectItem value="Administrador">Administrador</SelectItem>
                <SelectItem value="Ingeniero">Ingeniero</SelectItem>
                <SelectItem value="Facturación">Facturación</SelectItem>
                <SelectItem value="Proveedor">Proveedor</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full md:w-[200px] space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 ml-1">Estado</label>
            <Select value={filters.status || 'all'} onValueChange={handleStatusChange}>
              <SelectTrigger className="h-10 rounded-xl bg-white border-slate-200">
                <SelectValue placeholder="Todos los estados" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="active">Activo</SelectItem>
                <SelectItem value="inactive">Inactivo</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-end px-4 py-3 bg-slate-50/50 border-t border-slate-200">
        <Button 
          onClick={onCreateUser}
          className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
        >
          <UserPlus className="mr-2 h-4 w-4" />
          Crear nuevo perfil
        </Button>
      </div>
    </Card>
  )
}

"use client"

import { useState } from 'react'
import type { UserProfile } from '../types'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Edit2, Building2 } from 'lucide-react'
import { cn } from '@/lib/cn'

interface UsersTableProps {
  users: UserProfile[]
  onEdit: (user: UserProfile) => void
}

export function UsersTable({ users, onEdit }: UsersTableProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20
  
  const totalPages = Math.ceil(users.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <Card className="overflow-hidden border border-slate-200 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="py-3 px-4 text-left font-semibold text-slate-700 w-12">#</th>
              <th className="py-3 px-4 text-left font-semibold text-slate-700">Usuario</th>
              <th className="py-3 px-4 text-left font-semibold text-slate-700">Rol</th>
              <th className="py-3 px-4 text-left font-semibold text-slate-700">Estado</th>
              <th className="py-3 px-4 text-right font-semibold text-slate-700">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {users.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-slate-500">
                  No se encontraron usuarios
                </td>
              </tr>
            ) : (
              currentUsers.map((user, idx) => (
                <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-4 text-slate-500">
                    {indexOfFirstItem + idx + 1}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-slate-900">{user.name}</span>
                      <span className="text-xs text-slate-500">{user.email}</span>
                      {user.role === 'Proveedor' && user.company && (
                        <div className="flex items-center gap-1 mt-0.5 text-xs text-emerald-600 font-medium">
                          <Building2 className="h-3 w-3" />
                          {user.company}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                     <Badge 
                      variant="secondary"
                      className={cn(
                        "font-normal",
                        user.role === 'Proveedor' && "bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-200",
                        user.role === 'Ingeniero' && "bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200",
                        user.role === 'Administrador' && "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-200",
                        user.role === 'Facturación' && "bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-200"
                      )}
                     >
                       {user.role}
                     </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <span className={cn(
                      "inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium",
                      user.status === 'active' 
                        ? "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20" 
                        : "bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-500/20"
                    )}>
                      <span className={cn("h-1.5 w-1.5 rounded-full", user.status === 'active' ? "bg-emerald-500" : "bg-slate-400")} />
                      {user.status === 'active' ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => onEdit(user)}
                      className="h-8 w-8 p-0 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50"
                    >
                      <Edit2 className="h-4 w-4" />
                      <span className="sr-only">Editar</span>
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between border-t border-slate-200 px-4 py-3 bg-slate-50/50">
          <div className="text-sm text-slate-500">
             Mostrando <span className="font-medium text-slate-900">{indexOfFirstItem + 1}-{Math.min(indexOfLastItem, users.length)}</span> de <span className="font-medium text-slate-900">{users.length}</span>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="h-8 text-xs"
            >
              Anterior
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "primary" : "ghost"}
                  size="sm"
                  onClick={() => handlePageChange(page)}
                  className={cn("h-8 w-8 p-0 text-xs", currentPage === page && "bg-emerald-600 hover:bg-emerald-700")}
                >
                  {page}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="h-8 text-xs"
            >
              Siguiente
            </Button>
          </div>
        </div>
      )}
    </Card>
  )
}

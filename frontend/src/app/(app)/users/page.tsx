"use client"

import { useState } from 'react'
import { UserFiltersPanel } from '@/features/users/components/user-filters'
import { UsersTable } from '@/features/users/components/users-table'
import { UserModal } from '@/features/users/components/user-modal'
import { mockUsers } from '@/features/users/data/mock-users'
import type { UserProfile, UserFilters } from '@/features/users/types'

export default function UsersPage() {
  const [users, setUsers] = useState<UserProfile[]>(mockUsers)
  const [filters, setFilters] = useState<UserFilters>({
    search: '',
    role: 'Proveedor',
    status: ''
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<UserProfile | undefined>(undefined)

  const filteredUsers = users.filter((user) => {
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase()
      const matchesName = user.name.toLowerCase().includes(searchTerm)
      const matchesEmail = user.email.toLowerCase().includes(searchTerm)
      const matchesCompany = user.company?.toLowerCase().includes(searchTerm)
      if (!matchesName && !matchesEmail && !matchesCompany) return false
    }
    if (filters.role && user.role !== filters.role) return false
    if (filters.status && user.status !== filters.status) return false
    return true
  }).sort((a, b) => {
    // Priority to Providers
    if (a.role === 'Proveedor' && b.role !== 'Proveedor') return -1
    if (a.role !== 'Proveedor' && b.role === 'Proveedor') return 1
    
    // Secondary sort by name for consistency
    return a.name.localeCompare(b.name)
  })

  const handleFilterChange = (key: keyof UserFilters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const handleCreateUser = () => {
    setEditingUser(undefined)
    setIsModalOpen(true)
  }

  const handleEditUser = (user: UserProfile) => {
    setEditingUser(user)
    setIsModalOpen(true)
  }

  const handleSaveUser = (userData: Partial<UserProfile>) => {
    if (editingUser) {
      // Edit existing
      setUsers(users.map(u => u.id === editingUser.id ? { ...u, ...userData } as UserProfile : u))
    } else {
      // Create new
      const newUser: UserProfile = {
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date().toISOString(),
        ...userData
      } as UserProfile
      setUsers([newUser, ...users])
    }
    setIsModalOpen(false)
  }

  return (
    <div className="w-full space-y-6 pb-8">
      <UserFiltersPanel 
        filters={filters} 
        onFilterChange={handleFilterChange} 
        onCreateUser={handleCreateUser}
      />

      <UsersTable users={filteredUsers} onEdit={handleEditUser} />

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveUser}
        user={editingUser}
      />
    </div>
  )
}

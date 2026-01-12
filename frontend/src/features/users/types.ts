export type UserRole = 'Administrador' | 'Ingeniero' | 'Facturación' | 'Proveedor'
export type UserStatus = 'active' | 'inactive'

export interface UserProfile {
  id: string
  name: string
  email: string
  role: UserRole
  status: UserStatus
  company?: string
  documentId?: string
  phone?: string
  observations?: string
  password?: string
  createdAt: string
}

export interface UserFilters {
  search: string
  role: string
  status: string
}

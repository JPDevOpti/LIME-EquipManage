export type UserRole = 'admin' | 'coordinator' | 'technician'

export type DocumentType = 'CC' | 'CE' | 'PP'

export interface RoleSpecificData {
  iniciales?: string
  registroMedico?: string
  firmaUrl?: string
  observaciones?: string
}

export interface UserProfile {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  document: string
  documentType: DocumentType
  role: UserRole
  avatar?: string
  isActive: boolean
  lastLogin?: Date
  createdAt: Date
  updatedAt: Date
  roleSpecificData?: RoleSpecificData
}

export interface ValidationError {
  field: string
  message: string
}

export type ProfileEditPayload = {
  firstName: string
  lastName: string
  email: string
  phone?: string
  password?: string
  passwordConfirm?: string
}


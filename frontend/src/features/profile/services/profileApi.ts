import type { UserProfile, ProfileEditPayload } from '../types'

// Datos mock del perfil de usuario
const mockUserProfile: UserProfile = {
  id: 'user-1',
  firstName: 'Usuario',
  lastName: 'Ejemplo',
  email: 'usuario.ejemplo@udea.edu.co',
  phone: '+57 300 000 0000',
  document: '1234567890',
  documentType: 'CC',
  role: 'admin',
  isActive: true,
  lastLogin: new Date(),
  createdAt: new Date('2024-01-15'),
  updatedAt: new Date(),
  roleSpecificData: {
    observaciones: 'Usuario administrador del sistema'
  }
}

export const profileApi = {
  // Obtener perfil actual del usuario
  async getCurrentProfile(): Promise<UserProfile> {
    await new Promise(resolve => setTimeout(resolve, 500))
    return { ...mockUserProfile }
  },

  // Actualizar perfil del usuario
  async updateProfile(payload: ProfileEditPayload): Promise<UserProfile> {
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Simular validación
    if (payload.password && payload.password.length < 6) {
      throw new Error('La contraseña debe tener al menos 6 caracteres')
    }
    
    if (payload.password && payload.password !== payload.passwordConfirm) {
      throw new Error('Las contraseñas no coinciden')
    }

    // Actualizar perfil
    const updatedProfile: UserProfile = {
      ...mockUserProfile,
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      phone: payload.phone,
      updatedAt: new Date()
    }

    // Actualizar el mock para que los cambios persistan
    Object.assign(mockUserProfile, updatedProfile)

    return updatedProfile
  }
}


"use client"

import { useState, useEffect } from 'react'
import { ProfileHeader } from '@/features/profile/components/profile-header'
import { ProfileInfo } from '@/features/profile/components/profile-info'
import { profileApi } from '@/features/profile/services/profileApi'
import type { UserProfile } from '@/features/profile/types'

export default function ProfilePage() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadUserProfile = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const profile = await profileApi.getCurrentProfile()
      setUserProfile(profile)
    } catch (err: any) {
      console.error('Error cargando perfil:', err)
      setError(err?.message || 'Error al cargar el perfil')
    } finally {
      setIsLoading(false)
    }
  }

  const handleUpdate = (updatedUser: UserProfile) => {
    setUserProfile(updatedUser)
  }

  useEffect(() => {
    loadUserProfile()
  }, [])

  if (isLoading) {
    return (
      <div className="w-full space-y-8 pb-8">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <div className="animate-pulse">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-24 h-24 bg-slate-200 rounded-full"></div>
              <div className="space-y-2">
                <div className="h-6 bg-slate-200 rounded w-48"></div>
                <div className="h-4 bg-slate-200 rounded w-32"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full space-y-8 pb-8">
        <div className="bg-white rounded-lg shadow-sm border border-red-200 p-6">
          <div className="text-center">
            <div className="w-12 h-12 text-red-500 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Error al cargar el perfil</h3>
            <p className="text-slate-600 mb-4">{error}</p>
            <button
              onClick={loadUserProfile}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Reintentar
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (!userProfile) {
    return null
  }

  return (
    <div className="w-full space-y-8 pb-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <ProfileHeader user={userProfile} />
        <ProfileInfo user={userProfile} onUpdate={handleUpdate} />
      </div>
    </div>
  )
}

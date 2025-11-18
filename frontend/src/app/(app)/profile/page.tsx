import { ProfileHeader } from '@/features/profile/components/profile-header'
import { ProfileDetails } from '@/features/profile/components/profile-details'
import { ActivityTimeline } from '@/features/profile/components/activity-timeline'
import { Card } from '@/components/ui/card'

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold text-white">Mi perfil</h1>
        <p className="text-sm text-white/60">Vista simulada del perfil de usuario y permisos actuales.</p>
      </header>

      <ProfileHeader />
      <ProfileDetails />

      <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
        <ActivityTimeline />
        <Card title="Preferencias" className="border-white/10 bg-white/5">
          <dl className="space-y-3 text-sm text-white/70">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <dt>Notificaciones por correo</dt>
              <dd className="text-xs text-brand-200">Activadas</dd>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <dt>Recordatorios push</dt>
              <dd className="text-xs text-white/40">Pendiente de configurar</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/50">
              Las preferencias se sincronizarán con FastAPI y se almacenarán en PostgreSQL. Esta vista es sólo
              demostrativa.
            </div>
          </dl>
        </Card>
      </div>
    </div>
  )
}


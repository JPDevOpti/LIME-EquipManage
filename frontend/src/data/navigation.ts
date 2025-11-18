export interface NavItem {
  label: string
  href: string
  icon?: string
}

export const mainNav: NavItem[] = [
  { label: 'Panel general', href: '/dashboard', icon: 'layout' },
  { label: 'Ingresar equipo', href: '/add-equipment', icon: 'packagePlus' },
  { label: 'Inventario', href: '/inventory', icon: 'boxes' },
  { label: 'Mantenimiento', href: '/maintenance', icon: 'calendar' },
  { label: 'Soporte', href: '/support', icon: 'lifebuoy' },
  { label: 'Mi perfil', href: '/profile', icon: 'user' }
]

export const secondaryNav: NavItem[] = [
  { label: 'Documentación', href: '#', icon: 'book' },
  { label: 'Configuración', href: '#', icon: 'settings' }
]


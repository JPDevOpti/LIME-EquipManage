export interface NavItem {
  label: string
  href: string
  icon?: string
}

export const mainNav: NavItem[] = [
  { label: 'Panel general', href: '/dashboard', icon: 'layout' },
  { label: 'Ingresar equipo', href: '/add-equipment', icon: 'packagePlus' },
  { label: 'Editar equipo', href: '/edit-equipment', icon: 'package-search' },
  { label: 'Listado de equipos', href: '/inventory', icon: 'boxes' },
  { label: 'Cronograma', href: '/calendar', icon: 'calendar' },
  { label: 'Facturación', href: '/statistics', icon: 'hand-coins' },
  { label: 'Soporte', href: '/support', icon: 'message-circle-question-mark' },
  { label: 'Mi perfil', href: '/profile', icon: 'user' }
]

export const secondaryNav: NavItem[] = [
  { label: 'Documentación', href: '#', icon: 'book' }
]


"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/cn'
import { mainNav, secondaryNav } from '@/data/navigation'
import { SidebarIcon } from '@/components/navigation/sidebarIcon'

interface SidebarProps {
  collapsed?: boolean
  onToggle?: () => void
}

export function Sidebar({ collapsed = false, onToggle }: SidebarProps) {
  const pathname = usePathname() ?? ''

  return (
    <aside
      className={cn(
        'sticky top-0 flex h-screen flex-col justify-between overflow-visible border-r border-slate-200 bg-white shadow-sm transition-[width,padding] duration-250 ease-out',
        collapsed ? 'w-[82px] px-3 py-6' : 'w-[280px] px-5 py-6'
      )}
    >
      <div className="space-y-10">
        <div className="flex items-center gap-3 px-2">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 flex-shrink-0 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 shadow-lg shadow-emerald-600/40">
              <div className="absolute inset-0 flex items-end justify-start p-1.5">
                <svg
                  viewBox="0 0 24 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full"
                >
                  <path
                    d="M4 2 L4 30 L20 30 L20 26 L8 26 L8 2 Z"
                    fill="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div
              className={cn(
                'origin-left transition-opacity duration-200 ease-out',
                collapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'
              )}
            >
              <p className="text-sm font-semibold text-slate-900">BioEquipManager</p>
              <p className="text-xs text-slate-600">Gestión de equipos biomédicos</p>
            </div>
          </div>
        </div>

        <nav className="space-y-6">
          <div className="space-y-2">
            {mainNav.map((item, index) => {
              const active = pathname?.startsWith(item.href)
              return (
                <Link
                  key={`main-${item.href}-${index}`}
                  href={item.href}
                  title={collapsed ? item.label : undefined}
                  className={cn(
                    'group relative flex items-center rounded-xl py-3 text-base font-medium transition-all duration-200 ease-out hover:bg-slate-100 hover:text-slate-900',
                    active ? 'bg-emerald-50 text-emerald-700 shadow-sm' : 'text-slate-600',
                    collapsed ? 'justify-center px-0' : 'gap-3 px-4'
                  )}
                >
                  <SidebarIcon
                    name={item.icon}
                    className={cn(
                      'h-6 w-6 flex-shrink-0 text-slate-500 transition-colors duration-200 ease-out',
                      active && 'text-emerald-600'
                    )}
                  />
                  <span
                    className={cn(
                      'whitespace-nowrap text-left text-sm transition-all duration-200 ease-out',
                      collapsed ? 'max-w-0 opacity-0 pointer-events-none' : 'max-w-[160px] opacity-100'
                    )}
                  >
                    {item.label}
                  </span>
                  
                  {/* Tooltip para modo colapsado */}
                  {collapsed && (
                    <span className="absolute left-full ml-2 hidden whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-sm text-white shadow-lg group-hover:block">
                      {item.label}
                    </span>
                  )}
                </Link>
              )
            })}
          </div>

          <div className="space-y-2">
            {secondaryNav.map((item, index) => {
              const active = pathname?.startsWith(item.href)
              return (
                <Link
                  key={`secondary-${item.label}-${index}`}
                  href={item.href}
                  title={collapsed ? item.label : undefined}
                  className={cn(
                    'group relative flex items-center rounded-xl py-3 text-base font-medium text-slate-500 transition-all duration-200 ease-out hover:bg-slate-100 hover:text-slate-700',
                    collapsed ? 'justify-center px-0' : 'gap-3 px-4'
                  )}
                >
                  <SidebarIcon
                    name={item.icon}
                    className={cn(
                      'h-6 w-6 flex-shrink-0 text-slate-400 transition-colors duration-200 ease-out group-hover:text-slate-600'
                    )}
                  />
                  <span
                    className={cn(
                      'whitespace-nowrap text-left text-sm transition-all duration-200 ease-out',
                      collapsed ? 'max-w-0 opacity-0 pointer-events-none' : 'max-w-[160px] opacity-100'
                    )}
                  >
                    {item.label}
                  </span>
                  
                  {/* Tooltip para modo colapsado */}
                  {collapsed && (
                    <span className="absolute left-full ml-2 hidden whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-sm text-white shadow-lg group-hover:block">
                      {item.label}
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>

      {!collapsed && (
        <div className="relative overflow-hidden rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-4 shadow-sm">
          {/* Decoración de fondo */}
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-200/30 blur-2xl" />
          <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-teal-200/30 blur-xl" />
          
          <div className="relative space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800">Desarrollado por</p>
            
            <div className="space-y-2">
              <p className="text-sm font-bold text-slate-900">Juan Pablo Restrepo</p>
              <div className="flex justify-center">
                <a
                  href="https://github.com/JPDevOpti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded-lg bg-white/60 px-3 py-1.5 text-xs font-medium text-emerald-700 shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:text-emerald-800 hover:shadow-md"
                >
                  <svg className="h-4 w-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>@JPDevOpti</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}


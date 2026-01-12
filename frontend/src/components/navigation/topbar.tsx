"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, UserRound, UserCog, LogOut } from 'lucide-react'

interface TopbarProps {
  onToggleSidebar?: () => void
}

export function Topbar({ onToggleSidebar }: TopbarProps) {
  const [searchFocused, setSearchFocused] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Simple click outside handler (optional, but good for UX)
  // For now, we can simple toggle on click.

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between gap-4 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-xl shadow-sm lg:px-6">
      <div className="flex flex-1 items-center gap-3">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
          aria-label="Alternar sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Buscador */}
        <div className="relative flex-1 max-w-2xl">
          <div className={`relative flex items-center transition-all ${searchFocused ? 'scale-[1.02]' : ''}`}>
            <Search className="absolute left-4 h-5 w-5 text-slate-400 transition-colors" />
            <input
              type="search"
              placeholder="Buscar equipos, mantenimientos, técnicos..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-12 pr-4 text-sm text-slate-900 placeholder-slate-500 transition-all focus:border-emerald-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Usuario Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm transition-all hover:border-emerald-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          >
            <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 shadow-sm shadow-emerald-500/30">
              <UserRound className="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="hidden text-left text-sm sm:block">
              <p className="font-semibold text-slate-900">Sara Ochoa</p>
              <p className="text-xs text-slate-600">Ingeniera biomédica</p>
            </div>
          </button>

          {/* Menú Dropdown */}
          {isDropdownOpen && (
            <>
              {/* Backdrop invisible para cerrar al hacer click fuera */}
              <div
                className="fixed inset-0 z-30"
                onClick={() => setIsDropdownOpen(false)}
              />

              <div className="absolute right-0 top-full z-40 mt-2 w-56 origin-top-right rounded-xl border border-slate-100 bg-white p-1.5 shadow-lg ring-1 ring-black/5 focus:outline-none animate-in fade-in zoom-in-95 duration-200">
                <div className="mb-1.5 border-b border-slate-100 px-3 py-2">
                  <p className="text-sm font-medium text-slate-900">Mi Cuenta</p>
                  <p className="text-xs text-slate-500 truncate">sara.ochoa@lime.com</p>
                </div>

                <Link
                  href="/profile"
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <UserCog className="h-4 w-4" />
                  Editar perfil
                </Link>

                <Link
                  href="/login"
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-600 transition-colors hover:bg-red-50 hover:text-red-700"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <LogOut className="h-4 w-4" />
                  Cerrar sesión
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}


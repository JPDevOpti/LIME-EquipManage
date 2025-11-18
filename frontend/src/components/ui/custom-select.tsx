"use client"

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import { cn } from '@/lib/cn'

interface CustomSelectProps {
  options: { value: string; label: string }[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export function CustomSelect({ options, value, onChange, placeholder = 'Seleccionar...', className }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selectedOption = options.find(opt => opt.value === value)

  const handleSelect = (optionValue: string) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex h-10 w-full items-center justify-between rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900',
          'transition-colors',
          'focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20',
          isOpen && 'border-brand-500 ring-2 ring-brand-500/20',
          !value && 'text-slate-400'
        )}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <ChevronDown className={cn(
          'h-4 w-4 flex-shrink-0 text-slate-400 transition-transform',
          isOpen && 'rotate-180'
        )} />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full rounded-xl border border-slate-200 bg-white shadow-lg">
          <div className="max-h-60 overflow-y-auto p-1">
            {options.map((option) => {
              const isSelected = value === option.value
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={cn(
                    'flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors',
                    isSelected
                      ? 'bg-emerald-50 text-emerald-700 font-medium'
                      : 'text-slate-700 hover:bg-slate-50'
                  )}
                >
                  <span>{option.label}</span>
                  {isSelected && (
                    <Check className="h-4 w-4 text-emerald-600" strokeWidth={2.5} />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}


"use client"

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, X } from 'lucide-react'
import { cn } from '@/lib/cn'

interface MultiSelectProps {
  options: string[]
  value: string[]
  onChange: (value: string[]) => void
  placeholder?: string
  className?: string
}

export function MultiSelect({ options, value, onChange, placeholder = 'Seleccionar...', className }: MultiSelectProps) {
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

  const toggleOption = (option: string) => {
    const newValue = value.includes(option)
      ? value.filter(v => v !== option)
      : [...value, option]
    onChange(newValue)
  }

  const removeOption = (option: string, e: React.MouseEvent) => {
    e.stopPropagation()
    onChange(value.filter(v => v !== option))
  }

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex h-auto min-h-[40px] w-full items-center justify-between rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900',
          'transition-colors',
          'focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20',
          isOpen && 'border-brand-500 ring-2 ring-brand-500/20'
        )}
      >
        <div className="flex flex-wrap gap-1.5">
          {value.length === 0 ? (
            <span className="text-slate-400">{placeholder}</span>
          ) : (
            value.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1 rounded-lg bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700"
              >
                {item}
                <button
                  type="button"
                  onClick={(e) => removeOption(item, e)}
                  className="hover:text-emerald-900"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))
          )}
        </div>
        <ChevronDown className={cn(
          'h-4 w-4 flex-shrink-0 text-slate-400 transition-transform',
          isOpen && 'rotate-180'
        )} />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full rounded-xl border border-slate-200 bg-white shadow-lg">
          <div className="max-h-60 overflow-y-auto p-1">
            {options.map((option) => {
              const isSelected = value.includes(option)
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => toggleOption(option)}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors',
                    isSelected
                      ? 'bg-emerald-50 text-emerald-700 font-medium'
                      : 'text-slate-700 hover:bg-slate-50'
                  )}
                >
                  <div className={cn(
                    'flex h-4 w-4 items-center justify-center rounded border-2',
                    isSelected
                      ? 'border-emerald-500 bg-emerald-500'
                      : 'border-slate-300'
                  )}>
                    {isSelected && (
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  {option}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}


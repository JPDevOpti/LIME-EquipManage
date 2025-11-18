"use client"

import { forwardRef } from 'react'
import type { SelectHTMLAttributes } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean
  fullWidth?: boolean
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className, error, fullWidth = true, children, ...props },
  ref
) {
  return (
    <div className={cn('relative', fullWidth && 'w-full')}>
      <select
        ref={ref}
        className={cn(
          'flex h-10 w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-2 pr-10 text-sm text-slate-900',
          'transition-colors',
          'focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20',
          'disabled:cursor-not-allowed disabled:opacity-50',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
    </div>
  )
})


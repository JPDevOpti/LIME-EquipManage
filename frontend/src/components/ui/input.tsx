"use client"

import { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  fullWidth?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, error, fullWidth = true, type = 'text', ...props },
  ref
) {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        'flex h-10 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900',
        'placeholder:text-slate-400',
        'transition-colors',
        'focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20',
        'disabled:cursor-not-allowed disabled:opacity-50',
        error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
        fullWidth && 'w-full',
        className
      )}
      {...props}
    />
  )
})


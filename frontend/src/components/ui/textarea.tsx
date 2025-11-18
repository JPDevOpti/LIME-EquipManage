"use client"

import { forwardRef } from 'react'
import type { TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
  fullWidth?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, error, fullWidth = true, ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      className={cn(
        'flex min-h-[80px] rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900',
        'placeholder:text-slate-400',
        'transition-colors',
        'focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'resize-y',
        error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
        fullWidth && 'w-full',
        className
      )}
      {...props}
    />
  )
})


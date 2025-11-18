"use client"

import { forwardRef, useRef } from 'react'
import type { InputHTMLAttributes } from 'react'
import { Calendar } from 'lucide-react'
import { cn } from '@/lib/cn'

export interface DateInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  error?: boolean
  fullWidth?: boolean
}

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(function DateInput(
  { className, error, fullWidth = true, ...props },
  ref
) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker()
    }
  }

  return (
    <div className={cn('relative', fullWidth && 'w-full')}>
      <input
        ref={(node) => {
          if (typeof ref === 'function') {
            ref(node)
          } else if (ref) {
            ref.current = node
          }
          (inputRef as any).current = node
        }}
        type="date"
        className={cn(
          'flex h-10 w-full rounded-xl border border-slate-300 bg-white pl-4 pr-10 py-2 text-sm text-slate-900',
          'placeholder:text-slate-400',
          'transition-colors',
          'focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20',
          'disabled:cursor-not-allowed disabled:opacity-50',
          '[color-scheme:light]',
          '[&::-webkit-calendar-picker-indicator]:opacity-0',
          '[&::-webkit-calendar-picker-indicator]:absolute',
          '[&::-webkit-calendar-picker-indicator]:inset-0',
          '[&::-webkit-calendar-picker-indicator]:w-full',
          '[&::-webkit-calendar-picker-indicator]:h-full',
          '[&::-webkit-calendar-picker-indicator]:cursor-pointer',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
          className
        )}
        {...props}
      />
      <Calendar 
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" 
      />
    </div>
  )
})


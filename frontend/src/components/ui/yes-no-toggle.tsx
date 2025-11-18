"use client"

import { Label } from '@/components/ui/label'
import { cn } from '@/lib/cn'

interface YesNoToggleProps {
  label: string
  value: string
  onChange: (value: string) => void
  className?: string
}

export function YesNoToggle({ label, value, onChange, className }: YesNoToggleProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <Label className="text-sm font-semibold text-slate-700">{label}</Label>
      <div className="flex gap-2">
        {(['SI', 'NO'] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(value === option ? '' : option)}
            className={cn(
              "flex-1 px-3 py-2 rounded-lg border-2 text-sm font-semibold transition",
              value === option
                ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                : 'border-slate-200 text-slate-600 hover:border-emerald-200 hover:bg-emerald-50/50'
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}


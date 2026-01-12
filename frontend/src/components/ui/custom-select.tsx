"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/cn"

interface CustomSelectProps {
  options: { value: string; label: string }[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export function CustomSelect({ options, value, onChange, placeholder = 'Seleccionar...', className }: CustomSelectProps) {
  return (
    <div className={cn("w-full", className)}>
      <Select value={value || undefined} onValueChange={onChange}>
        <SelectTrigger className="w-full bg-white border-slate-300">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}







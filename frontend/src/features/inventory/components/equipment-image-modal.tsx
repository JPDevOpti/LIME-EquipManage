import { ImageIcon } from 'lucide-react'
import type { EquipmentRecord } from '@/features/inventory/data/mock-equipment'

interface EquipmentImageProps {
  equipment: EquipmentRecord | null
}

export function EquipmentImage({ equipment }: EquipmentImageProps) {
  if (!equipment) return null

  return (
    <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-8">
      <div className="text-center">
        <ImageIcon className="mx-auto h-16 w-16 text-slate-300" />
        <p className="mt-4 text-sm font-medium text-slate-500">
          Imagen del equipo
        </p>
        <p className="mt-1 text-xs text-slate-400">
          {equipment.code}
        </p>
      </div>
    </div>
  )
}

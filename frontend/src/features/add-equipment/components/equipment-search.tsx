"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Search, Package2, MapPin, Building2, User } from 'lucide-react'
import { cn } from '@/lib/cn'

interface EquipmentSearchResult {
  id: string
  code: string
  udeaCode: string
  ipsCode: string
  ecriCode?: string
  name: string
  brand: string
  model: string
  location: string
  service: string
  responsible: string
}

// Función simulada para buscar equipos (reemplazar con llamada a API)
async function searchEquipment(query: string): Promise<EquipmentSearchResult[]> {
  // TODO: Reemplazar con llamada real a la API
  // Por ahora retornamos datos de ejemplo filtrados
  const mockEquipment: EquipmentSearchResult[] = [
    {
      id: '1',
      code: 'BIO-16869',
      udeaCode: 'BIO-16869',
      ipsCode: '180235',
      ecriCode: '008811',
      name: 'LUMINEX - fluoroanalizador',
      brand: 'LUMINEX',
      model: 'LUMINEX LX 100 / 200',
      location: 'Torre 1, Lab 410',
      service: 'Laboratorio trasplantes',
      responsible: 'Juan Jose Serrano'
    },
    {
      id: '2',
      code: 'BIO-12345',
      udeaCode: 'BIO-12345',
      ipsCode: '180236',
      name: 'Microscopio óptico',
      brand: 'Olympus',
      model: 'CX23',
      location: 'Torre 2, Lab 205',
      service: 'Patología',
      responsible: 'María González'
    },
    {
      id: '3',
      code: 'BIO-67890',
      udeaCode: 'BIO-67890',
      ipsCode: '180237',
      name: 'Centrífuga refrigerada',
      brand: 'Eppendorf',
      model: '5424R',
      location: 'Torre 1, Lab 310',
      service: 'Bioquímica',
      responsible: 'Carlos Rodríguez'
    }
  ]

  if (!query.trim()) {
    return []
  }

  const lowerQuery = query.toLowerCase()
  return mockEquipment.filter(
    (eq) =>
      eq.code.toLowerCase().includes(lowerQuery) ||
      eq.udeaCode.toLowerCase().includes(lowerQuery) ||
      eq.ipsCode.toLowerCase().includes(lowerQuery) ||
      eq.ecriCode?.toLowerCase().includes(lowerQuery) ||
      eq.name.toLowerCase().includes(lowerQuery) ||
      eq.brand.toLowerCase().includes(lowerQuery) ||
      eq.model.toLowerCase().includes(lowerQuery)
  )
}

interface EquipmentSearchProps {
  onSelectEquipment?: (id: string) => void
}

export function EquipmentSearch({ onSelectEquipment }: EquipmentSearchProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<EquipmentSearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim().length >= 2) {
        setIsSearching(true)
        const searchResults = await searchEquipment(searchQuery)
        setResults(searchResults)
        setIsSearching(false)
        setHasSearched(true)
      } else {
        setResults([])
        setHasSearched(false)
      }
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [searchQuery])

  const handleSelectEquipment = (id: string) => {
    if (onSelectEquipment) {
      onSelectEquipment(id)
    } else {
      router.push(`/edit-equipment/${id}`)
    }
  }

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <Input
          type="text"
          placeholder="Buscar por código (UdeA, IPS, ECRI) o nombre del equipo..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 pr-4 py-6 text-base"
        />
      </div>

      {isSearching && (
        <div className="flex items-center justify-center py-8">
          <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-emerald-600 border-r-transparent"></div>
        </div>
      )}

      {!isSearching && hasSearched && results.length === 0 && (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
          <Package2 className="h-12 w-12 text-slate-400 mx-auto mb-3" />
          <p className="text-base font-medium text-slate-600 mb-1">
            No se encontraron equipos
          </p>
          <p className="text-sm text-slate-500">
            Intenta con otro código o nombre
          </p>
        </div>
      )}

      {!isSearching && results.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-700">
              {results.length} {results.length === 1 ? 'equipo encontrado' : 'equipos encontrados'}
            </p>
          </div>

          <div className="grid gap-3">
            {results.map((equipment) => (
              <button
                key={equipment.id}
                onClick={() => handleSelectEquipment(equipment.id)}
                className={cn(
                  "group relative rounded-xl border-2 border-slate-200 bg-white p-5 text-left transition-all hover:border-emerald-300 hover:shadow-md",
                  "focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 rounded-lg bg-emerald-50 p-2.5">
                        <Package2 className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          {equipment.name}
                        </h3>
                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <Badge size="sm" variant="success" className="font-mono">
                            {equipment.udeaCode}
                          </Badge>
                          <Badge size="sm" variant="info" className="font-mono">
                            IPS: {equipment.ipsCode}
                          </Badge>
                          {equipment.ecriCode && (
                            <Badge size="sm" variant="secondary" className="font-mono">
                              ECRI: {equipment.ecriCode}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-2 text-sm text-slate-600 md:grid-cols-2">
                      <div className="flex items-center gap-2">
                        <Package2 className="h-4 w-4 text-slate-400 flex-shrink-0" />
                        <span className="truncate">
                          <span className="font-medium">{equipment.brand}</span>
                          {equipment.model && ` - ${equipment.model}`}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-slate-400 flex-shrink-0" />
                        <span className="truncate">{equipment.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-slate-400 flex-shrink-0" />
                        <span className="truncate">{equipment.service}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-slate-400 flex-shrink-0" />
                        <span className="truncate">{equipment.responsible}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <Button
                      type="button"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Editar
                    </Button>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}


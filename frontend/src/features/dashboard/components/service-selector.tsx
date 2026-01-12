"use client"

import { useServiceFilter } from '../context/service-filter-context'

import { SERVICES } from '../data/mock-data'

export function ServiceSelector() {
  const { selectedService, setSelectedService } = useServiceFilter()

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div>
        <label htmlFor="service-filter" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500">
          Filtrar por servicio
        </label>
        <select
          id="service-filter"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 transition-colors hover:border-slate-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
        >
          {SERVICES.map((service) => (
            <option key={service.value} value={service.value}>
              {service.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

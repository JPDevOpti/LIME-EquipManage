import Image from 'next/image'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-900">
      {/* Imagen de fondo del laboratorio */}
      <div className="absolute inset-0">
        <Image
          src="/Images/ImagenLaboratorio.png"
          alt="Laboratorio LIME"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay degradado suave para mejor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/75" />
      </div>

      {/* Patrón decorativo muy sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Contenedor principal centrado */}
      <div className="relative z-10 flex w-full items-center justify-center px-6 py-12">
        {children}
      </div>
    </div>
  )
}


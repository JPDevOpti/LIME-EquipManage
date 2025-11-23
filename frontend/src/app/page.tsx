import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, 
  Shield, 
  Activity, 
  FileCheck, 
  TrendingUp, 
  Clock,
  Zap,
  CheckCircle,
  Users,
  Calendar,
  BarChart3
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function LandingPage() {
  const benefits = [
    {
      icon: Shield,
      title: 'Cumplimiento Normativo',
      description: 'Garantiza el cumplimiento de regulaciones sanitarias y estándares de calidad en equipos biomédicos.'
    },
    {
      icon: Clock,
      title: 'Ahorro de Tiempo',
      description: 'Automatiza procesos de registro, seguimiento y programación reduciendo la carga administrativa.'
    },
    {
      icon: Zap,
      title: 'Prevención Proactiva',
      description: 'Alertas tempranas y mantenimiento predictivo para evitar fallas y tiempos de inactividad.'
    },
    {
      icon: TrendingUp,
      title: 'Decisiones Basadas en Datos',
      description: 'Indicadores y reportes en tiempo real para optimizar recursos y mejorar la gestión hospitalaria.'
    }
  ]

  const features = [
    {
      icon: Activity,
      title: 'Gestión de Inventario',
      description: 'Control completo de equipos médicos con registro detallado, ubicación, estado operativo y documentación técnica asociada.',
      items: ['Registro de equipos', 'Hojas de vida digitales', 'Trazabilidad de movimientos', 'Gestión de garantías'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Calendar,
      title: 'Mantenimiento Preventivo y Correctivo',
      description: 'Programa y ejecuta mantenimientos con cronogramas automáticos, asignación de técnicos y seguimiento de cumplimiento.',
      items: ['Calendario inteligente', 'Órdenes de trabajo', 'Alertas automáticas', 'Historial completo'],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: FileCheck,
      title: 'Control de Calibraciones',
      description: 'Gestiona calibraciones y verificaciones metrológicas con certificados digitales y cumplimiento de estándares.',
      items: ['Certificados digitales', 'Control de vencimientos', 'Trazabilidad metrológica', 'Reportes normativos'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Analítica e Indicadores',
      description: 'Visualiza KPIs clave, genera reportes personalizados y exporta datos para análisis avanzados y auditorías.',
      items: ['Dashboards interactivos', 'Reportes personalizados', 'Exportación de datos', 'Indicadores de gestión'],
      color: 'from-amber-500 to-amber-600'
    }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="mx-auto flex h-20 w-full items-center justify-between px-6 md:px-12 lg:px-16 xl:px-24">
          {/* Navegación izquierda */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/Images/LOGO-LIME-Inicial.png"
                alt="Logo LIME"
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <div className="hidden items-center gap-6 lg:flex">
              <Link href="#beneficios" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
                Beneficios
              </Link>
              <Link href="#funcionalidades" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
                Funcionalidades
              </Link>
              <Link href="#proceso" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
                Proceso
              </Link>
            </div>
          </div>

          {/* Logos institucionales centrados */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 xl:flex">
            <Image
              src="/Images/Logo-LIME-NoFondo.png"
              alt="Logo LIME"
              width={100}
              height={40}
              className="h-10 w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
            />
            <Image
              src="/Images/Banner_UDEA.png"
              alt="Universidad de Antioquia"
              width={100}
              height={40}
              className="h-10 w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
            />
            <Image
              src="/Images/Banner_HAMA.png"
              alt="Hospital Alma Mater"
              width={120}
              height={48}
              className="h-12 w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
            />
          </div>

          {/* Botón derecho */}
          <Button asChild size="sm">
            <Link href="/login">Acceder</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900">
        {/* Imagen de fondo del laboratorio */}
        <div className="absolute inset-0">
          <Image
            src="/Images/ImagenLaboratorio.jpg"
            alt="Laboratorio LIME"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay degradado suave para mejor legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/75" />
        </div>
        
        {/* Patron decorativo muy sutil */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />
        
        <div className="relative mx-auto w-full px-6 py-20 md:px-12 md:py-32 lg:px-16 lg:py-40 xl:px-24">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="mb-8 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              Gestiona tus equipos biomédicos de manera{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">inteligente y segura</span>
            </h1>
            
            <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-slate-200">
              Plataforma integral que centraliza el inventario, automatiza mantenimientos, gestiona calibraciones 
              y proporciona analítica en tiempo real para la toma de decisiones en hospitales y centros médicos.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-cyan-500 text-white hover:bg-cyan-600">
                <Link href="/login">
                  Comenzar ahora
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-2 border-white/30 text-white hover:bg-white/10">
                <Link href="#beneficios">
                  Conocer más
                </Link>
              </Button>
            </div>

            {/* Métricas de confianza */}
            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/20 pt-12 md:grid-cols-4">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-cyan-400">500+</div>
                <div className="text-sm text-slate-300">Equipos gestionados</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-cyan-400">3</div>
                <div className="text-sm text-slate-300">Sedes integradas</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-cyan-400">95%</div>
                <div className="text-sm text-slate-300">Cumplimiento normativo</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-cyan-400">24/7</div>
                <div className="text-sm text-slate-300">Monitoreo continuo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="proceso" className="relative border-b border-slate-200 bg-white py-24">
        <div className="mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Flujo de trabajo simplificado
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Gestiona el ciclo de vida completo en 4 pasos intuitivos
            </p>
          </div>

          <div className="relative grid gap-16 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '01',
                icon: Activity,
                title: 'Registra tus equipos',
                description: 'Ingresa la información técnica, ubicación y documentación de cada equipo biomédico en el sistema.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                step: '02',
                icon: Calendar,
                title: 'Programa mantenimientos',
                description: 'El sistema genera automáticamente calendarios de mantenimiento preventivo y calibraciones según normativa.',
                color: 'from-cyan-500 to-cyan-600'
              },
              {
                step: '03',
                icon: FileCheck,
                title: 'Ejecuta y documenta',
                description: 'Asigna técnicos, registra intervenciones, adjunta reportes y actualiza el estado en tiempo real.',
                color: 'from-emerald-500 to-emerald-600'
              },
              {
                step: '04',
                icon: BarChart3,
                title: 'Analiza y mejora',
                description: 'Visualiza indicadores, identifica tendencias y toma decisiones basadas en datos históricos y predictivos.',
                color: 'from-teal-500 to-teal-600'
              }
            ].map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.step} className="relative flex flex-col items-center text-center">
                  {/* Línea conectora */}
                  {index < 3 && (
                    <div className="absolute left-[calc(50%+40px)] top-16 hidden h-0.5 w-[calc(100%-80px)] bg-gradient-to-r from-slate-300 to-slate-200 lg:block" />
                  )}
                  
                  {/* Número y icono */}
                  <div className="relative mb-6">
                    <div className={`flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-xl`}>
                      <Icon className="h-12 w-12 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-slate-900 text-sm font-bold text-white">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="mb-3 text-xl font-bold text-slate-900">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="relative border-b border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 py-20">
        {/* Patron decorativo sutil */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59 130 246) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />
        <div className="relative mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Beneficios clave
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Optimiza la gestión de equipos biomédicos con una plataforma diseñada 
              para el sector salud
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="group flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 transition-all group-hover:bg-brand-100 group-hover:shadow-lg">
                    <Icon className="h-8 w-8 text-brand-600 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funcionalidades" className="relative bg-gradient-to-b from-white via-slate-50 to-white py-20">
        {/* Blobs decorativos */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-emerald-200/30 to-teal-200/30 blur-[100px]" />
          <div className="absolute bottom-1/4 left-0 h-[350px] w-[350px] rounded-full bg-gradient-to-tr from-blue-200/30 to-brand-200/30 blur-[90px]" />
        </div>
        <div className="relative mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Funcionalidades completas
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Todo lo que necesitas para gestionar el ciclo de vida de tus equipos médicos
            </p>
          </div>

          <div className="relative grid gap-8 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="group overflow-hidden transition-all hover:shadow-xl">
                  <div className="flex flex-col">
                    <div className={`flex items-center gap-4 bg-gradient-to-r ${feature.color} p-6`}>
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
                        <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    </div>
                    <div className="p-6">
                      <p className="mb-6 text-slate-600">{feature.description}</p>
                      <ul className="space-y-3">
                        {feature.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-slate-200 bg-gradient-to-br from-brand-600 to-brand-700 py-20">
        <div className="mx-auto w-full px-6 text-center md:px-12 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-3xl">
            <Users className="mx-auto mb-6 h-16 w-16 text-white/90" strokeWidth={1.5} />
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Implementado en instituciones de salud líderes
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-white/90">
              Sistema desarrollado específicamente para el Laboratorio LIME, Hospital Alma Mater 
              y Universidad de Antioquia, con estándares de calidad y trazabilidad que cumplen 
              normativas colombianas e internacionales.
            </p>
            <Button asChild size="lg" className="bg-white text-brand-700 hover:bg-slate-50">
              <Link href="/login">
                Acceder al sistema
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo y descripción */}
            <div className="space-y-4 lg:col-span-2">
              <div className="flex items-center gap-3">
                <Image
                  src="/Images/LOGO-LIME-Inicial.png"
                  alt="Logo LIME"
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
                <span className="text-xl font-bold text-slate-900">EquipManage</span>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-slate-600">
                Sistema integral de gestión de equipos biomédicos desarrollado para garantizar 
                trazabilidad, cumplimiento normativo y optimización de recursos en instituciones de salud.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Image
                  src="/Images/Logo-LIME-NoFondo.png"
                  alt="Logo LIME"
                  width={100}
                  height={40}
                  className="h-8 w-auto object-contain opacity-60"
                />
                <Image
                  src="/Images/Banner_UDEA.png"
                  alt="Universidad de Antioquia"
                  width={100}
                  height={40}
                  className="h-8 w-auto object-contain opacity-60"
                />
                <Image
                  src="/Images/Banner_HAMA.png"
                  alt="Hospital Alma Mater"
                  width={120}
                  height={48}
                  className="h-10 w-auto object-contain opacity-60"
                />
              </div>
            </div>

            {/* Navegación */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-slate-900">Navegación</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#beneficios" className="text-sm text-slate-600 transition-colors hover:text-brand-600">
                    Beneficios
                  </Link>
                </li>
                <li>
                  <Link href="#funcionalidades" className="text-sm text-slate-600 transition-colors hover:text-brand-600">
                    Funcionalidades
                  </Link>
                </li>
                <li>
                  <Link href="#proceso" className="text-sm text-slate-600 transition-colors hover:text-brand-600">
                    Cómo funciona
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="text-sm text-slate-600 transition-colors hover:text-brand-600">
                    Acceder
                  </Link>
                </li>
              </ul>
            </div>

            {/* Soporte */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-slate-900">Soporte</h4>
              <ul className="space-y-3">
                <li className="text-sm text-slate-600">
                  Laboratorio LIME
                </li>
                <li className="text-sm text-slate-600">
                  Universidad de Antioquia
                </li>
                <li className="text-sm text-slate-600">
                  Medellín, Colombia
                </li>
                <li>
                  <a href="mailto:soporte@lime.udea.edu.co" className="text-sm text-brand-600 transition-colors hover:text-brand-700">
                    soporte@lime.udea.edu.co
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 border-t border-slate-200 pt-8 text-center">
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} EquipManage - Laboratorio LIME, Universidad de Antioquia
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Sistema de gestión de equipos biomédicos para instituciones de salud
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}


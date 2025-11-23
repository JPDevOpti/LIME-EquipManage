# EquipManage

Sistema integral de gestión de equipos biomédicos desarrollado para el Laboratorio LIME, Universidad de Antioquia y Hospital Alma Mater. Plataforma web que centraliza el inventario, automatiza mantenimientos, gestiona calibraciones y proporciona analítica en tiempo real para la toma de decisiones en instituciones de salud.

## Descripción

EquipManage es una solución completa diseñada específicamente para la gestión del ciclo de vida de equipos biomédicos en entornos hospitalarios. El sistema garantiza el cumplimiento de regulaciones sanitarias y estándares de calidad, automatizando procesos de registro, seguimiento y programación para reducir la carga administrativa.

## Características Principales

### 📦 Gestión de Inventario
- Registro completo de equipos médicos con información técnica detallada
- Hojas de vida digitales con trazabilidad completa
- Control de ubicación, estado operativo y documentación técnica
- Gestión de garantías y seguimiento de movimientos
- Clasificación por categorías, criticidad y riesgo
- Control de códigos IPS, ECRI e INVIMA

### 🔧 Mantenimiento Preventivo y Correctivo
- Calendario inteligente de mantenimientos
- Programación automática según normativa
- Órdenes de trabajo con asignación de técnicos
- Alertas automáticas de vencimientos
- Historial completo de intervenciones
- Seguimiento de cumplimiento y costos

### 📊 Analítica e Indicadores
- Dashboard interactivo con KPIs en tiempo real
- Gráficos de tendencias y análisis mensuales
- Reportes personalizados
- Exportación de datos para auditorías
- Indicadores de gestión y cumplimiento
- Estadísticas de facturación

### 🎫 Sistema de Soporte
- Gestión de tickets de soporte
- Seguimiento de solicitudes
- Estadísticas de soporte
- Tablero de trabajo para técnicos

### 👤 Gestión de Perfil
- Perfil de usuario personalizable
- Historial de actividades
- Configuración de preferencias

## Tecnologías Utilizadas

### Frontend
- **Next.js 14.1.0** - Framework React con App Router
- **React 18.2.0** - Biblioteca de interfaz de usuario
- **TypeScript 5.3.3** - Tipado estático
- **Tailwind CSS 3.4.1** - Framework de estilos utility-first
- **Recharts 2.10.4** - Biblioteca de gráficos
- **Lucide React** - Iconos modernos
- **Radix UI** - Componentes accesibles

### Herramientas de Desarrollo
- **ESLint** - Linter para código JavaScript/TypeScript
- **PostCSS** - Procesador de CSS
- **Autoprefixer** - Compatibilidad de navegadores

## Requisitos Previos

- **Node.js** >= 18.17.0
- **npm** (incluido con Node.js)
- **Git** (para clonar el repositorio)

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/JPDevOpti/LIME-EquipManage.git
cd LIME-EquipManage
```

2. Navega al directorio del frontend:
```bash
cd frontend
```

3. Instala las dependencias:
```bash
npm install
```

## Uso

### Desarrollo

El proyecto incluye un script de control para facilitar el desarrollo:

```bash
# Desde la raíz del proyecto
./run.sh start    # Inicia el servidor de desarrollo
./run.sh stop     # Detiene el servidor
./run.sh status   # Muestra el estado del servidor
./run.sh help     # Muestra la ayuda
```

O manualmente desde el directorio `frontend`:

```bash
cd frontend
npm run dev
```

El servidor estará disponible en `http://localhost:3000` (o el puerto especificado en `FRONTEND_PORT`).

### Producción

Para construir la aplicación para producción:

```bash
cd frontend
npm run build
npm start
```

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo con Turbo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter para verificar el código

## Estructura del Proyecto

```
LIME-EquipManage/
├── frontend/                    # Aplicación Next.js
│   ├── src/
│   │   ├── app/                # Rutas y páginas (App Router)
│   │   │   ├── (app)/          # Rutas protegidas de la aplicación
│   │   │   │   ├── dashboard/  # Panel principal
│   │   │   │   ├── inventory/ # Listado de equipos
│   │   │   │   ├── add-equipment/    # Agregar equipos
│   │   │   │   ├── edit-equipment/   # Editar equipos
│   │   │   │   ├── calendar/          # Calendario de mantenimientos
│   │   │   │   ├── statistics/       # Estadísticas y facturación
│   │   │   │   ├── support/          # Sistema de soporte
│   │   │   │   └── profile/          # Perfil de usuario
│   │   │   ├── (public)/       # Rutas públicas
│   │   │   │   └── login/      # Página de inicio de sesión
│   │   │   ├── layout.tsx     # Layout principal
│   │   │   └── page.tsx        # Página de inicio (landing)
│   │   ├── components/         # Componentes reutilizables
│   │   │   ├── layout/         # Componentes de layout
│   │   │   ├── navigation/     # Navegación (sidebar, topbar)
│   │   │   └── ui/             # Componentes UI base
│   │   ├── features/           # Funcionalidades por módulo
│   │   │   ├── dashboard/      # Módulo de dashboard
│   │   │   ├── inventory/      # Módulo de inventario
│   │   │   ├── add-equipment/  # Módulo de agregar equipos
│   │   │   ├── calendar/       # Módulo de calendario
│   │   │   ├── statistics/    # Módulo de estadísticas
│   │   │   ├── support/       # Módulo de soporte
│   │   │   └── profile/       # Módulo de perfil
│   │   ├── data/              # Datos estáticos y configuración
│   │   ├── lib/               # Utilidades y helpers
│   │   └── styles/            # Estilos globales
│   ├── public/                # Archivos estáticos
│   │   └── Images/            # Imágenes y logos
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   └── next.config.js
├── run.sh                      # Script de control del proyecto
├── vercel.json                 # Configuración de Vercel
├── LICENSE                     # Licencia MIT
└── README.md                   # Este archivo
```

## Arquitectura

El proyecto sigue una arquitectura modular basada en features:

- **App Router de Next.js**: Utiliza el nuevo sistema de enrutamiento basado en archivos
- **Feature-based structure**: Cada funcionalidad está organizada en su propio módulo
- **Componentes reutilizables**: UI components compartidos en `/components/ui`
- **TypeScript**: Tipado estático en todo el proyecto
- **Tailwind CSS**: Estilos utility-first con configuración personalizada

## Configuración

### Variables de Entorno

El proyecto está configurado para funcionar con variables de entorno. Crea un archivo `.env.local` en el directorio `frontend/` si necesitas configurar:

- URLs de API
- Configuraciones de autenticación
- Otras variables de entorno necesarias

### Personalización

- **Colores**: Configurados en `tailwind.config.ts` con la paleta de marca
- **Fuentes**: Poppins configurada en `layout.tsx`
- **Rutas**: Definidas en `src/data/navigation.ts`

## Despliegue

El proyecto está configurado para desplegarse en Vercel. La configuración se encuentra en `vercel.json`.

Para desplegar:

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente la configuración de Next.js
3. El despliegue se realizará automáticamente en cada push a la rama principal

## Instituciones

Este sistema ha sido desarrollado para:

- **Laboratorio LIME** - Laboratorio de Ingeniería Médica
- **Universidad de Antioquia** - Medellín, Colombia
- **Hospital Alma Mater** - Medellín, Colombia


## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

Copyright (c) 2025 Juan Pablo Restrepo

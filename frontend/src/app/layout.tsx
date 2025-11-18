import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/app/globals.css'
import { cn } from '@/lib/cn'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'BioEquipManager',
  description: 'Suite para administración de equipos biomédicos',
  icons: {
    icon: '/FavIco.ico'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-slate-50 font-poppins antialiased', poppins.variable, poppins.className)}>
        {children}
      </body>
    </html>
  )
}


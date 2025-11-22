import type { SupportTicket, NewTicketForm, TicketSearch } from '../types'
import { TicketStatusEnum } from '../types'

// Función para generar tickets mock
function generateMockTickets(): SupportTicket[] {
  const tickets: SupportTicket[] = []
  const categories: Array<'bug' | 'feature' | 'question' | 'technical'> = ['bug', 'feature', 'question', 'technical']
  const statuses: Array<'open' | 'in-progress' | 'resolved' | 'closed'> = ['open', 'in-progress', 'resolved', 'closed']
  
  const titles = [
    'Error al guardar equipo',
    'Solicitud de nueva funcionalidad',
    'Pregunta sobre calibraciones',
    'Problema técnico con el sistema',
    'Bug en el formulario de mantenimiento',
    'Mejora en el dashboard',
    'Consulta sobre reportes',
    'Error de conexión a la base de datos'
  ]
  
  const descriptions = [
    'Al intentar guardar un nuevo equipo, el sistema muestra un error 500. Esto ocurre cuando se intenta subir una imagen.',
    'Sería útil tener un filtro avanzado en el inventario para buscar por múltiples criterios simultáneamente.',
    '¿Cómo puedo exportar el historial de calibraciones de un equipo específico?',
    'El sistema se cuelga cuando hay más de 100 equipos en el inventario. Necesito ayuda para optimizar la carga.',
    'El campo de fecha en el formulario de mantenimiento no acepta fechas anteriores a 2020.',
    'Me gustaría poder personalizar las columnas visibles en la tabla de inventario.',
    '¿Existe alguna forma de generar reportes personalizados con los datos de mantenimiento?',
    'Ocasionalmente el sistema pierde la conexión con la base de datos y muestra un error genérico.'
  ]
  
  let ticketNumber = 1
  const currentYear = new Date().getFullYear()
  
  for (let i = 0; i < 15; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)]
    const status = statuses[Math.floor(Math.random() * statuses.length)]
    const titleIndex = Math.floor(Math.random() * titles.length)
    
    const ticketDate = new Date()
    ticketDate.setDate(ticketDate.getDate() - Math.floor(Math.random() * 30))
    
    const ticket: SupportTicket = {
      ticket_code: `T-${currentYear}-${String(ticketNumber).padStart(3, '0')}`,
      title: titles[titleIndex],
      category: category as any,
      description: descriptions[titleIndex],
      ticket_date: ticketDate.toISOString(),
      status: status as any,
      created_by: `user-${Math.floor(Math.random() * 5) + 1}`
    }
    
    // Algunos tickets tienen imagen
    if (Math.random() > 0.5) {
      ticket.image = `https://picsum.photos/400/300?random=${i}`
    }
    
    tickets.push(ticket)
    ticketNumber++
  }
  
  return tickets.sort((a, b) => new Date(b.ticket_date).getTime() - new Date(a.ticket_date).getTime())
}

const mockTickets: SupportTicket[] = generateMockTickets()

export const supportApi = {
  // Obtener todos los tickets
  async getTickets(search?: TicketSearch): Promise<SupportTicket[]> {
    await new Promise(resolve => setTimeout(resolve, 300))
    
    let filtered = [...mockTickets]
    
    if (search) {
      if (search.status) {
        filtered = filtered.filter(t => t.status === search.status)
      }
      if (search.category) {
        filtered = filtered.filter(t => t.category === search.category)
      }
      if (search.search_text) {
        const query = search.search_text.toLowerCase()
        filtered = filtered.filter(t =>
          t.title.toLowerCase().includes(query) ||
          t.description.toLowerCase().includes(query) ||
          t.ticket_code.toLowerCase().includes(query)
        )
      }
      if (search.created_by) {
        filtered = filtered.filter(t => t.created_by === search.created_by)
      }
    }
    
    return filtered
  },
  
  // Obtener un ticket por código
  async getTicket(ticketCode: string): Promise<SupportTicket | null> {
    await new Promise(resolve => setTimeout(resolve, 200))
    return mockTickets.find(t => t.ticket_code === ticketCode) || null
  },
  
  // Crear un nuevo ticket
  async createTicket(formData: NewTicketForm): Promise<SupportTicket> {
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const currentYear = new Date().getFullYear()
    const ticketNumber = mockTickets.length + 1
    
    // Simular subida de imagen
    let imageUrl: string | undefined
    if (formData.image) {
      // En producción, aquí se subiría el archivo al servidor
      const reader = new FileReader()
      imageUrl = await new Promise((resolve) => {
        reader.onloadend = () => resolve(reader.result as string)
        reader.readAsDataURL(formData.image!)
      })
    }
    
    const newTicket: SupportTicket = {
      ticket_code: `T-${currentYear}-${String(ticketNumber).padStart(3, '0')}`,
      title: formData.title,
      category: formData.category,
      description: formData.description,
      image: imageUrl,
      ticket_date: new Date().toISOString(),
      status: TicketStatusEnum.OPEN,
      created_by: 'current-user' // En producción, obtener del contexto de autenticación
    }
    
    mockTickets.unshift(newTicket)
    return newTicket
  },
  
  // Cambiar estado de un ticket
  async changeStatus(ticketCode: string, status: TicketStatusEnum): Promise<SupportTicket> {
    await new Promise(resolve => setTimeout(resolve, 300))
    
    const ticket = mockTickets.find(t => t.ticket_code === ticketCode)
    if (!ticket) {
      throw new Error('Ticket no encontrado')
    }
    
    ticket.status = status
    return ticket
  },
  
  // Eliminar un ticket
  async deleteTicket(ticketCode: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 300))
    
    const index = mockTickets.findIndex(t => t.ticket_code === ticketCode)
    if (index === -1) {
      throw new Error('Ticket no encontrado')
    }
    
    mockTickets.splice(index, 1)
  },
  
  // Validar imagen
  validateImage(file: File): { valid: boolean; error?: string } {
    const maxSize = 5 * 1024 * 1024 // 5MB
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
    
    if (!allowedTypes.includes(file.type)) {
      return { valid: false, error: 'Tipo de archivo no permitido. Solo se permiten imágenes (JPG, PNG, GIF, WEBP)' }
    }
    
    if (file.size > maxSize) {
      return { valid: false, error: 'El archivo es demasiado grande. El tamaño máximo es 5MB' }
    }
    
    return { valid: true }
  }
}


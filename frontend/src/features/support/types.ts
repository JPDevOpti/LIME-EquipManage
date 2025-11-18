export enum TicketCategoryEnum {
  BUG = 'bug',
  FEATURE = 'feature',
  QUESTION = 'question',
  TECHNICAL = 'technical'
}

export enum TicketStatusEnum {
  OPEN = 'open',
  IN_PROGRESS = 'in-progress',
  RESOLVED = 'resolved',
  CLOSED = 'closed'
}

export interface SupportTicket {
  ticket_code: string
  title: string
  category: TicketCategoryEnum
  description: string
  image?: string
  ticket_date: string
  status: TicketStatusEnum
  created_by?: string
}

export interface NewTicketForm {
  title: string
  category: TicketCategoryEnum
  description: string
  image?: File
}

export interface TicketFilters {
  status: TicketStatusEnum | 'all'
  category: TicketCategoryEnum | 'all'
  search: string
}

export interface TicketSearch {
  status?: TicketStatusEnum
  category?: TicketCategoryEnum
  created_by?: string
  search_text?: string
  date_from?: string
  date_to?: string
}

export interface TicketStatusUpdate {
  status: TicketStatusEnum
}

export interface ImageUploadResponse {
  image_url: string
  mensaje: string
}

// Legacy types para compatibilidad
export type TicketCategory = 'bug' | 'feature' | 'question' | 'technical'
export type TicketStatus = 'open' | 'in-progress' | 'resolved' | 'closed'


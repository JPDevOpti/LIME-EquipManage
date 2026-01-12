import type { UserProfile } from '../types'

export const mockUsers: UserProfile[] = [
  // Proveedores (First by default)
  { id: '1', name: 'BioControl Ltda', email: 'contacto@biocontrol.com', role: 'Proveedor', status: 'active', company: 'BioControl', createdAt: '2025-01-15T10:00:00Z' },
  { id: '2', name: 'TecnoSalud S.A.S', email: 'soporte@tecnosalud.com', role: 'Proveedor', status: 'inactive', company: 'TecnoSalud', createdAt: '2025-02-10T14:20:00Z' },
  { id: '3', name: 'MedEquipos', email: 'ventas@medequipos.com', role: 'Proveedor', status: 'active', company: 'MedEquipos', createdAt: '2025-03-05T11:15:00Z' },
  { id: 'p4', name: 'Hospital Services', email: 'contact@hospiserv.com', role: 'Proveedor', status: 'active', company: 'HospiServ', createdAt: '2025-03-06T10:00:00Z' },
  { id: 'p5', name: 'Equipos Médicos del Norte', email: 'info@emdn.com', role: 'Proveedor', status: 'active', company: 'EMDN', createdAt: '2025-03-07T09:00:00Z' },
  { id: 'p6', name: 'Suministros Clínicos', email: 'ventas@suministros.com', role: 'Proveedor', status: 'active', company: 'Suministros Clínicos', createdAt: '2025-03-08T14:00:00Z' },
  { id: 'p7', name: 'Ingeniería Hospitalaria', email: 'soporte@inghospitalaria.com', role: 'Proveedor', status: 'inactive', company: 'Ingeniería Hospitalaria', createdAt: '2025-03-09T11:00:00Z' },
  { id: 'p8', name: 'Global Medical', email: 'contact@globalmed.com', role: 'Proveedor', status: 'active', company: 'Global Medical', createdAt: '2025-03-10T16:00:00Z' },

  // Otros Roles
  { id: '4', name: 'Juan Pablo Restrepo', email: 'juan.restrepo@lime.com', role: 'Administrador', status: 'active', createdAt: '2025-01-01T08:00:00Z' },
  { id: '5', name: 'Carlos Ruiz', email: 'carlos.ruiz@lime.com', role: 'Ingeniero', status: 'active', createdAt: '2025-01-02T09:30:00Z' },
  { id: '6', name: 'Ana Maria Lopez', email: 'ana.lopez@lime.com', role: 'Facturación', status: 'active', createdAt: '2025-02-01T08:00:00Z' },
  { id: '7', name: 'Pedro Martinez', email: 'pedro.martinez@lime.com', role: 'Ingeniero', status: 'active', createdAt: '2025-03-11T08:30:00Z' },
  { id: '8', name: 'Luisa Fernanda', email: 'luisa.fernanda@lime.com', role: 'Administrador', status: 'inactive', createdAt: '2025-03-12T09:45:00Z' },
  { id: '9', name: 'Jorge Ramirez', email: 'jorge.ramirez@lime.com', role: 'Ingeniero', status: 'active', createdAt: '2025-03-13T10:15:00Z' },
  { id: '10', name: 'Sofia Vergara', email: 'sofia.vergara@lime.com', role: 'Facturación', status: 'active', createdAt: '2025-03-14T11:20:00Z' },
  { id: '11', name: 'Andres Felipe', email: 'andres.felipe@lime.com', role: 'Ingeniero', status: 'active', createdAt: '2025-03-15T12:00:00Z' },
  { id: '12', name: 'Maria Fernanda', email: 'maria.fernanda@lime.com', role: 'Ingeniero', status: 'inactive', createdAt: '2025-03-16T13:30:00Z' },
  { id: '13', name: 'Camilo Echeverry', email: 'camilo.echeverry@lime.com', role: 'Facturación', status: 'active', createdAt: '2025-03-17T14:40:00Z' },
  { id: '14', name: 'Valentina Zenere', email: 'valentina.zenere@lime.com', role: 'Administrador', status: 'active', createdAt: '2025-03-18T15:50:00Z' },
  { id: '15', name: 'Sebastian Yatra', email: 'sebastian.yatra@lime.com', role: 'Ingeniero', status: 'active', createdAt: '2025-03-19T16:10:00Z' },
  { id: '16', name: 'Karol G', email: 'karol.g@lime.com', role: 'Proveedor', status: 'active', company: 'Bichota Inc', createdAt: '2025-03-20T17:00:00Z' },
  { id: '17', name: 'Maluma Baby', email: 'maluma@lime.com', role: 'Proveedor', status: 'active', company: 'Hawaii Med', createdAt: '2025-03-21T18:00:00Z' },
  { id: '18', name: 'J Balvin', email: 'jbalvin@lime.com', role: 'Proveedor', status: 'inactive', company: 'Colores Salud', createdAt: '2025-03-22T19:00:00Z' },
  { id: '19', name: 'Shakira Mebarak', email: 'shakira@lime.com', role: 'Proveedor', status: 'active', company: 'Pies Descalzos', createdAt: '2025-03-23T20:00:00Z' },
  { id: '20', name: 'Juanes Aristizabal', email: 'juanes@lime.com', role: 'Ingeniero', status: 'active', createdAt: '2025-03-24T21:00:00Z' },
  { id: '21', name: 'Fonseca', email: 'fonseca@lime.com', role: 'Ingeniero', status: 'active', createdAt: '2025-03-25T22:00:00Z' }
]

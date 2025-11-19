export interface Reservation {
  id: string
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: number
  status: 'pending' | 'confirmed' | 'cancelled'
  createdAt: string
  updatedAt?: string
}
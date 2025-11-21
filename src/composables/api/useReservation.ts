import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, query, where, orderBy, onSnapshot, type Unsubscribe } from 'firebase/firestore'
import type { Reservation } from '~/types/reservation'

export const useReservations = () => {
  const { $firebase } = useNuxtApp()
  const reservations = ref<Reservation[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Get all reservations
  const fetchReservations = async () => {
    loading.value = true
    error.value = null
    
    try {
      const q = query(
        collection($firebase.db, 'reservations'),
        orderBy('createdAt', 'desc')
      )
      
      const querySnapshot = await getDocs(q)
      reservations.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Reservation[]
      
      return reservations.value
    } catch (e: any) {
      error.value = e.message
      console.error('Error fetching reservations:', e)
      return []
    } finally {
      loading.value = false
    }
  }

  // Real-time listener
  const listenToReservations = (callback?: (data: Reservation[]) => void): Unsubscribe => {
    const q = query(
      collection($firebase.db, 'reservations'),
      orderBy('createdAt', 'desc')
    )
    
    return onSnapshot(q, 
      (snapshot) => {
        reservations.value = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Reservation[]
        
        if (callback) callback(reservations.value)
      }, 
      (e) => {
        error.value = e.message
        console.error('Error listening to reservations:', e)
      }
    )
  }

  // Add new reservation
  const addReservation = async (data: Omit<Reservation, 'id' | 'createdAt'>) => {
    loading.value = true
    error.value = null
    
    try {
      const docRef = await addDoc(collection($firebase.db, 'reservations'), {
        ...data,
        createdAt: new Date().toISOString(),
        status: data.status || 'pending'
      })
      
      return docRef.id
    } catch (e: any) {
      error.value = e.message
      console.error('Error adding reservation:', e)
      throw e
    } finally {
      loading.value = false
    }
  }

  // Update reservation
  const updateReservation = async (id: string, data: Partial<Omit<Reservation, 'id'>>) => {
    loading.value = true
    error.value = null
    
    try {
      const docRef = doc($firebase.db, 'reservations', id)
      await updateDoc(docRef, {
        ...data,
        updatedAt: new Date().toISOString()
      })
    } catch (e: any) {
      error.value = e.message
      console.error('Error updating reservation:', e)
      throw e
    } finally {
      loading.value = false
    }
  }

  // Delete reservation
  const deleteReservation = async (id: string) => {
    loading.value = true
    error.value = null
    
    try {
      await deleteDoc(doc($firebase.db, 'reservations', id))
    } catch (e: any) {
      error.value = e.message
      console.error('Error deleting reservation:', e)
      throw e
    } finally {
      loading.value = false
    }
  }

  // Get reservation by ID
  const getReservationById = async (id: string) => {
    loading.value = true
    error.value = null
    
    try {
      const docRef = doc($firebase.db, 'reservations', id)
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        } as Reservation
      } else {
        throw new Error('Reservation not found')
      }
    } catch (e: any) {
      error.value = e.message
      console.error('Error getting reservation:', e)
      throw e
    } finally {
      loading.value = false
    }
  }

  // Filter reservations by status
  const getReservationsByStatus = async (status: Reservation['status']) => {
    loading.value = true
    error.value = null
    
    try {
      const q = query(
        collection($firebase.db, 'reservations'),
        where('status', '==', status),
        orderBy('createdAt', 'desc')
      )
      
      const querySnapshot = await getDocs(q)
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Reservation[]
    } catch (e: any) {
      error.value = e.message
      console.error('Error filtering reservations:', e)
      return []
    } finally {
      loading.value = false
    }
  }

  return {
    reservations,
    loading,
    error,
    fetchReservations,
    listenToReservations,
    addReservation,
    updateReservation,
    deleteReservation,
    getReservationById,
    getReservationsByStatus
  }
}
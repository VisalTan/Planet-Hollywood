import { ref } from 'vue'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export interface Attraction {
  name: string
  description: string
  distance: string
  image: string
}

export interface LocationContent {
  title: string
  subtitle: string
  attractions: Attraction[]
}

const locationContent = ref<LocationContent | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)

export const useLocation = () => {
  const { $firebase } = useNuxtApp()
  const db = $firebase?.db

  const fetchLocationContent = async () => {
    if (!db) {
      locationContent.value = {
        title: "Perfectly Located",
        subtitle: "In the vibrant heart of Phnom Penh's prestigious BKK1 district",
        attractions: [
          {
            name: 'Independence Monument',
            description: 'Significant monument in the heart of Phnom Penh',
            distance: '2 km (5-8 minutes)',
            image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80'
          },
          {
            name: 'Royal Palace',
            description: "Cambodia's most iconic landmark",
            distance: '5-minute walk',
            image: 'https://www.novotelphnompenhbkk1.com/wp-content/uploads/sites/53/2023/08/royal-palace-1920x1200.jpg'
          },
          {
            name: 'Wat Phnom',
            description: 'Sacred temples offering serenity',
            distance: '1 km drive',
            image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80'
          }
        ]
      }
      loading.value = false
      return
    }

    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, 'content', 'location')
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        locationContent.value = docSnap.data() as LocationContent
      } else {
        const defaultContent: LocationContent = {
          title: "Perfectly Located",
          subtitle: "In the vibrant heart of Phnom Penh's prestigious BKK1 district",
          attractions: [
            {
              name: 'Independence Monument',
              description: 'Significant monument in the heart of Phnom Penh',
              distance: '2 km (5-8 minutes)',
              image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80'
            },
            {
              name: 'Royal Palace',
              description: "Cambodia's most iconic landmark",
              distance: '5-minute walk',
              image: 'https://www.novotelphnompenhbkk1.com/wp-content/uploads/sites/53/2023/08/royal-palace-1920x1200.jpg'
            },
            {
              name: 'Wat Phnom',
              description: 'Sacred temples offering serenity',
              distance: '1 km drive',
              image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80'
            }
          ]
        }
        await setDoc(docRef, defaultContent)
        locationContent.value = defaultContent
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch location content'
      console.error('Error fetching location content:', err)
    } finally {
      loading.value = false
    }
  }

  const updateLocationContent = async (content: LocationContent) => {
    if (!db) return

    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, 'content', 'location')
      await setDoc(docRef, content)
      locationContent.value = content
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to update location content'
      console.error('Error updating location content:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  if (!locationContent.value) {
    fetchLocationContent()
  }

  return {
    locationContent: readonly(locationContent),
    loading: readonly(loading),
    error: readonly(error),
    fetchLocationContent,
    updateLocationContent
  }
}
import { ref, onMounted } from 'vue'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export interface EventContent {
  title: string
  subtitle: string
  image: string
  hallName: string
  description: string
  capacities: {
    banquet: { count: string; label: string }
    theatre: { count: string; label: string }
    classroom: { count: string; label: string }
    boardroom: { count: string; label: string }
  }
  features: string
}

const eventContent = ref<EventContent | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)

export const useEvent = () => {
  const { $firebase } = useNuxtApp()
  const db = $firebase?.db

  const fetchEventContent = async () => {
    if (!db) {
      // Fallback to default content if Firebase not available
      eventContent.value = {
        title: 'Where Every Event Deserves a Spotlight',
        subtitle: 'Over 900 square meters of dynamic event space',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
        hallName: 'The Hall of Phame',
        description: 'A breathtaking 8-meter-high LED screen transforms any event into a cinematic experience. From high-impact presentations to immersive visual storytelling, every detail is crafted to impress.',
        capacities: {
          banquet: { count: '180-210', label: 'Banquet' },
          theatre: { count: '250-280', label: 'Theatre' },
          classroom: { count: '120-140', label: 'Classroom' },
          boardroom: { count: '40-50', label: 'Boardroom' }
        },
        features: 'Equipped with state-of-the-art AV systems & high-speed Wi-Fi'
      }
      loading.value = false
      return
    }

    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, 'content', 'event')
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        eventContent.value = docSnap.data() as EventContent
      } else {
        // Initialize with default data if not exists
        const defaultContent: EventContent = {
          title: 'Where Every Event Deserves a Spotlight',
          subtitle: 'Over 900 square meters of dynamic event space',
          image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
          hallName: 'The Hall of Phame',
          description: 'A breathtaking 8-meter-high LED screen transforms any event into a cinematic experience. From high-impact presentations to immersive visual storytelling, every detail is crafted to impress.',
          capacities: {
            banquet: { count: '180-210', label: 'Banquet' },
            theatre: { count: '250-280', label: 'Theatre' },
            classroom: { count: '120-140', label: 'Classroom' },
            boardroom: { count: '40-50', label: 'Boardroom' }
          },
          features: 'Equipped with state-of-the-art AV systems & high-speed Wi-Fi'
        }
        await setDoc(docRef, defaultContent)
        eventContent.value = defaultContent
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch event content'
      console.error('Error fetching event content:', err)
    } finally {
      loading.value = false
    }
  }

  const updateEventContent = async (content: EventContent) => {
    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, 'content', 'event')
      await setDoc(docRef, content)
      eventContent.value = content
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to update event content'
      console.error('Error updating event content:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchEventContent()
  })

  return {
    eventContent: readonly(eventContent),
    loading: readonly(loading),
    error: readonly(error),
    fetchEventContent,
    updateEventContent
  }
}
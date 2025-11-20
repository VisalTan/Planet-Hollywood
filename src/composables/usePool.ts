import { ref, onMounted } from 'vue'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export interface PoolContent {
  image: string
  title: string
  subtitle: string
  description: string
}

const poolContent = ref<PoolContent | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)

export const usePool = () => {
  const { $firebase } = useNuxtApp()
  const db = $firebase?.db

  const fetchPoolContent = async () => {
    if (!db) {
      // Fallback to default content if Firebase not available
      poolContent.value = {
        image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1600&q=80',
        title: 'The Cliff Pool',
        subtitle: 'Float among the clouds with panoramic skyline views',
        description: 'The Cliff Pool stretches dramatically along the rooftop, its glass-edged design giving guests the illusion of floating among the clouds. With curated playlists, golden sunsets, and skyline views, this cantilevered masterpiece transforms every swim into a red-carpet moment.'
      }
      loading.value = false
      return
    }

    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, 'content', 'pool')
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        poolContent.value = docSnap.data() as PoolContent
      } else {
        // Initialize with default data if not exists
        const defaultContent: PoolContent = {
          image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1600&q=80',
          title: 'The Cliff Pool',
          subtitle: 'Float among the clouds with panoramic skyline views',
          description: 'The Cliff Pool stretches dramatically along the rooftop, its glass-edged design giving guests the illusion of floating among the clouds. With curated playlists, golden sunsets, and skyline views, this cantilevered masterpiece transforms every swim into a red-carpet moment.'
        }
        await setDoc(docRef, defaultContent)
        poolContent.value = defaultContent
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch pool content'
      console.error('Error fetching pool content:', err)
    } finally {
      loading.value = false
    }
  }

  const updatePoolContent = async (content: PoolContent) => {
    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, 'content', 'pool')
      await setDoc(docRef, content)
      poolContent.value = content
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to update pool content'
      console.error('Error updating pool content:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchPoolContent()
  })

  return {
    poolContent: readonly(poolContent),
    loading: readonly(loading),
    error: readonly(error),
    fetchPoolContent,
    updatePoolContent
  }
}
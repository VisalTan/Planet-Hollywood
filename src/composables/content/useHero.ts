import { ref, onMounted } from 'vue'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export interface HeroContent {
  title: string
  subtitle: string
  description: string
  tags: string[]
  videoSrc: string
}

const heroContent = ref<HeroContent | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)

export const useHero = () => {
  const { $firebase } = useNuxtApp()
  const db = $firebase?.db

  const fetchHeroContent = async () => {
    if (!db) {
      // Fallback to default content if Firebase not available
      heroContent.value = {
        title: 'PLANET HOLLYWOOD',
        subtitle: 'Phnom Penh',
        description: "Asia's First Planet Hollywood Hotel",
        tags: ['Phamous', 'Phantastic', 'Phabulous', 'Phun'],
        videoSrc: '/videos/ph-hero.mp4'
      }
      loading.value = false
      return
    }

    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, 'content', 'hero')
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        heroContent.value = docSnap.data() as HeroContent
      } else {
        // Initialize with default data if not exists
        const defaultContent: HeroContent = {
          title: 'PLANET HOLLYWOOD',
          subtitle: 'Phnom Penh',
          description: "Asia's First Planet Hollywood Hotel",
          tags: ['Phamous', 'Phantastic', 'Phabulous', 'Phun'],
          videoSrc: '/videos/ph-hero.mp4'
        }
        await setDoc(docRef, defaultContent)
        heroContent.value = defaultContent
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch hero content'
      console.error('Error fetching hero content:', err)
    } finally {
      loading.value = false
    }
  }

  const updateHeroContent = async (content: HeroContent) => {
    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, 'content', 'hero')
      await setDoc(docRef, content)
      heroContent.value = content
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to update hero content'
      console.error('Error updating hero content:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchHeroContent()
  })

  return {
    heroContent: readonly(heroContent),
    loading: readonly(loading),
    error: readonly(error),
    fetchHeroContent,
    updateHeroContent
  }
}
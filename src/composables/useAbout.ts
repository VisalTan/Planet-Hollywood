import { ref } from 'vue'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export interface AboutContent {
  title: string
  description: string
  stats: {
    rooms: { count: string; label: string }
    eventSpace: { count: string; label: string }
    facilities: { count: string; label: string }
  }
  image: string
  location: string
  address: string
}

const aboutContent = ref<AboutContent | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)

export const useAbout = () => {
  const { $firebase } = useNuxtApp()
  const db = $firebase?.db

  const fetchAboutContent = async () => {
    if (!db) {
      aboutContent.value = {
        title: "Where Hollywood Meets Cambodia",
        description: "Planet Hollywood Hotel Phnom Penh marks the brand's first-ever hotel in Asia — a milestone that brings Hollywood's signature energy to the heart of Cambodia. Blending cinematic glamour with contemporary sophistication, the hotel features 148 rooms, each designed to deliver an elevated smart-living experience.",
        stats: {
          rooms: { count: "148", label: "Rooms" },
          eventSpace: { count: "900+", label: "Event Space (sqm)" },
          facilities: { count: "5★", label: "Facilities" }
        },
        image: "/images/ph1.png",
        location: "BKK1 District",
        address: "JS Tower, Phnom Penh"
      }
      loading.value = false
      return
    }

    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, 'content', 'about')
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        aboutContent.value = docSnap.data() as AboutContent
      } else {
        const defaultContent: AboutContent = {
          title: "Where Hollywood Meets Cambodia",
          description: "Planet Hollywood Hotel Phnom Penh marks the brand's first-ever hotel in Asia — a milestone that brings Hollywood's signature energy to the heart of Cambodia. Blending cinematic glamour with contemporary sophistication, the hotel features 148 rooms, each designed to deliver an elevated smart-living experience.",
          stats: {
            rooms: { count: "148", label: "Rooms" },
            eventSpace: { count: "900+", label: "Event Space (sqm)" },
            facilities: { count: "5★", label: "Facilities" }
          },
          image: "/images/ph1.png",
          location: "BKK1 District",
          address: "JS Tower, Phnom Penh"
        }
        await setDoc(docRef, defaultContent)
        aboutContent.value = defaultContent
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch about content'
      console.error('Error fetching about content:', err)
    } finally {
      loading.value = false
    }
  }

  const updateAboutContent = async (content: AboutContent) => {
    if (!db) return

    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, 'content', 'about')
      await setDoc(docRef, content)
      aboutContent.value = content
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to update about content'
      console.error('Error updating about content:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  // Initialize on first use
  if (!aboutContent.value) {
    fetchAboutContent()
  }

  return {
    aboutContent: readonly(aboutContent),
    loading: readonly(loading),
    error: readonly(error),
    fetchAboutContent,
    updateAboutContent
  }
}
import { ref, readonly } from 'vue'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export interface Room {
  name: string
  description: string
  size: string
  image: string
  color: string
}

export interface Video {
  id: string
  label: string
  src: string
}

export interface RoomsContent {
  title: string
  subtitle: string
  rooms: Room[]
  stats: { count: string; label: string; color: string }[]
  videos: Video[]
  videoTitle: string
  videoDescription: string
  mainVideo: string
  penthouseTitle: string
  penthouseDescription: string
  penthouseVideo: string
}

const roomsContent = ref<RoomsContent | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)

export const useRooms = () => {
  const { $firebase } = useNuxtApp()
  const db = $firebase?.db

  const fetchRoomsContent = async () => {
    if (!db) {
      roomsContent.value = {
        title: "Four Themes. One Star Experience",
        subtitle: "Each floor tells its own story through design, colour, and energy",
        rooms: [
          {
            name: "Superior",
            description: "Modern comfort with Hollywood glamour",
            size: "32 sqm",
            image: "/images/phsuperior.png",
            color: "pink"
          },
          {
            name: "Deluxe",
            description: "Elevated luxury with stunning views",
            size: "38 sqm",
            image: "/images/phdelux.png",
            color: "cyan"
          },
          {
            name: "Premier Deluxe",
            description: "Ultimate sophistication and space",
            size: "45 sqm",
            image: "/images/phpredelux.png",
            color: "purple"
          },
          {
            name: "Executive",
            description: "Presidential treatment awaits",
            size: "52 sqm",
            image: "/images/phexecutive.png",
            color: "yellow"
          }
        ],
        stats: [
          { count: "70", label: "Superior Rooms", color: "pink" },
          { count: "40", label: "Deluxe Rooms", color: "cyan" },
          { count: "10", label: "Premier Deluxe", color: "purple" },
          { count: "16", label: "Executive Rooms", color: "yellow" },
          { count: "2", label: "Penthouses", color: "pink" }
        ],
        videos: [
          { id: 'hotel', label: 'Hotel Tour', src: '/videos/ph-video.mp4' },
          { id: 'penthouse', label: 'Penthouse Suite', src: '/videos/penhouse.mp4' }
        ],
        videoTitle: "Experience Planet Hollywood",
        videoDescription: "Take a virtual tour of our luxurious accommodations and world-class amenities",
        mainVideo: "",
        penthouseTitle: "The Penthouse Experience",
        penthouseDescription: "Where Hollywood luxury meets sky-high sophistication. Experience the pinnacle of Planet Hollywood.",
        penthouseVideo: ""
      }
      loading.value = false
      return
    }

    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, 'content', 'rooms')
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        roomsContent.value = docSnap.data() as RoomsContent
      } else {
        const defaultContent: RoomsContent = {
          title: "Four Themes. One Star Experience",
          subtitle: "Each floor tells its own story through design, colour, and energy",
          rooms: [
            {
              name: "Superior",
              description: "Modern comfort with Hollywood glamour",
              size: "32 sqm",
              image: "/images/phsuperior.png",
              color: "pink"
            },
            {
              name: "Deluxe",
              description: "Elevated luxury with stunning views",
              size: "38 sqm",
              image: "/images/phdelux.png",
              color: "cyan"
            },
            {
              name: "Premier Deluxe",
              description: "Ultimate sophistication and space",
              size: "45 sqm",
              image: "/images/phpredelux.png",
              color: "purple"
            },
            {
              name: "Executive",
              description: "Presidential treatment awaits",
              size: "52 sqm",
              image: "/images/phexecutive.png",
              color: "yellow"
            }
          ],
          stats: [
            { count: "70", label: "Superior Rooms", color: "pink" },
            { count: "40", label: "Deluxe Rooms", color: "cyan" },
            { count: "10", label: "Premier Deluxe", color: "purple" },
            { count: "16", label: "Executive Rooms", color: "yellow" },
            { count: "2", label: "Penthouses", color: "pink" }
          ],
          videos: [
            { id: 'hotel', label: 'Hotel Tour', src: '/videos/ph-video.mp4' },
            { id: 'penthouse', label: 'Penthouse Suite', src: '/videos/penhouse.mp4' }
          ],
          videoTitle: "Experience Planet Hollywood",
          videoDescription: "Take a virtual tour of our luxurious accommodations and world-class amenities",
          mainVideo: "",
          penthouseTitle: "The Penthouse Experience",
          penthouseDescription: "Where Hollywood luxury meets sky-high sophistication. Experience the pinnacle of Planet Hollywood.",
          penthouseVideo: ""
        }
        await setDoc(docRef, defaultContent)
        roomsContent.value = defaultContent
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch rooms content'
      console.error('Error fetching rooms content:', err)
    } finally {
      loading.value = false
    }
  }

  const updateRoomsContent = async (content: RoomsContent) => {
    if (!db) return

    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, 'content', 'rooms')
      await setDoc(docRef, content)
      roomsContent.value = content
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to update rooms content'
      console.error('Error updating rooms content:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  if (!roomsContent.value) {
    fetchRoomsContent()
  }

  return {
    roomsContent: readonly(roomsContent),
    loading: readonly(loading),
    error: readonly(error),
    fetchRoomsContent,
    updateRoomsContent
  }
}

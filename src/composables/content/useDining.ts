import { ref } from 'vue'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export interface Restaurant {
  name: string
  description: string
  image: string
  hours: string
  cuisine: string
}

export interface DiningContent {
  title: string
  subtitle: string
  restaurants: Restaurant[]
}

const diningContent = ref<DiningContent | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)

export const useDining = () => {
  const { $firebase } = useNuxtApp()
  const db = $firebase?.db

  const fetchDiningContent = async () => {
    if (!db) {
      diningContent.value = {
        title: "Dining Experiences",
        subtitle: "Where every meal feels like a moment on the red carpet",
        restaurants: [
          {
            name: 'Gordon Ramsay Burger',
            description: "Southeast Asia's first Gordon Ramsay Burger",
            image: 'https://platform.boston.eater.com/wp-content/uploads/sites/4/chorus/uploads/chorus_asset/file/23426697/259699079_194400052885244_4812031660576318305_n.jpg?quality=90&strip=all&crop=0,16.666666666667,100,66.666666666667',
            hours: '10AM - 11PM',
            cuisine: 'Celebrity Chef, Burgers'
          },
          {
            name: 'Café Hollywood',
            description: 'All-day dining with international and local flavours',
            image: 'https://news3lv.com/resources/media/b5c7c109-eadd-4fc4-8200-273fa876c39c-medium16x9_CafHollywoodLasVegasPhotoCredit_SamAbrams1.jpg?1511293917499',
            hours: '6AM - 11:30PM',
            cuisine: 'Western, Brunch, Coffee'
          },
          {
            name: 'The Marquee Bar',
            description: 'Lights, laughter, and late-night flair',
            image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80',
            hours: '5PM - 1AM',
            cuisine: 'Cocktails & Tapas'
          }
        ]
      }
      loading.value = false
      return
    }

    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, 'content', 'dining')
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        diningContent.value = docSnap.data() as DiningContent
      } else {
        const defaultContent: DiningContent = {
          title: "Dining Experiences",
          subtitle: "Where every meal feels like a moment on the red carpet",
          restaurants: [
            {
              name: 'Gordon Ramsay Burger',
              description: "Southeast Asia's first Gordon Ramsay Burger",
              image: 'https://platform.boston.eater.com/wp-content/uploads/sites/4/chorus/uploads/chorus_asset/file/23426697/259699079_194400052885244_4812031660576318305_n.jpg?quality=90&strip=all&crop=0,16.666666666667,100,66.666666666667',
              hours: '10AM - 11PM',
              cuisine: 'Celebrity Chef, Burgers'
            },
            {
              name: 'Café Hollywood',
              description: 'All-day dining with international and local flavours',
              image: 'https://news3lv.com/resources/media/b5c7c109-eadd-4fc4-8200-273fa876c39c-medium16x9_CafHollywoodLasVegasPhotoCredit_SamAbrams1.jpg?1511293917499',
              hours: '6AM - 11:30PM',
              cuisine: 'Western, Brunch, Coffee'
            },
            {
              name: 'The Marquee Bar',
              description: 'Lights, laughter, and late-night flair',
              image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80',
              hours: '5PM - 1AM',
              cuisine: 'Cocktails & Tapas'
            }
          ]
        }
        await setDoc(docRef, defaultContent)
        diningContent.value = defaultContent
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch dining content'
      console.error('Error fetching dining content:', err)
    } finally {
      loading.value = false
    }
  }

  const updateDiningContent = async (content: DiningContent) => {
    if (!db) return

    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, 'content', 'dining')
      await setDoc(docRef, content)
      diningContent.value = content
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to update dining content'
      console.error('Error updating dining content:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  if (!diningContent.value) {
    fetchDiningContent()
  }

  return {
    diningContent: readonly(diningContent),
    loading: readonly(loading),
    error: readonly(error),
    fetchDiningContent,
    updateDiningContent
  }
}
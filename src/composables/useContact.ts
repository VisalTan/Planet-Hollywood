import { ref } from 'vue'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export interface ContactContent {
  title: string
  subtitle: string
  email: string
  website: string
  socialLinks: {
    instagram: string
    facebook: string
  }
}

const contactContent = ref<ContactContent | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)

export const useContact = () => {
  const { $firebase } = useNuxtApp()
  const db = $firebase?.db

  const fetchContactContent = async () => {
    if (!db) {
      contactContent.value = {
        title: "Experience the Spotlight",
        subtitle: "Book your stay at Asia's first Planet Hollywood Hotel",
        email: "inquiry@planethollywood-phnompenh.com",
        website: "https://planethollywood-phnompenh.com",
        socialLinks: {
          instagram: "#",
          facebook: "#"
        }
      }
      loading.value = false
      return
    }

    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, 'content', 'contact')
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        contactContent.value = docSnap.data() as ContactContent
      } else {
        const defaultContent: ContactContent = {
          title: "Experience the Spotlight",
          subtitle: "Book your stay at Asia's first Planet Hollywood Hotel",
          email: "inquiry@planethollywood-phnompenh.com",
          website: "https://planethollywood-phnompenh.com",
          socialLinks: {
            instagram: "#",
            facebook: "#"
          }
        }
        await setDoc(docRef, defaultContent)
        contactContent.value = defaultContent
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch contact content'
      console.error('Error fetching contact content:', err)
    } finally {
      loading.value = false
    }
  }

  const updateContactContent = async (content: ContactContent) => {
    if (!db) return

    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, 'content', 'contact')
      await setDoc(docRef, content)
      contactContent.value = content
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to update contact content'
      console.error('Error updating contact content:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  if (!contactContent.value) {
    fetchContactContent()
  }

  return {
    contactContent: readonly(contactContent),
    loading: readonly(loading),
    error: readonly(error),
    fetchContactContent,
    updateContactContent
  }
}
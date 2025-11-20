import { ref } from 'vue'
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage'

export const useFirebaseStorage = () => {
  const uploading = ref(false)
  const uploadProgress = ref(0)
  const error = ref<string | null>(null)

  const uploadFile = async (file: File, path: string): Promise<string> => {
    uploading.value = true
    uploadProgress.value = 0
    error.value = null

    return new Promise((resolve, reject) => {
      const storage = getStorage()
      const fileRef = storageRef(storage, path)

      // Create upload task with resumable upload for progress tracking
      const uploadTask = uploadBytesResumable(fileRef, file)

      // Monitor progress
      uploadTask.on('state_changed',
        (snapshot: any) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          uploadProgress.value = Math.round(progress)
        },
        (err: any) => {
          error.value = err.message
          uploading.value = false
          reject(err)
        },
        async () => {
          try {
            // Get download URL
            const downloadURL = await getDownloadURL(fileRef)
            uploading.value = false
            resolve(downloadURL)
          } catch (err: any) {
            error.value = err.message
            uploading.value = false
            reject(err)
          }
        }
      )
    })
  }

  const deleteFile = async (url: string) => {
    try {
      const storage = getStorage()
      // Extract path from URL
      const path = url.split('/o/')[1]?.split('?')[0]
      if (path) {
        const decodedPath = decodeURIComponent(path)
        const fileRef = storageRef(storage, decodedPath)
        await deleteObject(fileRef)
      }
    } catch (err) {
      console.error('Error deleting file:', err)
    }
  }

  return {
    uploading: readonly(uploading),
    uploadProgress: readonly(uploadProgress),
    error: readonly(error),
    uploadFile,
    deleteFile
  }
}
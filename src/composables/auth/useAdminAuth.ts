import { ref, computed } from 'vue'

const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = '123456'

export const useAdminAuth = () => {
  const isAuthenticated = ref(false)
  const isLoading = ref(false)
  const error = ref('')

  // Check if admin is logged in on mount
  const checkAuth = () => {
    if (process.client) {
      const adminAuth = localStorage.getItem('admin_auth')
      isAuthenticated.value = adminAuth === 'true'
    }
  }

  // Login function
  const login = async (username: string, password: string) => {
    isLoading.value = true
    error.value = ''

    try {
      // Simple hardcoded check
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        isAuthenticated.value = true
        if (process.client) {
          localStorage.setItem('admin_auth', 'true')
        }
        return true
      } else {
        error.value = 'Invalid username or password'
        return false
      }
    } catch (err) {
      error.value = 'Login failed'
      return false
    } finally {
      isLoading.value = false
    }
  }

  // Logout function
  const logout = () => {
    isAuthenticated.value = false
    if (process.client) {
      localStorage.removeItem('admin_auth')
    }
  }

  // Initialize auth check
  if (process.client) {
    checkAuth()
  }

  return {
    isAuthenticated: computed(() => isAuthenticated.value),
    isLoading: computed(() => isLoading.value),
    error: computed(() => error.value),
    login,
    logout,
    checkAuth
  }
}
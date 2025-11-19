<template>
  <div class="bg-linear-to-br from-rose-50 to-pink-100 rounded-2xl shadow-xl overflow-hidden border border-rose-200">
    <!-- Header -->
    <div class="bg-linear-to-r from-rose-600 to-pink-700 px-8 py-6">
      <div class="flex items-center space-x-3">
        <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-white">Contact Section Content</h2>
          <p class="text-rose-100 text-sm mt-1">Manage your contact information and social links</p>
        </div>
      </div>
    </div>

    <!-- Form Content -->
    <div class="p-8">
      <form @submit.prevent="saveContactContent" class="space-y-8">
        <!-- Title & Subtitle Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Title -->
          <div class="group">
            <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
              <svg class="w-4 h-4 mr-2 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              Section Title
            </label>
            <input v-model="contactForm.title" type="text"
              class="w-full px-4 py-3 bg-white border-2 border-rose-200 rounded-xl shadow-sm focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
              placeholder="e.g., Get in Touch" />
          </div>

          <!-- Subtitle -->
          <div class="group">
            <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
              <svg class="w-4 h-4 mr-2 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              Subtitle
            </label>
            <input v-model="contactForm.subtitle" type="text"
              class="w-full px-4 py-3 bg-white border-2 border-rose-200 rounded-xl shadow-sm focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
              placeholder="e.g., We'd love to hear from you" />
          </div>
        </div>

        <!-- Contact Information Section -->
        <div class="bg-white rounded-2xl p-6 border-2 border-rose-200 shadow-sm">
          <div class="flex items-center mb-6">
            <svg class="w-5 h-5 mr-2 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="text-lg font-bold text-slate-800">Contact Information</h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Email -->
            <div class="group">
              <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
                <svg class="w-4 h-4 mr-2 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                Email Address
              </label>
              <div class="relative">
                <input v-model="contactForm.email" type="email"
                  class="w-full px-4 py-3 bg-linear-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-blue-300 pl-10"
                  placeholder="contact@example.com" />
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Website -->
            <div class="group">
              <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
                <svg class="w-4 h-4 mr-2 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                Website URL
              </label>
              <div class="relative">
                <input v-model="contactForm.website" type="url"
                  class="w-full px-4 py-3 bg-linear-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-xl shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-purple-300 pl-10"
                  placeholder="https://example.com" />
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Media Section -->
        <div class="bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border-2 border-slate-200 shadow-sm">
          <div class="flex items-center mb-6">
            <svg class="w-5 h-5 mr-2 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            <h3 class="text-lg font-bold text-slate-800">Social Media Links</h3>
            <span class="ml-2 text-xs text-slate-500">Connect your social profiles</span>
          </div>

          <div class="space-y-4">
            <!-- Instagram -->
            <div
              class="bg-white rounded-xl p-5 border-2 border-slate-200 hover:border-pink-300 transition-all duration-200">
              <div class="flex items-center mb-3">
                <div
                  class="w-10 h-10 bg-linear-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div class="ml-3">
                  <h4 class="text-sm font-bold text-slate-900">Instagram</h4>
                  <p class="text-xs text-slate-500">Share your visual story</p>
                </div>
              </div>
              <input v-model="contactForm.socialLinks.instagram" type="url"
                class="w-full px-4 py-2.5 bg-linear-to-br from-pink-50 to-purple-50 border-2 border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all text-sm"
                placeholder="https://instagram.com/yourprofile" />
            </div>

            <!-- Facebook -->
            <div
              class="bg-white rounded-xl p-5 border-2 border-slate-200 hover:border-blue-300 transition-all duration-200">
              <div class="flex items-center mb-3">
                <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div class="ml-3">
                  <h4 class="text-sm font-bold text-slate-900">Facebook</h4>
                  <p class="text-xs text-slate-500">Connect with your community</p>
                </div>
              </div>
              <input v-model="contactForm.socialLinks.facebook" type="url"
                class="w-full px-4 py-2.5 bg-linear-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all text-sm"
                placeholder="https://facebook.com/yourpage" />
            </div>
          </div>
        </div>

        <!-- Save Button -->
        <div class="flex items-center justify-between pt-6 border-t-2 border-rose-200">
          <div class="flex items-center text-sm text-slate-500">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Changes will be visible immediately
          </div>
          <button type="submit" :disabled="loading"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl shadow-lg text-white bg-linear-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 transition-all duration-200">
            <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
              </path>
            </svg>
            <svg v-else class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span v-if="loading">Saving Changes...</span>
            <span v-else>Save Changes</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useContact, type ContactContent } from '~/composables/useContact'

const { contactContent, loading, updateContactContent } = useContact()

// Contact form data
const contactForm = ref<ContactContent>({
  title: '',
  subtitle: '',
  email: '',
  website: '',
  socialLinks: {
    instagram: '',
    facebook: ''
  }
})

// Watch for contact content changes and update form
watch(contactContent, (newContent) => {
  if (newContent) {
    contactForm.value = {
      title: newContent.title,
      subtitle: newContent.subtitle,
      email: newContent.email,
      website: newContent.website,
      socialLinks: {
        instagram: newContent.socialLinks.instagram,
        facebook: newContent.socialLinks.facebook
      }
    }
  }
}, { immediate: true })

// Contact content management methods
const saveContactContent = async () => {
  try {
    await updateContactContent(contactForm.value)
    // Success message could be added here
  } catch (err) {
    console.error('Error saving contact content:', err)
  }
}
</script>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
  .group {
    transition: transform 0.2s ease-in-out;
  }

  .group:focus-within {
    transform: translateY(-2px);
  }
}
</style>
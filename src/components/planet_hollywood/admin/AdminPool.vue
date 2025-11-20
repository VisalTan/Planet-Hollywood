<template>
  <div class="bg-linear-to-br from-cyan-50 to-blue-100 rounded-2xl shadow-xl overflow-hidden border border-cyan-200">
    <!-- Header -->
    <div class="bg-linear-to-r from-cyan-600 to-blue-700 px-8 py-6">
      <div class="flex items-center space-x-3">
        <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
          </svg>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-white">Pool Section Content</h2>
          <p class="text-cyan-100 text-sm mt-1">Manage your pool area information and imagery</p>
        </div>
      </div>
    </div>

    <!-- Form Content -->
    <div class="p-8">
      <form @submit.prevent="savePoolContent" class="space-y-8">
        <!-- Image Upload -->
        <ImageUpload
          v-model="poolForm.image"
          label="Pool Image"
        />

        <!-- Title & Subtitle Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Title -->
          <div class="group">
            <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
              <svg class="w-4 h-4 mr-2 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              Section Title
            </label>
            <input v-model="poolForm.title" type="text"
              class="w-full px-4 py-3 bg-white border-2 border-cyan-200 rounded-xl shadow-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 hover:border-cyan-300"
              placeholder="e.g., The Cliff Pool" />
          </div>

          <!-- Subtitle -->
          <div class="group">
            <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
              <svg class="w-4 h-4 mr-2 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              Subtitle
            </label>
            <input v-model="poolForm.subtitle" type="text"
              class="w-full px-4 py-3 bg-white border-2 border-cyan-200 rounded-xl shadow-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 hover:border-cyan-300"
              placeholder="e.g., Float among the clouds with panoramic skyline views" />
          </div>
        </div>

        <!-- Description -->
        <div class="group">
          <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
            <svg class="w-4 h-4 mr-2 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Description
          </label>
          <textarea v-model="poolForm.description" rows="4"
            class="w-full px-4 py-3 bg-white border-2 border-cyan-200 rounded-xl shadow-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 hover:border-cyan-300 resize-none"
            placeholder="Describe your pool area and its features..."></textarea>
        </div>

        <!-- Save Button -->
        <div class="flex items-center justify-between pt-6 border-t-2 border-cyan-200">
          <div class="flex items-center text-sm text-slate-500">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Changes will be visible immediately
          </div>
          <button type="submit" :disabled="loading"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl shadow-lg text-white bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 transition-all duration-200">
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
import { usePool, type PoolContent } from '~/composables/usePool'
import ImageUpload from '~/components/admin/ImageUpload.vue'

const { poolContent, loading, updatePoolContent } = usePool()

// Pool form data
const poolForm = ref<PoolContent>({
  image: '',
  title: '',
  subtitle: '',
  description: ''
})

// Watch for pool content changes and update form
watch(poolContent, (newContent) => {
  if (newContent) {
    poolForm.value = {
      image: newContent.image,
      title: newContent.title,
      subtitle: newContent.subtitle,
      description: newContent.description
    }
  }
}, { immediate: true })

// Pool content management methods
const savePoolContent = async () => {
  try {
    await updatePoolContent(poolForm.value)
    // Success message could be added here
  } catch (err) {
    console.error('Error saving pool content:', err)
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
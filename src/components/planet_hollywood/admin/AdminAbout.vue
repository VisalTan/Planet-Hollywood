<template>
  <div class="bg-linear-to-br from-emerald-50 to-teal-100 rounded-2xl shadow-xl overflow-hidden border border-emerald-200">
    <!-- Header -->
    <div class="bg-linear-to-r from-emerald-600 to-teal-700 px-8 py-6">
      <div class="flex items-center space-x-3">
        <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-white">About Section Content</h2>
          <p class="text-emerald-100 text-sm mt-1">Tell your story and showcase your venue</p>
        </div>
      </div>
    </div>

    <!-- Form Content -->
    <div class="p-8">
      <form @submit.prevent="saveAboutContent" class="space-y-8">
        <!-- Title -->
        <div class="group">
          <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
            <svg class="w-4 h-4 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            Section Title
          </label>
          <input 
            v-model="aboutForm.title" 
            type="text"
            class="w-full px-4 py-3 bg-white border-2 border-emerald-200 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-emerald-300"
            placeholder="Enter your about section title" 
          />
        </div>

        <!-- Description -->
        <div class="group">
          <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
            <svg class="w-4 h-4 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Description
          </label>
          <textarea 
            v-model="aboutForm.description" 
            rows="5"
            class="w-full px-4 py-3 bg-white border-2 border-emerald-200 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-emerald-300 resize-none"
            placeholder="Tell visitors about your venue, its history, and what makes it special"
          ></textarea>
          <p class="text-xs text-slate-500 mt-2">{{ aboutForm.description.length }} characters</p>
        </div>

        <!-- Stats Section -->
        <div class="bg-white rounded-2xl p-6 border-2 border-emerald-200 shadow-sm">
          <div class="flex items-center mb-6">
            <svg class="w-5 h-5 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <h3 class="text-lg font-bold text-slate-800">Statistics</h3>
            <span class="ml-2 text-xs text-slate-500">Highlight key numbers</span>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Rooms Stat -->
            <div class="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-5 border-2 border-blue-200 hover:border-blue-300 transition-all duration-200">
              <div class="flex items-center mb-3">
                <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h4 class="ml-3 text-sm font-bold text-blue-900 uppercase tracking-wide">Rooms</h4>
              </div>
              <div class="space-y-3">
                <div>
                  <label class="block text-xs font-medium text-blue-700 mb-1">Count</label>
                  <input 
                    v-model="aboutForm.stats.rooms.count" 
                    type="text"
                    class="w-full px-3 py-2 bg-white border-2 border-blue-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                    placeholder="e.g., 200+" 
                  />
                </div>
                <div>
                  <label class="block text-xs font-medium text-blue-700 mb-1">Label</label>
                  <input 
                    v-model="aboutForm.stats.rooms.label" 
                    type="text"
                    class="w-full px-3 py-2 bg-white border-2 border-blue-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                    placeholder="e.g., Luxury Rooms" 
                  />
                </div>
              </div>
            </div>

            <!-- Event Space Stat -->
            <div class="bg-linear-to-br from-purple-50 to-purple-100 rounded-xl p-5 border-2 border-purple-200 hover:border-purple-300 transition-all duration-200">
              <div class="flex items-center mb-3">
                <div class="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 class="ml-3 text-sm font-bold text-purple-900 uppercase tracking-wide">Event Space</h4>
              </div>
              <div class="space-y-3">
                <div>
                  <label class="block text-xs font-medium text-purple-700 mb-1">Count</label>
                  <input 
                    v-model="aboutForm.stats.eventSpace.count" 
                    type="text"
                    class="w-full px-3 py-2 bg-white border-2 border-purple-200 rounded-lg text-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all"
                    placeholder="e.g., 5000+ sqft" 
                  />
                </div>
                <div>
                  <label class="block text-xs font-medium text-purple-700 mb-1">Label</label>
                  <input 
                    v-model="aboutForm.stats.eventSpace.label" 
                    type="text"
                    class="w-full px-3 py-2 bg-white border-2 border-purple-200 rounded-lg text-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all"
                    placeholder="e.g., Event Space" 
                  />
                </div>
              </div>
            </div>

            <!-- Facilities Stat -->
            <div class="bg-linear-to-br from-amber-50 to-amber-100 rounded-xl p-5 border-2 border-amber-200 hover:border-amber-300 transition-all duration-200">
              <div class="flex items-center mb-3">
                <div class="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 class="ml-3 text-sm font-bold text-amber-900 uppercase tracking-wide">Facilities</h4>
              </div>
              <div class="space-y-3">
                <div>
                  <label class="block text-xs font-medium text-amber-700 mb-1">Count</label>
                  <input 
                    v-model="aboutForm.stats.facilities.count" 
                    type="text"
                    class="w-full px-3 py-2 bg-white border-2 border-amber-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                    placeholder="e.g., 20+" 
                  />
                </div>
                <div>
                  <label class="block text-xs font-medium text-amber-700 mb-1">Label</label>
                  <input 
                    v-model="aboutForm.stats.facilities.label" 
                    type="text"
                    class="w-full px-3 py-2 bg-white border-2 border-amber-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                    placeholder="e.g., Modern Facilities" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Image URL -->
        <div class="group">
          <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
            <svg class="w-4 h-4 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Image URL
          </label>
          <div class="relative">
            <input 
              v-model="aboutForm.image" 
              type="text"
              class="w-full px-4 py-3 bg-white border-2 border-emerald-200 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-emerald-300 pl-10"
              placeholder="https://example.com/image.jpg" 
            />
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Location & Address -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Location -->
          <div class="group">
            <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
              <svg class="w-4 h-4 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Location
            </label>
            <input 
              v-model="aboutForm.location" 
              type="text"
              class="w-full px-4 py-3 bg-white border-2 border-emerald-200 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-emerald-300"
              placeholder="e.g., Las Vegas, Nevada" 
            />
          </div>

          <!-- Address -->
          <div class="group">
            <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
              <svg class="w-4 h-4 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Full Address
            </label>
            <input 
              v-model="aboutForm.address" 
              type="text"
              class="w-full px-4 py-3 bg-white border-2 border-emerald-200 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-emerald-300"
              placeholder="e.g., 3667 Las Vegas Blvd S" 
            />
          </div>
        </div>

        <!-- Save Button -->
        <div class="flex items-center justify-between pt-6 border-t-2 border-emerald-200">
          <div class="flex items-center text-sm text-slate-500">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Changes will be visible immediately
          </div>
          <button 
            type="submit" 
            :disabled="loading"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl shadow-lg text-white bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
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
import { useAbout, type AboutContent } from '~/composables/useAbout'

const { aboutContent, loading, updateAboutContent } = useAbout()

// About form data
const aboutForm = ref<AboutContent>({
  title: '',
  description: '',
  stats: {
    rooms: { count: '', label: '' },
    eventSpace: { count: '', label: '' },
    facilities: { count: '', label: '' }
  },
  image: '',
  location: '',
  address: ''
})

// Watch for about content changes and update form
watch(aboutContent, (newContent) => {
  if (newContent) {
    aboutForm.value = {
      title: newContent.title,
      description: newContent.description,
      stats: {
        rooms: { ...newContent.stats.rooms },
        eventSpace: { ...newContent.stats.eventSpace },
        facilities: { ...newContent.stats.facilities }
      },
      image: newContent.image,
      location: newContent.location,
      address: newContent.address
    }
  }
}, { immediate: true })

// About content management methods
const saveAboutContent = async () => {
  try {
    await updateAboutContent(aboutForm.value)
    // Success message could be added here
  } catch (err) {
    console.error('Error saving about content:', err)
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
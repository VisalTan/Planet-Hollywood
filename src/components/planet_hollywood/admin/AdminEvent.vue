<template>
  <div class="bg-linear-to-br from-purple-50 to-indigo-100 rounded-2xl shadow-xl overflow-hidden border border-purple-200">
    <!-- Header -->
    <div class="bg-linear-to-r from-purple-600 to-indigo-700 px-8 py-6">
      <div class="flex items-center space-x-3">
        <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10a2 2 0 002 2h4a2 2 0 002-2V11M9 11h6" />
          </svg>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-white">Event Section Content</h2>
          <p class="text-purple-100 text-sm mt-1">Manage your event hall information and capacities</p>
        </div>
      </div>
    </div>

    <!-- Form Content -->
    <div class="p-8">
      <form @submit.prevent="saveEventContent" class="space-y-8">
        <!-- Title & Subtitle Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Title -->
          <div class="group">
            <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
              <svg class="w-4 h-4 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              Section Title
            </label>
            <input v-model="eventForm.title" type="text"
              class="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-purple-300"
              placeholder="e.g., Where Every Event Deserves a Spotlight" />
          </div>

          <!-- Subtitle -->
          <div class="group">
            <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
              <svg class="w-4 h-4 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              Subtitle
            </label>
            <input v-model="eventForm.subtitle" type="text"
              class="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-purple-300"
              placeholder="e.g., Over 900 square meters of dynamic event space" />
          </div>
        </div>

        <!-- Image Upload -->
        <ImageUpload
          v-model="eventForm.image"
          label="Event Image"
        />

        <!-- Hall Information -->
        <div class="bg-white rounded-2xl p-6 border-2 border-purple-200 shadow-sm">
          <div class="flex items-center mb-6">
            <svg class="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <h3 class="text-lg font-bold text-slate-800">Hall Information</h3>
          </div>

          <div class="space-y-4">
            <!-- Hall Name -->
            <div class="group">
              <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
                <svg class="w-4 h-4 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Hall Name
              </label>
              <input v-model="eventForm.hallName" type="text"
                class="w-full px-4 py-3 bg-linear-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:border-indigo-300"
                placeholder="e.g., The Hall of Phame" />
            </div>

            <!-- Description -->
            <div class="group">
              <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
                <svg class="w-4 h-4 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Description
              </label>
              <textarea v-model="eventForm.description" rows="4"
                class="w-full px-4 py-3 bg-linear-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:border-indigo-300 resize-none"
                placeholder="Describe your event hall and its features..."></textarea>
            </div>
          </div>
        </div>

        <!-- Capacity Information -->
        <div class="bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border-2 border-slate-200 shadow-sm">
          <div class="flex items-center mb-6">
            <svg class="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 class="text-lg font-bold text-slate-800">Capacity Information</h3>
            <span class="ml-2 text-xs text-slate-500">Set capacity for different event types</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Banquet -->
            <div class="bg-white rounded-xl p-5 border-2 border-slate-200 hover:border-pink-300 transition-all duration-200">
              <div class="flex items-center mb-3">
                <div class="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div class="ml-3">
                  <h4 class="text-sm font-bold text-slate-900">Banquet</h4>
                  <p class="text-xs text-slate-500">Seated dining capacity</p>
                </div>
              </div>
              <div class="space-y-2">
                <input v-model="eventForm.capacities.banquet.count" type="text"
                  class="w-full px-3 py-2 bg-pink-50 border-2 border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all text-sm font-semibold"
                  placeholder="180-210" />
                <input v-model="eventForm.capacities.banquet.label" type="text"
                  class="w-full px-3 py-2 bg-pink-50 border-2 border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all text-xs text-slate-600"
                  placeholder="Banquet" readonly />
              </div>
            </div>

            <!-- Theatre -->
            <div class="bg-white rounded-xl p-5 border-2 border-slate-200 hover:border-cyan-300 transition-all duration-200">
              <div class="flex items-center mb-3">
                <div class="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="ml-3">
                  <h4 class="text-sm font-bold text-slate-900">Theatre</h4>
                  <p class="text-xs text-slate-500">Presentation style seating</p>
                </div>
              </div>
              <div class="space-y-2">
                <input v-model="eventForm.capacities.theatre.count" type="text"
                  class="w-full px-3 py-2 bg-cyan-50 border-2 border-cyan-200 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all text-sm font-semibold"
                  placeholder="250-280" />
                <input v-model="eventForm.capacities.theatre.label" type="text"
                  class="w-full px-3 py-2 bg-cyan-50 border-2 border-cyan-200 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all text-xs text-slate-600"
                  placeholder="Theatre" readonly />
              </div>
            </div>

            <!-- Classroom -->
            <div class="bg-white rounded-xl p-5 border-2 border-slate-200 hover:border-purple-300 transition-all duration-200">
              <div class="flex items-center mb-3">
                <div class="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div class="ml-3">
                  <h4 class="text-sm font-bold text-slate-900">Classroom</h4>
                  <p class="text-xs text-slate-500">Table and chair setup</p>
                </div>
              </div>
              <div class="space-y-2">
                <input v-model="eventForm.capacities.classroom.count" type="text"
                  class="w-full px-3 py-2 bg-purple-50 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all text-sm font-semibold"
                  placeholder="120-140" />
                <input v-model="eventForm.capacities.classroom.label" type="text"
                  class="w-full px-3 py-2 bg-purple-50 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all text-xs text-slate-600"
                  placeholder="Classroom" readonly />
              </div>
            </div>

            <!-- Boardroom -->
            <div class="bg-white rounded-xl p-5 border-2 border-slate-200 hover:border-yellow-300 transition-all duration-200">
              <div class="flex items-center mb-3">
                <div class="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div class="ml-3">
                  <h4 class="text-sm font-bold text-slate-900">Boardroom</h4>
                  <p class="text-xs text-slate-500">Executive meeting setup</p>
                </div>
              </div>
              <div class="space-y-2">
                <input v-model="eventForm.capacities.boardroom.count" type="text"
                  class="w-full px-3 py-2 bg-yellow-50 border-2 border-yellow-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-sm font-semibold"
                  placeholder="40-50" />
                <input v-model="eventForm.capacities.boardroom.label" type="text"
                  class="w-full px-3 py-2 bg-yellow-50 border-2 border-yellow-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-xs text-slate-600"
                  placeholder="Boardroom" readonly />
              </div>
            </div>
          </div>
        </div>

        <!-- Features -->
        <div class="group">
          <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
            <svg class="w-4 h-4 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Features & Amenities
          </label>
          <input v-model="eventForm.features" type="text"
            class="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-purple-300"
            placeholder="e.g., Equipped with state-of-the-art AV systems & high-speed Wi-Fi" />
        </div>

        <!-- Save Button -->
        <div class="flex items-center justify-between pt-6 border-t-2 border-purple-200">
          <div class="flex items-center text-sm text-slate-500">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Changes will be visible immediately
          </div>
          <button type="submit" :disabled="loading"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl shadow-lg text-white bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 transition-all duration-200">
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
import { useEvent, type EventContent } from '~/composables/content/useEvent'
import ImageUpload from '~/components/admin/ImageUpload.vue'

const { eventContent, loading, updateEventContent } = useEvent()

// Event form data
const eventForm = ref<EventContent>({
  title: '',
  subtitle: '',
  image: '',
  hallName: '',
  description: '',
  capacities: {
    banquet: { count: '', label: 'Banquet' },
    theatre: { count: '', label: 'Theatre' },
    classroom: { count: '', label: 'Classroom' },
    boardroom: { count: '', label: 'Boardroom' }
  },
  features: ''
})

// Watch for event content changes and update form
watch(eventContent, (newContent) => {
  if (newContent) {
    eventForm.value = {
      title: newContent.title,
      subtitle: newContent.subtitle,
      image: newContent.image,
      hallName: newContent.hallName,
      description: newContent.description,
      capacities: {
        banquet: { ...newContent.capacities.banquet },
        theatre: { ...newContent.capacities.theatre },
        classroom: { ...newContent.capacities.classroom },
        boardroom: { ...newContent.capacities.boardroom }
      },
      features: newContent.features
    }
  }
}, { immediate: true })

// Event content management methods
const saveEventContent = async () => {
  try {
    await updateEventContent(eventForm.value)
    // Success message could be added here
  } catch (err) {
    console.error('Error saving event content:', err)
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
<template>
  <div class="bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl shadow-xl overflow-hidden border border-slate-200">
    <!-- Header -->
    <div class="bg-linear-to-r from-emerald-600 to-teal-700 px-8 py-6">
      <div class="flex items-center space-x-3">
        <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-white">Location Section Content</h2>
          <p class="text-emerald-100 text-sm mt-1">Showcase nearby attractions and local experiences</p>
        </div>
      </div>
    </div>

    <!-- Form Content -->
    <div class="p-8">
      <form @submit.prevent="saveLocationContent" class="space-y-8">
        <!-- Title and Subtitle Row -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Title -->
          <div class="group">
            <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
              <svg class="w-4 h-4 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              Main Title
            </label>
            <input
              v-model="locationForm.title"
              type="text"
              class="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-slate-300"
              placeholder="Enter an attention-grabbing title"
            />
          </div>

          <!-- Subtitle -->
          <div class="group">
            <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
              <svg class="w-4 h-4 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              Subtitle
            </label>
            <input
              v-model="locationForm.subtitle"
              type="text"
              class="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-slate-300"
              placeholder="Add a compelling subtitle"
            />
          </div>
        </div>

        <!-- Attractions Section -->
        <div class="bg-slate-50 rounded-2xl p-6 border-2 border-slate-200">
          <div class="flex items-center justify-between mb-6">
            <label class="flex items-center text-lg font-semibold text-slate-700">
              <svg class="w-5 h-5 mr-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Nearby Attractions
              <span class="ml-2 text-sm text-slate-500 font-normal">({{ locationForm.attractions.length }} attractions)</span>
            </label>
            <button
              type="button"
              @click="addAttraction"
              class="inline-flex items-center px-4 py-2 bg-linear-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 transform"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Attraction
            </button>
          </div>

          <div class="space-y-6">
            <div
              v-for="(attraction, index) in locationForm.attractions"
              :key="index"
              class="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <!-- Attraction Header -->
              <div class="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-linear-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold text-slate-900">{{ attraction.name || `Attraction ${index + 1}` }}</h4>
                    <p class="text-sm text-slate-500">Configure attraction details and location</p>
                  </div>
                </div>
                <button
                  type="button"
                  @click="removeAttraction(index)"
                  class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>

              <!-- Attraction Form Fields -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Name -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Attraction Name</label>
                  <input
                    v-model="attraction.name"
                    type="text"
                    class="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-slate-300"
                    placeholder="e.g., Central Park, Times Square"
                  />
                </div>

                <!-- Distance -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Distance from Hotel</label>
                  <input
                    v-model="attraction.distance"
                    type="text"
                    class="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-slate-300"
                    placeholder="e.g., 2.5 km, 15 min walk"
                  />
                </div>

                <!-- Description -->
                <div class="md:col-span-2">
                  <label class="block text-sm font-medium text-slate-700 mb-2">Description</label>
                  <textarea
                    v-model="attraction.description"
                    rows="3"
                    class="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-slate-300 resize-none"
                    placeholder="Describe what makes this attraction special and why guests should visit"
                  ></textarea>
                </div>

                <!-- Image Upload -->
                <div class="md:col-span-2">
                  <ImageUpload
                    v-model="attraction.image"
                    label="Attraction Image"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="locationForm.attractions.length === 0" class="text-center py-12">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-2xl mb-4">
              <svg class="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">No attractions added yet</h3>
            <p class="text-slate-600 mb-6">Start building your location section by adding nearby attractions and points of interest</p>
            <button
              type="button"
              @click="addAttraction"
              class="inline-flex items-center px-6 py-3 bg-linear-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 transform"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add First Attraction
            </button>
          </div>
        </div>

        <!-- Save Button -->
        <div class="flex items-center justify-between pt-6 border-t-2 border-slate-200">
          <div class="flex items-center text-sm text-slate-500">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Changes will be visible immediately on your website
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
import { useLocation, type LocationContent, type Attraction } from '~/composables/useLocation'
import ImageUpload from '~/components/admin/ImageUpload.vue'

const { locationContent, loading, updateLocationContent } = useLocation()

// Location form data
const locationForm = ref<LocationContent>({
  title: '',
  subtitle: '',
  attractions: []
})

// Watch for location content changes and update form
watch(locationContent, (newContent) => {
  if (newContent) {
    locationForm.value = {
      title: newContent.title,
      subtitle: newContent.subtitle,
      attractions: newContent.attractions.map(a => ({ ...a }))
    }
  }
}, { immediate: true })

// Location content management methods
const saveLocationContent = async () => {
  try {
    await updateLocationContent(locationForm.value)
    // Success message could be added here
  } catch (err) {
    console.error('Error saving location content:', err)
  }
}

const addAttraction = () => {
  locationForm.value.attractions.push({
    name: '',
    description: '',
    distance: '',
    image: ''
  })
}

const removeAttraction = (index: number) => {
  locationForm.value.attractions.splice(index, 1)
}
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
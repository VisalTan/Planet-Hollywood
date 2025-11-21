<template>
  <div class="bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl shadow-xl overflow-hidden border border-slate-200">
    <!-- Header -->
    <div class="bg-linear-to-r from-orange-600 to-red-700 px-8 py-6">
      <div class="flex items-center space-x-3">
        <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-white">Dining Section Content</h2>
          <p class="text-orange-100 text-sm mt-1">Manage restaurant listings and dining experiences</p>
        </div>
      </div>
    </div>

    <!-- Form Content -->
    <div class="p-8">
      <form @submit.prevent="saveDiningContent" class="space-y-8">
        <!-- Title and Subtitle Row -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Title -->
          <div class="group">
            <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
              <svg class="w-4 h-4 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              Main Title
            </label>
            <input
              v-model="diningForm.title"
              type="text"
              class="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-slate-300"
              placeholder="Enter an attention-grabbing title"
            />
          </div>

          <!-- Subtitle -->
          <div class="group">
            <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
              <svg class="w-4 h-4 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              Subtitle
            </label>
            <input
              v-model="diningForm.subtitle"
              type="text"
              class="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-slate-300"
              placeholder="Add a compelling subtitle"
            />
          </div>
        </div>

        <!-- Restaurants Section -->
        <div class="bg-slate-50 rounded-2xl p-6 border-2 border-slate-200">
          <div class="flex items-center justify-between mb-6">
            <label class="flex items-center text-lg font-semibold text-slate-700">
              <svg class="w-5 h-5 mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Restaurants
              <span class="ml-2 text-sm text-slate-500 font-normal">({{ diningForm.restaurants.length }} restaurants)</span>
            </label>
            <button
              type="button"
              @click="addRestaurant"
              class="inline-flex items-center px-4 py-2 bg-linear-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 transform"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Restaurant
            </button>
          </div>

          <div class="space-y-6">
            <div
              v-for="(restaurant, index) in diningForm.restaurants"
              :key="index"
              class="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <!-- Restaurant Header -->
              <div class="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-linear-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold text-slate-900">Restaurant {{ index + 1 }}</h4>
                    <p class="text-sm text-slate-500">Configure restaurant details</p>
                  </div>
                </div>
                <button
                  type="button"
                  @click="removeRestaurant(index)"
                  class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>

              <!-- Restaurant Form Fields -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Name -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Restaurant Name</label>
                  <input
                    v-model="restaurant.name"
                    type="text"
                    class="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-slate-300"
                    placeholder="Enter restaurant name"
                  />
                </div>

                <!-- Cuisine -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Cuisine Type</label>
                  <input
                    v-model="restaurant.cuisine"
                    type="text"
                    class="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-slate-300"
                    placeholder="e.g., Italian, Asian, American"
                  />
                </div>

                <!-- Hours -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Operating Hours</label>
                  <input
                    v-model="restaurant.hours"
                    type="text"
                    class="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-slate-300"
                    placeholder="e.g., Mon-Sun: 6AM-11PM"
                  />
                </div>

                <!-- Description -->
                <div class="md:col-span-2">
                  <label class="block text-sm font-medium text-slate-700 mb-2">Description</label>
                  <textarea
                    v-model="restaurant.description"
                    rows="3"
                    class="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-slate-300 resize-none"
                    placeholder="Describe the restaurant's atmosphere, specialties, and unique features"
                  ></textarea>
                </div>

                <!-- Image Upload -->
                <div class="md:col-span-2">
                  <ImageUpload
                    v-model="restaurant.image"
                    label="Restaurant Image"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="diningForm.restaurants.length === 0" class="text-center py-12">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-2xl mb-4">
              <svg class="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">No restaurants added yet</h3>
            <p class="text-slate-600 mb-6">Start building your dining section by adding your first restaurant</p>
            <button
              type="button"
              @click="addRestaurant"
              class="inline-flex items-center px-6 py-3 bg-linear-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 transform"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add First Restaurant
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
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl shadow-lg text-white bg-linear-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 transition-all duration-200"
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
import { useDining, type DiningContent, type Restaurant } from '~/composables/content/useDining'
import ImageUpload from '~/components/admin/ImageUpload.vue'

const { diningContent, loading, updateDiningContent } = useDining()

// Dining form data
const diningForm = ref<DiningContent>({
  title: '',
  subtitle: '',
  restaurants: []
})

// Watch for dining content changes and update form
watch(diningContent, (newContent) => {
  if (newContent) {
    diningForm.value = {
      title: newContent.title,
      subtitle: newContent.subtitle,
      restaurants: newContent.restaurants.map(r => ({ ...r }))
    }
  }
}, { immediate: true })

// Dining content management methods
const saveDiningContent = async () => {
  try {
    await updateDiningContent(diningForm.value)
    // Success message could be added here
  } catch (err) {
    console.error('Error saving dining content:', err)
  }
}

const addRestaurant = () => {
  diningForm.value.restaurants.push({
    name: '',
    description: '',
    image: '',
    hours: '',
    cuisine: ''
  })
}

const removeRestaurant = (index: number) => {
  diningForm.value.restaurants.splice(index, 1)
}
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
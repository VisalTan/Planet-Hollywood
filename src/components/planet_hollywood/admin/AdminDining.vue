<template>
  <div class="bg-white rounded-lg shadow">
    <div class="px-6 py-4 border-b border-gray-200">
      <h2 class="text-lg font-medium text-gray-900">Dining Section Content</h2>
    </div>
    <div class="p-6">
      <form @submit.prevent="saveDiningContent" class="space-y-6">
        <!-- Title -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Title</label>
          <input v-model="diningForm.title" type="text"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter title" />
        </div>

        <!-- Subtitle -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Subtitle</label>
          <input v-model="diningForm.subtitle" type="text"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter subtitle" />
        </div>

        <!-- Restaurants -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Restaurants</label>
          <div class="space-y-4">
            <div v-for="(restaurant, index) in diningForm.restaurants" :key="index" class="border rounded-md p-4">
              <div class="flex justify-between items-center mb-2">
                <h4 class="text-md font-medium">Restaurant {{ index + 1 }}</h4>
                <button type="button" @click="removeRestaurant(index)" class="text-red-600 hover:text-red-800">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="space-y-2">
                <div>
                  <label class="block text-sm text-gray-600">Name</label>
                  <input v-model="restaurant.name" type="text"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label class="block text-sm text-gray-600">Description</label>
                  <textarea v-model="restaurant.description" rows="2"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <div>
                  <label class="block text-sm text-gray-600">Image URL</label>
                  <input v-model="restaurant.image" type="url"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label class="block text-sm text-gray-600">Hours</label>
                  <input v-model="restaurant.hours" type="text"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label class="block text-sm text-gray-600">Cuisine</label>
                  <input v-model="restaurant.cuisine" type="text"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
            </div>
          </div>
          <button type="button" @click="addRestaurant"
            class="mt-2 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Add Restaurant
          </button>
        </div>

        <!-- Save Button -->
        <div class="flex justify-end">
          <button type="submit" :disabled="loading"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50">
            <span v-if="loading">Saving...</span>
            <span v-else>Save Changes</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useDining, type DiningContent, type Restaurant } from '~/composables/useDining'

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
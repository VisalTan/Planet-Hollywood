<template>
  <div class="bg-white rounded-lg shadow">
    <div class="px-6 py-4 border-b border-gray-200">
      <h2 class="text-lg font-medium text-gray-900">Rooms Section Content</h2>
    </div>
    <div class="p-6">
      <form @submit.prevent="saveRoomsContent" class="space-y-6">
        <!-- Title -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Title</label>
          <input v-model="roomsForm.title" type="text"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter title" />
        </div>

        <!-- Subtitle -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Subtitle</label>
          <input v-model="roomsForm.subtitle" type="text"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter subtitle" />
        </div>

        <!-- Rooms -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Rooms</label>
          <div class="space-y-4">
            <div v-for="(room, index) in roomsForm.rooms" :key="index" class="border rounded-md p-4">
              <div class="flex justify-between items-center mb-2">
                <h4 class="text-md font-medium">{{ room.name || `Room ${index + 1}` }}</h4>
                <button type="button" @click="removeRoom(index)" class="text-red-600 hover:text-red-800">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm text-gray-600">Name</label>
                  <input v-model="room.name" type="text"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label class="block text-sm text-gray-600">Size</label>
                  <input v-model="room.size" type="text"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div class="col-span-2">
                  <label class="block text-sm text-gray-600">Description</label>
                  <textarea v-model="room.description" rows="2"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <div>
                  <label class="block text-sm text-gray-600">Image URL</label>
                  <input v-model="room.image" type="url"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label class="block text-sm text-gray-600">Color</label>
                  <input v-model="room.color" type="text"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
            </div>
          </div>
          <button type="button" @click="addRoom"
            class="mt-2 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Add Room
          </button>
        </div>

        <!-- Stats -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Stats</label>
          <div class="space-y-4">
            <div v-for="(stat, index) in roomsForm.stats" :key="index" class="border rounded-md p-4">
              <div class="flex justify-between items-center mb-2">
                <h4 class="text-md font-medium">{{ stat.label || `Stat ${index + 1}` }}</h4>
                <button type="button" @click="removeStat(index)" class="text-red-600 hover:text-red-800">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="grid grid-cols-3 gap-4">
                <div>
                  <label class="block text-sm text-gray-600">Count</label>
                  <input v-model="stat.count" type="text"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label class="block text-sm text-gray-600">Label</label>
                  <input v-model="stat.label" type="text"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label class="block text-sm text-gray-600">Color</label>
                  <input v-model="stat.color" type="text"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
            </div>
          </div>
          <button type="button" @click="addStat"
            class="mt-2 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Add Stat
          </button>
        </div>

        <!-- Videos -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Videos</label>
          <div class="space-y-4">
            <div v-for="(video, index) in roomsForm.videos" :key="index" class="border rounded-md p-4">
              <div class="flex justify-between items-center mb-2">
                <h4 class="text-md font-medium">{{ video.label || `Video ${index + 1}` }}</h4>
                <button type="button" @click="removeVideo(index)" class="text-red-600 hover:text-red-800">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="grid grid-cols-3 gap-4">
                <div>
                  <label class="block text-sm text-gray-600">ID</label>
                  <input v-model="video.id" type="text"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label class="block text-sm text-gray-600">Label</label>
                  <input v-model="video.label" type="text"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label class="block text-sm text-gray-600">Source</label>
                  <input v-model="video.src" type="text"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
            </div>
          </div>
          <button type="button" @click="addVideo"
            class="mt-2 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Add Video
          </button>
        </div>

        <!-- Penthouse Title -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Penthouse Title</label>
          <input v-model="roomsForm.penthouseTitle" type="text"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter penthouse title" />
        </div>

        <!-- Penthouse Description -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Penthouse Description</label>
          <textarea v-model="roomsForm.penthouseDescription" rows="3"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter penthouse description"></textarea>
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
import { useRooms, type RoomsContent, type Room, type Video } from '~/composables/useRooms'

const { roomsContent, loading, updateRoomsContent } = useRooms()

// Rooms form data
const roomsForm = ref<RoomsContent>({
  title: '',
  subtitle: '',
  rooms: [],
  stats: [],
  videos: [],
  penthouseTitle: '',
  penthouseDescription: ''
})

// Watch for rooms content changes and update form
watch(roomsContent, (newContent) => {
  if (newContent) {
    roomsForm.value = {
      title: newContent.title,
      subtitle: newContent.subtitle,
      rooms: newContent.rooms.map(r => ({ ...r })),
      stats: newContent.stats.map(s => ({ ...s })),
      videos: newContent.videos.map(v => ({ ...v })),
      penthouseTitle: newContent.penthouseTitle,
      penthouseDescription: newContent.penthouseDescription
    }
  }
}, { immediate: true })

// Rooms content management methods
const saveRoomsContent = async () => {
  try {
    await updateRoomsContent(roomsForm.value)
    // Success message could be added here
  } catch (err) {
    console.error('Error saving rooms content:', err)
  }
}

const addRoom = () => {
  roomsForm.value.rooms.push({
    name: '',
    description: '',
    size: '',
    image: '',
    color: ''
  })
}

const removeRoom = (index: number) => {
  roomsForm.value.rooms.splice(index, 1)
}

const addStat = () => {
  roomsForm.value.stats.push({
    count: '',
    label: '',
    color: ''
  })
}

const removeStat = (index: number) => {
  roomsForm.value.stats.splice(index, 1)
}

const addVideo = () => {
  roomsForm.value.videos.push({
    id: '',
    label: '',
    src: ''
  })
}

const removeVideo = (index: number) => {
  roomsForm.value.videos.splice(index, 1)
}
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
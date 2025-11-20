<template>
  <div class="bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl shadow-xl overflow-hidden border border-slate-200">
    <!-- Header -->
    <div class="bg-linear-to-r from-purple-600 to-indigo-700 px-8 py-6">
      <div class="flex items-center space-x-3">
        <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-white">Rooms Section Content</h2>
          <p class="text-purple-100 text-sm mt-1">Manage luxury accommodations and room details</p>
        </div>
      </div>
    </div>

    <!-- Form Content -->
    <div class="p-8">
      <form @submit.prevent="saveRoomsContent" class="space-y-8">
        <!-- Title and Subtitle Row -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Title -->
          <div class="group">
            <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
              <svg class="w-4 h-4 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              Main Title
            </label>
            <input
              v-model="roomsForm.title"
              type="text"
              class="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-slate-300"
              placeholder="Enter an attention-grabbing title"
            />
          </div>

          <!-- Subtitle -->
          <div class="group">
            <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
              <svg class="w-4 h-4 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              Subtitle
            </label>
            <input
              v-model="roomsForm.subtitle"
              type="text"
              class="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-slate-300"
              placeholder="Add a compelling subtitle"
            />
          </div>
        </div>

        <!-- Rooms Section -->
        <div class="bg-slate-50 rounded-2xl p-6 border-2 border-slate-200">
          <div class="flex items-center justify-between mb-6">
            <label class="flex items-center text-lg font-semibold text-slate-700">
              <svg class="w-5 h-5 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Luxury Rooms
              <span class="ml-2 text-sm text-slate-500 font-normal">({{ roomsForm.rooms.length }} rooms)</span>
            </label>
            <button
              type="button"
              @click="addRoom"
              class="inline-flex items-center px-4 py-2 bg-linear-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 transform"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Room
            </button>
          </div>

          <div class="space-y-6">
            <div
              v-for="(room, index) in roomsForm.rooms"
              :key="index"
              class="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <!-- Room Header -->
              <div class="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-linear-to-br from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold text-slate-900">{{ room.name || `Room ${index + 1}` }}</h4>
                    <p class="text-sm text-slate-500">Configure room details and amenities</p>
                  </div>
                </div>
                <button
                  type="button"
                  @click="removeRoom(index)"
                  class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>

              <!-- Room Form Fields -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Name -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Room Name</label>
                  <input
                    v-model="room.name"
                    type="text"
                    class="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-slate-300"
                    placeholder="e.g., Deluxe Suite, Presidential Suite"
                  />
                </div>

                <!-- Size -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Room Size</label>
                  <input
                    v-model="room.size"
                    type="text"
                    class="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-slate-300"
                    placeholder="e.g., 450 sq ft, 85 m²"
                  />
                </div>

                <!-- Description -->
                <div class="md:col-span-2">
                  <label class="block text-sm font-medium text-slate-700 mb-2">Description</label>
                  <textarea
                    v-model="room.description"
                    rows="3"
                    class="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-slate-300 resize-none"
                    placeholder="Describe the room's features, amenities, and unique characteristics"
                  ></textarea>
                </div>

                <!-- Color Theme -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Color Theme</label>
                  <input
                    v-model="room.color"
                    type="text"
                    class="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-slate-300"
                    placeholder="e.g., Gold & White, Ocean Blue"
                  />
                </div>

                <!-- Image Upload -->
                <div class="md:col-span-2">
                  <ImageUpload
                    v-model="room.image"
                    label="Room Image"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="roomsForm.rooms.length === 0" class="text-center py-12">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-2xl mb-4">
              <svg class="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">No rooms added yet</h3>
            <p class="text-slate-600 mb-6">Start building your rooms section by adding your first luxury accommodation</p>
            <button
              type="button"
              @click="addRoom"
              class="inline-flex items-center px-6 py-3 bg-linear-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 transform"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add First Room
            </button>
          </div>
        </div>

        <!-- Stats Section -->
        <div class="bg-slate-50 rounded-2xl p-6 border-2 border-slate-200">
          <div class="flex items-center justify-between mb-6">
            <label class="flex items-center text-lg font-semibold text-slate-700">
              <svg class="w-5 h-5 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Room Statistics
              <span class="ml-2 text-sm text-slate-500 font-normal">({{ roomsForm.stats.length }} stats)</span>
            </label>
            <button
              type="button"
              @click="addStat"
              class="inline-flex items-center px-4 py-2 bg-linear-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 transform"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Stat
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              v-for="(stat, index) in roomsForm.stats"
              :key="index"
              class="bg-white rounded-lg shadow-md border border-slate-200 p-4 hover:shadow-lg transition-all duration-200"
            >
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-sm font-semibold text-slate-900">{{ stat.label || `Stat ${index + 1}` }}</h4>
                <button
                  type="button"
                  @click="removeStat(index)"
                  class="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-all duration-200"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="space-y-3">
                <div>
                  <label class="block text-xs text-slate-600 mb-1">Count</label>
                  <input
                    v-model="stat.count"
                    type="text"
                    class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-sm focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="e.g., 25"
                  />
                </div>
                <div>
                  <label class="block text-xs text-slate-600 mb-1">Label</label>
                  <input
                    v-model="stat.label"
                    type="text"
                    class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-sm focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="e.g., Total Rooms"
                  />
                </div>
                <div>
                  <label class="block text-xs text-slate-600 mb-1">Color</label>
                  <input
                    v-model="stat.color"
                    type="text"
                    class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-sm focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="e.g., #8B5CF6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Video Section -->
        <div class="bg-slate-50 rounded-2xl p-6 border-2 border-slate-200">
          <div class="flex items-center mb-6">
            <svg class="w-6 h-6 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <h3 class="text-lg font-bold text-slate-900">Main Promotional Video</h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Video Title -->
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">Video Title</label>
              <input
                v-model="roomsForm.videoTitle"
                type="text"
                class="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-slate-300"
                placeholder="e.g., Experience Planet Hollywood"
              />
            </div>

            <!-- Video Description -->
            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-slate-700 mb-2">Video Description</label>
              <textarea
                v-model="roomsForm.videoDescription"
                rows="3"
                class="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-slate-300 resize-none"
                placeholder="Describe what this video showcases about your hotel experience"
              ></textarea>
            </div>

            <!-- Video Upload -->
            <div class="md:col-span-2">
              <VideoUpload
                v-model="roomsForm.mainVideo"
                label="Upload Main Promotional Video"
              />
            </div>
          </div>
        </div>

        <!-- Penthouse Section -->
        <div class="bg-linear-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border-2 border-purple-200">
          <div class="flex items-center mb-6">
            <svg class="w-6 h-6 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <h3 class="text-lg font-bold text-slate-900">Penthouse Suite</h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Penthouse Title -->
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">Penthouse Title</label>
              <input
                v-model="roomsForm.penthouseTitle"
                type="text"
                class="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-slate-300"
                placeholder="e.g., Presidential Penthouse"
              />
            </div>

            <!-- Penthouse Description -->
            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-slate-700 mb-2">Penthouse Description</label>
              <textarea
                v-model="roomsForm.penthouseDescription"
                rows="4"
                class="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-slate-300 resize-none"
                placeholder="Describe the exclusive penthouse suite features, amenities, and luxury experience"
              ></textarea>
            </div>

            <!-- Penthouse Video Upload -->
            <div class="md:col-span-2">
              <VideoUpload
                v-model="roomsForm.penthouseVideo"
                label="Penthouse Experience Video"
              />
            </div>
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
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl shadow-lg text-white bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 transition-all duration-200"
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
import { useRooms, type RoomsContent, type Room, type Video } from '~/composables/useRooms'
import ImageUpload from '~/components/admin/ImageUpload.vue'
import VideoUpload from '~/components/admin/VideoUpload.vue'

const { roomsContent, loading, updateRoomsContent } = useRooms()

// Rooms form data
const roomsForm = ref<RoomsContent>({
  title: '',
  subtitle: '',
  rooms: [],
  stats: [],
  videos: [],
  videoTitle: '',
  videoDescription: '',
  mainVideo: '',
  penthouseTitle: '',
  penthouseDescription: '',
  penthouseVideo: ''
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
      videoTitle: newContent.videoTitle || '',
      videoDescription: newContent.videoDescription || '',
      mainVideo: newContent.mainVideo || '',
      penthouseTitle: newContent.penthouseTitle,
      penthouseDescription: newContent.penthouseDescription,
      penthouseVideo: newContent.penthouseVideo || ''
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

</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
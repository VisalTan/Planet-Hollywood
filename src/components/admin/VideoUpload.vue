<template>
  <div class="video-upload">
    <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
      <svg class="w-4 h-4 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
      {{ label }}
    </label>

    <!-- Current Video Preview -->
    <div v-if="modelValue" class="mb-4 relative">
      <video :src="modelValue" controls class="w-full h-64 object-cover rounded-xl border-2 border-indigo-200"></video>
      <button
        @click="removeVideo"
        class="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
        type="button"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Upload Area -->
    <div
      @dragover.prevent
      @dragleave.prevent
      @drop.prevent="handleDrop"
      @click="triggerFileInput"
      class="relative border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200 hover:border-indigo-400 hover:bg-indigo-50/50"
      :class="{
        'border-indigo-400 bg-indigo-50/50': isDragOver,
        'border-gray-300': !isDragOver
      }"
    >
      <input
        ref="fileInput"
        type="file"
        accept="video/*"
        @change="handleFileSelect"
        class="hidden"
      />

      <!-- Upload Icon -->
      <div class="mb-4">
        <svg class="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      </div>

      <!-- Upload Text -->
      <div class="text-sm text-gray-600">
        <p class="font-medium mb-1">
          <span class="text-indigo-600">Click to upload</span> or drag and drop
        </p>
        <p class="text-xs text-gray-500">MP4, WebM, OGG up to 100MB</p>
      </div>

      <!-- Upload Progress -->
      <div v-if="uploading" class="mt-4">
        <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div
            class="bg-indigo-600 h-2 rounded-full transition-all duration-300"
            :style="{ width: uploadProgress + '%' }"
          ></div>
        </div>
        <p class="text-xs text-gray-600">{{ uploadProgress }}% uploaded</p>
      </div>

      <!-- Error Message -->
      <div v-if="localError" class="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
        <p class="text-sm text-red-600">{{ localError }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useFirebaseStorage } from '~/composables/useFirebaseStorage'

interface Props {
  modelValue: string
  label: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const fileInput = ref<HTMLInputElement>()
const isDragOver = ref(false)
const localError = ref<string | null>(null)

const { uploading, uploadProgress, uploadFile, deleteFile } = useFirebaseStorage()

const handleDrop = async (event: DragEvent) => {
  isDragOver.value = false
  const files = event.dataTransfer?.files
  if (files && files.length > 0 && files[0]) {
    await handleFile(files[0])
  }
}

const handleFileSelect = async (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = target.files
  if (files && files.length > 0 && files[0]) {
    await handleFile(files[0])
  }
}

const handleFile = async (file: File) => {
  localError.value = null

  // Validate file type
  if (!file.type.startsWith('video/')) {
    localError.value = 'Please select a video file'
    return
  }

  // Validate file size (100MB limit for videos)
  if (file.size > 100 * 1024 * 1024) {
    localError.value = 'File size must be less than 100MB'
    return
  }

  try {
    // Generate unique filename
    const timestamp = Date.now()
    const extension = file.name.split('.').pop()
    const filename = `videos/${timestamp}_${Math.random().toString(36).substring(2)}.${extension}`

    // Upload file
    const downloadURL = await uploadFile(file, filename)

    // Update model value
    emit('update:modelValue', downloadURL)

    // Clear file input
    if (fileInput.value) {
      fileInput.value.value = ''
    }
  } catch (err) {
    console.error('Upload failed:', err)
  }
}

const triggerFileInput = () => {
  fileInput.value?.click()
}

const removeVideo = async () => {
  if (props.modelValue) {
    // Delete from storage
    await deleteFile(props.modelValue)
    // Clear model value
    emit('update:modelValue', '')
  }
}
</script>

<style scoped>
.video-upload {
  /* Additional styles if needed */
}
</style>
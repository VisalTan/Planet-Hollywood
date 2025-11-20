<template>
  <div class="image-upload">
    <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
      <svg class="w-4 h-4 mr-2 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      {{ label }}
    </label>

    <!-- Current Image Preview -->
    <div v-if="modelValue" class="mb-4 relative">
      <img :src="modelValue" :alt="label" class="w-full h-80 object-cover rounded-xl border-2 border-cyan-200" />
      <button
        @click="removeImage"
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
      class="relative border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200 hover:border-cyan-400 hover:bg-cyan-50/50"
      :class="{
        'border-cyan-400 bg-cyan-50/50': isDragOver,
        'border-gray-300': !isDragOver
      }"
    >
      <input
        ref="fileInput"
        type="file"
        accept="image/*"
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
          <span class="text-cyan-600">Click to upload</span> or drag and drop
        </p>
        <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
      </div>

      <!-- Upload Progress -->
      <div v-if="uploading" class="mt-4">
        <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div
            class="bg-cyan-600 h-2 rounded-full transition-all duration-300"
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
import { ref, computed } from 'vue'
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
  if (!file.type.startsWith('image/')) {
    localError.value = 'Please select an image file'
    return
  }

  // Validate file size (10MB limit)
  if (file.size > 10 * 1024 * 1024) {
    localError.value = 'File size must be less than 10MB'
    return
  }

  try {
    // Generate unique filename
    const timestamp = Date.now()
    const extension = file.name.split('.').pop()
    const filename = `images/${timestamp}_${Math.random().toString(36).substring(2)}.${extension}`

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

const removeImage = async () => {
  if (props.modelValue) {
    // Delete from storage
    await deleteFile(props.modelValue)
    // Clear model value
    emit('update:modelValue', '')
  }
}
</script>

<style scoped>
.image-upload {
  /* Additional styles if needed */
}
</style>
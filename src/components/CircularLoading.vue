<template>
  <!-- Overlay if showOverlay is true -->
  <div v-if="showOverlay" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div :class="spinnerClasses"></div>
  </div>

  <!-- Just spinner if no overlay -->
  <div v-else :class="spinnerClasses"></div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  size: { type: Number, default: 16 },       // in Tailwind spacing units (e.g., 16 = w-16 h-16)
  color: { type: String, default: 'white' }, // Tailwind color (text-white, bg-blue-500)
  borderColor: { type: String, default: 'gray-300' },
  showOverlay: { type: Boolean, default: false }
})

const spinnerClasses = computed(() => {
  return `w-${props.size} h-${props.size} border-4 border-t-${props.color} border-${props.borderColor} rounded-full animate-spin`
})
</script>

<style scoped>
/* Optional: add smooth spinning if needed, Tailwind animate-spin handles it */
</style>

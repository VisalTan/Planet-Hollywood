<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="modal-close" @click="closeModal">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <div class="modal-header">
        <h3 class="modal-title">{{ title }}</h3>
        <p v-if="description" class="modal-description">{{ description }}</p>
      </div>

      <div class="modal-video">
        <Video360Viewer :src="videoSrc" :autoplay="true" :initialMuted="false" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Video360Viewer from '../Video360Viewer.vue'

interface Props {
  isOpen: boolean
  title: string
  description?: string
  videoSrc: string
}

const props = withDefaults(defineProps<Props>(), {
  description: ''
})

const emit = defineEmits<{
  close: []
}>()

const closeModal = () => {
  emit('close')
}

// Keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
  if (!props.isOpen) return

  if (event.key === 'Escape') {
    closeModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.modal-content {
  position: relative;
  background: black;
  border-radius: 16px;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  z-index: 10;
  transition: background 0.3s ease;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.3);
}

.modal-header {
  padding: 2rem 2rem 1rem;
  text-align: center;
}

.modal-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
}

.modal-description {
  color: #ccc;
  font-size: 1rem;
  line-height: 1.5;
}

.modal-video {
  padding: 0 2rem 2rem;
}

@media (max-width: 768px) {
  .modal-overlay {
    padding: 1rem;
  }

  .modal-header {
    padding: 1.5rem 1.5rem 1rem;
  }

  .modal-title {
    font-size: 1.5rem;
  }

  .modal-video {
    padding: 0 1.5rem 1.5rem;
  }
}
</style>
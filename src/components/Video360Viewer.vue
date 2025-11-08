<template>
  <div ref="playerWrapper" class="video-player" :class="{ 'fullscreen': isFullscreen }">
     <video
      ref="videoElement"
      class="video-element"
      @click="togglePlay"
      @loadedmetadata="onLoadedMetadata"
      @timeupdate="onTimeUpdate"
      @ended="onEnded"
      :autoplay="autoplay"
      :muted="initialMuted"
      playsinline
    >
      <source :src="src" :type="videoType">
      Your browser does not support the video tag.
    </video>

    <!-- Controls Overlay -->
    <div class="controls-overlay">
      <!-- Play/Pause Button -->
      <button @click="togglePlay" class="play-btn" :class="{ playing: isPlaying }">
        <svg v-if="!isPlaying" width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M8 5v14l11-7z" />
        </svg>
        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
        </svg>
      </button>

      <!-- Progress Bar -->
      <div class="progress-container">
        <div class="time-display">{{ formatTime(currentTime) }}</div>
        <div class="progress-bar" @click="seek" ref="progressBar">
          <div class="progress-fill" :style="{ width: progress + '%' }"></div>
          <div class="progress-handle" :style="{ left: progress + '%' }"></div>
        </div>
        <div class="time-display">{{ formatTime(duration) }}</div>
      </div>

      <!-- Volume Control -->
      <div class="volume-control">
        <button @click="toggleMute" class="volume-btn">
          <svg v-if="!isMuted && volume > 0.5" width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
          </svg>
          <svg v-else-if="!isMuted && volume > 0" width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M7 9v6h4l5 5V4l-5 5H7z" />
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          </svg>
        </button>
        <input type="range" min="0" max="100" v-model="volume" @input="updateVolume" class="volume-slider" />
      </div>

      <!-- Fullscreen Button -->
      <button @click="toggleFullscreen" class="fullscreen-btn">
        <svg v-if="!isFullscreen" width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
        </svg>
        <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Props
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  initialMuted: {
    type: Boolean,
    default: true
  },
  initialVolume: {
    type: Number,
    default: 70,
    validator: (value) => value >= 0 && value <= 100
  }
})

const videoElement = ref(null)
const progressBar = ref(null)
const playerWrapper = ref(null)
const loading = ref(true)

// Video state
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const progress = ref(0)
const volume = ref(props.initialVolume)
const isMuted = ref(props.initialMuted)
const isFullscreen = ref(false)

// Compute video type from src
const videoType = computed(() => {
  const ext = props.src.split('.').pop().toLowerCase()
  const typeMap = {
    'mp4': 'video/mp4',
    'webm': 'video/webm',
    'ogg': 'video/ogg'
  }
  return typeMap[ext] || 'video/mp4'
})

const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return '0:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

const onLoadedMetadata = () => {
  duration.value = videoElement.value.duration
  loading.value = false
}

const onTimeUpdate = () => {
  currentTime.value = videoElement.value.currentTime
  progress.value = (videoElement.value.currentTime / videoElement.value.duration) * 100
}

const onEnded = () => {
  isPlaying.value = false
}

const togglePlay = () => {
  if (videoElement.value.paused) {
    videoElement.value.play()
    isPlaying.value = true
  } else {
    videoElement.value.pause()
    isPlaying.value = false
  }
}

const seek = (event) => {
  const rect = progressBar.value.getBoundingClientRect()
  const pos = (event.clientX - rect.left) / rect.width
  videoElement.value.currentTime = pos * videoElement.value.duration
}

const toggleMute = () => {
  videoElement.value.muted = !videoElement.value.muted
  isMuted.value = videoElement.value.muted
}

const updateVolume = () => {
  videoElement.value.volume = volume.value / 100
  if (volume.value > 0) {
    isMuted.value = false
    videoElement.value.muted = false
  }
}

const toggleFullscreen = () => {
  if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    if (playerWrapper.value.requestFullscreen) {
      playerWrapper.value.requestFullscreen()
    } else if (playerWrapper.value.webkitRequestFullscreen) {
      playerWrapper.value.webkitRequestFullscreen()
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    }
  }
}

const onFullscreenChange = () => {
  isFullscreen.value = !!(document.fullscreenElement || document.webkitFullscreenElement)
}

onMounted(() => {
  if (videoElement.value) {
    videoElement.value.volume = volume.value / 100
  }
  document.addEventListener('fullscreenchange', onFullscreenChange)
  document.addEventListener('webkitfullscreenchange', onFullscreenChange)
})

onUnmounted(() => {
  document.removeEventListener('fullscreenchange', onFullscreenChange)
  document.removeEventListener('webkitfullscreenchange', onFullscreenChange)
  if (videoElement.value) {
    videoElement.value.pause()
  }
})
</script>

<style scoped>
.video-player {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
}

.video-player.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  max-width: none;
  border-radius: 0;
  z-index: 9999;
}

.video-element {
  width: 100%;
  height: auto;
  display: block;
  cursor: pointer;
}

.video-player.fullscreen .video-element {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.controls-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  display: flex;
  align-items: center;
  gap: 15px;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.video-player:hover .controls-overlay {
  opacity: 1;
}

.play-btn,
.fullscreen-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.play-btn:hover,
.fullscreen-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

.play-btn.playing {
  background: rgba(59, 130, 246, 0.3);
  border-color: rgba(59, 130, 246, 0.5);
}

.fullscreen-btn {
  width: 42px;
  height: 42px;
}

.progress-container {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
}

.time-display {
  color: white;
  font-size: 14px;
  font-family: monospace;
  min-width: 45px;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  transition: height 0.2s ease;
}

.progress-bar:hover {
  height: 8px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 3px;
  transition: width 0.1s linear;
}

.progress-handle {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.progress-bar:hover .progress-handle {
  opacity: 1;
}

.volume-control {
  display: flex;
  align-items: center;
  gap: 8px;
}

.volume-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.volume-btn:hover {
  background: rgba(255, 255, 255, 0.25);
}

.volume-slider {
  width: 80px;
  height: 4px;
  -webkit-appearance: none;
  appearance: none;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  outline: none;
}

.volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
}

.volume-slider::-moz-range-thumb {
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  border: none;
}

.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 20;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 15px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .controls-overlay {
    padding: 15px;
    gap: 10px;
    opacity: 1;
  }

  .play-btn {
    width: 42px;
    height: 42px;
  }

  .fullscreen-btn {
    width: 38px;
    height: 38px;
  }

  .volume-control {
    display: none;
  }

  .time-display {
    font-size: 12px;
    min-width: 40px;
  }
}
</style>
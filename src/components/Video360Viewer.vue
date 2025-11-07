<template>
  <div ref="tourWrapper" class="virtual-tour" :class="{ 'fullscreen': isFullscreen }">
    <div ref="container" class="tour-container"></div>

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
            <path
              d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
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

    <!-- Instructions -->
    <div class="instructions" :class="{ hidden: hideInstructions }">
      <p>🖱️ Drag to look around • 📱 Touch and swipe on mobile</p>
      <button @click="hideInstructions = true" class="close-btn">×</button>
    </div>

    <!-- Loading Indicator -->
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>Loading virtual tour...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const container = ref(null)
const progressBar = ref(null)
const tourWrapper = ref(null)
const loading = ref(true)
const hideInstructions = ref(false)

// Video state
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const progress = ref(0)
const volume = ref(70)
const isMuted = ref(false)
const isFullscreen = ref(false)

// Three.js objects
let scene, camera, renderer, sphere, video, texture
let isUserInteracting = false
let onPointerDownMouseX = 0
let onPointerDownMouseY = 0
let lon = 0
let onPointerDownLon = 0
let lat = 0
let onPointerDownLat = 0
let phi = 0
let theta = 0

const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return '0:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

const init = () => {
  // Create scene
  scene = new THREE.Scene()

  // Create camera
  camera = new THREE.PerspectiveCamera(
    75,
    container.value.clientWidth / container.value.clientHeight,
    0.1,
    1000
  )
  camera.position.set(0, 0, 0.1)

  // Create video element
  video = document.createElement('video')
  video.src = '/videos/ph-video.mp4' // Update this path to your video
  video.crossOrigin = 'anonymous'
  video.loop = false
  video.volume = volume.value / 100
  video.playsInline = true // Important for iOS

  // Video event listeners
  video.addEventListener('loadedmetadata', () => {
    duration.value = video.duration
    loading.value = false
  })

  video.addEventListener('timeupdate', () => {
    currentTime.value = video.currentTime
    progress.value = (video.currentTime / video.duration) * 100
  })

  video.addEventListener('ended', () => {
    isPlaying.value = false
  })

  // Create video texture
  texture = new THREE.VideoTexture(video)
  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter

  // Create sphere geometry (inverted to see from inside)
  const geometry = new THREE.SphereGeometry(500, 60, 40)
  geometry.scale(-1, 1, 1) // Invert the sphere

  // Create material with video texture
  const material = new THREE.MeshBasicMaterial({ map: texture })

  // Create mesh
  sphere = new THREE.Mesh(geometry, material)
  scene.add(sphere)

  // Create renderer
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  container.value.appendChild(renderer.domElement)

  // Add event listeners for both mouse and touch
  renderer.domElement.addEventListener('pointerdown', onPointerDown)
  renderer.domElement.addEventListener('pointermove', onPointerMove)
  renderer.domElement.addEventListener('pointerup', onPointerUp)
  renderer.domElement.addEventListener('pointercancel', onPointerUp)
  
  // Touch events for better mobile support
  renderer.domElement.addEventListener('touchstart', onTouchStart, { passive: false })
  renderer.domElement.addEventListener('touchmove', onTouchMove, { passive: false })
  renderer.domElement.addEventListener('touchend', onTouchEnd)
  
  window.addEventListener('resize', onWindowResize)
  document.addEventListener('fullscreenchange', onFullscreenChange)
  document.addEventListener('webkitfullscreenchange', onFullscreenChange)

  animate()
}

const animate = () => {
  requestAnimationFrame(animate)
  update()
  renderer.render(scene, camera)
}

const update = () => {
  lat = Math.max(-85, Math.min(85, lat))
  phi = THREE.MathUtils.degToRad(90 - lat)
  theta = THREE.MathUtils.degToRad(lon)

  camera.position.x = 100 * Math.sin(phi) * Math.cos(theta)
  camera.position.y = 100 * Math.cos(phi)
  camera.position.z = 100 * Math.sin(phi) * Math.sin(theta)

  camera.lookAt(0, 0, 0)
}

const onPointerDown = (event) => {
  event.preventDefault()
  isUserInteracting = true
  onPointerDownMouseX = event.clientX
  onPointerDownMouseY = event.clientY
  onPointerDownLon = lon
  onPointerDownLat = lat
}

const onPointerMove = (event) => {
  if (isUserInteracting) {
    event.preventDefault()
    lon = (onPointerDownMouseX - event.clientX) * 0.2 + onPointerDownLon
    lat = (event.clientY - onPointerDownMouseY) * 0.2 + onPointerDownLat
  }
}

const onPointerUp = (event) => {
  event.preventDefault()
  isUserInteracting = false
}

// Touch event handlers for better mobile support
const onTouchStart = (event) => {
  event.preventDefault()
  if (event.touches.length === 1) {
    isUserInteracting = true
    onPointerDownMouseX = event.touches[0].clientX
    onPointerDownMouseY = event.touches[0].clientY
    onPointerDownLon = lon
    onPointerDownLat = lat
  }
}

const onTouchMove = (event) => {
  event.preventDefault()
  if (isUserInteracting && event.touches.length === 1) {
    lon = (onPointerDownMouseX - event.touches[0].clientX) * 0.3 + onPointerDownLon
    lat = (event.touches[0].clientY - onPointerDownMouseY) * 0.3 + onPointerDownLat
  }
}

const onTouchEnd = (event) => {
  event.preventDefault()
  isUserInteracting = false
}

const onWindowResize = () => {
  if (!container.value) return
  const width = container.value.clientWidth
  const height = container.value.clientHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

const togglePlay = () => {
  if (video.paused) {
    video.play()
    isPlaying.value = true
  } else {
    video.pause()
    isPlaying.value = false
  }
}

const seek = (event) => {
  const rect = progressBar.value.getBoundingClientRect()
  const pos = (event.clientX - rect.left) / rect.width
  video.currentTime = pos * video.duration
}

const toggleMute = () => {
  video.muted = !video.muted
  isMuted.value = video.muted
}

const updateVolume = () => {
  video.volume = volume.value / 100
  if (volume.value > 0) {
    isMuted.value = false
    video.muted = false
  }
}

const toggleFullscreen = () => {
  if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    // Enter fullscreen
    if (tourWrapper.value.requestFullscreen) {
      tourWrapper.value.requestFullscreen()
    } else if (tourWrapper.value.webkitRequestFullscreen) {
      tourWrapper.value.webkitRequestFullscreen()
    }
  } else {
    // Exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    }
  }
}

const onFullscreenChange = () => {
  isFullscreen.value = !!(document.fullscreenElement || document.webkitFullscreenElement)
  // Resize renderer when entering/exiting fullscreen
  setTimeout(() => {
    onWindowResize()
  }, 100)
}

onMounted(() => {
  init()
})

onUnmounted(() => {
  if (renderer) {
    renderer.domElement.removeEventListener('pointerdown', onPointerDown)
    renderer.domElement.removeEventListener('pointermove', onPointerMove)
    renderer.domElement.removeEventListener('pointerup', onPointerUp)
    renderer.domElement.removeEventListener('pointercancel', onPointerUp)
    renderer.domElement.removeEventListener('touchstart', onTouchStart)
    renderer.domElement.removeEventListener('touchmove', onTouchMove)
    renderer.domElement.removeEventListener('touchend', onTouchEnd)
    window.removeEventListener('resize', onWindowResize)
    document.removeEventListener('fullscreenchange', onFullscreenChange)
    document.removeEventListener('webkitfullscreenchange', onFullscreenChange)
    renderer.dispose()
  }
  if (video) {
    video.pause()
    video.src = ''
  }
})
</script>

<style scoped>
.virtual-tour {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  background: #000;
  border-radius: 12px;
}

.virtual-tour.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  border-radius: 0;
  z-index: 9999;
}

.tour-container {
  width: 100%;
  height: 100%;
  cursor: grab;
  touch-action: none;
  -webkit-user-select: none;
  user-select: none;
}

.tour-container:active {
  cursor: grabbing;
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

.instructions {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  color: white;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 10;
  transition: opacity 0.3s ease;
}

.instructions.hidden {
  opacity: 0;
  pointer-events: none;
}

.close-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  transition: background 0.2s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
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
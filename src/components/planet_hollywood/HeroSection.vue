<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden bg-black">
    <!-- Subtle overlay for readability -->
    <div class="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/50 z-10"></div>

    <!-- Video Background -->
    <video
      :src="heroContent?.videoSrc || '/videos/ph-hero.mp4'"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      class="absolute inset-0 w-full h-full object-cover"
    ></video>

    <!-- Content -->
    <div class="relative z-20 text-center px-6 max-w-5xl space-y-8">
      
      <!-- Main Title -->
      <h1
        class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-wide"
        style="text-shadow: 0 4px 20px rgba(0,0,0,0.8)"
      >
        {{ heroContent?.title || 'PLANET HOLLYWOOD' }}
      </h1>

      <!-- Subtitle -->
      <p
        class="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        style="filter: drop-shadow(0 2px 12px rgba(0,0,0,0.8))"
      >
        {{ heroContent?.subtitle || 'Phnom Penh' }}
      </p>

      <!-- Description -->
      <p
        class="text-lg sm:text-xl md:text-2xl text-white/90 font-light"
        style="text-shadow: 0 2px 10px rgba(0,0,0,0.8)"
      >
        {{ heroContent?.description || "Asia's First Planet Hollywood Hotel" }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap justify-center gap-3 sm:gap-4 pt-4">
        <span
          v-for="(tag, index) in heroContent?.tags || ['Phamous', 'Phantastic', 'Phabulous', 'Phun']"
          :key="tag"
          :class="[
            'px-5 py-2.5 sm:px-6 sm:py-3 backdrop-blur-md rounded-full border text-sm sm:text-base font-medium hover:scale-105 transition-all duration-300 cursor-pointer',
            getTagClasses(index)
          ]"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHero } from '~/composables/useHero'

const { heroContent } = useHero()

const getTagClasses = (index: number) => {
  const colors = [
    'bg-pink-500/20 border-pink-400/50 text-pink-100 hover:bg-pink-500/30 hover:border-pink-400',
    'bg-yellow-500/20 border-yellow-400/50 text-yellow-100 hover:bg-yellow-500/30 hover:border-yellow-400',
    'bg-purple-500/20 border-purple-400/50 text-purple-100 hover:bg-purple-500/30 hover:border-purple-400',
    'bg-cyan-500/20 border-cyan-400/50 text-cyan-100 hover:bg-cyan-500/30 hover:border-cyan-400'
  ]
  return colors[index % colors.length]
}
</script>

<style scoped>
/* Ensure smooth video playback */
video {
  object-fit: cover;
}

/* Add smooth scrolling if needed */
section {
  scroll-snap-align: start;
}
</style>
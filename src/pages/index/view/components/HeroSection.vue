<template>
  <div class="relative min-h-screen w-full flex flex-col group/design-root">
    <!-- Background Video Container -->
    <div class="absolute inset-0 z-0 h-full w-full overflow-hidden">
      <video autoplay loop muted playsinline
        class="absolute inset-0 h-full w-full object-cover"
        src="/video/planet-hollywood-video.mp4"
        data-alt="Cinematic Planet Hollywood video background">
      </video>
      <!-- Cinematic Overlay -->
      <div class="hero-overlay absolute inset-0 z-10"></div>
    </div>

    <!-- Hero Content Section -->
    <main class="relative z-20 flex h-screen w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl text-center space-y-6 sm:space-y-8 w-full">
        <!-- Tagline Badge -->
        <!-- <div
          class="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span class="text-[#D4AF37] text-xs sm:text-base">★</span>
          <span class="text-xs sm:text-sm font-semibold tracking-widest uppercase text-white/90">The 5-Star Cinematic Debut</span>
          <span class="text-[#D4AF37] text-xs sm:text-base">★</span>
        </div> -->

        <!-- Main Headlines -->
        <div class="space-y-3 sm:space-y-4">
          <h1
            class="hero-title text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.05] sm:leading-[1.1] drop-shadow-2xl px-2">
            Asia's First <br />
            <span class="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-white/70">Planet
              Hollywood</span>
          </h1>
          <p
            class="hero-description text-base sm:text-base md:text-lg lg:text-xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed px-4 sm:px-6">
            Experience the glamour. Live the legend. <br class="hidden sm:block" />
            Where cinematic history meets modern luxury in the heart of Asia.
          </p>
        </div>

        <!-- Action Buttons - Much Smaller on Mobile -->
       <BookingWidget class="hero-booking"/>
       
      </div>
    </main>

    <!-- Bottom Controls -->
    <div class="hero-footer absolute bottom-0 left-0 right-0 z-30 px-6 pb-6 sm:pb-8 lg:px-12">
      <div class="flex items-end justify-between w-full max-w-[1440px] mx-auto">
        <!-- Social / Location Info (Left) -->
        <div class="flex flex-col gap-1 sm:gap-2">
          <span class="text-xs sm:text-xs uppercase tracking-[0.2em] text-white/70">Location</span>
          <div class="flex items-center gap-1 sm:gap-2 text-white font-medium text-base sm:text-base">
            <span class="material-symbols-outlined text-primary text-lg sm:text-lg">location_on</span>
            <span>Phnom Penh, Cambodia</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import BookingWidget from './BookingWidget.vue'

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } })

  tl.from('.hero-title', {
    y: 100,
    opacity: 0,
    delay: 0.2
  })
  .from('.hero-description', {
    y: 40,
    opacity: 0,
  }, '-=0.8')
  .from('.hero-booking', {
    scale: 0.9,
    opacity: 0,
  }, '-=0.6')
  .from('.hero-footer', {
    y: 20,
    opacity: 0,
  }, '-=0.4')
})

const openYouTube = () => {
  window.open('https://www.youtube.com/watch?v=DwM9Nm6MMR4&t=13s', '_blank');
};
</script>

<style scoped>
/* Custom animation for the scroll indicator */
@keyframes bounce-slow {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 2s infinite;
}

/* Glass effect for navbar */
.glass-nav {
  background: linear-gradient(180deg, rgba(28, 16, 34, 0.9) 0%, rgba(28, 16, 34, 0.4) 100%);
  backdrop-filter: blur(8px);
}

/* Video Gradient Overlay - Purple tint */
.hero-overlay {
  background: linear-gradient(180deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.7) 100%);
}

/* Ensure Material Icons render properly */
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

.material-symbols-outlined.filled {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>
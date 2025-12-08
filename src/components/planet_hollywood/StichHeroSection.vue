<template>
  <div class="relative min-h-screen w-full flex flex-col group/design-root">
    <!-- Background Video Container -->
    <div class="absolute inset-0 z-0 h-full w-full overflow-hidden">
      <video autoplay loop muted playsinline
        poster="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=2070&auto=format&fit=crop"
        class="absolute inset-0 h-full w-full object-cover"
        data-alt="Cinematic view of a luxury hotel pool at night with purple ambient lighting">
        <source src="https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4" type="video/mp4" />
      </video>
      <!-- Cinematic Overlay -->
      <div class="hero-overlay absolute inset-0 z-10"></div>
    </div>

    <!-- Hero Content Section -->
    <main class="relative z-20 flex h-screen w-full flex-col items-center justify-center px-4 pt-">
      <div class="max-w-4xl text-center space-y-8 animate-fade-in-up">
        <!-- Tagline Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span class="text-[#D4AF37] text-base">★</span>
          <span class="text-xs font-semibold tracking-widest uppercase text-white/90">The 5-Star Cinematic Debut</span>
          <span class="text-[#D4AF37] text-base">★</span>
        </div>
        <!-- Main Headlines -->
        <div class="space-y-4">
          <h1
            class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.1] drop-shadow-2xl">
            Asia's First <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">Planet
              Hollywood</span>
          </h1>
          <p class="text-lg md:text-xl font-light text-white/80 max-w-2xl mx-auto leading-relaxed">
            Experience the glamour. Live the legend. <br class="hidden md:block" />
            Where cinematic history meets modern luxury in the heart of Asia.
          </p>
        </div>
        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <!-- Primary Gold Button -->
          <button
            class="group relative flex items-center justify-center gap-2 h-[60px] px-12 rounded-full bg-[#D4AF37] text-black text-lg font-bold tracking-normal transition-all duration-300 shadow-lg hover:shadow-xl hover:brightness-110">
            <span class="font-bold">Explore Rooms</span>
            <span
              class="material-symbols-outlined text-2xl font-normal transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>

          <!-- Secondary Ghost Button -->
          <button
            class="group flex items-center justify-center gap-3 h-[60px] px-12 rounded-full border-2 border-white/40 bg-transparent backdrop-blur-sm text-white text-lg font-semibold tracking-normal transition-all duration-300 hover:bg-white/10 hover:border-white/60">
            <span class="material-symbols-outlined text-2xl filled">play_circle</span>
            <span>Watch The Film</span>
          </button>
        </div>
      </div>
    </main>

    <!-- Bottom Controls -->
    <div class="absolute bottom-0 left-0 right-0 z-30 px-6 pb-8 lg:px-12">
      <div class="flex items-end justify-between w-full max-w-[1440px] mx-auto">
        <!-- Social / Location Info (Left) -->
        <div class="hidden md:flex flex-col gap-2">
          <span class="text-xs uppercase tracking-[0.2em] text-white/60">Location</span>
          <div class="flex items-center gap-2 text-white font-medium">
            <span class="material-symbols-outlined text-primary text-lg">location_on</span>
            <span>Phnom Penh, Cambodia</span>
          </div>
        </div>       
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Add any interactive functionality here if needed
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
      rgba(28, 16, 34, 0.7) 0%,
      rgba(175, 37, 244, 0.15) 50%,
      rgba(28, 16, 34, 0.95) 100%);
}
</style>
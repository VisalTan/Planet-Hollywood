<script setup lang="ts">
import { useLocation } from '~/composables/useLocation';
import { MapPin } from 'lucide-vue-next'

const { locationContent } = useLocation();
</script>

<template>
  <section id="location" class="relative py-32 overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-linear-to-b from-black via-purple-950/20 to-black">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-20 left-10 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse"
          style="animation-delay: 1s;"></div>
      </div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-20">
        <div class="inline-block mb-6">
          <div
            class="flex items-center gap-3 bg-linear-to-r from-cyan-500/10 to-pink-500/10 border border-cyan-400/30 rounded-full px-6 py-3 backdrop-blur-sm">
            <MapPin class="w-5 h-5 text-cyan-400" />
            <span class="text-cyan-400 font-semibold tracking-wide">PRIME LOCATION</span>
          </div>
        </div>
        <h2 class="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          {{ locationContent?.title?.split(' ')[0] || "Perfectly" }} <span
            class="bg-linear-to-r from-cyan-400 via-pink-400 to-purple-400 text-transparent bg-clip-text animate-pulse">{{ locationContent?.title?.split(' ')[1] || "Located" }}</span>
        </h2>
        <p class="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto">
          {{ locationContent?.subtitle || "In the vibrant heart of Phnom Penh's prestigious BKK1 district" }}
        </p>
      </div>

      <!-- Attractions Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div v-for="(attraction, index) in locationContent?.attractions || []" :key="index"
          class="group relative bg-linear-to-b from-gray-900/90 to-black/90 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-800/50 hover:border-cyan-400/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">

          <!-- Image Container -->
          <div class="relative h-64 overflow-hidden">
            <img :src="attraction.image" :alt="attraction.name"
              class="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 group-hover:rotate-2" />

            <!-- Multi-layer Gradient Overlay -->
            <!-- <div class="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90"></div>
              <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div> -->

            <!-- Animated Border Effect -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div
                class="absolute inset-0 bg-linear-to-r from-cyan-400/20 via-pink-400/20 to-purple-400/20 animate-pulse">
              </div>
            </div>
          </div>

          <!-- Content Section -->
          <div class="p-8 relative">
            <!-- Title with Gradient -->
            <h3
              class="text-2xl font-bold mb-4 bg-linear-to-r from-white via-cyan-100 to-pink-100 text-transparent bg-clip-text group-hover:from-cyan-400 group-hover:to-pink-400 transition-all duration-500">
              {{ attraction.name }}
            </h3>

            <!-- Description -->
            <p
              class="text-gray-400 mb-6 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
              {{ attraction.description }}
            </p>

            <!-- Distance Badge with Animation -->
            <div
              class="inline-flex items-center gap-3 bg-linear-to-r from-cyan-500/10 via-pink-500/10 to-purple-500/10 border border-cyan-400/30 rounded-full px-5 py-3 group-hover:border-cyan-400/60 group-hover:bg-linear-to-r group-hover:from-cyan-500/20 group-hover:to-pink-500/20 transition-all duration-500 shadow-lg shadow-cyan-500/10">
              <div class="relative">
                <div class="w-3 h-3 bg-cyan-400 rounded-full animate-ping absolute"></div>
                <div class="w-3 h-3 bg-cyan-400 rounded-full relative"></div>
              </div>
              <p class="text-cyan-400 text-sm font-bold tracking-wide drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
                {{ attraction.distance }}
              </p>
            </div>

            <!-- Bottom Shine Effect -->
            <div
              class="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            </div>
          </div>

          <!-- Corner Accent Glow -->
          <div
            class="absolute -bottom-20 -right-20 w-40 h-40 bg-linear-to-tl from-cyan-500/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          </div>
          <div
            class="absolute -top-20 -left-20 w-40 h-40 bg-linear-to-br from-pink-500/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          </div>
        </div>
      </div>

      <!-- Decorative Bottom Element -->
      <div class="text-center mt-20">
        <div class="inline-flex items-center gap-2 text-gray-500 text-sm">
          <div class="w-12 h-px bg-linear-to-r from-transparent to-gray-700"></div>
          <span>Explore the neighborhood</span>
          <div class="w-12 h-px bg-linear-to-l from-transparent to-gray-700"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes pulse {

  0%,
  100% {
    opacity: 0.6;
  }

  50% {
    opacity: 1;
  }
}
</style>
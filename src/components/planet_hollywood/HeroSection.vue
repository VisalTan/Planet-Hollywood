<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-linear-to-b from-purple-900/30 via-black/50 to-black z-10"></div>
    <!-- Animated gradient overlay -->
    <div class="absolute inset-0 bg-linear-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse">
    </div>
    <img src="/images/ph2.png" alt="Planet Hollywood"
      class="absolute inset-0 w-full h-full object-cover" />
    <div class="relative z-20 text-center px-6 max-w-5xl">
      <div class="flex items-center justify-center mb-6 animate-bounce">
        <Star class="w-8 h-8 text-cyan-400 fill-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
        <Star class="w-12 h-12 text-pink-400 fill-pink-400 mx-4 drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]" />
        <Star class="w-8 h-8 text-purple-400 fill-purple-400 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]" />
      </div>
      <h1 class="text-6xl md:text-8xl font-bold mb-6 text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">
        PLANET HOLLYWOOD
      </h1>
      <p class="text-3xl md:text-4xl bg-linear-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent mb-4 font-light">
        Phnom Penh
      </p>
      <p class="text-xl md:text-2xl mb-8 text-gray-300">
        Asia's First Planet Hollywood Hotel
      </p>
      <div class="flex flex-wrap justify-center gap-4 text-lg">
        <span class="px-6 py-2 bg-pink-500/20 rounded-full border-2 border-pink-400 hover:shadow-lg hover:shadow-pink-400/50 transition-all">
          Phamous
        </span>
        <span class="px-6 py-2 bg-cyan-500/20 rounded-full border-2 border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/50 transition-all">
          Phantastic
        </span>
        <span class="px-6 py-2 bg-purple-500/20 rounded-full border-2 border-purple-400 hover:shadow-lg hover:shadow-purple-400/50 transition-all">
          Phabulous
        </span>
        <span class="px-6 py-2 bg-yellow-500/20 rounded-full border-2 border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/50 transition-all">
          Phun
        </span>
      </div>
    </div>
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
      <div class="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center shadow-lg shadow-cyan-400/50">
        <div class="w-1 h-3 bg-cyan-400 rounded-full mt-2 shadow-lg shadow-cyan-400"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Star } from 'lucide-vue-next'
</script>
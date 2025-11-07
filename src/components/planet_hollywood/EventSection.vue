<template>
  <section id="events" class="py-20 bg-black relative">
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse"></div>
    </div>
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold mb-4">Where Every Event Deserves a <span class="gradient-text">Spotlight</span>
        </h2>
        <p class="text-gray-400 text-xl">Over 900 square meters of dynamic event space</p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="relative">
          <div class="absolute inset-0 bg-linear-to-r from-cyan-500 to-pink-500 rounded-lg blur-xl opacity-50">
          </div>
          <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80" alt="Event Space"
            class="rounded-lg shadow-2xl relative z-10 border-2 border-purple-400" />
        </div>
        <div>
          <h3 class="text-3xl font-bold mb-6 gradient-text">The Hall of Phame</h3>
          <p class="text-gray-300 text-lg mb-6">
            A breathtaking 8-meter-high LED screen transforms any event into a cinematic experience. From high-impact
            presentations to immersive visual storytelling, every detail is crafted to impress.
          </p>
          <div class="grid grid-cols-2 gap-4 mb-8">
            <div class="neon-card bg-black/70 p-4 rounded-lg border-2 border-pink-400">
              <div class="text-2xl font-bold neon-text-pink mb-1">180-210</div>
              <div class="text-sm text-gray-400">Banquet</div>
            </div>
            <div class="neon-card bg-black/70 p-4 rounded-lg border-2 border-cyan-400">
              <div class="text-2xl font-bold neon-text-cyan mb-1">250-280</div>
              <div class="text-sm text-gray-400">Theatre</div>
            </div>
            <div class="neon-card bg-black/70 p-4 rounded-lg border-2 border-purple-400">
              <div class="text-2xl font-bold text-purple-400 mb-1">120-140</div>
              <div class="text-sm text-gray-400">Classroom</div>
            </div>
            <div class="neon-card bg-black/70 p-4 rounded-lg border-2 border-yellow-400">
              <div class="text-2xl font-bold text-yellow-400 mb-1">40-50</div>
              <div class="text-sm text-gray-400">Boardroom</div>
            </div>
          </div>
          <div class="flex items-center text-cyan-400">
            <Calendar class="w-5 h-5 mr-2" />
            <span>Equipped with state-of-the-art AV systems & high-speed Wi-Fi</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Calendar } from 'lucide-vue-next'
</script>
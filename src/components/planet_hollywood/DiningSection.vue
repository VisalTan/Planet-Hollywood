<script setup lang="ts">
import { restaurants } from '~/data/planet_hollywood';
import { Utensils } from 'lucide-vue-next';
</script>

<template>
  <section id="dining" class="py-20 bg-linear-to-b from-black via-cyan-900/10 to-black relative">
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-40 right-20 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
      <div class="absolute bottom-40 left-20 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl animate-pulse"></div>
    </div>
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold mb-4">Dining <span class="gradient-text">Experiences</span></h2>
        <p class="text-gray-400 text-xl">Where every meal feels like a moment on the red carpet</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(restaurant, index) in restaurants" :key="index"
          class="neon-card-hover bg-black/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400 shadow-lg shadow-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-400/40">
          <div class="relative overflow-hidden">
            <img :src="restaurant.image" :alt="restaurant.name"
              class="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" />
            <div class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <Utensils class="w-5 h-5 text-cyan-400 mr-2" />
              <h3 class="text-2xl font-bold gradient-text">{{ restaurant.name }}</h3>
            </div>
            <p class="text-gray-400 mb-4">{{ restaurant.description }}</p>
            <div class="flex items-center text-sm text-pink-400 mb-2">
              <span>{{ restaurant.hours }}</span>
            </div>
            <div class="flex items-center text-sm text-cyan-400">
              <span>{{ restaurant.cuisine }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
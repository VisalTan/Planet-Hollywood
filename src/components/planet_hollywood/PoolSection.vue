<template>
    <section id="amenities" class="relative py-32 overflow-hidden">
      <NuxtImg
        :src="poolContent?.image"
        alt="Infinity Pool"
        class="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        :modifiers="{ quality: 85 }"
      />
      <div class="absolute inset-0 bg-linear-to-r from-purple-900/60 via-black/60 to-cyan-900/60"></div>
      <div class="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
      <div class="relative z-10 container mx-auto px-6 text-center">
        <h2 class="text-6xl font-bold mb-6"><span class="neon-text-cyan">{{ poolContent?.title??'Cliff Pool' }}</span></h2>
        <p class="text-2xl gradient-text mb-4">{{ poolContent?.subtitle || 'Float among the clouds with panoramic skyline views' }}</p>
        <p class="text-lg text-gray-300 max-w-3xl mx-auto">
          {{ poolContent?.description || 'The Cliff Pool stretches dramatically along the rooftop, its glass-edged design giving guests the illusion of floating among the clouds. With curated playlists, golden sunsets, and skyline views, this cantilevered masterpiece transforms every swim into a red-carpet moment.' }}
        </p>
      </div>
    </section>
</template>

<script setup lang="ts">
import { usePool } from '~/composables/usePool'

const { poolContent } = usePool()
</script>
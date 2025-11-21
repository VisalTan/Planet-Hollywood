<script setup lang="ts">
import { MapPin } from 'lucide-vue-next'
import { useAbout } from '~/composables/content/useAbout'

const { aboutContent } = useAbout()
</script>

<template>
  <section class="py-20 bg-linear-to-b from-black via-purple-900/20 to-black relative">
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-20 left-10 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
    </div>
    <div class="container mx-auto px-6 relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-5xl font-bold mb-6">
            {{ aboutContent?.title || "Where Hollywood Meets Cambodia" }}
          </h2>
          <p class="text-gray-300 text-lg leading-relaxed mb-6">
            {{ aboutContent?.description || "Planet Hollywood Hotel Phnom Penh marks the brand's first-ever hotel in Asia — a milestone that brings Hollywood's signature energy to the heart of Cambodia." }}
          </p>
          <p class="text-gray-300 text-lg leading-relaxed mb-8">
            Blending cinematic glamour with contemporary sophistication, the hotel features 148 rooms, each designed
            to deliver an elevated smart-living experience.
          </p>
          <div class="grid grid-cols-3 gap-6 text-center">
            <div class="neon-card bg-black/50 p-6 rounded-lg border-2 border-pink-400">
              <div class="text-4xl font-bold neon-text-pink mb-2">{{ aboutContent?.stats.rooms.count || "148" }}</div>
              <div class="text-sm text-gray-400">{{ aboutContent?.stats.rooms.label || "Rooms" }}</div>
            </div>
            <div class="neon-card bg-black/50 p-6 rounded-lg border-2 border-cyan-400">
              <div class="text-4xl font-bold neon-text-cyan mb-2">{{ aboutContent?.stats.eventSpace.count || "900+" }}</div>
              <div class="text-sm text-gray-400">{{ aboutContent?.stats.eventSpace.label || "Event Space (sqm)" }}</div>
            </div>
            <div class="neon-card bg-black/50 p-6 rounded-lg border-2 border-purple-400">
              <div class="text-4xl font-bold text-purple-400 mb-2">{{ aboutContent?.stats.facilities.count || "5★" }}</div>
              <div class="text-sm text-gray-400">{{ aboutContent?.stats.facilities.label || "Facilities" }}</div>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="absolute inset-0 bg-linear-to-r from-pink-500 to-cyan-500 rounded-lg blur-xl opacity-50">
          </div>
          <img :src="aboutContent?.image || '/images/ph1.png'" alt="Hotel Lobby"
            class="rounded-lg shadow-2xl relative z-10 border-2 border-cyan-400" />
          <div
            class="absolute -bottom-6 -left-6 bg-linear-to-r from-pink-500 to-purple-500 text-white p-6 rounded-lg shadow-xl neon-border z-20">
            <MapPin class="w-8 h-8 mb-2" />
            <div class="font-bold text-lg">{{ aboutContent?.location || "BKK1 District" }}</div>
            <div class="text-sm">{{ aboutContent?.address || "JS Tower, Phnom Penh" }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
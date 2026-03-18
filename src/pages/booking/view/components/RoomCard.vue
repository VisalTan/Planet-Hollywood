<template>
  <div class="group bg-[#2b1834] rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(175,37,244,0.15)] transition-all duration-300 border border-[#3c2249] hover:border-primary/50">
    <div class="relative h-48 overflow-hidden">
      <div 
        class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        :style="{ backgroundImage: `url('${room.image}')` }"
      ></div>
      
      <div class="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
        <span class="text-xs font-bold text-white">From ${{ room.price }}/night</span>
      </div>
      
      <div 
        v-if="room.popular"
        class="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide shadow-lg"
      >
        Popular
      </div>
    </div>
    
    <div class="p-5 flex flex-col gap-3">
      <div>
        <h3 class="text-lg font-bold text-white mb-1">{{ room.name }}</h3>
        <p class="text-gray-400 text-sm">{{ room.details }}</p>
      </div>
      
      <div class="flex flex-wrap gap-2 my-2">
        <span 
          v-for="amenity in room.amenities" 
          :key="amenity"
          class="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-[#3c2249] text-[#b790cb] rounded"
        >
          {{ amenity }}
        </span>
      </div>
      
      <button class="w-full mt-auto py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white font-bold text-sm transition-colors">
        View Details
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  room: {
    id: number
    name: string
    details: string
    price: number
    image: string
    amenities: string[]
    popular: boolean
  }
}>()
</script>
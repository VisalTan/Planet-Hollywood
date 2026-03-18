<template>
  <div v-if="room" class="relative flex min-h-screen w-full flex-col bg-background-dark text-white overflow-x-hidden pt-20">
    <!-- Hero Header -->
    <header class="relative h-[75vh] w-full overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img :src="room.image" :alt="room.name" class="h-full w-full object-cover animate-image-reveal" />
        <!-- Enhanced overlays for better text contrast -->
        <div class="absolute inset-0 bg-black/40"></div>
        <div class="absolute inset-0 bg-linear-to-t from-background-dark via-background-dark/80 to-transparent"></div>
        <div class="absolute inset-0 bg-linear-to-r from-background-dark/60 via-transparent to-transparent"></div>
      </div>
      
      <div class="relative z-10 mx-auto max-w-7xl h-full px-6 lg:px-8 flex flex-col justify-end pb-16">
        <div class="animate-reveal opacity-0">
          <NuxtLink @click="$router.back()" class="cursor-pointer inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary mb-8 hover:bg-primary hover:text-white transition-all group/back shadow-xl">
            <span class="material-symbols-outlined text-sm transition-transform group-hover/back:-translate-x-1">arrow_back</span>
          </NuxtLink>
          <h1 class="text-6xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-none mb-6 uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            {{ room.name }}
          </h1>
          <div class="flex items-center gap-6">
            <span class="text-primary text-sm tracking-[0.3em] font-black uppercase">{{ room.size }}</span>
            <div class="h-px w-12 bg-white/20"></div>
            <span class="text-white/60 text-sm tracking-widest uppercase italic">Phamous Life</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Content Section -->
    <main class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-32">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        <!-- Description Column -->
        <div class="lg:col-span-12">
          <div class="max-w-4xl animate-reveal opacity-0" style="animation-delay: 200ms;">
             <h2 class="text-3xl sm:text-4xl font-bold mb-8">The Scene</h2>
             <p class="text-xl sm:text-2xl text-neutral-400 font-light leading-relaxed mb-12">
               {{ room.description }}
             </p>
          </div>
        </div>

        <!-- Details Grid -->
        <div class="lg:col-span-6 animate-reveal opacity-0" style="animation-delay: 400ms;">
          <h3 class="text-xs tracking-[0.4em] text-primary uppercase font-black mb-10">Room Features</h3>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
            <li v-for="feature in room.features" :key="feature" class="flex items-center gap-4 group">
              <span class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <span class="material-symbols-outlined text-sm">stars</span>
              </span>
              <span class="text-lg font-medium text-white/90">{{ feature }}</span>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-6 animate-reveal opacity-0" style="animation-delay: 600ms;">
          <h3 class="text-xs tracking-[0.4em] text-primary uppercase font-black mb-10">Amenities</h3>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
            <li v-for="amenity in room.amenities" :key="amenity" class="flex items-center gap-4 group">
              <span class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 border border-white/10 group-hover:border-primary group-hover:text-primary transition-colors duration-500">
                <span class="material-symbols-outlined text-sm">check</span>
              </span>
              <span class="text-lg font-medium text-white/90">{{ amenity }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Booking CTA -->
      <div class="mt-32 p-12 lg:p-20 rounded-3xl bg-surface-dark border border-white/5 relative overflow-hidden animate-reveal opacity-0" style="animation-delay: 800ms;">
        <div class="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div class="relative z-10 text-center">
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-8">Ready for your <span class="text-primary">star turn</span>?</h2>
            <p class="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto font-light">
              Secure your place in the spotlight. Book your stay at Planet Hollywood Phnom Penh today and experience cinematic luxury like never before.
            </p>
            <button class="inline-flex h-14 items-center justify-center px-10 rounded-full bg-primary text-white font-black tracking-widest uppercase hover:bg-white hover:text-black transition-all transform hover:scale-105 active:scale-95 duration-500 shadow-2xl shadow-primary/20">
              Reserve This Room
            </button>
        </div>
      </div>
    </main>
  </div>
  <div v-else class="min-h-screen flex items-center justify-center bg-background-dark text-white">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4 italic">Page Not Found</h1>
      <NuxtLink to="/rooms" class="text-primary hover:underline font-bold tracking-widest uppercase text-xs">Return to Collection</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { rooms } from '~/data/rooms'
import { gsap } from 'gsap'

const route = useRoute()
const room = rooms.find(r => r.slug === route.params.slug)

onMounted(() => {
  if (room) {
    gsap.to('.animate-reveal', {
      opacity: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power3.out'
    })
  }
})

useHead({
  title: room ? `${room.name} - Rooms - Planet Hollywood` : 'Room Not Found',
})

definePageMeta({
  layout: 'hollywood'
})
</script>

<style scoped>
.animate-reveal {
  transform: translateY(40px);
}

.animate-image-reveal {
  animation: imgReveal 2s ease-out;
}

@keyframes imgReveal {
  from { scale: 1.1; filter: blur(10px); }
  to { scale: 1; filter: blur(0); }
}
</style>

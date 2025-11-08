<template>
  <div class="bg-black text-white font-sans overflow-hidden">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        class="absolute inset-0 z-0 bg-cover bg-center"
        :style="{
          backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600)',
          transform: `translateY(${scrollY * 0.2}px)`
        }"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black z-10"></div>
      
      <div class="relative z-20 text-center px-6 max-w-5xl mx-auto py-16">
        <!-- Star Icon -->
        <div class="mb-6 animate-pulse">
        </div>

        <!-- Main Heading -->
        <h1 class="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 animate-gradient">
          COMING SOON
        </h1>

        <!-- Brand -->
        <h2 class="text-3xl md:text-5xl font-bold mb-4">
          <span class="text-yellow-400">PLANET HOLLYWOOD</span><br/>
          <span class="text-white">PHNOM PENH</span>
        </h2>

        <!-- Tagline -->
        <p class="text-xl md:text-2xl text-gray-300 mb-8 font-light">
          Asia's First Planet Hollywood Hotel
        </p>

        <!-- Description -->
        <p class="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          Experience Hollywood glamour in the heart of Cambodia. 148 stunning rooms, rooftop dining, 
          and world-class amenities await you in BKK1's most iconic address.
        </p>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
          <div class="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-yellow-500/30">
            <h3 class="text-3xl font-bold text-yellow-400 mb-1">148</h3>
            <p class="text-gray-400 text-sm">Rooms</p>
          </div>
          <div class="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-red-500/30">
            <h3 class="text-3xl font-bold text-red-400 mb-1">4</h3>
            <p class="text-gray-400 text-sm">Themes</p>
          </div>
          <div class="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-pink-500/30">
            <h3 class="text-3xl font-bold text-pink-400 mb-1">30F</h3>
            <p class="text-gray-400 text-sm">Location</p>
          </div>
          <div class="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-purple-500/30">
            <h3 class="text-3xl font-bold text-purple-400 mb-1">BKK1</h3>
            <p class="text-gray-400 text-sm">District</p>
          </div>
        </div>

        <!-- Features -->
        <div class="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
          <div class="bg-gradient-to-br from-yellow-600/20 to-red-900/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30">
            <img 
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400" 
              alt="Luxury Rooms"
              class="rounded-lg w-full h-40 object-cover mb-4"
            />
            <h3 class="text-lg font-bold mb-2 text-yellow-400">Celebrity Suites</h3>
            <p class="text-gray-400 text-sm">
              Four unique themes: Phamous, Phantastic, Phabulous & Phun
            </p>
          </div>

          <div class="bg-gradient-to-br from-red-600/20 to-pink-900/20 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30">
            <img 
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400" 
              alt="Dining"
              class="rounded-lg w-full h-40 object-cover mb-4"
            />
            <h3 class="text-lg font-bold mb-2 text-red-400">Gordon Ramsay Burger</h3>
            <p class="text-gray-400 text-sm">
              First in Southeast Asia with rooftop views
            </p>
          </div>

          <div class="bg-gradient-to-br from-pink-600/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/30">
            <img 
              src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400" 
              alt="Pool"
              class="rounded-lg w-full h-40 object-cover mb-4"
            />
            <h3 class="text-lg font-bold mb-2 text-pink-400">Cliff Pool</h3>
            <p class="text-gray-400 text-sm">
              Infinity pool with panoramic city skyline views
            </p>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="max-w-xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8">
          <h3 class="text-2xl font-bold mb-3 text-white">Be the First to Know</h3>
          <p class="text-gray-400 mb-6 text-sm">Get exclusive updates and opening announcements</p>
          
          <form class="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email"
              class="flex-1 px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
            />
            <button 
              type="submit"
              class="bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-xl"
            >
              Subscribe
            </button>
          </form>
        </div>

        <!-- Social Media -->
        <div class="flex justify-center gap-4 mb-6">
          <a href="#" class="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-yellow-500/30 transition-all border border-white/20">
            <Instagram class="w-5 h-5" />
          </a>
          <a href="#" class="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-yellow-500/30 transition-all border border-white/20">
            <Facebook class="w-5 h-5" />
          </a>
        </div>

        <!-- Location Info -->
        <div class="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-400 text-sm">
          <div class="flex items-center gap-2">
            <MapPin class="w-4 h-4" />
            <span>JS Tower, BKK1, Phnom Penh</span>
          </div>
          <div class="hidden md:block">•</div>
          <div class="flex items-center gap-2">
            <Mail class="w-4 h-4" />
            <span>inquiry@planethollywood-phnompenh.com</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-6 px-6 bg-black/50 backdrop-blur-md border-t border-white/10">
      <div class="max-w-4xl mx-auto text-center">
        <p class="text-gray-500 text-sm mb-2">
          @PlanetHollywood • Planet Hollywood Phnom Penh
        </p>
        <p class="text-gray-600 text-xs">
          &copy; 2025 Planet Hollywood Phnom Penh • planethollywood-phnompenh.com
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Star, Instagram, Facebook, MapPin, Mail } from 'lucide-vue-next'

const scrollY = ref(0)

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}
</style>
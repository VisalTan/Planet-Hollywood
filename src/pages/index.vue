<template>
  <div class="min-h-screen bg-black text-white overflow-x-hidden">
    <nav :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-black shadow-lg' : 'bg-transparent'
    ]">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo/Brand -->
          <div class="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Planet Hollywood
          </div>

          <!-- Navigation Links -->
          <div class="hidden md:flex items-center space-x-8">
            <button @click="scrollToSection('rooms')" class="hover:text-purple-400 transition-colors">
              Rooms
            </button>
            <button @click="scrollToSection('dining')" class="hover:text-purple-400 transition-colors">
              Dining
            </button>
            <button @click="scrollToSection('amenities')" class="hover:text-purple-400 transition-colors">
              Amenities
            </button>
            <button @click="scrollToSection('events')" class="hover:text-purple-400 transition-colors">
              Events
            </button>
            <button @click="scrollToSection('location')" class="hover:text-purple-400 transition-colors">
              Location
            </button>
            <button @click="scrollToSection('contact')" class="hover:text-purple-400 transition-colors">
              Contact
            </button>
          </div>

          <!-- Book Us Button -->
          <button @click="scrollToSection('contact')"
            class="bg-linear-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
            Book Us
          </button>
        </div>
      </div>
    </nav>
    <!-- Hero Section -->
    <PlanetHollywoodHeroSection />

    <planet-hollywood-introduction-section />

    <PlanetHollywoodRoomSection />

    <PlanetHollywoodDiningSection />

    <!-- Amenities Section -->
    <planet-hollywood-pool-section />

    <!-- Events Section -->
    <PlanetHollywoodEventSection />

    <!-- Sustainability Section -->
    <planet-hollywood-sustainability />

    <!-- Location Section -->
    <planet-hollywood-location-section />

    <!-- CTA Section -->
    <planet-hollywood-contact-section />

    <!-- Footer -->
    <planet-hollywood-footer />

  </div>
</template>

<script setup>
import { PlanetHollywoodDiningSection, PlanetHollywoodEventSection, PlanetHollywoodHeroSection, PlanetHollywoodRoomSection, } from '#components'
import { ref, onMounted, onUnmounted } from 'vue'

const hoveredRoom = ref(null)
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
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

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>
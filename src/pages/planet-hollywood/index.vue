<template>
  <div class="min-h-screen bg-black text-white overflow-x-hidden">

    
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
import { PlanetHollywoodDiningSection, PlanetHollywoodEventSection, PlanetHollywoodHeroSection, PlanetHollywoodRoomSection } from '#components'
import { ref } from 'vue'

const hoveredRoom = ref(null)

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
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
<template>
  <!-- Hero Section -->
  <!-- <PlanetHollywoodHeroSection /> -->

  <!-- <planet-hollywood-introduction-section /> -->
  <PlanetHollywoodStichHeroSection/>

  <StichIntroductionSection/>

  <PlanetHollywoodThemeSection />

  <PlanetHollywoodStichDiningSection/>

  <!-- <PlanetHollywoodDiningSection /> -->

  <!-- Amenities Section -->
  <!-- <planet-hollywood-pool-section /> -->

  <!-- Events Section -->
  <!-- <PlanetHollywoodEventSection /> -->

  <!-- Sustainability Section -->
  <!-- <planet-hollywood-sustainability /> -->

  <!-- Location Section -->
  <!-- <planet-hollywood-location-section /> -->

  <!-- CTA Section -->
  <!-- <planet-hollywood-contact-section /> -->
</template>

<script setup>
definePageMeta({
  layout: 'hollywood'
})

import { PlanetHollywoodDiningSection, PlanetHollywoodEventSection, PlanetHollywoodHeroSection, PlanetHollywoodRoomSection, } from '#components'
import StichIntroductionSection from '~/components/planet_hollywood/StichIntroductionSection.vue';
</script>


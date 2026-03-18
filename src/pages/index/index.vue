<template>
  <HeroSection />
  <IntroductionSection />
  <ThemeSection />
  <DiningSection />
  <TestimonialSection />
</template>

<script setup>
import HeroSection from './view/components/HeroSection.vue'
import IntroductionSection from './view/components/IntroductionSection.vue'
import ThemeSection from './view/components/ThemeSection.vue'
import DiningSection from './view/components/DiningSection.vue'
import TestimonialSection from './view/components/TestimonialSection.vue'

definePageMeta({
  layout: 'hollywood'
})
</script>

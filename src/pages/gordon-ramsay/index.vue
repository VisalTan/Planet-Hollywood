<template>
  <div class="min-h-screen bg-black text-white overflow-hidden">
    <HeroSection />
    <ChefSection />
    <BurgerMenu />
    <CTASection />
  </div>
</template>

<script setup>
import HeroSection from './view/components/HeroSection.vue'
import ChefSection from './view/components/ChefSection.vue'
import BurgerMenu from './view/components/BurgerMenu.vue'
import CTASection from './view/components/CTASection.vue'

definePageMeta({
  layout: 'hollywood'
})
</script>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
}
</style>
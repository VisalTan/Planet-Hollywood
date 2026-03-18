<template>
  <div
    class="relative flex h-auto min-h-screen w-full flex-col font-display text-white overflow-hidden bg-background-dark">
    <!-- Background gradients -->
    <div
      class="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/10 via-background-dark to-background-dark pointer-events-none">
    </div>
    <div
      class="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none opacity-50">
    </div>
    <div
      class="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none opacity-50">
    </div>

    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-background-dark py-10 sm:py-20 lg:py-24">
      <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div class="text-center intro-text">
          <span class="inline-block text-xs sm:text-sm tracking-[0.3em] text-primary uppercase mb-6 opacity-0 animate-reveal">Welcome to the Limelight</span>
          <h1 class="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] opacity-0 animate-reveal" style="animation-delay: 200ms;">
            The Legend <br class="hidden sm:block" />
            <span class="text-transparent bg-clip-text bg-linear-to-r from-primary via-white to-primary/50">Arrives in Asia</span>
          </h1>
          <p
            class="mt-8 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed text-gray-400 font-light opacity-0 animate-reveal" style="animation-delay: 400ms;">
            Experience the glamorous fusion of cinematic heritage and contemporary luxury in the heart of Phnom Penh.
          </p>
        </div>

        <div class="mt-8 sm:mt-16 grid grid-cols-1 gap-4 sm:gap-12 lg:grid-cols-3 lg:gap-16 pt-8 sm:pt-16 border-t border-white/5 info-grid">
          <div class="info-card group flex flex-col">
            <div class="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/30">
              <span class="material-symbols-outlined text-primary text-2xl font-light">hotel_class</span>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">The Hollywood Legacy</h3>
            <p class="text-gray-400 leading-relaxed font-light mb-6">
              Founded by icons, redefined for the elite. We offer an immersive escape where every guest is treated like a star.
            </p>
            <a class="mt-auto group/link inline-flex items-center text-xs font-bold tracking-widest text-primary uppercase transition-all" href="#">
              <span class="border-b border-primary/30 pb-1 group-hover/link:border-primary group-hover/link:text-white transition-all">Our Story</span>
              <span class="material-symbols-outlined ml-2 text-sm transition-transform group-hover/link:translate-x-2">arrow_right_alt</span>
            </a>
          </div>

          <div class="info-card group flex flex-col">
            <div class="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/30">
              <span class="material-symbols-outlined text-primary text-2xl font-light">location_on</span>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">BKK1 District</h3>
            <p class="text-gray-400 leading-relaxed font-light mb-6">
              Residing in the iconic JS Tower, we place you at the epicenter of the city's most vibrant cultural enclave.
            </p>
            <a class="mt-auto group/link inline-flex items-center text-xs font-bold tracking-widest text-primary uppercase transition-all" href="#">
              <span class="border-b border-primary/30 pb-1 group-hover/link:border-primary group-hover/link:text-white transition-all">Explore BKK1</span>
              <span class="material-symbols-outlined ml-2 text-sm transition-transform group-hover/link:translate-x-2">arrow_right_alt</span>
            </a>
          </div>

          <div class="info-card group flex flex-col">
            <div class="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/30">
              <span class="material-symbols-outlined text-primary text-2xl font-light">sensor_door</span>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Curated Arrival</h3>
            <p class="text-gray-400 leading-relaxed font-light mb-6">
              Just 20km from Techo Takhmao International Airport, your star-studded journey begins with seamless luxury transfers.
            </p>
            <a class="mt-auto group/link inline-flex items-center text-xs font-bold tracking-widest text-primary uppercase transition-all" href="#">
              <span class="border-b border-primary/30 pb-1 group-hover/link:border-primary group-hover/link:text-white transition-all">Book Transfer</span>
              <span class="material-symbols-outlined ml-2 text-sm transition-transform group-hover/link:translate-x-2">arrow_right_alt</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="bg-background-dark py-16 sm:py-20 overflow-hidden gallery-section">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="flex items-end justify-between mb-10 px-2 sm:px-0">
          <div class="gallery-title">
            <span class="text-xs tracking-[0.4em] text-primary uppercase block mb-4">Visual Journey</span>
            <h3 class="text-4xl sm:text-5xl text-white font-bold">Capture The Vibe</h3>
          </div>
          <div class="hidden sm:block h-px grow bg-white/10 mx-12"></div>
        </div>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8 gallery-grid">
          <div class="group relative aspect-3/4.5 overflow-hidden rounded-2xl bg-surface-dark gallery-item opacity-0 translate-y-12">
            <img class="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              alt="Fine dining restaurant interior" src="/vibe/vibe1.png" />
            <div
              class="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80">
            </div>
            <div class="absolute bottom-8 left-8 right-8">
              <span class="text-xs tracking-widest text-primary uppercase font-bold block mb-2">Social</span>
              <span class="text-2xl text-white font-bold">Fine Dining</span>
            </div>
          </div>
          <div class="group relative aspect-3/4.5 overflow-hidden rounded-2xl bg-surface-dark gallery-item opacity-0 translate-y-12" style="transition-delay: 100ms;">
            <img class="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              alt="Concert stage with purple lights" src="/vibe/vibe2.png" />
            <div
              class="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80">
            </div>
            <div class="absolute bottom-8 left-8 right-8">
              <span class="text-xs tracking-widest text-primary uppercase font-bold block mb-2">Entertainment</span>
              <span class="text-2xl text-white font-bold">Elite Events</span>
            </div>
          </div>
          <div class="group relative aspect-3/4.5 overflow-hidden rounded-2xl bg-surface-dark gallery-item opacity-0 translate-y-12" style="transition-delay: 200ms;">
            <img class="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              alt="Luxury hotel room interior" src="/vibe/vibe3.png" />
            <div
              class="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80">
            </div>
            <div class="absolute bottom-8 left-8 right-8">
              <span class="text-xs tracking-widest text-primary uppercase font-bold block mb-2">Rest</span>
              <span class="text-2xl text-white font-bold">Cinematic Stays</span>
            </div>
          </div>
          <div class="group relative aspect-3/4.5 overflow-hidden rounded-2xl bg-surface-dark gallery-item opacity-0 translate-y-12" style="transition-delay: 300ms;">
            <img class="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              alt="Cocktail bar details" src="/vibe/vibe4.png" />
            <div
              class="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80">
            </div>
            <div class="absolute bottom-8 left-8 right-8">
              <span class="text-xs tracking-widest text-primary uppercase font-bold block mb-2">Nightlife</span>
              <span class="text-2xl text-white font-bold">Midnight Mixology</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

onMounted(() => {
  // Reveal animations for hero
  gsap.to('.animate-reveal', {
    opacity: 1,
    y: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: 'power3.out'
  })

  // Scroll animations for info cards
  gsap.from('.info-card', {
    scrollTrigger: {
      trigger: '.info-grid',
      start: 'top 80%',
    },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power2.out'
  })

  // Gallery item entrance
  gsap.to('.gallery-item', {
    scrollTrigger: {
      trigger: '.gallery-grid',
      start: 'top 85%',
    },
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'power3.out'
  })

  // Parallax effect for gallery images
  gsap.utils.toArray('.gallery-item img').forEach((img: any) => {
    gsap.to(img, {
      scrollTrigger: {
        trigger: img.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      },
      y: 40,
      ease: 'none'
    })
  })
})

useHead({
  title: 'Planet Hollywood Asia - Phnom Penh',
  htmlAttrs: {
    class: 'dark',
    lang: 'en'
  },
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: ''
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap'
    }
  ]
})
</script>

<style scoped>

.animate-reveal {
  transform: translateY(30px);
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24;
}

/* Glassmorphism for hover overlays could be added here if needed */

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #000;
}

::-webkit-scrollbar-thumb {
  background: #222;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary);
}
</style>
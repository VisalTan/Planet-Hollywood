<template>
  <div
    class="relative flex h-auto w-full flex-col font-display text-white overflow-hidden bg-background-dark">
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
    <section class="relative overflow-hidden bg-background-dark pt-16 pb-8 sm:pt-24 sm:pb-12 lg:pt-32 lg:pb-16">
      <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div class="text-center intro-text mb-20">
          <div class="flex items-center justify-center gap-4 mb-6 opacity-0 animate-reveal">
            <div class="h-px w-12 bg-primary/40"></div>
            <span class="text-xs sm:text-sm tracking-[0.4em] text-primary uppercase font-semibold">Welcome to the Limelight</span>
            <div class="h-px w-12 bg-primary/40"></div>
          </div>
          <h1 class="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9] opacity-0 animate-reveal" style="animation-delay: 200ms;">
            The Legend <br class="hidden sm:block" />
            <span class="text-transparent bg-clip-text bg-linear-to-r from-primary via-white to-primary/60">Arrives in Asia</span>
          </h1>
          <p
            class="mt-10 max-w-3xl mx-auto text-lg sm:text-2xl leading-relaxed text-gray-400 font-light opacity-0 animate-reveal italic" style="animation-delay: 400ms;">
            "Experience the glamorous fusion of cinematic heritage and contemporary luxury in the heart of Phnom Penh."
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-3 info-grid">
          <!-- Card 1: The Hollywood Legacy -->
          <div class="info-card group relative h-[420px] md:h-[500px] overflow-hidden rounded-3xl md:rounded-4xl border border-white/10 flex flex-col justify-end p-6 md:p-8 transition-all duration-700 hover:border-primary/50">
            <img class="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                 src="/images/intro/legacy.jpg" alt="The Hollywood Legacy" />
            <div class="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

            <div class="relative z-10">
              <h3 class="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 tracking-tight">The Hollywood Legacy</h3>
              <p class="text-gray-300 text-sm md:text-base leading-relaxed font-light mb-6 md:mb-8 line-clamp-3 group-hover:text-white transition-colors">
                Founded by icons, redefined for the elite. We offer an immersive escape where every guest is treated like a star.
              </p>
              <a class="group/link inline-flex items-center text-xs font-bold tracking-[0.2em] text-white uppercase transition-all" href="#">
                <span class="relative py-2">
                  Our Story
                  <span class="absolute bottom-0 left-0 w-8 h-px bg-primary transition-all duration-300 group-hover/link:w-full"></span>
                </span>
                <span class="material-symbols-outlined ml-4 text-xl transition-transform duration-300 group-hover/link:translate-x-2 text-primary">trending_flat</span>
              </a>
            </div>
          </div>

          <!-- Card 2: BKK1 District -->
          <div class="info-card group relative h-[420px] md:h-[500px] overflow-hidden rounded-3xl md:rounded-4xl border border-white/10 flex flex-col justify-end p-6 md:p-8 transition-all duration-700 hover:border-primary/50">
            <img class="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                 src="/images/intro/bkk1.jpg" alt="BKK1 District" />
            <div class="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

            <div class="relative z-10">
              <h3 class="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 tracking-tight">BKK1 District</h3>
              <p class="text-gray-300 text-sm md:text-base leading-relaxed font-light mb-6 md:mb-8 line-clamp-3 group-hover:text-white transition-colors">
                Residing in the iconic JS Tower, we place you at the epicenter of the city's most vibrant cultural enclave.
              </p>
              <a class="group/link inline-flex items-center text-xs font-bold tracking-[0.2em] text-white uppercase transition-all" href="#">
                <span class="relative py-2">
                  Explore BKK1
                  <span class="absolute bottom-0 left-0 w-8 h-px bg-primary transition-all duration-300 group-hover/link:w-full"></span>
                </span>
                <span class="material-symbols-outlined ml-4 text-xl transition-transform duration-300 group-hover/link:translate-x-2 text-primary">trending_flat</span>
              </a>
            </div>
          </div>

          <!-- Card 3: Curated Arrival -->
          <div class="info-card group relative h-[420px] md:h-[500px] overflow-hidden rounded-3xl md:rounded-4xl border border-white/10 flex flex-col justify-end p-6 md:p-8 transition-all duration-700 hover:border-primary/50">
            <img class="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                 src="/images/intro/arrival.jpg" alt="Curated Arrival" />
            <div class="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

            <div class="relative z-10">
              <h3 class="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 tracking-tight">Curated Arrival</h3>
              <p class="text-gray-300 text-sm md:text-base leading-relaxed font-light mb-6 md:mb-8 line-clamp-3 group-hover:text-white transition-colors">
                Just 20km from Techo Takhmao International Airport, your star-studded journey begins with seamless luxury transfers.
              </p>
              <a class="group/link inline-flex items-center text-xs font-bold tracking-[0.2em] text-white uppercase transition-all" href="#">
                <span class="relative py-2">
                  Book Transfer
                  <span class="absolute bottom-0 left-0 w-8 h-px bg-primary transition-all duration-300 group-hover/link:w-full"></span>
                </span>
                <span class="material-symbols-outlined ml-4 text-xl transition-transform duration-300 group-hover/link:translate-x-2 text-primary">trending_flat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="bg-background-dark py-12 sm:py-16 overflow-hidden gallery-section">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="flex items-end justify-between mb-16 px-2 sm:px-0">
          <div class="gallery-title">
            <span class="text-xs tracking-[0.5em] text-primary uppercase block mb-6 font-semibold">Visual Journey</span>
            <h3 class="text-5xl sm:text-7xl text-white font-black tracking-tighter">Capture <br class="sm:hidden" />The Vibe</h3>
          </div>
          <div class="hidden lg:block h-px grow bg-white/10 mx-16 mb-4"></div>
          <div class="hidden sm:flex gap-4 mb-2">
             <div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/30 cursor-pointer hover:border-primary hover:text-primary transition-all">
                <span class="material-symbols-outlined">west</span>
             </div>
             <div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/30 cursor-pointer hover:border-primary hover:text-primary transition-all">
                <span class="material-symbols-outlined">east</span>
             </div>
          </div>
        </div>
        
        <div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6 gallery-grid">
          <!-- Item 1 -->
          <div class="group relative aspect-3/4.5 overflow-hidden rounded-4xl bg-surface-dark gallery-item opacity-0 translate-y-12">
            <img class="h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
              alt="Fine dining restaurant interior" src="/vibe/vibe1.png" />
            <div class="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>
            <div class="absolute inset-0 border-[0.5px] border-white/10 rounded-4xl pointer-events-none m-4"></div>
            
            <div class="absolute bottom-10 left-10 right-10 transform transition-transform duration-500 group-hover:-translate-y-2">
              <span class="text-xs tracking-[0.3em] text-primary uppercase font-bold block mb-3 opacity-80">Social</span>
              <span class="text-2xl sm:text-3xl text-white font-bold leading-none">Fine Dining</span>
              <div class="w-0 h-px bg-primary mt-4 group-hover:w-full transition-all duration-700"></div>
            </div>
          </div>
          
          <!-- Item 2 -->
          <div class="group relative aspect-3/4.5 overflow-hidden rounded-4xl bg-surface-dark gallery-item opacity-0 translate-y-12" style="transition-delay: 100ms;">
            <img class="h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
              alt="Concert stage with purple lights" src="/vibe/vibe2.png" />
            <div class="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>
            <div class="absolute inset-0 border-[0.5px] border-white/10 rounded-4xl pointer-events-none m-4"></div>
            
            <div class="absolute bottom-10 left-10 right-10 transform transition-transform duration-500 group-hover:-translate-y-2">
              <span class="text-xs tracking-[0.3em] text-primary uppercase font-bold block mb-3 opacity-80">Entertainment</span>
              <span class="text-2xl sm:text-3xl text-white font-bold leading-none">Elite Events</span>
              <div class="w-0 h-px bg-primary mt-4 group-hover:w-full transition-all duration-700"></div>
            </div>
          </div>
          
          <!-- Item 3 -->
          <div class="group relative aspect-3/4.5 overflow-hidden rounded-4xl bg-surface-dark gallery-item opacity-0 translate-y-12" style="transition-delay: 200ms;">
            <img class="h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
              alt="Luxury hotel room interior" src="/vibe/vibe3.png" />
            <div class="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>
            <div class="absolute inset-0 border-[0.5px] border-white/10 rounded-4xl pointer-events-none m-4"></div>
            
            <div class="absolute bottom-10 left-10 right-10 transform transition-transform duration-500 group-hover:-translate-y-2">
              <span class="text-xs tracking-[0.3em] text-primary uppercase font-bold block mb-3 opacity-80">Rest</span>
              <span class="text-2xl sm:text-3xl text-white font-bold leading-none">Cinematic Stays</span>
              <div class="w-0 h-px bg-primary mt-4 group-hover:w-full transition-all duration-700"></div>
            </div>
          </div>
          
          <!-- Item 4 -->
          <div class="group relative aspect-3/4.5 overflow-hidden rounded-4xl bg-surface-dark gallery-item opacity-0 translate-y-12" style="transition-delay: 300ms;">
            <img class="h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
              alt="Cocktail bar details" src="/vibe/vibe4.png" />
            <div class="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>
            <div class="absolute inset-0 border-[0.5px] border-white/10 rounded-4xl pointer-events-none m-4"></div>
            
            <div class="absolute bottom-10 left-10 right-10 transform transition-transform duration-500 group-hover:-translate-y-2">
              <span class="text-xs tracking-[0.3em] text-primary uppercase font-bold block mb-3 opacity-80">Nightlife</span>
              <span class="text-2xl sm:text-3xl text-white font-bold leading-none">Midnight Mixology</span>
              <div class="w-0 h-px bg-primary mt-4 group-hover:w-full transition-all duration-700"></div>
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
  gsap.fromTo('.info-card',
    { y: 60, opacity: 0 },
    {
      scrollTrigger: {
        trigger: '.info-grid',
        start: 'top 85%',
      },
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.15,
      ease: 'power2.out'
    }
  )

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
.font-display {
  --color-primary-rgb: 212, 175, 55; /* Approximate gold color */
}

.animate-reveal {
  transform: translateY(40px);
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24;
}

.info-card {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.info-card:hover {
  transform: translateY(-10px);
}

.gallery-item {
  box-shadow: 0 20px 40px -20px rgba(0,0,0,0.5);
}

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

@media (max-width: 640px) {
  .intro-text h1 {
    font-size: 3.5rem;
    line-height: 1;
  }
}
</style>
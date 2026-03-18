<template>
  <div class="relative min-h-screen bg-black text-white font-serif overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="w-full h-full bg-cover bg-center transition-transform duration-[2000ms] ease-out-expo scale-105"
        :style="{ backgroundImage: `url('${themeData?.image}')` }"></div>
      <div class="absolute inset-0 bg-linear-to-b from-black/20 via-black/60 to-black"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center">
      <NuxtLink to="/"
        class="absolute top-24 left-6 md:left-12 flex items-center gap-2 text-white/70 hover:text-white transition-colors group mb-12">
        <span
          class="material-symbols-outlined transform group-hover:-translate-x-1 transition-transform">arrow_back</span>
        <span class="font-sans uppercase tracking-[0.2em] text-xs font-bold">Back to Home</span>
      </NuxtLink>

      <div class="max-w-[1000px] w-full flex flex-col items-center gap-12" ref="contentRef">
        <header class="flex flex-col items-center">
          <span
            class="font-sans uppercase tracking-[0.5em] text-primary text-sm font-black mb-4 animate-reveal-bottom">THEME
            REVEALED</span>
          <h1
            class="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight animate-reveal-bottom stagger-1">
            <span class="text-primary">PH</span>{{ themeData?.name.substring(2) }}
          </h1>
          <div class="w-24 h-px bg-primary/50 mt-8 animate-reveal-width"></div>
        </header>

        <section class="flex flex-col items-center gap-8 max-w-3xl">
          <p
            class="text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed font-light italic animate-reveal-bottom stagger-2">
            {{ themeData?.fullDescription }}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 w-full text-left">
            <div
              class="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl animate-reveal-bottom stagger-3">
              <h3 class="font-sans font-bold text-xs tracking-widest text-primary uppercase mb-4">The Inspiration</h3>
              <p class="text-gray-400 font-sans leading-relaxed">
                {{ themeData?.inspiration }}
              </p>
            </div>
            <div
              class="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl animate-reveal-bottom stagger-4">
              <h3 class="font-sans font-bold text-xs tracking-widest text-primary uppercase mb-4">Atmosphere</h3>
              <p class="text-gray-400 font-sans leading-relaxed">
                {{ themeData?.atmosphere }}
              </p>
            </div>
          </div>
        </section>

        <footer class="mt-12 animate-reveal-bottom stagger-5">
          <NuxtLink to="/booking"
            class="bg-linear-to-r from-purple-600 to-pink-600 px-10 py-5 rounded-full font-sans font-black uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(168,85,247,0.3)]">
            Experience This Scene
          </NuxtLink>
        </footer>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 animate-bounce">
      <span class="material-symbols-outlined">expand_more</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const route = useRoute()
const themeId = route.params.id as string

const themes = {
  phamous: {
    name: 'PHamous',
    image: '/room_design/phamous.png',
    description: 'The glamour of Hollywood legends.',
    fullDescription: "The 'Phamous' room celebrates the glamour of stardom with a bling-inspired gold or copper scale bedhead.",
    inspiration: "Darker gold stars, crafted from same material, symbolize iconic figures from the silver screen's golden era.",
    atmosphere: "This bold yet elegant design invites guests to feel like stars, immersed in a space that radiates fame and aspiration."
  },
  phantastic: {
    name: 'PHantastic',
    image: '/room_design/phantastic.png',
    description: "Artistry drawn from Cambodia's cultural heritage.",
    fullDescription: "Inspired by the mesmerizing intricacy of Cambodian textile weaving, this bedhead reimagines its essence through a modern mosaic interpretation.",
    inspiration: "The design echoes the rhythm, layering, and symbolic geometry of traditional patterns.",
    atmosphere: "Capturing a phantastic spirit that feels both rooted in heritage and visually enchanting in a contemporary hotel setting."
  },
  phabulous: {
    name: 'PHabulous',
    image: '/room_design/phabulous.png',
    description: 'Sophistication of timeless Art Deco design.',
    fullDescription: "The 'Phabulous' theme embodies a refined take on illusion and surrealism with layered textured glass.",
    inspiration: "At the heart of the room is a custom Planet Hollywood bas-relief artwork, echoing the graceful design language of Émile-Jacques Ruhlmann.",
    atmosphere: "Delivers a multidimensional experience—precise and vivid up close, gracefully diffused from afar, bringing sophistication and timeless allure."
  },
  phun: {
    name: 'PHun',
    image: '/room_design/phun.png',
    description: 'Energy that fuels unforgettable moments.',
    fullDescription: "Phun is brought to life through the vibrancy of colors and the dynamic energy of dance.",
    inspiration: "Curved and flowing shapes, inspired by the graceful movements of dancers, evoke the spirit of a joyful celebration.",
    atmosphere: "Reminiscent of lively dance parties and grand Hollywood musicals, creating an energy that fuels unforgettable moments."
  }
}

const themeData = themes[themeId as keyof typeof themes]

const contentRef = ref(null)

onMounted(() => {
  // Entrance GSAP animation
  const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } })

  tl.from('.scale-105', { scale: 1.2, duration: 4, ease: 'power1.out' })
    .from('.animate-reveal-bottom', {
      y: 100,
      opacity: 0,
      stagger: 0.15,
      delay: -3.5
    })
    .from('.animate-reveal-width', {
      width: 0,
      opacity: 0,
      duration: 1.5,
      delay: -2
    })
})

useHead({
  title: `${themeData?.name} - Planet Hollywood Phnom Penh`,
  meta: [
    { name: 'description', content: themeData?.description }
  ]
})
</script>

<style scoped>
.ease-out-expo {
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}

@keyframes reveal-bottom {
  from {
    transform: translateY(30px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

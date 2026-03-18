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
    <section class="relative overflow-hidden bg-background-dark py-16 sm:py-20 lg:py-32 xl:py-24">
      <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
        <div class="text-center">
          <span class="text-sm sm:text-base lg:text-lg tracking-wider text-primary">WELCOME TO THE LIMELIGHT</span>
          <h1 class="mt-3 sm:mt-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white">The
            Legend Arrives in
            Asia</h1>
          <p
            class="mt-4 sm:mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-7 sm:leading-8 text-gray-300 px-4 sm:px-0">
            For the first time, the glamour of Hollywood lands in the heart of Phnom Penh. Planet Hollywood invites you
            to a five-star experience where cinematic history meets contemporary luxury.
          </p>
        </div>
        <div
          class="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 gap-6 sm:gap-8 border-t border-white/10 pt-12 sm:pt-16 lg:pt-20 lg:grid-cols-3 lg:gap-10 xl:gap-12">
          <div class="flex flex-col items-start gap-3 sm:gap-4 px-2 sm:px-0">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-highlight ring-1 ring-white/10">
              <span class="material-symbols-outlined text-primary text-3xl">hotel_class</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-white">Planet Hollywood Hotels</h3>
            <p class="text-sm sm:text-base text-gray-400">Founded in 1991 with the backing of superstars, Planet
              Hollywood redefined themed
              entertainment. We extend this legacy to luxury hospitality, offering an immersive escape into the world of
              film and fame.</p>
            <a class="group inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-white"
              href="#">
              Learn Our Story
              <span
                class="material-symbols-outlined ml-1.5 transition-transform group-hover:translate-x-1">arrow_forward</span>
            </a>
          </div>
          <div class="flex flex-col items-start gap-3 sm:gap-4 px-2 sm:px-0">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-highlight ring-1 ring-white/10">
              <span class="material-symbols-outlined text-primary text-3xl">pin_drop</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-white">Phnom Penh, Cambodia</h3>
            <p class="text-sm sm:text-base text-gray-400">Discover our landmark location in the iconic JS Tower, BKK1
              District. Steps away
              from the Independence Monument, we place you at the epicenter of the city's vibrant culture, dining, and
              nightlife.</p>
            <a class="group inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-white"
              href="#">
              Explore the Location
              <span
                class="material-symbols-outlined ml-1.5 transition-transform group-hover:translate-x-1">arrow_forward</span>
            </a>
          </div>
          <div class="flex flex-col items-start gap-3 sm:gap-4 px-2 sm:px-0">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-highlight ring-1 ring-white/10">
              <span class="material-symbols-outlined text-primary text-3xl">flight</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-white">Getting Here</h3>
            <p class="text-sm sm:text-base text-gray-400">Conveniently located just 9 kilometers from Phnom Penh
              International Airport (PNH).
              Our concierge can arrange seamless luxury transfers, ensuring your star-studded arrival begins the moment
              you land.</p>
            <a class="group inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-white"
              href="#">
              Arrange Transport
              <span
                class="material-symbols-outlined ml-1.5 transition-transform group-hover:translate-x-1">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="bg-background-dark pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-20 lg:pb-24 xl:pb-32">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
        <div class="mb-6 sm:mb-8 lg:mb-10 px-2 sm:px-0">
          <h3 class="text-2xl sm:text-3xl font-bold text-white">The Vibe</h3>
        </div>
        <div class="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:gap-6 xl:gap-8">
          <div class="group relative aspect-[3/4] overflow-hidden rounded-lg sm:rounded-xl bg-surface-dark">
            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              alt="Fine dining restaurant interior" src="/vibe/vibe1.png" />
            <div
              class="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
            </div>
            <span
              class="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-sm sm:text-base font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">Dining</span>
          </div>
          <div class="group relative aspect-[3/4] overflow-hidden rounded-lg sm:rounded-xl bg-surface-dark">
            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              alt="Concert stage with purple lights" src="/vibe/vibe2.png" />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
            </div>
            <span
              class="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-sm sm:text-base font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">Events</span>
          </div>
          <div class="group relative aspect-[3/4] overflow-hidden rounded-lg sm:rounded-xl bg-surface-dark">
            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              alt="Luxury hotel room interior" src="/vibe/vibe3.png" />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
            </div>
            <span
              class="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-sm sm:text-base font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">Rooms</span>
          </div>
          <div class="group relative aspect-[3/4] overflow-hidden rounded-lg sm:rounded-xl bg-surface-dark">
            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              alt="Cocktail bar details" src="/vibe/vibe4.png" />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
            </div>
            <span
              class="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-sm sm:text-base font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">Bar</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
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
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap'
    }
  ]
})
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1d1023;
}

::-webkit-scrollbar-thumb {
  background: #3c2249;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #af25f4;
}
</style>
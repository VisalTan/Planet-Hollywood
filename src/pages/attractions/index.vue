<template>
  <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden font-display bg-background-dark text-gray-200">
    <div class="layout-container flex h-full grow flex-col">
      <div class="flex flex-1 justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-5">
        <div class="layout-content-container flex w-full max-w-[1200px] flex-1 flex-col">
          <!-- Main Content -->
          <main class="flex flex-col gap-16 md:gap-24">
            
            <!-- Hero Section -->
            <div class="mt-16 md:mt-24 text-center">
              <div class="flex flex-col gap-4 items-center">
                <h1 class="text-white text-5xl md:text-6xl font-black leading-tight tracking-tighter max-w-4xl">
                  Explore the Heart of the City
                </h1>
                <h2 class="text-white/80 text-lg md:text-xl font-normal leading-normal max-w-2xl">
                  Discover iconic landmarks and cultural treasures, just moments from the unparalleled luxury of Planet Hollywood.
                </h2>
              </div>
            </div>

            <!-- Attractions Grid -->
            <section class="flex flex-col gap-12">
              <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div 
                  v-for="attraction in attractions" 
                  :key="attraction.id"
                  class="attraction-card flex flex-col bg-card-dark rounded-xl overflow-hidden border border-white/10"
                >
                  <div class="overflow-hidden">
                    <div 
                      class="attraction-image w-full bg-center bg-no-repeat aspect-video bg-cover" 
                      :style="{ backgroundImage: `url(${attraction.image})` }"
                      :aria-label="attraction.alt"
                    />
                  </div>
                  <div class="flex flex-col gap-3 p-6 grow">
                    <h3 class="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                      {{ attraction.title }}
                    </h3>
                    <p class="text-[#b790cb] text-base font-normal leading-relaxed grow">
                      {{ attraction.description }}
                    </p>
                    <p class="text-white/60 text-sm font-normal leading-normal flex items-center gap-2 pt-2">
                      <span class="material-symbols-outlined text-base">directions_car</span>
                      {{ attraction.distance }} | {{ attraction.duration }}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Concierge CTA Section -->
            <section class="flex flex-col items-center gap-6 p-10 rounded-xl bg-card-dark border border-white/10 text-center">
              <div class="text-primary">
                <span class="material-symbols-outlined" style="font-size: 40px; font-variation-settings: 'wght' 200;">
                  concierge
                </span>
              </div>
              <div class="flex flex-col gap-3">
                <h3 class="text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
                  Plan Your Perfect Excursion
                </h3>
                <p class="text-[#b790cb] text-base font-normal leading-relaxed max-w-xl">
                  Our dedicated concierge team is here to help you arrange private tours, secure transportation, and provide expert recommendations to make your exploration unforgettable.
                </p>
              </div>
              <button class="mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                <span class="truncate">Contact Concierge</span>
              </button>
            </section>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'hollywood'
})

const attractions = [
  {
    id: 1,
    title: 'Independence Monument',
    description: "A towering monument commemorating Cambodia's independence from France, illuminated beautifully at night.",
    distance: '5km',
    duration: '15 min drive',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGmsg6UIjgsivh0Hy9OR3Awb3ajS8_y88sUwp8Tje7XN2W2FoTUtMJO2e51cV808jt22RCPAH5znGPJ7P9AEF7fJVAdi1tDsepbjoOKWOKjeBeEtwKiMxGFBitoizAQ7omBG5JSFj6kKqkijOCOLcFsI--y-c1BE3GkPeYsyKcO4O-r4DMF52ud63TrSYQs5b_idQfKbzn7_bGzc6Hmhi9jtaKT8hiSxxo_9YjjN3KDQAYZ5rj1GhFrx4w2PJyoCgm0HlsrWGDPrQ',
    alt: 'The majestic Independence Monument in Cambodia illuminated against the night sky.'
  },
  {
    id: 2,
    title: 'Royal Palace',
    description: 'The official residence of the King of Cambodia, showcasing classic Khmer architecture and manicured gardens.',
    distance: '6km',
    duration: '20 min drive',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8OsrnPNM4MxSjG7V-Rw4zVvzW1RAqX-6cauu9iXnf8JXUVi8T1ojupvLL1zB9tM-LN-h1I88sdJheUW2D5psDojb2mbmrMO15oZv8QCfUCZ5PiffkMYLmHB1dsmriVEa1pi3u7OVsGUORyc8RXEY0rZrVlsK3-eGerT5v7tNE35oHB1rRbuqYZbYiM8Ca5IKgSNijZdzrvdi0QQUWMxqtPC2iezU7yN5aMLN5J0XALKOP72cifMSWTRRl8nm376FYkovbUR51PY0',
    alt: 'The ornate golden roofs of the Royal Palace in Phnom Penh against a clear blue sky.'
  },
  {
    id: 3,
    title: 'Wat Phnom',
    description: 'A historic Buddhist temple on a hill, central to the legendary founding of Phnom Penh and a hub of spiritual life.',
    distance: '7km',
    duration: '25 min drive',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9thnUTfkYGvSvsMl9ZwgIRX4QLIXZELNVpcSk61U4eJxkm_BdLsq-dBSfqyGIG9IK1_x3dxr5AOh1itobAmGuKUX5O_RPVY_a8tYzRWDb2C4s_prR5Z73Q96WBHoJMiuz0w5NbInTW0AT4UOm_cfPhKS-8u7lwsjFE0IPVteZcBprNg9vYNqcEPGZX-BrxMEI8i4eb5t6VXfS_IjSftUgXSsfyUHGowjBZwqk7cBLxKtJD2ETvAgGmEntcIqOI4ks2xkvAN1vctY',
    alt: 'The serene Wat Phnom temple surrounded by lush greenery, a spiritual landmark in the city.'
  }
]

useHead({
  title: 'Planet Hollywood Local Attractions - Enhanced Premium',
  htmlAttrs: {
    lang: 'en',
    class: 'dark'
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
      href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap'
    }
  ],
  bodyAttrs: {
    class: 'font-display bg-background-dark text-gray-200'
  }
})
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

body {
  background-color: #120C16;
  background-image: radial-gradient(at 20% 20%, hsla(276, 55%, 15%, 0.3) 0px, transparent 50%), 
                    radial-gradient(at 80% 0%, hsla(276, 55%, 20%, 0.2) 0px, transparent 50%), 
                    radial-gradient(at 80% 80%, hsla(276, 55%, 15%, 0.3) 0px, transparent 50%);
}

.attraction-card {
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

.attraction-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
}

.attraction-card:hover .attraction-image {
  transform: scale(1.05);
}

.attraction-image {
  transition: transform 0.3s ease-out;
}
</style>
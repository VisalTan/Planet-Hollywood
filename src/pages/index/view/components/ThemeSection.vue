<template>
  <div
    class="relative flex h-auto min-h-screen w-full flex-col font-display text-white overflow-hidden bg-background-dark">
    <!-- Background gradients -->
    <div
      class="absolute top-0 left-0 w-full h-[600px] bg-linear-to-b from-primary/10 via-background-dark to-background-dark pointer-events-none">
    </div>
    <div
      class="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none opacity-50">
    </div>
    <div
      class="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none opacity-50">
    </div>

    <!-- Section Container -->
    <div class="layout-container flex h-full grow flex-col justify-center py-16 md:py-24">
      <!-- Header Content -->
      <div class="px-4 md:px-10 flex w-full justify-center mb-16">
        <div class="layout-content-container flex flex-col max-w-[960px] w-full items-center text-center">
          <h1
            class="text-white font-serif tracking-tight text-4xl md:text-5xl lg:text-7xl font-bold leading-tight px-4 pb-4 uppercase">
            Room Design
          </h1>
          <p class="text-gray-300 text-lg md:text-xl font-normal leading-relaxed max-w-3xl px-4 mt-4">
            The design language of our hotel rooms is inspired by the distinctive spirit of Planet Hollywood — where
            every stay becomes a scene from a larger story.
          </p>
        </div>
      </div>

      <!-- Room Grid -->
      <div class="px-4 md:px-10 flex w-full justify-center">
        <div class="layout-content-container flex flex-col max-w-[1200px] w-full">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 p-4">
            <!-- Room Cards -->
            <NuxtLink v-for="room in rooms" :key="room.id" :to="`/rooms/theme/${room.title.toLowerCase()}`"
              class="group relative flex flex-col items-center text-center gap-6 transition-all duration-500 cursor-pointer">
              <div class="flex flex-col gap-2 order-1">
                <h3
                  class="text-white text-3xl font-serif font-bold group-hover:text-primary transition-colors">
                  <span class="text-primary group-hover:text-white transition-colors">PH</span>{{ room.title.substring(2) }}
                </h3>
              </div>
              <div class="relative w-full max-w-[240px] aspect-square overflow-hidden rounded-full border-4 border-white/10 group-hover:border-primary/50 transition-colors duration-500 shadow-2xl shadow-primary/5 order-2">
                <div
                  class="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-110"
                  :style="{ backgroundImage: `url('${room.image}')` }" :aria-label="room.alt"></div>
              </div>
              <div class="flex flex-col gap-2 order-3">
                <p class="text-gray-400 text-base font-normal leading-relaxed max-w-[280px]">
                  {{ room.description }}
                </p>
              </div>
            </NuxtLink>
          </div>

          <!-- Footer Paragraph -->
          <div class="mt-20 flex justify-center px-4">
            <p class="text-gray-300 text-xl md:text-2xl font-serif italic text-center max-w-4xl leading-relaxed border-t border-white/10 pt-12">
              Together, they create an experience that is bold, cinematic, and unmistakably Planet Hollywood Phnom Penh.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <!-- ... existing CTA ... -->
    </div>
  </div>
</template>

<script setup lang="ts">
const rooms = [
  {
    id: 1,
    title: 'PHamous',
    description: 'The glamour of Hollywood legends.',
    image: '/room_design/phamous.png',
    alt: 'The Phamous room themed around Hollywood legends',
    icon: 'bed'
  },
  {
    id: 2,
    title: 'PHantastic',
    description: "Artistry drawn from Cambodia's cultural heritage.",
    image: '/room_design/phantastic.png',
    alt: 'The Phantastic room featuring Cambodian cultural artistry',
    icon: 'auto_awesome'
  },
  {
    id: 3,
    title: 'PHabulous',
    description: 'Sophistication of timeless Art Deco design.',
    image: '/room_design/phabulous.png',
    alt: 'The Phabulous room with Art Deco sophistication',
    icon: 'diamond'
  },
  {
    id: 4,
    title: 'PHun',
    description: 'Energy that fuels unforgettable moments.',
    image: '/room_design/phun.png',
    alt: 'The Phun room filled with vibrant energy',
    icon: 'theater_comedy'
  }
]

const exploreRooms = () => {
  // Add your navigation logic here
  console.log('Exploring rooms...')
}
</script>

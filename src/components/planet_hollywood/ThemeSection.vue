<template>
  <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden hollywood-gradient">
    <!-- Section Container -->
    <div class="layout-container flex h-full grow flex-col justify-center py-16 md:py-24">
      <!-- Header Content -->
      <div class="px-4 md:px-10 flex w-full justify-center mb-12">
        <div class="layout-content-container flex flex-col max-w-[960px] w-full items-center text-center">
          <!-- Subtle Star Icon -->
          <!-- <span class="material-symbols-outlined text-accent text-4xl mb-4 opacity-80">star</span> -->
          <h1 class="text-white font-serif tracking-tight text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4 pb-4 text-glow">
            Star-Studded Stays
          </h1>
          <p class="text-gray-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl px-4">
            Discover our four unique room themes, each designed to offer a distinct Planet Hollywood experience. Choose your scene.
          </p>
        </div>
      </div>

      <!-- Room Grid -->
      <div class="px-4 md:px-10 flex w-full justify-center">
        <div class="layout-content-container flex flex-col max-w-[1280px] w-full">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            <!-- Room Cards -->
            <div
              v-for="room in rooms"
              :key="room.id"
              class="group relative flex flex-col gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
            >
              <div class="relative w-full overflow-hidden rounded-xl aspect-[3/4]">
                <div
                  class="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-110"
                  :style="{ backgroundImage: `url('${room.image}')` }"
                  :aria-label="room.alt"
                ></div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                <div class="absolute bottom-4 left-4">
                  <span class="material-symbols-outlined text-white text-2xl">{{ room.icon }}</span>
                </div>
              </div>
              <div class="flex flex-col gap-1">
                <h3 class="text-white text-2xl font-serif font-medium leading-normal group-hover:text-primary transition-colors">
                  {{ room.title }}
                </h3>
                <p class="text-purple-400 text-sm font-normal leading-relaxed">
                  {{ room.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="px-4 md:px-10 flex w-full justify-center mt-12">
        <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div class="flex px-4 py-3 justify-center">
            <button
              class="group flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary hover:bg-primary/90 text-white text-base font-bold leading-normal tracking-wide transition-all shadow-[0_0_20px_rgba(175,37,244,0.4)] hover:shadow-[0_0_30px_rgba(175,37,244,0.6)] border border-white/10"
              @click="exploreRooms"
            >
              <span class="truncate mr-2">Explore All Rooms</span>
              <span class="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const rooms = [
  {
    id: 1,
    title: 'Phamous',
    description: 'Celebrity-style comfort with a luxurious King Bed.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlULzGDfCYYplIGYcBTKU_KPWzW2k61lRHDoFah0QhGUo0l2AgtTJD-4_5U6XfrfhP1rplSyTC_hJTPLh8OjFEyT6MudruPK-v719JyapWglqmTjFx5waRXUYE2Madz0TgGHJszF7sZxS-3JbN2xf_rI79uTd11NKM44i1TOJ3O89Et7yPfXqxwLAG2F1RA4X9gZjvIg9D33O-suDv_P_2pHuj8I9OwMFq0E81M9Tr6DXEgVTCtxDys_C1mspK52oQufm04s9a0Ns',
    alt: 'Luxury King Bed suite with modern lighting',
    icon: 'bed'
  },
  {
    id: 2,
    title: 'Phantastic',
    description: 'A fantasy escape featuring unique, artistic decor.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXuIU6zy0JI6WMkqlBPcv1-frYDeq_0akoMMP_hQOVeRMWGtowtB5EFaAn9i9nehMEJw5_2lHOFo15D3ACihsT3O8wfnkROus21oEtxzXf3GBZryMylTLXKis8hU0ZWq9Fc3dle1khiFZxzzlh5jFsi-9GiDAilhk_f73iA3BCTvORnbwx59pMLZNq6kizJ6jQJxWz3W7PlKQZaOgomyulj_vaXD1LaBNOwuwhYCBUZJNc1T9lW4cSTneKDixDdBax7Yg1XU3UCqE',
    alt: 'Artistic room decor with unique furniture',
    icon: 'auto_awesome'
  },
  {
    id: 3,
    title: 'Phabulous',
    description: 'Top-tier amenities and spacious, premium luxury.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAs6HSQg1AxQ1X_3dg82_km5k1NprgLsU5EzgY9nSp4inu8_VmB_HzjlxMeCrUL5Fk7_VIf0T4aTqd1iuT6q_bxByZbVpJXV2scT4tT1wnz_tfla858qUOG0jN2bHgGeXqEmypF8k_1EZ0gQz3VUhDkmdHRTS6xYT_4l0vUqiBzy37dKG9-EYHeX6MaLgyO5_1Jw1z6kKq5B_tXNfsNsD2xIMJbTludcYZNaTeNQ-Ucx2bBVFLOJ-CtusYvesdX7IFij6z01RRLE70',
    alt: 'Spacious high-end suite with premium amenities',
    icon: 'diamond'
  },
  {
    id: 4,
    title: 'Phun',
    description: 'Vibrant energy and modern entertainment features.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEnNBzO7LDMFY889TCC8XyeusaGrn9RWqTLhP0bDamiqJjz2WCEgCD_ZuxBz2McrH-2lvWHO10pAVz1PFE-zM2v3YijujK3JVA4Alx1xK-JPl9wSXCSwAU6cvNnR6cgK0H7uUuPo7o_pm7ZbR2b47y6wt8C-9eqmWmfThXqIgqFu2qWRCAWODSepvXQSwEr7k_HAVtkz8qBxjJ57SzqczfgnTM0KpifXqTzyf7WczAC4G5ZqxojuNtl1QpC5pOmEJoScPvrZuwV98',
    alt: 'Vibrant room with colorful neon lighting',
    icon: 'theater_comedy'
  }
]

const exploreRooms = () => {
  // Add your navigation logic here
  console.log('Exploring rooms...')
}
</script>

<style scoped>
/* Custom gradient for that "Hollywood" feel */
.hollywood-gradient {
  background: radial-gradient(circle at 50% 0%, #3e1c52 0%, #1c1022 60%);
}

.text-glow {
  text-shadow: 0 0 20px rgba(175, 37, 244, 0.3);
}
</style>
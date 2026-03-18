<template>
  <section class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16" :id="restaurant.id">
    <div :class="['flex-1', reverse ? 'order-2 lg:order-1' : 'order-2 lg:order-2']">
      <h2 class="text-3xl font-bold tracking-tight text-white md:text-4xl">{{ restaurant.title }}</h2>
      <p class="mt-4 text-base font-normal leading-relaxed text-white/80">
        {{ restaurant.description }}
      </p>
      <div class="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-2">
        <div class="flex items-start gap-3">
          <span class="material-symbols-outlined neon-text-purple text-2xl">{{ restaurant.cuisineIcon }}</span>
          <div>
            <h3 class="text-sm font-semibold text-white/70">Cuisine</h3>
            <p class="font-medium text-white">{{ restaurant.cuisine }}</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="material-symbols-outlined neon-text-purple text-2xl">schedule</span>
          <div>
            <h3 class="text-sm font-semibold text-white/70">Hours</h3>
            <p class="font-medium text-white">{{ restaurant.hours }}</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="material-symbols-outlined neon-text-purple text-2xl">groups</span>
          <div>
            <h3 class="text-sm font-semibold text-white/70">Capacity</h3>
            <p class="font-medium text-white">{{ restaurant.capacity }}</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="material-symbols-outlined neon-text-purple text-2xl">phone</span>
          <div>
            <h3 class="text-sm font-semibold text-white/70">Reservations</h3>
            <p class="font-medium text-white">{{ restaurant.reservations }}</p>
          </div>
        </div>
      </div>
    </div>
    <div :class="['order-1 h-80 w-full overflow-hidden rounded-xl sm:h-96 lg:h-auto lg:aspect-4/3', reverse ? 'lg:order-2' : 'lg:order-1']">
      <div
        class="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out hover:scale-105"
        :style="{ backgroundImage: `url('${restaurant.image}')` }">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  restaurant: {
    id: string
    title: string
    description: string
    image: string
    cuisine: string
    cuisineIcon: string
    hours: string
    capacity: string
    reservations: string
  }
  reverse?: boolean
}>()
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

.neon-text-purple {
  color: #a855f7;
  text-shadow: 0 0 10px #a855f7;
}
</style>

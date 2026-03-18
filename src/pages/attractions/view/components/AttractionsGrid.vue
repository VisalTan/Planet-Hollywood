<template>
  <section class="flex flex-col gap-12">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div 
        v-for="attraction in attractions" 
        :key="attraction.id"
        class="attraction-card flex flex-col bg-card-dark rounded-xl overflow-hidden border border-white/10"
      >
        <div class="overflow-hidden">
          <div 
            class="attraction-image w-full bg-center bg-no-repeat aspect-video bg-cover transition-transform duration-300 group-hover:scale-110" 
            :style="{ backgroundImage: `url(${attraction.image})` }"
            :aria-label="attraction.alt"
          />
        </div>
        <div class="flex flex-col gap-3 p-6 grow">
          <h3 class="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
            {{ attraction.title }}
          </h3>
          <p class="text-gray-400 text-base font-normal leading-relaxed grow">
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
</template>

<script setup lang="ts">
defineProps<{
  attractions: any[]
}>()
</script>

<style scoped>
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
</style>

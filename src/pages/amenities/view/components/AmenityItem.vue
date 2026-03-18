<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div :class="['flex-1', reverse ? 'lg:order-2' : '']">
            <img :alt="amenity.alt"
                class="w-full h-full object-cover rounded-xl shadow-2xl shadow-black/30"
                :src="amenity.image" />
        </div>
        <div :class="['flex-1 flex flex-col gap-8', reverse ? 'lg:order-1' : '']">
            <div class="flex flex-col gap-4">
                <h3 class="text-4xl font-bold tracking-tight text-white">{{
                    amenity.title }}</h3>
                <p class="text-lg text-white/70">
                    {{ amenity.description }}
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-white/10">
                <div class="flex flex-col gap-2">
                    <p class="neon-text-purple text-sm font-bold tracking-wider uppercase">Operating Hours</p>
                    <p class="text-white text-lg">{{ amenity.hours }}</p>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="neon-text-purple text-sm font-bold tracking-wider uppercase">Guest Benefits</p>
                    <p class="text-white text-lg">{{ amenity.benefits }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    amenity: any
    reverse?: boolean
}>()
</script>

<style scoped>
.neon-text-purple {
  color: #a855f7;
  text-shadow: 0 0 10px #a855f7;
}
</style>

<template>
    <section class="py-12 sm:py-16 lg:py-20">
        <div class="mb-8 sm:mb-12">
            <h2
                class="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-[-0.015em]">
                Choose Your Scene
            </h2>
            <p class="text-neutral-400 text-base sm:text-lg mt-3">
                From cozy to spacious, find the perfect room for your stay
            </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div v-for="room in rooms" :key="room.name"
                class="flex flex-col gap-4 group cursor-pointer">
                <div
                    class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl overflow-hidden shadow-lg">
                    <div class="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                        :style="`background-image: url('${room.image}');`"></div>
                </div>
                <div class="px-1">
                    <p class="text-white text-xl font-semibold leading-normal mb-1">{{ room.name }}</p>
                    <p class="text-[#b790cb] text-sm font-normal leading-normal mb-2">{{ room.size }}
                    </p>
                    <a class="text-[#af25f4] text-sm font-medium leading-normal hover:text-[#8f1fd4] hover:underline inline-flex items-center gap-1 transition-colors"
                        href="#">
                        View Details
                        <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{
    rooms: any[]
}>()
</script>

<template>
    <section class="py-8 sm:py-12 animate-fade-in">
        <div class="mb-6 sm:mb-10">
            <span class="text-xs sm:text-sm tracking-[0.3em] text-primary uppercase mb-4 block">Accommodation</span>
            <h2 class="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                Choose Your Scene
            </h2>
            <div class="mt-6 h-px w-20 bg-linear-to-r from-primary to-transparent"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            <NuxtLink v-for="room in rooms" :key="room.slug" :to="`/rooms/${room.slug}`"
                class="flex flex-col group cursor-pointer transition-all duration-500">
                <div class="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-surface-dark border border-white/5">
                    <div class="w-full h-full bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                        :style="`background-image: url('${room.image}');` "></div>
                    <div class="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                        <div class="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                            <span class="text-white text-xs font-bold tracking-widest uppercase">Explore Scene</span>
                        </div>
                    </div>
                </div>
                <div class="mt-6 flex flex-col grow">
                    <div class="flex items-start justify-between min-h-[64px] mb-2">
                        <h3 class="text-white text-xl sm:text-2xl font-bold tracking-tight max-w-[70%] leading-tight">{{ room.name }}</h3>
                        <span class="shrink-0 text-primary text-[10px] font-black tracking-widest uppercase bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20 mt-1">{{ room.size }}</span>
                    </div>
                    <p class="text-neutral-400 text-sm font-light leading-relaxed mb-6 line-clamp-2 grow">
                        Immerse yourself in legendary luxury with our meticulously designed {{ room.name.toLowerCase() }}, featuring cinema-grade amenities and star-studded comfort.
                    </p>
                    <div class="inline-flex items-center gap-3 text-[10px] font-black tracking-[0.2em] text-primary uppercase group-hover:text-white transition-all duration-300">
                        <span class="border-b border-primary/20 pb-1 group-hover:border-white transition-all">View Full Scene</span>
                        <span class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-2">arrow_right_alt</span>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{
    rooms: any[]
}>()
</script>

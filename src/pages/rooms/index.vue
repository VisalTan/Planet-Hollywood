<template>
    <div class="relative flex min-h-screen w-full flex-col bg-background-dark overflow-x-hidden pt-12 sm:pt-16 lg:pt-20">
        <!-- Decorative background elements -->
        <div class="absolute top-0 left-0 w-full h-[500px] bg-linear-to-b from-primary/5 to-transparent pointer-events-none opacity-50"></div>
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div class="layout-container flex h-full grow flex-col relative z-10">
            <div class="w-full max-w-7xl mx-auto px-6 lg:px-8">
                <main class="flex flex-col py-4 sm:py-8">
                    <HeroSection class="animate-reveal opacity-0" />
                    <RoomGrid :rooms="rooms" class="animate-reveal opacity-0" style="animation-delay: 200ms;" />
                    <ThemeTable :themes="themes" class="animate-reveal opacity-0" style="animation-delay: 400ms;" />
                </main>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import HeroSection from './view/components/HeroSection.vue'
import RoomGrid from './view/components/RoomGrid.vue'
import ThemeTable from './view/components/ThemeTable.vue'
import { rooms } from '~/data/rooms'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
    gsap.registerPlugin(ScrollTrigger)
}

onMounted(() => {
    gsap.to('.animate-reveal', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    })
})

useHead({
    title: 'Rooms - Planet Hollywood Phnom Penh',
    meta: [
        {
            name: 'description',
            content: 'Explore our collection of phamous rooms at Planet Hollywood Phnom Penh. Discover unparalleled luxury and unique design across our themed accommodations, crafted for an unforgettable stay.'
        }
    ]
})

definePageMeta({
    layout: 'hollywood'
})

const themes = [
    {
        name: 'Phamous',
        floors: 'Floors 31-33',
        superior: true,
        deluxe: true,
        premierDeluxe: true,
        executive: false,
        premierExecutive: false,
        penthouse: false
    },
    {
        name: 'Phantastic',
        floors: 'Floors 34-36',
        superior: false,
        deluxe: true,
        premierDeluxe: true,
        executive: true,
        premierExecutive: false,
        penthouse: false
    },
    {
        name: 'Phabulous',
        floors: 'Floors 37-39',
        superior: false,
        deluxe: false,
        premierDeluxe: true,
        executive: true,
        premierExecutive: true,
        penthouse: false
    },
    {
        name: 'Phun',
        floors: 'Floor 40',
        superior: false,
        deluxe: false,
        premierDeluxe: false,
        executive: false,
        premierExecutive: true,
        penthouse: true
    }
]
</script>

<style scoped>
.animate-reveal {
    transform: translateY(30px);
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.animate-fade-in {
    animation: fadeIn 1.5s ease-out forwards;
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
    height: 8px;
}

::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb {
    background: #af25f4;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #8f1fd4;
}
</style>
<template>
    <div class="min-h-screen bg-black text-white overflow-x-hidden">
        <nav :class="[
            'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
            scrolled ? 'bg-black shadow-lg' : 'bg-transparent'
        ]">
            <div class="max-w-7xl mx-auto px-6 py-4">
                <div class="flex items-center">
                    <!-- Logo/Brand -->

                    <img src="/images/PH_Logo.png" alt="Planet Hollywood Logo" class="h-15 hover:cursor-pointer"
                        v-on:click="navigateTo('/')" />

                    <!-- Navigation Links -->
                    <div class="hidden md:flex items-center space-x-8 ml-8">
                        <button @click="scrollToSection('rooms')" class="hover:text-purple-400 transition-colors">
                            Rooms
                        </button>
                        <button @click="navigateTo('/dining')" class="hover:text-purple-400 transition-colors">
                            Dining
                        </button>
                        <button @click="scrollToSection('amenities')" class="hover:text-purple-400 transition-colors">
                            Amenities
                        </button>
                        <button @click="scrollToSection('events')" class="hover:text-purple-400 transition-colors">
                            Events
                        </button>
                        <button @click="scrollToSection('location')" class="hover:text-purple-400 transition-colors">
                            Location
                        </button>
                        <button @click="navigateTo('/contact-us')" class="hover:text-purple-400 transition-colors">
                            Contact
                        </button>
                    </div>

                    <!-- Right side: Book Us and Hamburger -->
                    <div class="ml-auto flex items-center space-x-4">
                        <!-- Book Us Button -->
                        <NuxtLink to="/booking"
                            class="hidden md:block bg-linear-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
                            Book Us
                        </NuxtLink>

                        <!-- Hamburger Menu Button -->
                        <button @click="sidebarOpen = !sidebarOpen" class="md:hidden text-white focus:outline-none">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Mobile Sidebar -->
        <div v-show="sidebarOpen" class="fixed inset-0 z-50 md:hidden">
            <!-- Backdrop -->
            <div @click="sidebarOpen = false" class="absolute inset-0 bg-black bg-opacity-50"></div>
            <!-- Sidebar Panel -->
            <div :class="[
                'absolute left-0 top-0 h-full w-80 bg-black shadow-lg transform transition-transform duration-300 ease-in-out',
                sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            ]">
                <div class="p-6">
                    <!-- Close Button -->
                    <button @click="sidebarOpen = false" class="absolute top-4 right-4 text-white focus:outline-none">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <!-- Logo -->
                    <div
                        class="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
                        Planet Hollywood
                    </div>
                    <img src="/images/PH_Logo.png" alt="Planet Hollywood Logo" class="mb-8" />
                    <!-- Navigation Links -->
                    <nav class="space-y-4">
                        <button @click="scrollToSection('rooms')"
                            class="block w-full text-left text-white hover:text-purple-400 transition-colors py-2">
                            Rooms
                        </button>
                        <button @click="scrollToSection('dining')"
                            class="block w-full text-left text-white hover:text-purple-400 transition-colors py-2">
                            Dining
                        </button>
                        <button @click="scrollToSection('amenities')"
                            class="block w-full text-left text-white hover:text-purple-400 transition-colors py-2">
                            Amenities
                        </button>
                        <button @click="scrollToSection('events')"
                            class="block w-full text-left text-white hover:text-purple-400 transition-colors py-2">
                            Events
                        </button>
                        <button @click="scrollToSection('location')"
                            class="block w-full text-left text-white hover:text-purple-400 transition-colors py-2">
                            Location
                        </button>
                        <button @click="scrollToSection('contact')"
                            class="block w-full text-left text-white hover:text-purple-400 transition-colors py-2">
                            Contact
                        </button>
                        <NuxtLink to="/booking"
                            class="block w-full text-left text-white hover:text-purple-400 transition-colors py-2">
                            Book Now
                        </NuxtLink>
                    </nav>
                </div>
            </div>
        </div>

        <!-- Page Content -->
        <slot />

        <!-- Footer -->
        <planet-hollywood-footer />

    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const sidebarOpen = ref(false)

const handleScroll = () => {
    scrolled.value = window.scrollY > 50
}

const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        sidebarOpen.value = false // Close sidebar after scrolling
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>
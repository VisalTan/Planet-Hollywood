<template>
    <div class="min-h-screen bg-black text-white overflow-x-hidden">
        <nav :class="[
            'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
            scrolled ? 'bg-black shadow-lg' : 'bg-transparent'
        ]">
            <div class="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4">
                <div class="flex items-center justify-between">
                    <!-- Logo/Brand -->
                    <img src="/images/PH_Logo.png" alt="Planet Hollywood Logo"
                        class="h-8 sm:h-10 md:h-12 lg:h-14 hover:cursor-pointer transition-transform hover:scale-105 flex-shrink-0"
                        @click="navigateTo('/')" />

                    <!-- Desktop Navigation Links -->
                    <div class="hidden lg:flex items-center space-x-6 xl:space-x-8">
                        <button @click="navigateTo('/rooms')"
                            class="hover:text-purple-400 transition-colors text-sm xl:text-base font-medium">
                            Rooms
                        </button>
                        <button @click="navigateTo('/dining')"
                            class="hover:text-purple-400 transition-colors text-sm xl:text-base font-medium">
                            Dining
                        </button>
                        <button @click="navigateTo('/amenities')"
                            class="hover:text-purple-400 transition-colors text-sm xl:text-base font-medium">
                            Amenities
                        </button>
                        <button @click="navigateTo('/events')"
                            class="hover:text-purple-400 transition-colors text-sm xl:text-base font-medium">
                            Events
                        </button>
                        <button @click="navigateTo('/attractions')"
                            class="hover:text-purple-400 transition-colors text-sm xl:text-base font-medium">
                            Attractions
                        </button>
                        <button @click="navigateTo('/contact-us')"
                            class="hover:text-purple-400 transition-colors text-sm xl:text-base font-medium">
                            Contact
                        </button>
                    </div>

                    <!-- Right side: Book Us and Hamburger -->
                    <div class="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                        <!-- Book Us Button -->
                        <NuxtLink to="/booking"
                            class="hidden sm:block bg-linear-to-r from-purple-600 to-pink-600 px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 text-xs sm:text-sm lg:text-base whitespace-nowrap">
                            Book Your Stay
                        </NuxtLink>

                        <!-- Hamburger Menu Button -->
                        <button @click="sidebarOpen = !sidebarOpen"
                            class="lg:hidden text-white focus:outline-none p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors"
                            aria-label="Toggle menu">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    :d="sidebarOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Mobile Sidebar -->
        <Transition enter-active-class="transition-opacity duration-300"
            leave-active-class="transition-opacity duration-300" enter-from-class="opacity-0"
            leave-to-class="opacity-0">
            <div v-show="sidebarOpen" class="fixed inset-0 z-50 lg:hidden">
                <!-- Backdrop -->
                <div @click="sidebarOpen = false" class="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm">
                </div>

                <!-- Sidebar Panel -->
                <Transition enter-active-class="transition-transform duration-300 ease-out"
                    leave-active-class="transition-transform duration-300 ease-in" enter-from-class="-translate-x-full"
                    leave-to-class="-translate-x-full">
                    <div v-show="sidebarOpen"
                        class="absolute left-0 top-0 bottom-0 w-[75vw] max-w-[320px] sm:w-80 bg-linear-to-b from-gray-900 to-black shadow-2xl overflow-y-auto">
                        <div class="p-4 sm:p-6">
                            <!-- Header with Close Button -->
                            <div class="flex items-center justify-between mb-6 sm:mb-8">
                                <img src="/images/PH_Logo.png" alt="Planet Hollywood Logo" class="h-10 sm:h-12" />
                                <button @click="sidebarOpen = false"
                                    class="text-white focus:outline-none p-2 hover:bg-white/10 rounded-lg transition-colors shrink-0"
                                    aria-label="Close menu">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>

                            <!-- Navigation Links -->
                            <nav class="space-y-1 sm:space-y-2">
                                <button @click="navigateAndClose('/rooms')"
                                    class="block w-full text-left text-white hover:text-purple-400 hover:bg-white/5 transition-all py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-medium text-sm sm:text-base">
                                    Rooms
                                </button>
                                <button @click="navigateAndClose('/dining')"
                                    class="block w-full text-left text-white hover:text-purple-400 hover:bg-white/5 transition-all py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-medium text-sm sm:text-base">
                                    Dining
                                </button>
                                <button @click="navigateAndClose('/amenities')"
                                    class="block w-full text-left text-white hover:text-purple-400 hover:bg-white/5 transition-all py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-medium text-sm sm:text-base">
                                    Amenities
                                </button>
                                <button @click="navigateAndClose('/events')"
                                    class="block w-full text-left text-white hover:text-purple-400 hover:bg-white/5 transition-all py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-medium text-sm sm:text-base">
                                    Events
                                </button>
                                <button @click="navigateAndClose('/attractions')"
                                    class="block w-full text-left text-white hover:text-purple-400 hover:bg-white/5 transition-all py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-medium text-sm sm:text-base">
                                    Attractions
                                </button>
                                <button @click="navigateAndClose('/contact-us')"
                                    class="block w-full text-left text-white hover:text-purple-400 hover:bg-white/5 transition-all py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-medium text-sm sm:text-base">
                                    Contact
                                </button>

                                <!-- Book Now CTA -->
                                <div class="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-white/10">
                                    <NuxtLink to="/booking" @click="sidebarOpen = false"
                                        class="block w-full text-center bg-linear-to-r from-purple-600 to-pink-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 text-sm sm:text-base">
                                        Book Now
                                    </NuxtLink>
                                </div>
                            </nav>
                        </div>
                    </div>
                </Transition>
            </div>
        </Transition>

        <!-- Page Content -->
        <slot />

        <!-- Footer -->
        <planet-hollywood-footer />
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const scrolled = ref(false)
const sidebarOpen = ref(false)

const handleScroll = () => {
    scrolled.value = window.scrollY > 50
}

const navigateAndClose = (path) => {
    navigateTo(path)
    sidebarOpen.value = false
}

const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        sidebarOpen.value = false
    }
}

// Close sidebar when escape key is pressed
const handleKeydown = (e) => {
    if (e.key === 'Escape' && sidebarOpen.value) {
        sidebarOpen.value = false
    }
}

// Prevent body scroll when sidebar is open
const updateBodyScroll = () => {
    if (sidebarOpen.value) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
}

// Watch for sidebar changes
watch(sidebarOpen, updateBodyScroll)

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = ''
})
</script>
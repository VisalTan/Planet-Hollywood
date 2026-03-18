<template>
    <div class="relative w-full overflow-x-hidden bg-background-dark">
        <main class="layout-container py-16 px-4 md:px-8 lg:px-10">
            <!-- Section Header -->
            <div class="flex flex-col max-w-7xl mx-auto mb-10">
                <div class="flex items-center gap-3 mb-2">
                    <div class="h-px w-10 bg-accent" />
                    <span class="text-accent uppercase tracking-[0.2em] text-xs font-semibold">Guest Stories</span>
                </div>
                <h2 class="text-white text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
                    The Star Experience
                </h2>
            </div>

            <!-- Main Carousel -->
            <div class="w-full max-w-7xl mx-auto relative">
                <!-- Background Decorations -->
                <div
                    class="absolute -top-16 -right-16 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
                <div
                    class="absolute -bottom-16 -left-16 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                <!-- Carousel Card -->
                <div
                    class="relative bg-surface/40 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md">
                    <div class="grid grid-cols-1 lg:grid-cols-2 min-h-[550px]">
                        <!-- Content Side -->
                        <div class="p-8 md:p-10 lg:p-12 flex flex-col justify-center relative order-2 lg:order-1">
                            <!-- Quote Icon -->
                            <div class="absolute top-6 left-6 text-white/3 select-none pointer-events-none">
                                <span class="material-symbols-outlined !text-[100px]">format_quote</span>
                            </div>

                            <div class="space-y-6 relative z-10">
                                <!-- Rating Stars -->
                                <div class="flex gap-0.5">
                                    <span v-for="i in 5" :key="i"
                                        class="material-symbols-outlined text-accent !text-xl">
                                        star
                                    </span>
                                </div>

                                <!-- Quote -->
                                <blockquote
                                    class="font-display text-xl md:text-2xl lg:text-3xl leading-relaxed text-white/95 italic">
                                    "{{ currentTestimonial.quote }}"
                                </blockquote>

                                <!-- Author Info -->
                                <div class="border-l-2 border-primary pl-4 space-y-1">
                                    <p class="text-white font-semibold text-base">{{ currentTestimonial.name }}</p>
                                    <p class="text-text-secondary text-sm flex items-center gap-1.5">
                                        <span class="material-symbols-outlined !text-base">location_on</span>
                                        {{ currentTestimonial.location }}
                                    </p>
                                    <div class="flex items-center gap-2 pt-1">
                                        <div
                                            class="flex items-center gap-1 text-xs text-emerald-400/90 uppercase tracking-wide">
                                            <span class="material-symbols-outlined !text-sm">verified</span>
                                            Verified Guest
                                        </div>
                                        <span class="text-white/20">•</span>
                                        <p class="text-white/40 text-xs">{{ currentTestimonial.stayDate }}</p>
                                    </div>
                                </div>

                                <!-- Stay Details -->
                                <div class="flex flex-wrap gap-3 pt-2">
                                    <div
                                        class="flex items-center gap-1.5 text-xs text-white/60 bg-white/5 px-3 py-1.5 rounded-full">
                                        <span class="material-symbols-outlined !text-sm">hotel</span>
                                        {{ currentTestimonial.roomType }}
                                    </div>
                                    <div
                                        class="flex items-center gap-1.5 text-xs text-white/60 bg-white/5 px-3 py-1.5 rounded-full">
                                        <span class="material-symbols-outlined !text-sm">calendar_month</span>
                                        {{ currentTestimonial.nightsStayed }} nights
                                    </div>
                                </div>

                                <!-- Navigation Controls -->
                                <div class="flex items-center gap-4 pt-4">
                                    <button
                                        class="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group"
                                        @click="previousTestimonial" aria-label="Previous testimonial">
                                        <span
                                            class="material-symbols-outlined group-hover:-translate-x-0.5 transition-transform !text-xl">
                                            arrow_back
                                        </span>
                                    </button>

                                    <!-- Progress Indicators -->
                                    <div class="flex gap-1.5">
                                        <button v-for="(testimonial, index) in testimonials" :key="index"
                                            @click="currentIndex = index" :class="[
                                                'h-1 rounded-full transition-all duration-300 cursor-pointer',
                                                index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/25 hover:bg-white/40'
                                            ]" :aria-label="`Go to testimonial ${index + 1}`" />
                                    </div>

                                    <button
                                        class="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group"
                                        @click="nextTestimonial" aria-label="Next testimonial">
                                        <span
                                            class="material-symbols-outlined group-hover:translate-x-0.5 transition-transform !text-xl">
                                            arrow_forward
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Image Side -->
                        <div class="relative h-[280px] lg:h-auto order-1 lg:order-2 overflow-hidden group">
                            <!-- Image -->
                            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                :style="{ backgroundImage: `url('${currentTestimonial.image}')` }"
                                :aria-label="currentTestimonial.imageAlt" />

                            <!-- Gradient Overlay -->
                            <div
                                class="absolute inset-0 bg-linear-to-t lg:bg-linear-to-r from-surface via-surface/20 to-transparent" />

                            <!-- Image Badges -->
                            <div class="absolute top-4 right-4 flex flex-col gap-2">
                                <div
                                    class="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
                                    <span class="material-symbols-outlined text-white !text-sm">photo_camera</span>
                                    <span class="text-white text-xs font-semibold tracking-wide">Guest Photo</span>
                                </div>
                            </div>

                            <!-- Bottom Info Badge -->
                            <div
                                class="absolute bottom-4 left-4 right-4 bg-black/30 backdrop-blur-md border border-white/10 px-4 py-3 rounded-xl">
                                <div class="flex items-center justify-between text-white/90">
                                    <div class="flex items-center gap-2">
                                        <span class="material-symbols-outlined !text-lg">place</span>
                                        <span class="text-sm font-medium">{{ currentTestimonial.hotelLocation }}</span>
                                    </div>
                                    <div class="text-xs text-white/60">{{ currentTestimonial.stayDate }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Preview Cards Grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
                    <!-- Static Preview Cards -->
                    <div v-for="review in previewReviews" :key="review.id"
                        class="bg-surface/50 border border-white/10 p-5 rounded-xl hover:bg-surface/60 hover:border-primary/30 transition-all duration-300 cursor-pointer group">
                        <div class="flex justify-between items-start mb-3">
                            <div class="flex gap-0.5 text-accent">
                                <span v-for="i in 5" :key="i" class="material-symbols-outlined !text-base">star</span>
                            </div>
                            <span
                                class="material-symbols-outlined text-white/15 group-hover:text-primary/40 transition-colors">
                                format_quote
                            </span>
                        </div>
                        <p class="text-white/75 font-display italic text-sm leading-relaxed line-clamp-2 mb-3">
                            "{{ review.quote }}"
                        </p>
                        <div class="flex items-center gap-2">
                            <p class="text-text-secondary text-xs font-semibold">{{ review.author }}</p>
                            <span class="material-symbols-outlined text-emerald-400/70 !text-xs">verified</span>
                        </div>
                    </div>

                    <!-- Call to Action Card -->
                    <div
                        class="bg-gradient-to-br from-primary/15 to-surface/50 border border-primary/20 p-5 rounded-xl flex flex-col justify-center items-center text-center hover:border-primary/40 transition-all duration-300 group">
                        <span
                            class="material-symbols-outlined text-primary !text-3xl mb-2 group-hover:scale-110 transition-transform">
                            auto_awesome
                        </span>
                        <p class="text-white font-display text-base mb-2">Share Your Story</p>
                        <p class="text-white/50 text-xs mb-3">Be our next featured guest</p>
                        <NuxtLink to="#"
                            class="text-primary hover:text-white font-semibold text-sm uppercase tracking-wider flex items-center gap-1 transition-colors group-hover:gap-2 duration-300">
                            Book Now
                            <span class="material-symbols-outlined !text-base">arrow_forward</span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
interface Testimonial {
    quote: string
    name: string
    location: string
    image: string
    imageAlt: string
    stayDate: string
    roomType: string
    nightsStayed: number
    hotelLocation: string
}

interface PreviewReview {
    id: number
    quote: string
    author: string
}

const currentIndex = ref(0)

const testimonials = ref<Testimonial[]>([
    {
        quote: "The red carpet treatment wasn't just a slogan; the staff made us feel like actual celebrities from the moment we arrived.",
        name: "Sarah Jenkins",
        location: "London, United Kingdom",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
        imageAlt: "Woman relaxing by a luxury pool with a cocktail at sunset",
        stayDate: "October 2024",
        roomType: "Presidential Suite",
        nightsStayed: 4,
        hotelLocation: "The Star Hotel, Beverly Hills"
    },
    {
        quote: "A cinematic escape from reality. Every detail was picture perfect and exceeded our expectations.",
        name: "Michael Thompson",
        location: "New York, USA",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
        imageAlt: "Luxury hotel interior with elegant decor",
        stayDate: "September 2024",
        roomType: "Deluxe Ocean View",
        nightsStayed: 3,
        hotelLocation: "The Star Resort, Miami"
    },
    {
        quote: "Luxury redefined. The view, the service, the ambiance—absolute 5 stars in every aspect.",
        name: "Elena Rodriguez",
        location: "Singapore",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
        imageAlt: "Panoramic hotel view at night",
        stayDate: "November 2024",
        roomType: "Penthouse Suite",
        nightsStayed: 5,
        hotelLocation: "The Star Tower, Dubai"
    }
])

const previewReviews = ref<PreviewReview[]>([
    {
        id: 1,
        quote: "A cinematic escape from reality. Every detail was picture perfect.",
        author: "Michael T., New York"
    },
    {
        id: 2,
        quote: "Luxury redefined. The view, the service, the ambiance—absolute 5 stars.",
        author: "Elena R., Singapore"
    }
])

const currentTestimonial = computed(() => testimonials.value[currentIndex.value]!)

const nextTestimonial = () => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
}

const previousTestimonial = () => {
    currentIndex.value = currentIndex.value === 0
        ? testimonials.value.length - 1
        : currentIndex.value - 1
}

// Auto-play carousel
let interval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
    interval = setInterval(nextTestimonial, 6000)
})

onUnmounted(() => {
    if (interval) clearInterval(interval)
})
</script>

<style scoped>
.material-symbols-outlined {
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

/* Smooth transitions */
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
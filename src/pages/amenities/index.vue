<template>
    <div
        class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-white/90">
        <div class="layout-container flex h-full grow flex-col">
            <div class="px-4 md:px-12 lg:px-24 flex flex-1 justify-center py-5">
                <div class="layout-content-container flex flex-col max-w-[1200px] flex-1">
                    <!-- Main Content -->
                    <main class="flex flex-col gap-16 md:gap-24 py-16 md:py-20">
                        <!-- Amenities Section -->
                        <section class="flex flex-col gap-16 md:gap-24">
                            <!-- Cliff Pool -->
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div class="flex-1">
                                    <img alt="A modern glass-edged rooftop pool overlooking a vibrant cityscape"
                                        class="w-full h-full object-cover rounded-xl shadow-2xl shadow-black/30"
                                        :src="amenities.cliffPool.image" />
                                </div>
                                <div class="flex-1 flex flex-col gap-8">
                                    <div class="flex flex-col gap-4">
                                        <h3 class="text-4xl font-bold tracking-tight text-white">{{
                                            amenities.cliffPool.title }}</h3>
                                        <p class="text-lg text-white/70">
                                            {{ amenities.cliffPool.description }}
                                        </p>
                                    </div>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-white/10">
                                        <div class="flex flex-col gap-2">
                                            <p class="text-primary text-sm font-bold tracking-wider uppercase">Operating
                                                Hours</p>
                                            <p class="text-white text-lg">{{ amenities.cliffPool.hours }}</p>
                                        </div>
                                        <div class="flex flex-col gap-2">
                                            <p class="text-primary text-sm font-bold tracking-wider uppercase">Guest
                                                Benefits</p>
                                            <p class="text-white text-lg">{{ amenities.cliffPool.benefits }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Observatory Deck -->
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div class="flex-1 flex flex-col gap-8 lg:order-2">
                                    <div class="flex flex-col gap-4">
                                        <h3 class="text-4xl font-bold tracking-tight text-white">{{
                                            amenities.observatory.title }}</h3>
                                        <p class="text-lg text-white/70">
                                            {{ amenities.observatory.description }}
                                        </p>
                                    </div>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-white/10">
                                        <div class="flex flex-col gap-2">
                                            <p class="text-primary text-sm font-bold tracking-wider uppercase">Operating
                                                Hours</p>
                                            <p class="text-white text-lg">{{ amenities.observatory.hours }}</p>
                                        </div>
                                        <div class="flex flex-col gap-2">
                                            <p class="text-primary text-sm font-bold tracking-wider uppercase">Guest
                                                Benefits</p>
                                            <p class="text-white text-lg">{{ amenities.observatory.benefits }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-1 lg:order-1">
                                    <img alt="A panoramic view of a city skyline from a high-rise observation deck at twilight"
                                        class="w-full h-full object-cover rounded-xl shadow-2xl shadow-black/30"
                                        :src="amenities.observatory.image" />
                                </div>
                            </div>

                        </section>
                    </main>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
    layout: 'hollywood'
})

const heroStyle = computed(() => ({
    backgroundImage: `linear-gradient(rgba(29, 16, 35, 0.4) 0%, rgba(29, 16, 35, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8pUIfqvXJSQeJnCBX3OPeeuCldKWV5lJjDoBHCzo_WSwM8aBW6mr_tkNsnwTmle3lbUCmAW4cZeAW4TidIL0N_b8vauBsqZtdLLP-xUGtKmhozkPVvY40QZB6UDgUB7G08p6KcjYjwJU6PQhxCr5Ja_TZFgU97eAX4myRXJQ7GuX7lG4rvplH7cGs5H8_xvZqa3xmgQj9RLLP3Krxv2b-a3PmsXyCI1ZSafzl7U8IE-ObphalcPHGysfBzE_51ctCerXutp9MRwU")`
}))

const amenities = {
    cliffPool: {
        title: 'CLIFF POOL',
        description: 'Immerse yourself in our glass-edged rooftop pool, a serene oasis above the bustling city. Enjoy curated playlists, unforgettable sunsets, and breathtaking skyline views that create an unparalleled atmosphere of sophisticated relaxation.',
        hours: '9 AM to 10 PM',
        benefits: 'Complimentary towels, toiletries & entry.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZYCIpeK3s3McDaHc5Y43wgbt8PnFEpL2CjSqbyoIDtdIsGK2vUM9R2onoAoyUxiDtdTfbyzZGFbo-cYf6_cnx29Q_yU5cMSopPVnDywiVf0zCWHYuFWwzrnhpOAssE7KprvGSpU4AEbL76cNUuH1Gq9SFKFMv8viiZCNsOxQOTOzVDFW3fHbluexrLrtLjxfY3jt0gxe_tQDYtkGQtjSpC7PJ5QxV3H2IwAEcMKJyJ6snhzi4eyUcJtBKIj6aLBHPQoq9p1InPuk'
    },
    observatory: {
        title: 'OBSERVATORY DECK',
        description: 'Ascend to the pinnacle of luxury on our exclusive rooftop deck. Experience the city like never before, with stunning 360° panoramic views that stretch from the golden hues of sunrise to the glittering tapestry of the city at night.',
        hours: '6 AM to 8 PM',
        benefits: 'Complimentary entry for all hotel guests.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ7mIY89rZPLVAzOR1UKGbvvlLYy7L-wLpDe8glNdroRo49Q_ojJxD9WFDEHcp2XSEpAft9xTxbAPvwX7ZYaOM5w3-WA3AslHL9JgeRdWw6s8VXJ7YHPX1W_WCFvXUJS5kz9CEGsqcFreRMBNg6UaQEFTcTMbxZhM8CKdWmqlMYgUj9o9azFEtn3khJ8QF9-VaVdFLnJ3whKltx5gp098DAbuY9UHFpdRHL6xGwQhQENTRYrbj6K8afCu94T7k5C1l1Y5pkMz2zrE'
    }
}

const footerLinks = [
    { text: 'Contact Us', to: '/contact' },
    { text: 'Privacy Policy', to: '/privacy' },
    { text: 'Terms of Service', to: '/terms' },
    { text: 'Careers', to: '/careers' }
]

const socialLinks = [
    { icon: 'public', href: '#' },
    { icon: 'group', href: '#' },
    { icon: 'rocket_launch', href: '#' },
    { icon: 'subscriptions', href: '#' }
]

useHead({
    title: 'Planet Hollywood Amenities - Enhanced Premium',
    htmlAttrs: {
        lang: 'en',
        class: 'dark'
    },
    link: [
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: ''
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap'
        }
    ]
})
</script>

<style scoped>
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>
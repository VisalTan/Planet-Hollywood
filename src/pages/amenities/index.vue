<template>
    <div
        class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-white/90">
        <div class="layout-container flex h-full grow flex-col">
            <div class="px-4 md:px-12 lg:px-24 flex flex-1 justify-center py-5">
                <div class="layout-content-container flex flex-col max-w-[1200px] flex-1">
                    <main class="flex flex-col gap-16 md:gap-24 py-16 md:py-20">
                        <section class="flex flex-col gap-16 md:gap-24">
                            <AmenityItem :amenity="amenityList.cliffPool" />
                            <AmenityItem :amenity="amenityList.observatory" :reverse="true" />
                        </section>
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import AmenityItem from './view/components/AmenityItem.vue'

definePageMeta({
    layout: 'hollywood'
})

const amenityList = {
    cliffPool: {
        title: 'CLIFF POOL',
        alt: 'A modern glass-edged rooftop pool overlooking a vibrant cityscape',
        description: 'Immerse yourself in our glass-edged rooftop pool, a serene oasis above the bustling city. Enjoy curated playlists, unforgettable sunsets, and breathtaking skyline views that create an unparalleled atmosphere of sophisticated relaxation.',
        hours: '9 AM to 10 PM',
        benefits: 'Complimentary towels, toiletries & entry.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZYCIpeK3s3McDaHc5Y43wgbt8PnFEpL2CjSqbyoIDtdIsGK2vUM9R2onoAoyUxiDtdTfbyzZGFbo-cYf6_cnx29Q_yU5cMSopPVnDywiVf0zCWHYuFWwzrnhpOAssE7KprvGSpU4AEbL76cNUuH1Gq9SFKFMv8viiZCNsOxQOTOzVDFW3fHbluexrLrtLjxfY3jt0gxe_tQDYtkGQtjSpC7PJ5QxV3H2IwAEcMKJyJ6snhzi4eyUcJtBKIj6aLBHPQoq9p1InPuk'
    },
    observatory: {
        title: 'OBSERVATORY DECK',
        alt: 'A panoramic view of a city skyline from a high-rise observation deck at twilight',
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

.gradient-text {
  background: linear-gradient(135deg, #ec4899, #06b6d4, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.neon-text-purple {
  color: #a855f7;
  text-shadow: 0 0 10px #a855f7;
}
</style>
<template>
  <div class="relative flex min-h-screen w-full flex-col bg-black font-display text-white antialiased">
    <div class="h-16"></div> <!-- Space for header -->
    
    <!-- Main Content -->
    <main class="flex flex-1 flex-col items-center">
      <div class="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <!-- Restaurant Sections -->
        <div class="mt-24 mb-24 flex flex-col gap-24 lg:mt-32 lg:gap-32">
          <RestaurantSection :restaurant="restaurants.cafeHollywood" :reverse="true" />
          <RestaurantSection :restaurant="restaurants.marqueeBar" />
          <RestaurantSection :restaurant="restaurants.gordonRamsay" :reverse="true" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import RestaurantSection from './view/components/RestaurantSection.vue'

definePageMeta({
  layout: 'hollywood'
})

useHead({
  title: 'Planet Hollywood Dining',
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
      href: 'https://fonts.googleapis.com/css2?family=Spline+Sans:wght@400;500;700&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap'
    }
  ]
})

const restaurants = {
  cafeHollywood: {
    id: 'cafe-hollywood',
    title: 'CAFÉ HOLLYWOOD',
    description: 'Experience all-day dining amidst a collection of classic Hollywood memorabilia. Our casual yet upscale vibe is perfect for any occasion, from a quick breakfast to a leisurely dinner.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEWaooTh7cqopt8NhQvz9eUglwP7BJIToJkZcSl94ARXL-GJK0Sfy6mQW7IQndTefVlrhgwAJGDhI1vWuSnNiB4iUkuY5c0gmmI0IE48ljxFy8Ld7LT-baqpzV18G8Dw3DbTbhMSLwR5FDwod9k_WA6FSP1OGi44EGOlYyC3dfFjuRruYBy_rLIxaYg0pUSEGuWmp_0hK_dzmYeHal8teauDCWDZWl_jxkybv1hzr8GHmByiNPKLa1cGKrH73yfBK05TIAMEq12fA',
    cuisine: 'International / All-Day',
    cuisineIcon: 'restaurant_menu',
    hours: '7:00 AM - 11:00 PM',
    capacity: '120 Guests',
    reservations: '(123) 456-7890'
  },
  marqueeBar: {
    id: 'marquee-bar',
    title: 'THE MARQUEE BAR',
    description: 'The vibrant social hub of Planet Hollywood. Unwind in our chic lounge atmosphere with signature cocktails, premium spirits, and a curated selection of bar bites.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAntxmOfLC8LGrr6IXEhJP5W9tMiYbdK2djUX76Nmj7meUXJYUfrnPe9PQYQLmA4KX9wxca9z08BFRS6G4u-XgkMBeSJ262lsgQ_bsO-Y6Xszhg1HDZaQo8u54Gx9ykpto3HVi6iA95r1TlcylpOLZIX65Tsl68yYEvTJeJ3fGZ2BnO-eTMlRMYAQjDYYB2kTR-7sT7y0aVWan4BY4aeT9LW_Iv_cX4HMW9tNgdDcjXXWCPef1hSH8OyXy1Z71fFf4fpZZYEZGrSPs',
    cuisine: 'Bar Bites / Cocktails',
    cuisineIcon: 'local_bar',
    hours: '4:00 PM - 2:00 AM',
    capacity: '80 Guests',
    reservations: '(123) 456-7891'
  },
  gordonRamsay: {
    id: 'gordon-ramsay-burger',
    title: 'GORDON RAMSAY BURGER',
    description: 'Indulge in the world-famous chef\'s take on a classic. Featuring gourmet burgers, hand-cut fries, and decadent milkshakes in a high-energy, rock-and-roll environment.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqv5u3Kf1eNIRc6VCCqJEP7B72pUarf9i1s_bkxjST1ve07V2gelrdkHKaEd2J9v3BiaaA1cvqFNfFnxXrmg2wYz51MQQwzU4zwM-pNrcin2YfZ1mDw7zzw9Tef4D81Met3L1kzvra8fmkd8MPf3kg5zvSa24YH7H-FL1MiLTFEQwvZOxF41L7pGDW6ZVj78Sq9U6YYVhR6qHlQVzVT3rWvkEr0rw7WsZxVyGFMGjPUV-rv5W99KHqTLaOl8EQrAqhgc6cikPFxRs',
    cuisine: 'Gourmet Burgers',
    cuisineIcon: 'lunch_dining',
    hours: '11:00 AM - 12:00 AM',
    capacity: '150 Guests',
    reservations: '(123) 456-7892'
  }
}
</script>

<style scoped>
.neon-text-purple {
  color: #a855f7;
  text-shadow: 0 0 10px #a855f7;
}
</style>
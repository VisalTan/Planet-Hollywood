<template>
  <div class="relative flex min-h-screen w-full flex-col bg-black font-display text-white antialiased">

    <!-- Main Content -->
    <main class="flex flex-1 flex-col items-center">
      <div class="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <!-- Restaurant Sections -->
        <div class="mt-24 flex flex-col gap-24 lg:mt-32 lg:gap-32">
          <!-- Café Hollywood -->
          <section class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16" id="cafe-hollywood">
            <div class="order-2 lg:order-1">
              <h2 class="text-3xl font-bold tracking-tight text-white md:text-4xl">CAFÉ HOLLYWOOD</h2>
              <p class="mt-4 text-base font-normal leading-relaxed text-white/80">
                Experience all-day dining amidst a collection of classic Hollywood memorabilia. Our casual yet upscale
                vibe is perfect for any occasion, from a quick breakfast to a leisurely dinner.
              </p>
              <div class="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-2">
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined neon-text-purple text-2xl">restaurant_menu</span>
                  <div>
                    <h3 class="text-sm font-semibold text-white/70">Cuisine</h3>
                    <p class="font-medium text-white">International / All-Day</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined neon-text-purple text-2xl">schedule</span>
                  <div>
                    <h3 class="text-sm font-semibold text-white/70">Hours</h3>
                    <p class="font-medium text-white">7:00 AM - 11:00 PM</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined neon-text-purple text-2xl">groups</span>
                  <div>
                    <h3 class="text-sm font-semibold text-white/70">Capacity</h3>
                    <p class="font-medium text-white">120 Guests</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined neon-text-purple text-2xl">phone</span>
                  <div>
                    <h3 class="text-sm font-semibold text-white/70">Reservations</h3>
                    <p class="font-medium text-white">(123) 456-7890</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="order-1 lg:order-2 h-80 w-full overflow-hidden rounded-xl sm:h-96 lg:h-auto lg:aspect-4/3">
              <div
                class="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out hover:scale-105"
                style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAEWaooTh7cqopt8NhQvz9eUglwP7BJIToJkZcSl94ARXL-GJK0Sfy6mQW7IQndTefVlrhgwAJGDhI1vWuSnNiB4iUkuY5c0gmmI0IE48ljxFy8Ld7LT-baqpzV18G8Dw3DbTbhMSLwR5FDwod9k_WA6FSP1OGi44EGOlYyC3dfFjuRruYBy_rLIxaYg0pUSEGuWmp_0hK_dzmYeHal8teauDCWDZWl_jxkybv1hzr8GHmByiNPKLa1cGKrH73yfBK05TIAMEq12fA');">
              </div>
            </div>
          </section>

          <!-- The Marquee Bar -->
          <section class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16" id="marquee-bar">
            <div class="h-80 w-full overflow-hidden rounded-xl sm:h-96 lg:h-auto lg:aspect-4/3">
              <div
                class="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out hover:scale-105"
                style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAntxmOfLC8LGrr6IXEhJP5W9tMiYbdK2djUX76Nmj7meUXJYUfrnPe9PQYQLmA4KX9wxca9z08BFRS6G4u-XgkMBeSJ262lsgQ_bsO-Y6Xszhg1HDZaQo8u54Gx9ykpto3HVi6iA95r1TlcylpOLZIX65Tsl68yYEvTJeJ3fGZ2BnO-eTMlRMYAQjDYYB2kTR-7sT7y0aVWan4BY4aeT9LW_Iv_cX4HMW9tNgdDcjXXWCPef1hSH8OyXy1Z71fFf4fpZZYEZGrSPs');">
              </div>
            </div>
            <div>
              <h2 class="text-3xl font-bold tracking-tight text-white md:text-4xl">THE MARQUEE BAR</h2>
              <p class="mt-4 text-base font-normal leading-relaxed text-white/80">
                The vibrant social hub of Planet Hollywood. Unwind in our chic lounge atmosphere with signature
                cocktails, premium spirits, and a curated selection of bar bites.
              </p>
              <div class="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-2">
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined neon-text-purple text-2xl">local_bar</span>
                  <div>
                    <h3 class="text-sm font-semibold text-white/70">Cuisine</h3>
                    <p class="font-medium text-white">Bar Bites / Cocktails</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined neon-text-purple text-2xl">schedule</span>
                  <div>
                    <h3 class="text-sm font-semibold text-white/70">Hours</h3>
                    <p class="font-medium text-white">4:00 PM - 2:00 AM</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined neon-text-purple text-2xl">groups</span>
                  <div>
                    <h3 class="text-sm font-semibold text-white/70">Capacity</h3>
                    <p class="font-medium text-white">80 Guests</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined neon-text-purple text-2xl">phone</span>
                  <div>
                    <h3 class="text-sm font-semibold text-white/70">Reservations</h3>
                    <p class="font-medium text-white">(123) 456-7891</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Gordon Ramsay Burger -->
          <section class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16" id="gordon-ramsay-burger">
            <div class="order-2 lg:order-1">
              <h2 class="text-3xl font-bold tracking-tight text-white md:text-4xl">GORDON RAMSAY BURGER</h2>
              <p class="mt-4 text-base font-normal leading-relaxed text-white/80">
                Indulge in the world-famous chef's take on a classic. Featuring gourmet burgers, hand-cut fries, and
                decadent milkshakes in a high-energy, rock-and-roll environment.
              </p>
              <div class="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-2">
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined neon-text-purple text-2xl">lunch_dining</span>
                  <div>
                    <h3 class="text-sm font-semibold text-white/70">Cuisine</h3>
                    <p class="font-medium text-white">Gourmet Burgers</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined neon-text-purple text-2xl">schedule</span>
                  <div>
                    <h3 class="text-sm font-semibold text-white/70">Hours</h3>
                    <p class="font-medium text-white">11:00 AM - 12:00 AM</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined neon-text-purple text-2xl">groups</span>
                  <div>
                    <h3 class="text-sm font-semibold text-white/70">Capacity</h3>
                    <p class="font-medium text-white">150 Guests</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined neon-text-purple text-2xl">phone</span>
                  <div>
                    <h3 class="text-sm font-semibold text-white/70">Reservations</h3>
                    <p class="font-medium text-white">(123) 456-7892</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="order-1 lg:order-2 h-80 w-full overflow-hidden rounded-xl sm:h-96 lg:h-auto lg:aspect-4/3">
              <div
                class="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out hover:scale-105"
                style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqv5u3Kf1eNIRc6VCCqJEP7B72pUarf9i1s_bkxjST1ve07V2gelrdkHKaEd2J9v3BiaaA1cvqFNfFnxXrmg2wYz51MQQwzU4zwM-pNrcin2YfZ1mDw7zzw9Tef4D81Met3L1kzvra8fmkd8MPf3kg5zvSa24YH7H-FL1MiLTFEQwvZOxF41L7pGDW6ZVj78Sq9U6YYVhR6qHlQVzVT3rWvkEr0rw7WsZxVyGFMGjPUV-rv5W99KHqTLaOl8EQrAqhgc6cikPFxRs');">
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>

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
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
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
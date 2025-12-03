<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-black font-sans">
    <div class="layout-container flex h-full grow flex-col">
      <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <main class="flex flex-col">
          <!-- Hero Section -->
          <section class="py-12 sm:py-16 lg:py-24">
            <div
              class="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl sm:rounded-2xl items-center justify-center px-6 sm:px-8 lg:px-12 py-12 sm:py-16"
              style="background-image: linear-gradient(rgba(28, 16, 34, 0.4) 0%, rgba(28, 16, 34, 0.7) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLcUBwiviQjY4GJEU0nQ7h9wOIcOGYObKOQJTLPBZLVqiJwmVxRV93FwVO5RqcyH8kdX4HXeCLYeR3pSqYcBOXHQMT9uR_ikJeRWJ5yjWy9v64OMHt5oLwsJ6XTd3rmEFR8MfEvoMv5HA_xuU4Z079a-xMVTruwb0DYTTKVJ38MuNUVqrBE1bQXVFhRc8tVR1OSuIR48V2JtHefLKWiYEeabwcsqJrqCI2JPx12gPZ0hnG1zanU5LlKPiSYRuStQf9EZabL9Bkx7c')">
              <div class="flex flex-col gap-4 sm:gap-6 text-center max-w-3xl">
                <h1 class="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                  Host
                  Unforgettable Events at Planet Hollywood</h1>
                <h2 class="text-white text-base sm:text-lg lg:text-xl font-normal leading-relaxed opacity-90">Discover
                  our premier event
                  spaces, featuring signature technology and unparalleled style for your next meeting or
                  celebration.</h2>
              </div>
              <button
                class="mt-4 flex min-w-[140px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 sm:h-14 px-6 sm:px-8 bg-linear-to-r from-purple-600 to-pink-600 text-white text-base sm:text-lg font-bold leading-normal tracking-[0.015em] hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                href="#contact">
                <span class="truncate">Enquire Now</span>
              </button>
            </div>
          </section>

          <!-- FeatureSection -->
          <section class="py-12 sm:py-16 lg:py-20">
            <div class="mb-8 sm:mb-12">
              <h2 class="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-[-0.015em]">
                Experience Cutting-Edge Technology</h2>
              <p class="text-neutral-400 text-base sm:text-lg mt-3">Our dynamic event spaces are
                equipped with the latest technology to ensure your event is a seamless success.</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div class="flex flex-1 gap-4 rounded-xl border border-white/10 bg-surface/50 p-6 flex-col">
                <div class="text-primary">
                  <span class="text-4xl">🎬</span>
                </div>
                <div class="flex flex-col gap-1">
                  <h3 class="text-white text-lg font-bold leading-tight">State-of-the-art AV</h3>
                  <p class="text-purple-400 text-sm font-normal leading-normal">Crystal-clear audio and visual systems
                    for impactful presentations.</p>
                </div>
              </div>
              <div class="flex flex-1 gap-4 rounded-xl border border-white/10 bg-surface/50 p-6 flex-col">
                <div class="text-primary">
                  <span class="text-4xl">💡</span>
                </div>
                <div class="flex flex-col gap-1">
                  <h3 class="text-white text-lg font-bold leading-tight">Advanced Lighting</h3>
                  <p class="text-purple-400 text-sm font-normal leading-normal">Customizable lighting to create the
                    perfect atmosphere for any occasion.</p>
                </div>
              </div>
              <div class="flex flex-1 gap-4 rounded-xl border border-white/10 bg-surface/50 p-6 flex-col">
                <div class="text-primary">
                  <span class="text-4xl">📶</span>
                </div>
                <div class="flex flex-col gap-1">
                  <h3 class="text-white text-lg font-bold leading-tight">High-Speed Wi-Fi</h3>
                  <p class="text-purple-400 text-sm font-normal leading-normal">Reliable, high-speed internet access
                    for all your guests and event needs.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Star Room Section -->
          <section class="py-12 sm:py-16 lg:py-20" id="star-room">
            <div
              class="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl sm:rounded-2xl min-h-[400px] shadow-lg"
              style="background-image: linear-gradient(0deg, rgba(28, 16, 34, 0.8) 0%, rgba(28, 16, 34, 0) 40%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCMtbb_b1OuPgDnV6mBDnpjIemxDHb8V52nveHnTnMqk31peXKvw1rWZsdhVdlOXDOaByynH0xtA62l3d2r4RFyXO6ZFezPKYhcDgyYy4fgZYokopNq7zquclJ2ZtXm6zvnYmzqpXOtWZynS6rFt0vWmhmGyeU7XGIYCldN5jiyYPfs0m22ruEModzoAbtanCGPPQQVK7b1E1pGT8-DhbcOSYbhE-VM7HMgKIVbA9i8sL-IJDfIreIs5vqV-oqpa3WqzRgYFuMbv8I')">
              <div class="flex p-6 md:p-8">
                <h2 class="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">The Star
                  Room</h2>
              </div>
            </div>
            <p
              class="text-white/80 text-base sm:text-lg font-normal leading-relaxed mt-6 text-center max-w-4xl mx-auto">
              Our premier venue, The Star Room, offers over 600 square meters of dynamic, flexible space, making it
              perfect for large-scale conferences, gala dinners, and high-impact corporate events. The centerpiece is
              a stunning 8-meter high LED screen, guaranteed to leave a lasting impression.
            </p>
          </section>

          <!-- Meetings Section -->
          <section class="py-12 sm:py-16 lg:py-20" id="meetings">
            <div class="mb-8 sm:mb-12">
              <h2 class="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-[-0.015em]">
                Distinctive
                Meeting Rooms</h2>
              <p class="text-neutral-400 text-base sm:text-lg mt-3">Five sophisticated
                spaces designed for productivity and privacy, all featuring natural light from floor-to-ceiling
                windows.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div class="rounded-xl border border-white/10 bg-[#2b1834]/50 p-6 flex flex-col gap-4">
                <h3 class="text-primary text-xl font-bold">Boardroom 1, 2 & 3</h3>
                <p class="text-purple-400 text-sm">Ideal for executive meetings and intimate brainstorming sessions.
                </p>
                <div class="text-sm text-white/90 space-y-2 mt-auto pt-4 border-t border-white/10">
                  <p><strong class="font-semibold">Size:</strong> 45 sqm</p>
                  <p><strong class="font-semibold">Boardroom Style:</strong> 12 guests</p>
                  <p><strong class="font-semibold">Theatre Style:</strong> 25 guests</p>
                </div>
              </div>
              <div class="rounded-xl border border-white/10 bg-surface/50 p-6 flex flex-col gap-4">
                <h3 class="text-primary text-xl font-bold">Executive Suite</h3>
                <p class="text-purple-400 text-sm">A versatile suite for high-level discussions and private client
                  meetings.</p>
                <div class="text-sm text-white/90 space-y-2 mt-auto pt-4 border-t border-white/10">
                  <p><strong class="font-semibold">Size:</strong> 80 sqm</p>
                  <p><strong class="font-semibold">Boardroom Style:</strong> 20 guests</p>
                  <p><strong class="font-semibold">Theatre Style:</strong> 50 guests</p>
                </div>
              </div>
              <div
                class="rounded-xl border border-white/10 bg-surface/50 p-6 flex flex-col gap-4 md:col-span-2 lg:col-span-1">
                <h3 class="text-primary text-xl font-bold">Skyview 1 & 2</h3>
                <p class="text-purple-400 text-sm">Spacious and bright, perfect for workshops and medium-sized
                  presentations.</p>
                <div class="text-sm text-white/90 space-y-2 mt-auto pt-4 border-t border-white/10">
                  <p><strong class="font-semibold">Size:</strong> 120 sqm</p>
                  <p><strong class="font-semibold">Boardroom Style:</strong> 40 guests</p>
                  <p><strong class="font-semibold">Theatre Style:</strong> 100 guests</p>
                </div>
              </div>
            </div>
          </section>

          <!-- The Hall of PHame Section -->
          <section class="py-12 sm:py-16 lg:py-20" id="hall-of-phame">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div class="order-2 lg:order-1">
                <img class="rounded-xl sm:rounded-2xl object-cover w-full h-80 lg:h-full shadow-lg"
                  alt="A modern event space with floor-to-ceiling glass walls overlooking a cityscape at dusk."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpVMZ68XTlsNXQANqcCd6EEwEF_yKqGcAxpV_INeEEY8viYU8_P_N3uLymQcPeMeTePl0VC9mbDcszvjwKUdoImj8ATz5zc7Qo5v97uVVAh_DtQRZlrLx-1BshyNhHsh2tab5j_sbulcXXiFir_ym6iN1F0Dn3xxJmA2FK8vL_qzLm3_n-EbrVLOutvr__JPR5mF2swFswEGNPl2-7hTwIdX2xPshDTtCtdXqhOhfgB3GpIdM998RDG2Vn0KFCJ7fZwGutVNVhXe0" />
              </div>
              <div class="order-1 lg:order-2 flex flex-col gap-6">
                <div class="flex flex-col gap-2">
                  <h2 class="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-[-0.015em]">
                    The Hall of
                    PHame</h2>
                  <p class="text-white/80 text-base sm:text-lg font-normal leading-relaxed">Located on the 5th floor,
                    this
                    spectacular venue boasts floor-to-ceiling glass walls with panoramic city views and a
                    state-of-the-art transparent LED screen, perfect for making a grand statement.</p>
                </div>
                <div class="grid grid-cols-2 gap-4 text-sm">
                  <div class="rounded-lg bg-surface/50 p-4 border border-white/10"><strong
                      class="block text-white">Banquet</strong><span class="text-purple-400">150 guests</span></div>
                  <div class="rounded-lg bg-surface/50 p-4 border border-white/10"><strong
                      class="block text-white">Theatre</strong><span class="text-purple-400">250 guests</span></div>
                  <div class="rounded-lg bg-surface/50 p-4 border border-white/10"><strong
                      class="block text-white">Classroom</strong><span class="text-purple-400">120 guests</span></div>
                  <div class="rounded-lg bg-surface/50 p-4 border border-white/10"><strong
                      class="block text-white">Viking</strong><span class="text-purple-400">80 guests</span></div>
                  <div class="rounded-lg bg-surface/50 p-4 col-span-2 border border-white/10"><strong
                      class="block text-white">Boardroom</strong><span class="text-purple-400">60 guests</span></div>
                </div>
              </div>
            </div>
          </section>

          <!-- Contact Section -->
          <section class="py-12 sm:py-16 lg:py-20" id="contact">
            <div
              class="bg-surface/50 border border-white/10 rounded-xl sm:rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 shadow-2xl">
              <div class="w-full md:w-1/2 flex flex-col gap-4">
                <h2 class="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Plan Your Next Event
                </h2>
                <p class="text-white/80 text-lg sm:text-xl font-normal leading-relaxed">Our dedicated events team is
                  ready to
                  help you create an extraordinary experience. Fill out the form, and we'll be in touch shortly.</p>
                <div class="mt-6 space-y-3 text-white/90">
                  <p class="flex items-center gap-3"><span class="text-primary text-xl">📞</span> <span>+1 234 567
                      890</span></p>
                  <p class="flex items-center gap-3"><span class="text-primary text-xl">✉️</span>
                    <span>events.asia@planethollywood.com</span>
                  </p>
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <div class="flex flex-col gap-4">
                  <input v-model="form.name"
                    class="w-full h-12 px-4 rounded-lg bg-surface border border-white/10 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary/50 focus:outline-none"
                    placeholder="Full Name" type="text" />
                  <input v-model="form.email"
                    class="w-full h-12 px-4 rounded-lg bg-surface border border-white/10 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary/50 focus:outline-none"
                    placeholder="Email Address" type="email" />
                  <input v-model="form.eventType"
                    class="w-full h-12 px-4 rounded-lg bg-surface border border-white/10 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary/50 focus:outline-none"
                    placeholder="Event Type (e.g., Conference, Wedding)" type="text" />
                  <textarea v-model="form.message"
                    class="w-full h-28 p-4 rounded-lg bg-surface border border-white/10 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary/50 focus:outline-none"
                    placeholder="Your Message"></textarea>
                  <button @click="handleSubmit"
                    class="flex w-full md:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-linear-to-r from-purple-600 to-pink-600 text-white text-base font-bold leading-normal tracking-[0.015em] hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
                    <span class="truncate">Submit Enquiry</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'hollywood',
  title: 'Events | Planet Hollywood Phnom Penh',
  meta: [
    {
      name: 'description',
      content: 'Discover premier event spaces at Planet Hollywood Phnom Penh, featuring cutting-edge technology and unparalleled style for your next meeting or celebration.'
    }
  ]
})

const form = ref({
  name: '',
  email: '',
  eventType: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  // Add your form submission logic here
  alert('Thank you for your enquiry! We will be in touch shortly.')
  form.value = { name: '', email: '', eventType: '', message: '' }
}
</script>

<style scoped>
/* Add any additional custom styles here if needed */
</style>

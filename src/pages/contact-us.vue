<template>
  <div
    class="relative flex min-h-screen w-full flex-col bg-black font-display text-white overflow-hidden antialiased">
    <!-- Spacer for fixed header -->
    <div class="h-16"></div>

    <!-- Hero Section -->
    <div class="px-4 lg:px-40 flex flex-1 justify-center py-5">
      <div class="layout-content-container flex flex-col max-w-7xl flex-1 w-full">
        <div class="@container">
          <div class="@[480px]:p-4">
            <div
              class="relative flex min-h-[400px] flex-col gap-6 overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat @[480px]:gap-8 items-center justify-center p-8 text-center"
              style="background-image: linear-gradient(rgba(28, 16, 34, 0.4) 0%, rgba(28, 16, 34, 0.8) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkIlAzwMAqvaw40_VXleqg_qPe7rL-izA8pjTH8RrDxhLObWiMJEqfUidu-7XTQiG0vhFhIMTydc2EJkXiFHLEiytwBTCNHCZYSDvWSsMXBcAldHC7Lo3QEiyrjCYfjOZCn5Sz1psmHvNksimVjTJ5kmjaHMtAzc6TDw46MCdSoEDz7dNcW_NBq5PrBN-2CDUp6LgfLK8h8skHFmkyqH4hXS3PiO_18uK13KjedXW-BkxwDz95UJGEQfDk1BU9v2B1urVfn-IZ4zs');">
              <div class="flex flex-col gap-2 z-10 max-w-2xl">
                <h1 class="text-white text-4xl font-black leading-tight tracking-[-0.033em] lg:text-6xl drop-shadow-lg">
                  Connect with the Stars
                </h1>
                <h2
                  class="text-white/90 text-sm font-normal leading-normal lg:text-lg lg:leading-relaxed max-w-lg mx-auto">
                  Experience the premiere of luxury hospitality in Asia. We are here to assist with your inquiries,
                  reservations, and special requests.
                </h2>
              </div>
              <div class="z-10 mt-4 flex gap-4">
                <button
                  class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-linear-to-r from-purple-600 to-pink-600 text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <span class="truncate">Make a Reservation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="relative px-4 lg:px-40 flex flex-1 justify-center pb-20">
      <!-- Background gradients -->
      <div
        class="absolute top-0 left-0 w-full h-[600px] bg-linear-to-b from-purple-600/10 via-black to-black pointer-events-none">
      </div>
      <div
        class="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none opacity-50">
      </div>
      <div
        class="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none opacity-50">
      </div>

      <div class="relative layout-content-container flex flex-col max-w-[1280px] flex-1 w-full">
        <div class="px-4 pb-3 pt-5 border-b border-white/10 mb-8">
          <h2 class="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">Get in Touch</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 px-4">
          <!-- Left Column: Contact Info & Map -->
          <div class="lg:col-span-5 flex flex-col gap-8">
            <!-- Contact Details Cards -->
            <div class="flex flex-col gap-4">
              <h3 class="text-white text-xl font-bold">Contact Information</h3>
              <p class="text-neutral-400 text-sm mb-2">Reach out to our concierge, reservations team, or media
                relations department.</p>

              <div class="flex flex-col gap-3">
                <!-- General -->
                <div
                  class="flex gap-4 rounded-xl border border-white/10 bg-[#2b1834]/50 p-5 hover:border-purple-600/50 transition-colors group">
                  <div
                    class="text-purple-600 bg-[#1c1022] p-3 rounded-full h-fit group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <span class="material-symbols-outlined">call</span>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2 class="text-white text-base font-bold leading-tight">General Inquiries</h2>
                    <p class="text-neutral-400 text-sm font-normal leading-normal">+852 5555 0199</p>
                    <p class="text-neutral-400 text-sm font-normal leading-normal">info@planethollywood.asia</p>
                  </div>
                </div>

                <!-- Reservations -->
                <div
                  class="flex gap-4 rounded-xl border border-white/10 bg-[#2b1834]/50 p-5 hover:border-purple-600/50 transition-colors group">
                  <div
                    class="text-purple-600 bg-[#1c1022] p-3 rounded-full h-fit group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <span class="material-symbols-outlined">calendar_month</span>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2 class="text-white text-base font-bold leading-tight">Reservations</h2>
                    <p class="text-neutral-400 text-sm font-normal leading-normal">+852 5555 0200</p>
                    <p class="text-neutral-400 text-sm font-normal leading-normal">reservations@planethollywood.asia
                    </p>
                  </div>
                </div>

                <!-- Press -->
                <div
                  class="flex gap-4 rounded-xl border border-white/10 bg-[#2b1834]/50 p-5 hover:border-purple-600/50 transition-colors group">
                  <div
                    class="text-purple-600 bg-[#1c1022] p-3 rounded-full h-fit group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <span class="material-symbols-outlined">campaign</span>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2 class="text-white text-base font-bold leading-tight">Press & Media</h2>
                    <p class="text-neutral-400 text-sm font-normal leading-normal">+852 5555 0201</p>
                    <p class="text-neutral-400 text-sm font-normal leading-normal">press@planethollywood.asia</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Location / Map -->
            <div class="flex flex-col gap-4 mt-4">
              <h3 class="text-white text-xl font-bold">Visit Us</h3>
              <div class="rounded-xl overflow-hidden border border-white/10 bg-[#2b1834]/50 shadow-lg">
                <div class="w-full bg-center bg-no-repeat aspect-video bg-cover relative group cursor-pointer"
                  style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBt0lieeqg2XYxPYe761qwJ2BpZLHzgbV6HcxokteDg7BrVVK4nvbswglqB1Gd88EIOH8saFh2UUsy4xsQcXuawvhrDIrV-ave-YHlBnHxbIUrEedTH50era9WRY7iKoeRBk1dlakwMfH-RHS2oYaeliG11Gf1x-6H-C65R_X8txoilhIc5KQ4lmbDvggEWBeb48n8igTpOA5kGfo1OoXngJT6xzBjQQYszQanNsJpDKais3YbNaw2CEY8bstmAvSe-qHGHB-IA6GY');">
                  <div class="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                  <div
                    class="absolute bottom-4 left-4 bg-[#1c1022]/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-white border border-purple-600/30 flex items-center gap-1">
                    <span class="material-symbols-outlined text-sm text-purple-600">location_on</span> View on Map
                  </div>
                </div>
                <div class="p-5">
                  <p class="text-white text-base font-medium leading-normal">Planet Hollywood Asia</p>
                  <p class="text-neutral-400 text-sm font-normal leading-normal mt-1">123 Star Avenue, Entertainment
                    District, Asia</p>
                  <p class="text-white/80 text-sm font-normal leading-normal mt-3">Located in the heart
                    of the city, surrounded by iconic landmarks and vibrant nightlife.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Contact Form -->
          <div class="lg:col-span-7">
            <div
              class="bg-[#2b1834]/50 border border-white/10 rounded-xl p-6 lg:p-10 sticky top-24 shadow-2xl">
              <h3 class="text-white text-2xl font-bold mb-2">Send us a Message</h3>
              <p class="text-neutral-400 mb-8">We aim to respond to all inquiries within 24 hours.</p>

              <form class="flex flex-col gap-6" @submit.prevent="handleSubmit">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="flex flex-col gap-2">
                    <label class="text-sm font-medium text-white" for="firstName">First Name</label>
                    <input v-model="form.firstName"
                      class="bg-[#1c1022] border border-white/10 text-white text-sm rounded-lg block w-full p-3 placeholder-white/50 focus:ring-purple-600 focus:border-purple-600 outline-none transition-all"
                      id="firstName" placeholder="John" required type="text" />
                  </div>
                  <div class="flex flex-col gap-2">
                    <label class="text-sm font-medium text-white" for="lastName">Last Name</label>
                    <input v-model="form.lastName"
                      class="bg-[#1c1022] border border-white/10 text-white text-sm rounded-lg block w-full p-3 placeholder-white/50 focus:ring-purple-600 focus:border-purple-600 outline-none transition-all"
                      id="lastName" placeholder="Doe" required type="text" />
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="flex flex-col gap-2">
                    <label class="text-sm font-medium text-white" for="email">Email Address</label>
                    <input v-model="form.email"
                      class="bg-[#1c1022] border border-white/10 text-white text-sm rounded-lg block w-full p-3 placeholder-white/50 focus:ring-purple-600 focus:border-purple-600 outline-none transition-all"
                      id="email" placeholder="name@example.com" required type="email" />
                  </div>
                  <div class="flex flex-col gap-2">
                    <label class="text-sm font-medium text-white" for="phone">Phone Number</label>
                    <input v-model="form.phone"
                      class="bg-[#1c1022] border border-white/10 text-white text-sm rounded-lg block w-full p-3 placeholder-white/50 focus:ring-purple-600 focus:border-purple-600 outline-none transition-all"
                      id="phone" placeholder="+852 0000 0000" type="tel" />
                  </div>
                </div>

                <div class="flex flex-col gap-2">
                  <label class="text-sm font-medium text-white" for="inquiryType">Inquiry Type</label>
                  <div class="relative">
                    <select v-model="form.inquiryType"
                      class="bg-[#1c1022]/50 border border-white/10 text-white text-sm rounded-lg block w-full p-3 appearance-none focus:ring-purple-600 focus:border-purple-600 outline-none transition-all cursor-pointer"
                      id="inquiryType">
                      <option>General Inquiry</option>
                      <option>Room Reservation</option>
                      <option>Dining & Events</option>
                      <option>Press & Media</option>
                      <option>Careers</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white">
                      <span class="material-symbols-outlined">expand_more</span>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col gap-2">
                  <label class="text-sm font-medium text-white" for="message">Message</label>
                  <textarea v-model="form.message"
                    class="bg-[#1c1022] border border-white/10 text-white text-sm rounded-lg block w-full p-3 placeholder-white/50 focus:ring-purple-600 focus:border-purple-600 outline-none transition-all resize-none"
                    id="message" placeholder="How can we assist you with your stay?" rows="5"></textarea>
                </div>

                <div class="flex items-start mb-2">
                  <div class="flex items-center h-5">
                    <input v-model="form.consent"
                      class="w-4 h-4 border border-white/10 rounded bg-[#1c1022] focus:ring-3 focus:ring-purple-600/50 text-purple-600"
                      id="consent" type="checkbox" />
                  </div>
                  <label class="ms-2 text-sm font-medium text-neutral-400" for="consent">
                    I agree to the <NuxtLink class="text-purple-600 hover:underline" to="/privacy">privacy policy
                    </NuxtLink> and consent to being contacted.
                  </label>
                </div>

                <button
                  class="w-full text-white bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:ring-4 focus:ring-purple-600/30 font-bold rounded-lg text-sm px-5 py-4 mr-2 mb-2 focus:outline-none transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                  type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'hollywood'
})

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  inquiryType: 'General Inquiry',
  message: '',
  consent: false
})

const toggleMenu = () => {
  // Implement mobile menu logic
  console.log('Menu toggled')
}

const handleSubmit = () => {
  if (!form.value.consent) {
    alert('Please agree to the privacy policy')
    return
  }

  console.log('Form submitted:', form.value)
  // Add your form submission logic here
  alert('Message sent successfully!')

  // Reset form
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: 'General Inquiry',
    message: '',
    consent: false
  }
}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
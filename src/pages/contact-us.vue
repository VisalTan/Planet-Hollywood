<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Animated Background -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute inset-0 bg-linear-to-r from-pink-500/5 via-purple-500/5 to-cyan-500/5"></div>
      <div class="absolute top-20 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute top-40 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div class="absolute bottom-20 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <!-- Hero Section -->
    <div class="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-5xl md:text-7xl font-black mb-6 leading-tight">
          <span class="bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light">
          Experience luxury hospitality at its finest. We're here to make your stay unforgettable.
        </p>
      </div>
    </div>

    <!-- Contact Cards -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <!-- Email Card -->
        <a href="mailto:reservations@planethollywoodphnompenh.com" 
           class="group bg-linear-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-xl border border-pink-500/30 rounded-2xl p-8 hover:border-pink-400/50 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 hover:transform hover:scale-105">
          <div class="w-14 h-14 bg-linear-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform shadow-lg shadow-pink-500/50">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-sm font-semibold text-pink-400 uppercase tracking-wider mb-2">Email</h3>
          <p class="text-white font-medium break-all">reservations@planethollywoodphnompenh.com</p>
        </a>

        <!-- Phone Card -->
        <a href="tel:+85523999888" 
           class="group bg-linear-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:transform hover:scale-105">
          <div class="w-14 h-14 bg-linear-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform shadow-lg shadow-cyan-500/50">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
          </div>
          <h3 class="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">Phone</h3>
          <p class="text-white font-medium text-2xl">+855 23 999 888</p>
        </a>

        <!-- Address Card -->
        <div class="group bg-linear-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:transform hover:scale-105">
          <div class="w-14 h-14 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform shadow-lg shadow-purple-500/50">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h3 class="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-2">Location</h3>
          <p class="text-white font-medium">123 Cinema Boulevard<br>Phnom Penh, Cambodia</p>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 class="text-3xl md:text-4xl font-bold mb-3">
            <span class="bg-linear-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Send a Message
            </span>
          </h2>
          <p class="text-gray-400 mb-8">Fill out the form below and we'll respond within 24 hours.</p>
          
          <div class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
                <input
                  v-model="form.fullName"
                  type="text"
                  class="w-full bg-black border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                <input
                  v-model="form.email"
                  type="email"
                  class="w-full bg-black border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-300 mb-2">Subject</label>
              <input
                v-model="form.subject"
                type="text"
                class="w-full bg-black border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all"
                placeholder="What can we help you with?"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-300 mb-2">Message</label>
              <textarea
                v-model="form.message"
                rows="5"
                class="w-full bg-black border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all resize-none"
                placeholder="Tell us more about your inquiry..."
              ></textarea>
            </div>

            <button
              @click="handleSubmit"
              :disabled="submitted"
              class="w-full sm:w-auto bg-linear-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <span v-if="!submitted">Send Message</span>
              <span v-else>Message Sent!</span>
              <svg v-if="!submitted" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Map & Social -->
        <div class="space-y-8">
          <!-- Map -->
          <div class="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <div class="p-6 border-b border-gray-800">
              <h2 class="text-2xl font-bold mb-2">
                <span class="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Visit Us
                </span>
              </h2>
              <p class="text-gray-400">Find us in the heart of Phnom Penh</p>
            </div>
            <div class="relative h-80 overflow-hidden">
              <img
                class="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXO9e_WQakRYaPF34dwKz6W9G_ybbeH5K0k0FkBUGsqEQiVk5T-h_jcVNn7OiMqBtCK7U14oTJzofDno9oR0wt9WSA5eWDkRaiq-7STvh2SxD2kPOPPoYlaNuFXXWemfS7pMAuh2KwpyCnw4VxPPL7Ir0kPiXjmlRR_Ayiu17F_gTN_ZP0IvWMqIxKlhoG-Z6RRjPqDrK_17gnFqc97st6xmJJyLhOBsX0RywJThXOc4pdnG1zH__69lx5Ug95izUmO8AWVZn0NCAQ"
                alt="Planet Hollywood Hotel Phnom Penh Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'hollywood'
})

const form = ref({
  fullName: '',
  email: '',
  subject: '',
  message: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
  
  setTimeout(() => {
    form.value = {
      fullName: '',
      email: '',
      subject: '',
      message: ''
    }
    submitted.value = false
  }, 3000)
}
</script>

<style scoped>
.delay-700 {
  animation-delay: 0.7s;
}

.delay-1000 {
  animation-delay: 1s;
}
</style>
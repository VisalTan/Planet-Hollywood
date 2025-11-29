<template>
  <div class="min-h-screen bg-black text-white overflow-x-hidden">
 
    <!-- Mobile Sidebar -->
    <div v-show="sidebarOpen" class="fixed inset-0 z-50 lg:hidden">
      <div @click="sidebarOpen = false" class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div :class="[
        'absolute left-0 top-0 h-full w-80 bg-black shadow-lg transform transition-transform duration-300 ease-in-out',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      ]">
        <div class="p-6">
          <button @click="sidebarOpen = false" class="absolute top-4 right-4 text-white focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <div class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
            Planet Hollywood
          </div>
          <nav class="space-y-4">
            <NuxtLink to="/" class="block text-white hover:text-purple-400 transition-colors py-2">Home</NuxtLink>
            <NuxtLink to="/rooms" class="block text-white hover:text-purple-400 transition-colors py-2">Rooms & Suites</NuxtLink>
            <NuxtLink to="/dining" class="block text-white hover:text-purple-400 transition-colors py-2">Dining</NuxtLink>
            <NuxtLink to="/amenities" class="block text-white hover:text-purple-400 transition-colors py-2">Amenities</NuxtLink>
            <NuxtLink to="/gallery" class="block text-white hover:text-purple-400 transition-colors py-2">Gallery</NuxtLink>
            <NuxtLink to="/contact" class="block text-purple-400 font-semibold transition-colors py-2">Contact Us</NuxtLink>
            <NuxtLink to="/booking" class="block text-white hover:text-purple-400 transition-colors py-2">Book Now</NuxtLink>
          </nav>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <main class="pt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-12 md:gap-16 py-12 md:py-20">
        <!-- Header Section -->
        <div class="flex flex-wrap justify-between gap-6">
          <div class="flex max-w-lg flex-col gap-3">
            <h1 class="text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Get in Touch
            </h1>
            <p class="text-purple-300 text-base leading-relaxed">
              We'd love to hear from you. Reach out with any questions or inquiries, and our team will get back to you shortly.
            </p>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-purple-900/30 pt-8">
          <div class="flex flex-col gap-2">
            <p class="text-purple-300 text-sm font-medium uppercase tracking-wider">Email</p>
            <a href="mailto:reservations@planethollywoodphnompenh.com" class="text-white hover:text-purple-400 transition-colors">
              reservations@planethollywoodphnompenh.com
            </a>
          </div>
          <div class="flex flex-col gap-2">
            <p class="text-purple-300 text-sm font-medium uppercase tracking-wider">Phone</p>
            <a href="tel:+85523999888" class="text-white hover:text-purple-400 transition-colors">
              +855 23 999 888
            </a>
          </div>
          <div class="flex flex-col gap-2">
            <p class="text-purple-300 text-sm font-medium uppercase tracking-wider">Address</p>
            <p class="text-white">
              123 Cinema Boulevard, Phnom Penh, Cambodia
            </p>
          </div>
        </div>

        <!-- Contact Form and Map -->
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-8">
          <!-- Contact Form -->
          <div class="flex-1">
            <h2 class="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
              <div class="flex flex-col sm:flex-row gap-6">
                <label class="flex flex-col flex-1">
                  <span class="text-white text-base font-medium mb-2">Full Name</span>
                  <input 
                    v-model="form.fullName"
                    type="text"
                    class="w-full rounded-lg text-white bg-purple-950/30 border border-purple-900/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 h-14 px-4 placeholder:text-purple-300/50 transition-all outline-none"
                    placeholder="Enter your full name"
                    required
                  />
                </label>
                <label class="flex flex-col flex-1">
                  <span class="text-white text-base font-medium mb-2">Email Address</span>
                  <input 
                    v-model="form.email"
                    type="email"
                    class="w-full rounded-lg text-white bg-purple-950/30 border border-purple-900/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 h-14 px-4 placeholder:text-purple-300/50 transition-all outline-none"
                    placeholder="Enter your email address"
                    required
                  />
                </label>
              </div>
              <label class="flex flex-col">
                <span class="text-white text-base font-medium mb-2">Subject</span>
                <input 
                  v-model="form.subject"
                  type="text"
                  class="w-full rounded-lg text-white bg-purple-950/30 border border-purple-900/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 h-14 px-4 placeholder:text-purple-300/50 transition-all outline-none"
                  placeholder="What is your message about?"
                  required
                />
              </label>
              <label class="flex flex-col">
                <span class="text-white text-base font-medium mb-2">Message</span>
                <textarea 
                  v-model="form.message"
                  class="w-full min-h-36 rounded-lg text-white bg-purple-950/30 border border-purple-900/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 px-4 py-3 placeholder:text-purple-300/50 transition-all outline-none resize-y"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </label>
              <button 
                type="submit"
                class="self-start bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          <!-- Map and Social Media -->
          <div class="flex-1 lg:pl-8">
            <h2 class="text-2xl font-bold mb-6">Our Location</h2>
            <div class="aspect-video w-full rounded-lg overflow-hidden bg-purple-950/30">
              <img 
                class="h-full w-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXO9e_WQakRYaPF34dwKz6W9G_ybbeH5K0k0FkBUGsqEQiVk5T-h_jcVNn7OiMqBtCK7U14oTJzofDno9oR0wt9WSA5eWDkRaiq-7STvh2SxD2kPOPPoYlaNuFXXWemfS7pMAuh2KwpyCnw4VxPPL7Ir0kPiXjmlRR_Ayiu17F_gTN_ZP0IvWMqIxKlhoG-Z6RRjPqDrK_17gnFqc97st6xmJJyLhOBsX0RywJThXOc4pdnG1zH__69lx5Ug95izUmO8AWVZn0NCAQ"
                alt="Map showing Planet Hollywood Hotel location in Phnom Penh"
              />
            </div>
            
            <div class="mt-8">
              <h3 class="text-lg font-bold mb-4">Follow Us</h3>
              <div class="flex items-center gap-4">
                <a href="#" class="text-purple-300 hover:text-white transition-colors" aria-label="Instagram">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                    <rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" class="text-purple-300 hover:text-white transition-colors" aria-label="Facebook">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" class="text-purple-300 hover:text-white transition-colors" aria-label="Twitter">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" class="text-purple-300 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect height="12" width="4" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <planet-hollywood-footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const sidebarOpen = ref(false)
const form = ref({
  fullName: '',
  email: '',
  subject: '',
  message: ''
})

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
  // Add your form submission logic here
  alert('Thank you for your message! We will get back to you soon.')
  
  // Reset form
  form.value = {
    fullName: '',
    email: '',
    subject: '',
    message: ''
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
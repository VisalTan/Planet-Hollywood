<template>
  <section id="contact" class="py-20 bg-linear-to-b from-black via-cyan-900/10 to-black relative">
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-5xl font-bold mb-8 text-white">
          {{ contactContent?.title || "Experience the Spotlight" }}
        </h2>
        <p class="text-gray-400 text-xl mb-12">{{ contactContent?.subtitle || "Book your stay at Asia's first Planet Hollywood Hotel" }}</p>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="neon-card bg-black/50 p-8 rounded-lg border-2 border-pink-400 hover:border-cyan-400 transition-all duration-300">
            <Mail class="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 class="text-xl font-bold mb-2 text-white">Email Us</h3>
            <a :href="`mailto:${contactContent?.email || 'inquiry@planethollywood-phnompenh.com'}`" class="gradient-text hover:underline">
              {{ contactContent?.email || 'inquiry@planethollywood-phnompenh.com' }}
            </a>
          </div>
          
          <div class="neon-card bg-black/50 p-8 rounded-lg border-2 border-cyan-400 hover:border-pink-400 transition-all duration-300">
            <Phone class="w-8 h-8 text-pink-400 mx-auto mb-4" />
            <h3 class="text-xl font-bold mb-2 text-white">Visit Our Website</h3>
            <a :href="contactContent?.website || 'https://planethollywood-phnompenh.com'" class="gradient-text hover:underline" target="_blank" rel="noopener">
              {{ contactContent?.website?.replace('https://', '') || 'planethollywood-phnompenh.com' }}
            </a>
          </div>
        </div>

        <div class="flex justify-center space-x-6 mb-12">
          <a :href="contactContent?.socialLinks.instagram || '#'" class="neon-button bg-linear-to-r from-pink-500 to-purple-500 text-white p-4 rounded-full hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-110">
            <Instagram class="w-6 h-6" />
          </a>
          <a :href="contactContent?.socialLinks.facebook || '#'" class="neon-button bg-linear-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110">
            <Facebook class="w-6 h-6" />
          </a>
        </div>

        <!-- Booking Form -->
        <div class="max-w-2xl mx-auto bg-black/50 p-8 rounded-lg border-2 border-pink-400/50 backdrop-blur-sm">
          <h3 class="text-3xl font-bold mb-6 text-white">Book Your Stay</h3>
          
          <form @submit.prevent="handleSubmit">
            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div class="text-left">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-300">Name *</label>
                <input 
                  id="name"
                  v-model="form.name" 
                  type="text" 
                  required
                  placeholder="Your full name"
                  class="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white"
                />
              </div>

              <div class="text-left">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-300">Email *</label>
                <input 
                  id="email"
                  v-model="form.email" 
                  type="email" 
                  required
                  placeholder="your@email.com"
                  class="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white"
                />
              </div>
            </div>

            <div class="mb-6 text-left">
              <label for="phone" class="block mb-2 text-sm font-medium text-gray-300">Phone *</label>
              <input 
                id="phone"
                v-model="form.phone" 
                type="tel" 
                required
                placeholder="+1234567890"
                class="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white"
              />
            </div>

            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div class="text-left">
                <label for="checkin" class="block mb-2 text-sm font-medium text-gray-300">Check-in Date *</label>
                <input 
                  id="checkin"
                  v-model="form.checkin" 
                  type="date" 
                  required
                  :min="minDate"
                  class="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white"
                />
              </div>

              <div class="text-left">
                <label for="checkout" class="block mb-2 text-sm font-medium text-gray-300">Check-out Date *</label>
                <input 
                  id="checkout"
                  v-model="form.checkout" 
                  type="date" 
                  required
                  :min="form.checkin || minDate"
                  class="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white"
                />
              </div>
            </div>

            <div class="mb-6 text-left">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-300">Message (Optional)</label>
              <textarea 
                id="message"
                v-model="form.message" 
                rows="4"
                placeholder="Any special requests or notes..."
                class="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white"
              ></textarea>
            </div>

            <button 
              type="submit" 
              :disabled="loading"
              class="neon-button bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 text-white px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none w-full md:w-auto"
            >
              {{ loading ? 'Sending...' : 'Book Now' }}
            </button>

            <div 
              v-if="status.message" 
              :class="[
                'mt-6 p-4 rounded-lg text-center', 
                status.type === 'success' 
                  ? 'bg-green-500/20 border border-green-500/50 text-green-400' 
                  : 'bg-red-500/20 border border-red-500/50 text-red-400'
              ]"
            >
              {{ status.message }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail, Phone, Instagram, Facebook } from 'lucide-vue-next'
import { useReservations } from '~/composables/useReservation'
import { useContact } from '~/composables/useContact'

const { addReservation } = useReservations()
const { contactContent } = useContact()

const form = ref({
  name: '',
  email: '',
  phone: '',
  checkin: '',
  checkout: '',
  message: ''
})

const loading = ref(false)
const status = ref({ message: '', type: '' })

const minDate = computed(() => {
  return new Date().toISOString().split('T')[0]
})

const handleSubmit = async () => {
  loading.value = true
  status.value = { message: '', type: '' }

  try {
    // Send to Telegram API
    await $fetch('/api/booking', {
      method: 'POST',
      body: form.value
    })

    // Also save to Firestore as reservation
    await addReservation({
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
      date: form.value.checkin,
      time: `Check-out: ${form.value.checkout}`,
      guests: 1, // Default guests for hotel booking
      status: 'pending'
    })

    status.value = {
      message: 'Booking request sent successfully! We will contact you soon.',
      type: 'success'
    }

    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      checkin: '',
      checkout: '',
      message: ''
    }
  } catch (error) {
    console.error('Booking error:', error)
    status.value = {
      message: 'Failed to send booking request. Please try again.',
      type: 'error'
    }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(to right, #ec4899, #8b5cf6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.neon-card {
  box-shadow: 0 0 20px rgba(236, 72, 153, 0.3);
  transition: all 0.3s ease;
}

.neon-card:hover {
  box-shadow: 0 0 30px rgba(6, 182, 212, 0.5);
  transform: translateY(-5px);
}

.neon-button {
  box-shadow: 0 0 20px rgba(236, 72, 153, 0.4);
  transition: all 0.3s ease;
}

.neon-button:hover {
  box-shadow: 0 0 40px rgba(6, 182, 212, 0.6);
}
</style>
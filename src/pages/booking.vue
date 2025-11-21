<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Hero Section -->
    <section class="relative py-5 bg-linear-to-b from-black via-cyan-900/10 to-black">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10 text-center">
        <h1 class="text-6xl font-bold mb-6 text-white">
          Book Your Stay
        </h1>
        <p class="text-gray-400 text-xl mb-12">Experience the spotlight at Asia's first Planet Hollywood Hotel</p>
      </div>
    </section>

    <!-- Booking Form Section -->
    <section class="py-10 bg-black">
      <div class="container mx-auto px-6">
        <div class="max-w-2xl mx-auto bg-black/50 p-8 rounded-lg border-2 border-pink-400/50 backdrop-blur-sm">
          <h2 class="text-3xl font-bold mb-6 text-white text-center">Make Your Reservation</h2>

          <form @submit.prevent="handleSubmit">
            <div class="grid lg:grid-cols-2 gap-6 mb-6">
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

            <div class="grid lg:grid-cols-2 gap-6 mb-6">
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

            <div class="text-center">
              <button
                type="submit"
                :disabled="loading"
                class="neon-button bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 text-white px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none w-full md:w-auto"
              >
                {{ loading ? 'Sending...' : 'Book Now' }}
              </button>
            </div>

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
    </section>
  </div>
  <planet-hollywood-footer/>
</template>

<script setup lang="ts">
import { useReservations } from '~/composables/api/useReservation'

const { addReservation } = useReservations()

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
.neon-button {
  box-shadow: 0 0 20px rgba(236, 72, 153, 0.4);
  transition: all 0.3s ease;
}

.neon-button:hover {
  box-shadow: 0 0 40px rgba(6, 182, 212, 0.6);
}
</style>
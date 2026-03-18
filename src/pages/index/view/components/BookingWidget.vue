<template>
  <div class="relative z-30 w-full max-w-5xl mx-auto px-4">
    <div class="booking-widget-bg rounded-2xl border border-white/10 shadow-2xl backdrop-blur-lg p-4 sm:p-6">
      <div class="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-[1.5fr_1fr_auto] lg:gap-4 lg:items-center">
        
        <!-- Check-in & Check-out -->
        <div class="flex flex-col sm:flex-row lg:border-r border-white/10 lg:pr-4 gap-3 sm:gap-4">
          <!-- Check-in -->
          <div class="flex-1 bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
            <label class="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/60 block mb-1.5" for="checkin">
              Check-in
            </label>
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-purple-400 text-lg">calendar_month</span>
              <input
                class="w-full bg-transparent text-white placeholder-white/40 border-0 p-0 focus:ring-0 text-sm font-semibold"
                id="checkin"
                placeholder="Select Date"
                type="text"
                v-model="checkIn"
              />
            </div>
          </div>
          
          <!-- Check-out -->
          <div class="flex-1 bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
            <label class="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/60 block mb-1.5" for="checkout">
              Check-out
            </label>
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-purple-400 text-lg">calendar_month</span>
              <input
                class="w-full bg-transparent text-white placeholder-white/40 border-0 p-0 focus:ring-0 text-sm font-semibold"
                id="checkout"
                placeholder="Select Date"
                type="text"
                v-model="checkOut"
              />
            </div>
          </div>
        </div>

        <!-- Guests & Rooms -->
        <div class="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors lg:border-r border-white/10 lg:pr-4">
          <label class="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/60 block mb-1.5" for="guests">
            Guests & Rooms
          </label>
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-purple-400 text-lg">group</span>
            <input
              class="w-full bg-transparent text-white placeholder-white/40 border-0 p-0 focus:ring-0 text-sm font-semibold"
              id="guests"
              placeholder="Select options"
              type="text"
              v-model="guests"
            />
          </div>
        </div>

        <!-- Search Button -->
        <button
          @click="handleSearch"
          class="w-full lg:w-auto h-12 lg:h-14 px-6 lg:px-8 rounded-lg bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm lg:text-base font-bold tracking-wide transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
        >
          <span>Search</span>
          <!-- <span class="material-symbols-outlined text-lg">search</span> -->
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formatDate = (date) => {
  return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
}

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

const checkIn = ref(formatDate(today))
const checkOut = ref(formatDate(tomorrow))
const guests = ref('2 Adults, 1 Room')

const handleSearch = () => {
  console.log({
    checkIn: checkIn.value,
    checkOut: checkOut.value,
    guests: guests.value
  })
}
</script>

<style scoped>
.booking-widget-bg {
  background: linear-gradient(135deg, rgba(28, 16, 34, 0.7) 0%, rgba(46, 26, 56, 0.5) 100%);
}

input:focus {
  outline: none;
}

/* Smooth transitions for all interactive elements */
input, button {
  transition: all 0.2s ease;
}
</style>
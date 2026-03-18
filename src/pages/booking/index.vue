<template>
  <div>
    <!-- Main Content -->
    <main class="relative flex flex-col min-h-screen pt-16">
      <!-- Hero Background -->
      <div class="fixed inset-0 z-0 bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed"></div>
      
      <!-- Content Container -->
      <div class="relative z-10 flex flex-col items-center w-full px-4 md:px-8 py-12 lg:py-20">
        <!-- Hero Text -->
        <div class="text-center max-w-4xl mx-auto mb-12 animate-fade-in">
          <h1 class="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-4 drop-shadow-2xl">
            Your Scene Awaits
          </h1>
          <p class="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto drop-shadow-md">
            Secure your premiere stay at Asia's first Planet Hollywood destination.
          </p>
        </div>

        <!-- Booking Engine Card -->
        <div class="w-full max-w-5xl bg-[#2b1834]/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          <!-- Booking Tabs -->
          <div class="flex border-b border-white/10">
            <button 
              v-for="(tab, index) in tabs" 
              :key="tab"
              @click="activeTab = index"
              :class="[
                'flex-1 py-4 text-center text-sm font-bold transition-colors',
                activeTab === index
                  ? 'text-white bg-purple-600/20 border-b-2 border-purple-600'
                  : 'text-gray-400 hover:bg-white/5'
              ]"
            >
              {{ tab }}
            </button>
          </div>

          <div class="p-6 md:p-8">
            <!-- Input Grid -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
              <!-- Location -->
              <div class="md:col-span-3">
                <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 ml-1">
                  Destination
                </label>
                <div class="relative group">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span class="material-symbols-outlined text-purple-600">location_on</span>
                  </div>
                  <input
                    v-model="destination"
                    class="block w-full pl-10 pr-3 py-3 bg-[#1c1022] border border-white/10 rounded-lg text-white font-medium focus:ring-2 focus:ring-purple-600 focus:border-transparent cursor-default"
                    readonly
                    type="text"
                  />
                </div>
              </div>

              <!-- Dates -->
              <div class="md:col-span-4">
                <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 ml-1">
                  Dates
                </label>
                <div 
                  class="relative cursor-pointer"
                  @click="toggleDatePicker"
                >
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span class="material-symbols-outlined text-purple-600">calendar_month</span>
                  </div>
                  <div class="block w-full pl-10 pr-3 py-3 bg-[#1c1022] border border-purple-600 ring-1 ring-purple-600 rounded-lg text-white font-medium flex items-center justify-between">
                    <span>{{ formattedDateRange }}</span>
                    <span class="text-xs text-gray-400">{{ nightCount }} Nights</span>
                  </div>
                </div>
              </div>

              <!-- Guests -->
              <div class="md:col-span-3">
                <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 ml-1">
                  Guests
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span class="material-symbols-outlined text-purple-600">group</span>
                  </div>
                  <select
                    v-model="guests"
                    class="block w-full pl-10 pr-8 py-3 bg-[#1c1022] border border-white/10 rounded-lg text-white font-medium focus:ring-2 focus:ring-purple-600 focus:border-transparent appearance-none"
                  >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="2-1">2 Adults, 1 Child</option>
                    <option value="4+">Family (4+)</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-400">
                    <span class="material-symbols-outlined">expand_more</span>
                  </div>
                </div>
              </div>

              <!-- Search Button -->
              <div class="md:col-span-2 flex items-end">
                <button
                  @click="handleSearch"
                  class="w-full h-[50px] bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-lg shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]"
                >
                  <span>Search</span>
                  <!-- <span class="material-symbols-outlined text-[20px]">arrow_forward</span> -->
                </button>
              </div>
            </div>

            <!-- Date Picker -->
            <div v-if="showDatePicker" class="bg-[#1c1022] rounded-xl border border-white/10 p-6 animate-fade-in-up">
              <div class="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                <h3 class="text-white font-bold text-lg">Select Dates</h3>
                <div class="flex gap-2">
                  <span class="px-2 py-1 bg-white/5 rounded text-xs text-gray-400">Flexible dates</span>
                  <span class="px-2 py-1 bg-white/5 rounded text-xs text-gray-400">Compare rates</span>
                </div>
              </div>

              <!-- Dual Calendar -->
              <div class="flex flex-col lg:flex-row gap-8">
                <!-- Month 1 -->
                <div class="flex-1">
                  <div class="flex items-center justify-between mb-4">
                    <button 
                      @click="previousMonth"
                      class="p-1 hover:bg-white/10 rounded-full text-white"
                    >
                      <span class="material-symbols-outlined">chevron_left</span>
                    </button>
                    <span class="text-white font-bold">{{ currentMonthLabel }}</span>
                    <div class="w-8"></div>
                  </div>
                  <CalendarMonth 
                    :month="currentMonth" 
                    :year="currentYear"
                    :selected-range="selectedDateRange"
                    @select-date="selectDate"
                  />
                </div>

                <!-- Divider -->
                <div class="hidden lg:block w-px bg-white/10"></div>

                <!-- Month 2 -->
                <div class="flex-1">
                  <div class="flex items-center justify-between mb-4">
                    <div class="w-8"></div>
                    <span class="text-white font-bold">{{ nextMonthLabel }}</span>
                    <button 
                      @click="nextMonth"
                      class="p-1 hover:bg-white/10 rounded-full text-white"
                    >
                      <span class="material-symbols-outlined">chevron_right</span>
                    </button>
                  </div>
                  <CalendarMonth 
                    :month="nextMonthValue" 
                    :year="nextYearValue"
                    :selected-range="selectedDateRange"
                    @select-date="selectDate"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Featured Rooms -->
        <div class="w-full max-w-5xl mt-12">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-white">Featured Accommodations</h2>
            <NuxtLink
              to="/rooms"
              class="text-purple-600 hover:text-white transition-colors text-sm font-bold flex items-center gap-1"
            >
              View All
              <span class="material-symbols-outlined text-sm">arrow_forward_ios</span>
            </NuxtLink>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RoomCard 
              v-for="room in featuredRooms" 
              :key="room.id"
              :room="room"
            />
          </div>
        </div>

        <!-- Trust Signals -->
        <div class="w-full max-w-5xl mt-16 py-8 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16">
          <div 
            v-for="signal in trustSignals" 
            :key="signal.title"
            class="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
          >
            <span class="material-symbols-outlined text-purple-600 text-3xl">{{ signal.icon }}</span>
            <div class="flex flex-col">
              <span class="text-sm font-bold text-white">{{ signal.title }}</span>
              <span class="text-xs text-gray-400">{{ signal.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import CalendarMonth from './view/components/CalendarMonth.vue'
import RoomCard from './view/components/RoomCard.vue'

definePageMeta({
  layout: 'hollywood'
})

const tabs = ['Book a Room', 'Dining Reservations', 'Events']
const activeTab = ref(0)

const destination = ref('Planet Hollywood Asia')
const guests = ref('2')
const showDatePicker = ref(true)

const currentMonth = ref(9) // October (0-indexed)
const currentYear = ref(2023)

const selectedDateRange = ref<{
  start: Date | null
  end: Date | null
}>({
  start: new Date(2023, 9, 24),
  end: new Date(2023, 9, 28)
})

const formattedDateRange = computed(() => {
  const start = selectedDateRange.value.start
  const end = selectedDateRange.value.end
  
  if (!start || !end) {
    return 'Select dates'
  }
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }
  return `${formatDate(start)} - ${formatDate(end)}`
})

const nightCount = computed(() => {
  const start = selectedDateRange.value.start
  const end = selectedDateRange.value.end
  
  if (!start || !end) {
    return 0
  }
  
  const diff = end.getTime() - start.getTime()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
})

const currentMonthLabel = computed(() => {
  const date = new Date(currentYear.value, currentMonth.value)
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
})

const nextMonthValue = computed(() => {
  return currentMonth.value === 11 ? 0 : currentMonth.value + 1
})

const nextYearValue = computed(() => {
  return currentMonth.value === 11 ? currentYear.value + 1 : currentYear.value
})

const nextMonthLabel = computed(() => {
  const date = new Date(nextYearValue.value, nextMonthValue.value)
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
})

const featuredRooms = [
  {
    id: 1,
    name: 'Star Class Room',
    details: 'King Bed • City View • 45m²',
    price: 350,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2VkISO6ZyHPg_Pof_0SoE81x55oNjN3QD_m2VoX7gH5pb-Cnpgj3sXPFcv6FmE9FDVsiVkTh8wJ8hIwe3M-_iJDlokF36EY7fP74siQXiWdRnRdl7vcCjv0P5xIRAj0G8qrHg-EcT0wHO2uMs_Vps9HjAEbSy8i0oaKLy8lPFFnhoN1PxcTPAbnQQgfK5ogsR6Ja5nNj7TsFC0p1bs-wuS142bcYvODsvlf6DPaqyqd77-BzJfjE0SPlV-UNbU-r4lATtIBaL0VU',
    amenities: ['Free Wifi', 'Breakfast'],
    popular: false
  },
  {
    id: 2,
    name: "Director's Suite",
    details: 'Suite • Ocean View • 65m²',
    price: 550,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdhMxl1dQQptY-wtvcXad3E37z3SeqSSg53AWhHQpawfHD1aemwOh8FQ1ogrdc3wsYd9O7n6z4uIDA9wRk256gq6CsXnH_Nj5xQxiLEEfMxBDcKQcaFpoVLRD4YZt9rgSFuteB8CtFAeQQ044pP7o4Mp1RDNAvCgkS2FIZJK3Igq7QrlUc-vyDCNexDW1NkIVM3u2Y2WymJJPWg5-yJ96-SmG4zAre-R7nwVe6TMN17ryamBJdyxI77eSetNGtkjqnSblrnUeaysM',
    amenities: ['Bathtub', 'Lounge Access'],
    popular: true
  },
  {
    id: 3,
    name: 'Panorama Penthouse',
    details: '2 Bedroom • 360 View • 120m²',
    price: 1200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGnX32_vRXqtPjtU5kac2qRf_-9UxoDWYBXjTS7u6hgkOIyfmo9qDHVp64bnvJD0CwvDi2ExotCf8ejSHbR61yPrhdKogXZkQ6dlMUgDYeAzB_lX1t0Ch9AEVh_dRFK6VMLCHuu8cwOhZ3PKHUmovLl-F5whUw2sWjUMpm1cECtJCoZ2m9F6E8OiS5M1XBxTYTgb67YWrgxYDr9q59RGVIU3K1RGEuQBL2dMgczZls4RnTbYOqN4nt3Tre6zY6Q2F3FofQ9VgVO-I',
    amenities: ['Butler Service', 'Private Bar'],
    popular: false
  }
]

const trustSignals = [
  {
    icon: 'verified_user',
    title: 'Best Rate Guarantee',
    description: 'Book direct for the best prices'
  },
  {
    icon: 'diamond',
    title: 'Exclusive Perks',
    description: 'Members earn points on every stay'
  },
  {
    icon: 'event_available',
    title: 'Flexible Cancellation',
    description: 'Plans change, we understand'
  }
]

const toggleDatePicker = () => {
  showDatePicker.value = !showDatePicker.value
}

const selectDate = (date: Date) => {
  // Simple date selection logic - you can enhance this
  if (!selectedDateRange.value.start || selectedDateRange.value.end) {
    selectedDateRange.value = { start: date, end: null }
  } else {
    selectedDateRange.value.end = date
  }
}

const previousMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
}

const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
}

const handleSearch = () => {
  console.log('Searching...', {
    destination: destination.value,
    dates: selectedDateRange.value,
    guests: guests.value
  })
}
</script>

<style scoped>
.bg-hero-pattern {
  background-image: linear-gradient(rgba(29, 16, 35, 0.3), rgba(29, 16, 35, 0.9)), 
                    url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop');
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-in;
}

.animate-fade-in-up {
  animation: fadeInUp 0.4s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
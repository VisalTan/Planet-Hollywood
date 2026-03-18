<template>
  <div class="lg:col-span-7">
    <div class="bg-[#2b1834]/50 border border-white/10 rounded-xl p-6 lg:p-10 sticky top-24 shadow-2xl">
      <h3 class="text-white text-2xl font-bold mb-2">Send us a Message</h3>
      <p class="text-neutral-400 mb-8">We aim to respond to all inquiries within 24 hours.</p>

      <form class="flex flex-col gap-6" @submit.prevent="submitHandler">
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
            I agree to the <NuxtLink class="text-purple-600 hover:underline" to="/privacy">privacy policy</NuxtLink> and consent to being contacted.
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
</template>

<script setup lang="ts">
const props = defineProps<{
    modelValue: any
}>()

const emit = defineEmits(['update:modelValue', 'submit'])

const form = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
})

const submitHandler = () => {
    emit('submit')
}
</script>

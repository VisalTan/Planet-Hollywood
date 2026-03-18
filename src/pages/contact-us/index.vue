<template>
  <div
    class="relative flex min-h-screen w-full flex-col bg-black font-display text-white overflow-hidden antialiased">
    <div class="h-16"></div>

    <HeroSection />

    <div class="relative px-4 lg:px-40 flex flex-1 justify-center pb-20">
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
          <ContactDetails />
          <ContactForm v-model="form" @submit="handleSubmit" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from './view/components/HeroSection.vue'
import ContactDetails from './view/components/ContactDetails.vue'
import ContactForm from './view/components/ContactForm.vue'

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
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

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail, Phone, Instagram, Facebook } from 'lucide-vue-next'
import { useContact } from '~/composables/content/useContact'

const { contactContent } = useContact()
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
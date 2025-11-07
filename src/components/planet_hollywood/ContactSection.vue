<template>
  <section id="contact" class="py-20 bg-linear-to-b from-black via-cyan-900/10 to-black relative">
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
    </div>
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-5xl font-bold mb-8">Experience the <span class="gradient-text">Spotlight</span></h2>
        <p class="text-gray-400 text-xl mb-12">Book your stay at Asia's first Planet Hollywood Hotel</p>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div
            class="neon-card bg-black/50 p-8 rounded-lg border-2 border-pink-400 hover:border-cyan-400 transition-all duration-300">
            <Mail class="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 class="text-xl font-bold mb-2">Email Us</h3>
            <a href="mailto:inquiry@planethollywood-phnompenh.com" class="gradient-text hover:underline">
              inquiry@planethollywood-phnompenh.com
            </a>
          </div>
          <div
            class="neon-card bg-black/50 p-8 rounded-lg border-2 border-cyan-400 hover:border-pink-400 transition-all duration-300">
            <Phone class="w-8 h-8 text-pink-400 mx-auto mb-4" />
            <h3 class="text-xl font-bold mb-2">Visit Our Website</h3>
            <a href="https://planethollywood-phnompenh.com" class="gradient-text hover:underline" target="_blank"
              rel="noopener">
              planethollywood-phnompenh.com
            </a>
          </div>
        </div>

        <div class="flex justify-center space-x-6 mb-12">
          <a href="#"
            class="neon-button bg-linear-to-r from-pink-500 to-purple-500 text-white p-4 rounded-full hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-110">
            <Instagram class="w-6 h-6" />
          </a>
          <a href="#"
            class="neon-button bg-linear-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110">
            <Facebook class="w-6 h-6" />
          </a>
        </div>

        <button
          class="neon-button bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 text-white px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
          Book Your Stay Now
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Mail, Phone, Instagram, Facebook } from 'lucide-vue-next'
</script>

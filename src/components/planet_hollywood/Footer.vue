<template>
    <footer class="bg-black border-t-2 border-cyan-400/30 py-12 relative overflow-hidden">
      <!-- Animated background -->
      <div class="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-cyan-500/5"></div>
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <!-- Brand Section -->
          <div class="md:col-span-1">
            <div class="text-2xl font-bold mb-4 text-white">
              <span class="gradient-text">PLANET</span><br>
              <span class="neon-text-cyan">HOLLYWOOD</span>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed">
              Experience luxury entertainment in the heart of Phnom Penh
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-cyan-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#" class="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Accommodations</a></li>
              <li><a href="#" class="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Dining</a></li>
              <li><a href="#" class="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Events</a></li>
              <li><a href="#" class="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Gallery</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul class="space-y-2 text-sm">
              <li class="text-gray-400">
                <span class="text-cyan-400">📍</span> Phnom Penh, Cambodia
              </li>
              <li class="text-gray-400">
                <span class="text-cyan-400">📞</span> +855 23 999 888
              </li>
              <li class="text-gray-400">
                <span class="text-cyan-400">✉️</span> info@planethollywood.com.kh
              </li>
              <li class="text-gray-400">
                <span class="text-cyan-400">🕐</span> 24/7 Reception
              </li>
            </ul>
          </div>

          <!-- Social Media -->
          <div>
            <h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Follow Us</h3>
            <div class="flex flex-wrap gap-3 mb-4">
              <a href="#" class="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center hover:scale-110 transition-transform">
                <span class="text-pink-400">f</span>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center hover:scale-110 transition-transform">
                <span class="text-cyan-400">𝕏</span>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center hover:scale-110 transition-transform">
                <span class="text-purple-400">📷</span>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 flex items-center justify-center hover:scale-110 transition-transform">
                <span class="text-red-400">▶</span>
              </a>
            </div>
            <p class="text-gray-400 text-xs">Stay updated with our latest events and offers</p>
          </div>
        </div>

        <!-- Newsletter Section -->
        <div class="border-t border-gray-800 pt-8 mb-8">
          <div class="max-w-2xl mx-auto text-center">
            <h3 class="text-white font-semibold mb-3">Subscribe to Our Newsletter</h3>
            <p class="text-gray-400 text-sm mb-4">Get exclusive deals and updates delivered to your inbox</p>
            <div class="flex gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                class="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              >
              <button class="px-6 py-2 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-600 text-xs text-center md:text-left">
            © 2024 Planet Hollywood Hotel Phnom Penh. All rights reserved.
          </p>
          <div class="flex gap-6 text-xs">
            <a href="#" class="text-gray-500 hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" class="text-gray-500 hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="#" class="text-gray-500 hover:text-cyan-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
</template>

<style scoped>
.delay-1000 {
  animation-delay: 1s;
}
</style>
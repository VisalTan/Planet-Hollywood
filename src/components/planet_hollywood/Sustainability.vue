<template>
  <section class="relative py-24 overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=80" 
        alt="Sustainable luxury hotel"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/90"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <div class="inline-block mb-4 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
          <span class="text-emerald-400 text-sm font-semibold tracking-wider">OUR COMMITMENT</span>
        </div>
        <h2 class="text-6xl md:text-7xl font-black mb-6">
          <span class="bg-linear-to-r from-emerald-400 via-green-400 to-teal-400 text-transparent bg-clip-text">
            SUSTAINABLE LUXURY
          </span>
        </h2>
        <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">Where glamour and responsibility shine together</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Green Energy Card -->
        <div
          class="group relative bg-linear-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 hover:border-green-400/60 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-2">
          <div class="absolute inset-0 bg-linear-to-br from-green-400/0 to-emerald-500/0 group-hover:from-green-400/10 group-hover:to-emerald-500/10 rounded-2xl transition-all duration-500"></div>
          <div class="relative">
            <div class="w-16 h-16 bg-linear-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/30">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">Green Energy</h4>
            <p class="text-gray-300 leading-relaxed">LED lighting and energy-efficient systems throughout</p>
          </div>
        </div>

        <!-- Water Conservation Card -->
        <div
          class="group relative bg-linear-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2">
          <div class="absolute inset-0 bg-linear-to-br from-blue-400/0 to-cyan-500/0 group-hover:from-blue-400/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-500"></div>
          <div class="relative">
            <div class="w-16 h-16 bg-linear-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">Water Conservation</h4>
            <p class="text-gray-300 leading-relaxed">Water-efficient fixtures and responsible usage programs</p>
          </div>
        </div>

        <!-- Local Sourcing Card -->
        <div
          class="group relative bg-linear-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30 hover:border-yellow-400/60 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 hover:-translate-y-2">
          <div class="absolute inset-0 bg-linear-to-br from-yellow-400/0 to-orange-500/0 group-hover:from-yellow-400/10 group-hover:to-orange-500/10 rounded-2xl transition-all duration-500"></div>
          <div class="relative">
            <div class="w-16 h-16 bg-linear-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/30">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">Local Sourcing</h4>
            <p class="text-gray-300 leading-relaxed">Supporting Cambodian producers and reducing food miles</p>
          </div>
        </div>

        <!-- Waste Reduction Card -->
        <div
          class="group relative bg-linear-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2">
          <div class="absolute inset-0 bg-linear-to-br from-purple-400/0 to-pink-500/0 group-hover:from-purple-400/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-500"></div>
          <div class="relative">
            <div class="w-16 h-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">Waste Reduction</h4>
            <p class="text-gray-300 leading-relaxed">Minimizing plastics with refillable amenities and recycling</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional logic needed for this component
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
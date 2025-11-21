<template>
  <section class="relative py-24 overflow-hidden bg-slate-900">
    <!-- Animated Background Pattern -->
    <div class="absolute inset-0 z-0 opacity-10">
      <div class="absolute inset-0"
        style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 40px 40px;">
      </div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-block mb-4 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
          <span class="text-emerald-400 text-sm font-semibold tracking-wider">OUR COMMITMENT</span>
        </div>
        <h2
          class="text-5xl md:text-6xl font-black mb-6 bg-linear-to-r from-emerald-400 via-green-400 to-teal-400 text-transparent bg-clip-text">
          SUSTAINABLE LUXURY
        </h2>
        <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">Where glamour and responsibility shine together
        </p>
      </div>

      <!-- Featured Image Gallery -->
      <div class="grid md:grid-cols-3 gap-6 mb-16">
        <div class="md:col-span-2 group relative overflow-hidden rounded-3xl shadow-2xl">
          <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80"
            alt="Sustainable luxury hotel exterior"
            class="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700" />
          <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-8">
            <h3 class="text-3xl font-bold text-white mb-2">Eco-Luxury Architecture</h3>
            <p class="text-gray-200">Harmonizing modern design with environmental responsibility</p>
          </div>
        </div>

        <div class="group relative overflow-hidden rounded-3xl shadow-2xl">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
            alt="Solar panels on luxury hotel"
            class="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700" />
          <div class="absolute inset-0 bg-linear-to-t from-emerald-900/90 via-emerald-900/40 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-6">
            <h3 class="text-2xl font-bold text-white mb-2">Clean Energy</h3>
            <p class="text-gray-200 text-sm">Powered by renewable sources</p>
          </div>
        </div>
      </div>

      <!-- Additional Image Showcase -->
      <div class="grid md:grid-cols-4 gap-4 mb-16">
        <div class="group relative overflow-hidden rounded-2xl shadow-xl h-64">
          <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80" alt="Organic garden"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div
            class="absolute inset-0 bg-linear-to-t from-green-900/90 to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
          </div>
          <div class="absolute bottom-0 left-0 p-4">
            <p class="text-white font-semibold text-sm">Organic Gardens</p>
          </div>
        </div>

        <div class="group relative overflow-hidden rounded-2xl shadow-xl h-64">
          <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80" alt="Local produce"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div
            class="absolute inset-0 bg-linear-to-t from-orange-900/90 to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
          </div>
          <div class="absolute bottom-0 left-0 p-4">
            <p class="text-white font-semibold text-sm">Local Sourcing</p>
          </div>
        </div>

        <div class="group relative overflow-hidden rounded-2xl shadow-xl h-64">
          <img src="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?w=400&q=80" alt="Water conservation"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div
            class="absolute inset-0 bg-linear-to-t from-blue-900/90 to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
          </div>
          <div class="absolute bottom-0 left-0 p-4">
            <p class="text-white font-semibold text-sm">Water Systems</p>
          </div>
        </div>

        <div class="group relative overflow-hidden rounded-2xl shadow-xl h-64">
          <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&q=80"
            alt="Eco-friendly amenities"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div
            class="absolute inset-0 bg-linear-to-t from-purple-900/90 to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
          </div>
          <div class="absolute bottom-0 left-0 p-4">
            <p class="text-white font-semibold text-sm">Eco Amenities</p>
          </div>
        </div>
      </div>

      <!-- Sustainability Cards with Images -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Green Energy Card -->
        <div
          class="group relative overflow-hidden rounded-2xl border border-green-500/30 hover:border-green-400/60 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-2">
          <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80" alt="Green energy"
            class="w-full h-48 object-cover" />
          <div class="absolute inset-0 bg-linear-to-t from-green-900/95 via-green-900/70 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-6">
            <h4 class="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">Green Energy</h4>
            <p class="text-gray-200 text-sm leading-relaxed">100% LED lighting and solar-powered systems throughout our
              facilities</p>
          </div>
        </div>

        <!-- Water Conservation Card -->
        <div
          class="group relative overflow-hidden rounded-2xl border border-blue-500/30 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2">
          <img
            src="https://static.wixstatic.com/media/21927d_4c4cf2500764493db0b6e6caa26f2cea~mv2.png/v1/fill/w_662,h_442,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/21927d_4c4cf2500764493db0b6e6caa26f2cea~mv2.png"
            alt="Water conservation" class="w-full h-48 object-cover" />
          <div class="absolute inset-0 bg-linear-to-t from-blue-900/95 via-blue-900/70 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-6">
            <h4 class="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Water Conservation
            </h4>
            <p class="text-gray-200 text-sm leading-relaxed">Advanced water-efficient fixtures reducing consumption by
              40%</p>
          </div>
        </div>

        <!-- Local Sourcing Card -->
        <div
          class="group relative overflow-hidden rounded-2xl border border-yellow-500/30 hover:border-yellow-400/60 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 hover:-translate-y-2">
          <img src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&q=80" alt="Local produce"
            class="w-full h-48 object-cover" />
          <div class="absolute inset-0 bg-linear-to-t from-orange-900/95 via-orange-900/70 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-6">
            <h4 class="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">Local Sourcing
            </h4>
            <p class="text-gray-200 text-sm leading-relaxed">85% of ingredients from Cambodian farms within 50km radius
            </p>
          </div>
        </div>

        <!-- Waste Reduction Card -->
        <div
          class="group relative overflow-hidden rounded-2xl border border-purple-500/30 hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2">
          <img src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&q=80" alt="Eco-friendly products"
            class="w-full h-48 object-cover" />
          <div class="absolute inset-0 bg-linear-to-t from-purple-900/95 via-purple-900/70 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-6">
            <h4 class="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Waste Reduction
            </h4>
            <p class="text-gray-200 text-sm leading-relaxed">Zero single-use plastics with refillable luxury amenities
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic for Nuxt 4
// No additional state needed for this component
</script>

<style scoped>
/* Additional custom animations if needed */
</style>
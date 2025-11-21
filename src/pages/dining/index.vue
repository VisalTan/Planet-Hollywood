<template>
  <div class="min-h-screen bg-black text-white overflow-hidden">
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          alt="Fine Dining"
          class="w-full h-full object-cover opacity-30"
        />
        <div class="absolute inset-0 bg-linear-to-b from-black via-transparent to-black"></div>
      </div>

      <!-- Floating Elements -->
      <div class="absolute inset-0 z-10 pointer-events-none">
        <div v-for="i in 20" :key="i"
             class="floating-element"
             :style="{
               left: `${Math.random() * 100}%`,
               top: `${Math.random() * 100}%`,
               animationDelay: `${Math.random() * 5}s`,
               animationDuration: `${5 + Math.random() * 5}s`
             }">
          ✨
        </div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <h1 class="text-7xl md:text-9xl font-black mb-6 tracking-tight">
          <span class="block text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-red-400 animate-pulse">
            PLANET HOLLYWOOD
          </span>
          <span class="block text-white drop-shadow-2xl">DINING</span>
        </h1>
        <p class="text-2xl md:text-4xl font-bold text-cyan-400 mb-4 tracking-widest">
          WHERE STARS DINE
        </p>
        <p class="text-xl md:text-2xl text-gray-300 mb-12 font-light">
          Experience world-class cuisine in the heart of Phnom Penh
        </p>
        <button class="group relative px-12 py-5 text-xl font-bold text-white bg-linear-to-r from-purple-600 to-pink-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
          <span class="relative z-10">EXPLORE OUR RESTAURANTS</span>
          <div class="absolute inset-0 bg-linear-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div class="w-8 h-12 border-2 border-purple-500 rounded-full flex justify-center">
          <div class="w-2 h-3 bg-purple-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>

    <!-- Restaurants Overview -->
    <section class="relative py-32 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-6xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400">
            OUR RESTAURANTS
          </h2>
          <p class="text-2xl text-gray-300 max-w-3xl mx-auto">
            From celebrity chef burgers to all-day dining and nightlife experiences
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-10 mb-20">
          <!-- Gordon Ramsay Burger -->
          <div class="group relative bg-linear-to-b from-gray-900 to-black rounded-3xl overflow-hidden border-2 border-red-500/30 hover:border-red-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50">
            <div class="relative h-80 overflow-hidden">
              <img
                src="https://platform.boston.eater.com/wp-content/uploads/sites/4/chorus/uploads/chorus_asset/file/23426697/259699079_194400052885244_4812031660576318305_n.jpg?quality=90&strip=all&crop=0,16.666666666667,100,66.666666666667"
                alt="Gordon Ramsay Burger"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>
              <div class="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-black text-sm shadow-xl">
                CELEBRITY CHEF
              </div>
            </div>
            <div class="p-8">
              <h3 class="text-3xl font-black mb-3 text-red-500">GORDON RAMSAY BURGER</h3>
              <p class="text-gray-400 mb-6 leading-relaxed">
                Southeast Asia's first Gordon Ramsay Burger featuring the legendary chef's signature recipes and uncompromising standards.
              </p>
              <div class="space-y-3 mb-6">
                <div class="flex items-center text-sm text-gray-400">
                  <span class="text-red-400 mr-2">🕐</span>
                  <span>10AM - 11PM Daily</span>
                </div>
                <div class="flex items-center text-sm text-gray-400">
                  <span class="text-red-400 mr-2">🍽️</span>
                  <span>Celebrity Chef, Burgers</span>
                </div>
              </div>
              <button class="w-full bg-linear-to-r from-red-600 to-orange-600 text-white font-bold py-3 px-6 rounded-full hover:scale-105 transition-transform">
                VIEW MENU
              </button>
            </div>
          </div>

          <!-- Café Hollywood -->
          <div class="group relative bg-linear-to-b from-gray-900 to-black rounded-3xl overflow-hidden border-2 border-cyan-500/30 hover:border-cyan-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50">
            <div class="relative h-80 overflow-hidden">
              <img
                src="https://news3lv.com/resources/media/b5c7c109-eadd-4fc4-8200-273fa876c39c-medium16x9_CafHollywoodLasVegasPhotoCredit_SamAbrams1.jpg?1511293917499"
                alt="Café Hollywood"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>
              <div class="absolute top-4 right-4 bg-cyan-600 text-white px-4 py-2 rounded-full font-black text-sm shadow-xl">
                ALL-DAY DINING
              </div>
            </div>
            <div class="p-8">
              <h3 class="text-3xl font-black mb-3 text-cyan-500">CAFÉ HOLLYWOOD</h3>
              <p class="text-gray-400 mb-6 leading-relaxed">
                All-day dining featuring international and local flavors, from breakfast to dinner, with stunning views and Hollywood ambiance.
              </p>
              <div class="space-y-3 mb-6">
                <div class="flex items-center text-sm text-gray-400">
                  <span class="text-cyan-400 mr-2">🕐</span>
                  <span>6AM - 11:30PM Daily</span>
                </div>
                <div class="flex items-center text-sm text-gray-400">
                  <span class="text-cyan-400 mr-2">🍽️</span>
                  <span>Western, Brunch, Coffee</span>
                </div>
              </div>
              <button class="w-full bg-linear-to-r from-cyan-600 to-blue-600 text-white font-bold py-3 px-6 rounded-full hover:scale-105 transition-transform">
                VIEW MENU
              </button>
            </div>
          </div>

          <!-- The Marquee Bar -->
          <div class="group relative bg-linear-to-b from-gray-900 to-black rounded-3xl overflow-hidden border-2 border-purple-500/30 hover:border-purple-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            <div class="relative h-80 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80"
                alt="The Marquee Bar"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>
              <div class="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full font-black text-sm shadow-xl">
                NIGHTLIFE
              </div>
            </div>
            <div class="p-8">
              <h3 class="text-3xl font-black mb-3 text-purple-500">THE MARQUEE BAR</h3>
              <p class="text-gray-400 mb-6 leading-relaxed">
                Lights, laughter, and late-night flair. Premium cocktails, tapas, and the best nightlife experience in Phnom Penh.
              </p>
              <div class="space-y-3 mb-6">
                <div class="flex items-center text-sm text-gray-400">
                  <span class="text-purple-400 mr-2">🕐</span>
                  <span>5PM - 1AM Daily</span>
                </div>
                <div class="flex items-center text-sm text-gray-400">
                  <span class="text-purple-400 mr-2">🍽️</span>
                  <span>Cocktails & Tapas</span>
                </div>
              </div>
              <button class="w-full bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-full hover:scale-105 transition-transform">
                VIEW MENU
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Menus Section -->
    <section class="relative py-32 px-4 bg-linear-to-b from-black via-purple-950/20 to-black">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-6xl md:text-7xl font-black text-center mb-20 text-white">
          SIGNATURE <span class="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">MENUS</span>
        </h2>

        <!-- Gordon Ramsay Burger Menu -->
        <div class="mb-20">
          <div class="text-center mb-12">
            <h3 class="text-4xl font-black text-red-500 mb-4">GORDON RAMSAY BURGER</h3>
            <p class="text-xl text-gray-300">Legendary burgers by the master chef</p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-linear-to-r from-gray-900 to-black p-8 rounded-3xl border-l-4 border-red-500">
              <h4 class="text-2xl font-bold text-white mb-6">HELL'S KITCHEN BURGER</h4>
              <p class="text-gray-400 mb-4">8oz Angus beef, roasted jalapeños, pepper jack cheese, chipotle aioli, crispy onion rings, arugula on brioche bun</p>
              <p class="text-3xl font-black text-red-500">$18.99</p>
            </div>

            <div class="bg-linear-to-r from-gray-900 to-black p-8 rounded-3xl border-l-4 border-orange-500">
              <h4 class="text-2xl font-bold text-white mb-6">TRUFFLE ROYALE</h4>
              <p class="text-gray-400 mb-4">10oz Wagyu beef, black truffle aioli, wild mushroom medley, aged gruyere, caramelized onions, truffle oil drizzle</p>
              <p class="text-3xl font-black text-orange-500">$24.99</p>
            </div>

            <div class="bg-linear-to-r from-gray-900 to-black p-8 rounded-3xl border-l-4 border-yellow-500">
              <h4 class="text-2xl font-bold text-white mb-6">AMERICAN CLASSIC</h4>
              <p class="text-gray-400 mb-4">8oz prime beef, aged cheddar, applewood bacon, iceberg lettuce, beef tomato, house special sauce, pickles</p>
              <p class="text-3xl font-black text-yellow-500">$16.99</p>
            </div>

            <div class="bg-linear-to-r from-gray-900 to-black p-8 rounded-3xl border-l-4 border-red-500">
              <h4 class="text-2xl font-bold text-white mb-6">PLANT POWER</h4>
              <p class="text-gray-400 mb-4">Impossible patty, vegan cheese, avocado, roasted peppers, greens, chipotle mayo, whole grain bun</p>
              <p class="text-3xl font-black text-red-500">$17.99</p>
            </div>
          </div>
        </div>

        <!-- Café Hollywood Menu -->
        <div class="mb-20">
          <div class="text-center mb-12">
            <h3 class="text-4xl font-black text-cyan-500 mb-4">CAFÉ HOLLYWOOD</h3>
            <p class="text-xl text-gray-300">All-day dining excellence</p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-linear-to-b from-gray-900 to-black p-6 rounded-2xl border border-cyan-500/30">
              <h4 class="text-xl font-bold text-white mb-4">BREAKFAST</h4>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-400">Belgian Waffles</span>
                  <span class="text-cyan-400 font-bold">$12.99</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Eggs Benedict</span>
                  <span class="text-cyan-400 font-bold">$14.99</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Avocado Toast</span>
                  <span class="text-cyan-400 font-bold">$11.99</span>
                </div>
              </div>
            </div>

            <div class="bg-linear-to-b from-gray-900 to-black p-6 rounded-2xl border border-cyan-500/30">
              <h4 class="text-xl font-bold text-white mb-4">LUNCH</h4>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-400">Grilled Salmon Salad</span>
                  <span class="text-cyan-400 font-bold">$18.99</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Chicken Caesar Wrap</span>
                  <span class="text-cyan-400 font-bold">$15.99</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Mediterranean Bowl</span>
                  <span class="text-cyan-400 font-bold">$16.99</span>
                </div>
              </div>
            </div>

            <div class="bg-linear-to-b from-gray-900 to-black p-6 rounded-2xl border border-cyan-500/30">
              <h4 class="text-xl font-bold text-white mb-4">DINNER</h4>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-400">Ribeye Steak</span>
                  <span class="text-cyan-400 font-bold">$32.99</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Seafood Paella</span>
                  <span class="text-cyan-400 font-bold">$28.99</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Duck Confit</span>
                  <span class="text-cyan-400 font-bold">$26.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- The Marquee Bar Menu -->
        <div>
          <div class="text-center mb-12">
            <h3 class="text-4xl font-black text-purple-500 mb-4">THE MARQUEE BAR</h3>
            <p class="text-xl text-gray-300">Premium cocktails and nightlife</p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-linear-to-r from-gray-900 to-black p-8 rounded-3xl border-l-4 border-purple-500">
              <h4 class="text-2xl font-bold text-white mb-6">SIGNATURE COCKTAILS</h4>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <div>
                    <p class="text-white font-semibold">Hollywood Star</p>
                    <p class="text-gray-400 text-sm">Vodka, elderflower, lime, champagne</p>
                  </div>
                  <p class="text-2xl font-black text-purple-500">$16.99</p>
                </div>
                <div class="flex justify-between items-center">
                  <div>
                    <p class="text-white font-semibold">Red Carpet Martini</p>
                    <p class="text-gray-400 text-sm">Gin, vermouth, olive, lemon twist</p>
                  </div>
                  <p class="text-2xl font-black text-purple-500">$18.99</p>
                </div>
                <div class="flex justify-between items-center">
                  <div>
                    <p class="text-white font-semibold">Oscar Night</p>
                    <p class="text-gray-400 text-sm">Whiskey, honey, lemon, ginger</p>
                  </div>
                  <p class="text-2xl font-black text-purple-500">$17.99</p>
                </div>
              </div>
            </div>

            <div class="bg-linear-to-r from-gray-900 to-black p-8 rounded-3xl border-l-4 border-pink-500">
              <h4 class="text-2xl font-bold text-white mb-6">TAPAS & SMALL PLATES</h4>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <div>
                    <p class="text-white font-semibold">Truffle Fries</p>
                    <p class="text-gray-400 text-sm">Parmesan, herbs, truffle oil</p>
                  </div>
                  <p class="text-2xl font-black text-pink-500">$12.99</p>
                </div>
                <div class="flex justify-between items-center">
                  <div>
                    <p class="text-white font-semibold">Tuna Tartare</p>
                    <p class="text-gray-400 text-sm">Avocado, sesame, soy glaze</p>
                  </div>
                  <p class="text-2xl font-black text-pink-500">$16.99</p>
                </div>
                <div class="flex justify-between items-center">
                  <div>
                    <p class="text-white font-semibold">Mini Sliders</p>
                    <p class="text-gray-400 text-sm">3 pieces, choice of beef or chicken</p>
                  </div>
                  <p class="text-2xl font-black text-pink-500">$14.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="relative py-32 px-4">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-6xl md:text-7xl font-black text-center mb-20 text-white">
          FOOD <span class="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">GALLERY</span>
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="i in 12" :key="i" class="group relative overflow-hidden rounded-2xl aspect-square">
            <img
              :src="`https://images.unsplash.com/photo-${1500000000000 + i * 100000}?w=600&q=80`"
              :alt="`Food image ${i}`"
              class="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-linear-to-t from-purple-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
              <p class="text-white font-black text-xl">Delicious</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-32 px-4 bg-linear-to-b from-black to-purple-950">
      <div class="max-w-4xl mx-auto text-center">
        <div class="text-6xl mb-8">🍽️</div>
        <h2 class="text-5xl md:text-6xl font-black mb-8 text-white">
          READY TO <span class="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">INDULGE</span>?
        </h2>
        <p class="text-2xl text-gray-300 mb-12 leading-relaxed">
          Book your table at Planet Hollywood's world-class dining establishments
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button class="px-12 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold text-xl rounded-full hover:scale-105 transition-transform">
            MAKE RESERVATION
          </button>
          <button class="px-12 py-4 border-4 border-white text-white font-bold text-xl rounded-full hover:bg-white hover:text-black transition-all duration-300">
            CALL US NOW
          </button>
        </div>

        <div class="mt-16 flex justify-center gap-8 text-gray-400">
          <a href="#" class="hover:text-purple-400 transition-colors">
            <span class="text-4xl">📘</span>
          </a>
          <a href="#" class="hover:text-purple-400 transition-colors">
            <span class="text-4xl">📷</span>
          </a>
          <a href="#" class="hover:text-purple-400 transition-colors">
            <span class="text-4xl">🐦</span>
          </a>
          <a href="#" class="hover:text-purple-400 transition-colors">
            <span class="text-4xl">▶️</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Page for Planet Hollywood Dining
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 1;
  }
}

.floating-element {
  position: absolute;
  font-size: 2rem;
  animation: float linear infinite;
  pointer-events: none;
  filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.4));
}

html {
  scroll-behavior: smooth;
}
</style>
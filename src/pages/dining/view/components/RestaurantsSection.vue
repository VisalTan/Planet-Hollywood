<template>
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
</template>

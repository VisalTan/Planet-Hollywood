<template>
    <section class="py-24 bg-black">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-6xl font-black mb-4">
            <span class="bg-linear-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              SIGNATURE EXPERIENCES
            </span>
          </h2>
          <p class="text-xl text-gray-400">Elevate your stay with unforgettable moments</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Cliff Pool -->
          <div
            class="relative group overflow-hidden rounded-3xl bg-linear-to-br from-cyan-600/30 to-blue-900/30 border border-cyan-500/30">
            <div class="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
            <div
              class="aspect-video bg-linear-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center overflow-hidden">
              <img class="w-full h-full object-cover"
                src="https://www.theclanhotel.com.sg/globalassets/media-library/stayfareast/images/clanhotel/all-images/amenities/listing/listitem1skypool/tch_swimming-pool_twilight_1366-x-649.jpg"></img>
            </div>
            <div class="relative p-8">
              <h3 class="text-4xl font-black mb-4 text-cyan-400">CLIFF POOL</h3>
              <p class="text-gray-300 mb-4 leading-relaxed">
                A cantilevered masterpiece stretching dramatically along the rooftop. Glass-edged design creates the
                illusion of floating among the clouds with curated playlists and golden sunsets.
              </p>
              <div class="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>9:00 AM - 10:00 PM</span>
              </div>
              <div
                class="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 text-sm font-semibold rounded-full border border-cyan-500/50">
                Free for Guests
              </div>
            </div>
          </div>

          <!-- Observatory Deck -->
          <div
            class="relative group overflow-hidden rounded-3xl bg-linear-to-br from-purple-600/30 to-pink-900/30 border border-purple-500/30">
            <div class="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
            <div
              class="aspect-video bg-linear-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center overflow-hidden">
              <img class="w-full h-full object-cover"
                src="https://images.prestigeonline.com/wp-content/uploads/sites/9/2023/11/17172619/eclipse-skybar.jpeg"></img>
            </div>
            <div class="relative p-8">
              <h3 class="text-4xl font-black mb-4 text-purple-400">OBSERVATORY DECK</h3>
              <p class="text-gray-300 mb-4 leading-relaxed">
                360° panoramic views capturing the city's brilliance by day and golden glow by night. Sip, unwind, and
                watch Phnom Penh transform — a cinematic moment suspended between heaven and earth.
              </p>
              <div class="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>6:00 AM - 8:00 PM</span>
              </div>
              <div
                class="inline-block px-4 py-2 bg-purple-500/20 text-purple-400 text-sm font-semibold rounded-full border border-purple-500/50">
                Free for Guests
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Amenities Grid -->
        <div class="grid md:grid-cols-4 gap-6 mt-12">
          <div
            class="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-yellow-500/50 transition-all duration-300">
            <svg class="w-12 h-12 text-yellow-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h4 class="text-lg font-bold text-white mb-2">State-of-the-Art Fitness</h4>
            <p class="text-sm text-gray-400">Modern equipment and expert trainers</p>
          </div>
          <div
            class="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-pink-500/50 transition-all duration-300">
            <svg class="w-12 h-12 text-pink-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h4 class="text-lg font-bold text-white mb-2">Rejuvenating Spa</h4>
            <p class="text-sm text-gray-400">Relaxation and wellness treatments</p>
          </div>
          <div
            class="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
            <svg class="w-12 h-12 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h4 class="text-lg font-bold text-white mb-2">Smart Room Technology</h4>
            <p class="text-sm text-gray-400">Intelligent controls at your fingertips</p>
          </div>
          <div
            class="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
            <svg class="w-12 h-12 text-purple-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
            </svg>
            <h4 class="text-lg font-bold text-white mb-2">Film Memorabilia</h4>
            <p class="text-sm text-gray-400">Iconic pieces throughout the hotel</p>
          </div>
        </div>
      </div>
    </section>
</template>
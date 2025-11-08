<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-950 text-white">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-purple-500/20">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <div class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          PLANET HOLLYWOOD
        </div>
        <div class="hidden md:flex space-x-8">
          <a href="#rooms" class="hover:text-purple-400 transition-colors">Rooms</a>
          <a href="#dining" class="hover:text-purple-400 transition-colors">Dining</a>
          <a href="#events" class="hover:text-purple-400 transition-colors">Events</a>
          <a href="#experiences" class="hover:text-purple-400 transition-colors">Experiences</a>
          <a href="#contact" class="hover:text-purple-400 transition-colors">Contact</a>
        </div>
        <button class="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all">
          Book Now
        </button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920')] bg-cover bg-center opacity-20"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-blue-900/50 to-indigo-950"></div>
      
      <div class="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div class="animate-fade-in-up">
          <h1 class="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            PLANET HOLLYWOOD
          </h1>
          <p class="text-3xl md:text-5xl mb-4 text-blue-200 font-light">Phnom Penh</p>
          <p class="text-xl md:text-2xl mb-12 text-purple-200 max-w-3xl mx-auto">
            Where Hollywood Glamour Meets Cambodian Charm
          </p>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <button class="bg-gradient-to-r from-purple-600 to-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-2xl shadow-purple-500/30">
              Explore Our Rooms
            </button>
            <button class="border-2 border-purple-400 px-10 py-4 rounded-full text-lg font-semibold hover:bg-purple-400/20 transition-all">
              View Gallery
            </button>
          </div>
        </div>
      </div>
      
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="py-24 px-6 bg-gradient-to-b from-indigo-950 to-purple-900/50">
      <div class="container mx-auto max-w-6xl">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              Asia's First Planet Hollywood Hotel
            </h2>
            <p class="text-lg text-purple-100 mb-6 leading-relaxed">
              Planet Hollywood Hotel Phnom Penh marks the brand's first-ever hotel in Asia — a milestone that brings Hollywood's signature energy to the heart of Cambodia. Rising from the landmark JS Tower in the prestigious BKK1 district, we blend cinematic glamour with contemporary sophistication.
            </p>
            <p class="text-lg text-purple-100 mb-8 leading-relaxed">
              With 148 meticulously designed rooms, world-class dining including Gordon Ramsay Burger, a breathtaking cliff pool, and iconic film memorabilia throughout, every corner tells a story. This is where guests step into their own spotlight moment.
            </p>
            <div class="grid grid-cols-3 gap-6">
              <div class="text-center">
                <div class="text-4xl font-bold text-purple-300 mb-2">148</div>
                <div class="text-sm text-blue-200">Rooms & Suites</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-purple-300 mb-2">900+</div>
                <div class="text-sm text-blue-200">sqm Events Space</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-purple-300 mb-2">5★</div>
                <div class="text-sm text-blue-200">Facilities</div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="aspect-square rounded-3xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-400/30 p-8 shadow-2xl shadow-purple-500/20">
              <div class="h-full bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800')] bg-cover bg-center rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Rooms Section -->
    <section id="rooms" class="py-24 px-6 bg-black/30">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <h2 class="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            Four Themes. One Star Experience.
          </h2>
          <p class="text-xl text-purple-200 max-w-3xl mx-auto">
            Each floor tells its own story through design, colour, and energy — from bold glamour to vibrant playfulness
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          {/* Phamous */}
          <div class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-600/20 to-purple-900/20 backdrop-blur-sm border border-amber-400/30 hover:border-amber-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/30">
            <div class="p-8">
              <div class="flex items-center mb-4">
                <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 class="text-4xl font-bold text-amber-300">Phamous</h3>
              </div>
              <p class="text-purple-100 mb-6 leading-relaxed">
                The crown jewel of the collection channels red-carpet energy with statement décor in gold and copper tones, starlight motifs, and an expansive layout. Experience the glamour of celebrity living.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-4 py-2 bg-amber-500/20 rounded-full text-sm border border-amber-400/30">Superior 23m²</span>
                <span class="px-4 py-2 bg-amber-500/20 rounded-full text-sm border border-amber-400/30">Deluxe 29m²</span>
                <span class="px-4 py-2 bg-amber-500/20 rounded-full text-sm border border-amber-400/30">Suite 120m²</span>
              </div>
              <button class="w-full bg-gradient-to-r from-amber-600 to-amber-800 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all">
                View Phamous Rooms
              </button>
            </div>
          </div>

          {/* Phantastic */}
          <div class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-900/20 backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
            <div class="p-8">
              <div class="flex items-center mb-4">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 class="text-4xl font-bold text-blue-300">Phantastic</h3>
              </div>
              <p class="text-purple-100 mb-6 leading-relaxed">
                Compact yet stylish, inspired by Hollywood film set illusions. Features layered textures, cinematic lighting, and immersive design that feels larger than life. Perfect for solo travelers.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-4 py-2 bg-blue-500/20 rounded-full text-sm border border-blue-400/30">Superior 23m²</span>
                <span class="px-4 py-2 bg-blue-500/20 rounded-full text-sm border border-blue-400/30">Deluxe 29m²</span>
                <span class="px-4 py-2 bg-blue-500/20 rounded-full text-sm border border-blue-400/30">Executive 60m²</span>
              </div>
              <button class="w-full bg-gradient-to-r from-blue-600 to-blue-800 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                View Phantastic Rooms
              </button>
            </div>
          </div>

          {/* Phabulous */}
          <div class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
            <div class="p-8">
              <div class="flex items-center mb-4">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 class="text-4xl font-bold text-purple-300">Phabulous</h3>
              </div>
              <p class="text-purple-100 mb-6 leading-relaxed">
                Spacious and sophisticated, celebrating heritage and modernity. Inspired by Cambodian weaving patterns as contemporary mosaics. Perfect for families, executives, or long-stay guests.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-4 py-2 bg-purple-500/20 rounded-full text-sm border border-purple-400/30">Superior 23m²</span>
                <span class="px-4 py-2 bg-purple-500/20 rounded-full text-sm border border-purple-400/30">Premier 53m²</span>
                <span class="px-4 py-2 bg-purple-500/20 rounded-full text-sm border border-purple-400/30">Executive 65m²</span>
              </div>
              <button class="w-full bg-linear-to-r from-purple-600 to-purple-800 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                View Phabulous Rooms
              </button>
            </div>
          </div>

          {/* Phun */}
          <div class="group relative overflow-hidden rounded-3xl bg-linear-to-br from-pink-600/20 to-purple-900/20 backdrop-blur-sm border border-pink-400/30 hover:border-pink-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30">
            <div class="p-8">
              <div class="flex items-center mb-4">
                <div class="w-16 h-16 bg-linear-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 class="text-4xl font-bold text-pink-300">Phun</h3>
              </div>
              <p class="text-purple-100 mb-6 leading-relaxed">
                Playful and vibrant, drawing inspiration from Cambodian artistry and music equalizers. Integrates LED lighting and bold décor for an interactive stay. Ideal for couples who love lively vibes.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-4 py-2 bg-pink-500/20 rounded-full text-sm border border-pink-400/30">Superior 23m²</span>
                <span class="px-4 py-2 bg-pink-500/20 rounded-full text-sm border border-pink-400/30">Deluxe 29m²</span>
                <span class="px-4 py-2 bg-pink-500/20 rounded-full text-sm border border-pink-400/30">Penthouse 120m²</span>
              </div>
              <button class="w-full bg-gradient-to-r from-pink-600 to-pink-800 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all">
                View Phun Rooms
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dining Section -->
    <section id="dining" class="py-24 px-6 bg-gradient-to-b from-purple-900/30 to-black/50">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <h2 class="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            World-Class Dining
          </h2>
          <p class="text-xl text-purple-200">From all-day dining to celebrity chef experiences</p>
        </div>

        <div class="space-y-8">
          {/* Gordon Ramsay Burger */}
          <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-900/30 to-purple-900/30 backdrop-blur-sm border border-red-400/30 hover:border-red-400/60 transition-all group">
            <div class="grid md:grid-cols-2 gap-8 p-8 items-center">
              <div>
                <div class="inline-block px-4 py-2 bg-red-500/20 rounded-full text-sm border border-red-400/30 mb-4">
                  First in Southeast Asia
                </div>
                <h3 class="text-5xl font-bold mb-4 text-red-300">Gordon Ramsay Burger</h3>
                <p class="text-purple-100 mb-6 leading-relaxed text-lg">
                  Perched beside the cliff pool on our rooftop, Gordon Ramsay Burger Phnom Penh marks a culinary milestone. Each burger is elevated through premium ingredients, signature sauces, and Gordon Ramsay's unmistakable flair against panoramic city views.
                </p>
                <div class="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div class="text-2xl font-bold text-red-300 mb-1">10am - 11pm</div>
                    <div class="text-sm text-purple-200">Operating Hours</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-red-300 mb-1">108 Seats</div>
                    <div class="text-sm text-purple-200">Rooftop Setting</div>
                  </div>
                </div>
                <button class="bg-gradient-to-r from-red-600 to-red-800 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all">
                  Reserve a Table
                </button>
              </div>
              <div class="relative h-80 bg-[url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800')] bg-cover bg-center rounded-2xl group-hover:scale-105 transition-transform duration-500"></div>
            </div>
          </div>

          {/* Café Hollywood */}
          <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-900/30 to-purple-900/30 backdrop-blur-sm border border-amber-400/30 hover:border-amber-400/60 transition-all group">
            <div class="grid md:grid-cols-2 gap-8 p-8 items-center">
              <div class="relative h-80 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800')] bg-cover bg-center rounded-2xl group-hover:scale-105 transition-transform duration-500"></div>
              <div>
                <h3 class="text-5xl font-bold mb-4 text-amber-300">Café Hollywood</h3>
                <p class="text-purple-100 mb-6 leading-relaxed text-lg">
                  Located on the 30th floor lobby, Café Hollywood brings the celebrated flair of Planet Hollywood Resort Las Vegas to Phnom Penh. This all-day dining destination serves international and local flavors with panoramic city views and an open-show kitchen.
                </p>
                <div class="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div class="text-2xl font-bold text-amber-300 mb-1">6am - 11:30pm</div>
                    <div class="text-sm text-purple-200">All Day Dining</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-amber-300 mb-1">150 Seats</div>
                    <div class="text-sm text-purple-200">Vibrant Ambience</div>
                  </div>
                </div>
                <button class="bg-gradient-to-r from-amber-600 to-amber-800 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all">
                  View Menu
                </button>
              </div>
            </div>
          </div>

          {/* The Marquee Bar */}
          <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/60 transition-all group">
            <div class="grid md:grid-cols-2 gap-8 p-8 items-center">
              <div>
                <h3 class="text-5xl font-bold mb-4 text-purple-300">The Marquee Bar</h3>
                <p class="text-purple-100 mb-6 leading-relaxed text-lg">
                  Right beside Café Hollywood, The Marquee Bar is where energy rises as evening unfolds. With striking Hollywood-style marquee signage, bar flairs, and live entertainment, every pour becomes a performance with Las Vegas sparkle on Phnom Penh's skyline.
                </p>
                <div class="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div class="text-2xl font-bold text-purple-300 mb-1">5pm - 1am</div>
                    <div class="text-sm text-purple-200">Evening Hours</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-purple-300 mb-1">Bar Flairs</div>
                    <div class="text-sm text-purple-200">Live Entertainment</div>
                  </div>
                </div>
                <button class="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                  See Cocktails
                </button>
              </div>
              <div class="relative h-80 bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800')] bg-cover bg-center rounded-2xl group-hover:scale-105 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Guest Experiences Section -->
    <section id="experiences" class="py-24 px-6 bg-gradient-to-b from-black/50 to-purple-900/30">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <h2 class="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            Unforgettable Experiences
          </h2>
          <p class="text-xl text-purple-200">Where every moment is a red-carpet affair</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          {/* Cliff Pool */}
          <div class="relative overflow-hidden rounded-3xl h-96 group">
            <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800')] bg-cover bg-center"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent group-hover:from-blue-900/95 transition-all"></div>
            <div class="relative h-full p-8 flex flex-col justify-end">
              <h3 class="text-4xl font-bold mb-3 text-blue-200">Cliff Pool</h3>
              <p class="text-purple-100 mb-4">
                A glass-edged rooftop masterpiece stretching dramatically along the skyline. Float among the clouds with curated playlists and golden sunsets transforming every swim into a red-carpet moment.
              </p>
              <div class="flex gap-4 text-sm">
                <span class="px-3 py-1 bg-blue-500/30 rounded-full border border-blue-400/30">9am - 10pm</span>
                <span class="px-3 py-1 bg-blue-500/30 rounded-full border border-blue-400/30">Free for Guests</span>
              </div>
            </div>
          </div>

          {/* Observatory Deck */}
          <div class="relative overflow-hidden rounded-3xl h-96 group">
            <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800')] bg-cover bg-center"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent group-hover:from-purple-900/95 transition-all"></div>
            <div class="relative h-full p-8 flex flex-col justify-end">
              <h3 class="text-4xl font-bold mb-3 text-purple-200">Observatory Deck</h3>
              <p class="text-purple-100 mb-4">
                Perched atop the hotel with 360° panoramic views capturing the city's brilliance by day and golden glow by night. A cinematic moment suspended between heaven and earth.
              </p>
              <div class="flex gap-4 text-sm">
                <span class="px-3 py-1 bg-purple-500/30 rounded-full border border-purple-400/30">6am - 8pm</span>
                <span class="px-3 py-1 bg-purple-500/30 rounded-full border border-purple-400/30">360° Views</span>
              </div>
            </div>
          </div>

          {/* Spa */}
          <div class="relative overflow-hidden rounded-3xl h-96 group">
            <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800')] bg-cover bg-center"></div>
            <div class="absolute inset-0 bg-linear-to-t from-pink-900/90 via-pink-900/50 to-transparent group-hover:from-pink-900/95 transition-all"></div>
            <div class="relative h-full p-8 flex flex-col justify-end">
              <h3 class="text-4xl font-bold mb-3 text-pink-200">Rejuvenating Spa</h3>
              <p class="text-purple-100 mb-4">
                Escape into tranquility with our state-of-the-art spa facilities. Experience holistic treatments that blend traditional Cambodian techniques with modern wellness practices.
              </p>
              <div class="flex gap-4 text-sm">
                <span class="px-3 py-1 bg-pink-500/30 rounded-full border border-pink-400/30">Daily Treatments</span>
                <span class="px-3 py-1 bg-pink-500/30 rounded-full border border-pink-400/30">Expert Therapists</span>
              </div>
            </div>
          </div>

          {/* Fitness Center */}
          <div class="relative overflow-hidden rounded-3xl h-96 group">
            <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800')] bg-cover bg-center"></div>
            <div class="absolute inset-0 bg-linear-to-t from-indigo-900/90 via-indigo-900/50 to-transparent group-hover:from-indigo-900/95 transition-all"></div>
            <div class="relative h-full p-8 flex flex-col justify-end">
              <h3 class="text-4xl font-bold mb-3 text-indigo-200">Fitness Center</h3>
              <p class="text-purple-100 mb-4">
                Stay on track with your wellness routine in our state-of-the-art fitness center. Equipped with cutting-edge equipment and breathtaking city views to energize your workout.
              </p>
              <div class="flex gap-4 text-sm">
                <span class="px-3 py-1 bg-indigo-500/30 rounded-full border border-indigo-400/30">24/7 Access</span>
                <span class="px-3 py-1 bg-indigo-500/30 rounded-full border border-indigo-400/30">Latest Equipment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Events & Meetings Section */}
    <section id="events" class="py-24 px-6 bg-linear-to-b from-purple-900/30 to-black/60">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <h2 class="text-6xl font-bold mb-4 bg-linear-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            Where Every Event Deserves a Spotlight
          </h2>
          <p class="text-xl text-purple-200 max-w-3xl mx-auto">
            Over 900 square meters of dynamic event space designed for everything from intimate gatherings to grand celebrations
          </p>
        </div>

        <div class="mb-12">
          <div class="relative overflow-hidden rounded-3xl bg-linear-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-400/30 p-8">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 class="text-5xl font-bold mb-6 text-purple-200">The Hall of Phame</h3>
                <p class="text-purple-100 mb-6 leading-relaxed text-lg">
                  Located on the 5th floor, surrounded by floor-to-ceiling glass walls offering panoramic city views. Features a breathtaking 8-meter-high LED screen (8m x 5m) that transforms any event into a cinematic experience.
                </p>
                <div class="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div class="text-3xl font-bold text-purple-300 mb-2">600+ m²</div>
                    <div class="text-sm text-purple-200">Main Event Space</div>
                  </div>
                  <div>
                    <div class="text-3xl font-bold text-purple-300 mb-2">280 pax</div>
                    <div class="text-sm text-purple-200">Theatre Capacity</div>
                  </div>
                </div>
                <div class="flex flex-wrap gap-3 mb-6">
                  <span class="px-4 py-2 bg-purple-500/20 rounded-full text-sm border border-purple-400/30">Banquet: 180-210</span>
                  <span class="px-4 py-2 bg-purple-500/20 rounded-full text-sm border border-purple-400/30">Classroom: 120-140</span>
                  <span class="px-4 py-2 bg-purple-500/20 rounded-full text-sm border border-purple-400/30">Viking: 160-180</span>
                  <span class="px-4 py-2 bg-purple-500/20 rounded-full text-sm border border-purple-400/30">Boardroom: 40-50</span>
                </div>
              </div>
              <div class="relative h-80 bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?w=800')] bg-cover bg-center rounded-2xl"></div>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 p-6">
            <h4 class="text-2xl font-bold mb-3 text-blue-300">Boardrooms 1, 2 & 3</h4>
            <div class="space-y-2 text-purple-100">
              <div class="flex justify-between">
                <span>Size:</span>
                <span class="font-semibold">29 m²</span>
              </div>
              <div class="flex justify-between">
                <span>Boardroom:</span>
                <span class="font-semibold">12 pax</span>
              </div>
              <div class="flex justify-between">
                <span>Theatre:</span>
                <span class="font-semibold">20 pax</span>
              </div>
            </div>
          </div>

          <div class="rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 p-6">
            <h4 class="text-2xl font-bold mb-3 text-purple-300">Executive Suite</h4>
            <div class="space-y-2 text-purple-100">
              <div class="flex justify-between">
                <span>Size:</span>
                <span class="font-semibold">53 m²</span>
              </div>
              <div class="flex justify-between">
                <span>Boardroom:</span>
                <span class="font-semibold">20 pax</span>
              </div>
              <div class="flex justify-between">
                <span>Theatre:</span>
                <span class="font-semibold">40 pax</span>
              </div>
            </div>
          </div>

          <div class="rounded-2xl bg-linear-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-sm border border-pink-400/30 p-6">
            <h4 class="text-2xl font-bold mb-3 text-pink-300">Skyview 1 & 2</h4>
            <div class="space-y-2 text-purple-100">
              <div class="flex justify-between">
                <span>Size:</span>
                <span class="font-semibold">60 m²</span>
              </div>
              <div class="flex justify-between">
                <span>Boardroom:</span>
                <span class="font-semibold">30 pax</span>
              </div>
              <div class="flex justify-between">
                <span>Theatre:</span>
                <span class="font-semibold">50 pax</span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 text-center">
          <button class="bg-gradient-to-r from-purple-600 to-blue-600 px-12 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-2xl shadow-purple-500/30">
            Plan Your Event
          </button>
        </div>
      </div>
    </section>

    {/* Sustainability Section */}
    <section class="py-24 px-6 bg-gradient-to-b from-black/60 to-green-900/20">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="text-6xl font-bold mb-4 bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
            Glamour Meets Responsibility
          </h2>
          <p class="text-xl text-purple-200">
            Our commitment to sustainable hospitality
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="rounded-2xl bg-gradient-to-br from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-green-400/30 p-8">
            <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-green-300">Green Design & Energy</h3>
            <p class="text-purple-100">
              LED lighting, energy-saving climate systems, and water-efficient fixtures reduce our environmental footprint without compromising comfort.
            </p>
          </div>

          <div class="rounded-2xl bg-gradient-to-br from-blue-600/20 to-green-600/20 backdrop-blur-sm border border-blue-400/30 p-8">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-blue-300">Sustainable Dining</h3>
            <p class="text-purple-100">
              Sourcing local Cambodian produce and sustainable seafood supports regional farmers while reducing food miles and highlighting seasonal ingredients.
            </p>
          </div>

          <div class="rounded-2xl bg-gradient-to-br from-purple-600/20 to-green-600/20 backdrop-blur-sm border border-purple-400/30 p-8">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-purple-300">Waste Reduction</h3>
            <p class="text-purple-100">
              Single-use plastics minimized through refillable amenities, water stations, and biodegradable packaging. Recycling and composting programs reduce impact.
            </p>
          </div>

          <div class="rounded-2xl bg-linear-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-sm border border-pink-400/30 p-8">
            <div class="w-12 h-12 bg-linear-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-pink-300">Community Engagement</h3>
            <p class="text-purple-100">
              Collaborating with local artisans, designers, and cultural practitioners reduces imports while investing in Cambodia's creative economy.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Local Attractions */}
    <section class="py-24 px-6 bg-gradient-to-b from-green-900/20 to-purple-900/30">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            Explore Cambodia
          </h2>
          <p class="text-xl text-purple-200">
            Discover the beauty and culture around us
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="group relative overflow-hidden rounded-2xl h-96">
            <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-purple-900/95 via-purple-900/50 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end">
              <h3 class="text-3xl font-bold mb-2 text-purple-200">Independence Monument</h3>
              <p class="text-purple-100 mb-3">
                A significant monument in the heart of Phnom Penh commemorating Cambodia's independence.
              </p>
              <div class="text-sm text-purple-300">
                <span class="font-semibold">2 km</span> · 5-8 minutes by vehicle
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden rounded-2xl h-96">
            <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563655010687-44a8bc8d7e1e?w=600')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/50 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end">
              <h3 class="text-3xl font-bold mb-2 text-blue-200">Royal Palace</h3>
              <p class="text-purple-100 mb-3">
                Cambodia's most iconic landmark, filled with history and lore. A stunning architectural masterpiece.
              </p>
              <div class="text-sm text-blue-300">
                <span class="font-semibold">1 km</span> · 5-minute walk
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden rounded-2xl h-96">
            <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=600')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-pink-900/95 via-pink-900/50 to-transparent"></div>
            <div class="relative h-full p-6 flex flex-col justify-end">
              <h3 class="text-3xl font-bold mb-2 text-pink-200">Wat Phnom</h3>
              <p class="text-purple-100 mb-3">
                Sacred temples offering serenity in the city. A spiritual haven and cultural treasure.
              </p>
              <div class="text-sm text-pink-300">
                <span class="font-semibold">1 km</span> · 5-minute bus ride
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Location Section */}
    <section class="py-24 px-6 bg-gradient-to-b from-purple-900/30 to-black/70">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            Perfectly Connected
          </h2>
          <p class="text-xl text-purple-200">
            Rising from JS Tower in prestigious BKK1 district
          </p>
        </div>

        <div class="rounded-3xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-400/30 p-8">
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-3xl font-bold mb-6 text-purple-200">Prime Location</h3>
              <p class="text-purple-100 mb-6 leading-relaxed">
                Located within the landmark JS Tower, Planet Hollywood Hotel Phnom Penh enjoys a prime position at the crossroads of business, culture, and leisure. The tower stands as a dynamic lifestyle hub — home to signature restaurants, trendy cafés, retail outlets, and entertainment venues.
              </p>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold text-purple-200 mb-1">Easy Access</div>
                    <div class="text-purple-100">Via Monivong Boulevard — minutes from major landmarks</div>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold text-purple-200 mb-1">Business Hub</div>
                    <div class="text-purple-100">Close to embassies, offices, and luxury malls</div>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold text-purple-200 mb-1">Riverside</div>
                    <div class="text-purple-100">Minutes from Phnom Penh's lively riverside precinct</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative h-96 bg-gray-800/50 rounded-2xl flex items-center justify-center">
              <div class="text-center text-purple-300">
                <svg class="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p class="text-sm">Interactive Map</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact & Footer */}
    <section id="contact" class="py-24 px-6 bg-gradient-to-b from-black/70 to-purple-900">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            Begin Your Journey
          </h2>
          <p class="text-xl text-purple-200">
            Where every stay is Phamous, Phantastic, Phabulous and Phun
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-purple-200">Email Us</h3>
            <p class="text-purple-300">inquiry@planethollywood-phnompenh.com</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-purple-200">Visit Website</h3>
            <p class="text-purple-300">planethollywood-phnompenh.com</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-purple-200">Follow Us</h3>
            <p class="text-purple-300">@PlanetHollywood</p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-400/30 rounded-3xl p-12">
          <div class="max-w-2xl mx-auto">
            <h3 class="text-3xl font-bold mb-6 text-center text-purple-200">Book Your Stay</h3>
            <form class="space-y-4">
              <div class="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" class="w-full px-4 py-3 rounded-full bg-black/30 border border-purple-400/30 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400" />
                <input type="email" placeholder="Email Address" class="w-full px-4 py-3 rounded-full bg-black/30 border border-purple-400/30 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400" />
              </div>
              <div class="grid md:grid-cols-2 gap-4">
                <input type="date" placeholder="Check-in" class="w-full px-4 py-3 rounded-full bg-black/30 border border-purple-400/30 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400" />
                <input type="date" placeholder="Check-out" class="w-full px-4 py-3 rounded-full bg-black/30 border border-purple-400/30 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400" />
              </div>
              <select class="w-full px-4 py-3 rounded-full bg-black/30 border border-purple-400/30 text-white focus:outline-none focus:border-purple-400">
                <option>Select Room Theme</option>
                <option>Phamous - Celebrity Glamour</option>
                <option>Phantastic - Cinematic Illusion</option>
                <option>Phabulous - Heritage Modern</option>
                <option>Phun - Vibrant Energy</option>
              </select>
              <textarea placeholder="Special Requests" rows="4" class="w-full px-4 py-3 rounded-3xl bg-black/30 border border-purple-400/30 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400"></textarea>
              <button type="submit" class="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-2xl shadow-purple-500/30">
                Reserve Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer class="bg-black/50 border-t border-purple-500/20 py-12 px-6">
      <div class="container mx-auto max-w-7xl">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              PLANET HOLLYWOOD
            </h4>
            <p class="text-purple-300 text-sm mb-4">
              Asia's first Planet Hollywood Hotel, bringing Hollywood glamour to the heart of Cambodia.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/40 transition-colors">
                <svg class="w-5 h-5 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/40 transition-colors">
                <svg class="w-5 h-5 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/40 transition-colors">
                <svg class="w-5 h-5 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h5 class="font-bold text-purple-200 mb-4">Accommodations</h5>
            <ul class="space-y-2 text-purple-300 text-sm">
              <li><a href="#" class="hover:text-purple-400 transition-colors">Phamous Rooms</a></li>
              <li><a href="#" class="hover:text-purple-400 transition-colors">Phantastic Rooms</a></li>
              <li><a href="#" class="hover:text-purple-400 transition-colors">Phabulous Suites</a></li>
              <li><a href="#" class="hover:text-purple-400 transition-colors">Phun Rooms</a></li>
              <li><a href="#" class="hover:text-purple-400 transition-colors">Penthouse Suites</a></li>
            </ul>
          </div>

          <div>
            <h5 class="font-bold text-purple-200 mb-4">Experiences</h5>
            <ul class="space-y-2 text-purple-300 text-sm">
              <li><a href="#" class="hover:text-purple-400 transition-colors">Gordon Ramsay Burger</a></li>
              <li><a href="#" class="hover:text-purple-400 transition-colors">Café Hollywood</a></li>
              <li><a href="#" class="hover:text-purple-400 transition-colors">The Marquee Bar</a></li>
              <li><a href="#" class="hover:text-purple-400 transition-colors">Cliff Pool</a></li>
              <li><a href="#" class="hover:text-purple-400 transition-colors">Observatory Deck</a></li>
              <li><a href="#" class="hover:text-purple-400 transition-colors">Spa & Fitness</a></li>
            </ul>
          </div>

          <div>
            <h5 class="font-bold text-purple-200 mb-4">About</h5>
            <ul class="space-y-2 text-purple-300 text-sm">
              <li><a href="#" class="hover:text-purple-400 transition-colors">Our Story</a></li>
              <li><a href="#" class="hover:text-purple-400 transition-colors">Events & Meetings</a></li>
              <li><a href="#" class="hover:text-purple-400 transition-colors">Sustainability</a></li>
              <li><a href="#" class="hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="#" class="hover:text-purple-400 transition-colors">Contact Us</a></li>
              <li><a href="#" class="hover:text-purple-400 transition-colors">Press Kit</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-purple-500/20 pt-8">
          <div class="grid md:grid-cols-2 gap-4 items-center">
            <div class="text-purple-400 text-sm">
              <p>&copy; 2025 Planet Hollywood Hotel Phnom Penh. All rights reserved.</p>
              <p class="mt-1">JS Tower, BKK1 District, Phnom Penh, Cambodia</p>
            </div>
            <div class="flex flex-wrap gap-4 md:justify-end text-purple-400 text-sm">
              <a href="#" class="hover:text-purple-300 transition-colors">Privacy Policy</a>
              <span class="text-purple-600">|</span>
              <a href="#" class="hover:text-purple-300 transition-colors">Terms of Service</a>
              <span class="text-purple-600">|</span>
              <a href="#" class="hover:text-purple-300 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>

    {/* Floating Action Button */}
    <div class="fixed bottom-8 right-8 z-50">
      <button class="w-16 h-16 bg-linear-to-br from-purple-600 to-blue-600 rounded-full shadow-2xl shadow-purple-500/50 flex items-center justify-center hover:scale-110 transition-transform group">
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
// Nuxt 3 composition API setup
// Add any reactive state or methods here if needed
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
}

html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: linear-gradient(180deg, #1a0033 0%, #000033 100%);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #9333ea 0%, #3b82f6 100%);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #a855f7 0%, #60a5fa 100%);
}

/* Smooth transitions for all interactive elements */
a,
button {
  transition: all 0.3s ease;
}

/* Gradient text animation */
@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}
</style>
<template>
  <div class="min-h-screen bg-black text-white overflow-x-hidden">
    <!-- Animated Background -->
    <div class="fixed inset-0 z-0">
      <div class="absolute inset-0 bg-linear-to-br from-pink-900/20 via-purple-900/20 to-cyan-900/20"></div>
      <div class="absolute inset-0" style="background-image: url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920'); background-size: cover; background-position: center; opacity: 0.15;"></div>
      <div class="absolute inset-0 bg-black/60"></div>
    </div>

    <!-- Navigation -->
    <nav class="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/30">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="text-2xl font-bold">
            <span class="neon-text-pink">PLANET</span> <span class="neon-text-cyan">HOLLYWOOD</span>
          </div>
          <div class="text-sm text-gray-400">Phnom Penh, Cambodia</div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative z-10 min-h-screen flex items-center justify-center pt-20">
      <div class="container mx-auto px-6 text-center">
        <div class="mb-8 animate-pulse">
          <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=200" alt="Star" class="w-32 h-32 mx-auto opacity-80" />
        </div>
        
        <h1 class="text-6xl md:text-8xl font-bold mb-6">
          <span class="gradient-text-animated">COMING SOON</span>
        </h1>
        
        <p class="text-3xl md:text-5xl font-bold mb-4">
          <span class="neon-text-pink">PHAMOUS</span> • 
          <span class="neon-text-cyan">PHANTASTIC</span> • 
          <span class="neon-text-purple">PHABULOUS</span> • 
          <span class="neon-text-gold">PHUN</span>
        </p>
        
        <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Asia's First Planet Hollywood Hotel Opens in the Heart of Phnom Penh
        </p>

        <div class="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <button class="neon-button-pink px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all">
            NOTIFY ME
          </button>
          <button class="neon-button-cyan px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all">
            LEARN MORE
          </button>
        </div>

        <!-- Countdown Timer -->
        <div class="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div class="neon-card-pink p-6 rounded-lg">
            <div class="text-4xl font-bold neon-text-pink">90</div>
            <div class="text-sm text-gray-400">DAYS</div>
          </div>
          <div class="neon-card-cyan p-6 rounded-lg">
            <div class="text-4xl font-bold neon-text-cyan">12</div>
            <div class="text-sm text-gray-400">HOURS</div>
          </div>
          <div class="neon-card-purple p-6 rounded-lg">
            <div class="text-4xl font-bold neon-text-purple">34</div>
            <div class="text-sm text-gray-400">MINUTES</div>
          </div>
          <div class="neon-card-gold p-6 rounded-lg">
            <div class="text-4xl font-bold neon-text-gold">56</div>
            <div class="text-sm text-gray-400">SECONDS</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hotel Highlight -->
    <section class="relative z-10 py-20 bg-linear-to-b from-transparent via-purple-900/10 to-transparent">
      <div class="container mx-auto px-6">
        <h2 class="text-5xl font-bold text-center mb-16">
          <span class="gradient-text-animated">THE STAR EXPERIENCE</span>
        </h2>
        
        <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800" alt="Luxury Hotel Room" class="rounded-lg shadow-2xl neon-border-glow" />
          </div>
          <div>
            <h3 class="text-4xl font-bold mb-6 neon-text-pink">148 Rooms of Pure Glamour</h3>
            <p class="text-lg text-gray-300 mb-6">
              Experience Hollywood's signature energy in the heart of Cambodia. Four uniquely themed floors await: Phamous, Phantastic, Phabulous, and Phun.
            </p>
            <ul class="space-y-4">
              <li class="flex items-center gap-3">
                <span class="text-cyan-400 text-2xl">★</span>
                <span>Smart room technology & luxurious amenities</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-pink-400 text-2xl">★</span>
                <span>Art Deco-inspired interiors</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-purple-400 text-2xl">★</span>
                <span>Iconic film memorabilia throughout</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-yellow-400 text-2xl">★</span>
                <span>Located in prestigious BKK1 district</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Gordon Ramsay Burger -->
    <section class="relative z-10 py-20">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1">
            <div class="inline-block px-4 py-2 bg-pink-500/20 rounded-full mb-6 neon-glow-pink">
              <span class="text-pink-400 font-bold">FIRST IN SOUTHEAST ASIA</span>
            </div>
            <h3 class="text-5xl font-bold mb-6 neon-text-cyan">Gordon Ramsay Burger</h3>
            <p class="text-lg text-gray-300 mb-6">
              The legendary chef brings his signature burger experience to Phnom Penh's rooftop. Savour world-class flavours with panoramic city views.
            </p>
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="neon-card-cyan p-4 rounded-lg">
                <div class="text-2xl font-bold neon-text-cyan">108</div>
                <div class="text-sm text-gray-400">Seats</div>
              </div>
              <div class="neon-card-pink p-4 rounded-lg">
                <div class="text-2xl font-bold neon-text-pink">10AM-11PM</div>
                <div class="text-sm text-gray-400">Daily</div>
              </div>
            </div>
          </div>
          <div class="order-1 md:order-2">
            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800" alt="Gourmet Burger" class="rounded-lg shadow-2xl neon-border-glow" />
          </div>
        </div>
      </div>
    </section>

    <!-- Cliff Pool -->
    <section class="relative z-10 py-20 bg-linear-to-b from-transparent via-cyan-900/10 to-transparent">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold mb-6">
            <span class="gradient-text-animated">THE CLIFF POOL</span>
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Float among the clouds in our cantilevered rooftop masterpiece
          </p>
        </div>
        
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200" alt="Infinity Pool" class="rounded-lg shadow-2xl w-full neon-border-glow" />
          <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent rounded-lg"></div>
          <div class="absolute bottom-8 left-8 right-8">
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-black/60 backdrop-blur-md p-6 rounded-lg neon-border-cyan">
                <div class="text-3xl font-bold neon-text-cyan mb-2">360°</div>
                <div class="text-sm text-gray-300">Panoramic Views</div>
              </div>
              <div class="bg-black/60 backdrop-blur-md p-6 rounded-lg neon-border-pink">
                <div class="text-3xl font-bold neon-text-pink mb-2">Glass Edge</div>
                <div class="text-sm text-gray-300">Design</div>
              </div>
              <div class="bg-black/60 backdrop-blur-md p-6 rounded-lg neon-border-purple">
                <div class="text-3xl font-bold neon-text-purple mb-2">9AM-10PM</div>
                <div class="text-sm text-gray-300">Open Daily</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dining Options -->
    <section class="relative z-10 py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-5xl font-bold text-center mb-16">
          <span class="gradient-text-animated">DINING EXPERIENCES</span>
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Cafe Hollywood -->
          <div class="neon-card-hover rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600" alt="Restaurant Interior" class="w-full h-64 object-cover" />
            <div class="p-6 bg-linear-to-b from-black/80 to-black">
              <h3 class="text-2xl font-bold mb-3 neon-text-pink">Café Hollywood</h3>
              <p class="text-gray-300 mb-4">All-day dining with international & local flavours. Located on the 30th floor lobby.</p>
              <div class="flex items-center gap-2 text-cyan-400">
                <span>6AM - 11:30PM</span>
                <span>•</span>
                <span>150 Seats</span>
              </div>
            </div>
          </div>

          <!-- The Marquee Bar -->
          <div class="neon-card-hover rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600" alt="Bar" class="w-full h-64 object-cover" />
            <div class="p-6 bg-linear-to-b from-black/80 to-black">
              <h3 class="text-2xl font-bold mb-3 neon-text-cyan">The Marquee Bar</h3>
              <p class="text-gray-300 mb-4">Cocktails, live entertainment, and Las Vegas sparkle under Hollywood-style marquee lighting.</p>
              <div class="flex items-center gap-2 text-pink-400">
                <span>5PM - 1AM</span>
                <span>•</span>
                <span>Bar Flairs</span>
              </div>
            </div>
          </div>

          <!-- Gordon Ramsay -->
          <div class="neon-card-hover rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=600" alt="Burger Restaurant" class="w-full h-64 object-cover" />
            <div class="p-6 bg-linear-to-b from-black/80 to-black">
              <h3 class="text-2xl font-bold mb-3 neon-text-purple">Gordon Ramsay Burger</h3>
              <p class="text-gray-300 mb-4">Southeast Asia's first Gordon Ramsay Burger, perched beside the rooftop cliff pool.</p>
              <div class="flex items-center gap-2 text-purple-400">
                <span>10AM - 11PM</span>
                <span>•</span>
                <span>108 Seats</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Room Themes -->
    <section class="relative z-10 py-20 bg-linear-to-b from-transparent via-pink-900/10 to-transparent">
      <div class="container mx-auto px-6">
        <h2 class="text-5xl font-bold text-center mb-16">
          <span class="gradient-text-animated">FOUR THEMES. ONE STAR EXPERIENCE.</span>
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Phamous -->
          <div class="group relative overflow-hidden rounded-lg neon-card-hover">
            <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500" alt="Luxury Suite" class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent">
              <div class="absolute bottom-0 p-6">
                <h3 class="text-3xl font-bold neon-text-pink mb-2">PHAMOUS</h3>
                <p class="text-sm text-gray-300">Red-carpet glamour with gold & copper tones. The crown jewel suite.</p>
              </div>
            </div>
          </div>

          <!-- Phantastic -->
          <div class="group relative overflow-hidden rounded-lg neon-card-hover">
            <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500" alt="Modern Room" class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent">
              <div class="absolute bottom-0 p-6">
                <h3 class="text-3xl font-bold neon-text-cyan mb-2">PHANTASTIC</h3>
                <p class="text-sm text-gray-300">Hollywood film set illusions with cinematic lighting & layered textures.</p>
              </div>
            </div>
          </div>

          <!-- Phabulous -->
          <div class="group relative overflow-hidden rounded-lg neon-card-hover">
            <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500" alt="Elegant Suite" class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent">
              <div class="absolute bottom-0 p-6">
                <h3 class="text-3xl font-bold neon-text-purple mb-2">PHABULOUS</h3>
                <p class="text-sm text-gray-300">Cambodian weaving patterns as contemporary mosaics. Heritage meets modernity.</p>
              </div>
            </div>
          </div>

          <!-- Phun -->
          <div class="group relative overflow-hidden rounded-lg neon-card-hover">
            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500" alt="Vibrant Room" class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent">
              <div class="absolute bottom-0 p-6">
                <h3 class="text-3xl font-bold neon-text-gold mb-2">PHUN</h3>
                <p class="text-sm text-gray-300">Vibrant energy with LED lighting & bold décor. Music equalizer inspiration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Events & Meetings -->
    <section class="relative z-10 py-20">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800" alt="Event Space" class="rounded-lg shadow-2xl neon-border-glow" />
          </div>
          <div>
            <h2 class="text-5xl font-bold mb-6">
              <span class="gradient-text-animated">THE HALL OF PHAME</span>
            </h2>
            <p class="text-lg text-gray-300 mb-6">
              Over 900 sqm of dynamic event space with an 8m x 5m LED screen. Where every event deserves a spotlight.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div class="neon-card-pink p-4 rounded-lg">
                <div class="text-3xl font-bold neon-text-pink mb-1">600+</div>
                <div class="text-sm text-gray-400">Square Meters</div>
              </div>
              <div class="neon-card-cyan p-4 rounded-lg">
                <div class="text-3xl font-bold neon-text-cyan mb-1">280</div>
                <div class="text-sm text-gray-400">Max Capacity</div>
              </div>
              <div class="neon-card-purple p-4 rounded-lg">
                <div class="text-3xl font-bold neon-text-purple mb-1">8m x 5m</div>
                <div class="text-sm text-gray-400">LED Screen</div>
              </div>
              <div class="neon-card-gold p-4 rounded-lg">
                <div class="text-3xl font-bold neon-text-gold mb-1">5</div>
                <div class="text-sm text-gray-400">Meeting Rooms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location -->
    <section class="relative z-10 py-20 bg-linear-to-b from-transparent via-cyan-900/10 to-transparent">
      <div class="container mx-auto px-6">
        <h2 class="text-5xl font-bold text-center mb-16">
          <span class="gradient-text-animated">PRIME LOCATION</span>
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div class="text-center neon-card-hover p-8 rounded-lg">
            <img src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400" alt="Independence Monument" class="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 class="text-xl font-bold neon-text-pink mb-2">Independence Monument</h3>
            <p class="text-gray-400">2km • 5-8 minutes by vehicle</p>
          </div>
          
          <div class="text-center neon-card-hover p-8 rounded-lg">
            <img src="https://images.unsplash.com/photo-1563492065049-7f1e1084fba9?w=400" alt="Royal Palace" class="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 class="text-xl font-bold neon-text-cyan mb-2">Royal Palace</h3>
            <p class="text-gray-400">5-minute walk</p>
          </div>
          
          <div class="text-center neon-card-hover p-8 rounded-lg">
            <img src="https://images.unsplash.com/photo-1528127269322-539801943592?w=400" alt="Wat Phnom" class="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 class="text-xl font-bold neon-text-purple mb-2">Wat Phnom</h3>
            <p class="text-gray-400">1km • 5-minute bus ride</p>
          </div>
        </div>

        <div class="text-center">
          <p class="text-xl text-gray-300 mb-4">Located in prestigious BKK1 district within JS Tower</p>
          <p class="text-lg text-gray-400">Minutes from embassies, luxury malls, and riverside precinct</p>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="relative z-10 py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center bg-linear-to-r from-pink-900/30 via-purple-900/30 to-cyan-900/30 p-12 rounded-lg neon-border-glow">
          <h2 class="text-4xl font-bold mb-6">
            <span class="gradient-text-animated">BE THE FIRST TO KNOW</span>
          </h2>
          <p class="text-xl text-gray-300 mb-8">
            Subscribe for exclusive updates, opening announcements, and special pre-launch offers
          </p>
          <div class="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              class="flex-1 px-6 py-4 rounded-full bg-black/50 border border-cyan-500/50 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
            />
            <button class="neon-button-pink px-8 py-4 rounded-full font-bold whitespace-nowrap">
              NOTIFY ME
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="relative z-10 border-t border-cyan-500/30 bg-black/80 backdrop-blur-md py-12">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 class="text-2xl font-bold mb-4">
              <span class="neon-text-pink">PLANET</span> <span class="neon-text-cyan">HOLLYWOOD</span>
            </h3>
            <p class="text-gray-400">Phnom Penh, Cambodia</p>
          </div>
          
          <div>
            <h4 class="font-bold mb-4 neon-text-cyan">FEATURES</h4>
            <ul class="space-y-2 text-gray-400">
              <li>148 Themed Rooms</li>
              <li>Gordon Ramsay Burger</li>
              <li>Cliff Pool & Observatory</li>
              <li>900sqm Event Space</li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-bold mb-4 neon-text-pink">CONTACT</h4>
            <ul class="space-y-2 text-gray-400">
              <li>inquiry@planethollywood-phnompenh.com</li>
              <li>BKK1 District</li>
              <li>JS Tower, Phnom Penh</li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-bold mb-4 neon-text-purple">FOLLOW US</h4>
            <div class="flex gap-4">
              <div class="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center neon-glow-pink cursor-pointer hover:bg-pink-500/40 transition-all">
                <span class="text-pink-400">f</span>
              </div>
              <div class="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center neon-glow-cyan cursor-pointer hover:bg-cyan-500/40 transition-all">
                <span class="text-cyan-400">X</span>
              </div>
              <div class="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center neon-glow-purple cursor-pointer hover:bg-purple-500/40 transition-all">
                <span class="text-purple-400">in</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© 2025 Planet Hollywood Phnom Penh. All rights reserved. | First Planet Hollywood Hotel in Asia</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

onMounted(() => {
  // Smooth scroll
  document.documentElement.style.scrollBehavior = 'smooth';
});
</script>

<style scoped>
/* Neon Text Animations */
@keyframes neon-pulse-pink {
  0%, 100% {
    text-shadow: 0 0 10px #ff0080, 0 0 20px #ff0080, 0 0 30px #ff0080;
  }
  50% {
    text-shadow: 0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 40px #ff0080, 0 0 50px #ff0080;
  }
}

@keyframes neon-pulse-cyan {
  0%, 100% {
    text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
  }
  50% {
    text-shadow: 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff, 0 0 50px #00ffff;
  }
}

@keyframes neon-pulse-purple {
  0%, 100% {
    text-shadow: 0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 30px #a855f7;
  }
  50% {
    text-shadow: 0 0 20px #a855f7, 0 0 30px #a855f7, 0 0 40px #a855f7, 0 0 50px #a855f7;
  }
}

@keyframes neon-pulse-gold {
  0%, 100% {
    text-shadow: 0 0 10px #ffd700, 0 0 20px #ffd700, 0 0 30px #ffd700;
  }
  50% {
    text-shadow: 0 0 20px #ffd700, 0 0 30px #ffd700, 0 0 40px #ffd700, 0 0 50px #ffd700;
  }
}

.neon-text-pink {
  animation: neon-pulse-pink 2s ease-in-out infinite;
}

.neon-text-cyan {
  animation: neon-pulse-cyan 2s ease-in-out infinite;
}

.neon-text-purple {
  animation: neon-pulse-purple 2s ease-in-out infinite;
}

.neon-text-gold {
  animation: neon-pulse-gold 2s ease-in-out infinite;
}

/* Gradient Text Animation */
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.gradient-text-animated {
  background: linear-gradient(90deg, #ff0080, #a855f7, #00ffff, #ffd700, #ff0080);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>

<template>
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1920&q=80" 
          alt="Gourmet Burger"
          class="w-full h-full object-cover opacity-40"
        />
        <div class="absolute inset-0 bg-linear-to-b from-black via-transparent to-black"></div>
      </div>

      <!-- Animated Fire Particles -->
      <div class="absolute inset-0 z-10 pointer-events-none">
        <div v-for="i in 40" :key="i" 
             class="fire-particle"
             :style="{
               left: `${Math.random() * 100}%`,
               animationDelay: `${Math.random() * 3}s`,
               animationDuration: `${3 + Math.random() * 4}s`
             }">
          🔥
        </div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <h1 class="text-7xl md:text-9xl font-black mb-6 tracking-tight">
          <span class="block text-transparent bg-clip-text bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 animate-pulse">
            GORDON RAMSAY
          </span>
          <span class="block text-white drop-shadow-2xl">BURGER</span>
        </h1>
        <p class="text-2xl md:text-4xl font-bold text-red-500 mb-4 tracking-widest">
          PLANET HOLLYWOOD
        </p>
        <p class="text-xl md:text-2xl text-gray-300 mb-12 font-light">
          📍 Phnom Penh, Cambodia
        </p>
        <button class="group relative px-12 py-5 text-xl font-bold text-white bg-linear-to-r from-red-600 to-orange-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50">
          <span class="relative z-10">RESERVE YOUR TABLE NOW</span>
          <div class="absolute inset-0 bg-linear-to-r from-yellow-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div class="w-8 h-12 border-2 border-red-500 rounded-full flex justify-center">
          <div class="w-2 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
</template>

<style scoped>
@keyframes fire-rise {
  0% {
    transform: translateY(100vh) scale(0.5);
    opacity: 1;
  }
  100% {
    transform: translateY(-20vh) scale(1.5);
    opacity: 0;
  }
}

.fire-particle {
  position: absolute;
  bottom: -20px;
  font-size: 1.5rem;
  animation: fire-rise linear infinite;
  pointer-events: none;
  filter: drop-shadow(0 0 10px rgba(239, 68, 68, 0.5));
}
</style>

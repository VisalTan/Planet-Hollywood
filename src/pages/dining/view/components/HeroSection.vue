<template>
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
</template>

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
</style>

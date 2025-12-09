<template>
  <div class="bg-black text-white overflow-x-hidden antialiased min-h-screen flex flex-col">
    <!-- Background Layers -->
    <div class="fixed inset-0 z-0">
      <div class="absolute inset-0 w-full h-full overflow-hidden">
        <div 
          class="h-full w-full bg-cover bg-center opacity-30 animate-subtle-zoom" 
          style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFRV_VBu61BRws2GJ7VS1BDY3EKbAeRcU5-JYy2hpaXn9cp__cgciHk8fOpRerfYZglL3mtZZ7Y2DkomZ8n7zq4A1eUTPHUYNgLuzvaPMPBAiQ0VfXhYTmkrZkhqNZufdakOCdlSJMjKAb5hehY_n2q1PrJ3o8HnL-bv-z7qcDNEzmkabR3zl8O5eF7uoE0Ybfucr3F4yhYnSbOMvhO9Kx8vjrAjThEULDiRRTJreEOfvXDVecOqmr5e-9AZzFQjJpA-kN29Vxj58');"
        />
      </div>
      <div class="absolute inset-0 bg-gradient-to-br from-black via-gray-900/95 to-black" />
      <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/90" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.08),transparent_50%)]" />
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] animate-pulse-slow" style="animation-delay: 2s;" />
    </div>

    <!-- Header -->
    <header class="w-full z-50 fixed top-0 left-0 transition-all duration-500 backdrop-blur-md bg-black/30 border-b border-white/5">
      <div class="max-w-7xl mx-auto px-6 md:px-10 py-3 flex items-center justify-between">
        <div class="flex items-center gap-2 group cursor-pointer">
          <div class="relative">
            <span class="material-symbols-outlined text-purple-500 text-2xl drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">
              star
            </span>
            <div class="absolute inset-0 bg-purple-500/30 blur-xl rounded-full animate-pulse" />
          </div>
          <div class="flex flex-col">
            <h2 class="text-white text-xs font-bold tracking-[0.25em] uppercase leading-none drop-shadow-lg">
              Planet Hollywood
            </h2>
            <span class="text-[9px] text-purple-500 tracking-[0.5em] uppercase opacity-90 leading-tight pl-[2px] font-light">
              Asia
            </span>
          </div>
        </div>
        <button class="hidden md:flex items-center gap-2 text-[10px] font-semibold tracking-widest uppercase text-slate-300 hover:text-purple-500 transition-all duration-300 group relative">
          <span class="material-symbols-outlined text-sm group-hover:scale-110 transition-transform">person</span>
          <span class="relative">
            Member Login
            <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500" />
          </span>
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col items-center justify-center relative z-20 w-full px-4 pt-16 pb-6">
      <!-- Decorative Border Frame -->
      <div class="absolute inset-4 md:inset-8 pointer-events-none z-0">
        <div class="absolute inset-0 border border-white/[0.06] rounded-sm" />
        <div class="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-purple-500/60" />
        <div class="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-pink-500/60" />
        <div class="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-purple-500/60" />
        <div class="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-pink-500/60" />
      </div>

      <div class="w-full max-w-3xl flex flex-col items-center text-center relative z-10">
        <!-- Top Ornament -->
        <div class="mb-6 flex flex-col items-center gap-2 animate-fade-in">
          <div class="flex items-center gap-3">
            <div class="h-[1px] w-12 bg-gradient-to-r from-transparent via-purple-500/60 to-purple-500/60" />
            <span class="material-symbols-outlined text-purple-500 text-sm animate-spin-slow">
              auto_awesome
            </span>
            <div class="h-[1px] w-12 bg-gradient-to-l from-transparent via-purple-500/60 to-purple-500/60" />
          </div>
          <span class="text-purple-500 text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]">
            The Legend Arrives
          </span>
        </div>

        <!-- Main Heading -->
        <div class="flex flex-col items-center mb-8">
          <h2 class="text-slate-200 text-xl md:text-2xl lg:text-3xl italic mb-2 tracking-wide drop-shadow-2xl animate-fade-in-up font-light">
            First in <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 font-normal not-italic">Asia</span>
          </h2>
          <h1 class="relative mt-3">
            <span class="block text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 tracking-tighter leading-[0.85] drop-shadow-2xl animate-fade-in-up">
              PLANET<br>HOLLYWOOD
            </span>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div class="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 blur-[80px] animate-pulse-slow" />
            </div>
          </h1>
        </div>

        <!-- Description -->
        <div class="flex flex-col items-center gap-6 max-w-xl mx-auto animate-fade-in-up">
          <div class="relative inline-flex items-center gap-4 px-8 py-3 overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
            <div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
            <span class="material-symbols-outlined text-purple-500 text-xs animate-pulse">
              diamond
            </span>
            <span class="relative text-white text-base font-light tracking-[0.4em] uppercase">
              Coming Soon
              <span class="absolute -inset-4 bg-purple-500/10 blur-2xl -z-10 rounded-full" />
            </span>
            <span class="material-symbols-outlined text-purple-500 text-xs animate-pulse" style="animation-delay: 0.5s;">
              diamond
            </span>
          </div>
          <p class="text-slate-300 font-light text-xs md:text-sm leading-relaxed max-w-lg tracking-wide px-4">
            Experience the red carpet lifestyle where Hollywood glamour meets Asian sophistication.
            <span class="text-purple-400/90">We are redefining luxury</span> for our inaugural Asian debut.
          </p>
        </div>

        <!-- Email Form -->
        <div class="w-full max-w-md mt-8 animate-fade-in-up px-4">
          <form class="flex flex-col gap-4 relative" @submit.prevent="handleSubmit">
            <div class="relative group">
              <div class="absolute -inset-[1px] bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-purple-500/50 rounded-sm opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 blur-sm transition-opacity duration-500" />
              <input
                v-model="email"
                class="relative w-full bg-black/60 border border-white/10 text-white placeholder-slate-500 text-xs py-4 px-6 rounded-sm focus:outline-none focus:border-purple-500/50 focus:bg-black/80 transition-all duration-300 backdrop-blur-xl"
                placeholder="Enter your email for VIP Access"
                type="email"
              >
              <div class="absolute right-4 top-1/2 -translate-y-1/2 text-purple-500 opacity-40 group-focus-within:opacity-100 transition-all duration-300 group-focus-within:scale-110">
                <span class="material-symbols-outlined text-base">workspace_premium</span>
              </div>
            </div>
            <button
              class="relative w-full py-4 overflow-hidden rounded-sm group shadow-[0_8px_32px_rgba(168,85,247,0.25)] hover:shadow-[0_8px_48px_rgba(168,85,247,0.4)] transition-all duration-500"
              type="submit"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600" />
              <div class="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div class="absolute inset-[1px] bg-gradient-to-b from-white/20 to-transparent opacity-50" />
              <span class="relative z-10 flex items-center justify-center gap-2 text-white font-bold tracking-[0.25em] uppercase text-[10px]">
                Request Invitation 
                <!-- <span class="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform duration-300">
                  arrow_forward
                </span> -->
              </span>
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_60%)] animate-pulse-slow" />
              </div>
            </button>
            <p class="text-slate-500 text-[9px] tracking-[0.2em] uppercase text-center font-light">
              Exclusive Premiere Updates · Grand Opening · VIP Access
            </p>
          </form>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="relative z-20 w-full border-t border-white/5 bg-black/60 backdrop-blur-xl mt-6">
      <div class="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="text-center md:text-left">
          <p class="text-slate-500 text-[9px] uppercase tracking-[0.3em] font-light">
            © 2024 Planet Hollywood Asia. All rights reserved.
          </p>
        </div>
        <div class="flex items-center gap-6">
          <a href="#" class="relative text-slate-400 hover:text-purple-500 transition-colors duration-300 group">
            <span class="text-[10px] uppercase tracking-wider font-semibold">Instagram</span>
            <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500" />
          </a>
          <a href="#" class="relative text-slate-400 hover:text-purple-500 transition-colors duration-300 group">
            <span class="text-[10px] uppercase tracking-wider font-semibold">Facebook</span>
            <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500" />
          </a>
          <a href="#" class="relative text-slate-400 hover:text-purple-500 transition-colors duration-300 group">
            <span class="text-[10px] uppercase tracking-wider font-semibold">Press</span>
            <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const email = ref('')

const handleSubmit = () => {
  if (email.value) {
    console.log('Email submitted:', email.value)
    alert(`Thank you for your interest! We'll send updates to ${email.value}`)
    email.value = ''
  }
}

useHead({
  htmlAttrs: {
    class: 'dark'
  },
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'anonymous'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
    }
  ]
})
</script>

<style scoped>
@keyframes subtle-zoom {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.animate-subtle-zoom {
  animation: subtle-zoom 25s ease-in-out infinite;
}

@keyframes fadeIn {
  from { 
    opacity: 0; 
  }
  to { 
    opacity: 1; 
  }
}

@keyframes fadeInUp {
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes pulseSlow {
  0%, 100% { 
    opacity: 0.3;
    transform: scale(1);
  }
  50% { 
    opacity: 0.5;
    transform: scale(1.05);
  }
}

@keyframes spinSlow {
  from { 
    transform: rotate(0deg); 
  }
  to { 
    transform: rotate(360deg); 
  }
}

.animate-fade-in {
  animation: fadeIn 1.2s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;
}

.animate-fade-in-up {
  animation: fadeInUp 1.2s ease-out forwards;
  animation-delay: 0.5s;
  opacity: 0;
}

.animate-pulse-slow {
  animation: pulseSlow 4s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spinSlow 20s linear infinite;
}
</style>
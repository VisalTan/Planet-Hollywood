<template>
    <section class="py-32 px-4 bg-black">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-6xl md:text-7xl font-black text-center mb-20 text-white">
          INSTA <span class="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400">WORTHY</span>
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="i in 8" :key="i"
               class="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border-2 border-white/10 hover:border-cyan-500 transition-all duration-300">
            <img
              :src="`https://picsum.photos/800/800?random=${i+10}`"
              alt="Dining Gallery"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span class="text-white text-4xl">📸</span>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

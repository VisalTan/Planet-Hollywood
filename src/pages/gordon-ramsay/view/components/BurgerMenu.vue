<template>
    <section class="relative py-32 px-4 bg-linear-to-b from-black via-orange-950/20 to-black">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-6xl md:text-7xl font-black text-center mb-8 text-transparent bg-clip-text bg-linear-to-r from-yellow-500 via-red-500 to-orange-500">
          SIGNATURE BURGERS
        </h2>
        <p class="text-2xl text-gray-300 text-center mb-20 max-w-3xl mx-auto">
          Hand-crafted masterpieces that define burger excellence
        </p>
        
        <div class="grid md:grid-cols-3 gap-10 mb-16">
          <div v-for="burger in burgers" :key="burger.title"
               class="group relative bg-linear-to-b from-gray-900 to-black rounded-3xl overflow-hidden border-2 border-red-500/30 hover:border-red-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50">
            <div v-if="burger.badge" class="absolute top-4 right-4 z-10 bg-red-600 text-white px-4 py-2 rounded-full font-black text-sm shadow-xl">
              {{ burger.badge }}
            </div>
            <div class="relative h-72 overflow-hidden">
              <img 
                :src="burger.image" 
                :alt="burger.title"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>
            </div>
            <div class="p-8">
              <h3 class="text-3xl font-black mb-3 text-red-500">{{ burger.title }}</h3>
              <p class="text-gray-400 mb-6 leading-relaxed">
                {{ burger.description }}
              </p>
              <div class="flex items-center justify-between">
                <p class="text-3xl font-black text-white">{{ burger.price }}</p>
                <span class="text-yellow-500 text-xl">{{ burger.spicy || '⭐⭐⭐' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
const burgers = [
  {
    title: "HELL'S KITCHEN BURGER",
    description: "8oz Angus beef, roasted jalapeños, pepper jack cheese, chipotle aioli, crispy onion rings, arugula on brioche bun",
    price: "$18.99",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&q=80",
    badge: "BEST SELLER",
    spicy: "🔥🔥🔥"
  },
  {
    title: "TRUFFLE ROYALE",
    description: "10oz Wagyu beef, black truffle aioli, wild mushroom medley, aged gruyere, caramelized onions, truffle oil drizzle",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&q=80",
    badge: "PREMIUM"
  },
  {
    title: "AMERICAN CLASSIC",
    description: "8oz prime beef, aged cheddar, applewood bacon, iceberg lettuce, beef tomato, house special sauce, pickles",
    price: "$16.99",
    image: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?w=600&q=80",
    badge: "CLASSIC"
  }
]
</script>

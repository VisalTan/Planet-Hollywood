<template>
    <div class="group relative w-full max-w-sm mx-auto bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100/50 backdrop-blur-sm">
      
      <!-- Image Container with Modern Effects -->
      <div class="relative overflow-hidden bg-linear-to-br from-gray-50 to-gray-100 p-4">
        <NuxtImg
          :src="image" 
          :alt="title"
          fit="cover" 
          width="400" 
          height="280"
          class="w-full h-56 object-cover rounded-2xl transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
          loading="lazy"
        />
        
        <!-- Wishlist/Favorite Button -->
        <button class="absolute top-6 right-6 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-50 hover:scale-110">
          <svg class="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.682l-1.318-1.364a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        
        <!-- Sale/Badge (optional) -->
        <div class="absolute top-6 left-6 bg-linear-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          NEW
        </div>
      </div>
  
      <!-- Content Container -->
      <div class="p-6 space-y-4">
        
        <!-- Product Title -->
        <h2 class="text-xl font-bold text-gray-800 line-clamp-2 leading-tight group-hover:text-gray-900 transition-colors duration-300">
          {{ title }}
        </h2>
        
        <!-- Rating Stars (Optional Enhancement) -->
        <div class="flex items-center space-x-1">
          <div class="flex text-yellow-400">
            <svg v-for="star in 5" :key="star" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <span class="text-sm text-gray-500 ml-2">(4.5)</span>
        </div>
  
        <!-- Price Container -->
        <div class="flex items-center justify-between">
          <div class="flex flex-col">
            <span class="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {{ typeof price === 'number' ? `$${price.toFixed(2)}` : price }}
            </span>
            <span class="text-sm text-gray-400 line-through">$99.99</span>
          </div>
          
          <!-- Quick Action Icons -->
          <div class="flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
            <button class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
              <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>
  
        <!-- Action Button -->
        <UButton 
          @click="onAddToCart"
          class="w-full h-12 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 group"
        >
          <svg class="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5H21M7 13v6a2 2 0 002 2h7.5" />
          </svg>
          <span>{{ buttonText }}</span>
        </UButton>
  
      </div>
  
      <!-- Loading/Success State Overlay (Optional Enhancement) -->
      <div 
        v-if="isLoading" 
        class="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center rounded-3xl transition-all duration-300"
      >
        <div class="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
  
    </div>
  </template>
  
  <script setup lang="ts">
  // Props Definition
  defineProps<{
    image: string
    title: string
    price: number | string
    buttonText: string
  }>()
  
  // Emits Definition
  const emit = defineEmits<{
    (e: "add-to-cart"): void
  }>()
  
  // Optional loading state for better UX
  const isLoading = ref(false)
  
  // Enhanced Add to Cart Function
  const onAddToCart = async () => {
    isLoading.value = true
    
    // Emit the event
    emit("add-to-cart")
    
    // Optional: Add a small delay for better UX feedback
    await new Promise(resolve => setTimeout(resolve, 800))
    isLoading.value = false
  }
  
  // Optional: Add some reactive data for enhanced features
  const isFavorited = ref(false)
  const isQuickViewOpen = ref(false)
  
  const toggleFavorite = () => {
    isFavorited.value = !isFavorited.value
  }
  </script>
  
  <style scoped>
  /* Custom styles for enhanced effects */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  /* Smooth backdrop blur for better performance */
  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }
  
  .backdrop-blur-md {
    backdrop-filter: blur(8px);
  }
  
  /* Enhanced shadow effects */
  .shadow-lg {
    box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  
  .shadow-2xl {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
  
  /* Custom gradient text */
  .bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
  }
  
  /* Animation for loading state */
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  
  .animate-spin {
    animation: spin 1s linear infinite;
  }
  
  /* Custom hover effects */
  .group:hover .group-hover\:scale-105 {
    transform: scale(1.05);
  }
  
  .group:hover .group-hover\:rotate-1 {
    transform: rotate(1deg);
  }
  
  .group:hover .group-hover\:rotate-12 {
    transform: rotate(12deg);
  }
  </style>
<template>
    <div v-if="showSplash" class="splash-screen">
      <div class="splash-content">
        <!-- Logo/Brand -->
        <div class="logo">
          <h1 class="brand-name">Your App</h1>
        </div>
        
        <!-- Loading Animation -->
        <div class="loading-container">
          <div class="loading-spinner"></div>
          <p class="loading-text">Loading...</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  // Reactive state
  const showSplash = ref(true)
  
  // Hide splash screen and navigate to /home after 3 seconds
  onMounted(() => {
    setTimeout(() => {
      showSplash.value = false
      // Navigate to /home page
      navigateTo('/planet-hollywood')
    }, 3000)
  })
  </script>
  
  <style scoped>
  .splash-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    animation: fadeOut 0.5s ease-in-out 2.5s forwards;
  }
  
  .splash-content {
    text-align: center;
    color: white;
  }
  
  .logo {
    margin-bottom: 2rem;
  }
  
  .brand-name {
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.02em;
    animation: slideUp 0.8s ease-out;
  }
  
  .loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  .loading-text {
    font-size: 1.1rem;
    margin: 0;
    opacity: 0.9;
    animation: pulse 1.5s ease-in-out infinite;
  }
  
  /* Animations */
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 0.9;
    }
    50% {
      opacity: 0.5;
    }
  }
  
  @keyframes fadeOut {
    to {
      opacity: 0;
      visibility: hidden;
    }
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .brand-name {
      font-size: 2.5rem;
    }
    
    .loading-spinner {
      width: 40px;
      height: 40px;
    }
  }
  </style>
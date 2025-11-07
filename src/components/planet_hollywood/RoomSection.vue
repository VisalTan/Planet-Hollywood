<template>
  <section id="rooms" class="py-20 bg-black relative overflow-hidden">
    <!-- Animated background gradients -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent"></div>
      <div class="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-pink-400 to-transparent">
      </div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold mb-4">
          Four Themes. One <span class="gradient-text">Star</span> Experience
        </h2>
        <p class="text-gray-400 text-xl">Each floor tells its own story through design, colour, and energy</p>
      </div>

      <!-- 3D Carousel Container -->
      <div class="relative h-[600px] flex items-center justify-center perspective-container mb-16">
        <!-- Carousel wrapper -->
        <div class="carousel-3d" :style="{ transform: `rotateY(${rotation}deg)` }">
          <div v-for="(room, index) in rooms" :key="index" class="carousel-item" :style="getCardStyle(index)"
            @click="rotateToCard(index)">
            <div class="card-inner">
              <div class="card-glow" :class="`glow-${room.color}`"></div>
              <img :src="room.image" :alt="room.name" class="card-image" />
              <div class="card-overlay">
                <div class="card-content">
                  <h3 class="text-3xl font-bold mb-2 gradient-text">{{ room.name }}</h3>
                  <p class="text-sm text-gray-300 mb-3">{{ room.description }}</p>
                  <div class="flex items-center text-xs text-cyan-400">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {{ room.size }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation buttons -->
        <button @click="rotate(-1)" class="nav-button nav-button-left">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button @click="rotate(1)" class="nav-button nav-button-right">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20">
        <div v-for="(stat, index) in stats" :key="index"
          class="neon-card bg-black/50 p-6 rounded-lg border transition-all duration-300 hover:scale-105"
          :class="`border-${stat.color}-400/50 hover:border-${stat.color}-400`">
          <div class="text-2xl font-bold mb-2" :class="`neon-text-${stat.color}`">
            {{ stat.count }}
          </div>
          <div class="text-sm text-gray-400">{{ stat.label }}</div>
        </div>
      </div>

      <!-- Penthouse Showcase Video Section -->
      <div class="relative">
        <!-- Decorative elements -->
        <div
          class="absolute -top-10 left-1/2 transform -translate-x-1/2 w-64 h-px bg-linear-to-r from-transparent via-pink-500 to-transparent">
        </div>

        <div class="text-center mb-12">
          <div class="inline-block mb-4">
            <span
              class="text-sm uppercase tracking-widest text-pink-400 font-semibold px-4 py-2 border border-pink-400/30 rounded-full bg-pink-400/10">
              Crown Jewel
            </span>
          </div>
          <h3 class="text-4xl md:text-5xl font-bold mb-4">
            The <span class="gradient-text-gold">Penthouse</span> Experience
          </h3>
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">
            Where Hollywood luxury meets sky-high sophistication. Experience the pinnacle of Planet Hollywood.
          </p>
        </div>

        <!-- Video Container with 3D effects -->
        <div class="relative group">
          <!-- Glow effect behind video -->
          <div
            class="absolute inset-0 bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500">
          </div>

          <!-- Video frame -->
          <div class="relative bg-linear-to-br from-pink-500/20 via-purple-500/20 to-cyan-500/20 p-1 rounded-3xl">
            <div class="relative bg-black rounded-3xl overflow-hidden shadow-2xl">
              <!-- Decorative corner accents -->
              <div
                class="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-pink-400 rounded-tl-3xl opacity-50">
              </div>
              <div
                class="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-cyan-400 rounded-tr-3xl opacity-50">
              </div>
              <div
                class="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-purple-400 rounded-bl-3xl opacity-50">
              </div>
              <div
                class="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-yellow-400 rounded-br-3xl opacity-50">
              </div>

              <!-- Video element -->
              <!-- <video class="w-full aspect-video object-cover" controls autoplay muted loop playsinline>
                <source src="/videos/ph-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> -->

              <Video360Viewer />

              <!-- Overlay gradient on hover -->
              <div
                class="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              </div>
            </div>
          </div>


        </div>

        <!-- Bottom decorative line -->
        <div
          class="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-64 h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Video360Viewer from '../Video360Viewer.vue';

const rooms = [
  {
    name: "Superior",
    description: "Modern comfort with Hollywood glamour",
    size: "32 sqm",
    image: "/images/phsuperior.png",
    color: "pink"
  },
  {
    name: "Deluxe",
    description: "Elevated luxury with stunning views",
    size: "38 sqm",
    image: "/images/phdelux.png",
    color: "cyan"
  },
  {
    name: "Premier Deluxe",
    description: "Ultimate sophistication and space",
    size: "45 sqm",
    image: "/images/phpredelux.png",
    color: "purple"
  },
  {
    name: "Executive",
    description: "Presidential treatment awaits",
    size: "52 sqm",
    image: "/images/phexecutive.png",
    color: "yellow"
  }
];

const stats = [
  { count: "70", label: "Superior Rooms", color: "pink" },
  { count: "40", label: "Deluxe Rooms", color: "cyan" },
  { count: "10", label: "Premier Deluxe", color: "purple" },
  { count: "16", label: "Executive Rooms", color: "yellow" },
  { count: "2", label: "Penthouses", color: "pink" }
];

const rotation = ref(0);
const currentIndex = ref(0);
const isAutoRotating = ref(true);
let autoRotateInterval: NodeJS.Timeout | null = null;

const angleStep = 360 / rooms.length;
const radius = 400;

const getCardStyle = (index: number) => {
  const angle = angleStep * index;
  const x = Math.sin((angle * Math.PI) / 180) * radius;
  const z = Math.cos((angle * Math.PI) / 180) * radius;

  return {
    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
  };
};

const rotate = (direction: number) => {
  isAutoRotating.value = false;
  if (autoRotateInterval) {
    clearInterval(autoRotateInterval);
  }

  currentIndex.value = (currentIndex.value + direction + rooms.length) % rooms.length;
  rotation.value = -angleStep * currentIndex.value;

  // Resume auto-rotation after 5 seconds
  setTimeout(() => {
    startAutoRotate();
  }, 5000);
};

const rotateToCard = (index: number) => {
  isAutoRotating.value = false;
  if (autoRotateInterval) {
    clearInterval(autoRotateInterval);
  }

  currentIndex.value = index;
  rotation.value = -angleStep * index;

  setTimeout(() => {
    startAutoRotate();
  }, 5000);
};

const startAutoRotate = () => {
  if (autoRotateInterval) {
    clearInterval(autoRotateInterval);
  }

  isAutoRotating.value = true;
  autoRotateInterval = setInterval(() => {
    if (isAutoRotating.value) {
      currentIndex.value = (currentIndex.value + 1) % rooms.length;
      rotation.value = -angleStep * currentIndex.value;
    }
  }, 3000);
};

onMounted(() => {
  startAutoRotate();
});

onUnmounted(() => {
  if (autoRotateInterval) {
    clearInterval(autoRotateInterval);
  }
});
</script>

<style scoped>
.perspective-container {
  perspective: 2000px;
}

.carousel-3d {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-item {
  position: absolute;
  width: 350px;
  height: 500px;
  left: 50%;
  top: 50%;
  margin-left: -175px;
  margin-top: -250px;
  transform-style: preserve-3d;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease;
}

.carousel-item:hover .card-inner {
  transform: scale(1.05);
  box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.9);
}

.card-glow {
  position: absolute;
  inset: -2px;
  border-radius: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.carousel-item:hover .card-glow {
  opacity: 1;
}

.glow-pink {
  background: linear-gradient(45deg, #ec4899, #f472b6);
  filter: blur(20px);
}

.glow-cyan {
  background: linear-gradient(45deg, #06b6d4, #22d3ee);
  filter: blur(20px);
}

.glow-purple {
  background: linear-gradient(45deg, #a855f7, #c084fc);
  filter: blur(20px);
}

.glow-yellow {
  background: linear-gradient(45deg, #eab308, #fbbf24);
  filter: blur(20px);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.carousel-item:hover .card-image {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.4) 50%, transparent);
  display: flex;
  align-items: flex-end;
  transition: background 0.3s ease;
}

.carousel-item:hover .card-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.2));
}

.card-content {
  padding: 2rem;
  width: 100%;
}

.gradient-text {
  background: linear-gradient(135deg, #ec4899, #06b6d4, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(236, 72, 153, 0.3);
  color: #ec4899;
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-button:hover {
  background: rgba(236, 72, 153, 0.2);
  border-color: #ec4899;
  transform: translateY(-50%) scale(1.1);
}

.nav-button-left {
  left: 2rem;
}

.nav-button-right {
  right: 2rem;
}

.neon-card {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}

.neon-text-pink {
  color: #ec4899;
  text-shadow: 0 0 10px #ec4899;
}

.neon-text-cyan {
  color: #06b6d4;
  text-shadow: 0 0 10px #06b6d4;
}

.neon-text-purple {
  color: #a855f7;
  text-shadow: 0 0 10px #a855f7;
}

@media (max-width: 768px) {
  .carousel-item {
    width: 280px;
    height: 400px;
    margin-left: -140px;
    margin-top: -200px;
  }

  .nav-button-left {
    left: 0.5rem;
  }

  .nav-button-right {
    right: 0.5rem;
  }
}
</style>
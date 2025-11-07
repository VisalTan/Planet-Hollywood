<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <nav class="flex items-center justify-between bg-gray-800 text-white px-6 py-4 shadow-md">
      <div class="flex items-center space-x-3">
        <NuxtLink to="/" class="text-2xl font-bold">MyStore</NuxtLink>
      </div>

      <div class="flex-1 max-w-md w-full mx-2">
        <div class="relative">
          <input type="text" placeholder="Search your movie..." class="w-full bg-gray-700 text-white placeholder-gray-400 rounded-full pl-10 pr-4 py-2
                   focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
          <!-- Search Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-4.35-4.35M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
          </svg>
        </div>
      </div>

      <div>
        <NuxtLink class="hover:text-blue-400" to="/Planet-Hollywood">Planet Hollywood</NuxtLink>
      </div>
    </nav>

    <!-- Main content -->
    <main class="flex-1">
      <section>
        <h3 class="font-bold text-2xl p-4">Best Movie Sections</h3>
        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-center px-4">
          <div v-for="(item, index) in 10" :key="index"
            class="w-40 bg-gray-400 rounded-lg overflow-hidden p-2 hover:bg-accent cursor-pointer" @click="handleClick">
            <NuxtImg class="w-full aspect-square object-cover rounded-md"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Batman_Detective_Comics_1000_Variant.jpg/250px-Batman_Detective_Comics_1000_Variant.jpg" />
            <h2 class="font-bold text-lg mt-2">Batman</h2>
            <h1 class="text-sm">Best Superhero In DC</h1>
          </div>
        </div>
      </section>
    </main>

    <div class=" w-60  bg-gray-600 justify-center flex items-center content-center gap-2 flex-col rounded-4xl p-10">
      <h3>Dialog Box</h3>
      <div class=" gap-2 w-60 flex justify-center">
        <UButton label="cancel" color="primary" />
        <UButton label="cofirm" color="success" />
      </div>
    </div>

    <div class=" flex justify-center">
      <UDropdownMenu :items="items">
      <UButton class=" w-20 h-20 justify-center bg-accent " icon="mdi:menu" />
    </UDropdownMenu>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white text-center py-4">
      © 2025 MyStore. All rights reserved.
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let showDialog = ref(false)

function handleClick() {
  showDialog.value = !showDialog.value;
}

const items = ref([
  [
    {
      label: 'Benjamin',
      avatar: {
        src: 'https://github.com/benjamincanac.png'
      },
      type: 'label'
    }
  ],
  [
    {
      label: 'Profile',
      icon: 'i-lucide-user'
    },
    {
      label: 'Billing',
      icon: 'i-lucide-credit-card'
    },
    {
      label: 'Settings',
      icon: 'i-lucide-cog',
      kbds: [',']
    },
    {
      label: 'Keyboard shortcuts',
      icon: 'i-lucide-monitor'
    }
  ],
  [
    {
      label: 'Team',
      icon: 'i-lucide-users'
    },
    {
      label: 'Invite users',
      icon: 'i-lucide-user-plus',
      children: [
        [
          {
            label: 'Email',
            icon: 'i-lucide-mail'
          },
          {
            label: 'Message',
            icon: 'i-lucide-message-square'
          }
        ],
        [
          {
            label: 'More',
            icon: 'i-lucide-circle-plus'
          }
        ]
      ]
    },
    {
      label: 'New team',
      icon: 'i-lucide-plus',
      kbds: ['meta', 'n']
    }
  ],
  [
    {
      label: 'GitHub',
      icon: 'i-simple-icons-github',
      to: 'https://github.com/nuxt/ui',
      target: '_blank'
    },
    {
      label: 'Support',
      icon: 'i-lucide-life-buoy',
      to: '/docs/components/dropdown-menu'
    },
    {
      label: 'API',
      icon: 'i-lucide-cloud',
      disabled: true
    }
  ],
  [
    {
      label: 'Logout',
      icon: 'i-lucide-log-out',
      kbds: ['shift', 'meta', 'q']
    }
  ]
])

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

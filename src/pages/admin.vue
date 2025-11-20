<template>
  <div class="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
    <!-- Sidebar -->
    <aside :class="[
      'fixed top-0 left-0 z-40 h-screen transition-transform duration-300 ease-in-out',
      sidebarOpen ? 'translate-x-0' : '-translate-x-full',
      'w-72 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 shadow-2xl'
    ]">
      <div class="h-full flex flex-col">
        <!-- Logo -->
        <div class="flex items-center px-6 py-6 border-b border-slate-700/50">
          <div class="w-10 h-10 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform">
            <span class="text-white font-bold text-xl">PH</span>
          </div>
          <div class="ml-3">
            <span class="text-xl font-bold text-white block">Planet Hollywood</span>
            <span class="text-xs text-slate-400">Admin Dashboard</span>
          </div>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 px-4 py-6 overflow-y-auto">
          <ul class="space-y-1">
            <li v-for="item in menuItems" :key="item.id">
              <button 
                @click="activeMenu = item.id" 
                :class="[
                  'flex items-center w-full px-4 py-3 rounded-xl transition-all duration-200 group',
                  activeMenu === item.id
                    ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/50 scale-105'
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                ]"
              >
                <svg class="w-5 h-5 shrink-0" :class="[
                  activeMenu === item.id ? 'text-white' : 'text-slate-400 group-hover:text-white'
                ]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="getIconPath(item.icon)" />
                </svg>
                <span class="ml-3 font-medium">{{ item.label }}</span>
                <svg v-if="activeMenu === item.id" class="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>

        <!-- Bottom Section -->
        <div class="px-4 py-4 border-t border-slate-700/50">
          <button 
            @click="handleLogout" 
            class="flex items-center w-full px-4 py-3 text-slate-300 hover:bg-red-500/10 hover:text-red-400 rounded-xl transition-all duration-200 group"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span class="ml-3 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <div :class="['transition-all duration-300', sidebarOpen ? 'ml-72' : 'ml-0']">
      <!-- Header -->
      <header class="sticky top-0 z-30 bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-200">
        <div class="flex items-center justify-between px-6 py-4">
          <div class="flex items-center space-x-4">
            <button 
              @click="sidebarOpen = !sidebarOpen"
              class="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all duration-200"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div>
              <h1 class="text-2xl font-bold bg-linear-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                {{ pageTitle }}
              </h1>
              <p class="text-sm text-slate-500 mt-0.5">Manage your content and reservations</p>
            </div>
          </div>
          <div class="flex items-center space-x-3">
            <div class="px-4 py-2 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <span class="text-sm font-medium text-blue-600">Admin</span>
            </div>
          </div>
        </div>
      </header>

      <!-- Content -->
      <main class="p-6">
        <!-- Dashboard -->
        <div v-if="activeMenu === 'dashboard'" class="space-y-6">
          <!-- Stats Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              v-for="stat in dynamicStats" 
              :key="stat.label" 
              class="bg-white rounded-2xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-slate-600 mb-1">{{ stat.label }}</p>
                  <p class="text-3xl font-bold text-slate-900 mb-2">{{ stat.value }}</p>
                  <p :class="['text-sm font-medium', stat.changeColor]">{{ stat.change }}</p>
                </div>
                <div :class="['p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform', stat.bgColor]">
                  <svg class="w-6 h-6" :class="stat.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="getIconPath(stat.icon)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button 
              @click="activeMenu = 'reservations'"
              class="bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-6 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left group"
            >
              <div class="flex items-center justify-between mb-4">
                <div class="p-3 bg-white/20 rounded-xl">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2">View Reservations</h3>
              <p class="text-blue-100 text-sm">Manage and track all bookings</p>
            </button>

            <button 
              @click="activeMenu = 'hero'"
              class="bg-linear-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg p-6 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left group"
            >
              <div class="flex items-center justify-between mb-4">
                <div class="p-3 bg-white/20 rounded-xl">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2">Edit Content</h3>
              <p class="text-purple-100 text-sm">Update website sections</p>
            </button>

            <button 
              @click="activeMenu = 'analytics'"
              class="bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg p-6 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left group"
            >
              <div class="flex items-center justify-between mb-4">
                <div class="p-3 bg-white/20 rounded-xl">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2">View Analytics</h3>
              <p class="text-emerald-100 text-sm">Track performance metrics</p>
            </button>
          </div>
        </div>

        <!-- Reservations -->
        <div v-if="activeMenu === 'reservations'" class="space-y-6">
          <div class="bg-white rounded-2xl shadow-xl border border-slate-200">
            <div class="px-8 py-6 border-b border-slate-200 bg-linear-to-r from-slate-50 to-blue-50">
              <div class="flex items-center justify-between">
                <div>
                  <h2 class="text-2xl font-bold text-slate-900">Reservations</h2>
                  <p class="text-sm text-slate-600 mt-1">Manage all customer bookings</p>
                </div>
                <div class="px-4 py-2 bg-blue-100 rounded-xl">
                  <span class="text-sm font-semibold text-blue-700">{{ reservations.length }} Total</span>
                </div>
              </div>
            </div>
            <div class="p-8">
              <div v-if="loading" class="text-center py-16">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
                <p class="text-slate-600 font-medium">Loading reservations...</p>
              </div>
              <div v-else-if="error" class="text-center py-16">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p class="text-red-600 font-medium">{{ error }}</p>
              </div>
              <div v-else-if="reservations.length === 0" class="text-center py-16">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
                  <svg class="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <p class="text-slate-600 font-medium">No reservations found</p>
                <p class="text-slate-500 text-sm mt-2">New reservations will appear here</p>
              </div>
              <div v-else class="overflow-x-auto rounded-xl border border-slate-200">
                <table class="min-w-full divide-y divide-slate-200">
                  <thead class="bg-slate-50">
                    <tr>
                      <th class="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Name</th>
                      <th class="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Email</th>
                      <th class="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Date</th>
                      <th class="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Time</th>
                      <th class="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Guests</th>
                      <th class="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                      <th class="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-slate-100">
                    <tr v-for="reservation in reservations" :key="reservation.id" class="hover:bg-slate-50 transition-colors">
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="font-semibold text-slate-900">{{ reservation.name }}</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{{ reservation.email }}</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{{ reservation.date }}</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{{ reservation.time }}</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{{ reservation.guests }}</td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span :class="[
                          'inline-flex px-3 py-1 text-xs font-bold rounded-full',
                          reservation.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                            reservation.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                        ]">
                          {{ reservation.status }}
                        </span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm">
                        <div class="flex items-center space-x-3">
                          <button 
                            @click="updateStatus(reservation.id, 'confirmed')"
                            :disabled="reservation.status === 'confirmed'"
                            class="text-green-600 hover:text-green-800 font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                          >
                            Confirm
                          </button>
                          <button 
                            @click="updateStatus(reservation.id, 'cancelled')"
                            :disabled="reservation.status === 'cancelled'"
                            class="text-red-600 hover:text-red-800 font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                          >
                            Cancel
                          </button>
                          <button 
                            @click="deleteReservation(reservation.id)" 
                            class="text-slate-600 hover:text-slate-900 font-medium transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- Analytics Placeholder -->
        <div v-if="activeMenu === 'analytics'" class="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
          <div class="text-center py-16">
            <div class="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-emerald-100 to-teal-100 rounded-2xl mb-6">
              <svg class="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-slate-900 mb-2">Analytics Dashboard</h2>
            <p class="text-slate-600">Advanced analytics features coming soon...</p>
          </div>
        </div>

        <!-- Settings Placeholder -->
        <div v-if="activeMenu === 'settings'" class="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
          <div class="text-center py-16">
            <div class="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-slate-100 to-slate-200 rounded-2xl mb-6">
              <svg class="w-10 h-10 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-slate-900 mb-2">Settings</h2>
            <p class="text-slate-600">Configuration options coming soon...</p>
          </div>
        </div>

        <!-- Content Sections -->
        <AdminHero v-if="activeMenu === 'hero'" />
        <AdminAbout v-if="activeMenu === 'about'" />
        <AdminPool v-if="activeMenu === 'pool'" />
        <AdminContact v-if="activeMenu === 'contact'" />
        <AdminDining v-if="activeMenu === 'dining'" />
        <AdminRooms v-if="activeMenu === 'rooms'" />
        <AdminLocation v-if="activeMenu === 'location'" />
        <AdminEvent v-if="activeMenu === 'event'" />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useReservations } from '~/composables/useReservation'
import { useAdminAuth } from '~/composables/useAdminAuth'
import AdminHero from '~/components/planet_hollywood/admin/AdminHero.vue'
import AdminAbout from '~/components/planet_hollywood/admin/AdminAbout.vue'
import AdminPool from '~/components/planet_hollywood/admin/AdminPool.vue'
import AdminContact from '~/components/planet_hollywood/admin/AdminContact.vue'
import AdminDining from '~/components/planet_hollywood/admin/AdminDining.vue'
import AdminRooms from '~/components/planet_hollywood/admin/AdminRooms.vue'
import AdminLocation from '~/components/planet_hollywood/admin/AdminLocation.vue'
import AdminEvent from '~/components/planet_hollywood/admin/AdminEvent.vue'

const { isAuthenticated, logout } = useAdminAuth()

// Redirect to login if not authenticated
if (!isAuthenticated.value) {
  await navigateTo('/admin-login')
}

const sidebarOpen = ref(true)
const activeMenu = ref('dashboard')

// Use reservations composable
const {
  reservations,
  loading,
  error,
  fetchReservations,
  updateReservation,
  deleteReservation
} = useReservations()

// Fetch reservations on mount
onMounted(async () => {
  await fetchReservations()
})

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'home' },
  { id: 'reservations', label: 'Reservations', icon: 'users' },
  { id: 'analytics', label: 'Analytics', icon: 'chart' },
  { id: 'hero', label: 'Hero Section', icon: 'star' },
  { id: 'about', label: 'About Section', icon: 'info' },
  { id: 'pool', label: 'Pool Section', icon: 'home' },
  { id: 'contact', label: 'Contact Section', icon: 'mail' },
  { id: 'dining', label: 'Dining Section', icon: 'utensils' },
  { id: 'rooms', label: 'Rooms Section', icon: 'bed' },
  { id: 'location', label: 'Location Section', icon: 'map' },
  { id: 'event', label: 'Event Section', icon: 'calendar' },
  { id: 'settings', label: 'Settings', icon: 'settings' }
]

const pageTitle = computed(() => {
  const item = menuItems.find(m => m.id === activeMenu.value)
  return item?.label || 'Dashboard'
})

// Dynamic stats based on reservations
const dynamicStats = computed(() => [
  {
    label: 'Total Reservations',
    value: reservations.value.length.toString(),
    change: '+0%',
    changeColor: 'text-slate-600',
    icon: 'users',
    bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
    iconColor: 'text-blue-600'
  },
  {
    label: 'Confirmed',
    value: reservations.value.filter(r => r.status === 'confirmed').length.toString(),
    change: '+0%',
    changeColor: 'text-slate-600',
    icon: 'check',
    bgColor: 'bg-gradient-to-br from-green-100 to-green-200',
    iconColor: 'text-green-600'
  },
  {
    label: 'Pending',
    value: reservations.value.filter(r => r.status === 'pending').length.toString(),
    change: '+0%',
    changeColor: 'text-slate-600',
    icon: 'clock',
    bgColor: 'bg-gradient-to-br from-yellow-100 to-yellow-200',
    iconColor: 'text-yellow-600'
  },
  {
    label: 'Cancelled',
    value: reservations.value.filter(r => r.status === 'cancelled').length.toString(),
    change: '+0%',
    changeColor: 'text-slate-600',
    icon: 'x',
    bgColor: 'bg-gradient-to-br from-red-100 to-red-200',
    iconColor: 'text-red-600'
  }
])

// Icon paths for stats
const getIconPath = (icon: string) => {
  const icons = {
    users: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z',
    check: 'M5 13l4 4L19 7',
    clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    x: 'M6 18L18 6M6 6l12 12',
    home: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    chart: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    settings: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
    star: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z',
    info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    mail: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    utensils: 'M12 6v6m0 0v6m0-6h6m-6 0H6',
    bed: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    map: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    calendar: 'M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10a2 2 0 002 2h4a2 2 0 002-2V11M9 11h6'
  }
  return icons[icon as keyof typeof icons] || icons.users
}

// Update reservation status
const updateStatus = async (id: string, status: 'pending' | 'confirmed' | 'cancelled') => {
  try {
    await updateReservation(id, { status })
    await fetchReservations()
  } catch (error) {
    console.error('Error updating reservation status:', error)
  }
}

// Handle logout
const handleLogout = () => {
  logout()
  navigateTo('/admin-login')
}
</script>

<style scoped>
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.group:hover .group-hover\:scale-110 {
  animation: slideIn 0.3s ease-out;
}
</style>
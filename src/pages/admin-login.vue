<script setup lang="ts">
import { ref } from 'vue'
import { useAdminAuth } from '~/composables/useAdminAuth'

const { login, isLoading, error } = useAdminAuth()
const username = ref('')
const password = ref('')
const showPassword = ref(false)

const handleLogin = async () => {
    const success = await login(username.value, password.value)
    if (success) {
        await navigateTo('/admin')
    }
}
</script>

<template>
    <div
        class="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4 relative overflow-hidden">
        <!-- Animated background elements -->
        <div class="absolute inset-0 opacity-30">
            <div
                class="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob">
            </div>
            <div
                class="absolute top-40 right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000">
            </div>
            <div
                class="absolute -bottom-8 left-40 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000">
            </div>
        </div>

        <div class="max-w-md w-full relative">
            <!-- Glassmorphism card -->
            <div class="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20">
                <!-- Logo/Icon area -->
                <div class="flex justify-center mb-8">
                    <div
                        class="w-16 h-16 bg-linear-to-br from-pink-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform duration-300">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                            </path>
                        </svg>
                    </div>
                </div>

                <div class="text-center mb-8">
                    <h1 class="text-3xl font-bold text-white mb-2 tracking-tight">Welcome Back</h1>
                    <p class="text-purple-200">Enter your credentials to access the admin panel</p>
                </div>

                <form @submit.prevent="handleLogin" class="space-y-6">
                    <div class="space-y-2">
                        <label for="username" class="block text-sm font-medium text-purple-100">Username</label>
                        <div class="relative group">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg class="h-5 w-5 text-purple-300 group-focus-within:text-pink-400 transition-colors"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            </div>
                            <input id="username" v-model="username" type="text" required
                                class="block w-full pl-10 pr-3 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                                placeholder="Enter your username" />
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label for="password" class="block text-sm font-medium text-purple-100">Password</label>
                        <div class="relative group">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg class="h-5 w-5 text-purple-300 group-focus-within:text-pink-400 transition-colors"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                                    </path>
                                </svg>
                            </div>
                            <input id="password" v-model="password" :type="showPassword ? 'text' : 'password'" required
                                class="block w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                                placeholder="Enter your password" />
                            <button type="button" @click="showPassword = !showPassword"
                                class="absolute inset-y-0 right-0 pr-3 flex items-center text-purple-300 hover:text-pink-400 transition-colors">
                                <svg v-if="!showPassword" class="h-5 w-5" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                    </path>
                                </svg>
                                <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div v-if="error" class="bg-red-500/20 border border-red-500/50 rounded-xl p-3 backdrop-blur-sm">
                        <div class="flex items-center">
                            <svg class="h-5 w-5 text-red-300 mr-2" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-red-200 text-sm">{{ error }}</span>
                        </div>
                    </div>

                    <button type="submit" :disabled="isLoading"
                        class="w-full relative overflow-hidden rounded-xl py-3 px-4 bg-linear-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] hover:from-pink-600 hover:to-purple-700">
                        <span class="relative z-10 flex items-center justify-center">
                            <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none"
                                viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                            <span v-if="isLoading">Signing in...</span>
                            <span v-else>Sign In</span>
                        </span>
                    </button>
                </form>

                <div class="mt-6 text-center">
                    <a href="#" class="text-sm text-purple-200 hover:text-pink-300 transition-colors">
                        Forgot your password?
                    </a>
                </div>
            </div>

            <!-- Security badge -->
            <div class="mt-6 text-center">
                <div class="inline-flex items-center text-white/60 text-sm">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                        </path>
                    </svg>
                    Secured with end-to-end encryption
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes blob {

    0%,
    100% {
        transform: translate(0, 0) scale(1);
    }

    33% {
        transform: translate(30px, -50px) scale(1.1);
    }

    66% {
        transform: translate(-20px, 20px) scale(0.9);
    }
}

.animate-blob {
    animation: blob 7s infinite;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}
</style>
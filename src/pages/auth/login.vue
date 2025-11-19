<script setup lang="ts">
import { ref, computed } from 'vue'
import { useLoginStore } from '#imports'

const message = computed(() => {
    if (loginStore.error) return loginStore.error
    if (loginStore.LoginResponse?.status?.success) return 'Login successful!'
    return ''
})

const loginStore = useLoginStore()

const email = ref('')
const password = ref('')
const showDialog = ref(false)
const isDark = ref(false)

function toggleTheme() {
    isDark.value = !isDark.value
    if (isDark.value) {
        document.documentElement.classList.remove('dark')
    } else {
        document.documentElement.classList.add('dark')

    }
}

async function login() {
    try {
        await loginStore.login({
            email_username_phone: email.value,
            password: password.value,
        })

        showDialog.value = true
    } catch (err) {
        console.error('Login failed:', err)
        showDialog.value = true
    }
}
</script>

<template>
    <div
        class="w-screen h-screen bg-linear-to-br from-orange-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex justify-center items-center relative transition-colors duration-300">
        <!-- Top loading bar -->
        <ProgressLaoding v-if="loginStore.loading" />

        <!-- Theme Toggle Button -->
        <button @click="toggleTheme"
            class="absolute top-6 right-6 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-20"
            aria-label="Toggle theme">
            <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        </button>

        <!-- Decorative blurred circles -->
        <div class="absolute top-20 left-20 w-72 h-72 bg-orange-300/30 dark:bg-orange-600/20 rounded-full blur-3xl">
        </div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-blue-300/30 dark:bg-blue-600/20 rounded-full blur-3xl">
        </div>

        <!-- Login box -->
        <div class="relative z-10 w-full max-w-md mx-4">
            <div
                class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl p-8 space-y-6">
                <!-- Header -->
                <div class="text-center space-y-2">
                    <h1
                        class="text-3xl font-bold bg-linear-to-r from-orange-500 to-blue-600 dark:from-orange-400 dark:to-blue-400 bg-clip-text text-transparent">
                        Welcome Back
                    </h1>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Sign in to continue to your account
                    </p>
                </div>

                <!-- Form -->
                <div class="space-y-4">
                    <div class="space-y-2">
                        <label class="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email Address
                        </label>
                        <UInput v-model="email" placeholder="name@example.com" type="email" class="w-full" size="lg" />
                    </div>

                    <div class="space-y-2">
                        <label class="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Password
                        </label>
                        <UInput v-model="password" placeholder="Enter your password" type="password" class="w-full"
                            size="lg" />
                    </div>

                    <UButton :loading="loginStore.loading" @click="login" class="w-full mt-6" size="lg"
                        :class="loginStore.loading ? 'opacity-80' : ''">
                        <span class="text-base font-semibold">Sign In</span>
                    </UButton>
                </div>

                <!-- Footer -->
                <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p class="text-center text-xs text-gray-500 dark:text-gray-500">
                        Protected by enterprise-grade security
                    </p>
                </div>
            </div>
        </div>

        <!-- Dialog -->
        <Dialog :show="showDialog" :message="message" @close="showDialog = false"></Dialog>
    </div>
</template>

<style scoped>
/* Smooth transitions for theme switching */
* {
    transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}
</style>
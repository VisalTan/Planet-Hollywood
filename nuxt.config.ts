// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  runtimeConfig: {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramChatId: process.env.TELEGRAM_CHAT_ID,
    telegramGroupId: process.env.TELEGRAM_GROUP_ID,
    firebaseApiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
    firebaseAuthDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    firebaseProjectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
    firebaseStorageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    firebaseMessagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    firebaseAppId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', '@pinia/nuxt', '@nuxtjs/color-mode'],
  image: {
    quality: 80,
    format: ['webp', 'avif', 'png', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    domains: ['images.unsplash.com'],
  },
  srcDir: 'src/',
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
})

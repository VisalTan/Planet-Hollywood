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
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
        }
      ]
    }
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
  hooks: {
    'pages:extend'(pages) {
      // Remove routes generated from view/components directories
      // These are components, not pages, but Nuxt picks them up as routes
      function removeComponentRoutes(routes: typeof pages) {
        for (let i = routes.length - 1; i >= 0; i--) {
          const route = routes[i]!
          if (route.path.includes('/view/')) {
            routes.splice(i, 1)
          } else if (route.children) {
            removeComponentRoutes(route.children)
          }
        }
      }
      removeComponentRoutes(pages)
    }
  },
  srcDir: 'src/',
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
})

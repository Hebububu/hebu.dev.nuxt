export default defineNuxtConfig({
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/content"],
  content: {
    highlight: {
      theme: 'light-plus'
    }
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
    ]

})
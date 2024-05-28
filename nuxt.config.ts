// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/content", '@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'http://localhost:3000',
    routes: [
      '/work',
      '/contact'
      // add other routes here
    ]
  },
  content: {
    highlight: {
      theme: 'light-plus'
    }
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
    ]

})
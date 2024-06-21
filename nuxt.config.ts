// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      githubToken: process.env.GITHUB_TOKEN
    }
  },
  modules: [
    '@sidebase/nuxt-auth',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    "@nuxt/content",
    '@nuxtjs/sitemap',
    '@nuxtjs/color-mode',
  ],
  auth: {
    provider: {
              type: 'authjs'
          }
  },
  build: {
    transpile: [
      "three"
    ],
  },
  router: {
    middleware: ['content']
  },
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
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      githubToken: process.env.GITHUB_TOKEN
    }
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth',
    ['nuxt-mail',
    {
      message: {
        to: 'tngus5040@gmail.com',
      },
      smtp: {
        host: 'smtp.gmail.com',
        port: 587,
        auth: { //발신자를 동적으로 설정하여 이 부분은 불필요
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      },
    }],
    "@nuxt/content",
    '@nuxtjs/sitemap',
    '@nuxtjs/color-mode',
    "@nuxt/image",
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
  ui:{
    global: true,
    icons: ['simple-icons', 'dashicons']
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
    ]

})
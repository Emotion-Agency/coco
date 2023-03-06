import glsl from 'vite-plugin-glsl'

export default defineNuxtConfig({
  css: ['@/assets/styles/index.scss'],

  modules: [
    'nuxt-simple-robots',
    [
      '@storyblok/nuxt',

      {
        accessToken: process.env.STORYBLOK_KEY,
        apiOptions: {
          region: 'us',
        },
      },
    ],
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  typescript: {
    strict: false,
  },

  runtimeConfig: {
    public: {
      ENVIROMENT: process.env.NODE_ENV,
      IMGIX_DOMAIN: process.env.IMGIX_DOMAIN,
      IMGIX_KEY: process.env.IMGIX_KEY,
      BACKEND_URL: process.env.BACKEND_URL,
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL || 'https://www.relivebycoco.com',
    },
  },

  robots: {
    sitemap: '/sitemap.xml',
  },

  vite: {
    plugins: [glsl()],
  },
})

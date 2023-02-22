import glsl from 'vite-plugin-glsl'

export default defineNuxtConfig({
  css: ['@/assets/styles/index.scss'],

  modules: [
    [
      '@storyblok/nuxt',

      {
        accessToken: process.env.STORYBLOK_KEY,
        apiOptions: {
          region: 'us',
        },
      },
    ],
    'nuxt-delay-hydration',
  ],

  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === 'development',
    mode: 'init',
  },

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
    },
  },

  vite: {
    plugins: [glsl()],
  },
})

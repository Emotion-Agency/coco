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
    },
  },
})

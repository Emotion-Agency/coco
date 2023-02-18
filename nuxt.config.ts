export default defineNuxtConfig({
  css: ['@/assets/styles/index.scss'],

  modules: ['@nuxt/image-edge'],

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

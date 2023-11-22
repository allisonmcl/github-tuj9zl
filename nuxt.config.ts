// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  components: [
    {
      path: '~/components',
      global: true,
    },
  ],

  content: {
    markdown: {
      anchorLinks: false,
    },
    documentDriven: true
  },
});

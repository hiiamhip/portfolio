export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/content', '@nuxtjs/apollo'],
  apollo: {
    clientConfigs: {
      default: {
        tokenName: 'github-token',
        httpEndpoint: 'https://api.github.com/graphql',
      }
    }
  }
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxtjs/tailwindcss'],
  typescript: {
    strict: true,
    shim: false,
  },
  nitro: {
    preset: 'static',
  },
});

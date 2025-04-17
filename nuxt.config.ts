export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: true,
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/eslint'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      minioUrl: process.env.MINIO_URL,
    },
  },
  icon: {
    clientBundle: {
      includeCustomCollections: true,
      scan: true,
    },
    provider: 'server',
    customCollections: [
      {
        prefix: 'icon',
        dir: './assets/icons',
      },
    ],
  },
  typescript: {
    strict: true,
    shim: false,
  },
  // nitro: {
  //   preset: '',
  // },
});

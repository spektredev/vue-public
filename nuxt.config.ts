export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: true,
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/eslint', '@nuxtjs/seo', '@nuxt/image', '@nuxtjs/color-mode'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    storage: 'cookie',
    storageKey: 'theme',
    classSuffix: '',
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  site: {
    url: process.env.BASE_URL || 'https://tgrow.ru',
    name: 'TGrow',
  },
  seo: {
    meta: {
      description:
        'Крупнейший каталог каналов Telegram. Найдите любимые каналы разных тематик - новости, игры, спорт, кино и другие',
      ogType: 'website',
      ogTitle: 'TGrow - Каналы Telegram',
      ogDescription: 'Найдите любимые каналы Telegram - новости, игры, спорт, кино и другие',
    },
    automaticDefaults: true,
  },
  sitemap: {
    enabled: false,
  },
  app: {
    head: {
      link: [
        {
          rel: 'preload',
          href: '/fonts/Rubik-VariableFont_wght.ttf',
          as: 'font',
          type: 'font/ttf',
          crossorigin: 'anonymous',
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3001',
      minioUrl: process.env.MINIO_URL,
      email: process.env.EMAIL || 'tgrowadmin@protonmail.com',
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
  nitro: {
    preset: 'node-server',
  },
});

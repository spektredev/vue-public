export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxt/test-utils/module',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  colorMode: {
    preference: 'dark',
    fallback: 'light',
    storage: 'localStorage',
    classSuffix: '',
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  site: {
    url: process.env.NUXT_PUBLIC_BASE_URL || 'https://tgrow.ru',
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
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:3001',
      minioUrl: process.env.NUXT_PUBLIC_MINIO_URL || 'http://localhost:9000',
      email: process.env.NUXT_PUBLIC_EMAIL || 'tgrowadmin@protonmail.com',
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

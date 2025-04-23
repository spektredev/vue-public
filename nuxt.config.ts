export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: true,
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/eslint', '@nuxtjs/seo'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  site: {
    url: 'http://tgrow.ru',
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
    sources: ['/api/__sitemap__/urls'],
  },
  app: {
    head: {
      titleTemplate: '%s | TGrow',
      link: [
        {
          rel: 'preload',
          href: '/fonts/Rubik-VariableFont_wght.ttf',
          as: 'font',
          type: 'font/ttf',
          crossorigin: 'anonymous',
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },
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
});

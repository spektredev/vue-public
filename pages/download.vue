<template>
  <div class="container bg-white dark:bg-darken-600">
    <section class="download-section py-16 px-4">
      <div class="container mx-auto">
        <h1 class="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Скачать Telegram</h1>

        <div class="bg-gray-50 dark:bg-darken-200 rounded-lg p-6 mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Последние версии Telegram</h2>
          <p class="text-gray-600 dark:text-gray-200 mb-6">
            Telegram доступен на всех популярных платформах. Выберите вашу систему и скачайте последнюю версию прямо
            сейчас!
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Android -->
            <a
              href="https://play.google.com/store/apps/details?id=org.telegram.messenger"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 p-4 bg-white dark:bg-darken-600 border border-gray-300 dark:border-darken-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <Icon name="mdi:android" class="w-10 h-10 text-green-500 dark:text-green-400" />
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Android</h3>
                <p class="text-gray-600 dark:text-gray-200">Google Play</p>
              </div>
            </a>

            <!-- iOS -->
            <a
              href="https://apps.apple.com/app/telegram-messenger/id686449807"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 p-4 bg-white dark:bg-darken-600 border border-gray-300 dark:border-darken-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <Icon name="mdi:apple" class="w-10 h-10 text-gray-700 dark:text-gray-300" />
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">iOS</h3>
                <p class="text-gray-600 dark:text-gray-200">App Store</p>
              </div>
            </a>

            <!-- Windows -->
            <a
              href="https://desktop.telegram.org/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 p-4 bg-white dark:bg-darken-600 border border-gray-300 dark:border-darken-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <Icon name="mdi:microsoft-windows" class="w-10 h-10 text-blue-500 dark:text-blue-400" />
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Windows</h3>
                <p class="text-gray-600 dark:text-gray-200">Desktop</p>
              </div>
            </a>

            <!-- macOS -->
            <a
              href="https://macos.telegram.org/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 p-4 bg-white dark:bg-darken-600 border border-gray-300 dark:border-darken-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <Icon name="mdi:apple" class="w-10 h-10 text-gray-700 dark:text-gray-300" />
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">macOS</h3>
                <p class="text-gray-600 dark:text-gray-200">Desktop</p>
              </div>
            </a>

            <!-- Linux -->
            <a
              href="https://desktop.telegram.org/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 p-4 bg-white dark:bg-darken-600 border border-gray-300 dark:border-darken-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <Icon name="mdi:linux" class="w-10 h-10 text-orange-500 dark:text-orange-400" />
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Linux</h3>
                <p class="text-gray-600 dark:text-gray-200">Desktop</p>
              </div>
            </a>

            <!-- Web -->
            <a
              href="https://web.telegram.org/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 p-4 bg-white dark:bg-darken-600 border border-gray-300 dark:border-darken-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <Icon name="mdi:web" class="w-10 h-10 text-blue-500 dark:text-blue-400" />
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Web</h3>
                <p class="text-gray-600 dark:text-gray-200">Браузерная версия</p>
              </div>
            </a>
          </div>
        </div>

        <div class="text-center">
          <NuxtLink
            to="/"
            class="inline-block bg-accent-200 dark:bg-neutral-600 dark:hover:bg-neutral-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600"
          >
            Вернуться на главную
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'flexed',
});
useHead({
  title: 'Скачать Telegram для Windows, Linux, iOS, Android',
});
</script>

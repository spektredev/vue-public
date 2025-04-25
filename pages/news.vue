<template>
  <div class="container bg-white dark:bg-darken-600">
    <section class="news-section py-16 px-4">
      <div class="container max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Новости TGrow</h1>

        <article class="bg-gray-50 dark:bg-darken-200 rounded-lg p-6 mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Запуск сайта TGrow!</h2>
          <p class="text-gray-600 dark:text-gray-200 mb-4">
            Мы рады объявить о запуске TGrow — платформы для поиска и продвижения Telegram-каналов! Теперь вы можете
            легко находить каналы по интересам, от новостей до юмора. TGrow - неофициальный проект расширяющий
            возможности Telegram. Наша цель — сделать Telegram ещё ближе к вам!
          </p>
          <div class="flex items-center gap-2 text-gray-500 dark:text-gray-300 text-sm">
            <Icon name="mdi:calendar" class="w-5 h-5 text-blue-500 dark:text-gray-300" />
            <span>10 апреля 2025</span>
          </div>
        </article>

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
  title: 'Новости',
});
</script>

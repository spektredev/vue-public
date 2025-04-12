<template>
  <div class="container bg-white dark:bg-darken-600">
    <section class="about-section py-16 px-4">
      <div class="container max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">О сайте TGrow</h1>

        <div class="bg-gray-50 dark:bg-darken-200 rounded-lg p-6 mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Что мы предлагаем</h2>
          <p class="text-gray-600 dark:text-gray-200 mb-4">
            TGrow — это платформа, которая помогает вам находить лучшие Telegram-каналы по вашим интересам. Хотите быть
            в курсе новостей, слушать музыку, смеяться над мемами или учиться чему-то новому? У нас есть всё! Вот что мы
            можем предложить:
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-200 mb-4">
            <li>Удобный поиск каналов по названию или описанию.</li>
            <li>Тысячи каналов в одном месте — от популярных до новых.</li>
            <li>Найдите самые популярные каналы в зависимости от ваших интересов.</li>
            <li>Возможность добавить свой канал и рассказать о нём другим (скоро!).</li>
          </ul>
          <p class="text-gray-600 dark:text-gray-200">
            Мы стремимся сделать TGrow вашим проводником в мир Telegram, где каждый найдёт что-то для себя.
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-darken-200 rounded-lg p-6 mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Реклама на сайте</h2>
          <p class="text-gray-600 dark:text-gray-200">
            На данный момент мы временно не принимаем рекламу. Наша команда сосредоточена на улучшении платформы и
            создании лучшего опыта для пользователей. Следите за обновлениями — мы сообщим, когда эта возможность станет
            доступной!
          </p>
        </div>

        <div class="text-center">
          <NuxtLink
            to="/"
            class="inline-block bg-blue-500 dark:bg-neutral-600 dark:hover:bg-neutral-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600"
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
</script>

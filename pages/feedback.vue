<template>
  <div class="container bg-white dark:bg-darken-600">
    <section class="feedback-section py-16 px-4">
      <div class="container max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Обратная связь</h1>

        <div class="bg-gray-50 dark:bg-darken-200 rounded-lg shadow-md p-6 mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Правовая информация</h2>
          <p class="text-gray-600 dark:text-gray-200 mb-4">
            Платформа TGrow создана исключительно в информационных и справочных целях и не имеет своей целью содействие
            в нарушении законодательства Российской Федерации. Все данные, представленные на сайте, получены из открытых
            источников, доступных в сети Интернет, и предоставляются пользователям "как есть". Администрация TGrow не
            осуществляет контроль за содержимым Telegram-каналов и не несёт ответственности за их деятельность.
          </p>
          <p class="text-gray-600 dark:text-gray-200 mb-4">
            Обращаем ваше внимание, что владельцы Telegram-каналов могут в любой момент изменить тематику или
            направление своей деятельности, включая возможное нарушение действующего законодательства РФ. TGrow не
            предоставляет гарантий относительно актуальности, законности или достоверности информации, размещённой в
            каналах, и не может быть привлечён к ответственности за такие изменения.
          </p>
          <p class="text-gray-600 dark:text-gray-200">
            Если вы обнаружили контент, который, по вашему мнению, нарушает законодательство Российской Федерации,
            просим сообщить нам об этом для принятия соответствующих мер в пределах наших возможностей.
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-darken-200 rounded-lg shadow-md p-6 mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Связаться с нами</h2>
          <p class="text-gray-600 dark:text-gray-200 mb-4">
            Мы ценим ваше мнение и готовы ответить на любые вопросы или рассмотреть предложения. Для связи с
            администрацией TGrow, пожалуйста, пишите на электронную почту:
          </p>
          <a href="mailto:support@tgrow.ru" class="text-blue-500 dark:text-blue-400 hover:underline font-semibold">
            support@tgrow.ru
          </a>
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
  title: 'Обратная связь',
});
</script>

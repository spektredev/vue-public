<template>
  <div class="container bg-white dark:bg-darken-600">
    <section class="eula-section py-16 px-4">
      <div class="container mx-auto">
        <h1 class="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Пользовательское соглашение</h1>

        <div class="bg-gray-50 dark:bg-darken-200 rounded-lg p-6 mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Общие положения</h2>
          <p class="text-gray-600 dark:text-gray-200 mb-4">
            Настоящее Пользовательское соглашение (далее — "Соглашение") регулирует порядок использования сайта TGrow
            (далее — "Сайт"), расположенного по адресу tgrow.ru. Используя Сайт, вы подтверждаете своё согласие с
            условиями данного Соглашения. Если вы не согласны с этими условиями, просьба воздержаться от использования
            Сайта.
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-darken-200 rounded-lg p-6 mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            2. Отсутствие сбора персональных данных
          </h2>
          <p class="text-gray-600 dark:text-gray-200 mb-4">
            Администрация TGrow не собирает, не обрабатывает и не хранит персональные данные пользователей в рамках
            работы Сайта, за исключением случаев, предусмотренных законодательством Российской Федерации. Любая
            информация, предоставленная вами добровольно (например, через обратную связь), используется исключительно
            для целей коммуникации и не передаётся третьим лицам.
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-darken-200 rounded-lg p-6 mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Ответственность</h2>
          <p class="text-gray-600 dark:text-gray-200 mb-4">
            Сайт TGrow предоставляет информацию о Telegram-каналах, полученную из открытых источников. Администрация
            Сайта не несёт ответственности за содержание, достоверность, законность или актуальность данных, размещённых
            в Telegram-каналах, представленных на Сайте. Ответственность за контент таких каналов лежит исключительно на
            их владельцах.
          </p>
          <p class="text-gray-600 dark:text-gray-200 mb-4">
            TGrow не гарантирует бесперебойную работу Сайта, отсутствие ошибок или полное соответствие предоставленной
            информации вашим ожиданиям. Администрация не несёт ответственности за любые убытки, прямые или косвенные,
            возникшие в результате использования Сайта или невозможности его использования.
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-darken-200 rounded-lg p-6 mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Использование материалов</h2>
          <p class="text-gray-600 dark:text-gray-200 mb-4">
            Все материалы, размещённые на Сайте, предназначены исключительно для личного некоммерческого использования.
            Копирование, распространение или иное использование контента Сайта без письменного согласия администрации
            запрещено, за исключением случаев, предусмотренных законодательством РФ.
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-darken-200 rounded-lg p-6 mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Изменения в Соглашении</h2>
          <p class="text-gray-600 dark:text-gray-200 mb-4">
            Администрация TGrow оставляет за собой право вносить изменения в данное Соглашение в любое время без
            предварительного уведомления пользователей. Новая версия Соглашения вступает в силу с момента её публикации
            на Сайте. Продолжение использования Сайта после внесения изменений означает ваше согласие с обновлёнными
            условиями.
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-darken-200 rounded-lg p-6 mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Контакты</h2>
          <p class="text-gray-600 dark:text-gray-200">
            По всем вопросам, связанным с использованием Сайта или настоящим Соглашением, вы можете обратиться к
            администрации по электронной почте:
            <a :href="`mailto:${config.public.email}`" class="text-blue-500 dark:text-blue-400 hover:underline">
              {{ config.public.email }}
            </a>
          </p>
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
const config = useRuntimeConfig();

definePageMeta({
  layout: 'flexed',
});
useHead({
  title: 'Пользовательское соглашение',
});
</script>

<template>
  <div>
    <section class="hero-section py-16 px-4 text-center bg-gray-50 dark:bg-darken-200 dark:text-white">
      <div class="container">
        <h1 class="text-4xl font-bold mb-4">Найди лучшие Telegram-каналы для себя! 🚀</h1>
        <p class="text-lg text-gray-600 mb-8 dark:text-white">
          Исследуй тысячи каналов по интересам: новости, музыка, юмор, образование и многое другое.
        </p>
        <NuxtLink
          to="/categories"
          class="inline-block bg-accent-200 dark:bg-neutral-600 dark:hover:bg-neutral-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600"
        >
          В категории
        </NuxtLink>
      </div>
    </section>

    <section class="search-section pt-8 px-4">
      <div class="container">
        <div class="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <input
            v-model="inputQuery"
            name="search"
            type="text"
            placeholder="Что ищем?"
            class="w-full flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none dark:text-black focus:ring-2 focus:ring-blue-500 dark:focus:ring-gray-300"
            @keyup.enter="handleSearch"
          >
          <button
            class="bg-accent-200 dark:bg-neutral-600 dark:hover:bg-neutral-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
            @click="handleSearch"
          >
            Найти
          </button>
        </div>
        <p v-if="inputError" class="text-red-500 mt-2 text-center">
          {{ inputError }}
        </p>
      </div>
    </section>

    <section class="categories-section pt-16 px-4">
      <div class="container">
        <h2 class="text-2xl font-semibold mb-6 text-center">Популярные категории</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            :to="`/categories/news`"
            class="border dark:bg-darken-200 dark:border-darken-200 border-gray-300 rounded-lg p-4 flex items-center gap-4"
          >
            <Icon name="mdi:newspaper" class="w-8 h-8 text-blue-500" />
            <div>
              <h3 class="text-lg font-semibold">Новости</h3>
              <p class="text-gray-600 dark:text-gray-200">1500+ каналов</p>
            </div>
          </NuxtLink>
          <NuxtLink
            :to="`/categories/music`"
            class="border dark:bg-darken-200 dark:border-darken-200 border-gray-300 rounded-lg p-4 flex items-center gap-4"
          >
            <Icon name="mdi:music" class="w-8 h-8 text-blue-500" />
            <div>
              <h3 class="text-lg font-semibold">Музыка</h3>
              <p class="text-gray-600 dark:text-gray-200">100+ каналов</p>
            </div>
          </NuxtLink>
          <NuxtLink
            :to="`/categories/humor`"
            class="border dark:bg-darken-200 dark:border-darken-200 border-gray-300 rounded-lg p-4 flex items-center gap-4"
          >
            <Icon name="mdi:emoticon-happy-outline" class="w-8 h-8 text-blue-500" />
            <div>
              <h3 class="text-lg font-semibold">Юмор</h3>
              <p class="text-gray-600 dark:text-gray-200">80+ каналов</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="trending-channels pt-16 lg:pt-28 px-4 bg-gray-50 dark:bg-darken-600">
      <div class="container">
        <h2 class="text-2xl font-semibold mb-6 text-center">Популярные каналы <span class="ml-2">🔥</span></h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SmallChannelCard v-for="channel in popChannels" :key="channel.id" :channel="channel" />
        </div>
      </div>
    </section>

    <section class="recommended-channels pt-16 lg:pt-24 px-4">
      <div class="container">
        <h2 class="text-2xl font-semibold mb-6 text-center">Рекомендуемые каналы</h2>
        <RecChannelsList />
      </div>
    </section>

    <section class="new-channels pt-16 lg:pt-28 px-4 bg-gray-50 dark:bg-darken-600">
      <div class="container">
        <div class="flex justify-center items-center mb-4 gap-2 md:mb-6 md:gap-3">
          <h2 class="text-xl font-semibold md:text-2xl">
            <span class="md:hidden">Новые каналы</span>
            <span class="hidden md:inline">Недавно добавленные каналы</span>
          </h2>
          <Icon name="mdi:new-box" class="w-6 h-6 text-blue-500 md:w-8 md:h-8 hidden md:block" aria-hidden="true" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SmallChannelCard v-for="channel in newChannels" :key="channel.id" :channel="channel" />
        </div>
      </div>
    </section>

    <section class="benefits-section py-16 px-4">
      <div class="container">
        <h2 class="text-2xl font-semibold mb-6 text-center">Почему выбирают нас?</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div class="text-center">
            <Icon name="mdi:collection" class="w-12 h-12 mx-auto text-blue-500 mb-4" />
            <h3 class="text-lg font-semibold">Большой выбор</h3>
            <p class="text-gray-600 dark:text-gray-200">Тысячи каналов в одном месте.</p>
          </div>
          <div class="text-center">
            <Icon name="mdi:search" class="w-12 h-12 mx-auto text-blue-500 mb-4" />
            <h3 class="text-lg font-semibold">Удобный поиск</h3>
            <p class="text-gray-600 dark:text-gray-200">Найди каналы по интересам за пару кликов.</p>
          </div>
          <div class="text-center">
            <Icon name="mdi:refresh" class="w-12 h-12 mx-auto text-blue-500 mb-4" />
            <h3 class="text-lg font-semibold">Ежедневные обновления</h3>
            <p class="text-gray-600 dark:text-gray-200">Новые каналы каждый день.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import popChannels from '~/mocks/pop-channels';
import newChannels from '~/mocks/new-channels';

const router = useRouter();

const inputQuery = ref<string>('');
const inputError = ref<string>('');

function validateQuery() {
  if (!inputQuery.value || inputQuery.value.length < 3) {
    inputError.value = 'Запрос должен содержать минимум 3 символа';
    setTimeout(() => {
      inputError.value = '';
    }, 3000);
    return false;
  }
  return true;
}

function handleSearch() {
  console.log('inputQuery: ', inputQuery.value);
  if (validateQuery()) {
    router.push(`/search?query=${encodeURIComponent(inputQuery.value)}`);
  }
}

definePageMeta({
  layout: 'main',
});
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `%siteName %separator ${titleChunk}` : '%siteName';
  },
  title: 'Каталог всех каналов Telegram',
  meta: [{ name: 'yandex-verification', content: '6a00a2728526814e' }],
});
</script>

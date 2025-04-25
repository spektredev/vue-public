<template>
  <div>
    <section class="hero-section py-16 text-center bg-gray-50 dark:bg-darken-200">
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

    <section class="search-section py-8 px-4">
      <div class="container">
        <div class="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Поиск каналов по названию или описанию..."
            class="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none dark:text-black focus:ring-2 focus:ring-blue-500 dark:focus:ring-gray-300"
            @keyup.enter="searchChannels"
          >
          <button
            :disabled="isLoading"
            class="bg-accent-200 dark:bg-neutral-600 dark:hover:bg-neutral-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
            @click="searchChannels"
          >
            {{ isLoading ? 'Поиск...' : 'Найти' }}
          </button>
        </div>
        <p v-if="error" class="text-red-500 mt-2 text-center">
          {{ error }}
        </p>
      </div>
    </section>

    <section class="categories-section py-12">
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

    <section class="trending-channels py-12 bg-gray-50 dark:bg-darken-600">
      <div class="container">
        <h2 class="text-2xl font-semibold mb-6 text-center">Популярные каналы <span class="ml-2">🔥</span></h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SmallChannelCard v-for="channel in popChannels.mockChannels" :key="channel.id" :channel="channel" />
        </div>
        <div class="text-center mt-8">
          <!-- <NuxtLink
            to="/trending"
            class="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600"
          >
            Смотреть все
          </NuxtLink> -->
        </div>
      </div>
    </section>

    <section class="recommended-channels py-12">
      <div class="container">
        <h2 class="text-2xl font-semibold mb-6 text-center">Рекомендуемые каналы</h2>
        <RecChannelsList v-if="randList" :channels="randList" />
      </div>
    </section>

    <section class="new-channels py-12 bg-gray-50 dark:bg-darken-600">
      <div class="container">
        <div class="flex justify-center items-center mb-6 gap-3">
          <h2 class="text-2xl font-semibold">Недавно добавленные каналы</h2>
          <Icon name="mdi:new-box" class="w-8 h-8 text-blue-500" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SmallChannelCard v-for="channel in newChannels.mockChannels" :key="channel.id" :channel="channel" />
        </div>
        <div class="text-center mt-8">
          <!-- <NuxtLink
        to="/new"
        class="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600"
      >
        Смотреть все
      </NuxtLink> -->
        </div>
      </div>
    </section>

    <section class="benefits-section py-12 dark:bg-darken-600">
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
import RecChannelsList from '~/components/channels/RecChannelsList.vue';
import SmallChannelCard from '~/components/channels/SmallChannelCard.vue';
import { usePopChannels } from '~/composables/usePopChannels';
import { useNewChannels } from '~/composables/useNewChannels';
import { useSearch } from '~/composables/useSearch';

const { data: randList } = await useRecChannels(6);
const popChannels = usePopChannels();
const newChannels = useNewChannels();
const { searchQuery, searchChannels, isLoading, error } = useSearch();

onMounted(() => {
  const route = useRoute();
  if (route.query.query) {
    searchQuery.value = String(route.query.query);
  }
});

definePageMeta({
  layout: 'main',
});
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `%siteName %separator ${titleChunk}` : '%siteName';
  },
  title: 'Каталог всех каналов Telegram',
});
</script>

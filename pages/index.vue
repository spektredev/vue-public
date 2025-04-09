<template>
  <div>
    <section class="hero-section py-16 text-center bg-gray-50">
      <div class="container">
        <h1 class="text-4xl font-bold mb-4">Найди лучшие Telegram-каналы для себя! 🚀</h1>
        <p class="text-lg text-gray-600 mb-8">
          Исследуй тысячи каналов по интересам: новости, музыка, юмор, образование и многое другое.
        </p>
        <NuxtLink
          to="/categories"
          class="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600"
        >
          В категории
        </NuxtLink>
      </div>
    </section>

    <section class="search-section py-8 px-4">
      <div class="container">
        <div class="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Поиск каналов по названию или категории..."
            class="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
          <button class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Найти</button>
        </div>
      </div>
    </section>

    <section class="categories-section py-12">
      <div class="container">
        <h2 class="text-2xl font-semibold mb-6 text-center">Популярные категории</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            to="/categories/news"
            class="border border-gray-300 rounded-lg p-4 flex items-center gap-4 hover:shadow-md"
          >
            <Icon name="icon:news" class="w-8 h-8 text-blue-500" />
            <div>
              <h3 class="text-lg font-semibold">Новости</h3>
              <p class="text-gray-600">1500+ каналов</p>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/categories/music"
            class="border border-gray-300 rounded-lg p-4 flex items-center gap-4 hover:shadow-md"
          >
            <Icon name="icon:music" class="w-8 h-8 text-blue-500" />
            <div>
              <h3 class="text-lg font-semibold">Музыка</h3>
              <p class="text-gray-600">100+ каналов</p>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/categories/humor"
            class="border border-gray-300 rounded-lg p-4 flex items-center gap-4 hover:shadow-md"
          >
            <Icon name="icon:humor" class="w-8 h-8 text-blue-500" />
            <div>
              <h3 class="text-lg font-semibold">Юмор</h3>
              <p class="text-gray-600">80+ каналов</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="trending-channels py-12 bg-gray-50">
      <div class="container">
        <h2 class="text-2xl font-semibold mb-6 text-center">Популярные каналы <span class="ml-2">🔥</span></h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SmallChannelCard v-for="channel in trendingChannels" :key="channel.id" :channel="channel" />
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
        <RecChannelsList :channels="recChannels" />
        <div class="text-center mt-8">
          <!-- <NuxtLink
            to="/recommended"
            class="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600"
          >
            Показать больше
          </NuxtLink> -->
        </div>
      </div>
    </section>

    <section class="new-channels py-12 bg-gray-50">
      <div class="container">
        <h2 class="text-2xl font-semibold mb-6 text-center">Недавно добавленные каналы 🆕</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SmallChannelCard v-for="channel in newChannels" :key="channel.id" :channel="channel" />
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

    <section class="benefits-section py-12">
      <div class="container">
        <h2 class="text-2xl font-semibold mb-6 text-center">Почему выбирают нас?</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div class="text-center">
            <Icon name="icon:collection" class="w-12 h-12 mx-auto text-blue-500 mb-4" />
            <h3 class="text-lg font-semibold">Большой выбор</h3>
            <p class="text-gray-600">Тысячи каналов в одном месте.</p>
          </div>
          <div class="text-center">
            <Icon name="icon:search" class="w-12 h-12 mx-auto text-blue-500 mb-4" />
            <h3 class="text-lg font-semibold">Удобный поиск</h3>
            <p class="text-gray-600">Найди каналы по интересам за пару кликов.</p>
          </div>
          <div class="text-center">
            <Icon name="icon:refresh" class="w-12 h-12 mx-auto text-blue-500 mb-4" />
            <h3 class="text-lg font-semibold">Ежедневные обновления</h3>
            <p class="text-gray-600">Новые каналы каждый день.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import RecChannelsList from '~/components/channels/RecChannelsList.vue';
import { useRecChannels } from '~/composables/useRecChannels';
import type { Channel } from '~/types/channel';

const { fetchRecChannels } = useRecChannels();
const { data: recChannelsData } = await useAsyncData<Channel[]>('recChannels', () => fetchRecChannels());
const recChannels = computed(() => recChannelsData.value ?? []);

const { data: trendingChannelsData } = await useAsyncData<Channel[]>('trendingChannels', () => fetchRecChannels());
const trendingChannels = computed(() => trendingChannelsData.value?.slice(0, 4) ?? []);

const { data: newChannelsData } = await useAsyncData<Channel[]>('newChannels', () => fetchRecChannels());
const newChannels = computed(() => newChannelsData.value?.slice(0, 4) ?? []);
</script>

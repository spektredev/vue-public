<template>
  <ClientOnly>
    <div class="container py-8 px-4">
      <h1 class="text-2xl font-bold mb-6">Вот что мы нашли по запросу "{{ query }}"</h1>

      <div v-if="isLoading" class="text-center">Загрузка...</div>

      <div v-else-if="error" class="text-red-500 text-center">
        {{ error }}
      </div>

      <div v-else-if="searchResults.length === 0 && query" class="text-center">Ничего не найдено</div>

      <ChannelList v-else :channels="searchResults" />

      <div class="text-center">
        <NuxtLink
          to="/"
          class="inline-block bg-accent-200 dark:bg-neutral-600 dark:hover:bg-neutral-500 text-white px-6 mt-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600"
        >
          Вернуться на главную
        </NuxtLink>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import ChannelList from '~/components/channels/ChannelList.vue';
import { useRoute } from '#app';
import { watch } from 'vue';
import { useSearch } from '~/composables/useSearch';

const route = useRoute();
const { searchQuery, searchResults, isLoading, error, searchChannels } = useSearch();
const query = computed(() => String(route.query.query || ''));

watch(
  query,
  (newQuery) => {
    if (newQuery) {
      searchQuery.value = newQuery;
      searchChannels();
    }
  },
  { immediate: true }
);
</script>

<!-- pages/search.vue -->
<template>
  <div class="container py-8 px-4">
    <h1 class="text-2xl font-bold mb-6">Результаты поиска для "{{ query }}"</h1>

    <div v-if="isLoading" class="text-center">Загрузка...</div>

    <div v-else-if="error" class="text-red-500 text-center">
      {{ error }}
    </div>

    <div v-else-if="searchResults.length === 0" class="text-center">Ничего не найдено</div>

    <ChannelList v-else :channels="searchResults" />

    <nuxt-link to="/" class="mt-6 inline-block text-blue-500 hover:underline"> Назад на главную </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import ChannelList from '~/components/channels/ChannelList.vue';
import { useSearch } from '~/composables/useSearch';

const route = useRoute();
const { searchQuery, searchResults, isLoading, error, searchChannels } = useSearch();

const query = computed(() => String(route.query.query || ''));

onMounted(() => {
  if (query.value) {
    searchQuery.value = query.value;
    if (!searchResults.value.length) {
      searchChannels();
    }
  }
});
useHead({
  title: 'Поиск',
});
</script>

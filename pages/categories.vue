<template>
  <div class="container">
    <h1 class="text-3xl pt-7 font-semibold">Категории</h1>
    <div v-if="pending">Загрузка...</div>
    <div v-else-if="error">{{ error?.message || 'Ошибка загрузки' }}</div>
    <CategoryList v-else :categories="categories" />
    <h1 class="text-3xl pt-7 font-semibold">Рекомендуемые каналы</h1>
    <RecChannelsList :channels="channels" />
  </div>
</template>

<script setup lang="ts">
import RecChannelsList from '~/components/channels/RecChannelsList.vue';
import { useCategories } from '~/composables/useCategories';
import { useRecChannels } from '~/composables/useRecChannels';
import type { ApiResponse } from '~/types/api';
import type { Category } from '~/types/category';
import type { Channel } from '~/types/channel';

const { fetchCategories } = useCategories();
const { data, pending, error } = await useAsyncData<ApiResponse<Category[]>>('categories', () => fetchCategories());
const categories = computed(() => data.value?.data ?? []);

const { fetchRecChannels } = useRecChannels();
const { data: recChannelsData } = await useAsyncData<Channel[]>('recChannels', () => fetchRecChannels());
const channels = computed(() => recChannelsData.value ?? []);
</script>

<template>
  <div class="container mx-auto py-7">
    <h1 class="text-2xl font-semibold">Категории</h1>
    <div v-if="pendingCategories" class="pt-4">Загрузка...</div>
    <div v-else-if="errorCategories" class="pt-4">
      {{ errorCategoriesMsg || 'Ошибка загрузки категорий' }}
    </div>
    <CategoryList v-else :categories="categories" class="pt-4" />

    <h1 class="text-2xl font-semibold mt-10 mb-5">Рекомендуемые каналы</h1>
    <div v-if="pendingRecChannels">Загрузка...</div>
    <div v-else-if="errorRecChannels">
      {{ errorRecChannels?.message || 'Ошибка загрузки каналов' }}
    </div>
    <RecChannelsList v-else :channels="recChannels" />
  </div>
</template>

<script setup lang="ts">
import RecChannelsList from '~/components/channels/RecChannelsList.vue';
import CategoryList from '~/components/categories/CategoryList.vue';
import { useCategories } from '~/composables/useCategories';
import { useRecChannels } from '~/composables/useRecChannels';
import type { ApiResponse } from '~/types/api';
import type { Category } from '~/types/category';
import type { Channel } from '~/types/channel';

const { fetchCategories } = useCategories();
const {
  data: categoriesData,
  pending: pendingCategories,
  error: errorCategories,
} = await useAsyncData<ApiResponse<Category[]>>('categories', () => fetchCategories());
const categories = computed(() =>
  categoriesData.value?.status === 'success' ? (categoriesData.value.data ?? []) : []
);
const errorCategoriesMsg = computed(() =>
  categoriesData.value?.status === 'error' ? categoriesData.value.error?.description : errorCategories.value?.message
);

const { fetchRecChannels } = useRecChannels();
const {
  data: recChannelsData,
  pending: pendingRecChannels,
  error: errorRecChannels,
} = await useAsyncData<Channel[]>('recChannels', () => fetchRecChannels());
const recChannels = computed(() => recChannelsData.value ?? []);

definePageMeta({
  layout: 'default',
});
</script>

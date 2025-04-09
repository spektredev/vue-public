<template>
  <div class="container mx-auto py-7">
    <h1 class="text-2xl font-semibold mb-5">{{ categoryName }}</h1>
    <ChannelList :channels="channels" :pending="pending" />
    <Pagination :page="page" :total-pages="totalPages" class="mt-10" @update:page="updatePage" />
  </div>
</template>

<script setup lang="ts">
import { useCategories } from '~/composables/useCategories';
import { useChannels } from '~/composables/useChannels';
import type { ApiResponse } from '~/types/api';
import type { Category } from '~/types/category';

const route = useRoute();
const slug = route.params.slug as string;

const { fetchCategories } = useCategories();
const { data: categoriesData } = await useAsyncData<ApiResponse<Category[]>>('categories', () => fetchCategories());
const categories = computed(() =>
  categoriesData.value?.status === 'success' ? (categoriesData.value.data ?? []) : []
);
const category = computed(() => {
  const found = categories.value?.find((c) => c.link === slug);
  return found || { id: null, title: 'Неизвестная категория' };
});
const categoryName = computed(() => category.value.title);

const { channels, totalPages, page, pending } = useChannels(category.value.id);

function updatePage(newPage: number) {
  page.value = newPage;
}

definePageMeta({
  layout: 'default',
});
</script>

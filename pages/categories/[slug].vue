<template>
  <div class="container mx-auto py-7">
    <h1 class="text-2xl font-semibold mb-5">{{ categoryName }}</h1>
    <ChannelList v-if="categoryId" :channels="channels" />
    <div v-else class="text-center text-gray-500">Категория не найдена</div>
    <Pagination
      v-if="categoryId"
      :page="page"
      :total-pages="totalPages"
      class="Racing Sans Onemt-10"
      @update:page="updatePage"
    />
  </div>
</template>

<script setup lang="ts">
import { useCategories } from '~/composables/useCategories';
import { useChannels } from '~/composables/useChannels';

const route = useRoute();
const slug = route.params.slug as string;

const { catData } = useCategories();

const category = computed(() => {
  const found = catData.value?.find((c) => c.link === slug);
  return found || { id: null, title: 'Неизвестная категория' };
});
const categoryName = computed(() => category.value.title);
const categoryId = computed(() => category.value.id);

const channelsData = categoryId.value ? useChannels(categoryId.value) : null;
const channels = computed(() => channelsData?.channels.value ?? []);
const totalPages = computed(() => channelsData?.totalPages.value ?? 0);
const page = computed(() => channelsData?.page.value ?? 1);

function updatePage(newPage: number) {
  if (channelsData) {
    channelsData.page.value = newPage;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

definePageMeta({
  layout: 'default',
});
</script>

<template>
  <div class="container mx-auto px-4 py-7">
    <h1 class="text-2xl font-semibold mb-5">{{ categoryName }}</h1>
    <ChannelList :channels="channels" />
    <Pagination :page="page" :total-pages="totalPages" :loading="loading" class="mt-10" @update:page="updatePage" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue';

const route = useRoute();
const slug = computed(() => route.params.slug as string);

const { catData } = await useCategories();

const category = computed(() => {
  const found = catData.value.find((c) => c.link === slug.value);
  if (!found) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Категория не найдена',
    });
  }
  return found;
});

const categoryId = computed(() => category.value.id);
const categoryName = computed(() => category.value.title);

const oldTotalPages = ref<number | null>(null);
const { channels, totalPages, page, refresh, status } = await useChannels(categoryId.value, oldTotalPages.value);
const loading = computed(() => (status.value == 'pending' ? true : false));
watch([categoryId], () => {
  refresh();
});
if (totalPages) {
  oldTotalPages.value = totalPages.value;
}

async function scrollToTop() {
  await nextTick();
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

async function updatePage(newPage: number) {
  page.value = newPage;
  await scrollToTop();
}
onMounted(() => {
  scrollToTop();
});

definePageMeta({
  layout: 'limited-height',
});

useHead({
  title: categoryName,
  meta: [{ name: 'description', content: () => category.value.description || '' }],
});
</script>

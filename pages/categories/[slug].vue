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

const { catData, errData } = await useCategories();

if (errData.value) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Не удалось загрузить список категорий',
  });
}

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

const page = ref(1);

const channelsData = ref<ReturnType<typeof useChannels> | null>(null);
const channels = computed(() => channelsData.value?.channels ?? []);
const totalPages = computed(() => {
  return channelsData.value?.totalPages as number;
});
const loading = computed(() => channelsData.value?.status || 'idle');

watch(
  [categoryId, page],
  ([newCatId, newPage]) => {
    if (newCatId) {
      channelsData.value = useChannels(newCatId, newPage, totalPages.value);
    } else {
      channelsData.value = null;
    }
  },
  { immediate: true }
);

watch(slug, () => {
  page.value = 1;
});

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

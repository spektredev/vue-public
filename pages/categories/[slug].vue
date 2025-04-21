<template>
  <div class="container mx-auto py-7">
    <h1 class="text-2xl font-semibold mb-5">{{ categoryName }}</h1>
    <ChannelList :channels="channels" />
    <Pagination
      v-if="totalPages > 1"
      :page="page"
      :total-pages="totalPages"
      class="Racing Sans One mt-10"
      @update:page="updatePage"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted } from 'vue';
import { useCategories } from '~/composables/useCategories';
import { useChannels } from '~/composables/useChannels';

console.log('begin');

const route = useRoute();
const slug = computed(() => route.params.slug as string);
console.log('slug:', slug.value);

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

watch(
  [categoryId, page],
  ([newCatId, newPage]) => {
    if (newCatId) {
      channelsData.value = useChannels(newCatId, newPage);
    } else {
      channelsData.value = null;
    }
  },
  { immediate: true }
);

watch(slug, () => {
  page.value = 1;
});

const channels = computed(() => channelsData.value?.channels ?? []);
const totalPages = computed(() => channelsData.value?.totalPages ?? 0);

async function updatePage(newPage: number) {
  const NProgress = (await import('nprogress')).default;
  NProgress.start();
  page.value = newPage;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  await nextTick();
  setTimeout(() => NProgress.done(), 100);
}

definePageMeta({
  layout: 'limited-height',
});

onMounted(() => console.log('mounted'));
</script>

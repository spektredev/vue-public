<template>
  <div class="container mx-auto py-7">
    <!-- <div v-if="pending">Загрузка...</div>
    <div v-else-if="errData?.message">{{ errData?.message || 'Ошибка загрузки данных' }}</div>
    <div v-else-if="!categoryId">Категория не найдена</div> -->
    <div>
      <h1 class="text-2xl font-semibold mb-5">{{ categoryName }}</h1>
      <ChannelList :channels="channels" />
      <!-- <p v-else>Нет каналов в этой категории</p> -->

      <Pagination
        v-if="totalPages > 1"
        :page="page"
        :total-pages="totalPages"
        class="Racing Sans Onemt-10"
        @update:page="updatePage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useCategories } from '~/composables/useCategories';
import { useChannels } from '~/composables/useChannels';

const route = useRoute();
const slug = computed(() => route.params.slug as string);

const { catData } = useCategories();
// const { catData, errData, pending } = useCategories();

const category = computed(() => {
  const found = catData.value?.find((c) => c.link === slug.value);
  return found || { id: null, title: 'Неизвестная категория' };
});

const categoryName = computed(() => category.value.title);
const categoryId = computed(() => category.value.id);

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

watch(
  slug,
  () => {
    page.value = 1;
  },
  { immediate: false }
);

const channels = computed(() => channelsData.value?.channels ?? []);
const totalPages = computed(() => channelsData.value?.totalPages ?? 0);

async function updatePage(newPage: number) {
  const NProgress = (await import('nprogress')).default;
  NProgress.start();

  page.value = newPage;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  await nextTick();

  setTimeout(() => {
    NProgress.done();
  }, 100);
}

definePageMeta({
  layout: 'limited-height',
});
</script>

<template>
  <div class="container mx-auto py-7">
    <div v-if="status === 'pending'">Загрузка...</div>
    <div v-else-if="status === 'error'">{{ errData?.message || 'Ошибка загрузки данных' }}</div>
    <div v-else-if="!categoryId">Категория не найдена</div>
    <div v-else>
      <h1 class="text-2xl font-semibold mb-5">{{ categoryName }}</h1>
      <ChannelList :channels="channels" />
      <Pagination
        v-if="categoryId"
        :page="page"
        :total-pages="totalPages"
        class="Racing Sans Onemt-10"
        @update:page="updatePage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { catData, errData, status } = useCategories();
const route = useRoute();
const slug = route.params.slug as string;

console.log('catData:', catData.value);

const category = computed(() => {
  console.log('computed category');
  const found = catData.value?.find((c) => c.link === slug);
  console.log('found: ', found);
  return found || { id: null, title: 'Неизвестная категория' };
});

const categoryName = computed(() => category.value.title);
const categoryId = computed(() => category.value.id);
console.log('categoryId', categoryId.value);

const channelsData = categoryId.value ? useChannels(categoryId.value) : null;
const channels = computed(() => channelsData?.channels.value ?? []);
const totalPages = computed(() => channelsData?.totalPages.value ?? 0);
const page = computed(() => channelsData?.page.value ?? 1);
console.log('page', page.value);

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

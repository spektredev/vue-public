<template>
  <div class="container mx-auto py-7 px-4">
    <h1 class="text-2xl font-semibold">Каналы по категориям</h1>
    <CategoryList :categories="catData" />
  </div>
</template>

<script setup lang="ts">
const { catData } = await useCategories();

definePageMeta({
  layout: 'main',
});
useHead({
  title: 'Категории',
});
</script>

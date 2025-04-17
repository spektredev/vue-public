<template>
  <div class="container mx-auto py-7">
    <h1 class="text-2xl font-semibold">Категории</h1>
    <CategoryList :categories="catData" />
  </div>
</template>

<script setup lang="ts">
import CategoryList from '~/components/categories/CategoryList.vue';
import { useCategories } from '~/composables/useCategories';

const { catData } = useCategories();

definePageMeta({
  layout: 'default',
});
</script>

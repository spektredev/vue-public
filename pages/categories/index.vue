<template>
  <div class="container mx-auto py-7">
    <h1 class="text-2xl font-semibold">Категории</h1>
    <div v-if="pending" class="pt-4">Загрузка...</div>
    <div v-else-if="errData" class="pt-4 text-red-500">Ошибка: {{ errData.message }}</div>
    <div v-else>
      <CategoryList :categories="catData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CategoryList from '~/components/categories/CategoryList.vue';
import { useCategories } from '~/composables/useCategories';

const { catData, errData, pending } = useCategories();

definePageMeta({
  layout: 'default',
});
</script>

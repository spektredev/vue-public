<template>
  <div class="grid grid-cols-3 gap-5 mt-6 mb-10">
    <CategoryCard v-for="category in categories" :key="category.id" :category="category" />
  </div>
</template>

<script setup lang="ts">
import type { Category } from '~/types/category';

defineProps<{
  categories: Category[] | null;
}>();
</script>

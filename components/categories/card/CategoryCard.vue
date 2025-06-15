<template>
  <NuxtLink :to="`/categories/${category.link}`">
    <div
      class="relative h-40 rounded-xl bg-cover bg-center overflow-hidden"
      :style="{ backgroundImage: `url(${category.cat_image})` }"
    >
      <div class="absolute bottom-0 left-0 right-0 h-10 bg-neutral-900/85 flex items-center">
        <div class="text-white text-base px-4">
          {{ category.title }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Category } from '~/types/category';

defineProps<{
  category: Category;
}>();
</script>

<style scoped>
a:hover .bg-neutral-900\/85 {
  background-color: rgba(23, 23, 23, 1);
  transition: background-color 0.3s ease;
}
</style>

<template>
  <NuxtLink :to="category.link">
    <div
      class="relative h-40 rounded-xl bg-cover bg-center overflow-hidden"
      :style="{ backgroundImage: `url(${category.cat_image})` }"
    >
      <div class="absolute inset-0 bg-gradient-to-b from-neutral-900/0 to-neutral-900/90"/>
      <div class="absolute bottom-4 left-4 text-white text-xl font-semibold">
        {{ category.title }}
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

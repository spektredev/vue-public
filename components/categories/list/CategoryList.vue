<template>
  <div>
    <ul class="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-1 mt-4 mb-6 md:hidden">
      <li v-for="category in categories" :key="category.id">
        <NuxtLink
          :to="`/categories/${category.link}`"
          class="block text-base text-gray-800 dark:text-gray-200 py-2 px-2 underline underline-offset-4"
          :aria-label="`View ${category.title} category`"
        >
          {{ category.title }}
        </NuxtLink>
      </li>
    </ul>
    <div class="hidden md:grid md:grid-cols-3 md:gap-5 md:mt-6 md:mb-10">
      <CategoryCard v-for="category in categories" :key="category.id + '-mobile'" :category="category" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Category } from '~/types/category';
import CategoryCard from '~/components/categories/card/CategoryCard.vue';

defineProps<{
  categories: Category[] | null;
}>();
</script>

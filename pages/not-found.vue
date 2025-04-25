<template>
  <div class="container h mx-auto py-10 flex flex-col items-center justify-center">
    <h1 class="text-6xl font-bold text-gray-800 dark:text-white mb-4">404</h1>
    <p class="text-2xl text-gray-600 dark:text-neutral-200 mb-6">Ой! Кажется, мы потерялись...</p>

    <img src="/images/404/sad.png" alt="Грустный кот" class="w-64 h-64 object-fit mb-8" >

    <p class="text-gray-500 dark:text-neutral-100 text-lg mb-8 text-center max-w-md">
      Страница, которую вы ищете, не найдена. Но не грустите, как этот котик — у нас есть много интересного!
    </p>

    <div class="flex gap-4">
      <NuxtLink
        to="/"
        class="px-6 py-3 bg-accent-200 dark:bg-neutral-600 dark:hover:bg-neutral-500 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        На главную
      </NuxtLink>
      <NuxtLink
        to="/categories"
        class="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
      >
        К категориям
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'flexed',
});
useHead({
  title: 'Не найдено',
});
</script>

<style scoped>
.min-h-screen {
  min-height: 100vh;
}
</style>

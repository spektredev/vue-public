<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<!-- <script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useTheme } from '~/composables/useTheme';

const { isDarkMode } = useTheme();
onBeforeMount(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDarkMode.value = true;
    document.documentElement.classList.add('dark');
  } else {
    isDarkMode.value = false;
    document.documentElement.classList.remove('dark');
  }
});
</script> -->

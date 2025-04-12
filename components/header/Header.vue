<template>
  <header class="bg-accent-200 text-white font-rubik dark:bg-darken-800">
    <div class="container py-5 flex justify-between items-center">
      <NuxtLink to="/" class="flex justify-between gap-2">
        <Icon name="icon:logo" class="h-7 w-7 text-white" />
        <h1 class="text-lg font-semibold">TGrow</h1>
      </NuxtLink>
      <nav class="flex gap-10">
        <NuxtLink to="/categories">Категории</NuxtLink>
        <NuxtLink to="/news">Новости</NuxtLink>
        <NuxtLink to="/about">О сайте</NuxtLink>
        <NuxtLink to="/download">Скачать</NuxtLink>
      </nav>
      <div class="theme-switcher flex justify-between">
        <button class="focus:outline-none" @click="toggleTheme">
          <Icon :name="isDarkMode ? 'icon:theme-dark' : 'icon:theme-light'" class="h-7 w-7 text-white" />
        </button>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { useTheme } from '~/composables/useTheme';

const { isDarkMode, toggleTheme } = useTheme();
</script>

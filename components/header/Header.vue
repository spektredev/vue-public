<template>
  <header class="bg-accent-200 text-white font-rubik dark:bg-darken-800">
    <div class="container py-5 px-4 flex items-center justify-between">
      <div class="flex items-center">
        <button
          class="md:hidden focus:outline-none mr-4 h-[28px]"
          :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="isMenuOpen"
          @click="toggleMenu"
        >
          <Icon :name="isMenuOpen ? 'mdi:close' : 'mdi:hamburger-menu'" class="h-7 w-7 text-white" />
        </button>

        <NuxtLink to="/" class="flex items-center gap-2">
          <Icon name="icon:logo" class="h-7 w-7 text-white" />
          <h1 class="text-lg font-semibold">TGrow</h1>
        </NuxtLink>
      </div>

      <nav class="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
        <NuxtLink to="/categories" class="hover:underline">Категории</NuxtLink>
        <NuxtLink to="/news" class="hover:underline">Новости</NuxtLink>
        <NuxtLink to="/about" class="hover:underline">О сайте</NuxtLink>
        <NuxtLink to="/download" class="hover:underline">Скачать</NuxtLink>
      </nav>

      <div class="theme-switcher flex items-center">
        <button
          class="focus:outline-none h-[28px]"
          :aria-label="isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'"
          @click="toggleTheme"
        >
          <Icon :name="isDarkMode ? 'icon:theme-dark' : 'icon:theme-light'" class="h-7 w-7 text-white" />
        </button>
      </div>
    </div>

    <div
      v-show="isMenuOpen"
      class="fixed inset-y-0 left-0 w-64 bg-accent-200 dark:bg-darken-800 md:hidden transition-transform duration-300 ease-in-out z-50"
      :class="{ 'translate-x-0': isMenuOpen, '-translate-x-full': !isMenuOpen }"
    >
      <div class="flex flex-col h-full">
        <div class="p-4 flex items-center gap-2">
          <Icon name="icon:logo" class="h-7 w-7 text-white" />
          <h1 class="text-lg font-semibold">TGrow</h1>
        </div>
        <nav class="flex flex-col gap-4 p-4 flex-grow">
          <NuxtLink to="/categories" class="text-base hover:underline py-2" @click="toggleMenu"> Категории </NuxtLink>
          <NuxtLink to="/news" class="text-base hover:underline py-2" @click="toggleMenu"> Новости </NuxtLink>
          <NuxtLink to="/about" class="text-base hover:underline py-2" @click="toggleMenu"> О сайте </NuxtLink>
          <NuxtLink to="/download" class="text-base hover:underline py-2" @click="toggleMenu"> Скачать </NuxtLink>
        </nav>
        <div class="p-4 border-t border-white/20">
          <button
            class="focus:outline-none flex items-center gap-2"
            :aria-label="isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'"
            @click="toggleTheme"
          >
            <Icon :name="isDarkMode ? 'icon:theme-dark' : 'icon:theme-light'" class="h-7 w-7 text-white" />
            <span class="text-base">{{ isDarkMode ? 'Светлая тема' : 'Тёмная тема' }}</span>
          </button>
        </div>
      </div>
    </div>

    <div v-if="isMenuOpen" class="fixed inset-0 bg-black/50 md:hidden z-40" @click="toggleMenu" />
  </header>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme';

const { isDarkMode, toggleTheme } = useTheme();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.translate-x-0 {
  transform: translateX(0);
}
.-translate-x-full {
  transform: translateX(-100%);
}
</style>

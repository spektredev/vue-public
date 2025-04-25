import { defineNuxtPlugin, useCookie, useHead, useState } from '#app';
import { watch } from 'vue'; // Импортируем watch из vue

export default defineNuxtPlugin((nuxtApp) => {
  const themeCookie = useCookie<'dark' | 'light'>('theme', {
    default: () => 'light',
    maxAge: 60 * 60 * 24 * 365,
  });

  const isDarkMode = useState<boolean>('isDarkMode', () => themeCookie.value === 'dark');

  useHead({
    htmlAttrs: {
      class: () => (isDarkMode.value ? 'dark' : ''),
    },
  });

  if (import.meta.client) {
    nuxtApp.hook('app:mounted', () => {
      document.documentElement.classList.toggle('dark', isDarkMode.value);
    });

    watch(isDarkMode, (newValue: boolean) => {
      document.documentElement.classList.toggle('dark', newValue);
    });
  }

  return {
    provide: {
      theme: {
        isDarkMode,
        setTheme: (theme: 'dark' | 'light') => {
          themeCookie.value = theme;
          isDarkMode.value = theme === 'dark';
        },
      },
    },
  };
});

import { defineNuxtPlugin, useCookie, useHead, useState } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  const themeCookie = useCookie<'dark' | 'light'>('theme', {
    default: () => 'light',
    maxAge: 60 * 60 * 24 * 365,
  });

  const isDarkMode = useState<boolean>('isDarkMode', () => themeCookie.value === 'dark');

  useHead({
    htmlAttrs: {
      class: isDarkMode.value ? 'dark' : '',
    },
  });

  if (import.meta.client) {
    nuxtApp.hook('app:mounted', () => {
      document.documentElement.classList.toggle('dark', isDarkMode.value);
    });
  }

  return {
    provide: {
      theme: {
        isDarkMode,
        setTheme: (theme: 'dark' | 'light') => {
          themeCookie.value = theme;
          isDarkMode.value = theme === 'dark';
          if (import.meta.client) {
            document.documentElement.classList.toggle('dark', isDarkMode.value);
          }
        },
      },
    },
  };
});

import { defineNuxtPlugin, useCookie, useHead, useState } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  // Читаем куки на сервере и клиенте
  const themeCookie = useCookie<'dark' | 'light'>('theme', {
    default: () => 'light', // Значение по умолчанию
    maxAge: 60 * 60 * 24 * 365, // 1 год
  });

  // Инициализируем реактивное состояние
  const isDarkMode = useState<boolean>('isDarkMode', () => themeCookie.value === 'dark');

  // Задаём класс для <html> на этапе SSR
  useHead({
    htmlAttrs: {
      class: isDarkMode.value ? 'dark' : '',
    },
  });

  // Синхронизируем класс на клиенте после гидрации
  if (import.meta.client) {
    nuxtApp.hook('app:mounted', () => {
      document.documentElement.classList.toggle('dark', isDarkMode.value);
    });
  }

  // Предоставляем реактивное состояние и методы
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

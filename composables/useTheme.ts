import { ref } from 'vue';

export function useTheme() {
  const isDarkMode = ref(false);

  function toggleTheme() {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  return {
    isDarkMode,
    toggleTheme,
  };
}

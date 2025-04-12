import { ref, onMounted } from 'vue';

export function useTheme() {
  const isDarkMode = ref(false);

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      isDarkMode.value = true;
      document.documentElement.classList.add('dark');
    } else {
      isDarkMode.value = false;
      document.documentElement.classList.remove('dark');
    }
  });

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

// import { useNuxtApp } from '#app';

// export function useTheme() {
//   const { $theme } = useNuxtApp();
//   const { isDarkMode, setTheme } = $theme;

//   function toggleTheme() {
//     const newTheme = isDarkMode.value ? 'light' : 'dark';
//     setTheme(newTheme);
//   }

//   return {
//     isDarkMode,
//     toggleTheme,
//   };
// }
import { useNuxtApp } from '#app';

export function useTheme() {
  const { $theme } = useNuxtApp();
  const { isDarkMode, setTheme } = $theme;

  function toggleTheme() {
    const newTheme = isDarkMode.value ? 'light' : 'dark';
    setTheme(newTheme);
  }

  return {
    isDarkMode,
    toggleTheme,
  };
}

// composables/useSearch.ts
import type { Channel } from '~/types/channel';
import { useFetch } from 'nuxt/app';

export function useSearch() {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBaseUrl;
  const router = useRouter();

  const searchQuery = ref<string>('');
  const searchResults = ref<Channel[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  // // Функция для очистки ошибки через заданное время
  // function clearErrorAfterDelay(delay: number = 2000) {
  //   if (error.value) {
  //     setTimeout(() => {
  //       error.value = null;
  //     }, delay);
  //   }
  // }

  async function searchChannels() {
    if (!searchQuery.value || searchQuery.value.length < 3) {
      error.value = 'Запрос должен содержать минимум 3 символа';
      searchResults.value = [];
      // clearErrorAfterDelay(); // Очищаем ошибку через 2 секунды
      return;
    }

    isLoading.value = true;
    error.value = null;

    try {
      const { data } = await useFetch<Channel[]>(`/channels/search/${encodeURIComponent(searchQuery.value)}`, {
        baseURL,
        key: `search${Math.random()}`,
      });

      searchResults.value = data.value || [];
      if (searchResults.value.length > 0) {
        router.push(`/search?query=${encodeURIComponent(searchQuery.value)}`);
      } else {
        error.value = 'Ничего не найдено';
        // clearErrorAfterDelay(); // Очищаем ошибку через 2 секунды
      }
    } catch (err) {
      error.value = 'Ошибка при поиске каналов';
      searchResults.value = [];
      // clearErrorAfterDelay(); // Очищаем ошибку через 2 секунды
      console.error('error: ', err);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    searchQuery,
    searchResults,
    isLoading,
    error,
    searchChannels,
  };
}

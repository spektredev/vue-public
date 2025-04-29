import type { Channel } from '~/types/channel';
import { useFetch, useRoute, useRouter } from '#app';

export function useSearch() {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBaseUrl;
  const router = useRouter();
  const route = useRoute();

  const searchQuery = ref<string>('');
  const searchResults = ref<Channel[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  function clearErrorAfterDelay(delay: number = 2000) {
    if (error.value) {
      setTimeout(() => {
        error.value = null;
      }, delay);
    }
  }

  async function searchChannels() {
    if (!searchQuery.value || searchQuery.value.length < 3) {
      error.value = 'Запрос должен содержать минимум 3 символа';
      searchResults.value = [];
      clearErrorAfterDelay();
      return;
    }

    isLoading.value = true;
    error.value = null;

    try {
      const { data } = await useFetch<Channel[]>(`/channels/search/${encodeURIComponent(searchQuery.value)}`, {
        baseURL,
        key: `search-${searchQuery.value}`,
      });

      searchResults.value = data.value || [];
      if (searchResults.value.length === 0) {
        error.value = 'Ничего не найдено';
        clearErrorAfterDelay();
      }
      if (String(route.query.query) !== searchQuery.value) {
        await router.push(`/search?query=${encodeURIComponent(searchQuery.value)}`);
      }
    } catch (err) {
      error.value = 'Ошибка при поиске каналов';
      searchResults.value = [];
      clearErrorAfterDelay();
      console.error('Search error:', err);
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

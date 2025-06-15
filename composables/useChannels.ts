import { ref, computed } from 'vue';
import type { PaginatedResponse } from '~/types/api';

export async function useChannels(categoryId: number, oldTotalPages: number | null) {
  const page = ref(1);
  const limit = ref(12);
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBaseUrl;

  const { data, refresh, status } = await useFetch<PaginatedResponse>('/channels/paginated', {
    baseURL,
    query: { page, limit, categoryId },
    key: `channels-${categoryId}-page-${page.value}`,
  });

  watch(page, () => {
    refresh();
  });

  const channels = computed(() => data.value?.data ?? []);
  const totalChannels = computed(() => data.value?.total ?? 0);
  const totalPages = computed(() => {
    if (oldTotalPages) {
      return oldTotalPages;
    }
    return Math.ceil(totalChannels.value / limit.value);
  });

  return { channels, totalChannels, totalPages, page, refresh, status };
}

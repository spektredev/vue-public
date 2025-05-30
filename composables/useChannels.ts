import { ref, computed } from 'vue';
import type { PaginatedResponse } from '~/types/api';

export function useChannels(categoryId: number, initialPage = 1, oldTotalPages: number) {
  const page = ref(initialPage);
  const limit = ref(12);
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBaseUrl;

  const { data, refresh, status } = useFetch<PaginatedResponse>('/channels/paginated', {
    baseURL,
    query: { page, limit, categoryId },
    key: `channels-${categoryId}-page-${page.value}`,
  });

  const channels = computed(() => data.value?.data ?? []);
  const total = computed(() => data.value?.total ?? 0);
  const totalPages = computed(() => {
    if (oldTotalPages) {
      return oldTotalPages;
    }
    return Math.ceil(total.value / limit.value);
  });

  return { channels, total, totalPages, page, refresh, status };
}

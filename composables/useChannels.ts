import { ref, watch, computed } from 'vue';
import type { PaginatedResponse } from '~/types/api';

export function useChannels(categoryId: number, initialPage = 1) {
  const page = ref(initialPage);
  const limit = ref(14);
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBaseUrl || 'http://localhost:3001';

  const { data, refresh } = useFetch<PaginatedResponse>('/channels/paginated', {
    baseURL,
    query: { page, limit, categoryId },
    key: `channels-${categoryId}-page-${page.value}`,
  });

  watch(page, () => {
    refresh();
  });

  const channels = computed(() => data.value?.data ?? []);
  const total = computed(() => data.value?.total ?? 0);
  const totalPages = computed(() => Math.ceil(total.value / limit.value));

  return { channels, total, totalPages, page, refresh };
}

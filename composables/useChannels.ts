import { ref, watch, computed } from 'vue';
import type { Channel } from '~/types/channel';

interface PaginatedResponse {
  data: Channel[];
  total: number;
}

export function useChannels(categoryId: number | null, initialPage = 1) {
  const page = ref(initialPage);
  const limit = ref(18);
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBaseUrl || 'http://localhost:3001';

  const { data, pending, refresh } = useFetch<PaginatedResponse>('/channels/paginated', {
    baseURL,
    query: {
      page,
      limit,
      categoryId: categoryId ?? undefined,
    },
    key: `channels-${categoryId ?? 'all'}-page-${page.value}`,
  });

  const channels = computed(() => data.value?.data ?? []);
  const total = computed(() => data.value?.total ?? 0);
  const totalPages = computed(() => Math.ceil(total.value / limit.value));

  watch(page, () => refresh());

  return {
    channels,
    total,
    totalPages,
    page,
    pending,
    refresh,
  };
}

import { ref, watch, computed } from 'vue';
import type { PaginatedResponse } from '~/types/api';

export function useChannels(categoryId?: number | null, initialPage = 1) {
  const page = ref(initialPage);
  const limit = ref(14);
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBaseUrl || 'http://localhost:3001';

  console.log('useChannels: initializing useFetch');
  const { data, refresh, execute } = useFetch<PaginatedResponse>('/channels/paginated', {
    baseURL,
    query: { page, limit, categoryId: categoryId ?? undefined },
    key: `channels-${categoryId ?? 'all'}-page-${page.value}`,
    immediate: false,
    watch: false,
  });

  if (categoryId) {
    console.log('useChannels: calling execute');
    execute();
  }

  const channels = computed(() => data.value?.data ?? []);
  const total = computed(() => data.value?.total ?? 0);
  const totalPages = computed(() => Math.ceil(total.value / limit.value));

  watch(page, (newPage) => {
    console.log(`watch: page changed to ${newPage}`);
    if (categoryId) {
      console.log('watch: calling refresh');
      refresh();
    }
  });

  return { channels, total, totalPages, page, refresh };
}

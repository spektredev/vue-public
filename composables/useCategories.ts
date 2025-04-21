import type { Category } from '~/types/category';

export const useCategories = () => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBaseUrl || 'http://localhost:3001';

  const { data, error, refresh, status } = useFetch<Category[]>('/categories', {
    baseURL,
    key: 'categories-all',
  });

  const catData = computed(() => data.value || []);
  const errData = computed(() => error.value || null);

  return { catData, errData, refresh, status };
};

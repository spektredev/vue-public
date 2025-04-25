// composables/useCategories.ts
import type { Category } from '~/types/category';

export const useCategories = async () => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBaseUrl;

  const { data, error, refresh, status, pending } = await useFetch<Category[]>('/categories', {
    baseURL,
    key: 'categories-all',
  });

  const catData = computed(() => data.value ?? []);
  const errData = computed(() => error.value ?? null);

  return { catData, errData, refresh, status, pending };
};

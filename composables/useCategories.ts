import type { Category } from '~/types/category';

export const useCategories = () => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBaseUrl || 'http://localhost:3001';

  const { data, error, pending } = useFetch<Category[]>('/categories', {
    baseURL,
    key: 'cat-list',
  });

  const catData = computed(() => {
    console.log('Fetched categories:', data.value);
    return data.value || [];
  });
  const errData = computed(() => {
    console.log('Error:', error.value);
    return error.value;
  });

  return { catData, errData, pending };
};

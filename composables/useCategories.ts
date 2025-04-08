import { useFetch } from '#app';
import type { ApiResponse } from '~/types/api';
import type { Category } from '~/types/category';

export const useCategories = () => {
  const config = useRuntimeConfig();

  const fetchCategories = async (): Promise<ApiResponse<Category[]>> => {
    const { data, error } = await useFetch('/categories', {
      baseURL: config.public.apiBaseUrl || 'http://localhost:3001',
    });

    return error.value
      ? {
          status: 'error',
          error: { description: error.value.message, code: 500 },
        }
      : {
          status: 'success',
          data: data.value as Category[],
        };
  };

  return { fetchCategories };
};

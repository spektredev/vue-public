import { useFetch } from '#app';
import type { Channel } from '~/types/channel';
import type { Ref } from 'vue';

export function useSearch(queryRef: Ref<string>) {
  return useFetch<Channel[]>(`/channels/search/${queryRef.value}`, {
    baseURL: useRuntimeConfig().public.apiBaseUrl,
    key: () => `search-${queryRef.value}`,
  });
}

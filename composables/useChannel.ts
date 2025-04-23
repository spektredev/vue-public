import type { Channel } from '~/types/channel';
import { useFetch } from 'nuxt/app';

export async function useChannel(link?: string) {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBaseUrl || 'http://localhost:3001';

  const { data, error } = await useFetch<Channel>(`/channels/link/${link}`, {
    baseURL,
    key: `channel-${link}`,
  });

  const channel = computed(() => data.value || null);
  const errorData = computed(() => error.value || null);

  return { channel, errorData };
}

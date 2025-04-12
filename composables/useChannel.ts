import type { Channel } from '~/types/channel';
import { useFetch } from 'nuxt/app';

export function useChannel(link?: string) {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBaseUrl || 'http://localhost:3001';

  const { data, error } = useFetch<Channel>(`/channels/link/${link}`, {
    baseURL,
    key: `channel-${link}`,
  });

  const channel = computed(() => data.value || null);
  const errorData = computed(() => error.value || null);

  return { channel, errorData };
}

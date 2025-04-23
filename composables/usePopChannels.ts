import { mockChannels } from '~/mocks/pop_channels';
// import type { Channel } from '~/types/channel';

export const usePopChannels = () => {
  // const fetchPopChannels = async (): Promise<Channel[]> => {
  //   return mockChannels;
  // };

  // const { data } = useAsyncData<Channel[]>('popChannels', () => fetchPopChannels());
  // const popChannels = computed(() => data.value ?? []);

  return { mockChannels };
};

import { mockChannels } from '~/mocks/rec_channels';
// import type { Channel } from '~/types/channel';

export const useRecChannels = () => {
  // const fetchRecChannels = async (): Promise<Channel[]> => {
  //   return mockChannels;
  // };

  // const { data } = useAsyncData<Channel[]>('recChannels', () => fetchRecChannels());
  // const recChannels = computed(() => data.value ?? []);

  return { mockChannels };
};

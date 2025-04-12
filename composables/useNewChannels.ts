import { mockChannels } from '~/mocks/new_channels';
// import type { Channel } from '~/types/channel';

export const useNewChannels = () => {
  // const fetchNewChannels = async (): Promise<Channel[]> => {
  //   return mockChannels;
  // };

  // const { data } = useAsyncData<Channel[]>('newChannels', () => fetchNewChannels());
  // const newChannels = computed(() => data.value ?? []);

  return { mockChannels };
};

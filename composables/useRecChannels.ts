import { mockChannels } from '~/mocks/rec_channels';
import type { Channel } from '~/types/channel';

export const useRecChannels = () => {
  const fetchRecChannels = async (): Promise<Channel[]> => {
    return mockChannels;
  };

  return { fetchRecChannels };
};

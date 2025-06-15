import { mockChannels } from '~/mocks/rec-channels';
import type { Channel } from '~/types/channel';

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export const useRecChannels = (count = 6) => {
  return useAsyncData<Channel[]>('recChannels', () => {
    return Promise.resolve(shuffleArray(mockChannels).slice(0, count));
  });
};

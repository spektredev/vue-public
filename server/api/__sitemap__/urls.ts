import { defineSitemapEventHandler } from '#imports';
// import type { SitemapUrl } from '#sitemap/types'
import type { Category } from '~/types/category';
import type { Channel } from '~/types/channel';

export default defineSitemapEventHandler(async () => {
  const channels: Channel[] = await $fetch('http://localhost:3001/channels/');
  const categories: Category[] = await $fetch('http://localhost:3001/categories/');

  const channelLinks = channels.map((channel) => ({
    loc: `/channel/${channel.link}`,
  }));

  const catLinks = categories.map((category) => ({
    loc: `/categories/${category.link}`,
  }));

  return [...channelLinks, ...catLinks];
});

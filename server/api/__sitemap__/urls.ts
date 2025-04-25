// import { defineSitemapEventHandler } from '#imports';
// // import type { SitemapUrl } from '#sitemap/types'
// import type { Category } from '~/types/category';
// import type { Channel } from '~/types/channel';

// export default defineSitemapEventHandler(async () => {
//   const config = useRuntimeConfig();
//   const channels: Channel[] = await $fetch(`${config.public.apiBaseUrl}/channels/`);
//   const categories: Category[] = await $fetch(`${config.public.apiBaseUrl}/categories/`);

//   const channelLinks = channels.map((channel) => ({
//     loc: `/channel/${channel.link}`,
//   }));

//   const catLinks = categories.map((category) => ({
//     loc: `/categories/${category.link}`,
//   }));

//   return [...channelLinks, ...catLinks];
// });

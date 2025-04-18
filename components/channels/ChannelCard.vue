<template>
  <div
    class="border dark:border-darken-200 dark:bg-darken-200 border-solid border-gray-300 rounded-xl pl-4 pr-4 min-h-[125px] flex items-center"
  >
    <div class="flex gap-4 items-center w-full">
      <NuxtLink :to="`/channel/${channel.link}`">
        <div class="w-[100px] h-[100px] rounded-full overflow-hidden relative">
          <img :src="formattedImgLink" :alt="channel.title" class="w-full h-full object-cover" >
        </div>
      </NuxtLink>

      <div class="flex-1 flex flex-col gap-1">
        <NuxtLink :to="`/channel/${channel.link}`">
          <div class="text-xl line-clamp-1 min-h-[28px] hover:underline hover:underline-offset-4">
            {{ channel.title }}
          </div>
        </NuxtLink>

        <div class="flex items-center gap-3 min-h-[24px]">
          <NuxtLink class="text-gray-400 text-base" :to="`/channel/${channel.link}`">
            {{ channel.link }}
          </NuxtLink>
          <div class="flex items-center gap-1 text-gray-500 text-sm leading-none align-middle">
            <Icon name="icon:subs" class="w-4 h-4" />
            <div class="leading-none">{{ formattedSubs }}</div>
          </div>
        </div>

        <div class="text-gray-700 dark:text-gray-300 text-sm/6 line-clamp-2 min-h-[40px]">
          {{ shortDescription }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Channel } from '~/types/channel';

const props = defineProps<{ channel: Channel }>();

const {
  public: { minioUrl },
} = useRuntimeConfig();

const formattedImgLink = computed(() => {
  const link = props.channel.img_link?.trim() || '';
  if (!link) return '/images/another.png';
  const prefix = minioUrl.replace(/\/+$/, '');
  const path = link.replace(/^\/+/, '');
  return `${prefix}/${path}`;
});

const formattedSubs = computed(() => {
  const subs = props.channel.subs || 0;
  if (subs >= 1_000_000) return `${(subs / 1_000_000).toFixed(1)}M`;
  if (subs >= 1_000) return `${(subs / 1_000).toFixed(1)}K`;
  return subs.toLocaleString('en-US');
});

const cleanText = (text: string) => text.replace(/\uFFFD/g, '').trim();

const shortDescription = computed(() => {
  if (!props.channel.description) return '';

  const clean = cleanText(props.channel.description);

  const chars = Array.from(clean);

  return chars.length > 100 ? chars.slice(0, 100).join('') + '…' : clean;
});
</script>

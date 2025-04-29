<template>
  <div
    class="border dark:border-darken-200 dark:bg-darken-200 border-solid border-gray-300 rounded-xl p-3 min-h-[100px] flex items-center md:p-4 md:min-h-[125px]"
  >
    <div class="flex gap-3 items-center w-full md:gap-4">
      <NuxtLink :to="`/channel/${channel.link}`" :aria-label="`View ${channel.title} channel`">
        <div class="w-[80px] h-[80px] rounded-full overflow-hidden relative md:w-[100px] md:h-[100px]">
          <div
            v-if="!isImageLoaded"
            class="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-gray-200 dark:bg-darken-700 absolute top-0 left-0"
          />
          <NuxtImg
            :src="formattedImgLink"
            :alt="channel.title"
            format="webp"
            sizes="sm:80px md:100px"
            class="w-full h-full object-cover"
            :class="{ 'opacity-0': !isImageLoaded }"
            @load="isImageLoaded = true"
          />
        </div>
      </NuxtLink>

      <div class="flex-1 flex flex-col gap-1">
        <NuxtLink :to="`/channel/${channel.link}`" :aria-label="`View ${channel.title} channel`">
          <div
            class="text-lg line-clamp-1 min-h-[24px] hover:underline hover:underline-offset-4 md:text-xl md:min-h-[28px]"
          >
            {{ channel.title }}
          </div>
        </NuxtLink>

        <div class="flex flex-col gap-1 min-h-[20px] lg:flex-row lg:flex lg:items-center lg:gap-3 lg:min-h-[24px]">
          <NuxtLink
            :to="`/channel/${channel.link}`"
            class="text-gray-400 text-sm lg:text-base"
            :aria-label="`Visit ${channel.link}`"
          >
            {{ channel.link }}
          </NuxtLink>
          <div class="flex items-center gap-1 text-gray-500 text-xs leading-none align-middle lg:text-sm">
            <Icon name="icon:subs" class="w-4 h-4" />
            <div class="leading-none">{{ formattedSubs }}</div>
          </div>
        </div>

        <div
          class="text-gray-700 dark:text-gray-300 text-xs/5 md:text-sm/6 min-h-[30px] md:min-h-[40px] line-clamp-2 break-words truncate overflow-ellipsis whitespace-normal overflow-hidden"
        >
          {{ shortDescription }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Channel } from '~/types/channel';

const props = defineProps<{ channel: Channel }>();

const {
  public: { minioUrl },
} = useRuntimeConfig();

const isImageLoaded = ref(false);

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

function getCharWeight(char: string) {
  const code = char.codePointAt(0);
  if ((code && code > 0xffff) || /\p{Emoji}/u.test(char)) return 2;
  if (/[a-zA-Z]/.test(char)) return 1;
  return 1.5;
}

function truncateTextByWeight(text: string, maxWeight = 100) {
  if (!text) return '';

  const clean = cleanText(text);
  const chars = Array.from(clean);
  let weight = 0;
  let i = 0;

  while (i < chars.length && weight < maxWeight) {
    weight += getCharWeight(chars[i]);
    i++;
  }

  if (i >= chars.length) return clean;
  return chars.slice(0, i).join('') + '…';
}

const shortDescription = computed(() => {
  if (!props.channel.description) return '';
  return truncateTextByWeight(props.channel.description, 110);
});
</script>

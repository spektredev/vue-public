<template>
  <div
    class="border dark:border-darken-200 dark:bg-darken-200 border-solid border-gray-300 rounded-xl pl-4 pr-4 min-h-[125px] flex items-center"
  >
    <div class="flex gap-4 items-center w-full">
      <NuxtLink :to="`/channel/${channel.link}`">
        <div class="w-[100px] h-[100px] rounded-full overflow-hidden relative">
          <div v-if="!isLoaded" class="absolute inset-0 bg-gray-200 rounded-full animate-pulse" />
          <img
            :src="formattedImgLink"
            alt="Channel image"
            class="w-full h-full object-cover"
            :class="{ 'opacity-0': !isLoaded }"
            @load="isLoaded = true"
          >
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
import type { Channel } from '~/types/channel';
import { computed, ref } from 'vue';

const props = defineProps<{ channel: Channel }>();
const {
  public: { minioUrl },
} = useRuntimeConfig();

const isLoaded = ref(false);

const formattedSubs = computed(() => {
  if (props.channel.subs) {
    const subs = props.channel.subs;
    if (subs >= 1_000_000) {
      return `${(subs / 1_000_000).toFixed(1)}M`;
    } else if (subs >= 1_000) {
      return `${(subs / 1_000).toFixed(1)}K`;
    }
    return subs.toLocaleString('en-US');
  } else {
    return '';
  }
});

const shortDescription = computed(() => {
  if (props.channel.description) {
    return props.channel.description.length > 100
      ? props.channel.description.substring(0, 100) + '...'
      : props.channel.description;
  }
  return '';
});

const formattedImgLink = computed(() => {
  if (props.channel.img_link && props.channel.img_link.trim() !== '') {
    return `${minioUrl}${props.channel.img_link}`;
  }
  return '/images/another.png';
});
</script>

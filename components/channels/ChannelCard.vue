<template>
  <div class="border border-solid border-gray-300 rounded-xl pl-4 pr-4 min-h-[125px] flex items-center">
    <div class="flex gap-4 items-center w-full">
      <NuxtLink :to="`/channel/${channel.link}`">
        <div class="w-[100px] h-[100px] rounded-full overflow-hidden">
          <img :src="formattedImgLink" alt="Channel image" class="w-full h-full object-cover" >
        </div>
      </NuxtLink>

      <div class="flex-1 flex flex-col gap-1">
        <NuxtLink :to="`/channel/${channel.link}`">
          <div class="text-xl line-clamp-1 min-h-[28px]">{{ channel.title }}</div>
        </NuxtLink>

        <div class="flex items-center gap-3 min-h-[24px]">
          <NuxtLink class="text-gray-400 text-base" :to="`/channel/${channel.link}`">
            {{ channel.link }}
          </NuxtLink>
          <div class="flex items-center gap-1 text-gray-500 text-sm">
            <Icon name="icon:subs" class="w-4 h-4" />
            <div>{{ formattedSubs }}</div>
          </div>
        </div>

        <div class="text-gray-700 text-sm/6 line-clamp-2 min-h-[40px]">
          {{ channel.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Channel } from '~/types/channel';
import { computed } from 'vue';

const props = defineProps<{ channel: Channel }>();

const formattedSubs = computed(() => {
  const subs = props.channel.subs;
  if (subs >= 1_000_000) {
    return `${(subs / 1_000_000).toFixed(1)}M`;
  } else if (subs >= 1_000) {
    return `${(subs / 1_000).toFixed(1)}K`;
  }
  return subs.toLocaleString('en-US');
});

const formattedImgLink = computed(() => {
  if (props.channel.img_link && props.channel.img_link.trim() !== '') {
    return 'http://127.0.0.1:9000' + props.channel.img_link; // todo: убрать в env
  }
  return '/images/another.png';
});
</script>

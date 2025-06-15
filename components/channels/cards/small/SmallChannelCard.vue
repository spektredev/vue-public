<template>
  <NuxtLink
    :to="`/channel/${channel.link}`"
    class="border border-solid dark:bg-darken-200 dark:text-gray-200 dark:border-darken-600 bg-white border-gray-300 rounded-lg p-3 flex items-center gap-3 transition-shadow"
  >
    <img :src="formattedImgLink" alt="Channel image" class="w-12 h-12 rounded-full object-cover" >

    <div class="flex-1 flex flex-col gap-1">
      <div class="text-base font-semibold line-clamp-1">{{ channel.title }}</div>

      <div class="flex items-center gap-2 text-gray-500 text-xs">
        <span class="text-gray-400">{{ channel.link }}</span>
        <div class="flex items-center gap-1">
          <Icon name="icon:subs" class="w-3 h-3" />
          <span>{{ formattedSubs }}</span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Channel } from '~/types/channel';
import { computed } from 'vue';
import sliceSubs from '~/utils/slice-subs';
const props = defineProps<{ channel: Channel }>();

const {
  public: { minioUrl },
} = useRuntimeConfig();

const formattedSubs = computed(() => {
  const subs = props.channel.subs || 0;
  return sliceSubs(subs);
});

const formattedImgLink = computed(() => {
  if (props.channel.img_link && props.channel.img_link.trim() !== '') {
    return `${minioUrl}${props.channel.img_link}`;
  }
  return '/images/another.png';
});
</script>

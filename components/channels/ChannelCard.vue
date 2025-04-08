<template>
  <div class="border border-solid border-gray-300 rounded-xl pl-4 pr-4 min-h-[125px] flex items-center">
    <div class="flex gap-4 items-center w-full">
      <!-- Аватар -->
      <NuxtLink :to="`/${channel.link}`">
        <img :src="channel.img_link" alt="Channel image" class="w-[100px] h-[100px] rounded-full object-cover" >
      </NuxtLink>

      <!-- Контент -->
      <div class="flex-1 flex flex-col gap-1">
        <!-- Заголовок -->
        <NuxtLink :to="`/${channel.link}`">
          <div class="text-xl line-clamp-1 min-h-[28px]">{{ channel.title }}</div>
        </NuxtLink>

        <!-- Ссылка и подписчики -->
        <div class="flex items-center gap-3 min-h-[24px]">
          <NuxtLink class="text-gray-400 text-base" :to="`/${channel.link}`">
            {{ channel.link }}
          </NuxtLink>
          <div class="flex items-center gap-1 text-gray-500 text-sm">
            <Icon name="icon:subs" class="w-4 h-4" />
            <div>{{ formattedSubs }}</div>
          </div>
        </div>

        <!-- Описание -->
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
</script>

<template>
  <NuxtLink
    :to="`/channe/${channel.link}`"
    class="border border-solid border-gray-300 rounded-lg p-3 flex items-center gap-3 hover:shadow-md transition-shadow"
  >
    <!-- Аватар -->
    <img :src="channel.img_link" alt="Channel image" class="w-12 h-12 rounded-full object-cover" >

    <!-- Контент -->
    <div class="flex-1 flex flex-col gap-1">
      <!-- Заголовок -->
      <div class="text-base font-semibold line-clamp-1">{{ channel.title }}</div>

      <!-- Ссылка и подписчики -->
      <div class="flex items-center gap-2 text-gray-500 text-xs">
        <span class="text-gray-400">{{ channel.link }}</span>
        <div class="flex items-center gap-1">
          <Icon name="icon:subs" class="w-3 h-3" />
          <span>{{ channel.subs.toLocaleString() }}</span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Channel } from '~/types/channel';
defineProps<{ channel: Channel }>();
</script>

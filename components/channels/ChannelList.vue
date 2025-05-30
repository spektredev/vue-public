<template>
  <div class="grid grid-cols-1 gap-x-4 gap-y-4 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-5">
    <template v-if="channels && channels.length > 0">
      <ChannelCard v-for="channel in channels" :key="channel.id" :channel="channel" />
    </template>
    <template v-else>
      <SkeletonCard v-for="n in 12" :key="`skeleton-${n}`" />
    </template>
  </div>
</template>

<script setup lang="ts">
import ChannelCard from '~/components/channels/ChannelCard.vue';
import SkeletonCard from '~/components/channels/SkeletonCard.vue';
import type { Channel } from '~/types/channel';

defineProps<{
  channels?: Channel[];
}>();
</script>

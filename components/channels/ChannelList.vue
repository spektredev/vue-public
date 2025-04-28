<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <div>
    <div class="grid grid-cols-1 gap-x-4 gap-y-4 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-5">
      <ChannelCard v-for="channel in channels" :key="channel.id" :channel="channel" />
      <SkeletonCard v-if="!channels || channels.length === 0" v-for="n in 14" :key="`skeleton-${n}`" />
    </div>
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

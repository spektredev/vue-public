<template>
  <div>
    <div class="grid grid-cols-2 gap-x-14 gap-y-5">
      <ChannelCard v-for="channel in channels" :key="channel.id" :channel="channel" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChannelCard from '~/components/channels/ChannelCard.vue';
import type { Channel } from '~/types/channel';
defineProps<{
  channels?: Channel[];
}>();
</script>

<template>
  <div class="grid grid-cols-2 gap-x-10 gap-y-4">
    <ChannelCard v-for="channel in channels" :key="channel.id" :channel="channel" />
  </div>
</template>

<script setup lang="ts">
import type { Channel } from '~/types/channel';

defineProps<{ channels: Channel[] }>();
</script>

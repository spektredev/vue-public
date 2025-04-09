<template>
  <div>
    <div v-if="channels?.length" class="grid grid-cols-2 gap-x-14 gap-y-5">
      <ChannelCard v-for="channel in channels" :key="channel.id" :channel="channel" />
    </div>
    <p v-else-if="pending" class="text-center text-gray-500">Загрузка...</p>
    <p v-else class="text-center text-gray-500">Каналы не найдены</p>
  </div>
</template>

<script setup lang="ts">
import ChannelCard from '~/components/channels/ChannelCard.vue';
import type { Channel } from '~/types/channel';
defineProps<{
  channels?: Channel[];
  pending: boolean;
}>();
</script>

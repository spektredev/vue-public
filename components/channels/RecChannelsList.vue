<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-10 md:gap-y-4">
    <ChannelCard v-for="channel in displayedRecChannels" :key="channel.id" :channel="channel" />
  </div>
</template>

<script setup lang="ts">
const { data: randList } = await useRecChannels(6);
const isMobile = ref(false);
const maxMobileChannels = 3;
const displayedRecChannels = computed(() => {
  if (randList.value) {
    return isMobile.value ? randList.value.slice(0, maxMobileChannels) : randList.value;
  }
  return [];
});
if (import.meta.client) {
  isMobile.value = window.innerWidth < 768;
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768;
  });
}
</script>

<template>
  <div v-if="channel" class="container mx-auto py-7 max-w-4xl">
    <div class="mb-6">
      <button
        class="inline-flex items-center gap-2 text-gray-600 dark:text-white dark:hover:text-white hover:text-gray-800 focus:outline-none"
        @click="goBack"
      >
        <Icon name="heroicons:arrow-left" class="w-5 h-5" />
        <span>Назад</span>
      </button>
    </div>

    <div class="bg-white dark:bg-darken-200 border dark:border-none border-gray-200 rounded-xl p-6 shadow-sm">
      <div class="flex flex-col md:flex-row gap-6">
        <div class="flex-shrink-0">
          <div class="w-32 h-32 rounded-full overflow-hidden relative">
            <img :src="formattedImgLink" alt="Channel image" class="w-full h-full object-cover" >
          </div>
        </div>

        <div class="flex-1">
          <h1 class="text-3xl font-semibold text-gray-900 mb-2 dark:text-white">{{ channel.title }}</h1>
          <div class="flex items-center gap-3 mb-4">
            <a :href="telegramLink" target="_blank">
              <span class="text-gray-500 dark:text-gray-100 text-lg">{{ channel.link }}</span>
            </a>
            <div v-if="channel.subs" class="flex items-center gap-1 text-gray-600 dark:text-gray-300">
              <Icon name="icon:subs" class="w-5 h-5" />
              <span>{{ formattedSubs }}</span>
            </div>
          </div>

          <div
            v-if="channel.description"
            class="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4 whitespace-pre-wrap"
          >
            {{ formattedDescription }}
          </div>

          <a
            :href="telegramLink"
            target="_blank"
            class="inline-flex items-center gap-2 px-4 py-2 bg-accent-200 dark:bg-darken-500 dark:hover:bg-darken-100 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Icon name="simple-icons:telegram" class="w-5 h-5" />
            <span>Открыть в Telegram</span>
          </a>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-6 mt-8 text-center">Рекомендуемые каналы</h2>
    <RecChannelsList v-if="randList" :channels="randList" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useChannel } from '~/composables/useChannel';

const route = useRoute();
const slug = route.params.slug as string;

const { channel, errorData } = await useChannel(slug);
const { data: randList } = await useRecChannels(6);

const {
  public: { minioUrl },
} = useRuntimeConfig();

if (errorData.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Страница не найдена',
  });
}

function goBack() {
  window.history.back();
}

const formattedSubs = computed(() => {
  if (channel.value?.subs) {
    const subs = channel.value.subs;
    if (subs >= 1_000_000) return `${(subs / 1_000_000).toFixed(1)}M`;
    if (subs >= 1_000) return `${(subs / 1_000).toFixed(1)}K`;
    return subs.toLocaleString('en-US');
  }
  return '';
});

const formattedImgLink = computed(() => {
  if (channel.value?.img_link && channel.value.img_link.trim() !== '') {
    return `${minioUrl}${channel.value.img_link}`;
  }
  return '/images/another.png';
});

const formattedDescription = computed(() => {
  if (channel.value?.description) {
    return channel.value.description;
  }
  return '';
});

const telegramLink = computed(() =>
  channel.value ? `tg://resolve?domain=${channel.value.link.replace('@', '')}` : '#'
);

definePageMeta({
  layout: 'default',
});

useHead({
  title: computed(() => channel.value?.title || 'Канал'),
  meta: [{ name: 'description', content: computed(() => channel.value?.description) || '' }],
});
</script>

<style scoped>
.shadow-sm {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>

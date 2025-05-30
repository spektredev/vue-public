<template>
  <div class="mt-8 flex justify-center items-center gap-4">
    <button
      :disabled="page === 1 || loading === 'pending'"
      class="flex items-center gap-2 px-4 py-2 bg-accent-200 dark:bg-neutral-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 disabled:bg-neutral-500"
      @click="changePage(page - 1)"
    >
      <Icon name="heroicons:chevron-left" class="w-5 h-5" />
      <span>Назад</span>
    </button>

    <span class="px-4 py-2 text-gray-600 dark:text-neutral-100 font-medium hidden min-[475px]:block">
      Страница {{ page }} из {{ totalPages }}
    </span>

    <button
      :disabled="page === totalPages || loading === 'pending'"
      class="flex items-center gap-2 px-4 py-2 bg-accent-200 dark:bg-neutral-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 disabled:bg-neutral-500"
      @click="changePage(page + 1)"
    >
      <span>Вперед</span>
      <Icon name="heroicons:chevron-right" class="w-5 h-5" />
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  page: number;
  totalPages: number;
  loading: string;
}>();

const emit = defineEmits<{
  (e: 'update:page', value: number): void;
}>();

function changePage(newPage: number) {
  emit('update:page', newPage);
}
</script>

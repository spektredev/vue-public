<template>
  <div v-if="totalPages > 1" class="mt-8 flex justify-center gap-2">
    <button
      :disabled="page === 1"
      class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      @click="changePage(page - 1)"
    >
      Назад
    </button>
    <span class="px-4 py-2">Страница {{ page }} из {{ totalPages }}</span>
    <button
      :disabled="page === totalPages"
      class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      @click="changePage(page + 1)"
    >
      Вперед
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  page: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  (e: 'update:page', value: number): void;
}>();

function changePage(newPage: number) {
  emit('update:page', newPage);
}
</script>

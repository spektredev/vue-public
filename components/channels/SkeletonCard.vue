<template>
  <div
    class="border dark:border-darken-200 dark:bg-darken-200 border-solid border-gray-300 rounded-xl p-3 md:p-4 min-h-[100px] md:min-h-[125px] flex items-center"
  >
    <div class="flex gap-3 md:gap-4 items-center w-full">
      <!-- Placeholder for image -->
      <div class="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-gray-200 dark:bg-darken-700" />

      <!-- Placeholder for content -->
      <div class="flex-1 flex flex-col gap-1">
        <!-- Placeholder for title -->
        <div class="h-[28px] bg-gray-200 dark:bg-darken-700 animate-pulse w-3/4" />

        <!-- Placeholder for link and subscribers -->
        <div class="flex flex-col lg:flex-row lg:flex lg:items-center gap-1 lg:gap-3 min-h-[20px] lg:min-h-[24px]">
          <div class="h-5 lg:h-6 w-24 bg-gray-200 dark:bg-darken-700 animate-pulse" />
          <div class="flex items-center gap-1">
            <div class="h-4 w-4 bg-gray-200 dark:bg-darken-700 animate-pulse" />
            <div class="h-4 lg:h-5 w-12 bg-gray-200 dark:bg-darken-700 animate-pulse" />
          </div>
        </div>

        <!-- Placeholder for description -->
        <div class="h-[40px] bg-gray-200 dark:bg-darken-700 animate-pulse w-full" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

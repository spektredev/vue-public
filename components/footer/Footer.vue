<template>
  <footer class="bg-accent-600 text-white p-4 mt-8">
    <div class="container mx-auto py-5">
      <div class="flex gap-3 mb-6">
        <Icon name="icon:logo" class="h-7 w-7 text-white" />
        <h1 class="text-lg font-semibold">TGrow - неофициальный сайт про Telegram на русском</h1>
      </div>
      <div class="flex gap-20">
        <div class="flex flex-col gap-3 text-sm">
          <NuxtLink to="/categories" class="hover:underline">Категории</NuxtLink>
          <NuxtLink to="/channels" class="hover:underline">Каналы</NuxtLink>
          <NuxtLink to="/faq" class="hover:underline">FAQ</NuxtLink>
        </div>
        <div class="flex flex-col gap-3 text-sm">
          <NuxtLink to="#" class="hover:underline">Разместить рекламу</NuxtLink>
          <NuxtLink to="/eula" class="hover:underline">Политика конфиденциальности</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<template>
  <footer class="bg-darken-800 text-white p-4 mt-8">
    <div class="container mx-auto py-5">
      <div class="flex gap-3 mb-6">
        <Icon name="icon:logo" class="h-7 w-7 text-white" />
        <h1 class="text-lg font-semibold">TGrow - неофициальный сайт про Telegram на русском</h1>
      </div>
      <div class="flex gap-20">
        <div class="flex flex-col gap-3 text-sm">
          <NuxtLink to="/categories" class="hover:underline">Категории</NuxtLink>
          <NuxtLink to="/news" class="hover:underline">Новости</NuxtLink>
          <NuxtLink to="/feedback" class="hover:underline">Обратная связь</NuxtLink>
        </div>
        <div class="flex flex-col gap-3 text-sm">
          <NuxtLink to="/about" class="hover:underline">О сайте</NuxtLink>
          <NuxtLink to="/eula" class="hover:underline">Политика конфиденциальности</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

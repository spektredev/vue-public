<template>
  <header class="bg-accent-200 text-white font-rubik">
    <div class="container py-5 flex justify-between items-center">
      <div class="logo flex justify-between gap-2">
        <Icon name="icon:logo" class="h-7 w-7 text-white" />
        <h1 class="text-lg">TGrow</h1>
      </div>
      <nav class="flex gap-10">
        <NuxtLink to="/categories">Категории</NuxtLink>
        <NuxtLink to="#">Добавить</NuxtLink>
        <NuxtLink to="/faq">FAQ</NuxtLink>
        <NuxtLink to="/download">Скачать</NuxtLink>
      </nav>
      <div class="flex justify-between">
        <Icon name="icon:theme-light" class="h-7 w-7 text-white" />
      </div>
    </div>
  </header>
</template>

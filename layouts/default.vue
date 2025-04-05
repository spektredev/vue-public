<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-gray-800 text-white p-4">
      <h1 class="text-2xl">Telegram Channels</h1>
    </header>
    <main class="flex-grow p-4">
      <slot />
    </main>
    <footer class="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2025 Мой проект</p>
    </footer>
  </div>
</template>

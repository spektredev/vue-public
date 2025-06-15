<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow dark:bg-darken-600 dark:text-white">
      <slot />
    </main>
    <Footer />
  </div>
</template>

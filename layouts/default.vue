<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow p-4">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow h-[1175px]">
      <slot />
    </main>
    <Footer />
  </div>
</template>

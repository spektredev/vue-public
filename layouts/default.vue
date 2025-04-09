<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow pl-4 pr-4">
      <slot />
    </main>
    <Footer />
  </div>
</template>

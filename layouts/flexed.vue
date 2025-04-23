<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

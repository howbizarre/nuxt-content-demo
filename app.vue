<template>
  <div class="max-w-3xl px-4 mx-auto">
    <header class="mt-8 mb-4 flex justify-between items-end">
      <div>
        <h1 class="text-2xl font-semibold">
          <NuxtLink to="/">Nuxt Blog</NuxtLink>
        </h1>
        <p class="text-gray-500">Simple blog powered by Nuxt Content</p>
      </div>

      <ColorMode />
    </header>

    <NuxtPage />
  </div>
</template>

<style>
body, html { @apply flex flex-col; }
html { @apply h-full w-full; }
body { @apply min-h-full min-w-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 relative; }

.page-enter-active,
.page-leave-active { @apply transition-all duration-200; }
.page-leave-to { @apply opacity-0 -translate-y-1.5; }
.page-enter-from { @apply opacity-0 translate-y-1.5; }

.layout-enter-active,
.layout-leave-active { @apply transition-all duration-200; }
.layout-leave-to { @apply opacity-0 -translate-y-1.5; }
.layout-enter-from { @apply opacity-0 translate-y-1.5; }
</style>

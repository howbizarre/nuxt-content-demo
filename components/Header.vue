<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <header class="mt-8 mb-4 flex justify-between items-end">
    <div>
      <h1 class="text-2xl font-semibold">
        <NuxtLink :to="`/${locale}`">Nuxt Blog</NuxtLink>
      </h1>
      <p class="text-gray-500">Simple blog powered by Nuxt Content</p>
    </div>

    <div>
      <LangSwitcher />
      <span class="inline-block px-4"></span>
      <ColorMode />
    </div>
  </header>
</template>
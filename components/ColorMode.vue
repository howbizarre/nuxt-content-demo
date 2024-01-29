<script lang="ts" setup>
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid';

const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<template>
  <div class="relative inline-block">
    <ClientOnly>
      <button @click="isDark = !isDark" class="btn btn-default">
        <template v-if="isDark">
          Go Light <SunIcon class="btn--icon-right" aria-hidden="true" />
        </template>
        <template v-else>
          Go Dark <MoonIcon class="btn--icon-right" aria-hidden="true" />
        </template>
      </button>
    </ClientOnly>
  </div>
</template>
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/16/solid';

const { locale, locales } = useI18n();
const availableLocales = computed(() => (locales.value).filter(i => i.code !== locale.value));
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <Menu as="div" class="relative inline-block">
    <MenuButton class="btn btn-default">
      {{ $t('lngCode') }}
      <ChevronDownIcon class="btn--icon-right" aria-hidden="true" />
    </MenuButton>

    <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
      <MenuItems class="absolute w-full left-0 mt-0 rounded-md shadow-lg">
        <div class="bg-gray-200 dark:bg-gray-700">
          <MenuItem v-for="locale in availableLocales"
                    :key="locale.code"
                    as="template"
                    v-slot="{ active }">
            <NuxtLink :to="switchLocalePath(locale.code)" :title="locale.name" class="btn btn-default justify-start">
              {{ (locale.localCode).toUpperCase() }}
            </NuxtLink>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

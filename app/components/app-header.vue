<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<Array<NavigationMenuItem>>(() => [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "For Educators",
    to: "/educators",
    active: route.path.startsWith("/educators"),
  },
  {
    label: "Downloads",
    to: "/downloads",
    active: route.path.startsWith("/downloads"),
  },
  {
    label: "Team",
    to: "/team",
    active: route.path.startsWith("/team"),
  },
]);
</script>

<template>
  <UHeader class="bg-background" title="4Ω4">
    <template #title />

    <UNavigationMenu :items="items" />

    <template #right>
      <ColorSchemeSwitcher />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>

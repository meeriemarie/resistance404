<script lang="ts" setup>
const colorMode = useColorMode();

// We build the items array with a custom class tailored for the inner icons
const items = computed(() => [
  [
    {
      label: "System",
      icon: "i-lucide-laptop",
      // group-hover: targets the icon when the item row is highlighted
      iconClass:
        "group-hover:text-accent-foreground transition-colors duration-150",
      onSelect() {
        colorMode.preference = "system";
      },
    },
    {
      label: "Light",
      icon: "i-lucide-sun",
      iconClass:
        "group-hover:text-accent-foreground transition-colors duration-150",
      onSelect() {
        colorMode.preference = "light";
      },
    },
    {
      label: "Dark",
      icon: "i-lucide-moon",
      iconClass:
        "group-hover:text-accent-foreground transition-colors duration-150",
      onSelect() {
        colorMode.preference = "dark";
      },
    },
  ],
]);

const currentIcon = computed(() =>
  colorMode.value === "dark" ? "i-lucide-moon" : "i-lucide-sun",
);
</script>

<template>
  <UDropdownMenu
    :items="items"
    :modal="false"
    :popper="{ placement: 'bottom-end' }"
    :ui="{
      // This injects the group class onto every dropdown menu item row natively
      item: 'group',
    }"
  >
    <!-- [&_svg]:hover targets only the main button's graphic vector asset -->
    <UButton
      class="gap-2 [&_svg]:hover:text-accent-foreground [&_svg]:transition-colors [&_svg]:duration-150"
      :icon="currentIcon"
      variant="ghost"
    />
  </UDropdownMenu>
</template>

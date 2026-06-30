<template>
  <div class="flex flex-col bg-background text-foreground">
    <UFooter>
      <template #left>
        <div class="flex items-center gap-3 text-left">
          <!-- Unified Logo Wrapper with Dark Mode Background Correction -->
          <div
            class="h-14 w-auto flex items-center justify-center opacity-80 dark:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 bg-white dark:bg-gray-100 p-0.5"
          >
            <NuxtLink
              to="https://www.ustp.at/en"
              target="_blank"
              rel="noopener noreferrer"
              class="h-14 w-auto flex items-center justify-center bg-white dark:bg-gray-100 p-2 rounded-lg shadow-sm opacity-95 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Visit UAS St. Pölten Website"
            >
              <img
                src="https://www.ustp.at/de/mediathek/bilder/ueber-uns/presse/ustp-logo "
                alt="UAS St. Pölten Logo"
                class="h-full object-contain block"
              />
              <span
                class="font-mono text-xs font-bold tracking-tight text-gray-400 sm:hidden"
                >UAS St. Pölten</span
              >
            </NuxtLink>
            <span
              class="font-mono text-xs font-bold tracking-tight text-gray-400 sm:hidden"
              >UAS St. Pölten</span
            >
          </div>

          <div
            class="hidden sm:block border-l border-gray-200 dark:border-gray-800 h-6"
          ></div>

          <div class="hidden sm:block leading-tight text-left">
            <p class="text-xs font-semibold text-gray-900 dark:text-white">
              UAS St. Pölten
            </p>
            <p class="text-[10px] font-mono text-gray-400">
              Creative Computing Project
            </p>
          </div>
        </div>
      </template>

      <template #center>
        <UFooterLinks
          :links="[
            { label: 'Home', to: '/' },
            { label: 'For Educators', to: '/educators' },
            { label: 'Downloads', to: '/downloads' },
            { label: 'Our Team', to: '/team' },
          ]"
        />
      </template>

      <!-- Right Slot: Micro-Copyright strings and platform engine descriptors -->
      <template #right>
        <div
          class="flex flex-col items-center sm:items-end text-[11px] text-gray-400 dark:text-gray-500 font-mono leading-normal"
        >
          <p>© 2026 Resistance 4Ω4. Educational Prototype.</p>
          <p class="text-[10px] opacity-80">Built with Nuxt 4 &amp; Nuxt UI</p>
        </div>
      </template>
    </UFooter>
  </div>
</template>

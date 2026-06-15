<script setup lang="ts">
// Features array moved to script setup to keep the template clean and highly maintainable
const features = [
  {
    icon: "i-lucide-printer",
    title: "Print & Play Ready",
    description:
      "Access all essential puzzle pieces, props, and structural sheets instantly. Completely free to download and print.",
  },
  {
    icon: "i-lucide-map",
    title: "Step-by-Step Guides",
    description:
      "Clear structural setup instructions and a seamless narrative script make game master preparation entirely stress-free.",
  },
  {
    icon: "i-lucide-key-round",
    title: "Teacher Solution Sheets",
    description:
      "Keep the game moving with quick-reference answer keys and targeted, tiered hints for every single encryption sequence.",
  },
  {
    icon: "i-lucide-flask-conical",
    title: "Playtest Proven",
    description:
      "Iterated and refined using real student testing cycles to ensure the perfect balance of challenge, pacing, and mechanics.",
  },
  {
    icon: "i-lucide-dices",
    title: "Serious Gaming Framework",
    description:
      "Combines analog paper-and-pencil puzzle design with structural learning metrics, proving deep literacy can be highly engaging.",
  },
  {
    icon: "i-lucide-cpu",
    title: "Critical Tech Literacy",
    description:
      "Spotting AI outputs, interpreting complex charts, and decoding data visualization are critical skill sets for the modern web.",
  },
];
</script>

<template>
  <MainContent class="container py-12 sm:py-20">
    <div class="mx-auto max-w-4xl px-6 lg:px-8 space-y-16">
      <div
        class="text-center md:text-left space-y-6 border-b border-gray-200 dark:border-gray-800 pb-12 pt-12"
      >
        <div class="space-y-3">
          <span
            class="text-xs font-mono font-semibold tracking-widest text-primary-600 dark:text-primary-400 uppercase block"
          >
            Educational Classroom Escape Room
          </span>
          <h1
            class="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Resistance <span class="text-primary-500 font-mono">4Ω4</span>
          </h1>
        </div>

        <p
          class="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed"
        >
          An immersive, print-and-play escape room designed specifically for
          modern classrooms.
          <span class="font-semibold text-gray-900 dark:text-white"
            >Resistance 4Ω4</span
          >
          transforms critical AI literacy, data visualization analysis, and the
          'dead internet theory' into an unforgettable, hands-on cooperative
          adventure for teens aged 13–18.
        </p>
      </div>

      <div class="space-y-8">
        <div class="text-center md:text-left space-y-2">
          <h2
            class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Everything you need to lead the resistance
          </h2>
          <p
            class="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl"
          >
            No complex techniques or digital setup required. Just download,
            print, and watch your classroom transform into a secret operation
            fighting against AI.
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4 pb-16"
        >
          <UCard
            v-for="item in features"
            :key="item.title"
            class="hover:border-primary-500/30 dark:hover:border-primary-500/20 transition-colors duration-300 bg-gray-50/30 dark:bg-gray-900/20"
            :ui="{ body: { base: 'p-5 flex flex-col h-full space-y-3' } }"
          >
            <div class="flex items-center gap-3">
              <div
                class="p-2 rounded-lg bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400"
              >
                <UIcon :name="item.icon" class="w-5 h-5 block" />
              </div>
              <h3
                class="font-semibold text-gray-900 dark:text-white text-sm sm:text-base"
              >
                {{ item.title }}
              </h3>
            </div>
            <p
              class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed pt-1"
            >
              {{ item.description }}
            </p>
          </UCard>
        </div>
      </div>
    </div>
  </MainContent>
</template>

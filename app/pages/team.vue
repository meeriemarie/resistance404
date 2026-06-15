<script setup lang="ts">
import { ref } from "vue";

const members = ref([
  {
    name: "Hetian Jiang",
    role: "Product Owner",
    avatar: {
      src: "/images/hetian.jpeg",
      alt: "Hetian Jiang",
    },
  },
  {
    name: "Niklas Reisinger",
    role: "Scrum Master",
    avatar: {
      src: "",
      alt: "Niklas Reisinger",
    },
  },
  {
    name: "Manuela Hick",
    role: "Lead QA & Testing",
    avatar: {
      src: "/images/manuela.jpg",
      alt: "Manuela Hick",
    },
  },
  {
    name: "Tom Chinnery",
    role: "Lead Puzzle Designer",
    avatar: {
      src: "",
      alt: "Tom Chinnery",
    },
  },
  {
    name: "Marie Rohler",
    role: "Lead Developer",
    avatar: {
      src: "/images/marie.jpg",
      alt: "Marie Rohler",
    },
  },
]);
</script>

<template>
  <MainContent class="container py-12 sm:py-20">
    <div class="mx-auto max-w-4xl px-6 lg:px-8 space-y-12">
      <div class="space-y-4 border-b border-gray-200 dark:border-gray-800 pb-8">
        <UPageHeader title="Meet the Operations Team" />
        <p
          class="text-base text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
        >
          We are a team of students from the UAS St. Pölten. For our final
          project in the
          <span class="font-medium text-gray-900 dark:text-white"
            >Creative Computing</span
          >
          program, we conceptualized, designed, and built a printable escape
          room focused on AI literacy, data visualization, and system security
          frameworks.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-6">
        <div
          v-for="member in members"
          :key="member.name"
          class="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] min-w-[240px] max-w-[280px]"
        >
          <UCard
            class="group hover:border-primary-500/50 transition-all duration-300 transform hover:-translate-y-1 h-full bg-gray-50/50 dark:bg-gray-900/40"
            :ui="{
              body: {
                base: 'p-6 flex flex-col items-center justify-center text-center h-full gap-y-4',
              },
            }"
          >
            <div
              class="w-24 h-24 flex items-center justify-center flex-shrink-0 mx-auto"
            >
              <UAvatar
                v-if="member.avatar.src"
                :src="member.avatar.src"
                :alt="member.avatar.alt"
                size="3xl"
                class="w-24 h-24 ring-2 ring-gray-200 dark:ring-gray-800 group-hover:ring-primary-500/50 transition-all duration-300"
                :ui="{
                  background: 'bg-transparent',
                  avatar: { img: 'object-cover w-full h-full' },
                }"
              />

              <div
                v-else
                class="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center ring-2 ring-gray-200 dark:ring-gray-800 group-hover:ring-primary-500/50 transition-all duration-300 mx-auto"
              >
                <UIcon
                  name="i-heroicons-user"
                  class="w-10 h-10 text-gray-400 dark:text-gray-500"
                />
              </div>
            </div>

            <div
              class="flex flex-col items-center justify-center text-center gap-y-2 w-full"
            >
              <h3
                class="font-semibold text-gray-900 dark:text-white text-base tracking-tight group-hover:text-primary-500 transition-colors pt-4"
              >
                {{ member.name }}
              </h3>

              <div class="inline-flex items-center justify-center">
                <span
                  class="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium font-mono tracking-wider bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 uppercase"
                >
                  {{ member.role }}
                </span>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </div>
  </MainContent>
</template>

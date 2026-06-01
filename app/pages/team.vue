<script setup lang="ts">
const members = ref([
  {
    name: "Hetian Jiang",
    description: "Product Owner",
    avatar: {
      src: "",
      alt: "Hetian Jiang",
    },
  },
  {
    name: "Niklas Reisinger",
    description: "Scrum Master",
    avatar: {
      src: "",
      alt: "Niklas Reisinger",
    },
  },
  {
    name: "Manuela Hick",
    description: "Lead QA & Testing",
    avatar: {
      src: "",
      alt: "Manuela Hick",
    },
  },
  {
    name: "Tom Chinnery",
    description: "Lead Puzzle Designer",
    avatar: {
      src: "",
      alt: "Tom Chinnery",
    },
  },
  {
    name: "Marie Rohler",
    description: "Lead Developer",
    avatar: {
      src: "",
      alt: "Marie Rohler",
    },
  },
]);
</script>

<template>
  <MainContent class="container py-16">
    <div class="mx-auto max-w-4xl">
      <UPageHeader title="About Us" />
      <p class="pt-8">
        We are a team of students from the UAS St. Pölten. For our final project
        in the study programme Creative Computing, we conceptualized, designed
        and built a printable escape room on the topic of AI, data visualization
        and computer literacy.
      </p>

      <UPageGrid class="mt-12">
        <UPageCard
          v-for="(member, index) in members"
          :key="index"
          :ui="{
            wrapper:
              'flex flex-col flex-1 items-start sm:items-center sm:align-center h-32',
            body: 'p-4',
          }"
          variant="outline"
        >
          <template #body>
            <UUser
              :avatar="member.avatar"
              :description="member.description"
              :name="member.name"
              orientation="vertical"
              size="2xl"
              :ui="{
                root: 'flex flex-col items-center justify-center text-center gap-3 w-full',
              }"
            ></UUser>
          </template>
        </UPageCard>
      </UPageGrid>
    </div>
  </MainContent>
</template>

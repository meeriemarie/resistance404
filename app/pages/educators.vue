<script setup lang="ts">
import { ref } from "vue";

// Operational metrics optimized for Austrian school session tracking
const specs = [
  {
    label: "Target Audience",
    value: "Teens (Ages 16–18)",
    icon: "i-heroicons-academic-cap",
  },
  {
    label: "Group Size",
    value: "2–5 Students per team",
    icon: "i-heroicons-user-group",
  },
  {
    label: "Total Class Time",
    value: "2 Units (100 Mins total)",
    icon: "i-heroicons-clock",
  },
  {
    label: "Play / Prep Balance",
    value: "20m Intro + 50-70m Play",
    icon: "i-heroicons-calendar-days",
  },
];

// Practical timeline breakdown to map against a double-period schedule
const timeline = [
  {
    time: "First 20 Minutes",
    title: "Briefing the Students",
    desc: "Read the story introduction, lay down the core rules, group the students into teams of 2–5, and hand out Puzzle 1.",
  },
  {
    time: "Next 50–70 Minutes",
    title: "Play Time",
    desc: "Teams collaborate on individual puzzles. The timeline accommodates a natural transition across the standard 50-minute unit bell.",
  },
  {
    time: "Final 10–15 Minutes",
    title: "Debrief &  Prizes",
    desc: "Teams can get rewarded based on how quickly they finished. Debrief the class and feedback round.",
  },
];

// Value-proposition metrics mapping the game to standard school competencies
const curriculumBenefits = [
  {
    title: "Media & Tech Literacy",
    desc: "Students actively analyze data layouts, differentiate artificial artifacts from human-created visualizations, and develop critical skepticism regarding AI text and data visualizations.",
  },
  {
    title: "Collaborative Problem Solving",
    desc: "The game enforces physical cooperative mechanics. Teams of 2–5 must work together, cross-reference charts, and communicate patterns to solve the puzzles.",
  },
  {
    title: "Mathematical Data Navigation",
    desc: "Translating frequency amplitudes, plotting radio coverage, and tracking nodes on interconnected grid systems translates abstract mathematics into immediate utility.",
  },
];

// Detailed step-by-step physical prep instructions mapped directly to your setup data
interface PrepStep {
  title: string;
  action: string;
  badge: string;
}

const prepSequence = ref<PrepStep[]>([
  {
    title: "Puzzle 1: Spam Mail",
    badge: "Fold into Thirds",
    action:
      "Fold all six letter pages into thirds with the stamp and address on the uppermost fold facing outward. This is easiest done by rolling the paper into a tube where the bottom edge meets the top crease and the top edge reaches the bottom fold. Distribute with Answer Card #1.",
  },
  {
    title: "Puzzle 2: Frequency Ruler",
    badge: "A5 Cutting (Optional)",
    action:
      "Optionally cut the printed Frequency Ruler sheet in half to A5 size. Prepare to hand this over alongside Message Slip #1 and Answer Card #2.",
  },
  {
    title: "Puzzle 3: Network Overlay",
    badge: "Collate Components",
    action:
      "Set aside the Radio Reception List registry and the physical Radio Signal Coverage Map. Prepare to bundle them with Message Slip #2 and Answer Card #3.",
  },
  {
    title: "Puzzle 4: Audio Deck Intercept",
    badge: "Color Print & Craft",
    action:
      "Ensure cassettes are printed in high-resolution color. Cut the Cassette pages into A6 quarters. Cut out the front window of the Walkman graphic and secure a red translucent film on the inside to reveal the hidden tape phrase. Collate with Word Cloud, Message Slip #3, and Answer Card #4.",
  },
  {
    title: "Puzzle 5: Mapping Networks",
    badge: "Four Map Stack",
    action:
      "Collate the four distinct map layers: the light pollution Heatmap, camera presence Nodemap, Roadmap, and Scalemap. Ready them for distribution alongside Message Slip #4 and Answer Card #5.",
  },
  {
    title: "Puzzle 6: Terminal Decryption",
    badge: "Final Solution Grid",
    action:
      "Prepare Address.pdf with Answer Sheet #6 and Message Slip #5. Retain the final master victory Message Slip (#6) at your command desk to trade once the entire address string is approved.",
  },
]);

// FAQ Section answering real-world classroom challenges
const faqs = [
  {
    label: "What is the teacher's active role during the game loop?",
    content:
      "You act as the central Command Checkpoint. Each group receives exactly one puzzle packet at a time. When a team finishes a puzzle, they must physically bring their answer sheet to you. You verify their answers against the master SetupAndSolutions.pdf. Once approved, you hand them the materials for the next puzzle along with the matching 'message from the resistance' instructions.",
  },
  {
    label: "How long does physical setup take if I handle it alone?",
    content:
      "Physical preparation is the most time-consuming phase of the deployment. Because components need to be manually cut (like the Puzzle 4 cassettes), glued, folded precisely, and grouped into discrete queues, plan for a dedicated hour or more at your desk before class begins.",
  },
  {
    label:
      "What happens if a group gets completely stuck during the play window?",
    content:
      "The master SetupAndSolutions.pdf contains dedicated hints. Instead of giving away answers directly, you can provide subtle clues to help students overcome difficulties.",
  },
  {
    label: "Do the students need laptops, tablets, or internet connections?",
    content:
      "No. Resistance 4Ω4 is a fully analog, paper-based print-and-play experience. While the narrative theme addresses digital frameworks, data visualization, and AI literacy, the gameplay relies entirely on team collaboration and physical processing.",
  },
];
</script>

<template>
  <MainContent class="container py-12 sm:py-20">
    <div class="mx-auto max-w-4xl px-6 lg:px-8 space-y-14">
      <!-- Section Header -->
      <div
        class="space-y-4 border-b border-gray-200 dark:border-gray-800 pb-8 pt-12"
      >
        <div class="space-y-1">
          <span
            class="text-xs font-mono font-semibold tracking-widest text-primary-600 dark:text-primary-400 uppercase block"
          >
            Institutional Integration Manual
          </span>
          <h1
            class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            For Educators
          </h1>
        </div>
        <p
          class="text-base text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed"
        >
          Resistance 4Ω4 is an educational escape room targeted for secondary
          school integration. Students focus on solving one puzzle at a time,
          helping maintain order while maximizing engagement. The game is
          directly managed and monitored by the educator.
        </p>
      </div>

      <!-- Quick Metrics Grid -->
      <section class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="spec in specs"
          :key="spec.label"
          class="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/20 flex flex-col items-center text-center justify-center gap-2"
        >
          <UIcon :name="spec.icon" class="w-5 h-5 text-primary-500" />
          <span
            class="text-[10px] font-mono uppercase tracking-wider text-gray-400 leading-none"
            >{{ spec.label }}</span
          >
          <span
            class="text-xs font-semibold text-gray-900 dark:text-white leading-tight"
            >{{ spec.value }}</span
          >
        </div>
      </section>

      <!-- Educational Value & Curriculum Alignment -->
      <section class="space-y-4">
        <h2
          class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2"
        >
          <UIcon
            name="i-heroicons-academic-cap"
            class="w-5 h-5 text-gray-400"
          />
          Curriculum Relevance & Benefits
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <UCard
            v-for="benefit in curriculumBenefits"
            :key="benefit.title"
            :ui="{ body: { base: 'p-5 space-y-2' } }"
          >
            <h3 class="font-semibold text-sm text-gray-900 dark:text-white">
              {{ benefit.title }}
            </h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              {{ benefit.desc }}
            </p>
          </UCard>
        </div>
      </section>

      <!-- The Teacher Gatekeeper Workflow -->
      <section
        class="p-6 rounded-xl bg-primary-500/5 border border-primary-500/20 space-y-4"
      >
        <div
          class="flex items-center gap-2 text-primary-600 dark:text-primary-400"
        >
          <UIcon name="i-heroicons-shield-check" class="w-5 h-5" />
          <h3 class="font-semibold text-sm sm:text-base">
            The Teachers Function: Verify & Distribute
          </h3>
        </div>
        <p
          class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          To maintain structural focus,
          <strong
            >each group receives exactly one puzzle packet at a time</strong
          >. Students work in teams of 2–5 to figure out the solutions. Once
          they reach an answer, they must physically bring their solution card
          to your desk. Your role is to check their solution sheets against the
          master <code>SetupAndSolutions.pdf</code> guide. Once approved, hand
          them the next puzzle packet along with its corresponding narrative
          instruction sheet ("Message from the Resistance") to unlock the next
          level.
        </p>
      </section>

      <!-- Scheduling Schedule / Timeline Accordion Tracking -->
      <section class="space-y-4">
        <h2
          class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2"
        >
          <UIcon name="i-heroicons-clock" class="w-5 h-5 text-gray-400" />
          Fitting inside a Double-Period
        </h2>
        <div
          class="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden divide-y divide-gray-200 dark:divide-gray-800"
        >
          <div
            v-for="slot in timeline"
            :key="slot.time"
            class="p-4 bg-white dark:bg-background flex flex-col sm:flex-row gap-2 sm:gap-6 items-start"
          >
            <span
              class="text-xs font-mono font-bold text-primary-500 bg-primary-50 dark:bg-primary-950/40 px-2 py-0.5 rounded-md whitespace-nowrap"
            >
              {{ slot.time }}
            </span>
            <div class="space-y-0.5">
              <h4 class="text-sm font-semibold text-gray-900 dark:text-white">
                {{ slot.title }}
              </h4>
              <p
                class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed"
              >
                {{ slot.desc }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Physical Preparation Pipeline Steps -->
      <section class="space-y-4">
        <div class="space-y-1">
          <h2
            class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2"
          >
            <UIcon name="i-heroicons-scissors" class="w-5 h-5 text-gray-400" />
            Physical Assembly
          </h2>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            Note: Hand-crafting setup elements alone is the most time-consuming
            phase. Allocate anywhere from 1h to 1,5hrs before class starts.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-3">
          <div
            v-for="(step, index) in prepSequence"
            :key="step.title"
            class="flex gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background items-start"
          >
            <div
              class="w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex items-center justify-center font-mono font-bold text-xs flex-shrink-0"
            >
              0{{ index + 1 }}
            </div>
            <div class="space-y-1 flex-1">
              <div class="flex flex-wrap items-center gap-2 justify-between">
                <h4
                  class="font-medium text-gray-900 dark:text-white text-xs sm:text-sm"
                >
                  {{ step.title }}
                </h4>
                <span
                  class="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-400"
                >
                  {{ step.badge }}
                </span>
              </div>
              <p
                class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed"
              >
                {{ step.action }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="space-y-4 pb-16">
        <h2
          class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2"
        >
          <UIcon
            name="i-heroicons-question-mark-circle"
            class="w-5 h-5 text-gray-400"
          />
          Frequently Asked Questions
        </h2>
        <UAccordion :items="faqs" variant="light" size="sm" />
      </section>
    </div>
  </MainContent>
</template>

<script setup lang="ts">
interface DownloadItem {
  label: string;
  description: string;
  filenames: string[];
  icon: string;
}

const BUCKET_BASE = 'https://tkryqtzzrsfqsxbn.public.blob.vercel-storage.com';

const generalFiles: DownloadItem[] = [
  {
    label: "Escape Game Story",
    description: "Read this story to provide context and an immersive experience for the players.",
    filenames: ["Story.pdf"],
    icon: "i-heroicons-book-open"
  },
  {
    label: "Puzzle Instructions",
    description: "Messages from the resistance containing instructions for each puzzle.",
    filenames: ["PuzzleInstructions.pdf"],
    icon: "i-heroicons-document-text",
  },
  {
    label: "Answer Input Sheet",
    description: "Record answers to each of the puzzles and quick reference with the game master.",
    filenames: ["InputSheet.pdf"],
    icon: "i-heroicons-pencil-square",
  },
];

const puzzleFiles: DownloadItem[] = [
  {
    label: "Puzzle 1: Letters",
    description: "A multi-page PDF document containing printable letters required for the first sequence.",
    filenames: ["P1_Letters.pdf"],
    icon: "i-heroicons-envelope",
  },
  {
    label: "Puzzle 2: Frequency Ruler",
    description: "A single-page printable PDF template of a specialized ruler used to measure the frequency.",
    filenames: ["P2_FrequencyRuler.pdf"],
    icon: "i-heroicons-ticket",
  },
  {
    label: "Puzzle 3: Radio Transmission",
    description: "Two separate PDF documents: a structured radio reception data spreadsheet and a physical signal coverage map.",
    filenames: ["P3_RadioReceptionList.pdf", "P3_RadioSignalCoverageMap.pdf"],
    icon: "i-heroicons-radio",
  },
  {
    label: "Puzzle 4: Songs and Cassette Player",
    description: "Contains a Walkman schematic PDF, a text word cloud PDF, and a compressed ZIP archive containing 16 cassette PNG images.",
    filenames: ["P4_Walkman.pdf", "P4_WordCloud.pdf", "P4_Casettes.zip"],
    icon: "i-heroicons-musical-note",
  },
  {
    label: "Puzzle 5: Mapping Networks",
    description: "Four data visualization map PDF documents: Heatmap, Nodemap, Roadmap, and Scalemap files to be cross-referenced.",
    filenames: [
      "P5_Heatmap.pdf",
      "P5_Nodemap.pdf",
      "P5_Roadmap.pdf",
      "P5_Scalemap.pdf",
    ],
    icon: "i-heroicons-map",
  },
  {
    label: "Puzzle 6: Meeting Point Address",
    description: "The final PDF document with empty spaces to fill out. Use previous answers to figure out the meeting point address.",
    filenames: ["P6_Address.pdf"],
    icon: "i-heroicons-flag",
  },
];

const gamemasterFiles: DownloadItem[] = [
  {
    label: "Setup & Solution Guide",
    description: "Contains full puzzle walkthroughs, hints, and final solutions.",
    filenames: ["SetupAndSolutions.pdf"],
    icon: "i-heroicons-key",
  },
];

const downloadFile = async (filename: string) => {
  try {
    const fileUrl = `${BUCKET_BASE}/${filename}`;
    
    const response = await fetch(fileUrl);
    if (!response.ok) throw new Error('Network file retrieval failed');
    
    const blob = await response.blob();
    
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  } catch (error) {
    console.error('File streaming failed:', error);
  }
};

const downloadAllArchive = () => {
  downloadFile("resistance404_all_files.zip");
};
</script>

<template>
  <MainContent class="container py-12 sm:py-20">
    <div class="mx-auto max-w-4xl px-6 lg:px-8 space-y-12">
      <div
        class="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-gray-200 dark:border-gray-800 pb-8 mt-12"
      >
        <div class="space-y-1">
          <h1
            class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Downloadable Materials
          </h1>
          <p class="text-gray-500 dark:text-gray-400 text-sm">
            Grab everything required to launch and play the digital escape room
            sequence.
          </p>
        </div>
        <div class="flex-shrink-0">
          <UButton
            icon="i-heroicons-arrow-down-tray"
            size="xl"
            color="primary"
            variant="solid"
            label="Download Entire Kit (.ZIP)"
            class="w-full md:w-auto shadow-sm"
            @click="downloadAllArchive"
          />
        </div>
      </div>

      <section class="space-y-4">
        <h2
          class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2"
        >
          <UIcon
            name="i-heroicons-clipboard-document-list"
            class="w-5 h-5 text-gray-400"
          />
          General Setup Materials
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <UCard
            v-for="file in generalFiles"
            :key="file.label"
            class="hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
          >
            <div class="flex items-start justify-between gap-4">
              <div class="flex gap-3">
                <UIcon
                  :name="file.icon"
                  class="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5"
                />
                <div>
                  <h3
                    class="font-medium text-gray-900 dark:text-white text-sm sm:text-base"
                  >
                    {{ file.label }}
                  </h3>
                  <p
                    class="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed"
                  >
                    {{ file.description }}
                  </p>
                </div>
              </div>
              <UButton
                icon="i-heroicons-arrow-down-tray"
                variant="ghost"
                square
                aria-label="Download document"
                @click="downloadFile(file.filenames[0]!)"
              />
            </div>
          </UCard>
        </div>
      </section>

      <section class="space-y-4">
        <h2
          class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2"
        >
          <UIcon name="i-heroicons-cpu-chip" class="w-5 h-5 text-gray-400" />
          Mission Decryption Puzzles
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <UCard
            v-for="puzzle in puzzleFiles"
            :key="puzzle.label"
            class="hover:border-primary-500/50 transition-colors"
          >
            <div class="flex flex-col h-full justify-between gap-4">
              <div class="flex gap-3">
                <UIcon
                  :name="puzzle.icon"
                  class="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5"
                />
                <div>
                  <h3
                    class="font-medium text-gray-900 dark:text-white text-sm sm:text-base"
                  >
                    {{ puzzle.label }}
                  </h3>
                  <p
                    class="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed"
                  >
                    {{ puzzle.description }}
                  </p>
                </div>
              </div>

              <div
                class="pt-2 border-t border-gray-100 dark:border-gray-800/60 flex flex-wrap gap-2 items-center justify-end"
              >
                <template v-if="puzzle.filenames.length === 1">
                  <UButton
                    icon="i-heroicons-arrow-down-tray"
                    size="xs"
                    variant="solid"
                    label="Download Puzzle"
                    @click="downloadFile(puzzle.filenames[0]!)"
                  />
                </template>
                <template v-else>
                  <span class="text-[10px] text-gray-400 font-mono mr-auto"
                    >Contains {{ puzzle.filenames.length }} items</span
                  >
                  <UButton
                    v-for="(name, index) in puzzle.filenames"
                    :key="name"
                    icon="i-heroicons-arrow-down-tray"
                    size="xs"
                    variant="ghost"
                    :label="
                      name.endsWith('.zip')
                        ? 'Get Assets Archive'
                        : `Part ${index + 1}`
                    "
                    @click="downloadFile(name)"
                  />
                </template>
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <section class="space-y-4 pt-4 mb-16">
        <h2
          class="text-lg font-semibold text-red-600 dark:text-red-400 flex items-center gap-2"
        >
          <UIcon name="i-heroicons-shield-exclamation" class="w-5 h-5" />
          Host / Teacher Access
        </h2>
        <UCard
          class="bg-red-50/40 dark:bg-red-950/10 border border-red-200/60 dark:border-red-900/40"
        >
          <div
            v-for="gmFile in gamemasterFiles"
            :key="gmFile.label"
            class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div class="flex gap-3 items-start">
              <UIcon
                :name="gmFile.icon"
                class="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0"
              />
              <div>
                <h3
                  class="font-semibold text-red-900 dark:text-red-200 text-sm sm:text-base"
                >
                  SPOILER ENCLAVE: {{ gmFile.label }}
                </h3>
                <p
                  class="text-xs text-red-700 dark:text-red-400 mt-1 leading-relaxed"
                >
                  Do not look at this file if you intend to participate as an
                  active player. This guide contains the full answers.
                </p>
              </div>
            </div>
            <UButton
              icon="i-heroicons-eye-slash"
              variant="solid"
              label="Reveal Guide"
              class="whitespace-nowrap shadow-sm self-end sm:self-center"
              @click="downloadFile(gmFile.filenames[0]!)"
            />
          </div>
        </UCard>
      </section>
    </div>
  </MainContent>
</template>
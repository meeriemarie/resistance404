<template>
  <MainContent class="container py-16">
    <div class="article-content mx-auto max-w-4xl">
      <UPageHeader title="Resistance Not Found" />
      <p class="pt-8">
        An immersive, print-and-play escape room designed for the classroom.
        Resistance 4Ω4 transforms critical AI literacy, data visualization, and
        the 'dead internet theory' into an unforgettable, hands-on adventure for
        teens aged 13–18.
      </p>

      <UPageSection
        id="features"
        title="Everything you need to lead the resistance"
        description="No complex setup required. Just download, print, and watch your classroom transform into an interactive puzzle hub."
        :features="[
          {
            icon: 'i-lucide-printer',
            title: 'Print & Play Ready',
            description:
              'Access all essential puzzle pieces, props, and materials instantly. Completely free to download and print.',
          },
          {
            icon: 'i-lucide-map',
            title: 'Step-by-Step Guides',
            description:
              'Clear setup instructions and a seamless narrative script make game master prep entirely stress-free.',
          },
          {
            icon: 'i-lucide-key-round',
            title: 'Teacher Solution Sheets',
            description:
              'Keep the game moving with quick-reference answer keys and targeted, tiered hints for every single puzzle.',
          },
          {
            icon: 'i-lucide-flask-conical',
            title: 'Playtest Proven',
            description:
              'Iterated and refined using real student feedback to ensure the perfect balance of challenge, pacing, and fun.',
          },
          {
            icon: 'i-lucide-dices',
            title: 'Serious Gaming',
            description:
              'Resistance 4Ω4 combines fun game mechanics with educational objectives, proving that deep learning can be engaging.',
          },
          {
            icon: 'i-lucide-cpu',
            title: 'Highly Relevant',
            description:
              'Spotting AI, learning about computer literacy, reading data and its visualization techniques are important skills in this ever evolving time.',
          },
        ]"
      />
    </div>
  </MainContent>
</template>

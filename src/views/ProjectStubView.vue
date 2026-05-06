<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { PROJECTS } from '@/data/portfolio'

const route = useRoute()

const slug = computed(() => {
  const s = route.params.slug
  return Array.isArray(s) ? (s[0] ?? '') : (s ?? '')
})

const project = computed(() => PROJECTS.find((p) => p.id === slug.value))
</script>

<template>
  <main class="py-24 border-t border-line max-[720px]:py-18">
    <div class="mx-auto max-w-310 px-8 max-[720px]:px-5">
      <div class="font-mono text-xs tracking-[0.06em] uppercase text-accent-ink mb-3.5">Project</div>
      <h1
        class="text-[clamp(36px,5vw,64px)] leading-[1.02] tracking-tight font-semibold m-0 text-balance"
      >
        <template v-if="project">{{ project.title }}</template>
        <template v-else>Project niet gevonden</template>
      </h1>
      <p class="max-w-120 text-ink-2 text-base text-pretty mt-6">
        <template v-if="project">
          Deze case study is
          <em class="font-serif italic font-normal text-accent">binnenkort beschikbaar</em>.
        </template>
        <template v-else>
          Geen project gevonden voor "{{ slug }}".
        </template>
      </p>
      <div class="mt-8">
        <RouterLink
          to="/"
          class="group inline-flex items-center gap-2.5 px-5.5 py-3.5 rounded-full text-[15px] font-medium border border-line text-ink bg-transparent cursor-default transition duration-200 hover:bg-card hover:border-[oklch(0.78_0.01_80)] hover:-translate-y-px"
        >
          <span class="inline-block transition-transform duration-250 group-hover:-translate-x-0.75">←</span>
          Terug naar home
        </RouterLink>
      </div>
    </div>
  </main>
</template>

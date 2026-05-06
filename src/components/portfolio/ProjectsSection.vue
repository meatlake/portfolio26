<script setup lang="ts">
import { computed, ref } from 'vue'
import { PROJECTS } from '@/data/portfolio'
import ProjectCard from './ProjectCard.vue'

const active = ref<string>('Alle')

const categories = computed(() => {
  const seen = new Set<string>()
  const out: string[] = ['Alle']
  for (const p of PROJECTS) {
    if (!seen.has(p.category)) {
      seen.add(p.category)
      out.push(p.category)
    }
  }
  return out
})

const filtered = computed(() =>
  active.value === 'Alle' ? PROJECTS : PROJECTS.filter((p) => p.category === active.value),
)
</script>

<template>
  <section
    id="projects"
    data-screen-label="03 Projecten"
    class="py-24 border-t border-line scroll-mt-22 bg-bg-warm max-[720px]:py-18"
  >
    <div class="mx-auto max-w-310 px-8 max-[720px]:px-5">
      <div
        class="reveal flex items-end justify-between gap-8 mb-12 max-[720px]:flex-col max-[720px]:items-start max-[720px]:gap-5 max-[720px]:mb-9"
      >
        <div>
          <div class="font-mono text-xs tracking-[0.06em] uppercase text-accent-ink mb-3.5">03 — Projecten</div>
          <h2
            class="text-[clamp(36px,5vw,64px)] leading-[1.02] tracking-tight font-semibold m-0 text-balance"
          >
            Een selectie van mijn
            <em class="font-serif italic font-normal text-accent">werk</em>.
          </h2>
        </div>
        <div class="flex flex-col gap-4.5 items-end">
          <p class="max-w-120 text-ink-2 text-base text-pretty text-right">
            Elk project laat een ander onderdeel zien van mijn ontwikkeling op het gebied van
            design, frontend, onderzoek en gebruikservaring.
          </p>
          <div class="flex gap-1.5 p-1 bg-card border border-line rounded-full">
            <button
              v-for="c in categories"
              :key="c"
              type="button"
              class="px-3.5 py-2 rounded-full text-[13px] border-0 transition-colors duration-200 cursor-default hover:text-ink"
              :class="active === c ? 'bg-ink text-bg' : 'bg-transparent text-ink-2'"
              @click="active = c"
            >
              {{ c }}
            </button>
          </div>
        </div>
      </div>

      <div
        class="reveal grid grid-cols-6 gap-4.5 max-[980px]:grid-cols-2 max-[980px]:gap-3.5 max-[560px]:grid-cols-1"
      >
        <ProjectCard v-for="(p, i) in filtered" :key="p.id" :project="p" :idx="i" />
      </div>
    </div>
  </section>
</template>

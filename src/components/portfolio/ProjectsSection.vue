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
  <section id="projects" data-screen-label="03 Projecten" class="section section-warm">
    <div class="wrap">
      <div class="section-head reveal">
        <div>
          <div class="section-eyebrow">03 — Projecten</div>
          <h2 class="section-title">Een selectie van mijn <em>werk</em>.</h2>
        </div>
        <div :style="{ display: 'flex', flexDirection: 'column', gap: '18px', alignItems: 'flex-end' }">
          <p class="section-intro" :style="{ textAlign: 'right' }">
            Elk project laat een ander onderdeel zien van mijn ontwikkeling op het gebied van
            design, frontend, onderzoek en gebruikservaring.
          </p>
          <div class="proj-tabs">
            <button
              v-for="c in categories"
              :key="c"
              class="proj-tab"
              :class="{ active: active === c }"
              @click="active = c"
            >
              {{ c }}
            </button>
          </div>
        </div>
      </div>

      <div class="projects-grid reveal">
        <ProjectCard
          v-for="(p, i) in filtered"
          :key="p.id"
          :project="p"
          :idx="i"
        />
      </div>
    </div>
  </section>
</template>

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
  <main class="section">
    <div class="wrap">
      <div class="section-eyebrow">Project</div>
      <h1 class="section-title">
        <template v-if="project">{{ project.title }}</template>
        <template v-else>Project niet gevonden</template>
      </h1>
      <p class="section-intro" :style="{ marginTop: '24px' }">
        <template v-if="project">
          Deze case study is <em>binnenkort beschikbaar</em>.
        </template>
        <template v-else>
          Geen project gevonden voor "{{ slug }}".
        </template>
      </p>
      <div :style="{ marginTop: '32px' }">
        <RouterLink to="/" class="btn btn-ghost">
          <span class="arrow">←</span> Terug naar home
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '@/data/portfolio'

const props = defineProps<{ project: Project; idx: number }>()

const num = computed(() => String(props.idx + 1).padStart(2, '0'))
</script>

<template>
  <RouterLink
    :to="`/projects/${project.id}`"
    class="proj-card"
    :class="{ featured: project.featured }"
  >
    <div class="proj-thumb" :style="{ '--hue': project.hue }">
      <div class="proj-thumb-bg"></div>
      <div class="proj-thumb-num">{{ num }}</div>
      <div class="proj-thumb-label">[ {{ project.label }} ]</div>
    </div>
    <div class="proj-body">
      <div class="proj-tags">
        <span v-for="t in project.tags" :key="t" class="proj-tag">{{ t }}</span>
      </div>
      <h3 class="proj-title">{{ project.title }}</h3>
      <p class="proj-desc">{{ project.desc }}</p>
      <div class="proj-foot">
        <span class="proj-link">Bekijk project <span class="arrow">↗</span></span>
        <span class="proj-year">{{ project.year }}</span>
      </div>
    </div>
  </RouterLink>
</template>

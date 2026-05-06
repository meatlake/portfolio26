<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '@/data/portfolio'

const props = defineProps<{ project: Project; idx: number }>()

const num = computed(() => String(props.idx + 1).padStart(2, '0'))
</script>

<template>
  <RouterLink
    :to="`/projects/${project.id}`"
    class="group bg-card border border-line rounded-card-lg overflow-hidden flex flex-col transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] relative hover:-translate-y-1 hover:shadow-card-md hover:border-[oklch(0.78_0.01_80)] max-[980px]:col-span-1"
    :class="project.featured ? 'col-span-6' : 'col-span-3'"
  >
    <div
      class="relative overflow-hidden border-b border-line bg-bg-warm"
      :class="project.featured ? 'aspect-21/9' : 'aspect-16/10'"
      :style="{ '--hue': project.hue }"
    >
      <div
        class="absolute inset-0 transition-transform duration-800 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.04] bg-[repeating-linear-gradient(135deg,_oklch(0.94_0.02_var(--hue,60))_0_12px,_oklch(0.92_0.025_var(--hue,60))_12px_24px)]"
      ></div>
      <div
        class="absolute right-4.5 top-4 font-serif italic text-[28px] opacity-70 text-[oklch(0.3_0.06_var(--hue,60))]"
      >
        {{ num }}
      </div>
      <div
        class="absolute left-4.5 bottom-4 font-mono text-[11px] tracking-[0.06em] uppercase px-2.5 py-1.25 rounded-md backdrop-blur-md bg-card/80 text-[oklch(0.35_0.05_var(--hue,60))]"
      >
        [ {{ project.label }} ]
      </div>
    </div>
    <div class="pt-5.5 px-6 pb-6 flex flex-col gap-3 flex-1">
      <div class="flex gap-1.5 flex-wrap">
        <span
          v-for="t in project.tags"
          :key="t"
          class="font-mono text-[10.5px] tracking-[0.04em] text-ink-2 px-2 py-0.75 rounded-md bg-bg-warm border border-line"
          >{{ t }}</span
        >
      </div>
      <h3
        class="leading-[1.2] tracking-[-0.012em] font-semibold mt-0.5"
        :class="project.featured ? 'text-[32px]' : 'text-[22px]'"
      >
        {{ project.title }}
      </h3>
      <p class="text-ink-2 text-[14.5px] leading-[1.55] m-0">{{ project.desc }}</p>
      <div class="mt-auto pt-3.5 flex items-center justify-between">
        <span class="inline-flex items-center gap-2 text-sm font-medium">
          Bekijk project
          <span
            class="transition-transform duration-250 group-hover:translate-x-0.75 group-hover:-translate-y-0.75"
            >↗</span
          >
        </span>
        <span class="font-mono text-[11.5px] text-ink-3">{{ project.year }}</span>
      </div>
    </div>
  </RouterLink>
</template>

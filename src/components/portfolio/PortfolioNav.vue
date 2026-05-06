<script setup lang="ts">
import { computed } from 'vue'
import { useScrollY } from '@/composables/useScrollY'

defineProps<{ active: string }>()

const y = useScrollY()
const scrolled = computed(() => y.value > 12)

const items = [
  { id: 'home', label: 'Home' },
  { id: 'tools', label: 'Ervaring' },
  { id: 'projects', label: 'Projecten' },
  { id: 'about', label: 'Over mij' },
] as const
</script>

<template>
  <nav
    class="sticky top-0 z-50 backdrop-blur-[18px] backdrop-saturate-[1.4] bg-bg/75 border-b border-transparent transition-[border-color,background] duration-250"
    :class="{ 'border-b-line': scrolled }"
  >
    <div class="mx-auto max-w-310 px-8 max-[720px]:px-5 flex items-center justify-between h-18">
      <a href="#home" class="flex items-center gap-2.5 font-semibold tracking-[-0.01em]">
        <span
          class="w-7.5 h-7.5 rounded-[9px] bg-ink text-bg grid place-items-center font-serif text-lg italic leading-none"
          >J</span
        >
        <span>Julian Vleesenbeek</span>
      </a>
      <div class="flex items-center gap-1">
        <a
          v-for="i in items"
          :key="i.id"
          :href="`#${i.id}`"
          class="px-3.5 py-2 rounded-full text-[14.5px] transition-colors duration-200 hover:text-ink hover:bg-ink/5 max-[720px]:hidden"
          :class="active === i.id ? 'text-ink bg-ink/6' : 'text-ink-2'"
        >
          {{ i.label }}
        </a>
        <a
          href="#contact"
          class="ml-2 px-4 py-2.25 rounded-full bg-ink text-white text-sm font-medium transition-[transform,background,color] duration-200 hover:bg-accent hover:-translate-y-px"
          >Contact ↗</a
        >
      </div>
    </div>
  </nav>
</template>

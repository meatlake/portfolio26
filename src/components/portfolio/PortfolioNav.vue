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
  <nav class="nav" :class="{ scrolled }">
    <div class="wrap nav-inner">
      <a href="#home" class="brand">
        <span class="brand-mark">J</span>
        <span>Julian Vleesenbeek</span>
      </a>
      <div class="nav-links">
        <a
          v-for="i in items"
          :key="i.id"
          :href="`#${i.id}`"
          :style="
            active === i.id
              ? {
                  color: 'var(--ink)',
                  background: 'color-mix(in oklab, var(--ink) 6%, transparent)',
                }
              : undefined
          "
        >
          {{ i.label }}
        </a>
        <a href="#contact" class="nav-cta">Contact ↗</a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useScrollY } from '@/composables/useScrollY'

const y = useScrollY()

const pct = computed(() => {
  if (typeof document === 'undefined') return 0
  const max = document.documentElement.scrollHeight - window.innerHeight || 1
  return Math.min(100, Math.max(0, (y.value / max) * 100))
})
</script>

<template>
  <div class="fixed inset-x-0 top-0 h-0.5 z-60 pointer-events-none">
    <div
      class="h-full bg-accent transition-[width] duration-150 ease-linear"
      :style="{ width: `${pct}%` }"
    ></div>
  </div>
</template>

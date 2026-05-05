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
  <div
    :style="{
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      height: '2px',
      zIndex: 60,
      pointerEvents: 'none',
    }"
  >
    <div
      :style="{
        height: '100%',
        width: `${pct}%`,
        background: 'var(--accent)',
        transition: 'width .15s linear',
      }"
    ></div>
  </div>
</template>

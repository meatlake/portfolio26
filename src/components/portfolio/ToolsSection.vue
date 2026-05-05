<script setup lang="ts">
import { TOOLS } from '@/data/portfolio'
</script>

<template>
  <section id="tools" data-screen-label="02 Ervaring" class="section">
    <div class="wrap">
      <div class="section-head reveal">
        <div>
          <div class="section-eyebrow">02 — Ervaring</div>
          <h2 class="section-title">Tools waarmee ik <em>werk</em>.</h2>
        </div>
        <p class="section-intro">
          Door moderne programma's te gebruiken houd ik mijn kennis actueel en zet ik ideeën snel
          om naar visuele en interactieve concepten.
        </p>
      </div>
      <div class="tools-grid reveal">
        <div v-for="t in TOOLS" :key="t.name" class="tool">
          <div
            class="tool-icon"
            :style="{
              background: `oklch(0.96 0.04 ${t.hue})`,
              color: `oklch(0.35 0.12 ${t.hue})`,
            }"
          >
            {{ t.glyph }}
          </div>
          <div>
            <div class="tool-name">{{ t.name }}</div>
            <div class="tool-tag">{{ t.tag }}</div>
          </div>
          <div
            class="tool-level"
            :style="{ '--lvl': `${(t.level * 100).toFixed(0)}%` }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

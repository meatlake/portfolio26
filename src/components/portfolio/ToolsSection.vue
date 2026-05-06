<script setup lang="ts">
import { TOOLS } from '@/data/portfolio'
</script>

<template>
  <section
    id="tools"
    data-screen-label="02 Ervaring"
    class="py-24 border-t border-line scroll-mt-22 max-[720px]:py-18"
  >
    <div class="mx-auto max-w-310 px-8 max-[720px]:px-5">
      <div
        class="reveal flex items-end justify-between gap-8 mb-12 max-[720px]:flex-col max-[720px]:items-start max-[720px]:gap-5 max-[720px]:mb-9"
      >
        <div>
          <div class="font-mono text-xs tracking-[0.06em] uppercase text-accent-ink mb-3.5">02 — Ervaring</div>
          <h2
            class="text-[clamp(36px,5vw,64px)] leading-[1.02] tracking-tight font-semibold m-0 text-balance"
          >
            Tools waarmee ik
            <em class="font-serif italic font-normal text-accent">werk</em>.
          </h2>
        </div>
        <p class="max-w-120 text-ink-2 text-base text-pretty">
          Door moderne programma's te gebruiken houd ik mijn kennis actueel en zet ik ideeën snel
          om naar visuele en interactieve concepten.
        </p>
      </div>
      <div class="reveal grid grid-cols-6 gap-3.5 max-[980px]:grid-cols-3 max-[560px]:grid-cols-2">
        <div
          v-for="t in TOOLS"
          :key="t.name"
          class="group bg-card border border-line rounded-[18px] pt-5.5 px-4.5 pb-5 flex flex-col gap-3.5 transition-[transform,box-shadow,border-color] duration-250 relative hover:-translate-y-0.75 hover:shadow-card-md hover:border-[oklch(0.82_0.01_80)]"
        >
          <div
            class="w-10 h-10 rounded-[11px] grid place-items-center font-serif text-[22px] font-medium leading-none"
            :style="{
              background: `oklch(0.96 0.04 ${t.hue})`,
              color: `oklch(0.35 0.12 ${t.hue})`,
            }"
          >
            {{ t.glyph }}
          </div>
          <div>
            <div class="font-semibold text-[15px] tracking-[-0.005em]">{{ t.name }}</div>
            <div class="font-mono text-[10.5px] text-ink-3 tracking-[0.04em]">{{ t.tag }}</div>
          </div>
          <div class="mt-auto h-1 rounded-full bg-line overflow-hidden relative">
            <span
              class="absolute inset-y-0 left-0 bg-ink rounded-full transition-[width,background] duration-[800ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:bg-accent"
              :style="{ width: `${(t.level * 100).toFixed(0)}%` }"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

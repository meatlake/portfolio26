<script setup lang="ts">
import { TRAITS } from '@/data/portfolio'
</script>

<template>
  <section
    id="about"
    data-screen-label="04 Over mij"
    class="py-24 border-t border-line scroll-mt-22 max-[720px]:py-18"
  >
    <div class="mx-auto max-w-310 px-8 max-[720px]:px-5">
      <div class="grid grid-cols-2 gap-16 items-center max-[880px]:grid-cols-1 max-[880px]:gap-9">
        <div
          class="reveal about-portrait-deco aspect-4/5 rounded-card-lg border border-line relative overflow-hidden max-[880px]:max-w-105"
          aria-hidden="true"
        >
          <div
            class="absolute right-5 top-5 w-22 h-22 rounded-full bg-ink text-bg grid place-items-center text-center font-serif italic text-[15px] leading-[1.05] -rotate-[8deg] border-4 border-bg shadow-card-sm"
          >
            Korfbal<br />sinds '04
          </div>
        </div>
        <div class="reveal">
          <div class="font-mono text-xs tracking-[0.06em] uppercase text-accent-ink mb-3.5">
            04 — Wie ben ik?
          </div>
          <h3
            class="text-[clamp(28px,3.4vw,42px)] leading-[1.1] tracking-[-0.02em] font-semibold mt-0 mb-6 text-balance"
          >
            Student, sportliefhebber,
            <em class="font-serif italic font-normal text-accent">teamspeler.</em>
          </h3>
          <p class="text-ink-2 text-[16.5px] leading-[1.65] mt-0 mb-4.5">
            Ik ben Julian, student en sportliefhebber in hart en nieren. Ik speel al vanaf mijn
            vierde korfbal bij Fortuna in Delft. Die sportieve achtergrond heeft mij gevormd tot een
            echte teamspeler — ik werk graag samen, pas me makkelijk aan en draag bij aan een
            positieve sfeer.
          </p>
          <p class="text-ink-2 text-[16.5px] leading-[1.65] mt-0 mb-4.5">
            Tegelijk ben ik niet bang om zelfstandig te werken. Ik pak vraagstukken op met een
            doordachte aanpak en zoek naar oplossingen die praktisch, creatief en goed onderbouwd
            zijn.
          </p>
          <div class="mt-7 flex flex-wrap gap-2">
            <span
              v-for="t in TRAITS"
              :key="t"
              class="px-3.5 py-2 rounded-full bg-card border border-line text-[13.5px] text-ink transition duration-200 hover:bg-ink hover:text-bg hover:border-ink hover:-translate-y-px"
              >{{ t }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TAGLINE } from '@/data/portfolio'
</script>

<template>
  <section
    id="home"
    data-screen-label="01 Home"
    class="relative pt-20 pb-27.5 scroll-mt-22 max-[720px]:pt-12 max-[720px]:pb-18"
  >
    <div class="mx-auto max-w-310 px-8 max-[720px]:px-5">
      <h1
        class="reveal mt-5.5 text-[clamp(54px,9vw,128px)] leading-[0.94] tracking-[-0.035em] font-semibold text-balance"
      >
        Hoi, ik ben
        <em class="font-serif italic font-normal tracking-[-0.02em] text-accent pr-[0.04em]">Julian.</em>
      </h1>
      <p
        class="reveal mt-7 max-w-155 text-[clamp(16px,1.5vw,19px)] text-ink-2 text-pretty"
      >
        {{ TAGLINE }}. Een gezellige, actieve en sportieve student die graag samenwerkt, makkelijk
        contact maakt en bijdraagt aan een goede sfeer binnen elk team.
      </p>
      <div class="reveal mt-9 flex flex-wrap gap-3">
        <a
          href="#projects"
          class="group inline-flex items-center gap-2.5 px-5.5 py-3.5 rounded-full text-[15px] font-medium border border-transparent cursor-default transition duration-200 bg-ink text-bg hover:bg-accent hover:-translate-y-px"
        >
          Bekijk mijn projecten
          <span class="inline-block transition-transform duration-250 group-hover:translate-x-0.75">→</span>
        </a>
        <a
          href="#contact"
          class="group inline-flex items-center gap-2.5 px-5.5 py-3.5 rounded-full text-[15px] font-medium border border-line text-ink bg-transparent cursor-default transition duration-200 hover:bg-card hover:border-[oklch(0.78_0.01_80)] hover:-translate-y-px"
        >Neem contact op</a>
      </div>
      <div
        class="reveal mt-18 grid grid-cols-4 gap-6 pt-7 border-t border-line max-[720px]:grid-cols-2 max-[720px]:gap-4.5"
      >
        <div>
          <div class="font-mono text-[11px] tracking-[0.06em] uppercase text-ink-3 mb-1.5">Locatie</div>
          <div class="text-[15px] text-ink font-medium">Delft/Gouda, NL</div>
        </div>
        <div>
          <div class="font-mono text-[11px] tracking-[0.06em] uppercase text-ink-3 mb-1.5">Studie</div>
          <div class="text-[15px] text-ink font-medium">Communicatie & Multimedia Design</div>
        </div>
        <div>
          <div class="font-mono text-[11px] tracking-[0.06em] uppercase text-ink-3 mb-1.5">Focus</div>
          <div class="text-[15px] text-ink font-medium">UX & UI</div>
        </div>
      </div>
    </div>
  </section>
</template>

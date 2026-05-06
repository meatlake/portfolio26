<script setup lang="ts">
import { onUnmounted, ref } from 'vue'

const copied = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

function copy() {
  navigator.clipboard?.writeText('jvleesenb@gmail.com')
  copied.value = true
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    copied.value = false
    timer = null
  }, 1600)
}

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})
</script>

<template>
  <section
    id="contact"
    data-screen-label="05 Contact"
    class="py-24 border-t border-line scroll-mt-22 max-[720px]:py-18"
  >
    <div class="mx-auto max-w-310 px-8 max-[720px]:px-5">
      <div
        class="reveal contact-card-glow rounded-card-lg bg-ink text-bg p-[clamp(40px,6vw,80px)] relative overflow-hidden"
      >
        <div class="font-mono text-xs tracking-[0.06em] uppercase mb-4.5 relative text-[oklch(0.78_0.07_60)]">05 — Contact</div>
        <h3
          class="text-[clamp(40px,6vw,76px)] leading-none tracking-tight font-semibold m-0 text-balance relative"
        >
          Laten we iets
          <em class="font-serif italic font-normal text-accent">maken.</em>
        </h3>
        <p
          class="mt-6 mb-9 max-w-130 text-[17px] leading-[1.55] relative text-[oklch(0.78_0.005_80)]"
        >
          Wil je meer weten over mijn werk, projecten of ervaring? Stuur me een mailtje — ik
          antwoord meestal binnen een dag.
        </p>
        <div class="flex flex-wrap gap-3 items-center relative">
          <a
            href="mailto:jvleesenb@gmail.com"
            class="inline-flex items-center gap-3 bg-bg text-ink px-6 py-4 rounded-full text-[15px] font-medium transition duration-200 hover:bg-accent hover:text-white hover:-translate-y-px"
          >
            <span class="text-lg">✉</span> jvleesenb@gmail.com
          </a>
          <button
            type="button"
            class="bg-transparent border-0 cursor-pointer text-[14.5px] py-3.5 px-1 border-b border-b-transparent transition duration-200 text-[oklch(0.82_0.005_80)] hover:text-bg hover:border-b-[oklch(0.6_0.01_80)]"
            @click="copy"
          >
            {{ copied ? 'Adres gekopieerd ✓' : 'Of kopieer mijn e-mailadres' }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

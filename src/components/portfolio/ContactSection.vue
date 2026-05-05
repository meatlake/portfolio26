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
  <section id="contact" data-screen-label="05 Contact" class="section">
    <div class="wrap">
      <div class="contact-card reveal">
        <div class="eyebrow">05 — Contact</div>
        <h3>Laten we iets <em>maken.</em></h3>
        <p>
          Wil je meer weten over mijn werk, projecten of ervaring? Stuur me een mailtje — ik
          antwoord meestal binnen een dag.
        </p>
        <div class="contact-actions">
          <a href="mailto:jvleesenb@gmail.com" class="contact-mail">
            <span :style="{ fontSize: '18px' }">✉</span> jvleesenb@gmail.com
          </a>
          <button
            type="button"
            class="contact-secondary"
            :style="{ background: 'transparent', border: 0, cursor: 'pointer' }"
            @click="copy"
          >
            {{ copied ? 'Adres gekopieerd ✓' : 'Of kopieer mijn e-mailadres' }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TRAITS } from '@/data/portfolio'
</script>

<template>
  <section id="about" data-screen-label="04 Over mij" class="section">
    <div class="wrap">
      <div class="about-grid">
        <div class="about-portrait reveal" aria-hidden="true">
          <div class="badge">Korfbal<br />sinds '04</div>
        </div>
        <div class="about-text reveal">
          <div class="section-eyebrow">04 — Wie ben ik?</div>
          <h3>Student, sportliefhebber, <em>teamspeler.</em></h3>
          <p>
            Ik ben Julian, student en sportliefhebber in hart en nieren. Ik speel al vanaf mijn
            vierde korfbal bij Fortuna in Delft. Die sportieve achtergrond heeft mij gevormd tot
            een echte teamspeler — ik werk graag samen, pas me makkelijk aan en draag bij aan een
            positieve sfeer.
          </p>
          <p>
            Tegelijk ben ik niet bang om zelfstandig te werken. Ik pak vraagstukken op met een
            doordachte aanpak en zoek naar oplossingen die praktisch, creatief en goed onderbouwd
            zijn.
          </p>
          <div class="traits">
            <span v-for="t in TRAITS" :key="t" class="trait">{{ t }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

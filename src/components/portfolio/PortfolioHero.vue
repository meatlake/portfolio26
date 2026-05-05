<script setup lang="ts">
import { TAGLINE } from '@/data/portfolio'
</script>

<template>
  <section id="home" data-screen-label="01 Home" class="hero" data-variant="editorial">
    <div class="wrap">
      <div class="reveal">
        <span class="hero-eyebrow">
          <span class="dot"></span>
          Beschikbaar voor stage · 2026
        </span>
      </div>
      <h1 class="hero-title reveal">
        Hoi, ik ben <em>Julian.</em>
      </h1>
      <p class="hero-sub reveal">
        {{ TAGLINE }}. Een gezellige, actieve en sportieve student die graag samenwerkt, makkelijk
        contact maakt en bijdraagt aan een goede sfeer binnen elk team.
      </p>
      <div class="hero-actions reveal">
        <a href="#projects" class="btn btn-primary">
          Bekijk mijn projecten <span class="arrow">→</span>
        </a>
        <a href="#contact" class="btn btn-ghost">Neem contact op</a>
      </div>
      <div class="hero-meta reveal">
        <div class="cell">
          <div class="k">Locatie</div>
          <div class="v">Delft, NL</div>
        </div>
        <div class="cell">
          <div class="k">Studie</div>
          <div class="v">Frontend Dev</div>
        </div>
        <div class="cell">
          <div class="k">Focus</div>
          <div class="v">Visual & UX</div>
        </div>
        <div class="cell">
          <div class="k">Sport</div>
          <div class="v">Korfbal · Fortuna</div>
        </div>
      </div>
    </div>
  </section>
</template>

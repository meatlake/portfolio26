<script setup lang="ts">
import PortfolioNav from '@/components/portfolio/PortfolioNav.vue'
import PortfolioHero from '@/components/portfolio/PortfolioHero.vue'
import ToolsSection from '@/components/portfolio/ToolsSection.vue'
import ProjectsSection from '@/components/portfolio/ProjectsSection.vue'
import AboutSection from '@/components/portfolio/AboutSection.vue'
import ContactSection from '@/components/portfolio/ContactSection.vue'
import PortfolioFooter from '@/components/portfolio/PortfolioFooter.vue'
import ScrollProgress from '@/components/portfolio/ScrollProgress.vue'
import { useReveal } from '@/composables/useReveal'
import { useScrollSpy } from '@/composables/useScrollSpy'

useReveal()
const active = useScrollSpy(['home', 'tools', 'projects', 'about', 'contact'])
</script>

<template>
  <ScrollProgress />
  <PortfolioNav :active="active" />
  <PortfolioHero />
  <ToolsSection />
  <ProjectsSection />
  <AboutSection />
  <ContactSection />
  <PortfolioFooter />
</template>

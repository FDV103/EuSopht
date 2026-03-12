<script setup>
import GridPattern from '@/components/GridPattern.vue'
import { Globe, Smartphone } from 'lucide-vue-next'

import autoFlowImg from '@/assets/autoflow.png'
import viziiImg from '@/assets/vizii.png'
import midwifeImg from '@/assets/midwife.png'

const featuredProjects = [
  {
    id: 1,
    title: 'AutoFlow',
    type: 'Web Application',
    image: autoFlowImg,
    link: '/portfolio/autoflow',
    icon: Globe,
  },
  {
    id: 2,
    title: 'Vizii',
    type: 'Web Application',
    image: viziiImg,
    link: '/portfolio/vizii',
    icon: Globe,
  },
  {
    id: 3,
    title: 'MidwifeX',
    type: 'Mobile Application',
    image: midwifeImg,
    link: '/portfolio/midwifex',
    icon: Smartphone,
  },
]
</script>

<template>
  <main class="page">
    <section class="hero portfolio-hero">
      <GridPattern />
      <div class="hero-content portfolio-hero-content">
        <h1>Projects We're Proud Of</h1>
        <p class="hero-text portfolio-hero-text">
          Let's Build Something Amazing Together! Explore our diverse portfolio of
          successful projects and digital transformations.
        </p>

        <div class="hero-actions">
          <button>Start a Project</button>
        </div>
      </div>
    </section>

    <section id="projects" class="projects-section">
      <div class="card-grid">
        <article v-for="project in featuredProjects" :key="project.id" class="media-card">
          <img :src="project.image" :alt="`${project.title} preview`" class="media-card-image" />

          <div class="media-card-overlay"></div>

          <div class="media-card-content">
            <h3 class="media-card-title">{{ project.title }}</h3>

            <div class="media-card-meta">
              <component :is="project.icon" :size="18" />
              <span>{{ project.type }}</span>
            </div>

            <RouterLink :to="project.link" class="media-card-link">
              View Case Study
              <span aria-hidden="true">→</span>
            </RouterLink>
          </div>
        </article>
      </div>
    </section>

    <section class="bottom-banner-section">
      <div class="bottom-banner">
        <h2>Ready to Start Your Project?</h2>
        <p>
          Our team of experts is ready to transform your ideas into reality. Let's create
          something exceptional together.
        </p>
        <button>Talk to Our Experts</button>
      </div>
    </section>
  </main>
</template>

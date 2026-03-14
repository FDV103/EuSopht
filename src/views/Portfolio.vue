<script setup>
import GridPattern from '@/components/GridPattern.vue'
import { Globe, Smartphone } from 'lucide-vue-next'
import { featuredProjects } from '@/data/projects'

const getProjectIcon = (type) => {
  return type === 'Mobile Application' ? Smartphone : Globe
}
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
          <RouterLink to="/contact" class="button-link">Start a Project</RouterLink>
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
              <component :is="getProjectIcon(project.type)" :size="18" />
              <span>{{ project.type }}</span>
            </div>

            <RouterLink :to="`/portfolio/${project.slug}`" class="media-card-link">
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
        <button @click="$router.push('/contact')">
            Talk to Our Experts
        </button>
      </div>
    </section>
  </main>
</template>

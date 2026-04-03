<script setup>
import GridPattern from '@/components/GridPattern.vue'
import { Globe, Smartphone } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import { featuredProjects } from '@/data/projects'

const selectedType = ref('All')

const projectTypes = computed(() => {
  const types = featuredProjects.map((project) => project.type)
  return ['All', ...new Set(types)]
})

const filteredProjects = computed(() => {
  if (selectedType.value === 'All') return featuredProjects
  return featuredProjects.filter((project) => project.type === selectedType.value)
})

const getProjectIcon = (type) => {
  return type === 'Mobile Application' ? Smartphone : Globe
}
</script>

<template>
  <main class="page">
    <section aria-labelledby="hero-title" class="portfolio-hero">
      <div class="container portfolio-hero-content">
        <GridPattern />
        <h1 id="hero-title">
          Projects We're <span class="text-gradient"> Proud Of </span><br aria-hidden="true" />
        </h1>

        <p class="hero-text portfolio-hero-text">
          Let's Build Something Amazing Together! Explore our diverse portfolio of successful
          projects and digital transformations.
        </p>

        <div class="hero-actions">
          <RouterLink class="btn btn-blue btn-big btn-round" to="/contact">
            Start your Project
            <span aria-hidden="true" class="svg-container btn-arrow">
              <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </RouterLink>
        </div>
      </div>
    </section>

    <section id="projects" class="projects-section">
      <div class="projects-toolbar">
        <div class="filter-toolbar-header">
          <h2>Browse Projects</h2>
          <p class="filter-toolbar-text">Filter by project type</p>
        </div>

        <div class="filter-group" role="group" aria-label="Filter projects by type">
          <button
            v-for="type in projectTypes"
            :key="type"
            type="button"
            class="filter-chip"
            :class="{ active: selectedType === type }"
            @click="selectedType = type"
          >
            {{ type }}
          </button>
        </div>
      </div>

      <div class="card-grid">
        <RouterLink
          v-for="project in filteredProjects"
          :key="project.id"
          :to="`/portfolio/${project.slug}`"
          class="media-card media-card-tile"
        >
          <img :src="project.image" :alt="`${project.title} preview`" class="media-card-image" />

          <div class="media-card-overlay"></div>

          <div class="media-card-content">
            <h3 class="media-card-title">{{ project.title }}</h3>

            <div class="media-card-meta">
              <component :is="getProjectIcon(project.type)" :size="18" />
              <span>{{ project.type }}</span>
            </div>

            <span class="media-card-link">
              View Case Study
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </RouterLink>
      </div>

      <p v-if="filteredProjects.length === 0" class="empty-state">No projects match this filter.</p>
    </section>

    <section aria-labelledby="cta-title" class="cta-section">
      <div class="container">
        <div class="cta-card">
          <GridPattern />

          <div class="cta-content">
            <h2 id="cta-title">Ready to Start Your <span class="text-gradient"> Project?</span></h2>
            <p class="cta-text sub-text">
              Our team of experts is ready to transform your ideas into reality. Let's create
              something exceptional together.
            </p>
          </div>
          <div class="cta-action">
            <RouterLink class="cta-btn btn btn-big btn-round" to="/contact">
              Talk To Our Experts
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  --colormix-pripmary: color-mix(in srgb, var(--primary-colour) 10%, transparent);
  --box-shadow-light: 0 0 8px #ffffff15, 0 2px 20px 0 #ffffff10;
}

section {
  padding: 5.5rem 0;
}

section:first-of-type {
  padding-block: 9rem;
}

.container {
  max-width: 87.5rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
}

h1 {
  font-size: clamp(2.25rem, 4vw + 1rem, 4.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  letter-spacing: -0.24rem;
}

h2 {
  font-size: clamp(1.75rem, 3vw + 1rem, 2.75rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: -0.05rem;
}

h3 {
  font-size: clamp(0.95rem, 1.4vw + 0.5rem, 1.1rem);
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.03rem;
}

h4 {
  font-size: clamp(0.9rem, 1.2vw + 0.4rem, 1.1rem);
  font-weight: 600;
  line-height: 1.4;
}

.text-gradient {
  background: linear-gradient(
    90deg,
    var(--primary-colour),
    color-mix(in srgb, var(--secondary-colour) 85%, transparent)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.bg-gray {
  background-color: var(--section-background-colour);
}

.sub-text {
  font-family: var(--font-accent);
  color: var(--text-colour-secondary);
  font-size: clamp(1.1rem, 1.4vw + 0.5rem, 1.3rem);
  max-width: 45rem;
  margin: 0 auto;
}

/* --- btn --- */

.btn {
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border-radius: 1rem;
  transition: all 0.3s ease;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.btn:hover {
  cursor: pointer;
}

.btn-arrow {
  width: 1.5rem;
  height: 1.5rem;
  background-color: color-mix(in srgb, var(--background-colour) 30%, transparent);
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.btn-arrow svg {
  width: 1rem;
  height: 1rem;
  pointer-events: none;
}

.btn-blue:hover .btn-arrow {
  transform: translateX(5px);
}

.btn-blue {
  background-color: var(--primary-colour);
  color: var(--background-colour);
  border: none;
  box-shadow: 0 3px 20px color-mix(in srgb, var(--primary-colour) 40%, transparent);
}

.btn-blue:hover {
  background-color: color-mix(in srgb, var(--primary-colour) 70%, var(--secondary-colour));
  scale: 1.05;
  box-shadow: 0 3px 24px color-mix(in srgb, var(--primary-colour) 50%, transparent);
}

.btn-white-blue {
  background-color: var(--background-colour);
  color: var(--primary-colour);
  border: 1px solid var(--primary-colour);
  box-shadow: var(--box-shadow-light);
}

.btn-white-blue:hover {
  background-color: color-mix(in srgb, var(--primary-colour) 40%, var(--secondary-colour));
  color: var(--background-colour);
}

.btn-white {
  background-color: var(--background-colour);
  color: var(--text-colour-primary);
  border: 1px solid var(--faint-border);
}

.btn-white:hover {
  background-color: color-mix(in srgb, var(--primary-colour) 8%, transparent);
}

.btn-round {
  border-radius: 50rem;
}

.btn-big {
  padding: 1.3rem 2.6rem;
}

/* --- CTA section --- */

.cta-section {
  padding-bottom: 8rem;
  padding-top: 2rem;
}

.cta-card {
  max-width: 75rem;
  margin: 0 auto;
  background: #111827;
  color: white;
  position: relative;
  border: 1px solid var(--faint-border);
  border-radius: 2rem;
  padding: 6rem 2rem;
  overflow: hidden;
  box-shadow: 0 2px 10px color-mix(in srgb, var(--primary-colour) 30%, transparent);
}

.cta-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#cta-title {
  font-size: clamp(2.5rem, 4vw + 1rem, 4rem);
  line-height: 1.1;
  margin-block: 1.5rem;
  max-width: 60rem;
  letter-spacing: -0.1rem;
}

.cta-text {
  margin-bottom: 3.5rem;
  max-width: 48rem;
  color: rgba(255, 255, 255, 0.803);
}

.cta-action {
  display: flex;
  justify-content: center;
}

.cta-btn {
  font-size: 1.2rem;
  background-color: var(--secondary-colour);
  color: var(--text-colour-primary);
  font-weight: 500;
  border: none;
  box-shadow: 0 3px 20px color-mix(in srgb, var(--secondary-colour) 40%, transparent);
}

.cta-btn:hover {
  background-color: color-mix(in srgb, var(--secondary-colour) 80%, var(--primary-colour));
  scale: 1.05;
  box-shadow: 0 3px 24px color-mix(in srgb, var(--secondary-colour) 50%, transparent);
}

@media screen and (max-width: 800px) {
  .cta-card {
    padding: 4rem 1.5rem;
    border-radius: 1.5rem;
  }

  .cta-btn {
    padding: 1rem 1.2rem;
  }

  .cta-action {
    width: 100%;
  }

  .cta-action .btn {
    width: 100%;
    justify-content: center;
  }
}

/* PORTFOLIO PAGE ................................................................................. */
.page {
  color: var(--text-colour-primary);
  background: var(--background-colour);
}

.portfolio-hero {
  position: relative;
  overflow: hidden;
  min-height: 70vh;
  display: flex;
  align-items: center;
  padding: 4rem 1.5rem 3rem;
  background:
    radial-gradient(
      circle at top,
      color-mix(in srgb, var(--secondary-colour) 18%, transparent),
      transparent 45%
    ),
    var(--background-colour);
}

.portfolio-hero-content {
  position: relative;
  z-index: 1;
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}

.portfolio-hero h1 {
  font-size: clamp(2.4rem, 6vw, 4.8rem);
  line-height: 1.1;
  margin-bottom: 1rem;
}

.portfolio-hero-text {
  max-width: 680px;
  margin: 0 auto 2rem;
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-colour-secondary);
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.projects-section {
  padding: 2rem 1.5rem 5rem;
}

.projects-toolbar {
  max-width: 1200px;
  margin: 0 auto 2rem;
  padding: 0 1.5rem;
}

.bottom-banner-section {
  padding: 0 1.5rem 5rem;
}

.bottom-banner {
  max-width: 1100px;
  margin: 0 auto;
  background: var(--banner-footer-colour);
  color: white;
  border-radius: 2rem;
  padding: 3rem 1.5rem;
  text-align: center;
  box-shadow: var(--box-shadow);
}

.bottom-banner h2 {
  font-size: clamp(1.8rem, 4vw, 3rem);
  margin-bottom: 1rem;
}

.bottom-banner p {
  max-width: 700px;
  margin: 0 auto 1.5rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.92);
}

.card-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* MEDIA CARD / PORTFOLIO TILE ................................................................................. */

.media-card {
  position: relative;
  overflow: hidden;
  border-radius: 1.25rem;
  height: 440px;
  background: var(--section-background-colour);
  box-shadow: var(--box-shadow);
  cursor: pointer;
}

.media-card-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.media-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.75) 0%,
    rgba(0, 0, 0, 0.35) 40%,
    transparent 75%
  );
}

.media-card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1.5rem;
  color: white;
  width: 100%;
  z-index: 2;
}

.media-card-title {
  font-size: 1.4rem;
  margin-bottom: 0.35rem;
}

.media-card-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.9;
  margin-bottom: 0.9rem;
}

.media-card-link {
  color: white;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: opacity 0.2s ease;
}

.media-card-link:hover {
  opacity: 0.8;
}

.media-card:hover .media-card-image {
  transform: scale(1.05);
  transition: transform 0.35s ease;
}

.empty-state {
  max-width: 1200px;
  margin: 1.5rem auto 0;
  padding: 0 1.5rem;
  color: var(--text-colour-secondary);
  text-align: left;
}

@media (max-width: 1000px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 900px) {
  .portfolio-hero {
    min-height: 60vh;
  }
}

@media (max-width: 640px) {
  .portfolio-hero {
    padding: 3rem 1rem 2rem;
  }

  .projects-section,
  .bottom-banner-section,
  .card-grid,
  .projects-toolbar,
  .empty-state {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .card-grid {
    grid-template-columns: 1fr;
  }

  .hero-actions {
    flex-direction: column;
  }

  .hero-actions > * {
    width: 100%;
  }

  .filter-group {
    gap: 0.6rem;
  }

  .filter-chip {
    width: 100%;
  }
}

.svg-container {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: scale 0.3s ease;
}
</style>

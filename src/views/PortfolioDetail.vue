<script setup>
import GridPattern from '@/components/GridPattern.vue'
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { featuredProjects } from '@/data/projects'

const route = useRoute()

const project = computed(() =>
  featuredProjects.find((p) => p.slug === route.params.slug),
)
</script>

<template>
  <main class="page" v-if="project">
    <section class="page-hero case-study-hero">
      <GridPattern />
      <div class="page-hero-content case-study-hero-content">
        <p class="section-eyebrow">Portfolio</p>
        <h1>{{ project.title }}</h1>
        <p class="page-hero-text">
          {{ project.shortDescription }}
        </p>

        <div class="hero-actions">
          <RouterLink to="/portfolio" class="secondary-btn">Back to Portfolio</RouterLink>
          <RouterLink to="/contact" class="button-link">Start a Project</RouterLink>
        </div>
      </div>
    </section>

    <section class="case-study-section">
      <div class="case-study-layout">
        <div class="case-study-main">
          <div class="case-study-image-wrap">
            <img :src="project.image" :alt="project.title" class="case-study-image" />
          </div>

          <section class="case-study-content-block">
            <h2>Overview</h2>
            <p>{{ project.overview }}</p>
          </section>

          <section class="case-study-content-block">
            <h2>Challenge</h2>
            <p>{{ project.challenge }}</p>
          </section>

          <section class="case-study-content-block">
            <h2>Solution</h2>
            <p>{{ project.solution }}</p>
          </section>

          <section
            v-if="project.features && project.features.length"
            class="case-study-content-block"
          >
            <h2>Key Features</h2>
            <div class="detail-pill-list">
              <span v-for="feature in project.features" :key="feature" class="detail-pill">
                {{ feature }}
              </span>
            </div>
          </section>

          <section
            v-if="project.gallery && project.gallery.length"
            class="case-study-content-block"
          >
            <h2>Project Gallery</h2>
            <div class="detail-gallery-grid">
              <img
                v-for="(image, index) in project.gallery"
                :key="`${project.slug}-${index}`"
                :src="image"
                :alt="`${project.title} gallery image ${index + 1}`"
                class="detail-gallery-image"
              />
            </div>
          </section>
        </div>

        <aside class="case-study-sidebar">
          <div class="case-study-summary-card">
            <h3>Project Summary</h3>

            <div class="summary-item">
              <span class="summary-label">Project</span>
              <span class="summary-value">{{ project.title }}</span>
            </div>

            <div class="summary-item">
              <span class="summary-label">Type</span>
              <span class="summary-value">{{ project.type }}</span>
            </div>

            <div v-if="project.industry" class="summary-item">
              <span class="summary-label">Industry</span>
              <span class="summary-value">{{ project.industry }}</span>
            </div>

            <div v-if="project.client" class="summary-item">
              <span class="summary-label">Client</span>
              <span class="summary-value">{{ project.client }}</span>
            </div>

            <div
              v-if="project.services && project.services.length"
              class="summary-item summary-item-stack"
            >
              <span class="summary-label">Services</span>
              <div class="detail-pill-list">
                <span v-for="service in project.services" :key="service" class="detail-pill">
                  {{ service }}
                </span>
              </div>
            </div>

            <div
              v-if="project.techStack && project.techStack.length"
              class="summary-item summary-item-stack"
            >
              <span class="summary-label">Tech Stack</span>
              <div class="detail-pill-list">
                <span v-for="tech in project.techStack" :key="tech" class="detail-pill">
                  {{ tech }}
                </span>
              </div>
            </div>

            <RouterLink to="/contact" class="button-link case-study-sidebar-btn">
              Discuss a Similar Project
            </RouterLink>
          </div>
        </aside>
      </div>
    </section>

    <section class="bottom-banner-section">
      <div class="bottom-banner">
        <h2>Have a project in mind?</h2>
        <p>
          We help turn strong ideas into polished digital products with modern design and
          scalable development.
        </p>
        <RouterLink to="/contact" class="button-link bottom-banner-link">
          Talk to Our Experts
        </RouterLink>
      </div>
    </section>
  </main>

  <main v-else class="page">
    <section class="page-hero">
      <div class="page-hero-content">
        <h1>Project Not Found</h1>
        <p class="page-hero-text">
          The portfolio item you were looking for could not be found.
        </p>
        <div class="hero-actions">
          <RouterLink to="/portfolio" class="button-link">Back to Portfolio</RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

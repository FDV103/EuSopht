<script setup>
import GridPattern from '@/components/GridPattern.vue'
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { featuredProjects } from '@/data/projects'
import { Globe, Smartphone, Apple } from 'lucide-vue-next'

const route = useRoute()

const project = computed(() => featuredProjects.find((p) => p.slug === route.params.slug))

const getPlatformIcon = (platform) => {
  if (platform === 'ios') return Apple
  if (platform === 'android') return Smartphone
  return Globe
}
</script>

<template>
  <main class="page" v-if="project">
    <section class="page-hero case-study-hero">
      <GridPattern />

      <RouterLink to="/portfolio" class="back-link">
        <span aria-hidden="true">←</span>
        Back to Portfolio
      </RouterLink>

      <div class="page-hero-content case-study-hero-content">
        <div class="hero-badge">
          <span class="pulse-dot"></span>
          <p>{{ project.type }}</p>
        </div>
        <h1>{{ project.title }}</h1>
        <p class="page-hero-text">
          {{ project.shortDescription }}
        </p>
        <div v-if="project.projectLinks?.length" class="project-cta-group">
          <template v-for="link in project.projectLinks" :key="link.label">
            <a
              v-if="link.url && !link.isComingSoon"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="project-cta-btn"
            >
              <component :is="getPlatformIcon(link.platform)" :size="18" />
              {{ link.label }}
            </a>

            <span v-else class="project-cta-btn project-cta-btn-disabled">
              <component :is="getPlatformIcon(link.platform)" :size="18" />
              {{ link.label }}
            </span>
          </template>
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
            <ul class="feature-list">
              <li v-for="feature in project.features" :key="feature" class="feature-list-item">
                {{ feature }}
              </li>
            </ul>
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

    <section aria-labelledby="cta-title" class="cta-section">
      <div class="container">
        <div class="cta-card">
          <GridPattern />

          <div class="cta-content">
            <h2 id="cta-title">Inspired by this <span class="text-gradient"> Project?</span></h2>
            <p class="cta-text sub-text">
              Let's discuss how we can build something similar for your business. We turn ideas into
              scalable production-ready solutions.
            </p>
          </div>
          <div class="cta-action">
            <RouterLink class="cta-btn btn btn-big btn-round" to="/contact"
              >Start Your Project
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </main>

  <main v-else class="page">
    <section class="page-hero">
      <div class="page-hero-content">
        <h1>Project Not Found</h1>
        <p class="page-hero-text">The portfolio item you were looking for could not be found.</p>
        <div class="hero-actions">
          <RouterLink to="/portfolio" class="button-link">Back to Portfolio</RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
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

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 1rem;
  border: 1px solid var(--faint-border);
  border-radius: 50rem;
  font-family: var(--font-accent);
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.25rem;
  margin-bottom: 1.5rem;
  color: var(--primary-colour);
  background-color: color-mix(in srgb, var(--primary-colour) 8%, transparent);
}
.pulse-dot {
  position: relative;
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--primary-colour);
  border-radius: 50%;
}

.pulse-dot::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-colour);
  border-radius: 50%;
  z-index: -1;
  animation: sonarWave 1s infinite cubic-bezier(0, 0, 0.2, 0.1);
}

@keyframes sonarWave {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

/* BACK LINK (top-left overlay) */

.back-link {
  position: absolute;
  top: 1.25rem;
  left: 1.5rem;
  z-index: 5;

  display: inline-flex;
  align-items: center;
  gap: 0.45rem;

  text-decoration: none;
  font-family: var(--font-primary);
  font-weight: 600;

  color: var(--text-colour-secondary);
  transition: opacity 0.2s ease;

  /* 🔥 prevents layout influence */
  pointer-events: auto;
}

.back-link:hover {
  opacity: 0.75;
}

.back-link span {
  font-size: 1.2rem;
}

.feature-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.feature-list-item {
  position: relative;
  padding-left: 2rem;
  margin-bottom: 0.9rem;
  color: var(--text-colour-secondary);
  line-height: 1.8;
}

.feature-list-item:last-child {
  margin-bottom: 0;
}

.feature-list-item::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0.22rem;
  width: 1.1rem;
  height: 1.1rem;
  border: 1.5px solid var(--primary-colour);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-colour);
  font-size: 0.68rem;
  font-weight: 700;
  line-height: 1;
  background: transparent;
}

/* CASE STUDY / PORTFOLIO DETAIL ................................................................................. */
.page {
  background: var(--background-colour);
  color: var(--text-colour-primary);
}

.page-hero {
  position: relative;
  overflow: hidden;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1.5rem 3rem;
  background:
    radial-gradient(
      circle at top,
      color-mix(in srgb, var(--secondary-colour) 18%, transparent),
      transparent 45%
    ),
    var(--background-colour);
}

.page-hero-content {
  position: relative;
  z-index: 1;
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}

.page-hero h1,
.hero h1 {
  font-size: clamp(2.4rem, 6vw, 4.8rem);
  line-height: 1.1;
  margin-bottom: 1rem;
}

.page-hero-text,
.hero-text {
  max-width: 680px;
  margin: 0 auto 2rem;
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-colour-secondary);
}

.section-eyebrow {
  font-family: var(--font-accent);
  text-transform: uppercase;
  letter-spacing: 0.12rem;
  font-size: 0.8rem;
  color: var(--secondary-colour);
  margin-bottom: 1rem;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.button-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: var(--primary-colour);
  color: var(--background-colour);
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.25rem;
  font-family: var(--font-primary);
}

.button-link:hover {
  opacity: 0.9;
}

.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  border: 1px solid var(--primary-colour);
  border-radius: 0.25rem;
  color: var(--primary-colour);
  background: transparent;
  font-family: var(--font-primary);
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.secondary-btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.projects-section {
  padding: 2rem 1.5rem 5rem;
}

.card-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.media-card {
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem;
  min-height: 660px;
  background: var(--section-background-colour);
  box-shadow: var(--box-shadow);
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
    rgba(10, 16, 30, 0.82) 0%,
    rgba(10, 16, 30, 0.58) 28%,
    rgba(10, 16, 30, 0.18) 55%,
    rgba(10, 16, 30, 0.04) 75%,
    transparent 100%
  );
}

.media-card-content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  padding: 1.75rem 1.5rem 2rem;
  color: white;
}

.media-card-title {
  font-size: 2.1rem;
  line-height: 1.1;
  margin-bottom: 0.6rem;
}

.media-card-meta {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 1rem;
  color: #d9e6ff;
  margin-bottom: 1.5rem;
}

.media-card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  font-family: var(--font-primary);
}

.media-card-link:hover {
  opacity: 0.85;
}

.bottom-banner-section {
  padding: 0 1.5rem 5rem;
}

.bottom-banner {
  max-width: 1100px;
  margin: 0 auto;
  background: linear-gradient(135deg, var(--primary-colour), var(--secondary-colour));
  color: white;
  border-radius: 1.5rem;
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

.bottom-banner-link {
  background: var(--background-colour);
  color: var(--primary-colour);
}

/* CASE STUDY DETAIL */
.case-study-hero {
  min-height: 52vh;
}

.case-study-hero-content {
  max-width: 900px;
}

.case-study-section {
  padding: 3rem 1.5rem 5rem;
}

.case-study-layout {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(280px, 380px);
  gap: 2rem;
  align-items: start;
}

.case-study-main {
  min-width: 0;
}

.case-study-image-wrap {
  overflow: hidden;
  border-radius: 1.5rem;
  background: var(--section-background-colour);
  border: 1px solid var(--faint-border);
  box-shadow: var(--box-shadow);
  margin-bottom: 1.75rem;
}

.case-study-image {
  width: 100%;
  display: block;
  object-fit: cover;
}

.case-study-content-block {
  background: var(--section-background-colour);
  border: 1px solid var(--faint-border);
  border-radius: 1.25rem;
  box-shadow: var(--box-shadow);
  padding: 1.5rem;
  margin-bottom: 1.25rem;
}

.case-study-content-block h2 {
  margin-bottom: 0.9rem;
  font-size: 1.5rem;
}

.case-study-content-block p {
  color: var(--text-colour-secondary);
  line-height: 1.8;
}

.case-study-sidebar {
  position: sticky;
  top: 100px;
}

.case-study-summary-card {
  background: var(--section-background-colour);
  border: 1px solid var(--faint-border);
  border-radius: 1.25rem;
  box-shadow: var(--box-shadow);
  padding: 1.5rem;
}

.case-study-summary-card h3 {
  margin-bottom: 1.25rem;
  font-size: 1.3rem;
}

.summary-item {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 0.9rem 0;
  border-top: 1px solid var(--faint-border);
}

.summary-item:first-of-type {
  border-top: none;
  padding-top: 0;
}

.summary-label {
  font-family: var(--font-accent);
  font-size: 0.8rem;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
  color: var(--secondary-colour);
}

.summary-value {
  color: var(--text-colour-primary);
  line-height: 1.6;
}

.summary-item-stack {
  align-items: stretch;
}

.case-study-sidebar-btn {
  width: 100%;
  margin-top: 1.25rem;
}

.detail-pill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.25rem;
}

.detail-pill {
  font-size: 0.85rem;
  background: color-mix(in srgb, var(--primary-colour) 12%, transparent);
  color: var(--text-colour-primary);
  border: 1px solid var(--faint-border);
  border-radius: 999px;
  padding: 0.4rem 0.75rem;
}

.detail-gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
}

.detail-gallery-image {
  width: 100%;
  border-radius: 1rem;
  border: 1px solid var(--faint-border);
  display: block;
  box-shadow: var(--box-shadow);
}

@media (max-width: 1100px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 980px) {
  .case-study-layout {
    grid-template-columns: 1fr;
  }

  .case-study-sidebar {
    position: static;
  }
}

@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
  }

  .media-card {
    min-height: 560px;
  }
}

@media (max-width: 640px) {
  .page-hero {
    min-height: 50vh;
    padding: 3rem 1rem 2rem;
  }

  .projects-section,
  .bottom-banner-section,
  .case-study-section {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .hero-actions {
    flex-direction: column;
  }

  .hero-actions > * {
    width: 100%;
  }

  .media-card-title {
    font-size: 1.8rem;
  }

  .detail-gallery-grid {
    grid-template-columns: 1fr;
  }

  .case-study-content-block,
  .case-study-summary-card {
    padding: 1.2rem;
  }
}

/* --Project link button in header -- */

.project-cta-group {
  margin-top: 1.5rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
}

.project-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;

  background: transparent;
  color: var(--primary-colour);
  border: 1px solid var(--primary-colour);
  border-radius: 999px;

  padding: 0.75rem 1.1rem;
  font-family: var(--font-primary);
  font-size: 0.95rem;
  text-decoration: none;

  box-shadow: var(--box-shadow-light);

  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.project-cta-btn:hover {
  transform: translateY(-1px);
  background-color: color-mix(in srgb, var(--primary-colour) 40%, var(--secondary-colour));
  color: var(--background-colour);
}

.project-cta-btn svg {
  flex-shrink: 0;
}

.project-cta-btn-disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;

  background: transparent;
  color: var(--primary-colour);
  border: 1px solid var(--primary-colour);
  border-radius: 999px;
}
</style>

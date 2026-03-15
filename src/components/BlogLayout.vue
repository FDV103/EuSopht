<template>
  <div class="blog-layout-root">
    <!-- Page Header -->
    <section class="blog-header">
      <div class="blog-container">
        <RouterLink to="/blog" class="back-link">
          <span class="back-arrow">←</span>
          Back to Articles
        </RouterLink>
        <p class="blog-header-eyebrow">OUR THOUGHTS &amp; IDEAS</p>
        <h1 class="blog-header-title">The EuSopht Blog</h1>
        <p class="blog-header-sub">Insights on technology, automation, and the future of work.</p>
      </div>
    </section>

    <!-- Main layout -->
    <div class="layout-wrapper blog-container">
      <!-- Content column -->
      <main class="content-col">
        <slot />
      </main>

      <!-- Sidebar -->
      <aside class="sidebar-col">
        <LatestArticles />
        <NewsletterSubscribe />
      </aside>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import LatestArticles from './LatestArticles.vue'
import NewsletterSubscribe from './NewsletterSubscribe.vue'
</script>

<style scoped>
.blog-layout-root {
  background: var(--background-colour);
}

/* ===== Layout ===== */
.layout-wrapper {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 40px;
  align-items: start;
  padding-top: 48px;
  padding-bottom: 72px;
}

.content-col {
  min-width: 0; /* prevent overflow */
}

.sidebar-col {
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: sticky;
  top: 24px;
}

/* ===== Back Link ====== */
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-colour-primary);
  text-decoration: none;
  margin-bottom: 28px;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: var(--primary-colour);
}

.back-arrow {
  display: inline-block;
  transition: transform 0.2s ease;
  padding-bottom: 1px;
}

.back-link:hover .back-arrow {
  transform: translateX(-4px);
}

/* ===== Responsive ===== */
@media (max-width: 900px) {
  .layout-wrapper {
    grid-template-columns: 1fr;
  }
  .sidebar-col {
    position: static;
  }
  .page-header-title {
    font-size: 2rem;
  }
}
</style>

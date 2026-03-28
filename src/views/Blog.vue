<template>
  <div class="blog-root">
    <!-- ===== Page Header ===== -->
    <div class="blog-header">
      <div class="blog-container bottom-border">
        <p class="blog-header-eyebrow">OUR THOUGHTS &amp; IDEAS</p>
        <h1 class="blog-header-title">The EuSopht Blog</h1>
        <p class="blog-header-sub">Insights on technology, automation, and the future of work.</p>
      </div>
    </div>

    <div class="blog-section">
      <div class="blog-container bottom-border">
        <!-- ===== Featured Post ===== -->
        <RouterLink :to="`/blog/${featuredPost.slug}`" class="featured-card">
          <div class="featured-img-wrap">
            <img :src="featuredPost.image" :alt="featuredPost.title" class="featured-img" />
          </div>
          <div class="featured-body">
            <div class="featured-meta">
              <span class="featured-badge">{{ featuredPost.category }}</span>
              <span class="featured-date">{{ featuredPost.date }}</span>
            </div>
            <h2 class="featured-title">{{ featuredPost.title }}</h2>
            <span class="featured-read-more">Read Article ›</span>
          </div>
        </RouterLink>
      </div>
      <div class="blog-container bottom-border">
        <!-- ===== Filter Bar ===== -->
        <div class="filter-toolbar-header">
          <h2>Latest Articles</h2>
        </div>

        <div class="filter-group" role="group" aria-label="Filter blogs by category">
          <button
            v-for="cat in categories"
            :key="cat"
            class="filter-chip"
            :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- ===== Posts Grid ===== -->
        <div class="blog-grid">
          <RouterLink
            v-for="post in filteredPosts"
            :key="post.id"
            :to="`/blog/${post.slug}`"
            class="blog-card"
          >
            <div class="card-img-wrap">
              <img :src="post.image" :alt="post.title" class="card-img" />
              <span class="card-badge">{{ post.category }}</span>
            </div>
            <div class="card-body">
              <div class="card-meta">
                <svg
                  class="meta-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {{ post.date }}
              </div>
              <h2 class="card-title">{{ post.title }}</h2>
              <div class="card-divider"></div>
              <p class="card-excerpt">{{ post.excerpt }}</p>
              <span class="card-read-more">Read Article ›</span>
            </div>
          </RouterLink>
        </div>

        <!-- Empty state -->
        <p v-if="filteredPosts.length === 0" class="empty-state">
          No posts found in this category.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { posts } from '../data/posts.js'

// Most recent post = highest id
const sortedPosts = [...posts].sort((a, b) => b.id - a.id)
const featuredPost = sortedPosts[0]
const remainingPosts = sortedPosts.slice(1)

// Build category list: 'All' + unique categories from remaining posts
const uniqueCategories = [...new Set(remainingPosts.map((p) => p.category))]
const categories = ['All', ...uniqueCategories]

const activeCategory = ref('All')

const filteredPosts = computed(() => {
  if (activeCategory.value === 'All') return remainingPosts
  return remainingPosts.filter((p) => p.category === activeCategory.value)
})
</script>

<style scoped>
/* ===== Section wrapper ===== */
.blog-section {
  background: var(--background-colour);
  padding: 52px 0px 80px 0px;
}

/* ===== Featured Card ===== */
.featured-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--background-colour);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  text-decoration: none;
  color: inherit;
  margin-bottom: 64px;
  transition:
    box-shadow var(--transition),
    transform var(--transition);
}
.featured-card:hover {
  box-shadow: var(--shadow-lg);
  color: var(--primary-colour);
}

.featured-img-wrap {
  aspect-ratio: 4/3;
  overflow: hidden;
  background: var(--faint-border);
}
.featured-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.featured-card:hover .featured-img {
  transform: scale(1.03);
}

.featured-body {
  padding: 40px 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
}

.featured-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.featured-badge {
  background: var(--primary-colour);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 5px 12px;
  border-radius: 4px;
}

.featured-date {
  font-size: 0.85rem;
  color: var(--text-colour-muted);
}

.featured-title {
  font-family: var(--font-primary);
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1.25;
}

.featured-read-more {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-colour-primary);
  border-bottom: 2px solid #0f1f2e;
  padding-bottom: 2px;
  width: fit-content;
  transition:
    color var(--transition),
    border-color var(--transition);
  text-transform: uppercase;
}
.dark .featured-read-more {
  border-bottom: 2px solid #fff;
}

.featured-card:hover .featured-read-more {
  color: var(--primary-colour);
  border-color: var(--primary-colour);
}

/* ===== Grid ===== */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 40px;
  margin-top: 40px;
}

@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
}

/* ===== Blog Card ===== */
.blog-card {
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  transition:
    transform var(--transition),
    box-shadow var(--transition);
}
.blog-card:hover {
  box-shadow: var(--shadow-md);
  color: var(--primary-colour);
}

.card-img-wrap {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
  background: var(--faint-border);
}
.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}
.blog-card:hover .card-img {
  transform: scale(1.04);
}

.card-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--primary-colour);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 3px 9px;
  border-radius: 3px;
}

.card-body {
  padding: 20px 22px 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
  color: var(--text-colour-muted);
  margin-bottom: 10px;
}
.meta-icon {
  color: var(--text-colour-muted);
}

.card-title {
  /*font-family: var(--font-body);*/
  font-size: 0.97rem;
  font-weight: 700;
  line-height: 1.45;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-divider {
  width: 36px;
  height: 3px;
  background: var(--primary-colour);
  border-radius: 2px;
  margin-bottom: 12px;
}

.card-excerpt {
  font-size: 0.86rem;
  line-height: 1.6;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 16px;
}

.card-read-more {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  border-bottom: 2px solid #0f1f2e;
  width: fit-content;
  transition:
    color var(--transition),
    border-color var(--transition);
}

.dark .card-read-more {
  border-bottom: 2px solid #fff;
}

.blog-card:hover .card-read-more {
  color: var(--primary-colour);
  border-color: var(--primary-colour);
}

/* ===== Empty state ===== */
.empty-state {
  text-align: center;
  padding: 48px 0;
  color: var(--text-colour-primary);
  font-size: 0.95rem;
}

/* ===== Responsive: stack featured on mobile ===== */
@media (max-width: 768px) {
  .featured-card {
    grid-template-columns: 1fr;
  }
  .featured-img-wrap {
    aspect-ratio: 16/9;
  }
  .featured-body {
    padding: 28px 24px;
  }
  .featured-title {
    font-size: 1.35rem;
  }
  .filter-bar {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

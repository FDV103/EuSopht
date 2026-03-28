<template>
  <div v-if="post">
    <BlogLayout :title="post.title">
      <!-- Article content -->
      <article class="post-article">
        <!-- Meta row -->
        <div class="post-meta">
          <span class="post-badge">{{ post.category }}</span>
          <span class="post-date">
            <svg
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
          </span>
          <span class="post-author">
            Author: <strong>{{ post.author }}</strong>
          </span>
        </div>

        <!-- Title -->
        <h1 class="post-title">{{ post.title }}</h1>

        <div class="post-divider"></div>

        <!-- Body -->
        <!-- Featured image -->
        <div class="post-hero-img">
          <img :src="post.image" :alt="post.title" />
        </div>
        <div class="post-body" v-html="post.content"></div>

        <!-- Navigation -->
        <div class="post-nav">
          <RouterLink
            v-if="prevPost"
            :to="`/blog/${prevPost.slug}`"
            class="post-nav-link post-nav-prev"
          >
            <span class="nav-label">← Previous</span>
            <span class="nav-title">{{ prevPost.title }}</span>
          </RouterLink>
          <RouterLink
            v-if="nextPost"
            :to="`/blog/${nextPost.slug}`"
            class="post-nav-link post-nav-next"
          >
            <span class="nav-label">Next →</span>
            <span class="nav-title">{{ nextPost.title }}</span>
          </RouterLink>
        </div>

        <!-- Call to action banner -->
        <CallToAction />
      </article>
    </BlogLayout>
  </div>

  <!-- 404 state -->
  <div v-else class="not-found">
    <h2>Post not found.</h2>
    <RouterLink to="/blog">← Back to Blog</RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import BlogLayout from '../components/BlogLayout.vue'
import CallToAction from '../components/CallToAction.vue'
import { getPostBySlug, posts } from '../data/posts.js'

const props = defineProps({
  slug: { type: String, required: true },
})

const post = computed(() => getPostBySlug(props.slug))

const currentIndex = computed(() => posts.findIndex((p) => String(p.slug) === String(props.slug)))

const prevPost = computed(() => (currentIndex.value > 0 ? posts[currentIndex.value - 1] : null))

const nextPost = computed(() =>
  currentIndex.value < posts.length - 1 ? posts[currentIndex.value + 1] : null,
)
</script>

<style scoped>
/* Featured image */
.post-hero-img {
  width: 100%;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: 24px;
}
.post-hero-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-img {
  max-width: 1280px;
}

/* Meta */
.post-meta {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.post-badge {
  background: var(--secondary-colour);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  padding: 4px 10px;
  border-radius: 3px;
}

.post-date {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.83rem;
  color: var(--text-colour-muted);
}

.post-author {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.83rem;
  color: var(--text-colour-muted);
}

/* Title */
.post-title {
  font-family: var(--font-primary);
  font-size: 2rem;
  font-weight: 400;
  color: var(--text-colour-primary);
  line-height: 1.3;
  margin-bottom: 18px;
}

.post-divider {
  width: 50px;
  height: 3px;
  background: var(--primary-colour);
  border-radius: 2px;
  margin-bottom: 28px;
}

/* Body prose */
.post-body {
  font-size: 0.97rem;
  line-height: 1.85;
  color: var(--text-colour-primary);
}

.post-body :deep(h2) {
  font-family: var(--font-primary);
  font-size: 1.45rem;
  color: var(--text-colour-primary);
  margin: 32px 0 12px;
  font-weight: 400;
}

.post-body :deep(h3) {
  font-family: var(--font-primary);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-colour-primary);
  margin: 24px 0 8px;
}

.post-body :deep(p) {
  margin-bottom: 18px;
}

.post-body :deep(ul),
.post-body :deep(ol) {
  padding-left: 22px;
  margin-bottom: 18px;
}

.post-body :deep(li) {
  margin-bottom: 6px;
}

.post-body :deep(strong) {
  font-weight: 600;
  color: var(--text-colour-primary);
}

.post-body :deep(code) {
  background: #f1f5f9;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 0.88em;
  font-family: 'Fira Code', 'Cascadia Code', monospace;
  color: var(---secondary-colour);
}

.post-body :deep(blockquote) {
  border-left: 4px solid var(--primary-colour);
  padding: 12px 20px;
  background: var(--primary-colour-lt);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  margin: 20px 0;
  font-style: italic;
  color: var(--text-colour-primary);
}

.post-body :deep(img) {
  width: 100%;
  height: auto;
  border-radius: var(--radius-md);
  margin: 24px 0;
  display: block;
}

/* Prev / Next nav */
.post-nav {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid var(--faint-border);
  flex-wrap: wrap;
}

.post-nav-link {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 48%;
  text-decoration: none;
  color: inherit;
  transition: color var(--transition);
}
.post-nav-link:hover {
  color: var(--text-colour-hover);
}

.post-nav-next {
  text-align: right;
  margin-left: auto;
}

.nav-label {
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--primary-colour);
}

.nav-title {
  font-size: 0.88rem;
  font-weight: 600;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Not found */
.not-found {
  text-align: center;
  padding: 80px 24px;
}
.not-found h2 {
  margin-bottom: 16px;
}
.not-found a {
  color: var(--primary-colour);
  font-weight: 600;
}
</style>

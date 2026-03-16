<template>
  <aside class="sidebar-widget latest-articles">
    <h3 class="widget-title">
      <span class="widget-title-bar"></span>
      Latest Articles
    </h3>

    <ul class="article-list">
      <li v-for="post in latestPosts" :key="post.id" class="article-item">
        <RouterLink :to="`/blog/${post.slug}`" class="article-link">
          <div class="article-thumb">
            <img :src="post.image" :alt="post.title" class="article-img" />
          </div>
          <div class="article-info">
            <p class="article-title">{{ post.title }}</p>
            <span class="article-date">{{ post.date }}</span>
          </div>
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { getLatestPosts } from '../data/posts.js'

const latestPosts = getLatestPosts(3)
</script>

<style scoped>
.sidebar-widget {
  background: var(--background-colour);
  border-radius: var(--radius-md);
  padding: 24px;
  box-shadow: var(--shadow-md);
}

/* Title */
.widget-title {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-dark);
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--color-border);
}

.widget-title-bar {
  display: inline-block;
  width: 4px;
  height: 18px;
  background: var(--color-primary);
  border-radius: 2px;
  flex-shrink: 0;
}

/* List */
.article-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.article-item {
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 16px;
}
.article-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.article-link {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  text-decoration: none;
  color: inherit;
  transition: opacity var(--transition);
}
.article-link:hover {
  opacity: 0.78;
}

/* Thumbnail */
.article-thumb {
  width: 72px;
  height: 54px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  flex-shrink: 0;
  background: var(--color-border);
}

.article-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Info */
.article-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.article-title {
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-dark);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-date {
  font-size: 0.75rem;
  color: var(--color-muted);
}
</style>

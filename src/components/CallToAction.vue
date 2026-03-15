<template>
  <div class="cta-banner">
    <div class="cta-text">
      <h3 class="cta-heading">Ready to transform your business?</h3>
      <p class="cta-sub">
        Let's discuss how we can help you achieve your goals with our expert solutions.
      </p>
    </div>
    <button><a href="/contact" class="cta-btn">Get in Touch</a></button>
  </div>
</template>

<style scoped>
.cta-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: #e8f4f8;
  border-radius: var(--radius-md);
  padding: 24px 32px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.dark .cta-banner {
  background: #0d2d35;
}

.cta-text {
  flex: 1;
  min-width: 200px;
}

.cta-heading {
  font-family: var(--font-primary);
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.cta-sub {
  font-size: 0.88rem;
  color: var(--text-colour-muted);
  line-height: 1.5;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
  text-decoration: none;
}
</style>

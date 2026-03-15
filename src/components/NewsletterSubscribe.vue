<template>
  <aside class="sidebar-widget newsletter-widget">
    <h3 class="widget-title">Subscribe to our newsletter</h3>
    <p class="widget-sub">Get the latest updates delivered to your inbox.</p>

    <form class="newsletter-form" @submit.prevent="handleSubmit" novalidate>
      <input
        v-model="email"
        type="email"
        class="newsletter-input"
        placeholder="Enter your email"
        required
        aria-label="Email address"
      />
      <button type="submit" class="newsletter-btn">Subscribe Now</button>
    </form>

    <p v-if="submitted" class="newsletter-success">✓ Thank you for subscribing!</p>
    <p v-if="error" class="newsletter-error">Please enter a valid email address.</p>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const submitted = ref(false)
const error = ref(false)

function handleSubmit() {
  error.value = false
  submitted.value = false

  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
  if (!valid) {
    error.value = true
    return
  }

  // TODO: wire up to actual newsletter API
  console.log('Newsletter subscription:', email.value)
  submitted.value = true
  email.value = ''
}
</script>

<style scoped>
.newsletter-widget {
  background: #111827;
  border-radius: var(--radius-md);
  padding: 28px 24px;
  box-shadow: var(--shadow-md);
}

.widget-title {
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #fff;
}

.widget-sub {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  line-height: 1.5;
}

/* Form */
.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.newsletter-input {
  width: 100%;
  padding: 12px 14px;
  border-radius: var(--radius-sm);
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font-family: var(--font-primary);
  font-size: 0.88rem;
  outline: none;
  transition: border-color var(--transition);
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.45);
}

.newsletter-input:focus {
  border-color: var(--primary-colour);
}

.newsletter-btn {
  width: 100%;
  padding: 13px;
  background: var(--primary-colour);
  color: #fff;
  font-family: var(--font-primary);
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background var(--transition);
}
.newsletter-btn:hover {
  background: var(--secondary-colour);
}

/* Feedback */
.newsletter-success {
  margin-top: 10px;
  font-size: 0.85rem;
  color: #6ee7b7;
}
.newsletter-error {
  margin-top: 10px;
  font-size: 0.85rem;
  color: #fca5a5;
}
</style>

<script setup>
import GridPattern from '@/components/GridPattern.vue'
import ContactForm from '@/components/ContactForm.vue'
</script>

<template>
  <section class="container">
    <GridPattern />
    <h1>Get <span class="text-gradient"> In Touch</span></h1>
    <p>Ready to explore what automation can do for your business?</p>
    <p>Send us a message for a personalized walkthrough.</p>
  </section>
  <section class="form-container">
    <ContactForm />
  </section>
</template>

<style scoped>
.container {
  display: grid;
  text-align: center;
  gap: 2rem;
  padding-top: 9rem;
  padding-bottom: 5rem;
}

.container p {
  font-family: var(--font-accent);
  font-size: 1.1rem;
  color: var(--text-colour-secondary);
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

.form-container {
  padding-bottom: 5rem;
}

h1 {
  font-size: clamp(2.25rem, 4vw + 1rem, 4.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  letter-spacing: -0.24rem;
}
</style>

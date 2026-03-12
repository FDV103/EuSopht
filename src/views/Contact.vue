<script setup>
import GridPattern from '@/components/GridPattern.vue'
import ContactForm from '@/components/ContactForm.vue'
</script>

<template>
  <section class="container">
    <GridPattern />
    <h1>Get In Touch</h1>
    <p>Ready to explore what automation can do for your business?</p>
    <p>Send us a message for a personalized walkthrough.</p>
  </section>
  <ContactForm />
</template>

<style scoped>
.container {
  display: grid;
  text-align: center;
  gap: 2rem;
  margin: 2rem;
}

.container p {
  font-family: var(--font-accent);
  font-size: 1.1rem;
  color: var(--text-colour-secondary);
}
</style>

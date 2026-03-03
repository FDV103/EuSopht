<!-- Todo: Submit logic when client responds. Will need to validate input fields.
  Need either a custom modal or use a package for error handling popups -->

<script setup>
import { reactive } from 'vue'
import GridPattern from '@/components/GridPattern.vue'

const form = reactive({
  fullName: '',
  email: '',
  company: '',
  phoneNumber: '',
  message: '',
})

const handleSubmit = () => {}
</script>

<template>
  <section class="container">
    <GridPattern />
    <h1>Get In Touch</h1>
    <p>Ready to explore what automation can do for your business?</p>
    <p>Send us a message for a personalized walkthrough.</p>
  </section>
  <form @submit.prevent="handleSubmit">
    <h2>Contact Information</h2>
    <label for="fullName">Full Name</label>
    <input id="fullName" type="text" v-model="form.fullName" placeholder="John Doe" />
    <label for="email">Email</label>
    <input id="email" type="email" v-model="form.email" placeholder="john@example.com" />
    <label for="company">Company (Optional)</label>
    <input id="company" type="text" v-model="form.company" placeholder="Company Name" />
    <label for="phoneNumber">Phone Number (Optional)</label>
    <input id="phoneNumber" type="tel" v-model="form.phoneNumber" placeholder="+1 (555) 000-0000" />
    <label for="message">Message (Optional)</label>
    <textarea
      id="message"
      v-model="form.message"
      placeholder="Tell us about your automation needs..."
    ></textarea>
    <button type="submit">Book Consultation</button>
  </form>
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

form {
  display: grid;
  gap: 0.5rem;
  width: min(600px, 100% - 2rem);
  padding: 1rem;
  margin: 1rem auto;
  border: 2px solid var(--faint-border);
  border-radius: 0.25rem;
}

form input,
textarea {
  border: 2px solid var(--faint-border);
  outline: none;
  border-radius: 0.25rem;
  padding: 1rem 0.5rem;
}

form input:focus,
textarea:focus {
  border-color: var(--primary-colour);
}

textarea {
  resize: none;
}
</style>

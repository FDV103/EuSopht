<!-- Todo: Get backend url from client, test, improve input validation, add success message -->
<script setup>
import { reactive } from 'vue'
import GridPattern from '@/components/GridPattern.vue'

const form = reactive({
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
})

const handleSubmit = async () => {
  if (form.name.trim().length <= 1) {
    errors.name = 'Name must be at least 2 characters'
    return
  }
  if (!form.email) {
    errors.email = 'Please enter a valid email address'
    return
  }

  try {
    console.log(form.name)
    console.log(form.name.trim().length)
    await fetch('URL_from_client', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
  } catch (error) {
    console.error('Form failed to submit:', error)
  }
}
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
    <label for="name">Full Name</label>
    <input id="name" type="text" v-model="form.name" placeholder="John Doe" />
    <p v-if="errors.name">{{ errors.name }}</p>
    <label for="email">Email</label>
    <input id="email" type="email" v-model="form.email" placeholder="john@example.com" />
    <p v-if="errors.email">{{ errors.email }}</p>
    <label for="company">Company (Optional)</label>
    <input id="company" type="text" v-model="form.company" placeholder="Company Name" />
    <label for="phone">Phone Number (Optional)</label>
    <input id="phone" type="tel" v-model="form.phone" placeholder="+1 (555) 000-0000" />
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
  width: min(500px, 100% - 2rem);
  min-width: 300px;
  padding: 1rem;
  margin: 1rem auto;
  border: 2px solid var(--faint-border);
  border-radius: 0.25rem;
  box-shadow: var(--box-shadow);
}

form p {
  color: red;
}

form input,
textarea {
  border: 1px solid var(--faint-border);
  outline: none;
  border-radius: 0.25rem;
  padding: 1rem 0.5rem;
}

form input:focus,
textarea:focus {
  border: 3px solid var(--primary-colour);
}

textarea {
  resize: none;
}
</style>

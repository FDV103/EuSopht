<script setup>
import { reactive, ref } from 'vue'

const props = defineProps({
  submitText: { type: String, default: 'Book Consultation' },
})

const submitted = ref(false)

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
  errors.name = ''
  errors.email = ''

  let valid = true

  if (form.name.trim().length <= 1) {
    errors.name = 'Name must be at least 2 characters'
    valid = false
  }
  if (!form.email) {
    errors.email = 'Please enter a valid email address'
    valid = false
  }

  if (!valid) return

  try {
    await fetch('URL_from_client', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    submitted.value = true
    form.name = ''
    form.email = ''
    form.company = ''
    form.phone = ''
    form.message = ''
  } catch (error) {
    console.error('Form failed to submit:', error)
  }
}
</script>

<template>
  <div v-if="submitted" class="success-msg">Message sent! We'll be in touch shortly.</div>
  <form v-else @submit.prevent="handleSubmit">
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
    <button type="submit">{{ props.submitText }}</button>
  </form>
</template>

<style scoped>
.success-msg {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: var(--primary-colour);
  border: 2px solid var(--primary-colour);
  border-radius: 0.25rem;
  width: min(500px, 100% - 2rem);
  margin: 1rem auto;
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

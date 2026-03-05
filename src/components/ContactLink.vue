<!-- Link to contact page styled like a button. Text is a prop, add a class to customize it for your page.
Usage: <ContactLink text="Text for the button" />  -->
<script setup>
const props = defineProps({
  text: { type: String, default: 'Get Started' },
})
</script>

<template>
  <RouterLink to="/contact" class="contact-link">{{ props.text }}</RouterLink>
</template>

<style scoped>
.contact-link {
  background-color: var(--primary-colour);
  color: var(--background-colour);
  font-weight: 700;
  text-decoration: none;
  padding: 1rem;
  border-radius: 1rem;
  transition: all 0.3s ease;
  display: inline-block;
}

.contact-link:hover {
  background-color: var(--secondary-colour);
  color: var(--background-colour);
}
</style>

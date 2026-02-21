<script setup>
const emit = defineEmits(['toggleTheme'])
</script>

<!-- Todo: Add hamburger icon, add logo from client, open/close toggle, @click on links, style/animate -->
<template>
  <nav>
    <div>
      <div>EuSopht</div>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
        <li><RouterLink to="/client">Client</RouterLink></li>
        <li><RouterLink to="/faq">FAQ</RouterLink></li>
        <li><RouterLink to="/blog">Blog</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
      <button @click="emit('toggleTheme')">🔦</button>
    </div>
  </nav>
</template>

<style scoped></style>

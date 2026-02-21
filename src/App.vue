<script setup>
import Navbar from './components/Navbar.vue'

const toggleTheme = () => {
  document.body.classList.toggle('dark')
}
</script>

<template>
  <Navbar @toggle-theme="toggleTheme" />
  <RouterView />
</template>

<style scoped></style>

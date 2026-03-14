<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { ref } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.body.classList.toggle('dark')
}
</script>

<template>
  <Navbar @toggle-theme="toggleTheme" :isDark="isDark" />
  <RouterView />
  <Footer />
</template>

<style scoped></style>

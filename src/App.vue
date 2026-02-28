<script setup>
import Navbar from './components/Navbar.vue'
import { ref } from 'vue';

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.body.classList.toggle('dark')
}
</script>

<template>
  <Navbar @toggle-theme="toggleTheme" :isDark="isDark" />
  <RouterView />
</template>

<style scoped></style>

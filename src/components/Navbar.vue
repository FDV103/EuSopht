<script setup>
import Eusopht_logo from '@/assets/Eusopht_logo-white.png'
import { ref } from 'vue';

const isOpen = ref(false);
const props = defineProps(['isDark'])
const emit = defineEmits(['toggleTheme'])

const toggleIsOpen = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <nav>
    <div class="nav-bar-container">
      <button aria-label="Menu" aria-expanded="false" class="hamburger-btn" @click="toggleIsOpen">
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
      </button>
      <img :src="Eusopht_logo" alt="EuSopht Logo" class="nav-logo"/>
      <button @click="emit('toggleTheme')" class="theme-btn">
        {{ props.isDark ? '☀️' : '🔦' }}
      </button>
    </div>
    <ul v-show="isOpen">
      <li @click="toggleIsOpen"><RouterLink to="/">Home</RouterLink></li>
      <li @click="toggleIsOpen"><RouterLink to="/portfolio">Portfolio</RouterLink></li>
      <li @click="toggleIsOpen"><RouterLink to="/client">Client</RouterLink></li>
      <li @click="toggleIsOpen"><RouterLink to="/faq">FAQ</RouterLink></li>
      <li @click="toggleIsOpen"><RouterLink to="/blog">Blog</RouterLink></li>
      <li @click="toggleIsOpen"><RouterLink to="/contact">Contact</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped>

.nav-bar-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;

}

.nav-logo {
  height: 50px;
}

.theme-btn {
  margin-left: auto;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
}

.hamburger-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
}

.hamburger-btn span {
  display: block;
  width: 28px;
  height: 3px;
  background: white;
  border-radius: 3px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hamburger-btn span:nth-child(1).open {
  transform: translateY(8px) rotate(45deg);
}

.hamburger-btn span:nth-child(2).open {
  opacity: 0;
}

.hamburger-btn span:nth-child(3).open {
  transform: translateY(-8px) rotate(-45deg);
}

ul {
  list-style: none;
  padding: 0.5rem 1.5rem 1rem;
}

li {
  padding: 0.5rem 0;
}

li a {
  text-decoration: none;
  color: white;
  font-size: 1.25rem;
}

li a:hover {
  opacity: 0.8;
  border-bottom: 2px solid white;
}

</style>

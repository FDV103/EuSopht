<script setup>
import Eusopht_logo from '@/assets/Eusopht_logo-white.png'
import { Sun, Moon } from 'lucide-vue-next'
import { ref } from 'vue'

const isOpen = ref(false)
const props = defineProps(['isDark'])
const emit = defineEmits(['toggleTheme'])

const toggleIsOpen = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <nav>
    <div class="nav-bar-container">
      <button
        aria-label="Menu"
        :aria-expanded="isOpen.toString()"
        class="hamburger-btn"
        @click="toggleIsOpen"
      >
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
      </button>
      <RouterLink to="/">
        <img :src="Eusopht_logo" alt="EuSopht Logo" class="nav-logo" />
      </RouterLink>
      <button
        @click="emit('toggleTheme')"
        class="theme-btn"
        :title="props.isDark ? 'Switch to light theme ' : 'Switch to dark theme'"
      >
        <Sun :size="32" color="orange" v-if="props.isDark" />
        <Moon :size="32" color="white" v-else />
      </button>
    </div>
    <ul v-show="isOpen">
      <li @click="toggleIsOpen"><RouterLink to="/">Home</RouterLink></li>
      <li @click="toggleIsOpen"><RouterLink to="/portfolio">Portfolio</RouterLink></li>
      <li @click="toggleIsOpen"><RouterLink to="/client">Client</RouterLink></li>
      <li @click="toggleIsOpen"><RouterLink to="/faq">FAQ</RouterLink></li>
      <li @click="toggleIsOpen"><RouterLink to="/blog">Blog</RouterLink></li>
      <li @click="toggleIsOpen">
        <RouterLink to="/contact" class="contact-link">Get Started</RouterLink>
      </li>
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
  height: 40px;
}

.theme-btn {
  margin-left: auto;
  background: none;
  cursor: pointer;
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
  background: var(--background-colour);
  border-radius: 3px;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
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
  color: var(--background-colour);
  font-size: 1.25rem;
}

li a:hover {
  opacity: 0.8;
  border-bottom: 2px solid var(--background-colour);
}

.contact-link {
  border: 2px solid var(--secondary-colour);
  background-color: var(--primary-colour);
  color: var(--background-colour);
  font-weight: 700;
  text-decoration: none;
  padding: 1rem;
  border-radius: 1rem;
  transition: all 0.3s ease;
  display: inline-block;
  width: 50%;
  text-align: center;
}

.contact-link:hover {
  border: 2px solid var(--primary-colour);
  background-color: var(--secondary-colour);
  color: var(--background-colour);
}

/* Bumps down font size when menu is open on mobile */
@media (max-width: 480px) {
  li a {
    font-size: 1rem;
  }
}
</style>

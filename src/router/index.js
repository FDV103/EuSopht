import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Portfolio from '@/views/Portfolio.vue'
import Client from '@/views/Client.vue'
import Faq from '@/views/Faq.vue'
import Blog from '@/views/Blog.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/client', component: Client },
    { path: '/faq', component: Faq },
    { path: '/blog', component: Blog },
    { path: '/contact', component: Contact },
  ],
})

export default router

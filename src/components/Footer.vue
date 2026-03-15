<script setup>
import EusophtLogo from '@/assets/Eusopht_logo-white.png'
import { Star, Mail, Phone, MapPin, ArrowUp } from 'lucide-vue-next'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const services = [
  'Custom Product Development',
  'Mobile & Web Experience',
  'Legacy Modernization',
  'Private AI Infrastructure',
]
</script>

<template>
  <footer>
    <div class="footer-container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img :src="EusophtLogo" alt="EuSopht" class="footer-logo" />
          <p>
            <strong>EuSopht</strong> delivers enterprise-grade digital software solutions built for
            scale and secured by design.
          </p>
          <p>
            We architect, develop, and manage custom software platforms and proprietary digital
            ecosystems for organizations requiring high availability, strict data sovereignty, and
            scalable enterprise infrastructure.
          </p>
          <div class="social-links">
            <a
              href="https://www.linkedin.com/company/eusopht/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/eusopht/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
            <a
              href="https://www.trustpilot.com/review/eusopht.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Trustpilot"
            >
              <Star :size="22" />
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li v-for="service in services" :key="service">{{ service }}</li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Contact</h4>
          <ul class="contact-list">
            <li>
              <Mail :size="16" class="contact-icon" />
              <a href="mailto:contact@eusopht.com">contact@eusopht.com</a>
            </li>
            <li>
              <Phone :size="16" class="contact-icon" />
              <a href="tel:+923002259802">+92 300-225-9802</a>
            </li>
            <li>
              <MapPin :size="16" class="contact-icon" />
              <a
                href="https://www.google.com/maps?q=EuSopht+B-153,+Block+6,+Gulshan-e-Iqbal,+Karachi+75350+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
              >
                EuSopht B-153, Block 6, Gulshan-e-Iqbal Karachi – 75350 Pakistan
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2026 EuSopht. All rights reserved.</p>
        <button @click="scrollToTop" aria-label="Scroll to top" class="scroll-top-btn">
          <ArrowUp :size="18" />
        </button>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: var(--nav-bg-colour);
  color: var(--text-colour-primary);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 1.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-logo {
  height: 48px;
  width: auto;
  object-fit: contain;
  align-self: flex-start;
}

.footer-brand p {
  font-size: 0.9rem;
  line-height: 1.7;
  font-family: var(--font-accent);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.social-links a {
  opacity: 0.8;
  transition: all 0.2s ease;
  color: var(--text-colour-primary);
}

.social-links a:hover {
  opacity: 1;
  color: var(--secondary-colour);
}

.footer-col h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: var(--font-primary);
}

.footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer-col li {
  font-size: 0.9rem;
  font-family: var(--font-accent);
}

.footer-col a {
  text-decoration: none;
  font-size: 0.9rem;
  color: var(--text-colour-primary);
  transition: color 0.2s ease;
  font-family: var(--font-accent);
}

.footer-col a:hover {
  color: var(--text-colour-secondary);
}

.contact-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.contact-icon {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--text-colour-primary);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--primary-colour);
  padding-top: 1.5rem;
  font-size: 0.85rem;
  opacity: 0.8;
}

.scroll-top-btn {
  padding: 0.5rem;
  border-radius: 50%;
  background: var(--text-colour-primary);
  color: var(--background-colour);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-top-btn:hover {
  background: var(--primary-colour);
  opacity: 1;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>

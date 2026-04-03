<script setup>
import GridPattern from '@/components/GridPattern.vue'
import ContactForm from '@/components/ContactForm.vue'
import { ref, onMounted, computed } from 'vue'
import { featuredProjects } from '@/data/projects'
import { reviewsList } from '@/data/reviews'
import { Globe, Smartphone } from 'lucide-vue-next'

const transactionVolume = ref(0)
const uptime = ref(0)

const impactSectionRef = ref(null)

const animateValue = (targetRef, start, end, duration) => {
  let startTimestamp = null

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)

    const easyOut = 1 - Math.pow(1 - progress, 4)
    const currentValue = start + (end - start) * easyOut

    if (end % 1 !== 0) {
      targetRef.value = currentValue.toFixed(2)
    } else {
      targetRef.value = Math.floor(currentValue)
    }
    if (progress < 1) {
      window.requestAnimationFrame(step)
    } else {
      targetRef.value = end
    }
  }

  window.requestAnimationFrame(step)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateValue(transactionVolume, 0, 100, 2500)
        animateValue(uptime, 0, 99.99, 2500)

        observer.disconnect()
      }
    },
    { threshold: 0.5 },
  )

  if (impactSectionRef.value) {
    observer.observe(impactSectionRef.value)
  }
})

const recentProject = computed(() => {
  return featuredProjects.slice(-3)
})

const getProjectIcon = (type) => {
  if (type && type.toLowerCase().includes('mobile')) {
    return Smartphone
  }
  return Globe
}

const faqList = ref([
  {
    question: 'What type of organizations does EuSopht typically work with?',
    answer:
      'We partner primarily with mid-market to large enterprises, regulated industries, and high-growth technology companies. Typical client profiles include banks, fintechs, healthcare providers, logistics networks, SaaS platforms, and government-adjacent entities that require reliability, security, and scalability as foundational attributes—not optional add-ons.',
  },
  {
    question: 'What differentiates EuSopht from conventional software development agencies?',
    answer:
      'We are engineering-first and architecture-led. Instead of simply building apps, we design proprietary software ecosystems built for high availability, strict data governance, and long-term extensibility. Our delivery model focuses on zero technical debt, security-by-design, and performance optimization from day one.',
  },
  {
    question: 'What does “Enterprise-Grade” mean in practice?',
    answer:
      'Enterprise-grade means measurable standards: audited architecture documentation, redundancy planning, disaster recovery policies, RBAC enforcement, secure SDLC, uptime SLAs, monitoring, and compliance alignment. It also means the system is designed to scale vertically and horizontally while maintaining performance metrics under load.',
  },
  {
    question: 'Do you only work with large companies, or do you support startups as well?',
    answer:
      'We support startups that have enterprise ambitions. If your product requires significant scaling, sensitive data handling, or mission-critical reliability, we are a good fit. We are not a match for low-budget MVP churn or experimental prototypes intended for rapid disposal.',
  },
])

const activeFaqIndex = ref(null)
const toggleFaq = (index) => {
  if (activeFaqIndex.value === index) {
    activeFaqIndex.value = null
  } else {
    activeFaqIndex.value = index
  }
}
</script>

<!-- ------------------------------------------------------- -->

<template>
  <main>
    <section aria-labelledby="hero-title">
      <div class="container">
        <GridPattern />
        <div class="hero-badge">
          <span class="pulse-dot"></span>
          Highly Skilled Engineering Teams
        </div>
        <h1 id="hero-title">
          Enterprise-Grade <br aria-hidden="true" />
          <span class="text-gradient">Digital Software Solutions. </span><br aria-hidden="true" />
          <span class="hero-title__gray">Built for Scale. Secured by Design.</span>
        </h1>
        <p class="hero-text">
          We architect, build, and manage proprietary software ecosystems for organizations
          requiring high availability, strict data sovereignty, and vertical scalability.
        </p>
        <div class="hero-actions">
          <RouterLink class="btn btn-blue btn-big btn-round" to="/contact"
            >Consult an Architect
            <span aria-hidden="true" class="svg-container btn-arrow">
              <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg> </span
          ></RouterLink>
          <RouterLink class="btn btn-white-blue btn-big btn-round" to="/portfolio"
            >View Engineering Standards</RouterLink
          >
        </div>
      </div>
    </section>

    <section class="bg-gray" aria-labelledby="features-title">
      <div class="container">
        <h2 id="features-title">
          We Don't Just Build Software.<br />
          <span class="text-gradient">We Architect Your Competitive Advantage.</span>
        </h2>

        <div class="cards-grid">
          <article class="card features-card">
            <div aria-hidden="true" class="svg-container features-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                <rect width="6" height="6" x="9" y="9" rx="1"></rect>
                <path d="M15 2v2"></path>
                <path d="M15 20v2"></path>
                <path d="M2 15h2"></path>
                <path d="M2 9h2"></path>
                <path d="M20 15h2"></path>
                <path d="M20 9h2"></path>
                <path d="M9 2v2"></path>
                <path d="M9 20v2"></path>
              </svg>
            </div>
            <h3>High-Performance Engineering</h3>
            <p class="features-subtitle">Zero Technical Debt.</p>
            <p class="features-text">
              We build custom software (Mobile/Web/SaaS) using rigorous architectural patterns. Our
              systems are designed to handle high concurrency and millions of transactions without
              performance degradation.
            </p>
          </article>

          <article class="card features-card">
            <div aria-hidden="true" class="svg-container features-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                ></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3>Security & Compliance Architecture</h3>
            <p class="features-subtitle">Risk Mitigation First.</p>
            <p class="features-text">
              We operate with a 'Security-by-Design' mindset. From banking-grade encryption to
              role-based access control (RBAC), we ensure your proprietary data never leaks.
            </p>
          </article>

          <article class="card features-card">
            <div aria-hidden="true" class="svg-container features-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 8V4H8"></path>
                <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                <path d="M2 14h2"></path>
                <path d="M20 14h2"></path>
                <path d="M15 13v2"></path>
                <path d="M9 13v2"></path>
              </svg>
            </div>
            <h3>Future-Ready Intelligence (AI)</h3>
            <p class="features-subtitle">Sovereign AI Integration.</p>
            <p class="features-text">
              We integrate Generative AI and LLMs into your existing infrastructure securely. We
              deploy private models that enhance your data utility without exposing it to public
              clouds.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="impact-section bg-gray" aria-labelledby="impact-title" ref="impactSectionRef">
      <div class="container impact-box">
        <div class="impact-left">
          <h2 id="impact-title">
            Engineered for <br />
            <span class="text-gradient">Impact.</span>
          </h2>
          <p class="impact-desc">
            We deliver measurable results for organizations that demand absolute reliability and
            scale. No compromises.
          </p>
          <div class="impact-btn">
            <RouterLink class="btn btn-white-blue" to="/client"
              >View Our Clients
              <span aria-hidden="true" class="svg-container btn-arrow">
                <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg> </span
            ></RouterLink>
          </div>
        </div>

        <div class="impact-right">
          <article class="stat-card">
            <div class="svg-container impact-svg" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
                ></path>
              </svg>
            </div>
            <div class="stat-value">
              <span class="counter" data-target="100">{{ transactionVolume }}</span
              >M+
            </div>
            <h4>Transaction Volume</h4>
            <p>Processed Securely</p>
          </article>

          <article class="stat-card">
            <div class="svg-container impact-svg" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                <line x1="6" x2="6.01" y1="6" y2="6"></line>
                <line x1="6" x2="6.01" y1="18" y2="18"></line>
              </svg>
            </div>
            <div class="stat-value">
              <span class="counter" data-target="99.9">{{ uptime }}</span
              >%
            </div>
            <h4>Uptime</h4>
            <p>Architected for Mission-Critical Apps</p>
          </article>

          <article class="stat-card">
            <div class="svg-container impact-svg" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <div class="stat-value">
              <span class="counter">0</span>
            </div>
            <h4>Security Breaches</h4>
            <p>In Deployed Enterprise Modules</p>
          </article>
        </div>
      </div>
    </section>

    <section aria-labelledby="capabilities-title">
      <div class="container">
        <h2 id="capabilities-title">
          Specialized <span class="text-gradient">Engineering Capabilities</span>
        </h2>
        <p class="sub-text">
          We offer full-cycle software development services to help you build, integrate, and scale
          your digital products.
        </p>
        <div class="cards-grid">
          <article class="card capabilities-card">
            <div aria-hidden="true" class="svg-container capabilities-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
                ></path>
                <path
                  d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
                ></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              </svg>
            </div>
            <h3>MVP Development</h3>
            <p class="card-text">
              Transforming your vision into a functional reality. We build scalable,
              production-ready MVPs designed to validate your core product hypothesis and attract
              early adopters.
            </p>
          </article>

          <article class="card capabilities-card">
            <div aria-hidden="true" class="svg-container capabilities-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                <line x1="6" x2="6.01" y1="6" y2="6"></line>
                <line x1="6" x2="6.01" y1="18" y2="18"></line>
              </svg>
            </div>
            <h3>AI Enablement & Infrastructure</h3>
            <p class="card-text">
              Future-proof your business with private AI infrastructure. We deploy self-hosted LLMs,
              RAG systems, and AI agents that secure your data while maximizing intelligence.
            </p>
          </article>

          <article class="card capabilities-card">
            <div aria-hidden="true" class="svg-container capabilities-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                <path d="M21 3v5h-5"></path>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                <path d="M8 16H3v5"></path>
              </svg>
            </div>
            <h3>SaaS Development</h3>
            <p class="card-text">
              Building robust, multi-tenant SaaS platforms with complex permissions, subscription
              models, and seamless API integrations tailored for enterprise scale.
            </p>
          </article>

          <article class="card capabilities-card">
            <div aria-hidden="true" class="svg-container capabilities-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                <path d="M12 18h.01"></path>
              </svg>
            </div>
            <h3>Mobile App Development</h3>
            <p class="card-text">
              High-performance cross-platform and native mobile experiences. We deliver fluid,
              intuitive apps that leverage the full potential of iOS and Android ecosystems.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-gray" aria-labelledby="methodology-title">
      <div class="container">
        <h2 id="methodology-title">
          The Eusopht <span class="text-gradient">Engineering Standard</span>
        </h2>
        <p class="sub-text">
          Our proven methodology ensures predictability, security, and scalability in every project.
        </p>

        <div class="cards-grid">
          <article class="methodology-card card">
            <div class="svg-container methodology-svg" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
                ></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </div>
            <div class="methodology-phase">Phase 1</div>
            <h3>Architecture & Governance</h3>
            <p class="card-text">
              We define data flows, security protocols, and compliance requirements before a single
              line of code is written.
            </p>
          </article>

          <article class="methodology-card card">
            <div class="svg-container methodology-svg" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m17 2 4 4-4 4"></path>
                <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                <path d="m7 22-4-4 4-4"></path>
                <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
              </svg>
            </div>
            <div class="methodology-phase">Phase 2</div>
            <h3>Agile Delivery & CI/CD</h3>
            <p class="card-text">
              Transparent development cycles with automated testing pipelines. You get deployable
              code every sprint.
            </p>
          </article>

          <article class="methodology-card card">
            <div class="svg-container methodology-svg" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M13 17V9"></path>
                <path d="M18 17V5"></path>
                <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                <path d="M8 17v-3"></path>
              </svg>
            </div>
            <div class="methodology-phase">Phase 3</div>
            <h3>Vertical Scaling & Optimization</h3>
            <p class="card-text">
              Load testing and database optimization to ensure the system grows effortlessly as your
              user base expands.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section aria-labelledby="projects-title">
      <div class="container">
        <h2 id="projects-title"><span class="text-gradient">Featured</span> Projects</h2>
        <p class="sub-text">
          A glimpse into our diverse portfolio of high-impact digital solutions.
        </p>

        <div class="cards-grid">
          <article v-for="project in recentProject" :key="project.id" class="card projects-card">
            <div class="svg-container projects-svg" aria-hidden="true">
              <component :is="getProjectIcon(project.type)" />
            </div>
            <div class="projects-img"><img :src="project.image" :alt="project.title" /></div>
            <p class="projects-type">{{ project.type }}</p>
            <h3>{{ project.title }}</h3>
            <p class="projects-description">
              {{ project.shortDescription }}
            </p>
            <div class="projects-tech">
              <ul>
                <li v-for="(tech, index) in project.techStack" :key="index" class="projects-chips">
                  {{ tech }}
                </li>
              </ul>
            </div>
            <RouterLink class="projects-link" :to="`/portfolio/${project.slug}`">
              View Case Study
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path></svg
              ></span>
            </RouterLink>
          </article>
        </div>

        <RouterLink class="projects-btn btn btn-white-blue btn-round" to="/portfolio"
          >View Full Portfolio</RouterLink
        >
      </div>
    </section>

    <section class="bg-gray" aria-labelledby="reviews-title">
      <div class="container">
        <h2 id="c-title">Trusted by <span class="text-gradient">Industry Leaders</span></h2>
        <p class="sub-text">
          See what our clients have to say about their experience building with EuSopht.
        </p>

        <div class="reviews-scroll-wrapper">
          <div class="reviews-cards">
            <article v-for="review in reviewsList" :key="review.id" class="card reviews-card">
              <div class="reviews-header" aria-hidden="true">
                <svg
                  class="reviews-quotes"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                  ></path>
                  <path
                    d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                  ></path>
                </svg>
                <div class="reviews-stars">
                  <svg
                    v-for="i in review.rating"
                    :key="i"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="var(--secondary-colour)"
                    stroke="none"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                    ></path>
                  </svg>
                </div>
              </div>
              <p class="reviews-text">{{ review.text }}</p>
              <div class="reviews-author">
                <div class="author-avatar">
                  <img v-if="review.image" :src="review.image" :alt="review.name" />
                  <span v-else>{{ review.initials }}</span>
                </div>
                <div class="author-info">
                  <h4>{{ review.name }}</h4>
                  <p>{{ review.company }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>

        <RouterLink class="reviews-btn btn btn-round" to="/contact">
          Start Your Success Story
          <span aria-hidden="true"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path></svg
          ></span>
        </RouterLink>
      </div>
    </section>

    <section aria-labelledby="faq-title">
      <div class="container">
        <div class="faq-logo svg-container" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <path d="M12 17h.01"></path>
          </svg>
        </div>
        <h2 id="faq-title">Frequently Asked <span class="text-gradient">Questions</span></h2>
        <p class="sub-text">Clarifying the most common queries about our services and solutions.</p>

        <div class="faq-cards">
          <article
            v-for="(faq, index) in faqList"
            :key="index"
            class="faq-card"
            :class="{ 'is-open': activeFaqIndex === index }"
          >
            <div class="faq-question" @click="toggleFaq(index)">
              <h3>{{ faq.question }}</h3>
              <div class="faq-arrow svg-container" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </div>
            </div>
            <div class="faq-answer-wrapper" v-show="activeFaqIndex === index">
              <div class="faq-answer">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </article>
        </div>

        <RouterLink class="faq-btn btn btn-round btn-white-blue" to="/faq">
          View More Questions
          <span aria-hidden="true"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path></svg
          ></span>
        </RouterLink>
      </div>
    </section>

    <section class="bg-gray" aria-labelledby="contact-title">
      <div class="container">
        <h2 id="contact-title">
          Is your infrastructure ready for the
          <span class="text-gradient">next stage of growth?</span>
        </h2>
        <p class="sub-text">Let's discuss your architecture, security, and scalability needs.</p>
        <div class="contact-wrapper">
          <div class="contact-info">
            <h3>Technical Discovery Call</h3>
            <p class="contact-info_text">
              Have questions about our enterprise solutions? Want to audit your current
              architecture? Our engineering team is ready to assist.
            </p>
            <div class="contact-info_cards">
              <div class="contact-info_card">
                <div class="svg-container info-card_svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div class="info-text">
                  <h4>Email</h4>
                  <p>contact@eusopht.com</p>
                </div>
              </div>

              <div class="contact-info_card">
                <div class="svg-container info-card_svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    ></path>
                  </svg>
                </div>
                <div class="info-text">
                  <h4>Phone</h4>
                  <p>+92 300-225-9802</p>
                </div>
              </div>

              <div class="contact-info_card">
                <div class="svg-container info-card_svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div class="info-text">
                  <h4>Office</h4>
                  <p>EuSopht B-153, Block 6, Gulshan-e-Iqbal Karachi – 75350 Pakistan</p>
                </div>
              </div>
            </div>
            <div class="contact-session">
              <h3>Discovery Session Includes:</h3>
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg
                  >Architecture review and scalability assessment
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg
                  >Security and compliance audit
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg
                  >Roadmap planning for future growth
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg
                  >No-obligation proposal and cost estimate
                </li>
              </ul>
            </div>
          </div>
          <div class="contact-form">
            <ContactForm :submitText="'Schedule Technical Discovery'" />
          </div>
        </div>
      </div>
    </section>

    <section aria-labelledby="cta-title" class="cta-section">
      <div class="container">
        <div class="cta-card">
          <GridPattern />

          <div class="cta-content">
            <h2 id="cta-title">
              Is your <span class="text-gradient">technical debt</span>
              <br aria-hidden="true" />holding back your <span class="text-gradient">growth?</span>
            </h2>
            <p class="cta-text sub-text">
              Stop building for today. Start architecting for tomorrow with enterprise-grade
              software, scalable SaaS platforms, and high-performance mobile experiences.
            </p>
          </div>
          <div class="cta-action">
            <RouterLink class="cta-btn btn btn-big btn-round" to="/contact"
              >Start Your Engineering Project
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<!-- ------------------------------------------------------- -->

<style scoped>
main {
  --colormix-primary: color-mix(in srgb, var(--primary-colour) 10%, transparent);
  --box-shadow-light: 0 0 8px #ffffff15, 0 2px 20px 0 #ffffff10;
}

section {
  padding: 6.5rem 0;
}

section:first-of-type {
  padding-block: 9rem;
}

.container {
  max-width: 87.5rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
}

h1 {
  font-size: clamp(2.25rem, 4vw + 1rem, 4.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  letter-spacing: -0.24rem;
}

h2 {
  font-size: clamp(1.75rem, 3vw + 1rem, 2.75rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: -0.05rem;
}

h3 {
  font-size: clamp(0.95rem, 1.4vw + 0.5rem, 1.1rem);
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.03rem;
}

h4 {
  font-size: clamp(0.9rem, 1.2vw + 0.4rem, 1.1rem);
  font-weight: 600;
  line-height: 1.4;
}

.text-gradient {
  background: linear-gradient(
    90deg,
    var(--primary-colour),
    color-mix(in srgb, var(--secondary-colour) 85%, transparent)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.bg-gray {
  background-color: var(--section-background-colour);
}

.sub-text {
  font-family: var(--font-accent);
  color: var(--text-colour-secondary);
  font-size: clamp(1.1rem, 1.4vw + 0.5rem, 1.3rem);
  max-width: 45rem;
  margin: 0 auto;
}

/* --- btn --- */

.btn {
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border-radius: 1rem;
  transition: all 0.3s ease;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.btn:hover {
  cursor: pointer;
}

.btn-arrow {
  width: 1.5rem;
  height: 1.5rem;
  background-color: color-mix(in srgb, var(--background-colour) 30%, transparent);
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.btn-arrow svg {
  width: 1rem;
  height: 1rem;
  pointer-events: none;
}

.btn-blue:hover .btn-arrow {
  transform: translateX(5px);
}

.btn-blue {
  background-color: var(--primary-colour);
  color: var(--background-colour);
  border: none;
  box-shadow: 0 3px 20px color-mix(in srgb, var(--primary-colour) 40%, transparent);
}

.btn-blue:hover {
  background-color: color-mix(in srgb, var(--primary-colour) 70%, var(--secondary-colour));
  scale: 1.05;
  box-shadow: 0 3px 24px color-mix(in srgb, var(--primary-colour) 50%, transparent);
}

.btn-white-blue {
  background-color: var(--background-colour);
  color: var(--primary-colour);
  border: 1px solid var(--primary-colour);
  box-shadow: var(--box-shadow-light);
}

.btn-white-blue:hover {
  background-color: color-mix(in srgb, var(--primary-colour) 40%, var(--secondary-colour));
  color: var(--background-colour);
}

.btn-white {
  background-color: var(--background-colour);
  color: var(--text-colour-primary);
  border: 1px solid var(--faint-border);
}

.btn-white:hover {
  background-color: color-mix(in srgb, var(--primary-colour) 8%, transparent);
}

.btn-round {
  border-radius: 50rem;
}

.btn-big {
  padding: 1.3rem 2.6rem;
}

/* --- cards --- */

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.card {
  padding: 2rem;
  border: 1px solid var(--faint-border);
  border-radius: 0.75rem;
  background-color: var(--background-colour);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  text-align: start;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px var(--colormix-primary);
}

.card:hover .svg-container {
  scale: 1.1;
}

.svg-container {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: scale 0.3s ease;
}

.card-text {
  font-family: var(--font-accent);
  color: var(--text-colour-secondary);
  line-height: 1.7;
}

/* --- hero section --- */

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 1rem;
  border: 1px solid var(--faint-border);
  border-radius: 50rem;
  font-family: var(--font-accent);
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.25rem;
  margin-bottom: 1.5rem;
  color: var(--primary-colour);
  background-color: color-mix(in srgb, var(--primary-colour) 8%, transparent);
}

.pulse-dot {
  position: relative;
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--primary-colour);
  border-radius: 50%;
}

.pulse-dot::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-colour);
  border-radius: 50%;
  z-index: -1;
  animation: sonarWave 1s infinite cubic-bezier(0, 0, 0.2, 0.1);
}

@keyframes sonarWave {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.hero-title__gray {
  font-size: clamp(1.4rem, 4vw + 1rem, 3rem);
  color: var(--text-colour-secondary);
  font-weight: 600;
  display: block;
  margin-top: 0.5rem;
}

.hero-text {
  font-size: clamp(1.2rem, 1vw + 0.5rem, 3rem);
  color: var(--text-colour-secondary);
  line-height: 1.4;
  font-family: var(--font-accent);
  padding-block: 0.5rem;
  max-width: 50rem;
  margin: 0 auto 1.5rem auto;
  letter-spacing: -0.05rem;
}

.hero-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

.hero-actions > .btn {
  font-size: 1.1rem;
  font-weight: 600;
}

@media screen and (max-width: 768px) {
  h1 {
    letter-spacing: -0.08rem;
  }
  section:first-of-type {
    padding-block: 6rem;
  }

  .hero-actions {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .hero-actions .btn {
    width: 100%;
    white-space: normal;
    text-align: center;
  }
}

/* --- features section --- */

.features-card {
  align-items: center;
  text-align: center;
  box-shadow: var(--box-shadow-light);
}

.features-svg {
  color: var(--primary-colour);
  width: 3.5rem;
  height: 3.5rem;
  background-color: var(--colormix-primary);
  border-radius: 0.9rem;
  margin-bottom: 0.5rem;
}

.features-svg > svg {
  width: 2.1rem;
  height: 2.1rem;
}

.features-card > p,
.impact-section p {
  font-size: 0.9rem;
  font-family: var(--font-accent);
}

.features-subtitle {
  color: var(--primary-colour);
  font-weight: 600;
}

.features-text {
  color: var(--text-colour-secondary);
  line-height: 1.6;
}

/* --- impact section --- */

.impact-section {
  padding-bottom: 8rem;
  padding-top: 0.5rem;
}

.impact-box {
  background-color: var(--background-colour);
  border-radius: 1.5rem;
  padding: 4rem;
  box-shadow: 0 10px 40px color-mix(in srgb, var(--primary-colour) 5%, transparent);
  margin-block: 2.5rem;

  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: center;
  text-align: left;
}

#impact-title {
  font-size: clamp(2rem, 3vw + 1rem, 3rem);
  line-height: 1.1;
  margin-bottom: 1rem;
}

.impact-desc {
  font-family: var(--font-accent);
  color: var(--text-colour-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.impact-right {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  background-color: var(--section-background-colour);
  border-radius: 1rem;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
}

.impact-svg {
  color: var(--primary-colour);
  width: 3.5rem;
  height: 3.5rem;
  background-color: color-mix(in srgb, var(--primary-colour) 5%, transparent);
  border: 1px solid var(--colormix-primary);
  border-radius: 50%;
  margin-bottom: 1rem;
}

.impact-svg svg {
  width: 1.5rem;
  height: 1.5rem;
}

.stat-value {
  color: var(--primary-colour);
  font-size: 2.5rem;
  font-weight: 800;
  font-family: var(--font-accent);
  letter-spacing: -0.09rem;
  margin-bottom: 0.25rem;
}

.stat-card h4 {
  font-size: 1rem;
  color: var(--text-colour-primary);
  margin-bottom: 0.25rem;
}

.stat-card p {
  font-size: 0.85rem;
  color: var(--text-colour-secondary);
  font-family: var(--font-accent);
}

@media screen and (max-width: 992px) {
  .impact-box {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 3rem 1.5rem;
    text-align: center;
  }

  .impact-desc {
    margin-bottom: 1.5rem;
  }
}

@media screen and (max-width: 600px) {
  .impact-right {
    grid-template-columns: 1fr;
  }
}

/* --- capabilities section --- */

.capabilities-svg,
.methodology-svg {
  width: 3rem;
  height: 3rem;
  display: flex;
  border-radius: 0.75rem;
  margin-bottom: 0.5rem;
}

.capabilities-card:nth-child(1) .capabilities-svg {
  background-color: #8a5cf61a;
  color: #8b5cf6;
}

.capabilities-card:nth-child(2) .capabilities-svg {
  background-color: #d846ef1a;
  color: #d946ef;
}

.capabilities-card:nth-child(3) .capabilities-svg {
  background-color: #f59e0b1a;
  color: #f59e0b;
}

.capabilities-card:nth-child(4) .capabilities-svg {
  background-color: #06b6d41a;
  color: #06b6d4;
}

.capabilities-card:hover h3 {
  color: var(--secondary-colour);
}

.capabilities-card,
.methodology-card,
.projects-card {
  box-shadow: var(--box-shadow-light);
}

.capabilities-card:hover,
.methodology-card:hover,
.projects-card:hover {
  border-color: var(--secondary-colour);
}

/* --- methodology section --- */

.methodology-card:nth-child(1) .methodology-svg {
  background-color: #fbbf241a;
  color: #fbbf24;
}

.methodology-card:nth-child(2) .methodology-svg {
  background-color: #22d3ee1a;
  color: #22d3ee;
}

.methodology-card:nth-child(3) .methodology-svg {
  background-color: #4ade801a;
  color: #4ade80;
}

.methodology-phase {
  font-size: 0.75rem;
  font-weight: 700;
  background-color: var(--colormix-primary);
  color: var(--primary-colour);
  border-radius: 50rem;
  padding: 0.25rem 0.75rem;
  margin-top: 0.5rem;
  margin-bottom: -0.5rem;
  text-transform: uppercase;
}

/* --- projects section --- */

.projects-card {
  overflow: hidden;
  gap: 0;
  padding: 0;
  position: relative;
  height: 100%;
}

.projects-img {
  width: 100%;
  aspect-ratio: 16 / 10;
  background: var(--nav-bg-colour);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--faint-border);
}

.projects-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.projects-card .projects-svg {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  background-color: var(--background-colour);
  border-radius: 0.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  z-index: 2;
  color: var(--primary-colour);
}

.projects-svg svg {
  width: 1.2rem;
  height: 1.2rem;
}

.projects-type {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--secondary-colour);
  margin-top: 0.5rem;
  padding: 1.5rem 2rem 0.5rem;
  text-transform: uppercase;
}

.projects-card h3 {
  padding: 0 2rem;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.projects-description {
  padding: 0 2rem 1.5rem;
  font-family: var(--font-accent);
  color: var(--text-colour-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
}

.projects-tech {
  padding: 0 2rem 1.5rem;
}

.projects-tech ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.projects-chips {
  font-size: 0.75rem;
  font-weight: 600;
  font-family: var(--font-accent);
  padding: 0.25rem 0.75rem;
  border-radius: 50rem;
  background-color: var(--colormix-primary);
  color: var(--primary-colour);
}

.projects-link {
  padding: 0 2rem 2rem;
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--primary-colour);
  cursor: pointer;
  text-decoration: none;
}

.projects-link span {
  display: flex;
  transition: transform 0.5s ease;
}

.projects-card:hover .projects-link span {
  transform: translateX(8px);
}

.projects-btn {
  margin-top: 3rem;
  font-size: clamp(0.9rem, 1.2vw + 0.4rem, 1.1rem);
  padding: 0.9rem 2.2rem;
}

/* --- reviews section --- */

.reviews-scroll-wrapper {
  position: relative;
  height: 45rem;
  overflow: hidden;
  margin-top: 4rem;
  mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
}

.reviews-cards {
  column-count: 3;
  column-gap: 2rem;

  animation: scrollVertically 45s linear infinite;
}

.reviews-scroll-wrapper:hover .reviews-cards {
  animation-play-state: paused;
}

@keyframes scrollVertically {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}

.reviews-card {
  break-inside: avoid;
  margin-bottom: 2rem;
  border: none;
  border-radius: 1.25rem;
  box-shadow: 0 4px 24px color-mix(in srgb, var(--primary-colour) 4%, transparent);
}

.reviews-header {
  display: grid;
  gap: 0.5rem;
}

.reviews-quotes {
  color: color-mix(in srgb, var(--secondary-colour) 50%, transparent);
}

.reviews-stars {
  display: flex;
  gap: 0.25rem;
  color: var(--secondary-colour);
}

.reviews-text {
  font-family: var(--font-accent);
  color: var(--text-colour-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-style: italic;
}

.reviews-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
}

.author-avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--colormix-primary);
  color: var(--secondary-colour);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-family: var(--font-accent);
  font-size: 1.1rem;
  overflow: hidden;
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info h4 {
  font-size: 1rem;
  margin-bottom: 0.1rem;
}

.author-info p {
  font-size: 0.85rem;
  color: var(--text-colour-secondary);
}

.reviews-btn {
  background-color: var(--secondary-colour);
  color: var(--background-colour);
  border: none;
  font-weight: 700;
  font-size: 1.3rem;
  box-shadow: 0 4px 15px color-mix(in srgb, var(--secondary-colour) 40%, transparent);
  margin-top: 4rem;
  padding: 0.8rem 2rem;
}

.reviews-btn:hover {
  background-color: color-mix(in srgb, var(--secondary-colour) 75%, var(--primary-colour));
  scale: 1.05;
  box-shadow: 0 10px 18px color-mix(in srgb, var(--secondary-colour) 50%, transparent);
}

.reviews-btn span,
.faq-btn span {
  display: flex;
  transition: transform 0.3s ease;
}

.reviews-btn:hover span,
.faq-btn:hover span {
  transform: translateX(5px);
}

@media screen and (max-width: 1000px) {
  .reviews-cards {
    column-count: 2;
  }
}

@media screen and (max-width: 700px) {
  .reviews-cards {
    column-count: 1;
  }
}

/* --- FAQ section --- */

.faq-logo {
  width: 3.8rem;
  height: 3.8rem;
  margin: 0 auto;
  background: color-mix(in srgb, var(--primary-colour) 8%, transparent);
  border-radius: 50%;
  color: var(--primary-colour);
  margin-bottom: 1.5rem;
}

.faq-logo svg {
  width: 2.1rem;
  height: 2.1rem;
}

.faq-cards {
  max-width: 55rem;
  margin-inline: auto;
  margin-top: 3rem;
  text-align: start;
  display: grid;
  gap: 1rem;
}

.faq-question {
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border: 1px solid var(--faint-border);
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--box-shadow-light);
}

.faq-question h3 {
  font-size: clamp(1rem, 1.5vw + 0.5rem, 1.2rem);
}

.faq-question:hover {
  box-shadow: 0 6px 12px color-mix(in srgb, var(--primary-colour) 8%, transparent);
  transform: translateY(-2px);
}

.faq-arrow {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: color-mix(in srgb, var(--primary-colour) 8%, transparent);
  color: var(--primary-colour);
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
}

.faq-arrow svg {
  width: 1.1rem;
  height: 1.1rem;
}

.faq-card.is-open .faq-question {
  border-color: var(--primary-colour);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-color: transparent;
  transform: none;
  box-shadow: none;
}

.faq-card.is-open .faq-arrow {
  transform: rotate(90deg);
  background-color: var(--primary-colour);
  color: var(--background-colour);
}

.faq-answer {
  padding: 0 2rem 1.5rem 2rem;
  border: 1px solid var(--primary-colour);
  border-top: none;
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}

.faq-answer p {
  color: var(--text-colour-secondary);
  font-family: var(--font-accent);
  line-height: 1.7;
  padding-top: 1rem;
  font-size: 0.95rem;
  border-top: 1px solid var(--faint-border);
}

.faq-btn {
  margin-top: 3rem;
  padding: 0.6rem 2rem;
  background-color: color-mix(in srgb, var(--primary-colour) 8%, transparent);
}

@media screen and (max-width: 768px) {
  .faq-question {
    padding: 1.2rem 1.5rem;
    gap: 0.5rem;
  }

  .faq-answer {
    padding: 0 1.5rem 1.2rem 1.5rem;
  }

  .faq-arrow {
    width: 1.5rem;
    height: 1.5rem;
  }

  .faq-arrow svg {
    width: 0.9rem;
    height: 0.9rem;
  }
}

/* --- conact section --- */

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  text-align: start;

  max-width: 75rem;
  margin: 4rem auto 0 auto;
}

.contact-info_text {
  font-family: var(--font-accent);
  margin-top: 0.5rem;
}

.contact-info_cards {
  margin-block: 3rem;
  display: grid;
  gap: 1rem;
}

.contact-info_card {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
}

.info-text p {
  color: var(--text-colour-secondary);
  margin-top: 0.2rem;
  transition: color 0.3s ease;
}

.info-text:hover p {
  color: var(--secondary-colour);
}

.info-card_svg {
  width: 3.2rem;
  height: 3.2rem;
  background-color: var(--colormix-primary);
  border-radius: 0.75rem;
  color: var(--primary-colour);
  flex-shrink: 0;
}

.contact-session {
  background-color: var(--colormix-primary);
  border: 1px solid var(--faint-border);
  border-radius: 0.75rem;
  padding: 2rem;
}

.contact-session ul {
  margin-top: 1.5rem;
  list-style: none;
  display: grid;
  gap: 1rem;
}

.contact-session li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: auto;
  color: var(--text-colour-secondary);
}

.contact-session li svg {
  color: var(--primary-colour);
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.contact-form {
  display: flex;
  justify-content: end;
}

.contact-form form {
  margin: 0;
}

@media screen and (max-width: 900px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
  }

  .contact-form {
    display: flex;
    justify-content: center;
  }
}

/* --- CTA section --- */

.cta-section {
  padding-bottom: 8rem;
  padding-top: 2rem;
}

.cta-card {
  max-width: 75rem;
  margin: 0 auto;
  background: #111827;
  color: white;
  position: relative;
  border: 1px solid var(--faint-border);
  border-radius: 2rem;
  padding: 6rem 2rem;
  overflow: hidden;
  box-shadow: 0 2px 10px color-mix(in srgb, var(--primary-colour) 30%, transparent);
}

.cta-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#cta-title {
  font-size: clamp(2.5rem, 4vw + 1rem, 4rem);
  line-height: 1.1;
  margin-block: 1.5rem;
  max-width: 60rem;
  letter-spacing: -0.1rem;
}

.cta-text {
  margin-bottom: 3.5rem;
  max-width: 48rem;
  color: rgba(255, 255, 255, 0.803);
}

.cta-action {
  display: flex;
  justify-content: center;
}

.cta-btn {
  font-size: 1.2rem;
  background-color: var(--secondary-colour);
  color: var(--text-colour-primary);
  font-weight: 500;
  border: none;
  box-shadow: 0 3px 20px color-mix(in srgb, var(--secondary-colour) 40%, transparent);
}

.cta-btn:hover {
  background-color: color-mix(in srgb, var(--secondary-colour) 80%, var(--primary-colour));
  scale: 1.05;
  box-shadow: 0 3px 24px color-mix(in srgb, var(--secondary-colour) 50%, transparent);
}

@media screen and (max-width: 800px) {
  .cta-card {
    padding: 4rem 1.5rem;
    border-radius: 1.5rem;
  }

  .cta-btn {
    padding: 1rem 1.2rem;
  }

  .cta-action {
    width: 100%;
  }

  .cta-action .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>

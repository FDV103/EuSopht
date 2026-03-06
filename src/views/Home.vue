<script setup>
import GridPattern from '@/components/GridPattern.vue'
import { ref, onMounted } from 'vue'

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
          Enterprise-Grade <br />
          <span class="text-gradient">Digital Software Solutions. </span><br />
          <span class="hero-title__gray">Built for Scale. Secured by Design.</span>
        </h1>
        <p class="hero-text">
          We architect, build, and manage proprietary software ecosystems for organizations
          requiring high availability, strict data sovereignty, and vertical scalability.
        </p>
        <div class="hero-actions">
          <RouterLink class="btn btn-blue btn-big btn-round" to="/contact"
            >Consult an Architect</RouterLink
          >
          <RouterLink class="btn btn-white-blue btn-big btn-round" to="/portfolio"
            >View Engineering Standards</RouterLink
          >
        </div>
      </div>
    </section>

    <section aria-labelledby="features-title">
      <div class="container">
        <h2 id="features-title">
          We Don't Just Build Software.<br />
          <span class="text-gradient">We Architect Your Competitive Advantage.</span>
        </h2>

        <div class="cards-grid">
          <article class="card">
            <div aria-hidden="true">
              <!-- svg or img -->
            </div>
            <h3>High-Performance Engineering</h3>
            <p>Zero Technical Debt.</p>
            <p>
              We build custom software (Mobile/Web/SaaS) using rigorous architectural patterns. Our
              systems are designed to handle high concurrency and millions of transactions without
              performance degradation.
            </p>
          </article>

          <article class="card">
            <div aria-hidden="true">
              <!-- svg or img -->
            </div>
            <h3>Security & Compliance Architecture</h3>
            <p>Risk Mitigation First.</p>
            <p>
              We operate with a 'Security-by-Design' mindset. From banking-grade encryption to
              role-based access control (RBAC), we ensure your proprietary data never leaks.
            </p>
          </article>

          <article class="card">
            <div aria-hidden="true">
              <!-- svg or img -->
            </div>
            <h3>Future-Ready Intelligence (AI)</h3>
            <p>Sovereign AI Integration.</p>
            <p>
              We integrate Generative AI and LLMs into your existing infrastructure securely. We
              deploy private models that enhance your data utility without exposing it to public
              clouds.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section aria-labelledby="impact-title" ref="impactSectionRef">
      <div class="container">
        <h3 id="impact-title">Engineered for Impact.</h3>

        <div class="cards-grid">
          <article>
            <div aria-hidden="true">
              <!-- svg or img -->
            </div>
            <div class="stat-value">
              <span class="counter" data-target="100">{{ transactionVolume }}</span> M+
            </div>
            <h4>Transaction Volume</h4>
            <p>Processed Securely</p>
          </article>

          <article>
            <div aria-hidden="true">
              <!-- svg or img -->
            </div>
            <div class="stat-value">
              <span class="counter" data-target="99.9">{{ uptime }}</span> %
            </div>
            <h4>Uptime</h4>
            <p>Architected for Mission-Critical Apps</p>
          </article>

          <article>
            <div aria-hidden="true">
              <!-- svg or img -->
            </div>
            <div class="stat-value">
              <span class="counter">0</span>
            </div>
            <h4>Security Breaches</h4>
            <p>In Deployed Enterprise Modules</p>
          </article>
        </div>

        <div>
          <RouterLink class="btn btn-white-blue" to="/client">View Our Clients</RouterLink>
        </div>
      </div>
    </section>

    <section aria-labelledby="methodology-title">
      <div class="container">
        <h2 id="methodology-title">
          The Eusopht <span class="text-gradient">Engineering Standard</span>
        </h2>
        <p>
          Our proven methodology ensures predictability, security, and scalability in every project.
        </p>

        <div class="cards-grid">
          <article class="card">
            <div aria-hidden="true">
              <!-- svg or img -->
            </div>
            <div>PHASE 1</div>
            <h3>Architecture & Governance</h3>
            <p>
              We define data flows, security protocols, and compliance requirements before a single
              line of code is written.
            </p>
          </article>

          <article class="card">
            <div aria-hidden="true">
              <!-- svg or img -->
            </div>
            <div>PHASE 2</div>
            <h3>Agile Delivery & CI/CD</h3>
            <p>
              Transparent development cycles with automated testing pipelines. You get deployable
              code every sprint.
            </p>
          </article>

          <article class="card">
            <div aria-hidden="true">
              <!-- svg or img -->
            </div>
            <div>PHASE 3</div>
            <h3>Vertical Scaling & Optimization</h3>
            <p>
              Load testing and database optimization to ensure the system grows effortlessly as your
              user base expands.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- final block -->
    <section aria-labelledby="cta-title">
      <div class="container">
        <h2 id="cta-title">Is your technical debt holding back your growth?</h2>
        <p>
          Stop building for today. Start architecting for tomorrow with enterprise-grade software,
          scalable SaaS platforms, and high-performance mobile experiences.
        </p>

        <div>
          <RouterLink class="btn btn-blue btn-big" to="/contact"
            >Start Your Engineering Project</RouterLink
          >
        </div>
      </div>
    </section>
  </main>
</template>

<!-- ------------------------------------------------------- -->

<style scoped>
section {
  padding: 5rem 0;
}

.container {
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
}

h1 {
  font-size: clamp(2.25rem, 4vw + 1rem, 4.5rem);
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  letter-spacing: -0.2rem;
}

h2 {
  font-size: clamp(1.75rem, 3vw + 1rem, 2.75rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: -0.05rem;
}

h3 {
  font-size: clamp(1.1rem, 1.5vw + 0.5rem, 1.35rem);
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.03rem;
}

h4 {
  font-size: clamp(0.9rem, 1.2vw + 0.4rem, 1.1rem);
  font-weight: 600;
  line-height: 1.4;
}

.text-gradient {
  background: var(--nav-bg-colour);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.btn {
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border-radius: 1rem;
  transition:
    background-color 0.2s,
    opacity 0.2s;
}

.btn:hover {
  cursor: pointer;
}

.btn-blue {
  background-color: var(--primary-colour);
  color: var(--background-colour);
  font-weight: 600;
  border: none;
}

.btn-blue:hover {
  opacity: 0.9;
}

.btn-white-blue {
  background-color: transparent;
  color: var(--primary-colour);
  border: 1px solid var(--faint-border);
}

.btn-white-blue:hover {
  background-color: color-mix(in srgb, var(--primary-colour) 40%, var(--secondary-colour));
  color: var(--background-colour);
}

.btn-white {
  background-color: transparent;
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
}

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
  margin: 0 auto 2.5rem auto;
  letter-spacing: -0.05rem;
}

.hero-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

.counter {
  font-variant-numeric: tabular-nums;
  display: inline-block;
  min-width: 3ch;
}

.stat-value {
  font-size: 2rem;
  font-weight: bold;
  font-family: var(--font-accent);
}
</style>

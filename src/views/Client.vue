<script setup>
</script>

<template>

  <!-- intro section -->
  <section class="clients-intro">
    <div class="intro-container">

      <h1>
        Our Trusted <span>Clients</span>
      </h1>

      <p>
        We are proud to have partnered with these amazing organizations
        to deliver exceptional automation solutions.
      </p>

    </div>
  </section>


  <!-- client logos -->
  <section class="clients-logos">
    <div class="clients-grid">

      <div class="client-item">
        <img src="/src/assets/Clients/aibuddy.png" alt="AI Buddy">
      </div>

      <div class="client-item">
        <img src="/src/assets/Clients/almirah.png" alt="Almirah">
      </div>

      <div class="client-item">
        <img src="/src/assets/Clients/autoflow.png" alt="AutoFlow">
      </div>

      <div class="client-item">
        <img src="/src/assets/Clients/autosmart.png" alt="AutoSmart">
      </div>

      <div class="client-item">
        <img src="/src/assets/Clients/cedar-college.png" alt="Cedar College">
      </div>

      <div class="client-item">
        <img src="/src/assets/Clients/clci.png" alt="CLCI">
      </div>

      <div class="client-item">
        <img src="/src/assets/Clients/dbargain.png" alt="DBargain">
      </div>

      <div class="client-item">
        <img src="/src/assets/Clients/jdot.png" alt="JDOT">
      </div>

      <div class="client-item">
        <img src="/src/assets/Clients/mensapay.png" alt="Mensapay">
      </div>

      <div class="client-item">
        <img src="/src/assets/Clients/mount-sinai.png" alt="Mount Sinai">
      </div>

      <div class="client-item">
        <img src="/src/assets/Clients/nullship.png" alt="Nullship">
      </div>

      <div class="client-item">
        <img src="/src/assets/Clients/organise.png" alt="Organise">
      </div>

      <div class="client-item">
        <img src="/src/assets/Clients/soif.png" alt="SOIF">
      </div>

      <div class="client-item">
        <img src="/src/assets/Clients/vital.png" alt="Vital">
      </div>

      <div class="client-item">
        <img src="/src/assets/Clients/vizii.png" alt="Vizii">
      </div>

    </div>
  </section>


  <!-- CTA section -->
  <section aria-labelledby="cta-title" class="cta-section">
    <div class="container">
      <div class="cta-card">

        <div class="cta-content">
          <h2 id="cta-title">
            Ready to Join Our <span class="text-gradient">Network?</span>
          </h2>

          <p class="cta-text sub-text">
            Let's discuss how we can build something similar for your business.
            We turn ideas into scalable production-ready solutions.
          </p>
        </div>

        <div class="cta-action">
          <RouterLink class="cta-btn btn btn-big btn-round" to="/contact">
            Become a Client
          </RouterLink>
        </div>

      </div>
    </div>
  </section>

</template>

<style scoped>

/* intro */

.clients-intro {
  padding: 140px 20px 100px;
  text-align: center;
}

.intro-container {
  max-width: 900px;
  margin: auto;
}

.clients-intro h1 {
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 30px;
}

.clients-intro span {
  background: linear-gradient(90deg, #00A8E8, #0052CC);
  -webkit-background-clip: text;
  color: transparent;
}

.clients-intro p {
  font-size: 1.5rem;
  line-height: 1.6;
  color: var(--text-colour-secondary);
}


/* client grid */

.clients-logos {
  padding: 80px 20px;
}

.clients-grid {
  display: grid;
  grid-template-columns: repeat(4, 180px);
  justify-content: center;
  gap: 40px;
  max-width: 1200px;
  margin: auto;
}


/* logo cards */

.client-item {
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  padding: 20px;
  background: #FFFFFF;
  border: 1px solid var(--faint-border);
  transition: 0.3s;
}

.client-item img {
  max-width: 120px;
  max-height: 80px;
  object-fit: contain;
  opacity: 0.9;
  transition: 0.25s;
}

.client-item:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  border-color: var(--primary-colour);
}

.client-item:hover img {
  opacity: 1;
}


/* dark mode hover */

:global(.dark) .client-item:hover {
  box-shadow:
    0 0 0 1px var(--primary-colour),
    0 12px 30px rgba(0,0,0,0.8),
    0 0 25px rgba(77,166,255,0.35);
}


/* responsive */

@media (max-width: 1000px) {
  .clients-grid {
    grid-template-columns: repeat(3, 180px);
  }
}

@media (max-width: 700px) {
  .clients-grid {
    grid-template-columns: repeat(2, 180px);
  }
}

@media (max-width: 450px) {
  .clients-grid {
    grid-template-columns: 180px;
  }
}


/* CTA section */

.container {
  max-width: 87.5rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
}

.text-gradient {
  background: linear-gradient(
    90deg,
    var(--primary-colour),
    color-mix(in srgb, var(--secondary-colour) 85%, transparent)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sub-text {
  font-family: var(--font-accent);
  color: var(--text-colour-secondary);
  font-size: clamp(1.1rem, 1.4vw + 0.5rem, 1.3rem);
  max-width: 45rem;
  margin: 0 auto;
}

.btn {
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-round {
  border-radius: 50rem;
}

.btn-big {
  padding: 1.3rem 2.6rem;
}

.cta-section {
  padding-bottom: 8rem;
  padding-top: 2rem;
}

.cta-card {
  max-width: 75rem;
  margin: 0 auto;
  background: #111827;
  color: white;
  border-radius: 2rem;
  padding: 6rem 2rem;
  text-align: center;
}

.cta-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#cta-title {
  font-size: clamp(2.5rem, 4vw + 1rem, 4rem);
  margin-bottom: 1.5rem;
}

.cta-text {
  margin-bottom: 3.5rem;
  max-width: 48rem;
  color: rgba(255, 255, 255, 0.8);
}

.cta-action {
  display: flex;
  justify-content: center;
}

.cta-btn {
  font-size: 1.2rem;
  background-color: var(--secondary-colour);
  color: var(--text-colour-primary);
  border: none;
}

</style>
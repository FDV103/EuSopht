<script setup>
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';

  // FAQ SECTION TEXT
  const activeFAQIndex = ref(0);

  const FAQs = [
    {
      question: 'What type of organizations does EuSopht typically work with?',
      answer: 'We partner primarily with mid-market to large enterprises, regulated industries, and high-growth technology companies. Typical client profiles include banks, fintechs, healthcare providers, logistic networks, SaaS platforms, and government-adjacent entities that require reliability, security, and scalability as foundational attributes - not optional add ons.'
    },
    {
      question: 'What differentiates EuSopht from conventional software development agencies?',
      answer: 'We are engineering-first and architecture-led. Instead of simply building apps, we design proprietary software ecosystems built for high availability, strict data governance, and long-term extensibility. Our delivery model focuses on zero technical debt, security-by-design, and performance optimization from day one.'
    },
    {
      question: 'What does "Enterprise-Grade" mean in practice?',
      answer: 'Enterprise-grade means measurable standards: audited architecture documentation, redundancy planning, disaster recovery policies, RBAC enforcement, secure SDLC, uptime SLAs, monitoring, and compliance alignment. It also means the system is designed to scale vertically and horizontally while maintaining performance metrics under load.'
    },
    {
      question: 'Do you only work with large companies, or do you support startups as well?',
      answer: 'We support startups that have enterprise ambitions. If your product requires significant scaling, sensitive data handling, or mission-critical reliability, we are a good fit. We are not a match for low-budget MVP churn or experimental prototypes intended for rapid disposal.'
    },
    {
      question: 'Can EuSopht modernize our legacy systems without disrupting operations?',
      answer: 'Yes. Legacy modernization is one of our core capabilities. We carefully decompose monolithic architectures into microservices, containerized workloads, and cloud-native deployments. This is executed in parallel environments, ensuring continuity of business operations while the transition occurs.'
    },
    {
      question: 'Do you provide support after deployment?',
      answer: 'Yes. We provide post-deployment managed services, reliability engineering support, monitoring, incident response, and continuous optimization. Many clients retain us as long-term architecture partners to oversee scalability, updates, and infrastructure governance.'
    },
    {
      question: 'How do you ensure data security and compliance?',
      answer: 'Security is embedded in our engineering lifecycle. We employ encryption standards, RBAC, IAM governance, secure key management, secrets rotation, vulnerability scanning, secure code reviews, audit logging, and compliance alignment frameworks such as ISO 27001 and SOC 2. We design for risk mitigation first, not as a retrofit.'
    },
    {
      question: 'Do you offer on-premise or private cloud deployments?',
      answer: 'Yes. We architect systems to operate on private cloud, hybrid models, sovereign cloud environments, or on-premise hardware. This is particularly relevant for organizations with compliance restrictions, data residency requirements, or strict confidentiality mandates.'
    },
    {
      question: 'What does "Sovereign AI" mean?',
      answer: 'Sovereign AI refers to private AI infrastructure deployed within your environment—never sending proprietary data to public models. We implement self-hosted LLMs, RAG systems, and AI agents that operate securely on your infrastructure, enabling value extraction from internal data while maintaining control and confidentiality.'
    },
    {
      question: 'What industries benefit most from your AI integrations?',
      answer: 'Highly regulated and data-dense industries benefit the most, including banking, healthcare, insurance, logistics, manufacturing, legal technology, and enterprise SaaS. AI is implemented to support operations such as document processing, decision support, knowledge retrieval, customer engagement, and analytics enrichment.'
    },
    {
      question: 'What is EuSopht Automate?',
      answer: 'EuSopht Automate focuses on intelligent automation initiatives. This includes AI agents, workflow automation, RPA augmentations, and autonomous system orchestration across business functions to reduce manual labor, accelerate execution, and increase operational throughput. Visit <a href="https://automation.eusopht.com/">automation.eusopht.com</a> for more details.'
    },
    {
      question: 'What is EuSopht RevOps?',
      answer: 'EuSopht RevOps delivers revenue operations engineering—integrating CRM, data pipelines, analytics, and automation layers to optimize acquisition, lifecycle retention, forecasting, and revenue growth. We design RevOps infrastructure for organizations scaling beyond fragmented sales and marketing stacks. Visit <a href="https://revops.eusopht.com/">revops.eusopht.com</a> for more information.'
    },
    {
      question: 'How does the engagement process begin?',
      answer: 'Engagement begins with a technical discovery session. Our architects assess your current infrastructure, risks, constraints, and growth objectives. We then design an architecture roadmap and delivery model aligned to your governance, security, and performance requirements.'
    },
    {
      question: 'How long does it typically take to build enterprise-grade solutions?',
      answer: 'Timelines vary by problem complexity. Architecture and governance are addressed first, followed by staged agile delivery. Our methodology focuses on releasing deployable increments each sprint while maintaining long-term architectural integrity. Mission-critical solutions are generally delivered across phased releases.'
    },
    {
      question: 'Can you work with our internal engineering team?',
      answer: 'Yes. We frequently augment or co-architect with internal teams. Our engagements include collaboration models such as team augmentation, co-delivery pods, architecture oversight, and training on engineering standards to uplift internal capability.'
    },
    {
      question: 'Do you provide source code ownership?',
      answer: 'Yes. For custom enterprise engineering engagements, clients retain ownership of the delivered proprietary source code and IP as defined in contract terms. We do not lock-in clients through technology dependency or code control mechanisms.'
    },
    {
      question: 'How do you price your services?',
      answer: 'Pricing is structured around solution complexity, compliance requirements, performance constraints, and engagement model. We offer project-based delivery, dedicated engineering pods, or long-term managed architecture retainers. We do not compete in low-cost commodity development markets.'
    },
    {
      question: 'Do you sign NDAs and security agreements?',
      answer: 'Yes. We routinely sign NDAs, confidentiality agreements, and security appendices. For regulated environments, we align to vendor onboarding, infosec questionnaires, risk assessments, and compliance audits.'
    },
    {
      question: 'How do we get started?',
      answer: 'Schedule a technical discovery session with our architects. We will review your current systems, identify risk and bottlenecks, and define the appropriate architecture and scalability approach for your next growth phase.'
    }
  ];

  function selectFAQ(index){
  activeFAQIndex.value = activeFAQIndex.value === index ? null : index;
  }

  // EXPERTISE & INTEGRATIONS SECTION TEXT
  const selectedTag = ref(null);

  const expertiseIntegrationsList = [
    "Flutter Apps Development",
    "Hybrid apps development",
    "Cross platform apps development",
    "Resource augmentation",
    "Product Development",
    "SaaS product development",
    "AI product development",
    "AI Integration",
    "Web apps development",
    "Full stack development",
    "Mern stack development",
    "Third party software integration",
    "APIs integration",
    "Shipping APIs integration",
    "Shipping solutions",
    "Walmart Integration",
    "Shipstation Integration",
    "Veeqo APIs Integration",
    "Shipping APIs expert",
    "Easypost Integration",
    "Go Shippo Labels integration",
    "USPS APIs integration",
    "Carriers integration",
    "Ecommerce shipping solutions",
    "Laravel Development Vue.js",
    "MyOB integration",
    "Pets Care app development company",
    "Fintech app development company",
    "AI app development"
  ]

  function selectTag(tag){
    selectedTag.value = tag
  }

</script>


<template>
  <div class="page-container">
    <!-- PAGE HEADING -->
    <div> 
      <div class="faq-logo svg-container" aria-hidden="true" data-v-6b193204=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-6b193204=""><circle cx="12" cy="12" r="10" data-v-6b193204=""></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" data-v-6b193204=""></path><path d="M12 17h.01" data-v-6b193204=""></path></svg></div>
      <h1 class="FAQ-heading">Frequently Asked <span class="text-gradient">Questions</span></h1>
      <p class="FAQ-subtitle">Find answers to common questions about our solutions and services.</p>
    </div> 

    <!-- FAQ SECTION -->
    <div class="FAQ-container">

      <!-- LEFT SIDE (QUESTIONS) -->
      <div class="FAQ-list">
        <div v-for="(FAQ, index) in FAQs" :key="index" class="FAQ-question" :class="{ 'active': activeFAQIndex === index }"@click="selectFAQ(index)">
          <div class="FAQ-question-row">
            <span>{{ FAQ.question }}</span>
            <span class="arrow" :class="{ open: activeFAQIndex === index }">›</span>
          </div>

          <!-- MOBILE FAQ-->
          <div v-if="activeFAQIndex === index" class="FAQ-answer-mobile">
            <p v-html="FAQ.answer"></p>
          </div>
        </div>
      </div>

      <!-- RIGHT SIDE (DESKTOP ONLY) -->
      <div class="FAQ-answer" v-if="activeFAQIndex !== null">
        <h2>{{ FAQs[activeFAQIndex].question }}</h2>
        <p v-html="FAQs[activeFAQIndex].answer"></p>
      </div>

    </div>

    <!-- CTA SECTION -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <div class="cta-content">
            <h2 id="cta-title">
              Still have<span class="text-gradient"> Questions?</span>
            </h2>
            <p class="cta-text sub-text">
              Our team of experts is ready to transform your ideas into reality. Let's create something exceptional together.
            </p>
          </div>
          <div class="cta-action">
            <RouterLink class="cta-btn btn btn-big btn-round" to="/contact">
              Talk To Our Experts
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- EXPERTISE & INTEGRATIONS SECTION -->
    <div class="expertise-section">
      <h2 class="expertise-title">OUR EXPERTISE & INTEGRATIONS</h2>

      <div class="tags-container">
        <div v-for="(tag, index) in expertiseIntegrationsList" :key="index" class="tag-pill" :class="{ 'active': selectedTag === tag }" @click="selectTag(tag)">
          {{ tag }}
        </div>
      </div>
    </div>

  </div>
</template>


<style scoped>

.page-container {
  max-width: 1200px;
  margin: auto;
  padding: 0 1rem;
}

/* FAQ SECTION STYLING */

.faq-logo {
  width: 3.8rem;
  height: 3.8rem;
  margin: 1rem auto 2.5rem;
  background: color-mix(in srgb, var(--primary-colour) 8%, transparent);
  border-radius: 50%;
  margin-bottom: 1.5rem;
}

.faq-logo svg {
  width: 2rem;
  height: 2rem;
}

.svg-container {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: scale 0.3s ease;
}

.FAQ-heading {
  font-weight: 900;
  text-align: center;
  margin-top: 18px;
  margin-bottom: 10px;
  color: var(--text-colour-primary);
  font-size: 3.6rem; 
  letter-spacing: -0.1rem;
}

.text-gradient {
  background: linear-gradient(90deg,#60d3ff,#4a8fff);
  -webkit-background-clip: text;
  color: transparent;
}

.FAQ-subtitle {
  font-size: 1.2rem;
  text-align: center;
  margin: 0 auto 40px;
  color: var(--text-colour-secondary);
  max-width: 700px;
  letter-spacing: -0.05rem;
}

.FAQ-question {
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: var(--background-colour);
  border: 0.5px solid var(--text-colour-secondary);
  cursor: pointer;
  transition: 0.3s;
}

.FAQ-question-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.arrow {
  transition: transform 0.3s ease;
}

.arrow.open {
  transform: rotate(90deg);
}

.FAQ-question.active {
  background-color: var(--primary-colour);
  color: var(--background-colour);
  border: none;
}

.FAQ-container {
  display: flex;
  flex-wrap: nowrap; 
  gap: 40px;
  justify-content: center; 
  max-width: 1200px;
  margin: 0 auto 80px;
  width: 90vw;
}

.FAQ-list {
  flex: 1 1 40%; 
  min-width: 250px;
}

.FAQ-answer {
  flex: 1 1 58%; 
  min-width: 300px;
  box-shadow: var(--box-shadow);
  background-color: var(--background-colour);
  border: 0.5px solid var(--text-colour-secondary);
  padding: 30px;
  border-radius: 10px;
  position: sticky;
  top: 100px;
  align-self: flex-start;
  transition: all 0.3s ease-in-out;
}

.FAQ-answer p{
  padding: 10px 0;
  line-height: 1.8;
  color: var(--text-colour-secondary);
}

.FAQ-answer-mobile {
  display: none;
}

@media screen and (max-width: 800px) {

  .FAQ-container {
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }

  .FAQ-question {
    padding: 0; 
    border-radius: 12px;
    overflow: hidden; 
    border: 0.5px solid var(--text-colour-secondary);
    background-color: var(--background-colour);
  }

  .FAQ-question-row {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .FAQ-question.active .FAQ-question-row {
    background-color: var(--primary-colour);
    color: var(--background-colour);
  }

  .FAQ-answer-mobile {
    display: block;
    background-color: var(--background-colour);
    padding: 16px;
    border: 0.5px solid var(--text-colour-secondary);
  }

  .FAQ-answer-mobile p {
    color: var(--text-colour-secondary);
    line-height: 1.7;
  }

  .FAQ-answer {
    display: none;
  }

  .arrow {
    transition: transform 0.3s ease;
  }

  .arrow.open {
    transform: rotate(90deg);
  }

  .FAQ-question.active .arrow {
    color: var(--background-colour);
  }
}

/* CTA SECTION STYLING  */

.container {
  max-width: 87.5rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
}

.cta-section {
  padding-bottom: 3rem;
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
  text-decoration: none;
}

.btn-big {
  padding: 1.3rem 2.6rem;
}

.btn-round {
  border-radius: 50rem;
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


/* EXPERTISE & INTEGRATIONS SECTION STYLING */

.expertise-section {
  position: relative;
  text-align: center;
  margin-bottom: 80px;
  padding-top: 60px;
}

.expertise-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 95vw;
  border-top: 1px solid var(--text-colour-secondary);
}

.expertise-title {
  padding: 0 10px;
  font-size: 20px;
  letter-spacing: 3px;
  color: var(--text-colour-secondary);
  font-weight: bold;
  margin-bottom: 40px;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.tag-pill{
  padding: 12px 24px;
  border-radius: 30px;
  border: 2px solid var(--section-background-colour);
  background-color: var(--background-colour);
  color: var(--text-colour-secondary);
  cursor: pointer;
  font-size: 15px;
  transition: 0.2s;
}

.tag-pill:hover {
  background-color: var(--background-colour);
  border: 1px solid var(--secondary-colour);
  color: var(--primary-colour);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}

</style>

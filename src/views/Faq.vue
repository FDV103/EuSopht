<script setup>
import { ref } from 'vue'

// FAQ SECTION TEXT
const activeFAQIndex = ref(0)

const FAQs = [
  {
    question: 'What type of organizations does EuSopht typically work with?',
    answer:
      'We partner primarily with mid-market to large enterprises, regulated industries, and high-growth technology companies. Typical client profiles include banks, fintechs, healthcare providers, logistic networks, SaaS platforms, and government-adjacent entities that require reliability, security, and scalability as foundational attributes - not optional add ons.',
  },
  {
    question: 'What differentiates EuSopht from conventional software development agencies?',
    answer:
      'We are engineering-first and architecture-led. Instead of simply building apps, we design proprietary software ecosystems built for high availability, strict data governance, and long-term extensibility. Our delivery model focuses on zero technical debt, security-by-design, and performance optimization from day one.',
  },
  {
    question: 'What does "Enterprise-Grade" mean in practice?',
    answer:
      'Enterprise-grade means measurable standards: audited architecture documentation, redundancy planning, disaster recovery policies, RBAC enforcement, secure SDLC, uptime SLAs, monitoring, and compliance alignment. It also means the system is designed to scale vertically and horizontally while maintaining performance metrics under load.',
  },
  {
    question: 'Do you only work with large companies, or do you support startups as well?',
    answer:
      'We support startups that have enterprise ambitions. If your product requires significant scaling, sensitive data handling, or mission-critical reliability, we are a good fit. We are not a match for low-budget MVP churn or experimental prototypes intended for rapid disposal.',
  },
  {
    question: 'Can EuSopht modernize our legacy systems without disrupting operations?',
    answer:
      'Yes. Legacy modernization is one of our core capabilities. We carefully decompose monolithic architectures into microservices, containerized workloads, and cloud-native deployments. This is executed in parallel environments, ensuring continuity of business operations while the transition occurs.',
  },
  {
    question: 'Do you provide support after deployment?',
    answer:
      'Yes. We provide post-deployment managed services, reliability engineering support, monitoring, incident response, and continuous optimization. Many clients retain us as long-term architecture partners to oversee scalability, updates, and infrastructure governance.',
  },
  {
    question: 'How do you ensure data security and compliance?',
    answer:
      'Security is embedded in our engineering lifecycle. We employ encryption standards, RBAC, IAM governance, secure key management, secrets rotation, vulnerability scanning, secure code reviews, audit logging, and compliance alignment frameworks such as ISO 27001 and SOC 2. We design for risk mitigation first, not as a retrofit.',
  },
  {
    question: 'Do you offer on-premise or private cloud deployments?',
    answer:
      'Yes. We architect systems to operate on private cloud, hybrid models, sovereign cloud environments, or on-premise hardware. This is particularly relevant for organizations with compliance restrictions, data residency requirements, or strict confidentiality mandates.',
  },
  {
    question: 'What does "Sovereign AI" mean?',
    answer:
      'Sovereign AI refers to private AI infrastructure deployed within your environment—never sending proprietary data to public models. We implement self-hosted LLMs, RAG systems, and AI agents that operate securely on your infrastructure, enabling value extraction from internal data while maintaining control and confidentiality.',
  },
  {
    question: 'What industries benefit most from your AI integrations?',
    answer:
      'Highly regulated and data-dense industries benefit the most, including banking, healthcare, insurance, logistics, manufacturing, legal technology, and enterprise SaaS. AI is implemented to support operations such as document processing, decision support, knowledge retrieval, customer engagement, and analytics enrichment.',
  },
  {
    question: 'What is EuSopht Automate?',
    answer:
      'EuSopht Automate focuses on intelligent automation initiatives. This includes AI agents, workflow automation, RPA augmentations, and autonomous system orchestration across business functions to reduce manual labor, accelerate execution, and increase operational throughput. Visit <a href="https://automation.eusopht.com/">automation.eusopht.com</a> for more details.',
  },
  {
    question: 'What is EuSopht RevOps?',
    answer:
      'EuSopht RevOps delivers revenue operations engineering—integrating CRM, data pipelines, analytics, and automation layers to optimize acquisition, lifecycle retention, forecasting, and revenue growth. We design RevOps infrastructure for organizations scaling beyond fragmented sales and marketing stacks. Visit <a href="https://revops.eusopht.com/">revops.eusopht.com</a> for more information.',
  },
  {
    question: 'How does the engagement process begin?',
    answer:
      'Engagement begins with a technical discovery session. Our architects assess your current infrastructure, risks, constraints, and growth objectives. We then design an architecture roadmap and delivery model aligned to your governance, security, and performance requirements.',
  },
  {
    question: 'How long does it typically take to build enterprise-grade solutions?',
    answer:
      'Timelines vary by problem complexity. Architecture and governance are addressed first, followed by staged agile delivery. Our methodology focuses on releasing deployable increments each sprint while maintaining long-term architectural integrity. Mission-critical solutions are generally delivered across phased releases.',
  },
  {
    question: 'Can you work with our internal engineering team?',
    answer:
      'Yes. We frequently augment or co-architect with internal teams. Our engagements include collaboration models such as team augmentation, co-delivery pods, architecture oversight, and training on engineering standards to uplift internal capability.',
  },
  {
    question: 'Do you provide source code ownership?',
    answer:
      'Yes. For custom enterprise engineering engagements, clients retain ownership of the delivered proprietary source code and IP as defined in contract terms. We do not lock-in clients through technology dependency or code control mechanisms.',
  },
  {
    question: 'How do you price your services?',
    answer:
      'Pricing is structured around solution complexity, compliance requirements, performance constraints, and engagement model. We offer project-based delivery, dedicated engineering pods, or long-term managed architecture retainers. We do not compete in low-cost commodity development markets.',
  },
  {
    question: 'Do you sign NDAs and security agreements?',
    answer:
      'Yes. We routinely sign NDAs, confidentiality agreements, and security appendices. For regulated environments, we align to vendor onboarding, infosec questionnaires, risk assessments, and compliance audits.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Schedule a technical discovery session with our architects. We will review your current systems, identify risk and bottlenecks, and define the appropriate architecture and scalability approach for your next growth phase.',
  },
]

function selectFAQ(index) {
  activeFAQIndex.value = index
}

// EXPERTISE & INTEGRATIONS SECTION TEXT
const selectedTag = ref(null)

const expertiseIntegrationsList = [
  'Flutter Apps Development',
  'Hybrid apps development',
  'Cross platform apps development',
  'Resource augmentation',
  'Product Development',
  'SaaS product development',
  'AI product development',
  'AI Integration',
  'Web apps development',
  'Full stack development',
  'Mern stack development',
  'Third party software integration',
  'APIs integration',
  'Shipping APIs integration',
  'Shipping solutions',
  'Walmart Integration',
  'Shipstation Integration',
  'Veeqo APIs Integration',
  'Shipping APIs expert',
  'Easypost Integration',
  'Go Shippo Labels integration',
  'USPS APIs integration',
  'Carriers integration',
  'Ecommerce shipping solutions',
  'Laravel Development Vue.js',
  'MyOB integration',
  'Pets Care app development company',
  'Fintech app development company',
  'AI app development',
]
</script>

<template>
  <div class="page-container">
    <!-- PAGE HEADING -->
    <!-- 
      NEED TO WORK ON:
      [] Add question mark icon on top of heading
     -->
    <h1 class="FAQ-heading">Frequently Asked <span>Questions</span></h1>
    <p class="FAQ-subtitle">Find answers to common questions about our solutions and services.</p>

    <!-- FAQ SECTION -->
    <!-- 
      NEED TO WORK ON:
      [] Make sure anchor tags work properly and open in new tab
      -->
    <div class="FAQ-container">
      <!-- FAQ LEFT SIDE QUESTIONS -->
      <div class="FAQ-list">
        <div
          v-for="(FAQ, index) in FAQs"
          :key="index"
          class="FAQ-question"
          :class="{ active: activeFAQIndex === index }"
          @click="selectFAQ(index)"
        >
          {{ FAQ.question }}
          <span>›</span>
        </div>
      </div>

      <!-- FAQ RIGHT SIDE ANSWERS -->
      <div class="FAQ-answer">
        <h2>{{ FAQs[activeFAQIndex].question }}</h2>
        <p v-html="FAQs[activeFAQIndex].answer"></p>
      </div>
    </div>

    <!-- CTA SECTION -->
    <!-- <div class="CTA-section">
      <h1 class="CTA-title">Still have <span>Questions?</span></h1>
      <p class="CTA-subtitle">Our team of experts is ready to transform your ideas into reality. Let's create something exceptional together.</p>

      <button class="CTA-button">Talk To Our Experts</button>
    </div> -->
  </div>
</template>

<style scoped>
/* 
NEED TO WORK ON:
[] Double check fonts & colours and set up global variables if not already done
[] Add responsive design for mobile devices
[] Add night mode colours effect
*/

.page-container {
  max-width: 1200px;
  margin: auto;
}

/* FAQ SECTION STYLING */

/* 
NEED TO WORK ON:
[] Make answer section sticky on scroll
[] Add shadows on answer box
[] Make answer section responsive to text length
[] Add smooth transition to answers when switching questions
[] Change text color and add underline for a tags, on hover text should be lighter
[] Add gradient effect on Questions in heading
*/

.FAQ-heading {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 15px;
  color: #0f172a;
}

.FAQ-subtitle {
  font-size: 1.2rem;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #5d6166;
}

.FAQ-container {
  display: flex;
  gap: 40px;
  margin-top: 60px;
  margin-bottom: 80px;
}

.FAQ-list {
  width: 40%;
}

.FAQ-question {
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: #f1f5f9;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.FAQ-question.active {
  background-color: #0f172a;
  color: white;
}

.FAQ-answer {
  width: 60%;
  background-color: #f8fafc;
  padding: 30px;
  border-radius: 10px;
}

/* CTA SECTION STYLING  */

/* .cta-section {
  background:linear-gradient(135deg,#0b2447,#0f2a52);
  border-radius: 40px;
  padding: 70px 40px;
  text-align: center;
  color: white;
  margin-bottom: 80px;
}

.cta-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.cta-title span{
  background: linear-gradient(90deg,#60d3ff,#4a8fff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.cta-subtitle {
  max-width: 600px;
  margin: auto;
  font-size: 18px;
  margin-bottom: 30px;
  color:#cbd5e1
}

.cta-button {
  background: linear-gradient(90deg,#56c6e7, #6dd5ed);
  border: none;
  padding: 16px 36px;
  border-radius: 40px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  color: white;
} */
</style>

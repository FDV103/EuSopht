import autoFlowImg from '@/assets/autoflow.png'
import viziiImg from '@/assets/vizii.png'
import midwifeImg from '@/assets/midwife.png'

export const featuredProjects = [
  {
    id: 1,
    slug: 'autoflow',
    title: 'AutoFlow',
    type: 'Web Application',
    image: autoFlowImg,
    shortDescription: 'Car dealership web and app portal.',
    industry: 'Automotive',
    client: 'AutoFlow',
    services: ['UI/UX Design', 'Web Development'],
    techStack: ['Vue', 'Laravel', 'MySQL'],
    overview:
      'AutoFlow is a dealership-focused platform built to simplify vehicle browsing and improve digital interaction for customers through a modern, responsive web experience.',
    challenge:
      'The client needed a cleaner and more polished way to present inventory online while making the browsing experience more intuitive and visually professional.',
    solution:
      'A responsive web application was designed and structured to improve navigation, highlight inventory more effectively, and create a stronger digital brand presence.',
    features: ['Inventory Browsing', 'Responsive Design', 'Improved User Flow'],
    gallery: [autoFlowImg],
  },
  {
    id: 2,
    slug: 'vizii',
    title: 'Vizii',
    type: 'Web Application',
    image: viziiImg,
    shortDescription: 'Analytics dashboard for cloud accounting software.',
    industry: 'Finance',
    client: 'Vizii',
    services: ['Dashboard Design', 'Web Development'],
    techStack: ['Vue', 'Node.js', 'Chart.js'],
    overview:
      'Vizii is a web-based analytics dashboard designed to compile and present accounting insights from platforms like Xero and QuickBooks in a centralized interface.',
    challenge:
      'The client needed a way to make financial analytics easier to interpret while reducing complexity for users who needed quick visibility into business performance.',
    solution:
      'A dashboard-focused web application was created to organize metrics clearly, improve readability, and support faster understanding of important accounting data.',
    features: ['Analytics Dashboard', 'Centralized Reporting', 'Clear Data Visualization'],
    gallery: [viziiImg],
  },
  {
    id: 3,
    slug: 'midwifex',
    title: 'MidwifeX',
    type: 'Mobile Application',
    image: midwifeImg,
    shortDescription: 'Mobile-first healthcare support experience.',
    industry: 'Healthcare',
    client: 'MidwifeX',
    services: ['Mobile App Design', 'App Development'],
    techStack: ['Vue', 'Capacitor', 'Firebase'],
    overview:
      'MidwifeX is a mobile application designed to support healthcare-related workflows with a simple, accessible, and mobile-friendly user experience.',
    challenge:
      'The goal was to create an application that felt lightweight and easy to use while still presenting important healthcare-related content clearly on smaller screens.',
    solution:
      'A mobile-first interface was developed with clear information hierarchy, simplified navigation, and a user experience tailored for quick access on the go.',
    features: ['Mobile-First Design', 'Accessible Layout', 'Simplified Navigation'],
    gallery: [midwifeImg],
  },
]

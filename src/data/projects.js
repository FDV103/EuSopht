import autoFlowImg from '@/assets/Projects/autoflow.png'
import viziiImg from '@/assets/Projects/vizii.png'
import midwifeImg from '@/assets/Projects/midwife.png'
import cricketMoodImg from '@/assets/Projects/7.png'
import learningCertImg from '@/assets/Projects/LearningCert.png'
import postMericaImg from '@/assets/Projects/Postmerica.png'
import aiBuddyImg from '@/assets/Projects/AIBuddyf.png'
import canezoImg from '@/assets/Projects/canezo.png'
import meuExoticoImg from '@/assets/Projects/meu-exotico.png'

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
    projectLinks: [
      {
        label: 'Web App (Coming Soon)',
        url: '',
        isComingSoon: true,
        platform: 'web',
      },
    ],
    overview:
      'AutoFlow is a dealership-focused platform built to simplify vehicle browsing and improve digital interaction for customers through a modern, responsive web experience.',
    challenge:
      'The client needed a cleaner and more polished way to present inventory online while making the browsing experience more intuitive and visually professional.',
    solution:
      'A responsive web application was designed and structured to improve navigation, highlight inventory more effectively, and create a stronger digital brand presence.',
    features: [
      'Search and filter cars by price, model, mileage, and more.',
      'Book test drives and upload documents digitally.',
      'Live inventory management with dealer admin dashboard.',
      'Role-based dashboards for Admins, Dealers, and Customers.',
      'In-app messaging with real-time lead capture.',
      'Push notifications for offers, alerts, and updates.',
      'Analytics dashboard to track user activity and conversions.',
    ],
    gallery: [autoFlowImg],
  },
  {
    id: 2,
    slug: 'cricketmood',
    title: 'CricketMood',
    type: 'Mobile Application',
    image: cricketMoodImg,
    shortDescription: 'Live cricket platform.',
    industry: 'Sports Media',
    client: 'CricketMood',
    services: ['UI/UX Design', 'Mobile App Development'],
    techStack: ['Firebase', 'Flutter', 'FL Chat', 'GraphQL Flutter'],
    projectLinks: [
      {
        label: 'iOS App (Coming Soon)',
        url: '',
        isComingSoon: true,
        platform: 'ios',
      },
      {
        label: 'Android App (Coming Soon)',
        url: '',
        isComingSoon: true,
        platform: 'android',
      },
    ],
    overview:
      'CricketMood is a live cricket platform that keeps fans connected to every tour and league, both domestic and international, through real-time scores, ball-by-ball commentary, news, rankings, stats, and interactive highlights.',
    challenge:
      'Cricket fans need a fast and reliable way to follow live matches, breaking developments, and performance insights across many tournaments at once without missing key moments on or off the field.',
    solution:
      'A mobile experience was built to centralize live scoring, commentary, analytics, rankings, news, and video highlights into one streamlined platform, making it easier for users to stay informed and engaged throughout every match and tournament.',
    features: [
      'Live score and ball-by-ball commentary across ICC events and domestic leagues.',
      'Coverage of Tests, ODIs, T20 leagues, and franchise tournaments worldwide.',
      'Breaking news, team updates, player profiles, and injury reports.',
      'Up-to-date rankings, leaderboards, and player career statistics.',
      'Interactive reels and video highlights from major cricket moments.',
      'Real-time updates across leagues such as IPL, BPL, PSL, BBL, The Hundred, and more.',
    ],
    gallery: [cricketMoodImg],
  },
  {
    id: 3,
    slug: 'vizii',
    title: 'Vizii',
    type: 'Web Application',
    image: viziiImg,
    shortDescription: 'Analytics dashboard for cloud accounting software.',
    industry: 'Finance',
    client: 'Vizii',
    services: ['Dashboard Design', 'Web Development'],
    techStack: ['Vue', 'Node.js', 'Chart.js'],
    projectLinks: [
      {
        label: 'Web App',
        url: 'https://vizii.com/',
        isComingSoon: false,
        platform: 'web',
      },
    ],
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
    id: 4,
    slug: 'learning-cert',
    title: 'Learning Cert',
    type: 'Web Application',
    image: learningCertImg,
    shortDescription:
      'Certification training platform with clear learning pathways and structured program guidance.',
    industry: 'Education Technology',
    client: 'Learning Cert',
    services: ['Web Design', 'Web Development'],
    techStack: ['Nuxt', 'Laravel'],
    projectLinks: [
      {
        label: 'Web App',
        url: 'https://www.learningcert.com/',
        isComingSoon: false,
        platform: 'web',
      },
    ],
    overview:
      'Learning Cert is a custom-built platform for certification training providers that guides individuals through structured certification programs with clarity, presenting learning paths, program details, and requirements in a clean and easy-to-navigate experience.',
    challenge:
      'Certification programs can be complex and difficult for learners to navigate, requiring a platform that clearly communicates pathways, requirements, and progression without overwhelming users.',
    solution:
      'A learner-centric web experience was designed to simplify onboarding, organize certification information into clear pathways, and provide an intuitive structure that helps users understand exactly how to achieve their professional goals.',
    features: [
      'Clear certification pathways and program breakdowns.',
      'Structured course and certification information.',
      'User-friendly navigation for learners at every stage.',
      'Scalable architecture for adding new programs.',
      'Responsive design optimized across devices.',
    ],
    gallery: [learningCertImg],
  },
  {
    id: 5,
    slug: 'postmerica',
    title: 'Postmerica',
    type: 'Web Application',
    image: postMericaImg,
    shortDescription:
      'Bulk shipping label generation and fulfillment platform for eCommerce businesses.',
    industry: 'eCommerce Logistics',
    client: 'Postmerica',
    services: ['Web Design', 'Web Development'],
    techStack: ['React', 'Node.js', 'MySQL'],
    projectLinks: [
      {
        label: 'Web App',
        url: 'https://postmerica.com/',
        isComingSoon: false,
        platform: 'web',
      },
    ],
    overview:
      'Postmerica is a label generation and fulfillment solution designed for eCommerce store owners, enabling them to fetch orders from multiple sales channels and generate bulk shipping labels from a single dashboard to streamline operations.',
    challenge:
      'High-volume eCommerce businesses often struggle with fragmented order sources, manual label creation, and inefficient fulfillment workflows that increase costs and processing time.',
    solution:
      'An automation-first platform was developed to centralize order management, enable bulk label generation, and provide a clean dashboard experience that reduces operational overhead while supporting scalable growth.',
    features: [
      'Centralized order fetching from multiple eCommerce platforms.',
      'Bulk shipping label generation at competitive rates.',
      'Optimized workflow for high-volume fulfillment operations.',
      'Clean dashboard for order and label management.',
      'Scalable architecture to support business growth.',
    ],
    gallery: [postMericaImg],
  },
  {
    id: 6,
    slug: 'midwifex',
    title: 'MidwifeX',
    type: 'Mobile Application',
    image: midwifeImg,
    shortDescription: 'Mobile-first healthcare support experience.',
    industry: 'Healthcare',
    client: 'MidwifeX',
    services: ['Mobile App Design', 'App Development'],
    techStack: ['Vue', 'Capacitor', 'Firebase'],
    projectLinks: [
      {
        label: 'iOS App (Coming Soon)',
        url: '',
        isComingSoon: true,
        platform: 'ios',
      },
      {
        label: 'Android App (Coming Soon)',
        url: '',
        isComingSoon: true,
        platform: 'android',
      },
    ],
    overview:
      'MidwifeX is a mobile application designed to support healthcare-related workflows with a simple, accessible, and mobile-friendly user experience.',
    challenge:
      'The goal was to create an application that felt lightweight and easy to use while still presenting important healthcare-related content clearly on smaller screens.',
    solution:
      'A mobile-first interface was developed with clear information hierarchy, simplified navigation, and a user experience tailored for quick access on the go.',
    features: ['Mobile-First Design', 'Accessible Layout', 'Simplified Navigation'],
    gallery: [midwifeImg],
  },
  {
    id: 7,
    slug: 'social-media-blast',
    title: 'Social Media Blast',
    type: 'Web Application',
    image: aiBuddyImg,
    shortDescription:
      'AI-powered platform for creating, scheduling, and publishing social media content across multiple networks.',
    industry: 'Marketing Technology',
    client: 'Social Media Blast',
    services: ['Web Design', 'Web Development', 'AI Integration'],
    techStack: ['React', 'TypeScript', 'Lovable'],
    projectLinks: [
      {
        label: 'Web App',
        url: 'https://aibuddy.pro/',
        isComingSoon: false,
        platform: 'web',
      },
    ],
    overview:
      'Social Media Blast is an AI-powered social media management platform that enables creators, businesses, and marketers to generate content, manage media, and publish posts across multiple platforms from a single unified dashboard.',
    challenge:
      'Managing multiple social media accounts requires significant time, creativity, and coordination, especially when producing consistent content across different platforms with varying formats and schedules.',
    solution:
      'A centralized web application was built to automate content creation, streamline scheduling, and support multi-platform publishing, allowing users to maintain a consistent online presence while reducing manual workload.',
    features: [
      'Multi-platform posting to Facebook, Instagram, X (Twitter), LinkedIn, TikTok, and YouTube.',
      'Manual editor, AI-generated content, and smart hashtag generation.',
      'AI image generation, customization, and upload options.',
      'AI video generation including avatar-based videos.',
      'Flexible publishing with instant posting, scheduling, and recurring posts.',
      'Unified dashboard for managing content, media, and schedules.',
    ],
    gallery: [aiBuddyImg],
  },
  {
    id: 8,
    slug: 'canezo',
    title: 'Canezo',
    type: 'Web Application',
    image: canezoImg,
    shortDescription:
      'E-commerce website for an organic sugar brand with product showcase and online ordering.',
    industry: 'Food & Beverage',
    client: 'Canezo',
    services: ['Web Design', 'E-commerce Development'],
    techStack: ['Shopify'],
    projectLinks: [
      {
        label: 'Web App',
        url: 'https://canezo.com/',
        isComingSoon: false,
        platform: 'web',
      },
    ],
    overview:
      'Canezo is a modern web platform created for an organic sugarcane sugar brand to strengthen its digital presence, showcase its story and products, and provide a seamless online purchasing experience through a visually rich and mobile-friendly interface.',
    challenge:
      'The brand needed a compelling online presence that could communicate product quality, educate health-conscious customers, and support direct-to-consumer sales while remaining fast, accessible, and easy to manage.',
    solution:
      'A responsive e-commerce website was developed with a strong visual identity, streamlined shopping flow, and integrated content management, enabling customers to browse products, check availability, and place orders with ease.',
    features: [
      'Visually engaging and responsive product showcase.',
      'Integrated e-commerce system for online ordering and payments.',
      'Location-based delivery and availability checker.',
      'CMS-enabled backend for managing content and products.',
      'SEO-optimized pages to improve search visibility.',
    ],
    gallery: [canezoImg],
  },
  {
    id: 9,
    slug: 'meu-exotico',
    title: 'Meu Exótico',
    type: 'Mobile Application',
    image: meuExoticoImg,
    shortDescription:
      'Pet management app for tracking health, growth, feeding, and records of exotic pets.',
    industry: 'Pet Care',
    client: 'Meu Exótico',
    services: ['Mobile App Design', 'App Development'],
    techStack: ['React Native', 'Firebase'],
    projectLinks: [
      {
        label: 'iOS App',
        url: 'https://apps.apple.com/pk/app/meu-exotico/id1615574918',
        isComingSoon: false,
        platform: 'ios',
      },
      {
        label: 'Android App',
        url: 'https://play.google.com/store/apps/details?id=br.com.meuexotico',
        isComingSoon: false,
        platform: 'android',
      },
    ],
    overview:
      'Meu Exótico is a mobile application designed to help owners manage the life, health, and development of unconventional pets such as reptiles, birds, and rodents through comprehensive tracking, records management, and visual insights.',
    challenge:
      'Owners of exotic pets often rely on scattered notes and paper documents to track feeding, growth, health events, and records, making it difficult to monitor long-term development or share accurate information with veterinarians.',
    solution:
      'A centralized mobile platform was created to record feeding schedules, weight changes, skin shedding cycles, health events, documents, and growth metrics, providing owners with a clear and organized view of their pet’s development over time.',
    features: [
      'Track feeding schedules, quantities, and efficiency over time.',
      'Monitor weight, growth trends, and health indicators.',
      'Record reptile shedding cycles and intervals.',
      'Store medical records, documents, and certificates of origin.',
      'Log unexpected events such as food refusal or health issues.',
      'Visualize pet data through dynamic charts and reports.',
      'Notifications for scheduled care activities and updates.',
    ],
    gallery: [meuExoticoImg],
  },
]

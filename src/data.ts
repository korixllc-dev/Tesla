import { Service, Project, Testimonial, ProcessStep } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'web-design',
    title: 'Website Design',
    description: 'Bespoke corporate website designs that captivate visitors, establish enterprise-grade credibility, and drive high conversions.',
    features: [
      'Custom business branding & UI/UX layout',
      'High-converting lead acquisition landing pages',
      'Ultra-responsive viewport adaptation'
    ],
    icon: 'Palette',
    subBadge: 'Innovative'
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Engineered high-performance web applications, headless architectures, and integrated robust e-commerce engines.',
    features: [
      'Custom reactive functionality and client dashboards',
      'Scalable Shopify & WooCommerce e-commerce development',
      'API, CRM, and cloud ledger integrations'
    ],
    icon: 'CodeXml',
    subBadge: 'High-Performance'
  },
  {
    id: 'web-hosting',
    title: 'Web Hosting Solutions',
    description: 'Secure, high-availability Texas-based cloud servers optimizing server-response time and minimizing page latency.',
    features: [
      'Blazing-fast SSD servers and localized CDNs',
      'Automated Zero-Trust SSL certificates',
      'Encrypted daily system restoration backups'
    ],
    icon: 'Server',
    subBadge: '99.9% Uptime'
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    description: 'Technical, structural, and content search optimization built to position your Texas business at the pinnacle of Google search.',
    features: [
      'Metadata schema injection and page speed tuning',
      'In-depth competitor and search keyword maps',
      'Highly targeted localized SEO campaigns'
    ],
    icon: 'TrendingUp',
    subBadge: 'Google Elite'
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance',
    description: 'Continuous defense, routine updates, and meticulous speed audits ensuring zero downtime for your operational platform.',
    features: [
      '24/7 endpoint vulnerability scanning and guard duty',
      'Monthly theme, core library, and plugin patching',
      'Continuous media asset compression and load tuning'
    ],
    icon: 'ShieldCheck',
    subBadge: 'Secure'
  },
  {
    id: 'business-solutions',
    title: 'Business Digital Solutions',
    description: 'Bespoke automation blueprints and business workflows crafted to streamline overhead, expand scale, and save hours.',
    features: [
      'Legacy operational flow automation',
      'B2B CRM pipeline design and system auditing',
      'Strategic consulting with dedicated Texas engineers'
    ],
    icon: 'Cpu',
    subBadge: 'Scale-Ready'
  }
];

export const WHY_CHOOSE_US_DATA = [
  {
    title: 'Texas-Based Company',
    description: 'Proudly operating from the heart of Texas. Real local American experts ready to consult face-to-face or via professional conference call.',
    icon: 'MapPin'
  },
  {
    title: 'Mobile-First Development',
    description: 'Every layout is meticulously designed and structurally optimized from small mobile phone viewports up to expansive widescreen formats.',
    icon: 'Smartphone'
  },
  {
    title: 'SEO-Ready Websites',
    description: 'We do not treat SEO as an afterthought. Organic metadata structures and mobile-friendliness are engineered into the codebase on day one.',
    icon: 'Search'
  },
  {
    title: 'Fast Loading Speeds',
    description: 'Optimized asset delivery, server caching, and light code design maximize your Core Web Vitals to prevent customer drop-offs.',
    icon: 'Zap'
  },
  {
    title: 'Secure Hosting',
    description: 'Hardened network endpoints, secure SSH protocols, firewall routing, and automated updates protect user transactions and confidential databases.',
    icon: 'Lock'
  },
  {
    title: 'Scalable Solutions',
    description: 'Code architectures that scale effortlessly as your traffic spikes. We build flexible platforms that easily expand alongside your corporate growth.',
    icon: 'Sliders'
  },
  {
    title: 'Professional Support',
    description: 'Access responsive, expert technical assistance. No foreign call centers; receive prompt, professional help from real Texas-based team members.',
    icon: 'Headphones'
  },
  {
    title: 'Transparent Pricing',
    description: 'Honest itemized estimates, affordable recurring hosting fees, and clear work deliverables with zero hidden costs or compliance surprises.',
    icon: 'Receipt'
  }
];

export const PORTFOLIO_DATA: Project[] = [
  {
    id: 'project-corp',
    title: 'Apex Financial Services',
    category: 'Design',
    description: 'High-end responsive corporate redesign with real-time financial planners and sleek service structures.',
    tags: ['Next.js', 'Tailwind', 'Motion UI'],
    imagePlaceholderColor: 'from-[#0B2C6F] to-[#1E73BE]'
  },
  {
    id: 'project-ecom',
    title: 'Lone Star Outdoor Goods',
    category: 'Development',
    description: 'Enterprise Shopify e-commerce platform with robust shopping carts and real-time inventory synchronization.',
    tags: ['React', 'Shopify Storefront', 'GraphQL'],
    imagePlaceholderColor: 'from-[#1E73BE] to-[#C8102E]'
  },
  {
    id: 'project-nonprofit',
    title: 'Keep Texas Historic Foundation',
    category: 'Design',
    description: 'Modern, fully accessible informational hub and fundraising streamline that doubled community donations.',
    tags: ['Custom CMS', 'Tailwind', 'Stripe Billing'],
    imagePlaceholderColor: 'from-[#051d4d] to-[#1E73BE]'
  },
  {
    id: 'project-startup',
    title: 'HoloCloud Logistics Inc.',
    category: 'Development',
    description: 'A dynamic, high-conversion branding landing page for a shipping software startup, featuring floating charts.',
    tags: ['Vite', 'React SPA', 'Framer Motion'],
    imagePlaceholderColor: 'from-[#C8102E] to-[#0B2C6F]'
  },
  {
    id: 'project-services',
    title: 'Cascade Medical Group',
    category: 'SEO',
    description: 'Local clinic patient portal and SEO overhaul, ranking Cascade #1 in local search across 5 counties.',
    tags: ['Technical SEO', 'Structured Data', 'React'],
    imagePlaceholderColor: 'from-[#1E73BE] to-[#0B2C6F]'
  },
  {
    id: 'project-educ',
    title: 'Vanguard Academy Online',
    category: 'Hosting',
    description: 'LMS education system cluster holding stable performance during statewide examinations with over 10k users.',
    tags: ['Docker Cluster', 'Web Hosting', 'SSL Tunnel'],
    imagePlaceholderColor: 'from-[#0B2C6F] to-[#8a1329]'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    company: 'Jenkins Financial Advisory',
    role: 'Founder',
    rating: 5,
    content: 'KORIX LLC completely overhauled our corporate website. Their design was gorgeous, but more importantly, our consulting leads spiked 40% in the first quarter itself. Their focus on speed is incredible!',
    avatarLetter: 'S'
  },
  {
    id: 'test-2',
    name: 'Marcus Ramirez',
    company: 'Saddle & Trail Outfitters',
    role: 'Marketing Director',
    rating: 5,
    content: 'Finding team members who understand both tech development and local Texas business was tough. KORIX did both flawlessly. Our physical store traffic has boomed thanks to their customized local SEO campaign.',
    avatarLetter: 'M'
  },
  {
    id: 'test-3',
    name: 'Dr. Elizabeth Chen',
    company: 'Vanguard Medical Clinics',
    role: 'Managing Partner',
    rating: 5,
    content: 'We migrated our critical patient information portal to KORIX secure hosting. Their servers are blazingly fast, and they handled all SSH/SSL details. Customer support answers within minutes in perfect English.',
    avatarLetter: 'E'
  },
  {
    id: 'test-4',
    name: 'Johnathan Miller',
    company: 'Grace Community Harvest',
    role: 'Executive Director',
    rating: 5,
    content: 'Our nonprofit platform was slow and difficult to edit. KORIX delivered an ultra-responsive, beautiful design that stands out. Donation processing is now integrated directly and runs completely without friction.',
    avatarLetter: 'J'
  }
];

export const PROCESS_STEPS_DATA: ProcessStep[] = [
  {
    stepNumber: '01',
    phase: 'Focus',
    title: 'Analyze Business Objectives',
    description: 'We sit down with you to study your audience, parse search demand, and specify measurable, high-return goals.',
    details: ['Competitive landscape auditing', 'Intent mapping & keyword strategy', 'Design requirement definitions'],
    icon: 'Target'
  },
  {
    stepNumber: '02',
    phase: 'Plan',
    title: 'Strategy & Architectural Blueprinting',
    description: 'We construct high-fidelity mockups, clean wireframes, and outline robust server & SEO architecture specifications.',
    details: ['Interactive UI/UX prototypes', 'Content strategy outline', 'Speed and hosting blueprints'],
    icon: 'Compass'
  },
  {
    stepNumber: '03',
    phase: 'Execute',
    title: 'High-Fidelity Coding & Launch',
    description: 'Our Texas team writes modern, clean, search-ready code and migrates your operational services onto bulletproof secure hosting.',
    details: ['Clean, pixel-perfect code execution', 'Thorough cross-device optimization', 'Rigorous pre-launch speed audit'],
    icon: 'Rocket'
  },
  {
    stepNumber: '04',
    phase: 'Win',
    title: 'Grow & Excel Online',
    description: 'We closely track Core Web Vitals, index your schema models, and optimize campaigns to scale leads and expand your market footprint.',
    details: ['Continuous SEO indexation management', 'Hardened backups & plugin updates', 'Lead conversion rate optimizations'],
    icon: 'Trophy'
  }
];

/* ============================================
   CONTENT DATA
   Structured data for articles, resources, and advisory
   ============================================ */

const siteData = {
  // ============================================
  // ARTICLES / INSIGHTS
  // ============================================
  articles: [
    {
      id: 'reliability-business-strategy',
      category: 'SRE',
      title: 'Reliability Is a Business Strategy',
      excerpt: 'Explore how forward-thinking organizations are shifting reliability from an operational concern to a core business strategy.',
      content: 'Modern organizations are discovering that reliability is not just a technical concern. It\'s a business strategy that directly impacts customer satisfaction, competitive advantage, and revenue. This article explores how to position reliability as a core business capability.',
      readingTime: 8,
      author: 'Leadership Hub',
      date: '2026-08-12',
      featured: true,
      image: 'https://via.placeholder.com/400x250/d4b5e0/2c3e7f?text=Reliability+Strategy'
    },
    {
      id: 'slos-error-budgets',
      category: 'SRE',
      title: 'Building Effective SLOs and Error Budgets',
      excerpt: 'Learn how to define meaningful SLOs and use error budgets as a powerful tool for balancing reliability and velocity.',
      content: 'Service Level Objectives (SLOs) and error budgets are critical tools for managing reliability at scale. This guide covers how to define SLOs that matter, calculate error budgets, and use them to make better engineering decisions.',
      readingTime: 10,
      author: 'Leadership Hub',
      date: '2026-08-11',
      featured: true,
      image: 'https://via.placeholder.com/400x250/d4b5e0/2c3e7f?text=SLOs+Error+Budgets'
    },
    {
      id: 'mttr-business-resilience',
      category: 'Reliability',
      title: 'From MTTR to Business Resilience',
      excerpt: 'Beyond traditional metrics: how to measure and improve the true resilience of your engineering organization.',
      content: 'Traditional metrics like MTTR tell only part of the story. This article explores how to measure business resilience holistically and build organizations that can withstand and recover from failures gracefully.',
      readingTime: 7,
      author: 'Leadership Hub',
      date: '2026-08-10',
      featured: true,
      image: 'https://via.placeholder.com/400x250/d4b5e0/2c3e7f?text=Business+Resilience'
    },
    {
      id: 'aiops-alerts-action',
      category: 'AI / AIOps',
      title: 'AI-Driven Operations: From Alerts to Action',
      excerpt: 'How AI and machine learning are transforming operational intelligence and enabling smarter incident response.',
      content: 'AI-driven operations are revolutionizing how organizations detect, diagnose, and respond to operational issues. Discover how AIOps platforms can reduce alert fatigue, improve incident response, and enable predictive operations.',
      readingTime: 9,
      author: 'Leadership Hub',
      date: '2026-08-09',
      featured: true,
      image: 'https://via.placeholder.com/400x250/d4b5e0/2c3e7f?text=AIOps'
    },
    {
      id: 'platform-engineering-multiplier',
      category: 'Platform Engineering',
      title: 'Platform Engineering as a Force Multiplier',
      excerpt: 'How internal developer platforms (IDPs) scale engineering effectiveness and accelerate product delivery.',
      content: 'Platform engineering is about building and operating internal platforms that empower product teams. Learn how to design platforms that reduce cognitive load, improve deployment velocity, and enable self-service capabilities.',
      readingTime: 8,
      author: 'Leadership Hub',
      date: '2026-08-08',
      featured: true,
      image: 'https://via.placeholder.com/400x250/d4b5e0/2c3e7f?text=Platform+Engineering'
    },
    {
      id: 'cloud-strategy-execution',
      category: 'Cloud',
      title: 'Cloud Strategy: From Planning to Execution',
      excerpt: 'A practical framework for developing and executing successful cloud transformation initiatives.',
      content: 'Cloud transformation is complex. This guide provides a structured approach to assessing current state, defining cloud strategy, and executing multi-phase cloud initiatives.',
      readingTime: 10,
      author: 'Leadership Hub',
      date: '2026-08-07',
      featured: false,
      image: 'https://via.placeholder.com/400x250/d4b5e0/2c3e7f?text=Cloud+Strategy'
    },
    {
      id: 'engineering-leadership-culture',
      category: 'Leadership',
      title: 'Building Engineering Leadership That Scales',
      excerpt: 'Creating engineering leaders and leadership cultures that support organizational growth and reliability.',
      content: 'Engineering leadership is about creating cultures of continuous improvement, learning, and operational excellence. This article explores leadership principles that scale with organizations.',
      readingTime: 9,
      author: 'Leadership Hub',
      date: '2026-08-06',
      featured: false,
      image: 'https://via.placeholder.com/400x250/d4b5e0/2c3e7f?text=Engineering+Leadership'
    },
    {
      id: 'devops-transformation-journey',
      category: 'DevOps',
      title: 'The DevOps Transformation Journey',
      excerpt: 'Practical strategies for implementing DevOps practices and building a culture of continuous improvement.',
      content: 'DevOps is a culture and set of practices that break down silos between development and operations. Discover how to start your DevOps transformation journey with practical, measurable outcomes.',
      readingTime: 11,
      author: 'Leadership Hub',
      date: '2026-08-05',
      featured: false,
      image: 'https://via.placeholder.com/400x250/d4b5e0/2c3e7f?text=DevOps+Transformation'
    }
  ],

  // ============================================
  // RESOURCES
  // ============================================
  resources: [
    {
      id: 'sre-framework',
      category: 'SRE Frameworks',
      title: 'SRE Operating Model Framework',
      description: 'A comprehensive framework for establishing SRE practices and building reliability into your engineering organization.',
      type: 'Guide',
      icon: '📋'
    },
    {
      id: 'reliability-checklist',
      category: 'Reliability Checklists',
      title: 'Production Readiness Checklist',
      description: 'Essential checklist items to ensure services are production-ready before deployment.',
      type: 'Checklist',
      icon: '✓'
    },
    {
      id: 'incident-playbook',
      category: 'Engineering Playbooks',
      title: 'Incident Response Playbook',
      description: 'Step-by-step guide for incident detection, response, investigation, and post-mortems.',
      type: 'Playbook',
      icon: '🎯'
    },
    {
      id: 'engineering-metrics',
      category: 'Leadership Guides',
      title: 'Key Engineering Metrics Guide',
      description: 'Framework for selecting, measuring, and acting on engineering metrics that matter.',
      type: 'Guide',
      icon: '📊'
    },
    {
      id: 'cloud-architecture',
      category: 'Cloud Architecture',
      title: 'Cloud Architecture Reference Patterns',
      description: 'Proven architectural patterns for building scalable, reliable cloud systems.',
      type: 'Reference',
      icon: '🏗️'
    },
    {
      id: 'disaster-recovery',
      category: 'Incident Management',
      title: 'Disaster Recovery Planning',
      description: 'Comprehensive guide to disaster recovery strategy, planning, and testing.',
      type: 'Guide',
      icon: '🛡️'
    },
    {
      id: 'observability-guide',
      category: 'Observability',
      title: 'Observability Best Practices',
      description: 'Learn how to instrument applications and infrastructure for comprehensive observability.',
      type: 'Guide',
      icon: '👁️'
    },
    {
      id: 'finops-strategy',
      category: 'FinOps',
      title: 'FinOps Cost Optimization Strategy',
      description: 'Framework for implementing FinOps practices and optimizing cloud spending.',
      type: 'Guide',
      icon: '💰'
    }
  ],

  // ============================================
  // ADVISORY SERVICES
  // ============================================
  advisoryServices: [
    {
      id: 'sre-transformation',
      title: 'SRE Transformation',
      description: 'Build a world-class SRE organization that balances reliability with velocity.',
      areas: [
        'SRE operating model design',
        'SLO and error budget frameworks',
        'Incident management processes',
        'Reliability metrics and dashboards'
      ]
    },
    {
      id: 'platform-engineering',
      title: 'Platform Engineering Strategy',
      description: 'Design and implement internal developer platforms that scale engineering effectiveness.',
      areas: [
        'Platform vision and roadmap',
        'Internal developer platform (IDP) design',
        'Developer experience optimization',
        'Platform adoption and governance'
      ]
    },
    {
      id: 'cloud-strategy',
      title: 'Cloud & Infrastructure Strategy',
      description: 'Navigate cloud transformation with a clear vision and execution roadmap.',
      areas: [
        'Cloud assessment and readiness',
        'Multi-cloud strategy',
        'Infrastructure modernization',
        'Cloud cost optimization'
      ]
    },
    {
      id: 'operating-model',
      title: 'Engineering Operating Model',
      description: 'Define organizational structures and processes that support engineering excellence.',
      areas: [
        'Operating model design',
        'Team structure and responsibilities',
        'Engineering governance',
        'Decision-making frameworks'
      ]
    },
    {
      id: 'aiops-observability',
      title: 'Observability & AIOps',
      description: 'Implement AI-driven operations and observability for intelligent incident response.',
      areas: [
        'Observability architecture',
        'AIOps platform selection and deployment',
        'Incident intelligence',
        'Alert optimization'
      ]
    },
    {
      id: 'business-resilience',
      title: 'Reliability & Business Resilience',
      description: 'Build organizations that deliver exceptional customer experience through reliability.',
      areas: [
        'Reliability strategy',
        'Business continuity planning',
        'Risk management',
        'Organizational resilience'
      ]
    }
  ],

  // ============================================
  // CATEGORIES
  // ============================================
  categories: [
    { id: 'sre', name: 'SRE', count: 0 },
    { id: 'platform-engineering', name: 'Platform Engineering', count: 0 },
    { id: 'cloud', name: 'Cloud', count: 0 },
    { id: 'devops', name: 'DevOps', count: 0 },
    { id: 'aiops', name: 'AI / AIOps', count: 0 },
    { id: 'leadership', name: 'Leadership', count: 0 },
    { id: 'reliability', name: 'Reliability', count: 0 },
    { id: 'business-resilience', name: 'Business Resilience', count: 0 }
  ]
};

// Calculate category counts
siteData.categories.forEach(category => {
  category.count = siteData.articles.filter(article => 
    article.category.toLowerCase().replace(/\s+/g, '-') === category.id || 
    article.category === category.name
  ).length;
});

// Export for use in pages
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteData;
}

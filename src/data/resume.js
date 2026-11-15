// All content below comes from Rohit's resumes (general + Engineering Manager versions).
export const profile = {
  name: 'Rohit Singh Gulia',
  firstName: 'Rohit',
  lastName: 'Singh Gulia',
  title: 'Engineering Manager',
  company: 'McAfee',
  location: 'Toronto area, Canada',
  email: 'rohit.gulia29@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rohitgulia/',
  roles: [
    'Engineering Manager',
    'AI enablement lead',
    'Platform builder',
    'Full stack engineer',
  ],
  summary:
    'Engineering Manager with 10+ years of progressive experience, growing from Full Stack Developer to Software Developer, Senior Software Developer, and Engineering Manager at McAfee.',
  summaryMore:
    'I lead AI enablement for my team and the wider org, help build an internal Product Factory that streamlines the SDLC and developer experience, and deliver customer-facing features across 50M+ devices while paying down technical debt. I grow high-performing teams across the US, Canada, and India, with hands-on depth in Node.js, Java, Go, and cloud.',
};

export const stats = [
  { value: 50, suffix: 'M+', label: 'devices reached by features I architected and shipped' },
  { value: 10, suffix: '+', label: 'years of progressive engineering experience' },
  { value: 70, suffix: '%', label: 'enrollment lift (OAC) from a unified permissions framework' },
  { value: 19, suffix: '%', label: 'higher sign-in success via Cross-App Authentication A/B tests' },
  { value: 67, suffix: '%', label: 'less sprint planning time, with zero missed releases' },
  { value: 105, prefix: '~$', suffix: 'K', label: 'saved in Q3 2025 by blocking 44 SMS bot attacks' },
];

export const experience = [
  {
    role: 'Engineering Manager',
    company: 'McAfee',
    place: 'Toronto, Canada',
    start: '07/2026',
    end: 'Present',
    current: true,
    intro:
      "Managing an engineering team on McAfee's consumer platform, owning people development, delivery, and technical direction for features serving 50M+ devices.",
    points: [
      'Lead AI enablement for the team and the wider engineering org: strategy for AI-assisted development, tooling, workflows and guardrails, and coaching engineers to use AI at every stage of the SDLC.',
      'Help build an internal Product Factory that standardizes and automates the SDLC, shortening the path from idea to production.',
      'Drive high-priority customer-facing features with Product, Design, and partner teams, turning business priorities into a clear roadmap and on-time releases.',
      "Own the team's technical debt reduction plan, balancing roadmap work with platform health, reliability, and velocity.",
      'Coach and grow engineers through 1:1s, career conversations, and performance feedback, building a culture of ownership and continuous learning.',
    ],
    tags: ['People leadership', 'AI enablement', 'Product Factory', 'Roadmap'],
  },
  {
    role: 'Senior Software Developer · Project Lead',
    company: 'McAfee',
    place: 'Toronto, Canada',
    start: '04/2024',
    end: '06/2026',
    intro:
      'Led and mentored engineers as Scrum Master and Project Lead across Canada, the US, and India.',
    points: [
      'Architected and delivered Unified Setup & Engage, Cross-App Authentication, Arkose fraud prevention, and Web Advisor at the scale of 50 million devices.',
      'Raised sign-in success 19% by leading Cross-App Authentication A/B tests with product and data science.',
      'Grew post-purchase activation with a 28% uplift in mobile installs and a 5.13% desktop uplift through personalized onboarding messages.',
      'Unified the permissions framework, raising enrollment by 70% (OAC) and 43% (ESD).',
      'Recovered offer coverage, increasing week-over-week bookings by 29% to $22,853.',
      'Blocked 44 coordinated SMS bot attacks across 60,000+ sessions, saving ~$105,000 in Q3 2025, by leading incident response and taking Arkose to production.',
      'Owned the Links & Shortener platform end to end, holding p95 latency at ~250ms and p99 at 600–700ms.',
      "Member of McAfee's AI Champion group; built DORA metrics pipelines that informed headcount, process, and tooling decisions.",
    ],
    tags: ['Node.js', 'A/B testing', 'Fraud prevention', 'DORA metrics'],
  },
  {
    role: 'Software Developer · Project Lead',
    company: 'McAfee',
    place: 'Canada',
    start: '10/2021',
    end: '04/2024',
    intro:
      "Led projects while contributing hands-on to the migration of McAfee's mobile, web, and desktop middleware from a monolith to microservices.",
    points: [
      'Designed and delivered Kafka-based event-driven microservices supporting real-time user engagement.',
      'Built shared middleware and facade layers for Personal Data Cleanup and Online Account Cleanup, reused across product lines.',
      'Coordinated engineering work across the US, Canada, and India.',
      'Standardized CI/CD with GitHub Actions and created reusable NPM packages adopted across teams.',
    ],
    tags: ['Microservices', 'Kafka', 'GitHub Actions', 'NPM packages'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Vivint Solar (A Sunrun Company)',
    place: 'Lehi, USA',
    start: '10/2019',
    end: '10/2021',
    intro:
      'Architected and built serverless, cloud-native grid services solutions for a leading US residential solar provider.',
    points: [
      'Built on GCP (Datastore, BigQuery, Bigtable) and AWS Lambda.',
      'Built IoT data pipelines collecting real-time solar panel data, plus the React dashboards and APIs that surface energy production.',
      'Owned key microservices and the payment module for the e-commerce web application.',
    ],
    tags: ['GCP', 'AWS Lambda', 'IoT', 'React'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Limosys Software',
    place: 'Englewood Cliffs, USA',
    start: '06/2016',
    end: '09/2019',
    intro: 'Took 20+ web applications through the full lifecycle, from requirements to delivery and maintenance.',
    points: [
      'Built a customer reservation and real-time fleet tracking web app for MTA.',
      'Developed RESTful services with Jersey and worked directly with clients to define and iterate on product design.',
    ],
    tags: ['Java', 'Jersey REST', 'Web apps'],
  },
];

export const skills = {
  leadership: [
    'People leadership, coaching & mentoring',
    'AI enablement & adoption strategy',
    'SDLC optimization & developer experience',
    'Technical debt strategy & platform health',
    'Agile delivery, roadmap & sprint planning',
    'Cross-functional stakeholder management',
    'Engineering metrics (DORA)',
  ],
  technical: [
    'Node.js', 'React.js', 'Java', 'JavaScript', 'Go', 'AWS', 'GCP', 'Microservices',
    'Kafka', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'Redis', 'MySQL', 'A/B testing', 'SDLC',
  ],
};

export const education = {
  degree: 'Master of Science, Computer Science',
  school: 'New Jersey Institute of Technology',
  date: '05/2016',
};

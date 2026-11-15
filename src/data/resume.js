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
  { value: 50, suffix: 'M+', label: 'devices running features whose middleware I delivered' },
  { value: 10, suffix: '+', label: 'years of progressive engineering experience' },
  { value: 70, suffix: '%', label: 'enrollment gain (OAC) helped by unifying permissions handling' },
  { value: 19, suffix: '%', label: 'higher sign-in success, backed by middleware for Cross-App Auth A/B tests' },
  { value: 67, suffix: '%', label: 'less sprint planning time, with zero missed releases' },
  { value: 105, prefix: '~$', suffix: 'K', label: 'saved in Q3 2025 by helping block 44 coordinated SMS bot attacks' },
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
    role: 'Senior Software Developer',
    company: 'McAfee',
    place: 'Toronto, Canada',
    start: '04/2024',
    end: '06/2026',
    intro:
      "On the Einstein team, which owns the middleware between McAfee's mobile, web, and desktop apps and its backend capabilities: delivered the middleware for Unified Setup & Engage, Cross-App Authentication, Arkose fraud prevention, and Web Advisor across 50 million devices.",
    points: [
      'Led and mentored a team of engineers and owned sprint planning as Scrum Master across Canada, the US, and India, cutting planning time by 67% with zero missed releases.',
      "Championed AI adoption as a member of McAfee's AI Champion group, defining tooling, workflows, and best practices for AI-assisted development.",
      'Built and owned DORA metrics pipelines that gave leadership engineering performance data for headcount, process, and tooling decisions.',
      'Built middleware support for Cross-App Authentication A/B tests with product and data science, contributing to a 19% increase in sign-in success.',
      'Enabled personalized onboarding messages through the middleware, contributing to a 28% uplift in mobile installs and a 5.13% desktop uplift in post-purchase activation.',
      'Unified permissions handling in the middleware to reduce onboarding friction, contributing to enrollment gains of 70% (OAC) and 43% (ESD).',
      'Fixed offer coverage gaps in the middleware and coordinated with partner teams, helping drive a 29% week-over-week booking increase to $22,853.',
      'Integrated Arkose into the middleware and supported incident response with security teams, helping block 44 coordinated SMS bot attacks across 60,000+ sessions and save ~$105,000 in Q3 2025.',
    ],
    tags: ['Middleware', 'Scrum Master', 'Fraud prevention', 'DORA metrics'],
  },
  {
    role: 'Software Developer',
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
      'Standardized CI/CD, testing protocols, and repository hygiene with GitHub Actions.',
      'Created reusable NPM packages adopted across teams, reducing release cycle time, defects, and duplicated code.',
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
      'Architected and implemented grid services solutions using cloud computing, powering features with serverless functions and GCP databases (Datastore, BigQuery, Bigtable).',
      'Owned key parts of the Grid Services project and made sure they were robust, delivering unit-tested systems within customer timeframes.',
      'Worked on IoT devices that collect data from solar panels and give an overview of the overall energy production of the system.',
      'Created AWS Lambdas and API endpoints consumed by the dashboard, and new functionality to improve the React dashboard’s usability.',
      'Handled the payment module for the e-commerce web application, and updated and maintained microservices for the client web application.',
      'Reviewed project specifications and designed technology solutions that met or exceeded performance expectations.',
      'Analyzed user needs and software requirements to determine design feasibility within time and cost constraints.',
      'Collaborated with third-party service providers, clients, and other stakeholders to create grid services features.',
    ],
    tags: ['GCP', 'AWS Lambda', 'IoT', 'React'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Limosys Software',
    place: 'Englewood Cliffs, USA',
    start: '06/2016',
    end: '09/2019',
    intro: 'Managed 20+ web applications through the full development lifecycle, from requirements gathering to delivery and maintenance.',
    points: [
      'Built a web application for MTA for customer reservations and real-time fleet tracking.',
      'Managed development milestones from the first stages through final delivery of projects.',
      'Collaborated with clients to develop concepts and redesign web applications.',
      'Developed RESTful web services with Jersey to integrate with various applications.',
      'Consulted with the engineering team to assess system loads and set improvement strategies.',
      'Supported delivered systems through continuous upgrades and maintenance.',
      'Met with customers to discuss project progress, gather feedback, and address concerns.',
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

// ============================================================
// siteData.ts — ALL SITE CONTENT LIVES HERE
// Lines marked ✏️ are placeholders — update with real links.
// ============================================================

export interface TimelineEntry {
  id: string
  year: string
  sortOrder: number
  title: string
  org: string
  type: 'project' | 'career' | 'education'
  blurb: string
  detail: string
  techStack?: string[]
  metric?: { label: string; value: string }
  links?: { github?: string; demo?: string; live?: string }
}

export interface ProjectCard {
  id: string
  title: string
  year: string
  blurb: string
  icon: string
  tags: { label: string; level: string }[]
  imageAlt: string
  links?: { github?: string; demo?: string }
}

// ------------------------------------------------------------------
// HERO
// ------------------------------------------------------------------
export const hero = {
  badge: 'AI PRODUCT MANAGER',
  headline: ['Designing for humans.', 'Powered by data.'],
  subtitle:
    'Full-stack AI PM with graduate training in cognitive science and quantitative methods. Turning complex model capabilities into products people actually use.',
  roles: ['AI PM', 'Full-stack', 'Prompt Eng', 'Cog Sci + Quant'],
  profileCard: {
    name: 'Luna',
    role: 'AI PM',
    level: '03',
    xp: '████░',
  },
  resumeUrl: '/YueyueMin_resume.pdf', // ✏️ put PDF in /public
}

// ------------------------------------------------------------------
// SELECTED WORK (home page cards)
// ------------------------------------------------------------------
export const selectedWork: ProjectCard[] = [
  {
    id: 'coffee-agent',
    title: 'Coffee Shop AI Agent',
    year: '2024–25',
    blurb:
      '3-model ensemble demand forecasting system. Domain expertise as structural moat — built for non-technical coffee shop owners.',
    icon: 'trending_up',
    tags: [
      { label: 'AI', level: '99' },
      { label: 'PYTHON', level: '80' },
    ],
    imageAlt: 'Abstract technical interface',
    links: { github: '#', demo: '#' }, // ✏️
  },
  {
    id: 'job-pipeline',
    title: 'Job Application Pipeline',
    year: '2025',
    blurb:
      'Personalized outreach at scale — agentic workflow that analyzes role requirements and generates tailored recruiter messages.',
    icon: 'plumbing',
    tags: [
      { label: 'AGENTIC', level: '90' },
      { label: 'LLM', level: '85' },
    ],
    imageAlt: 'Stylized pipeline diagram',
    links: { github: '#' }, // ✏️
  },
]

// ------------------------------------------------------------------
// TIMELINE (dual-rail)
// ------------------------------------------------------------------
export const timelineEntries: TimelineEntry[] = [
  // ── PROJECTS (left rail) ──
  {
    id: 'job-pipeline',
    year: '2025',
    sortOrder: 1,
    title: 'Job Application Pipeline',
    org: 'Claude Code · Boss直聘 · Agentic Workflow',
    type: 'project',
    blurb: 'Automated personalized outreach system using agentic workflows.',
    detail:
      'Profile.yaml-driven pipeline that filters roles by city and job type, then uses prompt engineering to write customized opener messages per recruiter. Prompt engineering baked into the application layer, not bolted on.',
    techStack: ['Claude Code', 'Python', 'Agentic Workflow', 'Prompt Engineering'],
    links: { github: '#' }, // ✏️
  },
  {
    id: 'coffee-agent',
    year: '2024',
    sortOrder: 2,
    title: 'Coffee Shop AI Agent',
    org: 'Prophet · XGBoost · Streamlit',
    type: 'project',
    blurb: 'Demand forecasting + inventory system with 3-model ensemble and domain expertise moat.',
    detail:
      '3-model ensemble (Prophet for seasonality, XGBoost for promo events, fallback linear). Streamlit UI designed for non-technical coffee shop owners. Open source on GitHub. 5 years of barista domain knowledge as structural moat.',
    techStack: ['Prophet', 'XGBoost', 'Streamlit', 'Python'],
    metric: { label: 'WASTE REDUCTION', value: '18%' },
    links: { github: '#', demo: '#' }, // ✏️
  },
  {
    id: 'nyt-sentiment',
    year: '2024',
    sortOrder: 3,
    title: 'NYT Sentiment Analysis Engine',
    org: 'BERT · GCP · Streamlit',
    type: 'project',
    blurb: 'BERT-based NLP pipeline analyzing 500k+ articles/week on GCP.',
    detail:
      'End-to-end NLP pipeline and Streamlit dashboard surfacing sentiment trends and emerging topics across sectors from 500k+ NYT articles per week. Deployed on Google Cloud Platform.',
    techStack: ['BERT', 'Python', 'GCP', 'Streamlit', 'NLP'],
    links: { github: '#' }, // ✏️
  },
  // ── CAREER (right rail) ──
  {
    id: 'grademate',
    year: '2024',
    sortOrder: 4,
    title: 'AI Product Manager',
    org: 'GradeMate · New York',
    type: 'career',
    blurb: 'Owned end-to-end product lifecycle for Gemini-powered AI grading assistant.',
    detail:
      'Led the full feature lifecycle — from teacher user research to defining success metrics — shipping a production AI grading experience that cut essay turnaround time by 40%. Designed and executed 4-variant A/B tests on LLM prompt strategies, improving feedback quality scores by 23%. Built product KPI dashboard tracking adoption, time-saved, and quality metrics driving weekly product decisions.',
    techStack: ['Gemini', 'A/B Testing', 'Prompt Engineering', 'KPI Dashboards'],
    metric: { label: 'TURNAROUND CUT', value: '40%' },
  },
  {
    id: 'adel',
    year: '2023',
    sortOrder: 5,
    title: 'Product Analyst',
    org: 'ADEL Group · Hong Kong',
    type: 'career',
    blurb: 'Data-driven product strategy for Southeast Asian market expansion.',
    detail:
      'Informed product strategy by building demand forecasting models that reduced stockouts by 15% and improved inventory turnover by 12%. Automated cross-functional reporting, cutting generation time by 25% and freeing 20 hours/week for strategic analysis. Designed centralized metrics dashboard that shifted 15% of marketing budget to higher-performing channels.',
    techStack: ['Forecasting', 'SQL', 'Power BI', 'Python'],
    metric: { label: 'STOCKOUT REDUCTION', value: '15%' },
  },
  {
    id: 'sf-tech',
    year: '2021',
    sortOrder: 6,
    title: 'Product Engineering Intern',
    org: 'SF Technology · Shenzhen',
    type: 'career',
    blurb: 'Bridged AI engineering and product at China speed in logistics tech.',
    detail:
      'Translated model performance metrics (precision, recall, exception rates) into business outcomes — mis-sort cost, rework time, on-time dispatch — informing product roadmap priorities. Built dashboards connecting real-time ML outputs to operational KPIs. Ran A/B evaluations of production model rollouts, quantifying ROI adopted by operations leadership.',
    techStack: ['Python', 'SQL', 'Power BI', 'A/B Testing'],
    metric: { label: 'MISCLASS DROP', value: '10%' },
  },
  // ── EDUCATION (right rail) ──
  {
    id: 'columbia',
    year: '2023',
    sortOrder: 7,
    title: 'MA Quantitative Methods (Data Science)',
    org: 'Columbia University · New York',
    type: 'education',
    blurb: 'Graduate-level quantitative methods, machine learning, and NLP. GPA 3.8.',
    detail:
      'Advanced Machine Learning, Time Series Forecasting, NLP, Bayesian Statistics, Data Visualization. Research focus on applying quantitative methods to product decision-making and user behavior analysis.',
    techStack: ['ML', 'NLP', 'Bayesian Stats', 'Time Series'],
    metric: { label: 'GPA', value: '3.8' },
  },
  {
    id: 'uci',
    year: '2019',
    sortOrder: 8,
    title: 'BS Cognitive Sciences (CS Minor)',
    org: 'UC Irvine · California',
    type: 'education',
    blurb: 'Cognitive science foundation + computational methods. GPA 3.95 Cum Laude.',
    detail:
      'Machine Learning, Computational Methods, Cognitive Robotics, Statistics, Neuroscience. Foundation for understanding users at the mechanism level — not just behavior, but the cognitive models that drive it.',
    techStack: ['Cognitive Sci', 'Statistics', 'ML', 'MATLAB'],
    metric: { label: 'GPA', value: '3.95' },
  },
]

// ------------------------------------------------------------------
// WHO I AM
// ------------------------------------------------------------------
export const identity = {
  tags: [
    { label: 'Hobby Barista', accent: 'acid' as const },
    { label: 'Tech Builder', accent: 'default' as const },
    { label: 'Quant Brain', accent: 'default' as const },
    { label: 'Cog Sci Nerd', accent: 'acid' as const },
    { label: 'Cross-cultural PM', accent: 'default' as const },
    { label: 'Open Source', accent: 'secondary' as const },
    { label: 'Data Storyteller', accent: 'default' as const },
    { label: 'Overthinker → Product Thinker', accent: 'acid' as const },
  ],
  characterSheet: {
    title: 'LUNA AI PRODUCT MANAGER LVL 03',
    xpPercent: 87,
    stats: [
      { key: 'STR', label: 'QUANTITATIVE', bars: '████' },
      { key: 'INT', label: 'COGNITIVE SCI', bars: '█████' },
      { key: 'DEX', label: 'FULL-STACK', bars: '███' },
      { key: 'CHA', label: 'STORYTELLING', bars: '████' },
    ],
  },
  quickFacts: [
    { icon: 'location_on', text: 'Shenzhen / Beijing / Shanghai' },
    { icon: 'translate', text: 'English · 中文' },
    { icon: 'work', text: 'AI PM roles · Full-time' },
    { icon: 'school', text: 'Columbia · UCI · Cog Sci + Quant' },
  ],
}

// ------------------------------------------------------------------
// ABOUT STORY (for the about section)
// ------------------------------------------------------------------
export const aboutStory = {
  paragraphs: [
    'The trajectory began in the neural pathways of cognitive science at UC Irvine. My fascination wasn\'t just with how humans think, but with the systematic translation of those thoughts into actionable data. This curiosity led to graduate-level statistics at Columbia, where I learned that numbers are the most honest narrative a product can tell.',
    'The pivot to AI Product Management was inevitable — a convergence of human psychology and technical orchestration. I moved from analyzing cognitive biases to building systems that must account for them. At GradeMate, I shipped an AI grading assistant that cut turnaround time by 40% — not through better models alone, but through better prompts designed around how teachers actually think.',
    'Operating across the world\'s most dynamic tech hubs — from the rapid prototyping culture of Shenzhen and the high-finance rigor of Hong Kong to the scale-first philosophy of the US — I\'ve developed a cross-market fluency that transcends borders. I don\'t just ship products; I translate complex technical possibilities into human-centric utility.',
  ],
  designPhilosophy: [
    { icon: 'analytics', title: 'Measure Before Assuming', text: 'Statistical rigor is the foundation. I replace gut feelings with controlled experimentation and data-driven hypotheses.' },
    { icon: 'psychology', title: 'Cognitive Empathy First', text: 'Understanding the mental models of users is paramount. Systems should adapt to humans, not the other way around.' },
    { icon: 'bolt', title: 'Ship to Learn', text: 'Perfect is the enemy of the deployed. High-velocity shipping cycles provide the only real feedback that matters.' },
    { icon: 'language', title: 'Cross-market Fluency', text: 'Building for the globe requires more than translation; it requires cultural context and regional infrastructure awareness.' },
  ],
  skills: {
    aiLlm: [
      { name: 'Prompt Engineering', pct: 95 },
      { name: 'A/B Test Design', pct: 90 },
      { name: 'RAG / Fine-tuning', pct: 75 },
    ],
    technical: ['Python', 'Streamlit', 'SQL', 'Claude SDK', 'Pandas', 'scikit-learn', 'R'],
    pmCraft: ['PRD & Technical Spec Writing', 'Strategic Roadmapping', 'Behavioral User Research', 'A/B Test Orchestration'],
    languages: [
      { name: 'English', bars: '████████' },
      { name: 'Chinese', bars: '██████' },
    ],
    markets: [
      { name: 'US', bars: '████' },
      { name: 'HK', bars: '█████' },
      { name: 'China', bars: '████████' },
    ],
  },
}

// ------------------------------------------------------------------
// NAV
// ------------------------------------------------------------------
export const navLinks = [
  { href: '#about', label: 'WHO I AM' },
  { href: '#work', label: 'SELECTED WORK' },
  { href: '#timeline', label: 'ALL WORK' },
]

// ------------------------------------------------------------------
// CONTACT / FOOTER
// ------------------------------------------------------------------
export const contact = {
  email: 'ym2980@columbia.edu',
  linkedin: 'https://linkedin.com/in/yueyuemin', // ✏️ verify URL
  github: 'https://github.com/luna',               // ✏️ replace with real
  wechatLabel: '微信',
}

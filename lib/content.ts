export const profile = {
  name: "Rahul Sharma",
  title: "Product Manager",
  headline: "Product Manager (10+ yrs) - Developer Experience, Platforms & Search",
  focus: "AI-enabled Platforms · Developer Experience · Search & Conversations (NLP)",
  pedigree: "ex PayPal · JPMorgan Chase · Workday · Intuit",
  school: "Carnegie Mellon Alum",
  location: "Santa Clara County, CA",
  email: "message.rsharma@gmail.com",
  linkedin: "https://www.linkedin.com/in/rsharma-profile",
  resume: "/RahulSharma.pdf",
  summary:
    "I turn complex Software and Platforms into paved paths - the kind that let Engineers Onboard, Build, Test, and Ship with less friction. Over 10+ years as a Product Manager - and years before that as a Software Quality Engineer, breaking and hardening products from the inside out - I've built everything from 0-to-1 Developer Experience (DevEx) tooling and AI-enabled Platforms inside PayPal, JPMorgan Chase, and Workday, to co-founding my own bootstrapped Startup from a blank slate. Whether the canvas is an Enterprise Platform serving 50,000 Engineers or a zero-user idea sketched on a whiteboard, I bring the same instinct: turn ambiguity into a working product, then let the data tell me what to build next.",
  positioning:
    "Took a deliberate pause to reflect, travel, and upskill in Agentic AI & Model Context Protocol (MCP) - now starting to explore PM opportunities in AI-enabled Platforms, Developer Experience, or Search.",
  about: {
    intro:
      "A builder at heart - of meaningful experiences and high-performing teams. Across nearly two decades spanning Product Management, Engineering Program Management, and Quality Engineering, I've led AI-enabled Platform initiatives at PayPal, JPMorgan Chase, and Workday, and co-founded a Stealth Startup from scratch - focused on Self-Serve & Extensible Experiences, Developer Tools & Productivity, Search & Conversations (NLP), and Enterprise Operations. A background in Software Quality Engineering gives me a rare lens on how products get built, broken, and made robust - and founding a startup taught me how to build that same rigor with nothing but conviction and a whiteboard.",
    bullets: [
      "Enterprise Scale - Shipped 0-to-1 Platform capabilities across the Software Delivery Lifecycle (Source Code Management, Build, Test, Release, Deploy) - embedding automated Code Scanning, CI/CD, and Release Readiness gates for a 5,000-Engineer Org across PayPal brands.",
      "0-to-1 AI Execution - Launched and scaled a Gen-AI Search and Multi-RAG Conversational Platform to ~50,000 Engineers at JPMC.",
      "Measurable ROI - Drove ~12-22% measured gains in Developer Productivity, Information Discovery, Search Relevancy, and Satisfaction, while averting a ~$2.5M USD regulatory penalty.",
    ],
    closing:
      "Whether it's defining Product Strategy, scaling Self-Serve Platforms, or bringing order to messy systems, I lead with curiosity, clarity, and care. As a Carnegie Mellon graduate, I thrive at the intersection of technology and human experience - with a lasting passion for simplifying complexity and building products users love.",
  },
}

export const metrics = [
  { value: "22%", label: "Lift in search relevancy for Gen-AI Search & Conversations (NLP)", tone: "sky" },
  { value: "5,000+", label: "Engineers served by the Developer Platforms I led at PayPal", tone: "mint" },
  { value: "$2.5M", label: "Regulatory penalty avoided via a 0-to-1 Release Readiness Gate", tone: "butter" },
  { value: "$50K", label: "Quarterly Operational Savings via an API-driven ML-Ops Platform at Workday", tone: "blush" },
  { value: "15%", label: "Gains across Developer Velocity, Satisfaction & User CSAT", tone: "sky" },
] as const

export type CaseStudy = {
  title: string
  category: string
  description: string
  href: string
  linkLabel: string
  tone: "mint" | "blush" | "butter" | "sky"
  external?: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    title: "DevOps, Productivity & Shift Left",
    category: "Developer Experience",
    description:
      "How I built internal Developer Platforms at PayPal - DevRunner code scanning, Release Readiness Gates, and GitHub governance - to shift quality left for 5,000+ engineers and drive measurable velocity and satisfaction gains.",
    href: "https://www.dropbox.com/scl/fi/0ixc7itiyfa18yv81qy5l/Productivity-DevOps-ShiftLeft.pdf?rlkey=itrjibgc6ewupxj3ug5056tr0&st=5x5vwvjd&dl=0",
    linkLabel: "View (PDF)",
    tone: "mint",
    external: true,
  },
  {
    title: "AI-powered Search & Conversations (NLP)",
    category: "AI / Search",
    description:
      "The 0-to-1 story behind the Search experience I owned in JPMorganChase & Co.'s Developer Portal - a Gen-AI Search & Conversational experience with semantic Multi-RAG ranking, session memory, and compliance guardrails, scaled from a 1,000-developer beta to ~50,000 developers.",
    href: "https://www.dropbox.com/scl/fi/e3ox1cvhm9fxayf962ucf/AI-Powered-Search-Convos.pdf?rlkey=044flba0npcjpeade4g69jbzk&st=oxwnalcn&dl=0",
    linkLabel: "View (PDF)",
    tone: "butter",
    external: true,
  },
  {
    title: "AI-powered Search & Conversations - Live Prototype",
    category: "Prototype",
    description:
      "An interactive prototype exploring the AI DevHub Search & Conversations experience end-to-end - the kind of hands-on, tool-assisted prototyping I use to align stakeholders and de-risk product bets.",
    href: "https://ai-devhub-search-convos.vercel.app",
    linkLabel: "Open (v0 Prototype)",
    tone: "sky",
    external: true,
  },
]

export type TargetRole = {
  title: string
  blurb: string
  companies: string[]
  tone: "mint" | "blush" | "butter" | "sky"
}

export const targetRoles: TargetRole[] = [
  {
    title: "Developer Experience & Productivity",
    blurb: "Platforms & Tools to enhance Developer Experience, improve SDLC Velocity, and support a Shift-Left mindset - leading to faster Time-To-Market and higher-quality product features.",
    companies: ["GitHub", "Anthropic", "Apple", "HPE", "Netflix"],
    tone: "mint",
  },
  {
    title: "Platform & Infrastructure",
    blurb: "API / SDK-led Integrations and Self-Serve Experiences.",
    companies: ["Confluent", "Snowflake", "Stripe", "SnapLogic", "Yahoo"],
    tone: "sky",
  },
  {
    title: "AI / ML Platform",
    blurb: "AI Infrastructure, Agentic Systems, Control Planes, and AI-Readiness (incl. Eval, Governance & Guardrails) for end users.",
    companies: ["NVIDIA", "Databricks", "Zillow", "Baseten", "Cohere"],
    tone: "butter",
  },
  {
    title: "Search Relevance & Conversations (NLP)",
    blurb: "Semantic Search, Embeddings & Multi-RAG Systems with Context-Aware Conversations, across product surfaces.",
    companies: ["Yelp", "Google", "Microsoft", "LangChain"],
    tone: "blush",
  },
]

export type Experience = {
  company: string
  role: string
  period: string
  meta?: string
  summary: string
  highlights: string[]
  tags: string[]
}

export const experiences: Experience[] = [
  {
    company: "Intuit Inc. (via Magnit Global)",
    role: "Staff Product Manager - Platforms & Developer Experience",
    period: "2025 - 2026",
    meta: "Contract · 6 Months, Fixed-Term",
    summary:
      "Drove Platform & Dev Tools Strategy and Change Management initiatives in partnership with Platform Leadership - advancing Developer Productivity, PDLC Efficiency, Time-to-Market, and Platform Governance at scale.",
    highlights: [
      "AI Assistant (Agentic) - Defined requirements and led workflow design for an Agentic AI Conversational Support Assistant, leveraging Root Cause Analysis (RCA) data for LLM Reinforcement training and Assistant Skill enhancement - enabling ~5% improvement in Developer Productivity and ~7% in Support Response SLAs, in early pilot trials.",
      "SDLC, Time-to-Market & Developer Productivity - Championed Developer Productivity visibility through DORA metrics and Dev Tools Health Dashboards across Code, Test, Review and CI/CD workflows, supporting Shift-Left, Engineering Velocity, and Time-to-Market goals. Helped establish annual Secure Coding Compliance enforcement via GitHub access controls.",
      "PDLC Standards & Governance - Drove Jira Cloud Platform Governance across 2,000+ Workspaces, standardizing Workflows, Work Types, and Configurations with 100% Compliance. Initiated and authored PRDs for Automated AppSec Vulnerability Attributions to Code Owners via Jira and for VoC Planning enhancements.",
    ],
    tags: ["Agentic AI", "DORA", "Developer Productivity", "PDLC"],
  },
  {
    company: "Stealth Startup (Bootstrapped)",
    role: "Founding Product Manager - Horology, Community & Marketplace Platform",
    period: "2024 - 2025",
    meta: "~1 Year",
    summary:
      "Co-founded WatchAI - an AI-enabled Platform unifying Editorial Content, Community Engagement, Marketplace, and AI-driven Insights (brand heritage, model history, pricing trends, personalized recommendations) for Watch Enthusiasts.",
    highlights: [
      "Validated Product-Market Fit through 40+ User Interviews and Usability Tests across Watch Community events, Enthusiast Network, and Watch Fairs - progressing from Market Research and Hypothesis Validation through UX Prototyping to MVP v0.1, before deliberately pausing the venture prior to fundraising.",
    ],
    tags: ["0-to-1", "Marketplace", "Personalization", "PMF"],
  },
  {
    company: "JPMorganChase & Co.",
    role: "Staff Product Manager - AI-powered Developer Experience, Search & Conversations (NLP)",
    period: "2023 - 2024",
    meta: "~1 Year",
    summary:
      "Led Product Strategy and end-to-end delivery for JPMC's AI-powered Search, Conversations (NLP), Developer Portal & Dev Tools - scaling Conversational Search to ~50,000 users and evaluating AI Developer Tooling, including GitHub Copilot, to accelerate Developer Productivity across code, test, review, and observability.",
    highlights: [
      "Launched 0-to-1 Gen-AI Search & Conversations experience from Beta (1,000 users) to GA (~50,000) - delivering Semantic, In-Context & Conversational Search with Multi-RAG Ranking, Session Memory, and Compliance Guardrails (Mistral 7B, AWS OpenSearch, 26+ sources).",
      "Improved Information Discovery times by ~12%, Search Relevancy by ~22%, and User CSAT by ~15% - reducing cognitive load and friction for Users, with the platform architected to scale to enterprise-wide search and knowledge discovery.",
      "Integrated a Conversational Support Agent (SRE) into Search experience - enabling Users to manage and resolve Support queries without context switching.",
      "Prototyped AI-powered Search & Conversations using Lovable, Builder.io, and v0 - compressing concept-to-testable-artifact timelines and enabling rapid iteration with Engineering and Design partners.",
    ],
    tags: ["Gen-AI", "RAG", "NLP", "AWS OpenSearch", "Mistral"],
  },
  {
    company: "Workday Inc.",
    role: "Senior Product Manager - ML-Ops Platforms, Integrations & Developer Experience",
    period: "2021 - 2022",
    meta: "1.5+ Years",
    summary:
      "Led delivery of Workday's ARIMA-powered ML-Ops Platform - pivoting from script-based Integrations to API-first Workflows and Dashboards - serving Internal Operations, Hardware Planning, and External B2B Operator teams.",
    highlights: [
      "Drove ~$50K in Quarterly Operational Savings and ~15% Reduction in Operational Cycle Time - by transitioning clients to an API-driven ML-Ops Platform delivering demand forecasting, capacity optimization, and data governance.",
      "Delivered API Integrations and Dashboards for three user groups - Internal Operations (rack optimization), Hardware Planning (COVID-era demand forecasting), and External B2B Operators (data security & movement tracking).",
      "Championed API-first Platform & DevEx Strategy, Data-driven Roadmaps & Product Practices (RICE / ICE / MoSCoW Prioritization, CABs, VoC) and mentored early-career Product Owners & PMs.",
    ],
    tags: ["ML-Ops", "API-first", "ARIMA", "B2B"],
  },
  {
    company: "PayPal Inc.",
    role: "Senior Product Manager - Developer Productivity Platforms & Tools",
    period: "2016 - 2021",
    meta: "5.5 Years",
    summary:
      "Led key pillars of PayPal's Internal Developer Platform (IDP) strategy, establishing a paved path for 5,000+ engineers across PayPal Brands (PayPal, Venmo, Braintree, Xoom, etc.) - unifying Code Scanning, Service Ownership, and CI/CD standards.",
    highlights: [
      "Code Scanning as a Service (DevRunner) - Launched a 0-to-1 Platform (Python, Docker; CLI, APIs, Webhooks, CI, Listeners) delivering Quality, Security and Compliance scans across 7+ language stacks for 5,000+ Engineers and 4,500+ Apps across 4 Countries - reducing Developer Distraction by ~13%.",
      "Release Readiness Platform - Launched a 0-to-1 Production Build Gate (Quality, Security, Compliance checks), later leveraged to satisfy a Luxembourg Regulatory Auditor's Proof-of-Testing requirement for Integration Tests - achieving 100% Adoption and GA on a tight timeline to avoid a $2.5M USD penalty.",
      "GitHub Governance - Standardized GitHub Release Organization (GRO), consolidating 4,500+ Production Repos out of ~75,000 into Capability-based Orgs. Enforced Deployment Compliance via 3-2-1 Branching and Block Push (Peer Review) - ensuring code shipped only from Approved Branches within GRO - while building Code Traceability (Jira, GitHub, ServiceNow) and evangelizing InnerSource practices.",
      "Additional 0-to-1 Platforms - System Qualities Dashboards (DevXDash), Ownership Platform (GitHub / LDAP-based attribution), Software Artifact Metadata Repository (SAMR), Developer Portal's core UX Library.",
      "Collectively, these platforms drove ~15% improvement in Developer Velocity (YoY), ~13% in Product Quality (over 2 years), ~20% in Developer Satisfaction, and ~95% Artifact Ownership Accuracy - delivering $0.5M in savings (over 3 years) through reduced revenue loss and operational cost.",
      "Drove Awareness, Brand Crowdsourcing, Adoption, and Onboarding for Platform Products - utilizing CABs, Tech Expos, Podcasts, and a Champions Network - across US, EU, and APAC.",
    ],
    tags: ["DevEx", "0-to-1", "GitHub Governance", "CI/CD", "Security"],
  },
  {
    company: "Cisco Systems Inc. (via GSSR Inc.)",
    role: "Engineering Program Manager & Scrum Master - Cloud PaaS",
    period: "2014 - 2015",
    meta: "Contract · 1.5 Years, Fixed-Term",
    summary:
      "Led 7 Scrum Teams across two strategic Cisco Cloud initiatives, improving Delivery Predictability by ~21% through Capacity-Driven Planning and 3-Buckets Estimation.",
    highlights: [
      "Cisco Cloud Services - Led 3 UI & API Dev Teams delivering the Cloud Console for an OpenStack-based public cloud product built to compete with AWS, GCP, and Azure - piloted with 2 Enterprise Beta customers in the EU.",
      "Cisco Intercloud Fabric - Led 4 Dev Teams (Hybrid Cloud Management System) building asset migration tooling across multiple Cloud Providers, enabling hybrid and multi-cloud workload portability.",
    ],
    tags: ["Cloud PaaS", "OpenStack", "Agile"],
  },
]

export const additionalExperience = [
  { company: "Apple Inc. (Contract, Fixed-Term via Yoh Inc.)", role: "PM Consultant, Developer Experience - Surveys & Strategy Deck", period: "2022 - 2023" },
  { company: "Qualcomm Inc.", role: "Lead Software Quality Engineer & Scrum Master - Software & Infrastructure Apps", period: "2011 - 2014 (3 Years)" },
  { company: "Tata Consultancy Services", role: "Senior Software Quality Engineer - Infrastructure, Apps & Retail POS", period: "2007 - 2010 (2.5 Years)" },
  { company: "Quark Software Inc.", role: "Software Quality Engineer - Design, Publishing & Content Automation Suite", period: "2005 - 2007 (2.5 Years)" },
]

export const competencies = [
  "Product & Platform Strategy",
  "Developer Experience (DevEx)",
  "Developer Productivity & SDLC (CI/CD)",
  "AI-powered Search & Product Development (LLMs, RAG, Agentic AI)",
  "0-to-1 Product Launches",
  "Platform Adoption & Internal GTM",
  "Cross-Functional Leadership",
  "Agile Execution & Delivery",
  "Stakeholder Management",
  "Voice of Customer (VoC)",
  "User Interviews & Surveys",
  "Usability Testing",
]

export const skillGroups = [
  {
    title: "Product Management",
    items: ["JIRA", "Slack", "Confluence", "MS Teams", "Optimal Workshop", "Lucidspark", "Miro", "Aha", "Trello", "Zoom", "Dragonboat"],
  },
  {
    title: "Frameworks",
    items: ["KANO", "JTBD", "RICE", "ICE", "MoSCoW", "Personas & Journeys", "Competitive Analysis"],
  },
  {
    title: "Data & Analytics",
    items: ["SQL", "SQL Server", "Oracle", "Mongo DB", "BigQuery", "Tableau", "PowerBI", "Adobe Analytics", "Qualtrics", "Mixpanel"],
  },
  {
    title: "Developer Platforms & Tools",
    items: ["Backstage.io", "Compass", "Port.io", "GitHub", "Bitbucket", "Jenkins", "TeamCity", "ArgoCD", "Docker", "Postman", "Swagger", "JFrog", "Gradle", "Maven", "Ansible", "REST APIs"],
  },
  {
    title: "Cloud & Infrastructure",
    items: ["AWS", "GCP", "OpenStack", "Kubernetes", "Databricks", "Kafka", "Mesos", "AWS OpenSearch", "AWS Bedrock"],
  },
  {
    title: "AI / ML",
    items: ["LLMs (Mistral, Claude, GPT, Gemini)", "MCP", "Agents / Agentic AI", "RAG", "Embeddings", "Vector DB", "ARIMA", "NLP", "LangChain"],
  },
  {
    title: "AI & Design Tools",
    items: ["Lovable", "Vercel v0", "Builder.io", "Claude Code", "Bolt.new", "Cursor", "OpenAI ChatGPT", "Google Gemini", "DeepSeek", "Perplexity", "GitHub Copilot", "Figma"],
  },
]

export const credentials = {
  education: [
    { school: "Carnegie Mellon University (Pittsburgh, PA)", degree: "Masters, Information Systems Management (MISM)" },
    { school: "University of Mumbai (Maharashtra, INDIA)", degree: "Bachelor of Engineering (BEng), Computer Engineering" },
  ],
  certifications: [
    "AI for Product Management (Pendo.io)",
    "Gen AI for Product Managers (LinkedIn Learning)",
    "Introduction to GitHub Copilot (Microsoft Learning)",
    "Certified Scrum Product Owner (CSPO)",
    "Certified Scrum Master (CSM)",
    "ITIL v3 Foundation (EXIN)",
  ],
}

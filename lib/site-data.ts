import {
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  PenTool,
  Sparkles,
  TerminalSquare,
  Workflow
} from "lucide-react";

export const siteConfig = {
  name: "Ishant Sharma",
  location: "Jaipur, Rajasthan, India",
  education: "B.Tech in Artificial Intelligence & Data Science",
  college: "Government Engineering College Bharatpur",
  cgpa: "8.1 CGPA",
  graduation: "2027",
  email: "ishaantsharmaa@gmail.com",
  links: {
    githubUrl: "https://github.com/Ishaant0104",
    linkedinUrl: "https://www.linkedin.com/in/ishant-sharma-1b0131292",
    resumeUrl: "",
    emailDraftUrl: "mailto:ishaantsharmaa@gmail.com?subject=Inquiry%20%2F%20Collaborating%20with%20Ishant&body=Hi%20Ishant%2C%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you%20regarding%20%5Bproject%2Finternship%2Fopportunity%5D.%0D%0A%0D%0ABest%20regards%2C%0D%0A%5BYour%20Name%5D"
  },
  roles: [
    "Full Stack Developer",
    "Software Engineer",
    "AI Generalist",
    "Prompt Engineer",
    "Creative Technologist",
    "Digital Creator"
  ],
  strengths: [
    "AI workflow automation",
    "Prompt engineering",
    "AI-assisted problem solving",
    "Motion graphics",
    "Visual storytelling",
    "Product thinking"
  ]
};

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export const statusBadges = [
  "Open for Internships",
  "Open for Freelance",
  "Building SaaS Products"
];

export const featuredProject = {
  title: "Shree Maruti Travel Agency Website",
  eyebrow: "Featured Work",
  problem: "Travelers lacked a modern platform to discover customized Rajasthan tour itineraries and rent luxury vehicles, requiring tedious manual quotes.",
  solution: "A dynamic booking portal with custom package configurations, honeymoon/sightseeing planners, live quote builders, and a lead management desk.",
  stack: ["React.js", "Node.js", "Supabase", "Liquid HTML"],
  link: "https://shreemarutitravel.com",
  highlights: [
    {
      label: "Challenge",
      copy: "Creating personalized tour itineraries and dispatching quotes was a slow, manual process prone to pricing mistakes."
    },
    {
      label: "Solution",
      copy: "Designed a relational schema in Supabase to manage 50+ tour packages, honeymoon itineraries, active fleet pricing, and client records."
    },
    {
      label: "Process",
      copy: "Built a curated holiday marketplace with instant filters for destinations (Jaipur, Udaipur, Jaisalmer) and custom request routes."
    },
    {
      label: "Outcome",
      copy: "Increased monthly tour inquiries by 40% and enabled direct automated quote generation for pre-packaged itineraries."
    }
  ]
};

export const pillars = [
  {
    title: "Software Engineering",
    icon: Code2,
    copy: "I build full stack systems with practical architecture, clean interfaces, and a bias toward products people can actually use.",
    accent: "gold"
  },
  {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    copy: "I use AI as a thinking partner and product layer, from prompt systems to automation workflows and emerging agent patterns.",
    accent: "sky"
  },
  {
    title: "Creative Technology",
    icon: Sparkles,
    copy: "I bring visual taste, motion, editing, and storytelling into software so the work feels useful and memorable.",
    accent: "gold"
  }
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Layers3,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"]
  },
  {
    title: "Backend",
    icon: TerminalSquare,
    skills: ["Python", "Django", "REST APIs", "Authentication", "Server Logic"]
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "Schema Design", "Queries", "Data Modeling", "Reporting"]
  },
  {
    title: "AI",
    icon: BrainCircuit,
    skills: ["Prompt Engineering", "AI Workflows", "Agentic AI", "RAG", "Automation"]
  },
  {
    title: "Design",
    icon: PenTool,
    skills: ["Product Thinking", "UX Writing", "Visual Hierarchy", "Motion", "Storytelling"]
  },
  {
    title: "Developer Tools",
    icon: Workflow,
    skills: ["Git", "GitHub", "VS Code", "Vercel", "AI Coding Tools"]
  }
];

export const journeyItems = [
  "Machine Learning",
  "Agentic AI",
  "LangChain",
  "CrewAI",
  "AutoGen",
  "RAG",
  "Analytics",
  "Power BI",
  "Data Engineering"
];

export const achievements = [
  { label: "Projects Built", value: "5+" },
  { label: "Hackathons", value: "2+" },
  { label: "Graduation", value: "2027" }
];

export const allProjects = [
  {
    slug: "shree-maruti-travel",
    title: "Shree Maruti Travel Agency Website",
    type: "Dynamic Tour Booking & Fleet Portal",
    description: "A dynamic, full-stack tour package and premium car rental booking portal built for Shree Maruti Travel Agency. Features customized itinerary planners, dedicated honeymoon/adventure modules, automated pricing calculations, and an administrative inquiry dashboard.",
    stack: ["React.js", "Node.js", "Supabase", "Liquid HTML"],
    link: "https://shreemarutitravel.com",
    bullets: [
      "Engineered an interactive tour discovery system supporting dynamic category filters (Honeymoon, Sightseeing, Adventure) and destination guides.",
      "Built a custom travel quotation engine that captures passenger requirements, destination checklists, and vehicle types for real-time lead routing.",
      "Designed a robust schema in Supabase for structured tour packages, client reviews, vehicle rates, and automated SMS alert dispatches.",
      "Developed a secure administrative desk to manage client inquiries, update holiday package rates dynamically, and log rental driver manifests."
    ]
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio & Engineering Showcase",
    type: "Interactive Developer Portfolio",
    description: "A high-performance developer portfolio website designed to showcase engineering case studies, interactive components, technical skills, and career timeline. Built with clean code practices and dynamic animation systems.",
    stack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/Ishaant0104/Portfolio",
    linkLabel: "View GitHub Repo",
    bullets: [
      "Designed a fluid user experience featuring premium dark-mode aesthetics, custom micro-interactions, and magnetic navigation elements.",
      "Integrated Framer Motion for smooth component entry animations, staggered layout reveal effects, and interactive hover feedback.",
      "Developed a fully responsive, accessibility-conscious UI leveraging Tailwind CSS, Lucide React icons, and modern design tokens.",
      "Separated content logic into a decoupled site configuration module, making it highly modular and scalable for future updates."
    ]
  }
];

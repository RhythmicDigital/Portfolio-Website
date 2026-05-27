/**
 * data.js — Portfolio Content
 * ─────────────────────────────────────────────────────────────────
 * This is the only file you need to edit to update your portfolio.
 * Change your name, bio, jobs, projects, skills, and contact links
 * here, and the rest of the site updates automatically.
 */

const PORTFOLIO = {

  // ── PERSONAL INFO ───────────────────────────────────────────────
  name: {
    first: "Alex",
    last:  "Lee",
  },
  initials: "AL",
  title:    "Full-Stack Developer",
  location: "Toronto, ON",
  email:    "alexanderzhlee@gmail.com",
  resumeUrl: "assets/documents/AlexsResume2.pdf",   // path or URL to your resume PDF

  // Set to your photo path, e.g. "assets/photo.jpg"
  // Leave as null to show the avatar placeholder
  photo: "assets/photo.jpeg",

  bio: [
    `Hey! I'm Alex, a full-stack developer and AI enthusiast based in <strong>Toronto, ON</strong>. I love building systems that feel magical to use, especially at the intersection of data and real-time web experiences.`,
    `I got hooked on coding through programming in high school, and haven't stopped since. I've shipped everything from consumer-facing React apps to production ML inference pipelines serving hundreds of thousands of requests a day.`,
    `When I'm not building, I'm usually learning new technologies, ideating new projects, or making music on piano and guitar. I'm currently looking for a <strong>full-time role or an exciting hackathon team</strong> where I can solve real problems at scale.`,
  ],

  // ── STATS ───────────────────────────────────────────────────────
  stats: [
    { number: "9+", label: "Years coding"     },
    { number: "7",  label: "Projects shipped" },
    { number: "8",  label: "Hackathons"       },
  ],

  // ── SOCIAL LINKS ────────────────────────────────────────────────
  // icon: "github" | "linkedin" | "email" | "resume" | "website"
  contact: [
    { icon: "email",    label: "alexanderzhlee@gmail.com",   href: "mailto:alexanderzhlee@gmail.com"     },
    { icon: "github",   label: "github.com/rhythmicdigital", href: "https://github.com/rhythmicdigital", target: "_blank" },
    { icon: "linkedin", label: "linkedin.com/in/alex-lee7",  href: "https://linkedin.com/in/alex-lee7",  target: "_blank" },
    { icon: "resume",   label: "Download Resume",            href: "assets/documents/AlexsResume2.pdf"                                   },
  ],

  // ── SKILLS ──────────────────────────────────────────────────────
  // color: any valid CSS hex/rgb
  skills: [
    { name: "React",      color: "#61dafb" },
    { name: "Node.js",    color: "#339933" },
    { name: "Python",     color: "#3776ab" },
    { name: "PyTorch",    color: "#ee4c2c" },
    { name: "TypeScript", color: "#00c8e8" },
    { name: "Git",        color: "#f05032" },
    { name: "AWS",        color: "#ff9900" },
    { name: "SQL",        color: "#336791" },
  ],

  // ── EXPERIENCE ──────────────────────────────────────────────────
  // colorClass:  "c1" (aqua) | "c2" (green) | "c3" (purple)
  // logo:        path to your uploaded logo image, e.g. "assets/logos/ontario.png"
  //              Set to null to show the letter avatar fallback instead.
  // logoLetter:  1–2 characters shown when logo is null or fails to load.
  // current:     true highlights the card with an aqua timeline bar.
  experience: [
    {
      role:        "I&IT Analyst/Developer Co-op",
      company:     "Ministry of Public and Business Service Delivery and Procurement",
      period:      "September 2024 – December 2025",
      location:    "Toronto, ON (Hybrid)",
      colorClass:  "c1",
      logoLetter:  "ON",
      logo:        "assets/logos/ontario.png",   // e.g. "assets/logos/ontario.png"
      current:     true,
      description: "Migrating contact centres to the cloud using AWS and Amazon Connect. Built a configurable Python automation script (Boto3) to tag hundreds of Amazon Connect resources, reducing manual configuration time by 90%",
      tags: ["AWS", "Python", "Typescript", "React", "Node.js"],
    },
    {
      role:        "C#/Unity Developer (Freelance)",
      company:     "Freelance",
      period:      "Nov 2022 – Feb 2024",
      location:    "Remote",
      colorClass:  "c3",
      logoLetter:  "FL",
      logo:        "assets/logos/unity.png",   // e.g. "assets/logos/freelance.png"
      current:     false,
      description: "Built and delivered 8 web games using C#, Unity, and WebGL. Maintained a 4-star+ rating across games on itch.io",
      tags: ["Unity", "C#", "WebGL"],
    },
  ],

  // ── PROJECTS ────────────────────────────────────────────────────
  // type:    any string, e.g. "ml" | "web" | "data" | "ai" | "browser extension"
  //          Controls the fallback colour theme if no image is set.
  // image:   path to your uploaded promo art, e.g. "assets/projects/parking.png"
  //          Set to null to show the styled gradient placeholder instead.
  // tags:    each tag needs a color: "blue" | "purple" | "green"
  // links:   primaryLabel/primaryHref for the main CTA; githubHref for GitHub
  projects: [
    {
      type:        "ai",
      image:       null,   // e.g. "assets/projects/parking.png"
      name:        "AI Parking Optimization Project",
      description: "Designed and implemented a modular intelligent parking-assignment system using A* Search, Q-Learning, and Deep Q-Networks (DQN) to optimize routing and parking selection under stochastic traffic conditions.",
      tags: [
        { label: "PyTorch",          color: "purple" },
        { label: "Python",           color: "purple" },
        { label: "Jupyter Notebook", color: "blue"   },
        { label: "Matplotlib",       color: "blue"   },
      ],
      primaryLabel: "Live Demo Unavailable",
      primaryHref:  "#",
      githubHref:   "https://github.com/RhythmicDigital/CP468-A1",
    },
    {
      type:        "web",
      image:       "assets/projects/tabcycle.png",   // e.g. "assets/projects/tabcycle.png"
      name:        "TabCycle",
      description: "A lightweight Chrome extension that lets you automatically rotate through open browser tabs, making it perfect for monitoring dashboards, live updates, or news feeds on an external display such as a TV, digital signage, and wallboards. 5000+ active users on Google Chrome and Edge browsers.",
      tags: [
        { label: "Javascript",    color: "blue"  },
        { label: "HTML", color: "purple" },
        { label: "CSS",  color: "blue"  },
        { label: "Chrome Extensions API", color: "green" },
      ],
      primaryLabel: "Website",
      primaryHref:  "https://tabcycle.com/",
      githubHref:   "https://github.com/RhythmicDigital/TabCycle",
    },
    {
      type:        "game",
      image:       "assets/projects/ozark.jpeg",   // e.g. "assets/projects/ozark.jpeg"
      name:        "Ozark",
      description: "Unity web game designed and developed with a cross-disciplinary team of seven during the 'Boss Rush Jam 2023' game jam. Available for browser, Windows, and Mac.",
      tags: [
        { label: "Unity",           color: "green"  },
        { label: "C#", color: "purple" },
        { label: "Git",           color: "blue"   },
        { label: "DOTween",     color: "green"  },
      ],
      primaryLabel: "🏆 Ranked 7 out of 132 for Use of Theme",
      primaryHref:  "https://itch.io/jam/boss-rush-jam-2023/rate/1930930",
      githubHref:   "https://github.com/RhythmicDigital/Ozark",
    },
    /*
    {
      type:        "web",
      image:       null,   // e.g. "assets/projects/flux.png"
      name:        "Flux API Gateway",
      description: "A lightweight, high-performance API gateway written in Node.js with rate limiting, JWT auth, request routing, and Prometheus metrics. 100k+ downloads on npm.",
      tags: [
        { label: "Node.js",    color: "blue"  },
        { label: "TypeScript", color: "blue"  },
        { label: "Redis",      color: "green" },
        { label: "JWT",        color: "blue"  },
      ],
      primaryLabel: "📦 npm",
      primaryHref:  "#",
      githubHref:   "#",
    },
    {
      type:        "ml",
      image:       null,   // e.g. "assets/projects/docsearch.png"
      name:        "DocSearch AI",
      description: "Semantic search engine for internal documentation using OpenAI embeddings and Pinecone. Deployed at a startup with 50 employees, reducing support ticket volume by 32%.",
      tags: [
        { label: "OpenAI API", color: "purple" },
        { label: "Pinecone",   color: "purple" },
        { label: "React",      color: "blue"   },
        { label: "FastAPI",    color: "blue"   },
      ],
      primaryLabel: "🔗 Case Study",
      primaryHref:  "#",
      githubHref:   "#",
    },
    {
      type:        "data",
      image:       null,   // e.g. "assets/projects/algotrader.png"
      name:        "AlgoTrader Dashboard",
      description: "Interactive backtesting dashboard for algorithmic trading strategies. Supports 10+ indicator overlays, strategy comparison, and live paper trading via Alpaca API.",
      tags: [
        { label: "React",      color: "blue"  },
        { label: "Python",     color: "green" },
        { label: "Pandas",     color: "green" },
        { label: "WebSockets", color: "blue"  },
      ],
      primaryLabel: "🔗 Live Demo",
      primaryHref:  "#",
      githubHref:   "#",
    },
    */
  ],

};
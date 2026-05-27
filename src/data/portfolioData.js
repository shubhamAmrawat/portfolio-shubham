export const portfolioData = {
  personal: {
    name: "Shubham Amrawat",
    title: "Associate Software Developer",
    subtitle: "MERN/MEAN Stack & AI Integration Specialist",
    email: "kumarjordy12@gmail.com",
    phone: "+91 76520 74830",
    location: "New Delhi, India",
    github: "https://github.com/shubhamAmrawat",
    linkedin: "https://linkedin.com/in/shubham-amrawat",
    resumeUrl: "./Shubham_Amrawat_Resume.pdf", // Path to the local resume PDF
    summary: "Highly motivated Software Developer specializing in the MERN/MEAN stack, React Native, and advanced AI integrations (OpenAI, Gemini APIs). Proven ability to deliver high-impact, full-stack applications, with production experience building robust authentication flows, scalable microservices, real-time messaging, and vector search systems. Eager to solve complex engineering challenges and drive product innovation.",
  },
  skills: [
    {
      category: "Languages",
      items: [
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Java", level: 85 },
        { name: "C++", level: 80 },
        { name: "HTML5/CSS3", level: 95 }
      ]
    },
    {
      category: "Frontend & UI",
      items: [
        { name: "React.js", level: 92 },
        { name: "React Native", level: 88 },
        { name: "Angular.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "DaisyUI", level: 90 }
      ]
    },
    {
      category: "Backend & Runtime",
      items: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 90 },
        { name: "Hono", level: 85 },
        { name: "REST APIs", level: 95 }
      ]
    },
    {
      category: "Database & Cloud",
      items: [
        { name: "MongoDB", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "Cloudflare R2/S3", level: 80 },
        { name: "Cloudinary", level: 85 },
        { name: "pgvector", level: 80 }
      ]
    },
    {
      category: "AI & Integrations",
      items: [
        { name: "Google Gemini API", level: 90 },
        { name: "OpenAI API", level: 88 },
        { name: "Claude API", level: 85 },
        { name: "FCM Notifications", level: 85 },
        { name: "CLIP Embeddings", level: 80 }
      ]
    },
    {
      category: "Tools & DevOps",
      items: [
        { name: "Git & GitHub", level: 90 },
        { name: "Turborepo & pnpm", level: 85 },
        { name: "Drizzle ORM", level: 80 },
        { name: "Vercel / Render", level: 88 },
        { name: "Postman API", level: 90 }
      ]
    }
  ],
  experience: [
    {
      role: "Associate Software Developer (MERN/MEAN Stack, React Native, AI)",
      company: "Venturepact Outgrow Private Limited",
      location: "New Delhi, India",
      period: "Nov 2024 – Present",
      description: "Delivering core full-stack features and AI integrations across scale-ready platforms, optimizing APIs, and maintaining robust system architectures.",
      bullets: [
        "Architect and implement full-stack features utilizing MERN/MEAN stack and React Native, driving enhanced user engagement and application performance.",
        "Integrate advanced AI solutions using OpenAI and Google Gemini APIs, powering contextual data retrieval and automated content generation.",
        "Contribute to codebase performance tuning, debugging critical production bottlenecks, and optimizing REST APIs to reduce server response times."
      ],
      projects: [
        {
          name: "Punjab Entrepreneurship Mindset Program",
          platform: "Web & Android App (Live Production)",
          bullets: [
            "Engineered secure, end-to-end authentication and onboarding flows for both the native Android and Web applications.",
            "Developed the critical quiz submission flow across platforms, essential for evaluating student scores and course progress.",
            "Implemented Helpdesk chat functionality in the Android app, enabling students to raise queries and interact with admins in real-time.",
            "Built and deployed reliable FCM Messaging-based notification functionality in the Android application.",
            "Designed and implemented a Milestone and Term Lock Service architecture to regulate and control student course access, ensuring structured progress.",
            "Built profile management flows, including edit capabilities, secure password changes, and implemented a revenue tracking service."
          ]
        },
        {
          name: "MUAI V2 - Masters Union Educational Platform",
          platform: "MEAN Stack Web App",
          bullets: [
            "Established a complete authentication setup, including role-based redirection, login, signup, and link-based password recovery.",
            "Implemented an AI-driven 'Word of the Day' service using the Gemini API to dynamically fetch and process relevant MBA vocabulary, meanings, and pronunciations.",
            "Designed and built an Achievements and Badges service that automatically awards badges to students based on custom business logic.",
            "Developed the Batchmate Service, featuring a GPA-based leaderboard showing the top 10 students and real-time online status tracking.",
            "Built comprehensive profile-related CRUD operations and their corresponding frontend views."
          ]
        }
      ]
    }
  ],
  projects: [
    {
      id: "sktch-ai",
      title: "SKTCH.AI",
      subtitle: "AI-Powered UI Builder & Canvas Ecosystem",
      description: "An AI-powered design-to-code platform that translates wireframes, sketches, or text descriptions into production-ready React + Tailwind CSS components instantly.",
      liveUrl: "https://sktchai.com",
      githubUrl: "https://github.com/shubhamAmrawat",
      techStack: [
        "React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Node.js", "Express.js",
        "MongoDB Atlas", "JWT", "GPT-4o", "Claude 3.5 Sonnet", "Gemini 2.5 Flash",
        "Cloudflare R2", "Cloudinary", "Excalidraw API", "SSE"
      ],
      highlights: [
        {
          title: "Multi-Model AI Generation Pipeline",
          detail: "Engineered a two-step AI chain. A lightweight model (GPT-4o Mini) pre-analyzes layout drafts into a structured JSON blueprint, which is then fed to premium models (GPT-4o, Claude, or Gemini) to write production-grade JSX components. This reduced prompt token cost by over 60% while improving code accuracy."
        },
        {
          title: "Real-Time Streaming via Server-Sent Events",
          detail: "Implemented streaming code generation using Server-Sent Events (SSE) with custom Gzip compression bypass. Designed a live split-pane IDE in React that streams tokens directly into a syntax-highlighted editor and interactive preview panel as they arrive."
        },
        {
          title: "Public Canvas & Shareable Ecosystem",
          detail: "Integrated Excalidraw-based whiteboard sketching. Built a snapshot persistence pipeline using Cloudflare R2 / S3 storage and a public gallery for users to explore, like, search, and fork sketches using shareable URLs."
        },
        {
          title: "Curated Component Library & AI Surgical Edit",
          detail: "Developed a repository of 28+ pre-built React components. Engineered an AI edit endpoint with Gemini 2.5 Flash utilizing a strict system prompt to apply localized modifications directly to specific lines of code."
        },
        {
          title: "Advanced Authentication & Rate Limiting",
          detail: "Secured APIs with rotating JWT tokens (cookie-based refresh tokens) and Google OAuth 2.0. Protected AI endpoints using Redis-based rate limiting (20 generations/hour per user)."
        }
      ],
      impact: "Empowered designers and developers to fast-track prototyping by converting drawing sketches directly into clean, componentized React code."
    },
    {
      id: "aura",
      title: "AURA",
      subtitle: "AI-Powered Wallpaper Platform & Creator Network",
      description: "A production-grade full-stack wallpaper platform featuring semantic search, vector-based visual similarity, and a comprehensive creator uploading ecosystem.",
      liveUrl: "https://aurora-walls.com",
      githubUrl: "https://github.com/shubhamAmrawat",
      techStack: [
        "Next.js 16", "App Router", "React Server Components", "Hono", "Drizzle ORM",
        "PostgreSQL", "pgvector", "Cloudflare R2", "CLIP Embeddings", "Turborepo", "pnpm"
      ],
      highlights: [
        {
          title: "Monorepo & Type-Safe Architecture",
          detail: "Architected the codebase as a Turborepo monorepo with pnpm workspaces. Created shared packages for database models (@aura/db) and TypeScript definitions (@aura/types), ensuring complete full-stack type safety."
        },
        {
          title: "AI Visual Similarity & Semantic Search",
          detail: "Implemented a local vector search engine using CLIP (Contrastive Language-Image Pre-training) models (Xenova/clip-vit-base-patch32). Stored embeddings in PostgreSQL via pgvector, performing hybrid scoring (75% CLIP visual similarity + 15% matching category + 10% tag overlap)."
        },
        {
          title: "Natural Language Mood-Search",
          detail: "Leveraged CLIP text embeddings to enable natural-language mood searching. Queries like 'feels like 3am Tokyo' or 'rainy moody cyberpunk' retrieve visually matched wallpapers directly from the vector index."
        },
        {
          title: "Time-Decay Trending Algorithm",
          detail: "Designed and implemented a custom trending formula pre-computed hourly: score = (downloads * 3 + likes * 2 + views * 0.1) / hours^0.8. Powered dynamic content curation across feed pages."
        },
        {
          title: "Secure OTP Authentication",
          detail: "Created a custom OTP email authentication flow from scratch (OTP via Brevo SMTP -> JWT -> httpOnly cookies) to gain a deep under-the-hood understanding of token-based authentication mechanics."
        },
        {
          title: "Creator Pipeline & Asset Processing",
          detail: "Engineered an asset upload pipeline that handles parallel image moderation (Sightengine API), server-side metadata extraction (sharp/blurhash), and automated vector embedding generation."
        }
      ],
      impact: "Built a fully automated asset-processing pipeline capable of indexing high-resolution visual contents and serving them through state-of-the-art vector searches."
    }
  ],
  education: [
    {
      degree: "B. Tech in Computer Science with Specialization in Artificial Intelligence",
      institution: "Netaji Subhas University of Technology (NSUT)",
      location: "New Delhi, India",
      period: "2019 – 2023",
      details: "Focused on Software Engineering, Machine Learning, Deep Learning, and Advanced Data Structures & Algorithms."
    },
    {
      degree: "12th Grade",
      institution: "Army Public School",
      location: "New Delhi, India",
      period: "2019",
      details: "Completed standard secondary education focusing on Physics, Chemistry, and Mathematics."
    }
  ],
  certifications: [
    {
      title: "Web Development",
      issuer: "Internshala Trainings",
      score: "93% Score"
    },
    {
      title: "C++ Foundation with Data Structures",
      issuer: "Coding Ninjas",
      score: "Credential Completed"
    },
    {
      title: "Standard Java — MERN Stack",
      issuer: "Coding Ninjas",
      score: "Credential Completed"
    }
  ]
};

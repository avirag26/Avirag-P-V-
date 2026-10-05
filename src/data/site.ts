const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const site = {
  name: "Avirag P V",
  shortName: "Avirag",
  role: "Software Developer & DevOps",
  location: "Kerala, India",
  company: "Datameris IT Solutions Pvt Ltd",
  experienceYears: "2+",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000"),
  description:
    "Avirag P V is a software developer with DevOps experience and 2+ years of building scalable, production-ready products for clients in the UK and India — with Next.js, NestJS, PostgreSQL, Redis, Docker, CI/CD and AWS.",
  email: "aviragpv26@gmail.com",
  phone: "+91 70123 34610",
  phoneHref: "+917012334610",
  resume: "", // e.g. "/resume.pdf" — place the file in /public
  socials: {
    github: "", // e.g. "https://github.com/username"
    linkedin: "", // e.g. "https://www.linkedin.com/in/username"
    x: "",
  },
  keywords: [
    "Avirag P V",
    "Avirag",
    "Software Developer",
    "DevOps Engineer",
    "Full-Stack Developer",
    "CI/CD",
    "Datameris IT Solutions",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "NestJS Developer",
    "PostgreSQL",
    "Prisma",
    "AWS",
    "Docker",
    "Nginx",
    "Caddy",
    "WebRTC",
    "Socket.io",
    "SEO",
    "Freelance Web Developer UK",
    "Brototype",
    "Kerala",
    "Portfolio",
  ],
} as const;

export const skills = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Web Animations", "Responsive UI"],
  },
  {
    group: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "REST APIs", "JWT Auth"],
  },
  {
    group: "Architecture",
    items: ["Clean Architecture", "Repository Pattern", "Scalable Systems", "MVC", "Clean Code"],
  },
  {
    group: "Databases & Caching",
    items: ["PostgreSQL", "Prisma ORM", "MongoDB", "Mongoose", "Redis Caching"],
  },
  {
    group: "Real-time",
    items: ["Socket.io", "WebSockets", "WebRTC", "RTCDataChannel", "Streams API"],
  },
  {
    group: "Payments",
    items: ["Stripe", "Razorpay", "Cashfree", "PayPal"],
  },
  {
    group: "DevOps & Servers",
    items: ["Docker", "CI/CD Pipelines", "Nginx", "Caddy", "Linux Server Setup", "Swap Memory Configuration"],
  },
  {
    group: "Cloud & Monitoring",
    items: ["AWS", "AWS Monitoring", "Uptime Monitoring", "Vercel", "Render", "Railway"],
  },
  {
    group: "Growth & Marketing",
    items: ["SEO & Technical SEO", "Local SEO", "Digital Marketing", "Ad Campaigns", "Campaign Strategy"],
  },
];

export const experience = [
  {
    company: "Datameris IT Solutions Pvt Ltd",
    role: "Full Stack Developer",
    duration: "8 months — Present",
    current: true,
    description:
      "Building and maintaining production applications across the full stack, while contributing to DevOps across the delivery pipeline.",
    points: [
      "Develop scalable features following clean architecture and the repository pattern",
      "Containerize services with Docker and automate build, test and release with CI/CD pipelines",
      "Deploy, monitor and maintain applications on AWS for reliable, repeatable releases",
      "Configure Linux servers with Nginx and Caddy reverse proxies, SSL and swap memory for stable performance",
    ],
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    duration: "2 years",
    current: false,
    description:
      "Delivering production websites and web applications for clients in the UK and India — from requirements and design to deployment, SEO and growth.",
    points: [
      "Built Cocospice, live today for a South Indian restaurant in the UK",
      "Built the animated agency website for Micro C Media (Kerala & UK)",
      "Integrated payment gateways including Stripe, Razorpay, Cashfree and PayPal",
      "Handled SEO, hosting and deployments on Vercel, Render and Railway",
    ],
  },
  {
    company: "Brototype",
    role: "MERN Stack Developer — Trainee",
    duration: "9 months",
    current: false,
    description:
      "An intensive, project-based engineering program with weekly technical reviews and professional development workflows.",
    points: [
      "Built Scholaro, a full-stack e-learning platform, from scratch to production",
      "Built real-time applications with Socket.io and WebRTC",
    ],
  },
];

export const education = [
  {
    institution: "Brototype",
    credential: "Full-Stack Web Development (MERN)",
    period: "",
    description:
      "An intensive, project-driven engineering program built around self-learning, weekly technical reviews and shipping real products. Trained end-to-end on the MERN stack, system design fundamentals, data structures and professional workflows.",
  },
  {
    institution: "Higher Secondary (Plus Two)",
    credential: "Computer Science",
    period: "",
    description:
      "Foundation in programming, computer fundamentals, mathematics and logical problem solving — where the interest in building software began.",
  },
];

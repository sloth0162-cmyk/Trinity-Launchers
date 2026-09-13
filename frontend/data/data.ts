// ============================================================
// Trinity Lancers — Local Data (V1)
// Replace with API calls when FastAPI backend is ready
// ============================================================

export interface Freelancer {
  id: number;
  name: string;
  title: string;
  pfp: string;
  bio: string;
  skills: string[];
  socials?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export interface Project {
  id: number;
  freelancerId: number;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  link: string;
  tags: string[];
  year: number;
}

// ============================================================
// FREELANCERS
// ============================================================

export const freelancers: Freelancer[] = [
  {
    id: 1,
    name: "Aria Vasquez",
    title: "Frontend Engineer",
    pfp: "/images/pfp-1.jpg",
    bio: "Aria architects interfaces that feel inevitable — clean, fast, and considered. She specialises in React ecosystems, design systems, and the kind of frontend work that actually makes products feel premium.",
    skills: ["React", "TypeScript", "Next.js", "Design Systems", "Performance"],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 2,
    name: "Marcus Osei",
    title: "UX & Product Designer",
    pfp: "/images/pfp-2.jpg",
    bio: "Marcus shapes how things feel before a single line of code is written. Grounded in research and trained in systems thinking, he designs products that work properly — not just ones that look good.",
    skills: ["Figma", "UX Research", "Interaction Design", "Prototyping", "Brand"],
    socials: {
      linkedin: "https://linkedin.com",
      website: "https://example.com",
    },
  },
  {
    id: 3,
    name: "Daniel Reyes",
    title: "Backend Engineer",
    pfp: "/images/pfp-3.jpg",
    bio: "Daniel builds the infrastructure that makes everything else possible — reliable APIs, thoughtful data models, and systems engineered to scale. He keeps things simple until they need to be complex.",
    skills: ["Python", "FastAPI", "PostgreSQL", "Docker", "Cloud Architecture"],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
];

// ============================================================
// PROJECTS
// ============================================================

export const projects: Project[] = [
  {
    id: 1,
    freelancerId: 1,
    name: "Meridian Dashboard",
    description: "An analytics platform for engineering teams to track deployment health, API performance, and system uptime at a glance.",
    longDescription: "Meridian is a real-time engineering observability dashboard built for a Series A startup. The project required designing and building a data-dense interface that remained readable under load. Built with Next.js, Recharts, and a WebSocket layer for live updates.",
    image: "/images/project-1.jpg",
    link: "https://example.com",
    tags: ["Next.js", "TypeScript", "WebSocket", "Recharts"],
    year: 2024,
  },
  {
    id: 2,
    freelancerId: 2,
    name: "Aethera Mobile",
    description: "A premium e-commerce mobile experience for an independent luxury brand, built on a tight timeline with zero compromise on quality.",
    longDescription: "Aethera needed a mobile storefront that matched their editorial brand — dark, minimal, tactile. Marcus led full UX from discovery through final handoff, including a complete design system and motion spec for the engineering team.",
    image: "/images/project-2.jpg",
    link: "https://example.com",
    tags: ["UX Design", "Mobile", "Figma", "Design System"],
    year: 2024,
  },
  {
    id: 3,
    freelancerId: 3,
    name: "Apex API Platform",
    description: "A developer-facing API gateway and documentation platform, designed to handle high throughput with a seamless developer experience.",
    longDescription: "Apex required a robust API management layer that could serve thousands of developers without friction. Daniel architected the FastAPI backend, authentication system, rate limiting, and wrote the full OpenAPI specification that powers the developer docs.",
    image: "/images/project-3.jpg",
    link: "https://example.com",
    tags: ["FastAPI", "Python", "PostgreSQL", "Docker"],
    year: 2025,
  },
  {
    id: 4,
    freelancerId: 1,
    name: "Volta Design System",
    description: "A comprehensive React component library and design token system built for a fintech product team scaling to 40+ engineers.",
    longDescription: "Volta is a fully documented, tested, and accessible React component library. Aria built it from the ground up — tokens, primitives, composable patterns, Storybook integration, and a contribution framework that let the client's team own it going forward.",
    image: "/images/project-1.jpg",
    link: "https://example.com",
    tags: ["React", "Storybook", "Design Tokens", "Accessibility"],
    year: 2025,
  },
  {
    id: 5,
    freelancerId: 3,
    name: "Sentinel Auth Service",
    description: "A zero-trust authentication and authorisation microservice powering three separate client products through a shared credential layer.",
    longDescription: "Sentinel is a reusable auth microservice handling OAuth2, JWT, refresh token rotation, and role-based access control. Built for multi-tenancy and deployed on AWS with full infrastructure-as-code.",
    image: "/images/project-3.jpg",
    link: "https://example.com",
    tags: ["Python", "JWT", "OAuth2", "AWS", "Terraform"],
    year: 2025,
  },
];

// ============================================================
// HELPERS
// ============================================================

export function getFreelancerById(id: number): Freelancer | undefined {
  return freelancers.find((f) => f.id === id);
}

export function getProjectsByFreelancerId(freelancerId: number): Project[] {
  return projects.filter((p) => p.freelancerId === freelancerId);
}

export function getAllProjects(): Project[] {
  return projects;
}

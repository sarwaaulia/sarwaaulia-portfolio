"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Heaven.ai",
    description:
      "A smart journal assistant integrated Gemini API with voice input support, implemented sentiment analysis and growth personal insights weekly using Next.js (SSR).",
    image: "/heavenai.png",
    features: [
      "Voice Input Recognition",
      "Sentiment Analysis",
      "Personal Growth Insights",
    ],
    tech: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "Prisma", "PostgreSQL", "Gemini API", "Supabase"],
    github: "https://github.com/sarwaaulia/smart-journaling",
    live: "https://heavenai-nine.vercel.app/",
  },
  {
    title: "Littlegrow",
    description:
      "An e-commerce platform with secure payment flows, shopping carts, and payment gateway integration using Midtrans, implemented real-time product stock management, order tracking, and admin dashboard.",
    image: "/littlegrow.png",
    features: [
      "Role-bassed Access Control",
      "Stock Management",
      "Order Tracking",
    ],
    tech: ["Next.js", "Tailwind", "Prisma", "Supabase", "Zustand", "Midtrans", "Resend", "React Hook Form", "Zod"],
    github: "https://github.com/sarwaaulia/littlegrow",
    live: "https://littlegrow.vercel.app/",
  },
  {
    title: "LeezStudio",
    description:
      "A real-time reservation system to automate booking and reduce manual scheduling, handled concurrent user scheduling scenarios, ensuring system reliability under multiple user interactions, reduced booking time and prevented double-booking through real-time synchronization",
    image: "/LeezStudio.png",
    features: [
      "Role-bassed Access Control",
      "Real-time Booking Sync",
      "Admin Dashboard",
    ],
    tech: ["Go", "Gin/Gorm", "Supabase", "Next.js", "Tailwind", "shadcn/ui", "TanStack Query"],
    github: "https://github.com/sarwaaulia/leezStudio-booking-app",
    live: "https://leezstudio.vercel.app/",
  },
  {
    title: "LinkZip",
    description:
      "Designed a collaborative URL shortener UI ensures instant link and QR code redirect accuracy, Implemented real-time click statistic tracking with responsive and dynamic graph visualizations.",
    image: "/linkzip.png",
    features: [
      "URL Shortener with Custom Aliases",
      "Real-time Click Statistics",
      "QR Code Generator",
    ],
    tech: ["Next.js", "Typescript", "Tailwind", "shadcn/ui."],
    github: "https://github.com/sarwaaulia/URL-SHORTENER-QR-CODE-FE",
    live: "https://linkzip-zeta.vercel.app/",
  },
  {
    title: "Circle App",
    description:
      "A social media app real-time user interaction features (posts, likes, follows) using WebSockets, implemented global state for instant user feedback using Redux Toolkit",
    image: "/circle.png",
    features: [
      "Posts Management",
      "Real-time Likes and Follows",
    ],
    tech: ["Express.js", "React.js", "Redux Toolkit", "WebSockets", "Prisma", "PostgreSQL"],
    github: "https://github.com/sarwaaulia/circle-app",
    live: "https://circle-application.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 
          className="text-4xl md:text-5xl font-black mb-16 text-center"
          style={{ color: "var(--text-main)" }}
        >
        Projects - I've Made
        </h2>

        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: any) {
  const displayFeatures = project.features.slice(0, 3);
  const hasMoreFeatures = project.features.length > 2;

  return (
    <div
      style={{ 
        backgroundColor: "var(--card-bg)", 
        borderColor: "var(--border)" 
      }}
      className="group flex flex-col rounded-3xl overflow-hidden border backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      <div className="relative h-60 md:h-72 w-full overflow-hidden border-b" style={{ borderColor: "var(--border)" }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="flex flex-col flex-1 p-8">
        <h3 
          className="text-2xl font-bold mb-3"
          style={{ color: "var(--text-main)" }}
        >
          {project.title}
        </h3>

        <p 
          className="text-sm leading-relaxed mb-6 opacity-80"
          style={{ color: "var(--text-muted)" }}
        >
          {project.description}
        </p>

        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--accent)" }}>
            Key Features:
          </p>
          <ul className="space-y-2">
            {displayFeatures.map((feature: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-main)" }}>
                <span style={{ color: "var(--accent)" }}>•</span>
                {feature}
              </li>
            ))}
            {hasMoreFeatures && (
              <li className="text-xs font-bold italic ml-4" style={{ color: "var(--accent)" }}>
                ++ and more features
              </li>
            )}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech: string, i: number) => (
            <span
              key={i}
              style={{ backgroundColor: "var(--accent)", color: "var(--nav-bg)" }}
              className="px-3 py-1 text-[10px] font-bold rounded-lg opacity-90 uppercase tracking-tighter"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-4">
          <a
            href={project.live}
            target="_blank"
            style={{ backgroundColor: "var(--accent)", color: "var(--nav-bg)" }}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold shadow-md hover:opacity-90 transition-all active:scale-95"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            style={{ borderColor: "var(--accent)"}}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold border-2 hover:bg-[var(--accent)] hover:text-[var(--nav-bg)] transition-all active:scale-95"
          >
            <Github className="w-4 h-4" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Heaven.ai",
    description:
      "Heaven AI is a smart journaling application designed to help you navigate your inner world with AI feature enhancement for organizes your journal into a structured and analyze entries to provide personal insight at the end of every week.",
    image: "/heavenai.png",
    features: [
      "Weekly AI Insight",
      "Tidy up with AI",
      "Mood and Intensity Tracking",
    ],
    tech: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com/sarwaaulia/smart-journaling",
    live: "#",
  },
  {
    title: "Littlegrow",
    description:
      "Little Grow is a modern, full-stack E-commerce 'Mini Store' specifically designed for baby essentials. This project focuses on a seamless user experience with real-time updates and a robust payment integration.",
    image: "/littlegrow.png",
    features: [
      "Role-bassed access",
      "State management for admin dashboard",
      "Real-time stock",
    ],
    tech: ["Next.js", "Prisma", "Supabase", "Zustand", "Midtrans", "Resend", "React Hook Form", "Zod"],
    github: "https://github.com/sarwaaulia/littlegrow",
    live: "#",
  },
  {
    title: "Circle App",
    description:
      "Circle app is a social media app, similar to Twitter. It allows you to interact with others by liking posts, commenting, following and unfollowing others, finding friends, and adding, deleting, editing, and viewing posts. ",
    image: "/circle.png",
    features: [
      "Autentication",
      "Real-time update",
    ],
    tech: ["React", "Prisma", "PostgreSQL", "Redux"],
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
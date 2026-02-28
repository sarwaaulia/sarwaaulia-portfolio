"use client";

import Image from "next/image";

const techs = [
  { name: "HTML", icon: "/html-svgrepo-com.svg" },
  { name: "CSS", icon: "/css-svgrepo-com.svg" },
  { name: "JavaScript", icon: "/javascript-logo-svgrepo-com.svg" },
  { name: "TypeScript", icon: "/typescript-icon-svgrepo-com.svg" },
  { name: "React", icon: "/react-svgrepo-com.svg" },
  { name: "Next.js", icon: "/next-js-svgrepo-com.svg" },
  { name: "Tailwind", icon: "/tailwind-svgrepo-com.svg" },
  { name: "Node.js", icon: "/node-js-svgrepo-com.svg" },
  { name: "PostgreSQL", icon: "/postgresql-svgrepo-com.svg" },
  { name: "Prisma", icon: "/light-prisma-svgrepo-com.svg" },
];

export default function TechStack() {
  return (
    <section id="techStack" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center" style={{ color: "var(--text-main)" }}>
          Tech Stack - I Often Use
        </h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-20 pointer-events-none"
               style={{ background: "linear-gradient(to right, var(--fade-from), transparent)" }} />
          
          <div className="absolute right-0 top-0 bottom-0 w-24 z-20 pointer-events-none"
               style={{ background: "linear-gradient(to left, var(--fade-to), transparent)" }} />

          <div className="overflow-hidden">
            <div className="animate-marquee-fix py-4">
              <div className="flex">
                {techs.map((tech, i) => (
                  <TechCard key={`a-${i}`} tech={tech} />
                ))}
              </div>
              <div className="flex">
                {techs.map((tech, i) => (
                  <TechCard key={`b-${i}`} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechCard({ tech }: { tech: { name: string; icon: string } }) {
	return (
		<div
			style={{
				backgroundColor: "var(--card-bg)",
				borderColor: "var(--border)",
			}}
			className="
        mx-3 w-28 h-28 md:w-32 md:h-32
        flex flex-col items-center justify-center gap-3 
        rounded-2xl border backdrop-blur-md
        transition-all duration-300
        hover:scale-110 hover:shadow-lg
        group flex-shrink-0
      "
		>
			<div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300">
				<Image
					src={tech.icon}
					alt={tech.name}
					fill
					className="object-contain"
				/>
			</div>
			<span
				className="text-xs md:text-sm font-bold tracking-wide"
				style={{ color: "var(--text-main)" }}
			>
				{tech.name}
			</span>
		</div>
	);
}

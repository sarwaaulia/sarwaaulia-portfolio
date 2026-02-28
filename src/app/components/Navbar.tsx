"use client";

interface NavbarProps {
	theme: string;
	toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
	return (
		<nav
			style={{ backgroundColor: "var(--nav-bg)" }}
			className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-[var(--border)] px-8 py-4 flex justify-between items-center"
		>
			<div
				className="text-xl md:text-2xl tracking-tighter transition-all duration-300 hover:scale-105 cursor-default"
				style={{
					fontFamily: "var(--font-bungee)",
					lineHeight: "1",
				}}
			>
				<span style={{ color: "var(--text-main)" }}>SARWA</span>
				<span style={{ color: "var(--accent)" }}>AULIA</span>
			</div>

			<div className="flex gap-6 items-center">
				<a
					href="#about"
					className="hover:opacity-70 transition"
					style={{ color: "var(--text-main)" }}
				>
					About
				</a>
				<a
					href="#techStack"
					className="hover:opacity-70 transition"
					style={{ color: "var(--text-main)" }}
				>
					Tech Stack
				</a>
				<a
					href="#projects"
					className="hover:opacity-70 transition"
					style={{ color: "var(--text-main)" }}
				>
					Projects
				</a>

				<button
					onClick={toggleTheme}
					className="p-2 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-90"
					style={{ backgroundColor: "var(--accent)", color: "var(--nav-bg)" }}
				>
					{theme === "light" ? "🌙" : "☀️"}
				</button>
			</div>
		</nav>
	);
}

"use client";

import Image from "next/image";

export default function Hero() {
	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center overflow-hidden transition-colors duration-500"
		>
			<div
				className="absolute inset-0 opacity-100"
				style={{ background: "var(--bg-gradient)" }}
			/>

			<div
				className="
          relative z-10
          max-w-7xl mx-auto px-6
          min-h-[calc(100vh-80px)]
          flex flex-col-reverse md:flex-row
          items-center gap-16
        "
			>
				<div className="w-full md:w-1/2 text-center md:text-left">
					<h1
						className="text-4xl md:text-6xl font-bold leading-tight"
						style={{ color: "var(--text-main)" }}
					>
						Hi, I’m <span style={{ color: "var(--accent)" }}>Sarwa Aulia</span>{" "}
						👋
					</h1>

					<p
						className="mt-6 text-base md:text-lg opacity-90 max-w-xl mx-auto md:mx-0"
						style={{ color: "var(--text-muted)" }}
					>
						A Full Stack Developer experienced in building scalable end-to-end
						web applications using JavaScript, Go, and TypeScript. Specialized
						in real-time systems, AI integration (Gemini API), and payment
						gateway implementation (Midtrans), with a focus on clean
						architecture and high-performance PostgreSQL systems.
					</p>

					<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
						<a
							href="https://drive.google.com/uc?export=download&id=1hK2O1ONC4HMh6jRmwJ29hWi6ZT8_WyYz"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								backgroundColor: "var(--accent)",
								color: "var(--nav-bg)",
							}}
							className="px-8 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-all active:scale-95 duration-300"
						>
							Download CV
						</a>

						<a
							href="https://www.linkedin.com/in/sarwa-aulia-nabila-ramadhani-86579637a/"
							target="_blank"
							style={{
								border: "2px solid var(--accent)",
							}}
							className="px-8 py-3 rounded-xl font-bold 
    transition-all duration-300 
    hover:bg-[var(--accent)] 
    hover:text-[var(--accent-contrast)] 
    active:scale-95"
						>
							Contact Me
						</a>
					</div>
				</div>

				<div className="w-full md:w-1/2 flex justify-center">
					<div
						style={{
							backgroundColor: "var(--card-bg)",
							borderColor: "var(--border)",
						}}
						className="
              relative
              w-64 h-64 md:w-96 md:h-96
              rounded-[2rem]
              overflow-hidden
              backdrop-blur-xl
              border-2
              shadow-2xl
              transition-all duration-500
            "
					>
						<Image
							src="/Sarwa.png"
							alt="Sarwa Aulia"
							fill
							priority
							className="object-cover hover:scale-105 transition-all duration-500"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

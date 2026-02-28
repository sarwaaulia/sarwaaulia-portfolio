export default function Footer() {
	return (
		<footer
			className="relative py-10 text-center text-sm backdrop-blur-lg border-t transition-colors duration-500"
			style={{
				backgroundColor: "var(--nav-bg)",
				borderColor: "var(--border)",
				color: "var(--text-muted)",
			}}
		>
			<p className="relative z-10 font-medium tracking-wide">
				© {new Date().getFullYear()} · Created by Sarwa Aulia · All Rights
				Reserved
			</p>

			<div
				className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px opacity-30"
				style={{
					background: `linear-gradient(to right, transparent, var(--accent), transparent)`,
				}}
			/>
		</footer>
	);
}

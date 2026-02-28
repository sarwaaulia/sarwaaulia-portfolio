"use client";

import { GraduationCap, Users } from "lucide-react";

export default function About() {
	return (
		<section
			id="about"
			className="relative py-24 px-6 transition-colors duration-500"
		>
			<div className="max-w-4xl mx-auto">
				<h2
					className="text-4xl md:text-5xl font-black mb-16 text-center"
					style={{ color: "var(--text-main)" }}
				>
					About - Education and Organization
				</h2>

				<div className="space-y-12">
					<div
						style={{
							backgroundColor: "var(--card-bg)",
							borderColor: "var(--border)",
						}}
						className="backdrop-blur-md border rounded-2xl p-8 shadow-xl transition-all hover:shadow-2xl"
					>
						<SectionHeader
							icon={<GraduationCap className="w-6 h-6" />}
							title="Education"
						/>
						<div className="space-y-6">
							<TimelineItem
								title="Al Amanah Al Gontory Islamic Boarding School"
								subtitle="Social-science"
								year="2021 – 2025"
								description="Here I majored on social sciences with strong emphasis on linguistic skill through Arabic and English, leadership, discipline, public speaking, and organizational management within an Islamic boarding school environment."
							/>
						</div>
					</div>

					<div
						style={{
							backgroundColor: "var(--card-bg)",
							borderColor: "var(--border)",
						}}
						className="backdrop-blur-md border rounded-2xl p-8 shadow-xl transition-all hover:shadow-2xl"
					>
						<SectionHeader
							icon={<Users className="w-6 h-6" />}
							title="Organization"
						/>
						<div className="space-y-8">
							<TimelineItem
								title="Student Organization Of Al Amanah Al Gontory (OSPA)"
								subtitle="Member"
								year="2024 - 2025"
								bullets={[
									"Directed a cross-functional team of staff and student volunteers to maintain organized workflow and operational excellence.",
									"Acted as a primary liaison between stakeholders (school administration, workers, and students) to streamline communication.",
									"Optimized internal financial systems and reporting for organization-wide sustainability.",
								]}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function SectionHeader({
	icon,
	title,
}: {
	icon: React.ReactNode;
	title: string;
}) {
	return (
		<div className="flex items-center gap-4 mb-8">
			<div
				style={{ backgroundColor: "var(--accent)", color: "var(--nav-bg)" }}
				className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
			>
				{icon}
			</div>
			<h3 className="text-2xl font-bold" style={{ color: "var(--text-main)" }}>
				{title}
			</h3>
		</div>
	);
}

function TimelineItem({
	title,
	subtitle,
	year,
	description,
	bullets,
}: {
	title: string;
	subtitle: string;
	year: string;
	description?: string;
	bullets?: string[];
}) {
	return (
		<div className="relative pl-0 md:pl-4 transition-all">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
				<h4 className="text-lg font-bold" style={{ color: "var(--text-main)" }}>
					{title}
				</h4>
				<span
					style={{ backgroundColor: "var(--accent)", color: "var(--nav-bg)" }}
					className="inline-block px-4 py-1 text-xs font-bold rounded-full opacity-90 shadow-sm self-start md:self-center"
				>
					{year}
				</span>
			</div>

			<p
				className="text-sm font-semibold mt-1 italic"
				style={{ color: "var(--accent)" }}
			>
				{subtitle}
			</p>

			{description && (
				<p
					className="mt-3 text-sm leading-relaxed"
					style={{ color: "var(--text-muted)" }}
				>
					{description}
				</p>
			)}

			{bullets && (
				<ul className="list-disc list-inside mt-4 text-sm space-y-2 ml-2">
					{bullets.map((item, i) => (
						<li
							key={i}
							style={{ color: "var(--text-muted)" }}
							className="leading-relaxed"
						>
							{item}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

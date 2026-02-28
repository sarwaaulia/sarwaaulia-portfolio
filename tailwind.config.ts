import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "var(--accent)",
				secondary: "var(--text-muted)",
				main: "var(--text-main)",
			},
			animation: {
				marquee: "marquee 25s linear infinite",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-50%)" },
				},
			},
		},
	},
	plugins: [],
};

export default config;

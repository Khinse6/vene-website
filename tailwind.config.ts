import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./layouts/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				veneblue: "#91e6fa",
				veneorange: "#ffa200",
				venegray1: "#1d2427",
				venegray2: "#283338"
			},
			fontFamily: {
				goldman: ["Goldman", "sans-serif"]
			}
		}
	},
	plugins: []
} satisfies Config;

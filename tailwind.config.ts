import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				veneblue: "#91e6fa",
				veneorange: "#ffa200",
				veneblack: "#1d2427"
			},
			fontFamily: {
				goldman: ['"Goldman"', "sans-serif"],
				geist: ['"GeistVF"', "sans-serif"],
				geistMono: ['"GeistMono"', "monospace"]
			}
		}
	},
	plugins: []
} satisfies Config;

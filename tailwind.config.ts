import type { Config } from 'tailwindcss'

export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	theme: {
		extend: {
			colors: {
				veneblue: '#91e6fa',
				veneorange: '#ffa200',
				venegray1: '#1d2427',
				venegray2: '#283338',
			},
			fontFamily: {
				goldman: ['Goldman', 'sans-serif'],
			},
		},
	},
	plugins: [],
} satisfies Config

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	ssr: true,
	devtools: {
		enabled: true,
		timeline: {
			enabled: true,
		},
	},
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	compatibilityDate: '2024-12-20',
	modules: [
		'@nuxtjs/seo',
		'@nuxt/ui',
		'@nuxt/fonts',
		'@nuxt/image',
		'@nuxt/eslint',
		'@nuxtjs/supabase',
	],
	supabase: { redirect: false },
	vite: {
		server: {
			allowedHosts: true,
		},
	},
	imports: { dirs: ['types'] },
	nitro: { imports: { dirs: ['types'] } },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	ssr: true,
	compatibilityDate: '2025-05-18',
	future: {
		compatibilityVersion: 4,
	},
	app: {
		head: {
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/logos/svg/emblem-purple.svg',
				},
			],
		},
	},
	routeRules: {
		'/admin/**': { robots: false },
	},
	modules: [
		'@nuxtjs/seo',
		'@nuxt/ui',
		'@nuxt/fonts',
		'@nuxt/image',
		'@nuxt/eslint',
		'@nuxtjs/supabase',
		'@nuxthub/core',
		'@nuxtjs/turnstile',
		'@pinia/nuxt',
	],
	ui: {
		colorMode: false,
	},
	css: ['~/assets/css/main.css'],
	fonts: {
		experimental: {
			processCSSVariables: true,
		},
	},
	vite: {
		plugins: [tailwindcss()],
		server: {
			allowedHosts: true,
		},
	},
	imports: { dirs: ['./types'] },
	site: {
		url: 'https://vengeance-experts.nuxt.dev/',
		name: 'Vengeance Experts',
		language: 'pt',
	},
	runtimeConfig: {
		turnstile: { secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY },
		supabase: { serviceKey: process.env.SUPABASE_SERVICE_KEY },
		public: {
			turnstile: { siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY },
			supabase: {
				url: process.env.SUPABASE_URL,
				key: process.env.SUPABASE_KEY,
				redirect: false,
			},
		},
	},
})

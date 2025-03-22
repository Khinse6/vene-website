// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	ssr: true,
	compatibilityDate: '2024-12-20',
	modules: [
		'@nuxtjs/seo',
		'@nuxt/ui',
		'@nuxt/fonts',
		'@nuxt/image',
		'@nuxt/eslint',
		'@nuxtjs/supabase',
		'@nuxthub/core',
		'@nuxtjs/turnstile',
	],
	ui: {
		colorMode: false,
	},
	css: ['~/assets/css/main.css'],
	supabase: {
		redirect: false,
		url: 'https://yljjibigqmkpxazmlgvf.supabase.co',
		key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsamppYmlncW1rcHhhem1sZ3ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0NTM5ODEsImV4cCI6MjA1NTAyOTk4MX0.u80uTRlT_NKafp57hRcgtzTOAWlhWP4hk0GC6fhNVtY',
	},
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
	imports: { dirs: ['types'] },
	site: {
		url: 'https://vengeance-experts.nuxt.dev/',
		name: 'Vengeance Experts',
		language: 'pt',
	},
	turnstile: { addValidateEndpoint: true },
})

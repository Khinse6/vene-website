// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
	app: { head: { title: 'Vengeance Experts', charset: 'utf-8' } },
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
	],
	devtools: {
		enabled: true,
		timeline: {
			enabled: true,
		},
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
	image: { format: ['webp'] },
	vite: {
		plugins: [tailwindcss()],
		server: {
			allowedHosts: true,
		},
	},
	imports: { dirs: ['types'] },
})

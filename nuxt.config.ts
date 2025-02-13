// https://nuxt.com/docs/api/configuration/nuxt-config
import gql from '@rollup/plugin-graphql'

export default defineNuxtConfig({
	ssr: true,
	devtools: {
		enabled: true,

		timeline: {
			enabled: true,
		},
	},
	compatibilityDate: '2024-12-20',
	modules: [
		'@nuxtjs/strapi',
		'@nuxtjs/seo',
		'@nuxt/ui',
		'@nuxt/fonts',
		'@nuxt/image',
		'@nuxt/eslint',
	],
	runtimeConfig: {
		strapi: {
			url: 'https://ez-suspected-petition-walnut.trycloudflare.com',
		},
		public: {
			strapi: {
				url: 'https://ez-suspected-petition-walnut.trycloudflare.com',
			},
		},
	},
	image: {
		strapi: {
			baseURL: 'https://ez-suspected-petition-walnut.trycloudflare.com',
		},
	},
	vite: {
		plugins: [gql()],
		server: {
			allowedHosts: true,
		},
	},
	imports: { dirs: ['types'] },
	nitro: { imports: { dirs: ['types'] } },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
import gql from "@rollup/plugin-graphql";

export default defineNuxtConfig({
				devtools: {
				 enabled: true,

				 timeline: {
					 enabled: true
					}
				},
				compatibilityDate: "2024-12-20",
				modules: [
								"@nuxtjs/strapi",
								"@nuxtjs/seo",
								"@nuxt/ui",
								"@nuxt/fonts",
								"@nuxt/image"
				],
				runtimeConfig: {
								strapi: {
												url: "http://localhost:1337"
								},
								public: {
												strapi: {
																url: "http://localhost:1337"
												}
								}
				},
				image: {
								strapi: {
												baseURL: "http://localhost:1337"
								}
				},
				vite: {
								plugins: [gql()]
				},
				imports: { dirs: ["types"] },
				nitro: { imports: { dirs: ["types"] } }
});
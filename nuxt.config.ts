// https://nuxt.com/docs/api/configuration/nuxt-config
import gql from "@rollup/plugin-graphql";

export default defineNuxtConfig({
	devtools: { enabled: true },
	compatibilityDate: "2024-12-20",
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/strapi", "@nuxtjs/seo"],
	runtimeConfig: {
		strapi: {
			url: "http://localhost:1337"
		}
	},
	vite: {
		plugins: [gql()]
	},
	css: ["@/assets/css/fonts.css"]
});

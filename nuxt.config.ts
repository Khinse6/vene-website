// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	compatibilityDate: "2024-12-20",
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/strapi", "@nuxtjs/seo"],
	runtimeConfig: {
		strapi: {
			url: "http://localhost:1337"
		}
	}
});

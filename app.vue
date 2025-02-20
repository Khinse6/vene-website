<template>
	<UApp>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</template>

<script setup lang="ts">
	useSeoMeta({
		ogImage: 'https://vengeance-experts.nuxt.dev/og-image.png',
		twitterTitle: 'Vengeance Experts',
		twitterCard: 'summary_large_image',
		twitterImage: 'https://vengeance-experts.nuxt.dev/og-image.png',
		ogLocale: 'pt',
	})

	useHead({
		htmlAttrs: {
			lang: 'pt',
		},
	})
</script>

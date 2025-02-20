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
		twitterCard: 'summary_large_image',
		ogLocale: 'pt',
	})

	useHead({
		htmlAttrs: {
			lang: 'pt',
		},
	})
</script>

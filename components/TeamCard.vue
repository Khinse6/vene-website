<template>
	<NuxtLink
		:to="{ name: 'teams-slug', params: { slug: team.slug } }"
		class="group relative aspect-[2/3] w-full bg-gray-200"
	>
		<NuxtImg
			provider="strapi"
			:src="team.cover?.url"
			:alt="team.cover?.alternativeText"
			class="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
		/>
		<h2
			class="absolute bottom-0 z-10 w-full bg-black/50 py-5 text-center font-goldman text-lg/4 font-bold"
		>
			{{ team.name }}
		</h2>
	</NuxtLink>
</template>

<script setup lang="ts">
	defineProps<{ team: Team }>()
</script>

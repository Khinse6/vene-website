<script setup lang="ts">
	defineProps<{
		team: Tables<'teams'>
	}>()
</script>

<template>
	<NuxtLink
		class="group relative aspect-2/3 w-56 bg-neutral-800 xl:w-70"
		:to="{ name: 'teams-slug', params: { slug: team.slug } }"
	>
		<NuxtImg
			v-if="team.cover"
			class="absolute grayscale transition-all duration-300 group-hover:grayscale-0"
			:src="`${SupabaseImgUrl}/tcard/${team.cover}`"
			:alt="team.name"
			:modifiers="{ auto: 'format,compress' }"
			fit="cover"
			format="avif"
			preload
		/>
		<h2
			class="font-goldman absolute bottom-0 z-10 w-full py-5 text-center text-lg/4 font-bold"
		>
			{{ team.name }}
		</h2>
	</NuxtLink>
</template>

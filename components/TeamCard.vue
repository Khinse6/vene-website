<template>
	<div class="group relative aspect-2/3 w-full bg-gray-200">
		<NuxtImg
			v-if="team.cover?.url"
			:src="team.cover?.url ?? undefined"
			:alt="team.cover?.alt_txt ?? undefined"
			class="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
		/>
		<h2
			class="font-goldman absolute bottom-0 z-10 w-full bg-black/50 py-5 text-center text-lg/4 font-bold"
		>
			{{ team.name }}
		</h2>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps<{
		team: Tables<'teams'> & {
			cover?: Tables<'images'> | null
		}
	}>()
</script>

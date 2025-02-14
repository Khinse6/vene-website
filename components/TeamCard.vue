<template>
	<div class="group relative aspect-[2/3] w-full bg-gray-200">
		<NuxtImg
			:src="team.cover?.url"
			:alt="team.cover?.alternativeText"
			class="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
		/>
		<h2
			class="absolute bottom-0 z-10 w-full bg-black/50 py-5 text-center font-goldman text-lg/4 font-bold"
		>
			{{ team.name }}
		</h2>
	</div>
</template>

<script setup lang="ts">
	defineProps<{ team: Team }>()
</script>

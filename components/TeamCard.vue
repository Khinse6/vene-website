<template>
	<div class="w-full aspect-[2/3] bg-gray-200 relative">
		<NuxtImg
			v-if="team.cover && team.cover[0]"
			provider="strapi"
			:src="team.cover[0].url"
			:alt="team.cover[0].alternativeText"
			class="absolute inset-0 w-full h-full object-cover"
		/>
		<NuxtImg
			v-if="team.cover && team.cover[1]"
			provider="strapi"
			:src="team.cover[1].url"
			:alt="team.cover[1].alternativeText"
			class="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
		/>
		<h2
			class="absolute bottom-0 text-lg/4 font-bold text-center font-goldman bg-black/50 w-full py-5 z-10"
		>
			{{ team.name }}
		</h2>
	</div>
</template>

<script setup lang="ts">
defineProps<{ team: Team }>();
</script>

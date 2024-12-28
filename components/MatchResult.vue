<template>
	<div class="flex bg-slate-500 p-5">
		<template v-if="match.details.length === 2">
			<img
				:src="`${strapiBaseUrl}${match.details[0].team.logo.url}`"
				:alt="match.details[0].team.logo.alternativeText"
			/>
			<span>/</span>
			<img
				:src="`${strapiBaseUrl}${match.details[1].team.logo.url}`"
				:alt="match.details[1].team.logo.alternativeText"
			/>
		</template>
	</div>
</template>

<script lang="ts" setup>
import type { Match } from "~/types/Match"; // Import the Match type
const strapiBaseUrl = useRuntimeConfig().public.strapi.url; // Get the public Strapi base URL
const props = defineProps<{
	match: Match;
}>();
</script>

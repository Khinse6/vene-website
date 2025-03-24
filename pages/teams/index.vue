<script setup lang="ts">
	const { data: teams, error } = await useFetch('/api/teams')
</script>

<template>
	<div
		v-if="!error"
		class="flex w-full flex-wrap justify-center gap-5"
	>
		<AppTeamCard
			v-for="t in teams"
			:key="t.slug"
			:team="t"
		/>
	</div>
</template>

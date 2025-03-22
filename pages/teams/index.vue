<script setup lang="ts">
	const { data: teams } = await useAsyncData('teams', () =>
		$fetch('/api/teams')
	)
</script>

<template>
	<div
		v-if="teams && teams.length"
		class="flex w-full flex-wrap justify-center gap-5"
	>
		<AppTeamCard
			v-for="t in teams"
			:key="t.slug!"
			:team="t"
		/>
	</div>
</template>

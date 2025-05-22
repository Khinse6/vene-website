<script setup lang="ts">
	const { data: teams, error } = await useFetch('/api/teams')
</script>

<template>
	<section
		v-if="!error"
		class="flex w-full flex-wrap justify-center gap-5 pb-10"
	>
		<TeamCard
			v-for="item in teams"
			:key="item.slug"
			:team="item"
		/>
	</section>
	<UButton
		label="Junta-te a Nós"
		to="/form"
		variant="outline"
		color="neutral"
		size="xl"
	/>
</template>

<script setup lang="ts">
	const client = useSupabaseClient()
	const { data: teams } = await useAsyncData(
		'teams',
		async () => {
			return await client
				.from('teams')
				.select('*, cover(*), members(nick)')
				.ilike('slug', '%vengeance%')
		},
		{
			transform: (result) => result.data,
		}
	)
</script>

<template>
	<div
		v-if="teams && teams.length"
		class="flex w-full flex-wrap justify-center gap-5"
	>
		<TeamCard
			v-for="t in teams"
			:key="t.slug!"
			:team="t"
		/>
	</div>
</template>

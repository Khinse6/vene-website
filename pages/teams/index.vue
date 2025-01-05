<template>
	<div v-if="error" class="my-4 text-center text-red-500">
		Failed to load teams: {{ error.message }}
	</div>

	<div v-else-if="teams" class="flex w-full flex-wrap justify-center gap-5">
		<TeamCard
			v-for="t in teams"
			:key="t.name"
			:team="t"
			class="basis-40 sm:basis-1/4 xl:basis-1/5"
		/>
	</div>
</template>

<script setup lang="ts">
	import GetTeams from '~/queries/GetTeams.gql'

	const {
		data: teams,
		error,
		status,
	} = useFetchData<Team[]>('teams', 'teams', GetTeams, {
		filters: {
			or: [
				{ name: { contains: 'Vengeance Experts' } },
				{ name: { contains: 'Staff' } },
			],
		},
		sort: 'name:asc',
	})
</script>

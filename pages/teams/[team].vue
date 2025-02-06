<template>
	<div :key="team_slug">
		<p>{{ team?.name }} , {{ team?.slug }}</p>
	</div>
</template>

<script setup lang="ts">
	const route = useRoute() // Get the current route
	const team_slug = route.params.team as string // Extract the team from the route parameters
	import GetTeams from '~/queries/GetTeams.gql'
	const { data, error, status } = useFetchData<Team[]>(
		team_slug,
		'teams',
		GetTeams,
		{
			filters: {
				slug: {
					eq: team_slug,
				},
			},
			sort: 'name:asc',
		}
	)

	const team = data.value?.[0] as Team | undefined
</script>

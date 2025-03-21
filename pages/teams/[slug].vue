<script setup lang="ts">
	const client = useSupabaseClient()
	const currentSlug = useRoute().params.slug as string
	const currentDate = new Date().toISOString()

	const { data: team } = await useAsyncData(
		currentSlug,
		async () => {
			return await client
				.from('teams')
				.select(
					'*, members:members(*, card(*)), home_series:series!Serie_home_team_fkey(*), away_series:series!Serie_away_team_fkey(*)'
				)
				.ilike('slug', `%${currentSlug}%`)
				.single()
		},
		{ transform: (result) => result.data }
	)

	const { data: pastSeries } = await useAsyncData(
		`${currentSlug}-past-series`,
		async () => {
			return await client
				.from('series')
				.select(
					'*,home_team!inner(id, name, slug),away_team:teams!away_team(id, name, slug)'
				)
				.lte('date', currentDate)
				.or(`home_team.eq.${team.value?.id},away_team.eq.${team.value?.id}`)
		},
		{ transform: (result) => result.data }
	)

	const { data: upcomingSeries } = await useAsyncData(
		`${currentSlug}-upcoming-series`,
		async () => {
			return await client
				.from('series')
				.select(
					'*,home_team:teams!home_team(id, name, slug),away_team:teams!away_team(id, name, slug)'
				)
				.gt('date', currentDate)
				.or(`home_team.eq.${team.value?.id},away_team.eq.${team.value?.id}`)
		},
		{ transform: (result) => result.data }
	)
</script>

<template>
	<p class="font-goldman pb-10 text-3xl">
		{{ team?.name }}
	</p>
	<section
		v-if="team?.members"
		class="flex w-full flex-wrap justify-center gap-5"
	>
		<MemberCard
			v-for="m in team?.members"
			:key="m.id"
			class="basis-40 sm:basis-1/4 xl:basis-1/6"
			:member="m"
		/>
	</section>
</template>

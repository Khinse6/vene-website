<template>
	<div
		class="flex w-full flex-col flex-wrap justify-evenly align-middle lg:flex-row"
	>
		<div class="w-full text-center lg:w-[40%]">
			<h2 class="font-goldman text-xl font-bold">Upcoming Matches</h2>
			<div v-if="upcomingError">Error: {{ upcomingError.message }}</div>
			<div v-else class="my-5 flex flex-col gap-5">
				<MatchCard
					v-for="match in upcomingMatches"
					:key="match.name"
					:match="match"
				/>
			</div>
		</div>

		<div class="w-full text-center lg:w-[40%]">
			<h2 class="font-goldman text-xl font-bold">Past Matches</h2>
			<div v-if="pastError">Error: {{ pastError.message }}</div>
			<div v-else class="my-5 flex flex-col gap-5">
				<MatchCard
					v-for="match in pastMatches"
					:key="match.name"
					:match="match"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import GetMatches from '~/queries/GetMatches.gql'
	const currentDate = new Date().toISOString()

	const {
		data: upcomingMatches,
		error: upcomingError,
		status: upcomingStatus,
	} = useFetchData<Match[]>('upcomingMatches', 'matches', GetMatches, {
		filters: { date: { gt: currentDate } },
		pagination: { limit: 3 },
		sort: ['date:asc'],
	})

	const {
		data: pastMatches,
		error: pastError,
		status: pastStatus,
	} = useFetchData<Match[]>('pastMatches', 'matches', GetMatches, {
		filters: { date: { lte: currentDate } },
		pagination: { limit: 3 },
		sort: ['date:desc'],
	})
</script>

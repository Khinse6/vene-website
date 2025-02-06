<template>
	<div
		class="flex w-full flex-col flex-wrap justify-evenly align-middle lg:flex-row"
	>
		<section class="w-full text-center lg:w-[40%]">
			<h2 class="font-goldman text-xl font-bold">Upcoming Series</h2>
			<div v-if="upcomingError">Error: {{ upcomingError.message }}</div>
			<div v-else-if="upcomingSeries?.length" class="my-5 flex flex-col gap-5">
				<SerieCard
					v-for="serie in upcomingSeries"
					:key="serie.name"
					:serie="serie"
				/>
			</div>
			<div v-else>No upcoming series</div>
		</section>

		<section class="w-full text-center lg:w-[40%]">
			<h2 class="font-goldman text-xl font-bold">Past Series</h2>
			<div v-if="pastError">Error: {{ pastError.message }}</div>
			<div v-else-if="pastSeries?.length" class="my-5 flex flex-col gap-5">
				<SerieCard
					v-for="serie in pastSeries"
					:key="serie.name"
					:serie="serie"
				/>
			</div>
			<div v-else>No past series</div>
		</section>
	</div>
</template>

<script setup lang="ts">
	import GetSeries from '~/queries/GetSeries.gql'
	const currentDate = new Date().toISOString()
	const {
		data: upcomingSeries,
		error: upcomingError,
		status: upcomingStatus,
	} = useFetchData<Serie[]>('upcomingSeries', 'series', GetSeries, {
		filters: { date: { gt: currentDate } },
		pagination: { limit: 3 },
		sort: ['date:asc'],
	})

	const {
		data: pastSeries,
		error: pastError,
		status: pastStatus,
	} = useFetchData<Serie[]>('pastSeries', 'series', GetSeries, {
		filters: { date: { lte: currentDate } },
		pagination: { limit: 3 },
		sort: ['date:desc'],
	})
</script>

<template>
	<div
		class="flex w-full flex-col flex-wrap justify-evenly align-middle lg:flex-row"
	>
		<section class="w-full text-center lg:w-[40%]">
			<h2 class="font-goldman text-xl font-bold">Upcoming Series</h2>
			<div v-if="series?.upcoming.length" class="my-5 flex flex-col gap-5">
				<SerieCard
					v-for="serie in series.upcoming"
					:key="serie.name"
					:serie="serie"
				/>
			</div>
			<div v-else>No upcoming series</div>
		</section>

		<section class="w-full text-center lg:w-[40%]">
			<h2 class="font-goldman text-xl font-bold">Past Series</h2>
			<div v-if="series?.past.length" class="my-5 flex flex-col gap-5">
				<SerieCard
					v-for="serie in series.past"
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
	const graphql = useStrapiGraphQL()

	const {
		data: series,
		error,
		status,
	} = await useAsyncData('series', async () => {
		const upcomingResponse = (await graphql(GetSeries, {
			filters: { date: { gt: currentDate } },
			pagination: { limit: 3 },
			sort: ['date:asc'],
		})) as { data: { series: Serie[] } }

		const pastResponse = (await graphql(GetSeries, {
			filters: { date: { lte: currentDate } },
			pagination: { limit: 3 },
			sort: ['date:desc'],
		})) as { data: { series: Serie[] } }

		return {
			upcoming: upcomingResponse.data.series,
			past: pastResponse.data.series,
		}
	})
</script>

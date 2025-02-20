<template>
	<section class="flex w-full flex-col justify-between gap-10 lg:flex-row">
		<section class="w-full text-center">
			<h2 class="font-goldman text-xl font-bold">Upcoming Series</h2>
			<div v-if="upcomingSeries?.length" class="my-5 flex flex-col gap-5">
				<SerieCard v-for="s in upcomingSeries" :key="s.id" :serie="s" />
			</div>
			<div v-else>No upcoming series</div>
		</section>

		<section class="w-full text-center">
			<h2 class="font-goldman text-xl font-bold">Past Series</h2>
			<div v-if="pastSeries?.length" class="my-5 flex flex-col gap-5">
				<SerieCard v-for="s in pastSeries" :key="s.id" :serie="s" />
			</div>
			<div v-else>No past series</div>
		</section>
	</section>
</template>

<script setup lang="ts">
	const client = useSupabaseClient()
	const currentDate = new Date().toISOString()
	const { data: upcomingSeries } = await useAsyncData(
		'upcoming-series',
		async () => {
			return await client
				.from('series')
				.select('*, home_team(*, logo(*)), away_team(*, logo(*)), game(*)')
				.gt('date', currentDate)
				.order('date', { ascending: true })
				.limit(3)
		},
		{ transform: (result) => result.data }
	)
	const { data: pastSeries } = await useAsyncData(
		'past-series',
		async () => {
			return await client
				.from('series')
				.select('*, home_team(*, logo(*)), away_team(*, logo(*)), game(*)')
				.lte('date', currentDate)
				.order('date', { ascending: true })
				.limit(3)
		},
		{ transform: (result) => result.data }
	)
</script>

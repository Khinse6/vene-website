<template>
	<div
		class="flex w-full flex-col flex-wrap justify-evenly align-middle lg:flex-row"
	>
		<section class="w-full text-center lg:w-[40%]">
			<h2 class="font-goldman text-xl font-bold">Upcoming Series</h2>
			<div v-if="series?.upcoming" class="my-5 flex flex-col gap-5">
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
			<div v-if="series?.past" class="my-5 flex flex-col gap-5">
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
	const client = useSupabaseClient()
	const currentDate = new Date().toISOString()
	const { data: series } = await useAsyncData(
		'series',
		async () => {
			const upcomingResponse = await client
				.from('series')
				.select('*, home_team(*, logo(*)), away_team(*, logo(*)), game(*)')
				.gt('date', currentDate)
				.order('date', { ascending: true })
				.limit(3)

			const pastResponse = await client
				.from('series')
				.select('*, home_team(*, logo(*)), away_team(*, logo(*)), game(*)')
				.lte('date', currentDate)
				.order('date', { ascending: false })
				.limit(3)

			return { upcomingResponse, pastResponse }
		},
		{
			transform: ({ upcomingResponse, pastResponse }) => ({
				upcoming: upcomingResponse.data,
				past: pastResponse.data,
			}),
			lazy: false,
		}
	)
</script>

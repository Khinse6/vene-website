<script setup lang="ts">
	const { data: series } = await useAsyncData('series', () =>
		$fetch('/api/series?limit=3')
	)
</script>

<template>
	<section class="flex w-full flex-col justify-between gap-10 lg:flex-row">
		<section class="w-full text-center">
			<h2 class="font-goldman text-xl font-bold">Upcoming Series</h2>
			<div
				v-if="series?.upcomingSeries?.length"
				class="my-5 flex flex-col gap-5"
			>
				<AppSerieCard
					v-for="s in series.upcomingSeries"
					:key="s.id"
					:serie="s"
				/>
			</div>
			<div v-else>No upcoming series</div>
		</section>

		<section class="w-full text-center">
			<h2 class="font-goldman text-xl font-bold">Past Series</h2>
			<div
				v-if="series?.pastSeries?.length"
				class="my-5 flex flex-col gap-5"
			>
				<AppSerieCard
					v-for="s in series.pastSeries"
					:key="s.id"
					:serie="s"
				/>
			</div>
			<div v-else>No past series</div>
		</section>
	</section>
</template>

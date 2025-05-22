<script setup lang="ts">
	const props = defineProps<{
		serie: Tables<'series'> & {
			game: Tables<'games'> | null
			home_team: Tables<'teams'>
			away_team: Tables<'away_teams'>
		}
	}>()

	const currentDate = new Date().toISOString()
	const status = computed(() => {
		return props.serie.date > currentDate ? 'upcoming' : 'past'
	})

	const localDateTime = computed(() => {
		const serieDate = new Date(props.serie.date)
		return {
			localDate: serieDate.toLocaleDateString('en-GB', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
			}),
			localTime: serieDate.toLocaleTimeString('en-GB', {
				hour: '2-digit',
				minute: '2-digit',
				hour12: false,
			}),
		}
	})
</script>

<template>
	<div class="flex flex-col overflow-hidden rounded-xl bg-gray-950">
		<div class="font-goldman flex w-full items-center justify-center text-sm">
			<span class="left-clip bg-primary w-1/2 p-2 text-start text-white">
				{{ serie.game?.name }}
			</span>
			<span class="right-clip w-1/2 truncate bg-white p-2 text-end text-black">
				{{ serie.name }}
			</span>
		</div>
		<div class="relative flex flex-col items-center py-5">
			<div class="grid w-2/3 min-w-72 grid-cols-3 place-items-center">
				<NuxtImg
					v-if="serie.home_team?.logo"
					class="aspect-square h-16 object-contain lg:h-20"
					:src="`${SupabaseImgUrl}/logos/${serie.home_team?.logo}`"
					:alt="serie.home_team?.name"
					format="avif"
				/>

				<p class="font-goldman text-2xl font-bold">
					{{
						status === 'past'
							? `${serie.home_score}  - ${serie.away_score}`
							: 'vs'
					}}
				</p>

				<NuxtImg
					v-if="serie.away_team?.logo"
					class="aspect-square h-16 object-contain lg:h-20"
					:src="`${SupabaseImgUrl}/logos/${serie.away_team?.logo}`"
					:alt="serie.away_team?.name"
					format="avif"
				/>
			</div>

			<div class="absolute bottom-2">
				<p class="font-goldman text-xs">{{ localDateTime.localDate }}</p>
				<p class="font-goldman text-xs">{{ localDateTime.localTime }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.left-clip {
		clip-path: polygon(0% 0%, 100% 0%, 95% 100%, 0% 100%);
	}

	.right-clip {
		clip-path: polygon(5% 0%, 100% 0%, 100% 100%, 0% 100%);
	}
</style>

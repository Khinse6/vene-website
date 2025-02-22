<template>
	<div class="flex flex-col overflow-hidden rounded-xl bg-gray-950">
		<div
			class="font-goldman flex w-full items-center justify-center text-sm text-black"
		>
			<span class="left-clip bg-anakiwa-300 w-[50%] p-2 text-start">
				{{ serie.game?.name }}
			</span>
			<span class="right-clip bg-orange-peel-500 w-[50%] p-2 text-end">
				{{ serie.name }}
			</span>
		</div>
		<div class="py-4 text-center">
			<div class="flex w-full items-center justify-evenly">
				<NuxtImg
					v-if="serie.home_team?.logo?.url && serie.home_team?.logo?.alt_txt"
					:src="serie.home_team?.logo?.url"
					:alt="serie.home_team?.logo?.alt_txt"
					class="flex aspect-square h-10 items-center object-contain sm:h-12 md:h-16 lg:h-20"
					format="webp"
				/>
				<p class="font-goldman text-2xl font-bold">
					<span v-if="status === 'past'"
						>{{ serie.home_score }} - {{ serie.away_score }}</span
					>
					<span v-else>/</span>
				</p>
				<NuxtImg
					:src="serie.away_team?.logo?.url ?? undefined"
					:alt="serie.away_team?.logo?.alt_txt ?? undefined"
					class="flex aspect-square h-10 items-center object-contain sm:h-12 md:h-16 lg:h-20"
					format="webp"
				/>
			</div>
			<p class="font-goldman text-xs">{{ localDateTime.localDate }}</p>
			<p class="font-goldman text-xs">{{ localDateTime.localTime }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue'
	const props = defineProps<{
		serie: Tables<'series'> & {
			game: Tables<'games'> | null
			home_team: (Tables<'teams'> & { logo: Tables<'images'> | null }) | null
			away_team: (Tables<'teams'> & { logo: Tables<'images'> | null }) | null
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

<style scoped>
	.left-clip {
		clip-path: polygon(0% 0%, 100% 0%, 95% 100%, 0% 100%);
	}

	.right-clip {
		clip-path: polygon(5% 0%, 100% 0%, 100% 100%, 0% 100%);
	}
</style>

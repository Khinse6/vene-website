<template>
	<div class="flex flex-col overflow-hidden rounded-xl bg-venegray2">
		<div
			class="flex w-full items-center justify-center font-goldman text-sm text-black"
		>
			<span class="left-clip w-[50%] bg-veneblue p-2 text-start">
				{{ serie.game.name }}
			</span>
			<span class="right-clip w-[50%] bg-veneorange p-2 text-end">
				{{ serie.name }}
			</span>
		</div>
		<div class="py-4 text-center">
			<div class="flex w-full items-center justify-evenly">
				<NuxtImg
					:src="serie.home_team.logo.url"
					:alt="serie.home_team.logo.alternativeText"
					class="h-10 sm:h-12 md:h-16 lg:h-20"
				/>
				<p class="font-goldman text-2xl font-bold">
					<span v-if="status === 'past'"
						>{{ serie.home_score }} - {{ serie.away_score }}</span
					>
					<span v-else>/</span>
				</p>
				<NuxtImg
					v-if="serie.away_team.logo?.url"
					:src="serie.away_team.logo?.url"
					:alt="serie.away_team.logo?.alternativeText"
					class="h-10 sm:h-12 md:h-16 lg:h-20"
				/>
				<p v-else class="w-10 text-3xl sm:w-12 md:w-16 lg:w-20">
					{{ serie.away_team.name }}
				</p>
			</div>
			<p class="font-goldman text-xs">{{ localDateTime.localDate }}</p>
			<p class="font-goldman text-xs">{{ localDateTime.localTime }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue'
	const props = defineProps<{ serie: Serie }>()

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

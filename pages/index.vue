<template>
	<h2>Upcoming Matches</h2>
	<div v-if="upcomingMatches && upcomingMatches.length">
		<MatchCard
			v-for="match in upcomingMatches"
			:key="match.date"
			:match="match"
		/>
	</div>
	<div v-else>
		<p>No upcoming matches.</p>
	</div>
	<div v-if="upcomingError">
		<p>Error fetching upcoming matches: {{ upcomingError.message }}</p>
	</div>

	<h2>Past Matches</h2>
	<div v-if="pastMatches && pastMatches.length" class="w-[25%]">
		<MatchCard v-for="match in pastMatches" :key="match.date" :match="match" />
	</div>
	<div v-else>
		<p>No past matches.</p>
	</div>
	<div v-if="pastError">
		<p>Error fetching past matches: {{ pastError.message }}</p>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import GetMatches from "~/queries/GetMatches.gql";
import MatchCard from "~/components/MatchCard.vue";

const upcomingMatches = ref<Match[] | null>(null);
const pastMatches = ref<Match[] | null>(null);
const upcomingError = ref<Error | null>(null);
const pastError = ref<Error | null>(null);
const currentDate = new Date().toISOString();

onMounted(async () => {
	const { data: upcomingData, error: upcomingFetchError } = await fetchData<
		Match[]
	>("matches", GetMatches, {
		filters: { date: { gt: currentDate } },
		pagination: { limit: 3 },
		sort: ["date:asc"],
	});

	if (upcomingFetchError) {
		upcomingError.value = upcomingFetchError;
		console.error("Error fetching upcoming matches:", upcomingFetchError);
	} else {
		upcomingMatches.value = upcomingData;
	}

	const { data: pastData, error: pastFetchError } = await fetchData<Match[]>(
		"matches",
		GetMatches,
		{
			filters: { date: { lte: currentDate } },
			pagination: { limit: 3 },
			sort: ["date:desc"],
		}
	);

	if (pastFetchError) {
		pastError.value = pastFetchError;
		console.error("Error fetching past matches:", pastFetchError);
	} else {
		pastMatches.value = pastData;
	}
});
</script>

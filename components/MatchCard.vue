<template>
	<div
		class="flex flex-row items-center justify-between bg-gray-100 p-4 rounded-md shadow-md w-full"
	>
		<div class="team flex flex-col items-center text-center">
			<NuxtImg
				provider="strapi"
				:src="leftTeam.logo.url"
				alt="Team Logo"
				class="h-16 w-16 mb-2"
				width="64"
				height="64"
			/>
			<h3 class="text-lg font-semibold">{{ leftTeam.name }}</h3>
			<p class="text-sm text-gray-700">Score: {{ leftScore }}</p>
		</div>

		<!-- Match Info -->
		<div class="match-info text-center mx-4">
			<p class="text-sm text-gray-500">{{ match.date }}</p>
		</div>

		<!-- Right Team (Non-House Team) -->
		<div class="team flex flex-col items-center text-center">
			<NuxtImg
				provider="strapi"
				:src="rightTeam.logo.url"
				alt="Team Logo"
				class="h-16 w-16 mb-2"
				width="64"
				height="64"
			/>
			<h3 class="text-lg font-semibold">{{ rightTeam.name }}</h3>
			<p class="text-sm text-gray-700">Score: {{ rightScore }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	match: Match;
}>();

const houseTeamString = "Vengeance";

const isHouseTeamLeft = props.match.winner_team.name.includes(houseTeamString);

const leftTeam = isHouseTeamLeft
	? props.match.winner_team
	: props.match.loser_team;
const rightTeam = isHouseTeamLeft
	? props.match.loser_team
	: props.match.winner_team;

// Set the scores accordingly
const leftScore = isHouseTeamLeft
	? props.match.winner_score
	: props.match.loser_score;
const rightScore = isHouseTeamLeft
	? props.match.loser_score
	: props.match.winner_score;
</script>

<template>
  <div class="h-screen">
    <h1 class="font-goldman text-3xl">Hello world!</h1>
	<MatchResult :match = matchData />
  </div>
</template>

<script>
export default {
	data() {
		return {
			matchData: {
				team1: "Team A",
				team2: "Team B",
				logoteam1: "/img/LOGO_SIMPLIFICADO_VNEE_COR.png",
				logoteam2: "/img/vengeance_logo_mascote.png",
				score1: 3,
				score2: 1,
				date: "2024-12-15T14:00:00Z"
			}
		};
	}
};
</script>
<template>
  <div class="flex w-fit flex-col items-center gap-5 rounded-3xl bg-slate-500 p-5">
    <div class="flex w-fit flex-col items-center justify-between gap-5">
      <img class="h-fit w-20" :src="match.logoteam1" :alt="match.team1" />
      <p class="text-center text-5xl/10">
        <span class="block">{{ match.score1 }}</span>
        <span class="block">-</span>
        <span class="block">{{ match.score2 }}</span>
      </p>
      <img class="h-fit w-20" :src="match.logoteam2" :alt="match.team2" />
    </div>
    <p class="text-black text-xl">{{ formattedDate }}</p>
  </div>
</template>

<script>
export default {
	name: "MatchResult",
	props: {
		match: {
			type: Object,
			required: true
		}
	},
	computed: {
		// Computed property for formatted date
		formattedDate() {
			const date = new Date(this.match.date);
			return date.toLocaleDateString("en-GB", {
				day: "2-digit",
				month: "short",
				year: "numeric"
			});
		}
	}
};
</script>

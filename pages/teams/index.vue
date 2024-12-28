<template>
	<p>Teams Page</p>
	<div class="flex flex-wrap justify-center gap-5 mx-[10%]">
		<TeamCard
			v-for="t in teams"
			:key="t.name"
			:team="t"
			class="md:basis-1/4 xl:basis-1/5"
		/>
	</div>
</template>

<script setup lang="ts">
import GetTeams from "~/queries/GetTeams.gql";

const teams = await fetchData<Team[]>("teams", GetTeams, { sort: "name:asc" });
console.log(teams);
</script>

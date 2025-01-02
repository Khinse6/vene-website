<template>
	<div v-if="error" class="text-red-500 text-center my-4">
		Failed to load teams: {{ error.message }}
	</div>

	<div v-else-if="teams" class="flex flex-wrap justify-center gap-5 w-full">
		<TeamCard
			v-for="t in teams"
			:key="t.name"
			:team="t"
			class="md:basis-1/4 xl:basis-1/5"
		/>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import GetTeams from "~/queries/GetTeams.gql";

const teams = ref<Team[] | null>(null);
const error = ref<Error | null>(null);

onMounted(async () => {
	const { data, error: fetchError } = await fetchData<Team[]>(
		"teams",
		GetTeams,
		{
			filters: {
				or: [
					{ name: { contains: "Vengeance Experts" } },
					{ name: { contains: "Staff" } },
				],
			},
			sort: "name:asc",
		}
	);

	teams.value = data;
	error.value = fetchError;
});
</script>

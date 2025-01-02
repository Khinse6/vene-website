<template>
	<p>News Page</p>
	<template v-for="m in members" :key="m.nick">
		<p>Nome: {{ m.nick }} Team: {{ m.team?.name }}</p>
	</template>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import GetMembers from "~/queries/GetMembers.gql"; // Import your GraphQL query

const members = ref<Member[] | null>(null);

onMounted(async () => {
	const { data, error: fetchError } = await fetchData<Member[]>(
		"members",
		GetMembers,
		{ pagination: { limit: 100 } }
	);

	members.value = data;
	error.value = fetchError;
});
</script>

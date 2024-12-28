<template>
	<p>News Page</p>
	<template v-for="m in members" :key="m.name">
		<p>Nome: {{ m.name }} Team: {{ m.team?.name }}</p>
	</template>
</template>

<script setup lang="ts">
import GetMembers from "~/queries/GetMembers.gql"; // Import your GraphQL query

const members = await fetchData<Member[]>("members", GetMembers, {});
</script>

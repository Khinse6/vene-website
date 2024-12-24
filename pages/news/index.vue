<template>
	<p>News Page</p>
	<template v-for="m in members" :key="m.name">
		<p>Nome: {{ m.name }} Team: {{ m.team?.name }}</p>
	</template>
</template>

<script setup lang="ts">
import GetMembers from "~/queries/GetMembers.gql";
import type { GetMembersResponse } from "~/types/GetMembersResponse";
import type { Member } from "~/types/Member";
const graphql = useStrapiGraphQL();

const variables = {
	filters: {
		name: {}
	},
	pagination: {
		limit: null
	}
};

const response: GetMembersResponse = await graphql(GetMembers, variables);
const members: Member[] = response.data.members;
console.log(members);
</script>

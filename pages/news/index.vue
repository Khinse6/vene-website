<template>
	<p>News Page</p>
	<p v-for="m in members" :key="m.nick">
		Nome: {{ m.nick }} Team: {{ m.team?.name }}
	</p>
</template>

<script setup lang="ts">
	import GetMembers from '~/queries/GetMembers.gql'

	const {
		data: members,
		error,
		status,
	} = useFetchData<Member[]>('members', 'members', GetMembers, {
		pagination: { limit: 100 },
	})
</script>

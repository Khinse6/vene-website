<template>
	<p class="pb-10 font-goldman text-3xl">{{ team?.name }}</p>

	<div v-if="team?.members" class="flex w-full flex-wrap justify-center gap-5">
		<MemberCard
			v-for="m in team?.members"
			class="basis-40 sm:basis-1/4 xl:basis-1/6"
			:member="m"
		/>
	</div>
</template>

<script setup lang="ts">
	import GetTeamPage from '~/queries/GetTeamPage.gql'
	const team_slug = useRoute().params.slug as string
	const graphql = useStrapiGraphQL()

	const {
		data: team,
		error,
		status,
	} = await useAsyncData(team_slug, async () => {
		const response = (await graphql(GetTeamPage, {
			filters: {
				slug: {
					eq: team_slug,
				},
			},
			memberSort: ['player:desc', 'role:asc'],
		})) as {
			data: { teams: Team[] }
		}
		return response.data.teams[0]
	})
</script>

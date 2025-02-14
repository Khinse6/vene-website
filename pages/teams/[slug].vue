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
	const client = useSupabaseClient()
	const currentSlug = useRoute().params.slug
	const { data: team } = await useAsyncData(currentSlug, async () => {
		const teamResponse = await client
			.from('teams')
			.select('*')
			.ilike('slug', `%${currentSlug}%`)
			.limit(1)
		const team = teamResponse.data?.[0] || null
		if (!team) return null
		const membersResponse = await client
			.from('members')
			.select('*')
			.eq('team', team.id)
		team.members = membersResponse.data
		return team
	})
</script>

<template>
	<div
		v-if="teams && teams.length"
		class="flex w-full flex-wrap justify-center gap-5"
	>
		<NuxtLink
			v-for="t in teams"
			:key="t.slug!"
			class="basis-56 xl:basis-70"
			:to="{ name: 'teams-slug', params: { slug: t.slug } }"
		>
			<TeamCard :team="t" />
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
	const client = useSupabaseClient()
	const { data: teams } = await useAsyncData(
		'teams',
		async () => {
			return await client
				.from('teams')
				.select('*, cover(*)')
				.ilike('slug', '%vengeance%')
		},
		{
			transform: (result) => result.data,
		}
	)
</script>

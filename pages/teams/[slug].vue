<template>
	<p class="font-goldman pb-10 text-3xl">{{ team?.name }}</p>
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
	const currentSlug = useRoute().params.slug as string
	const { data: team } = await useAsyncData(
		currentSlug,
		async () => {
			return await client
				.from('teams')
				.select('*, members(*)')
				.ilike('slug', `%${currentSlug}%`)
				.limit(1)
				.single()
		},
		{ transform: (result) => result.data }
	)
</script>

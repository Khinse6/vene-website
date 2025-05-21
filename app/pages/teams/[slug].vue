<script setup lang="ts">
	const currentSlug = useRoute().params.slug as string
	const { data: team } = await useFetch(`/api/teams/${currentSlug}`)
</script>

<template>
	<p class="font-goldman pb-10 text-3xl">
		{{ team?.name }}
	</p>
	<section
		v-if="team?.members"
		class="flex w-full flex-wrap justify-center gap-5"
	>
		<MemberCard
			v-for="m in team?.members"
			:key="m.id"
			class="basis-40 sm:basis-1/4 xl:basis-1/6"
			:member="m"
		/>
	</section>
</template>

<template>
	<div class="relative aspect-2/3 w-full bg-gray-200">
		<NuxtImg
			v-if="member.card?.url && member.card?.alt_txt"
			:src="member.card?.url"
			:alt="member.card?.alt_txt"
			class="absolute inset-0 h-full w-full object-cover"
			format="webp"
		/>
		<h2
			class="font-goldman absolute bottom-0 z-10 w-full bg-black/50 py-5 text-center text-lg/4 font-bold"
		>
			{{ member.nick }}
		</h2>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		member: Tables<'members'> & { card: Tables<'images'> | null }
	}>()
</script>

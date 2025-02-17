<template>
	<div class="relative aspect-2/3 w-full bg-gray-200">
		<NuxtImg
			:src="member.card?.url"
			:alt="member.card?.alternativeText"
			class="absolute inset-0 h-full w-full object-cover"
		/>
		<h2
			class="font-goldman absolute bottom-0 z-10 w-full bg-black/50 py-5 text-center text-lg/4 font-bold"
		>
			{{ member.nick }}
		</h2>
	</div>
</template>

<script setup lang="ts">
	defineProps<{ member: Tables<'members'> }>()
</script>

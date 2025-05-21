<script lang="ts" setup>
	const logoItems = [
		{
			emblem: '/logos/emblem-purple.svg',
			horizontal: '/logos/horizontal-purple.svg',
			vertical: '/logos/vertical-purple.svg',
		},
		{
			emblem: '/logos/emblem-wpurple.svg',
			horizontal: '/logos/horizontal-wpurple.svg',
			vertical: '/logos/vertical-wpurple.svg',
		},
		{
			emblem: '/logos/emblem-black.svg',
			horizontal: '/logos/horizontal-black.svg',
			vertical: '/logos/vertical-black.svg',
		},
		{
			emblem: '/logos/emblem-white.svg',
			horizontal: '/logos/horizontal-white.svg',
			vertical: '/logos/vertical-white.svg',
		},
	]
</script>

<template>
	<div class="flex flex-col gap-10">
		<section class="flex flex-col items-center gap-10">
			<NuxtImg
				src="/logos/vertical-purple.svg"
				class="h-50"
			/>
			<UButton
				to="/vengeance-brand.zip"
				external
				download
				class="font-goldman flex flex-col items-center rounded-xl px-10 py-4 text-xs/2 text-white uppercase"
			>
				<span>Download</span>
				<span>Brand Kit</span>
			</UButton>
		</section>
		<section class="grid grid-cols-3 place-items-center gap-y-5">
			<template
				v-for="(item, index) in logoItems"
				:key="index"
			>
				<NuxtImg
					:src="item.emblem"
					class="h-24"
				/>
				<NuxtImg
					:src="item.horizontal"
					class="h-24"
				/>
				<NuxtImg
					:src="item.vertical"
					class="h-24"
				/>
			</template>
		</section>
	</div>
</template>

<style></style>

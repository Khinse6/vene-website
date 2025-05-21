<script lang="ts" setup></script>

<template>
	<div class="flex flex-col gap-10">
		<section class="flex flex-col items-center gap-10">
			<NuxtImg
				src="/logos/svg/vertical-purple.svg"
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
				v-for="(item, index) in BrandImages"
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

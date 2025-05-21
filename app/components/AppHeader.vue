<script setup lang="ts">
	const open = ref(false)
	const router = useRouter()

	watch(
		() => router.currentRoute.value,
		() => {
			open.value = false
		}
	)
</script>

<template>
	<header class="font-goldman sticky top-0 w-full bg-black py-3">
		<UContainer class="flex items-center justify-between">
			<NuxtImg
				src="/logos/svg/horizontal-purple.svg"
				class="h-16"
			/>
			<div class="flex h-fit flex-row gap-5">
				<UNavigationMenu
					class="font-goldman hidden uppercase lg:flex"
					:items="HeaderLinks"
					orientation="horizontal"
					variant="link"
					highlight
					:ui="{ label: 'text-s/4' }"
				/>
				<UDrawer v-model:open="open">
					<UButton
						class="lg:hidden"
						icon="i-material-symbols-menu-rounded"
						variant="outline"
						color="secondary"
					/>
					<template #body>
						<UNavigationMenu
							class="font-goldman uppercase"
							:items="links"
							orientation="vertical"
							:ui="{}"
						/>
					</template>
				</UDrawer>
			</div>
		</UContainer>
	</header>
</template>

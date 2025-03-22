<script setup lang="ts">
	const open = ref(false)
	const router = useRouter()

	watch(
		() => router.currentRoute.value,
		() => {
			open.value = false
		}
	)

	const links = [
		{ label: 'Home', to: '/' },
		{ label: 'Equipas', to: '/teams' },
		{ label: 'Sobre', to: '/about' },
		{ label: 'Eventos', to: '/events' },
		{ label: 'Notícias', to: '/news' },
	]
</script>

<template>
	<header
		class="font-goldman text-anakiwa-300 sticky top-0 w-full bg-gray-950 py-3 font-bold uppercase"
	>
		<UContainer class="flex justify-between">
			<NuxtLink
				class="hover:text-orange-peel-500 flex items-center gap-5"
				to="/"
			>
				<NuxtImg src="/logo.png" alt="Org Logo" width="40" />
				<div class="text-lg/5">
					<p class="uppercase">Vengeance</p>
					<p class="uppercase">Experts</p>
				</div>
			</NuxtLink>
			<div class="flex h-fit flex-row gap-5 self-center">
				<UNavigationMenu
					:items="links"
					class="font-goldman hidden uppercase lg:flex"
					orientation="horizontal"
					:ui="{ label: 'text-s/4' }"
				/>
				<UDrawer v-model:open="open" class="w-fit">
					<UButton
						icon="i-material-symbols-menu-rounded"
						variant="outline"
						class="lg:hidden"
						color="secondary"
					/>
					<template #body>
						<UNavigationMenu
							:items="links"
							orientation="vertical"
							class="font-goldman w-fit uppercase"
						/>
					</template>
				</UDrawer>
			</div>
		</UContainer>
	</header>
</template>

<template>
	<header
		class="font-goldman text-anakiwa-300 sticky top-0 w-full bg-gray-950 py-3 font-bold uppercase"
	>
		<UContainer class="flex justify-between">
			<NuxtLink
				class="hover:text-orange-peel-500 flex items-center gap-5"
				to="/"
			>
				<NuxtImg src="/logo.png" alt="Org Logo" height="60" />
				<div class="text-lg/5">
					<p class="uppercase">Vengeance</p>
					<p class="uppercase">Experts</p>
				</div>
			</NuxtLink>
			<UNavigationMenu
				:items="links"
				class="font-goldman hidden lg:flex"
				orientation="horizontal"
				:ui="{ label: 'text-s/4' }"
			/>
			<USlideover title="Menu" close-icon="i-lucide-arrow-right">
				<UButton
					icon="i-material-symbols-menu-rounded"
					size="xl"
					variant="link"
					class="lg:hidden"
				/>
				<template #body>
					<UNavigationMenu :items="links" orientation="vertical" />
				</template>
			</USlideover>
		</UContainer>
	</header>
</template>

<script setup lang="ts">
	const links = [
		{ label: 'Equipas', to: '/teams' },
		{ label: 'Sobre', to: '/about' },
		{ label: 'Eventos', to: '/events' },
		{ label: 'Notícias', to: '/news' },
	]
	const handleError = () => {
		console.error('Image failed to load.')
	}
</script>

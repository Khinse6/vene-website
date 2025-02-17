<template>
	<header
		class="bg-venegray1 font-goldman text-veneblue sticky top-0 w-full py-3 font-bold uppercase"
	>
		<UContainer class="flex justify-between">
			<NuxtLink class="hover:text-veneorange flex items-center gap-5" to="/">
				<NuxtImg src="/img/VENE_LOGO.png" alt="Org Logo" sizes="40" />
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
					color="secondary"
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
</script>

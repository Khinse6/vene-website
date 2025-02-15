<template>
	<header
		class="bg-venegray1 font-goldman text-veneblue sticky top-0 flex h-24 w-full justify-between px-10 font-bold uppercase"
	>
		<NuxtLink
			class="hover:text-veneorange flex h-16 items-center gap-5 self-center"
			to="/"
		>
			<img class="h-full" src="/img/VENE_LOGO.png" alt="Org Logo" />
			<div class="text-xl/5">
				<p class="uppercase">Vengeance</p>
				<p class="uppercase">Experts</p>
			</div>
		</NuxtLink>

		<UButton
			:icon="
				isSidebarOpen
					? 'material-symbols:close-rounded'
					: 'material-symbols:menu-rounded'
			"
			size="xl"
			color="white"
			variant="link"
			class="absolute right-10 z-999 flex self-center lg:hidden"
			@click="isSidebarOpen = !isSidebarOpen"
		/>

		<UNavigationMenu
			:items="links"
			class="bg-venegray1 fixed top-0 right-0 flex h-screen flex-col items-end gap-10 px-10 pt-32 transition-transform duration-300 lg:hidden"
			:class="{
				'translate-x-0': isSidebarOpen,
				'translate-x-full lg:translate-x-0': !isSidebarOpen,
			}"
			orientation="vertical"
		/>
		<UNavigationMenu
			:items="links"
			class="hidden lg:flex lg:gap-16 lg:self-center"
			orientation="horizontal"
		/>
	</header>
</template>

<script setup>
	const links = ref([
		{ label: 'Equipas', to: '/teams' },
		{ label: 'Sobre', to: '/about' },
		{ label: 'Eventos', to: '/events' },
		{ label: 'Notícias', to: '/news' },
	])

	const isSidebarOpen = ref(false)
</script>

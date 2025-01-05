<template>
	<header
		class="sticky top-0 flex h-24 w-full justify-between bg-venegray1 px-10 font-goldman font-bold uppercase text-veneblue"
	>
		<NuxtLink
			class="flex h-16 items-center gap-5 self-center hover:text-veneorange"
			to="/"
		>
			<img
				class="h-full"
				src="/img/LOGO_SIMPLIFICADO_VNEE_COR.png"
				alt="Organization Logo"
			/>
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
			class="absolute right-10 z-[999] flex self-center lg:hidden"
			@click="isSidebarOpen = !isSidebarOpen"
		/>

		<nav
			class="fixed right-0 top-0 flex h-screen flex-col items-end gap-10 bg-venegray1 px-10 pt-32 transition-transform duration-300 lg:static lg:h-fit lg:flex-row lg:items-center lg:gap-16 lg:self-center lg:bg-transparent lg:p-0 lg:pt-0"
			:class="{
				'translate-x-0': isSidebarOpen,
				'translate-x-full lg:translate-x-0': !isSidebarOpen,
			}"
		>
			<NuxtLink
				v-for="link in links"
				:key="link.path"
				:to="link.path"
				class="h-fit content-center hover:text-veneorange"
				@click="isSidebarOpen = false"
			>
				{{ link.title }}
			</NuxtLink>
		</nav>
	</header>
</template>

<script setup>
	const links = ref([
		{ title: 'Equipas', path: '/teams' },
		{ title: 'Sobre', path: '/about' },
		{ title: 'Eventos', path: '/events' },
		{ title: 'Notícias', path: '/news' },
	])

	const isSidebarOpen = ref(false)
</script>

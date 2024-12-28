<template>
	<header
		class="sticky top-0 bg-venegray1 font-goldman text-veneblue uppercase"
	>
		<nav class="mx-[2%] p-3 flex font-bold justify-between items-center">
			<NuxtLink
				class="flex items-center gap-5 h-16 hover:text-veneorange"
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

			<div class="flex gap-16 h-fit">
				<NuxtLink to="/teams" class="hover:text-veneorange content-center h-fit"
					>Equipas</NuxtLink
				>
				<NuxtLink to="./about" class="hover:text-veneorange h-fit"
					>Sobre</NuxtLink
				>
				<NuxtLink to="/events" class="uppercase hover:text-veneorange h-fit"
					>Eventos</NuxtLink
				>
				<NuxtLink to="/news" class="uppercase hover:text-veneorange h-fit"
					>Notícias</NuxtLink
				>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	name: "AppHeader"
};
</script>

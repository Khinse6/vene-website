<template>
	<header
		class="sticky top-0 bg-venegray1 font-goldman text-veneblue uppercase align-middle"
	>
		<nav class="mx-[2%] p-3 flex font-bold justify-between items-center">
			<!-- Logo and brand name -->
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

			<!-- Desktop Navigation Links -->
			<div class="hidden lg:flex gap-16 h-fit">
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

			<!-- Mobile Hamburger Icon -->
			<div class="lg:hidden flex items-center">
				<button
					@click="toggleMenu"
					class="text-veneblue hover:text-veneorange h-fit"
				>
					<UIcon
						:name="
							isMenuOpen
								? 'i-material-symbols:close'
								: 'i-material-symbols:menu'
						"
						size="24"
					/>
				</button>
			</div>
		</nav>

		<!-- Mobile Navigation Links (hidden by default) -->
		<div
			v-if="isMenuOpen"
			class="lg:hidden flex flex-col items-center bg-veneblue py-4"
		>
			<NuxtLink to="/teams" class="text-white py-2 hover:text-veneorange"
				>Equipas</NuxtLink
			>
			<NuxtLink to="./about" class="text-white py-2 hover:text-veneorange"
				>Sobre</NuxtLink
			>
			<NuxtLink to="/events" class="text-white py-2 hover:text-veneorange"
				>Eventos</NuxtLink
			>
			<NuxtLink to="/news" class="text-white py-2 hover:text-veneorange"
				>Notícias</NuxtLink
			>
		</div>
	</header>
</template>

<script>
export default {
	name: "AppHeader",
	data() {
		return {
			isMenuOpen: false, // Controls mobile menu visibility
		};
	},
	methods: {
		toggleMenu() {
			this.isMenuOpen = !this.isMenuOpen; // Toggle the mobile menu
		},
	},
};
</script>

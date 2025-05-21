<script setup lang="ts">
	const Sponsors = [
		{ src: '/sponsors/saga-fuel.svg', href: 'https://sagafuel.com' },
		{ src: '/sponsors/bamboo-munch.svg', href: 'https://bamboomunch.com' },
		{ src: '/sponsors/key-drop.svg', href: 'https://key-drop.com' },
	]
</script>

<template>
	<footer class="footer-gradient font-goldman text-white">
		<UContainer class="flex justify-between py-10">
			<div class="grid w-fit grid-cols-1 gap-8 md:grid-cols-2">
				<UNavigationMenu
					v-for="(section, idx) in FooterLinks"
					:key="idx"
					:items="section"
					orientation="vertical"
					variant="link"
					color="neutral"
					:ui="{ label: 'text-lg uppercase font-bold', link: 'text-xs' }"
				/>
			</div>
			<div class="flex flex-col items-end gap-10">
				<NuxtImg
					src="/logos/svg/vertical-purple.svg"
					alt="Logo"
					class="h-40"
				/>
				<div class="flex items-center gap-5">
					<NuxtLink
						v-for="(sponsor, idx) in Sponsors"
						:key="idx"
						:to="sponsor.href"
						target="_blank"
					>
						<NuxtImg
							:src="sponsor.src"
							class="h-10"
						/>
					</NuxtLink>
				</div>
			</div>
		</UContainer>

		<UContainer
			class="grid w-full grid-cols-3 place-items-center px-6 py-4 text-xs"
		>
			<UNavigationMenu
				:items="SocialLinks"
				class="col-start-2 row-start-1 self-center"
			/>
			<p class="justify-right col-start-3 row-start-1">
				© 2024–2025 Vengeance Experts. Todos os direitos reservados.
			</p>
		</UContainer>
	</footer>
</template>

<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui'

	const sponsors = [
		{ src: '/sponsors/saga-fuel.svg', href: 'https://sagafuel.com' },
		{ src: '/sponsors/bamboo-munch.svg', href: 'https://bamboomunch.com' },
		{ src: '/sponsors/key-drop.svg', href: 'https://key-drop.com' },
	]

	const socialLinks: NavigationMenuItem[] = [
		{
			icon: 'qlementine-icons:discord-16',
			to: 'https://discord.com',
			target: '_blank',
		},
		{
			icon: 'qlementine-icons:x-16',
			to: 'https://x.com/vengeancexperts',
			target: '_blank',
		},
		{
			icon: 'qlementine-icons:instagram-16',
			to: 'https://www.instagram.com/vengeancexperts',
			target: '_blank',
		},
		{ icon: 'ri:twitch-line', to: 'https://twitch.tv', target: '_blank' },
		{
			icon: 'qlementine-icons:youtube-16',
			to: 'https://youtube.com',
			target: '_blank',
		},
	]

	const footerLinks: NavigationMenuItem[][] = [
		[
			{ label: 'Sobre', type: 'label' },
			{ label: 'Quem somos?', to: '/about' },
			{ label: 'Junta-te a nós!', to: '/form' },
			{ label: 'Eventos e Notícias', to: '/' },
			{ label: 'Brand Guidelines', to: '/brand' },
		],
		[
			{ label: 'Loja', type: 'label' },
			{ label: 'Carrinho', to: '/' },
			{ label: 'Entregas', to: '/' },
			{ label: 'Devoluções', to: '/' },
			{ label: 'Ajuda', to: '/' },
		],
	]
</script>

<template>
	<footer class="footer-gradient font-goldman text-white">
		<UContainer class="flex justify-between py-10">
			<div class="grid w-fit grid-cols-1 gap-8 md:grid-cols-2">
				<UNavigationMenu
					v-for="(section, idx) in footerLinks"
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
					src="/logos/vertical-purple.svg"
					alt="Logo"
					class="h-40"
				/>
				<div class="flex h-8 items-center gap-4">
					<NuxtLink
						v-for="(sponsor, idx) in sponsors"
						:key="idx"
						:to="sponsor.href"
						target="_blank"
					>
						<NuxtImg
							:src="sponsor.src"
							class="h-full"
						/>
					</NuxtLink>
				</div>
			</div>
		</UContainer>

		<UContainer
			class="grid w-full grid-cols-3 place-items-center px-6 py-4 text-xs"
		>
			<UNavigationMenu
				:items="socialLinks"
				class="col-start-2 row-start-1 self-center"
			/>

			<p class="justify-right col-start-3 row-start-1">
				© 2024–2025 Vengeance Experts. Todos os direitos reservados.
			</p>
		</UContainer>
	</footer>
</template>

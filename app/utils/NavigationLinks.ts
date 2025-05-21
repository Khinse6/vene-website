// Header Links

import type { NavigationMenuItem } from '@nuxt/ui'

export const HeaderLinks: NavigationMenuItem[] = [
	{ label: 'Home', to: '/' },
	{ label: 'Equipas', to: '/teams' },
	{ label: 'Sobre', to: '/about' },
	{ icon: 'qlementine-icons:log-in-16', to: '/login' },
	/* 	{ label: 'Eventos', to: '/events' },
	{ label: 'Notícias', to: '/news' },
	{ label: 'Loja', to: '/shop' }, */
]

// Footer Links

export const FooterLinks: NavigationMenuItem[][] = [
	[
		{ label: 'Sobre', type: 'label' },
		{ label: 'Quem somos?', to: '/about' },
		{ label: 'Junta-te a nós!', to: '/form' },
		{ label: 'Eventos e Notícias', to: '/' },
		{ label: 'Brand Guidelines', to: '/brand' },
	],
	/* 	[
		{ label: 'Loja', type: 'label' },
		{ label: 'Carrinho', to: '/' },
		{ label: 'Entregas', to: '/' },
		{ label: 'Devoluções', to: '/' },
		{ label: 'Ajuda', to: '/' },
	] */
]

export const SocialLinks: NavigationMenuItem[] = [
	{
		icon: 'qlementine-icons:discord-16',
		to: 'https://discord.gg/X4zpJuzu4n',
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
	/*
	{ icon: 'ri:twitch-line', to: 'https://twitch.tv', target: '_blank' },
	{
		icon: 'qlementine-icons:youtube-16',
		to: 'https://youtube.com',
		target: '_blank',
	}, */
]

/* export const Sponsors = [
	{ src: '/sponsors/saga-fuel.svg', href: 'https://sagafuel.com' },
	{ src: '/sponsors/bamboo-munch.svg', href: 'https://bamboomunch.com' },
	{ src: '/sponsors/key-drop.svg', href: 'https://key-drop.com' },
] */

import Link from 'next/link';

export default function Header() {
	return (
		<header className=" text-veneblue p-2  bg-veneblack">
			<nav className="flex text-xl space-x-4 items-center font-bold mx-[25%]">
				{/* Left Navigation */}
				<div className="flex flex-1 justify-evenly">
					<Link href="/teams" className="hover:text-veneorange uppercase">Equipas</Link>
					<Link href="/about" className="hover:text-veneorange uppercase">Sobre Nós</Link>
				</div>
				
				{/* Logo */}
				<Link href="/" >
					<img src='images/vengeance_logo_mascote.png' width="80"/>
				</Link>

				{/* Right Navigation */}
				<div className="flex flex-1 justify-evenly">
					<Link href="/events" className="hover:text-veneorange uppercase">Eventos</Link>
					<Link href="/news" className="hover:text-veneorange uppercase">Notícias</Link>
				</div>
				
				
			</nav>
		</header>
	);
}

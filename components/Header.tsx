import Link from "next/link";

export default function Header() {
	return (
		<header className='sticky top-0 bg-veneblack p-2 font-goldman text-veneblue uppercase'>
			<nav className='mx-[25%] flex items-center space-x-4 font-bold text-xl'>
				{/* Left Navigation */}
				<div className='flex flex-1 justify-evenly'>
					<Link href='/teams' className='hover:text-veneorange'>
						Equipas
					</Link>
					<Link href='/about' className='hover:text-veneorange'>
						Sobre Nós
					</Link>
				</div>

				{/* Logo */}
				<Link href='/'>
					<img
						src='images/vengeance_logo_mascote.png'
						width='80'
						alt='Organization Logo'
					/>
				</Link>

				{/* Right Navigation */}
				<div className='flex flex-1 justify-evenly'>
					<Link href='/events' className='uppercase hover:text-veneorange'>
						Eventos
					</Link>
					<Link href='/news' className='uppercase hover:text-veneorange'>
						Notícias
					</Link>
				</div>
			</nav>
		</header>
	);
}

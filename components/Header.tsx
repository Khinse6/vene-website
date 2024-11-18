import Link from 'next/link';

export default function Header() {
	return (
		<header className="bg-veneorange text-veneblue p-4">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				<h1 className="text-2xl font-bold">
					<Link href="/">My Website</Link>
				</h1>
				<nav className="flex space-x-4">
					<Link href="/" className="hover:text-gray-200">Home</Link>
					<Link href="/about" className="hover:text-gray-200">About</Link>
					<Link href="/articles" className="hover:text-gray-200">Articles</Link>
				</nav>
			</div>
		</header>
	);
}

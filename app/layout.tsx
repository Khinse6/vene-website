import Header from "@/components/Header";
import type { Metadata } from "next";
// import Footer from '../components/Footer';
import localFont from "next/font/local";
import "@/app/globals.css";

export const metadata: Metadata = {
	title: "Vengeance Experts",
	description: "An E-sports Organization"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='antialiased'>
				<Header />
				{children}
			</body>
		</html>
	);
}

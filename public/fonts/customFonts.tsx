import localFont from "next/font/local";

const goldman = localFont({
	src: [
		{ path: "/fonts/Goldman-Regular.woff2", weight: "400" },
		{ path: "/fonts/Goldman-Bold.woff2", weight: "700" }
	],
	variable: "--font-goldman"
});

const geistSans = localFont({
	src: "/fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900"
});
const geistMono = localFont({
	src: "/fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900"
});

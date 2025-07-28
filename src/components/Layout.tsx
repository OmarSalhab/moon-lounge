import { Playfair_Display, Inter } from "next/font/google";
import { ReactNode } from "react";
import Navigation from "./Navigation";

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div
			className={`${playfair.variable} ${inter.variable} font-sans `}
		>
			{/* Header / Navbar */}
			<Navigation />

			{/* Page Content */}
			<main className="p-1 flex md:block">{children}</main>
		</div>
	);
}

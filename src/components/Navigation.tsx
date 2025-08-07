import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed top-0 w-full bg-transparent backdrop-blur-sm z-50 pt-4">
			<div className="max-w-6xl mx-auto px-12 sm:px-16 lg:px-20">
				<div className="flex justify-between items-center  h-16 sm:h-20 ">
					{/* Logo */}
					<Link
						href="/"
						className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
					>
						<Image
							src="/downloadfile.png"
							alt="Moon Lounge Logo"
							width={150}
							height={85}
							quality={100}
						/>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						<Link
							href="/"
							className="text-white hover:text-blue-400 transition-colors font-medium"
						>
							Home
						</Link>
						<Link
							href="/menu"
							className="text-white hover:text-blue-400 transition-colors font-medium"
						>
							Menu
						</Link>
					</div>

					{/* Mobile menu button */}
					<button
						aria-label="Menu-btn"
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden text-white transition-colors"
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="md:hidden bg-black/95 absolute top-20 left-0 right-0 border-b border-blue-500/20 ">
						<div className="px-4 py-4 space-y-4">
							<Link
								href="/"
								className="block text-white focus:text-blue-400 transition-colors font-medium"
								onClick={() => setIsOpen(false)}
							>
								Home
							</Link>
							<Link
								href="/menu"
								className="block text-white focus:text-blue-400 transition-colors font-medium"
								onClick={() => setIsOpen(false)}
							>
								Menu
							</Link>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

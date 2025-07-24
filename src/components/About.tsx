import Image from "next/image";

export default function About() {
	return (
		<section id="about" className="py-20 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
						Who We Are
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
						Moon Lounge Toronto offers a luxurious shisha experience in a cozy,
						upscale setting. Our Scarborough lounge is known for attentive,
						friendly service and a wide selection of smooth, flavorful hookah
						options.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<h3 className="text-2xl font-serif font-semibold text-white mb-4">
							Our Story
						</h3>
						<p className="text-gray-300 leading-relaxed font-light">
							Guests rave about our inviting atmosphere, where you can relax
							with friends or celebrate a special night out. Whether you prefer
							classic blends or exotic new flavors, our expert staff are
							always on hand to craft the perfect hookah mix for you.
						</p>
						<p className="text-gray-300 leading-relaxed font-light">
							We&apos;ve created a space where premium quality meets comfort,
							offering an unparalleled hookah experience in the heart of
							Toronto&apos;s diverse Scarborough community.
						</p>
						<div className="pt-4">
							<a
								href="https://www.instagram.com/moonloungetoronto"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white hover:text-gray-300 font-semibold transition-colors"
							>
								Follow us @moonloungetoronto →
							</a>
						</div>
					</div>

					<div className="relative">
						<div className="bg-white/10 rounded-2xl p-1 animate-float">
							<Image
								src="/moon-lounge-about.jpg"
								alt="Moon Lounge Toronto luxury hookah lounge interior with premium shisha setup"
								className="w-full h-96 object-fill rounded-2xl"
								loading="lazy"
								width="600"
								height="400"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

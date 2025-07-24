import { Star, Quote } from "lucide-react";

const reviews = [
	{
		name: "Prachi Shailendra",
		rating: 5,
		text: "My favourite shisha spot in Toronto. The service here is absolutely the best in the whole city. They are attentive, make great recommendations and always greet you with the best smiles!",
		date: "3 months ago",
	},
	{
		name: "Amman Khan",
		rating: 5,
		text: `The atmosphere is very unique and the people here are very lovely, especially my friend Omar and Hasan.
The hookah here is really the best i have ever had, and beleive me you’ll never get this quality of hookah anywhere in Toronto.`,
		date: "2 weeks ago",
	},
	{
		name: "Sean G.",
		rating: 5,
		text: "Moon lounge definitely is best shisha lounge with German shisha!! The customer service is amazing! All staff are friendly and check on you including checking on to change the coal.  They have flavour choices for everyone.  Clean and good spot for date night.  True lounge feeling.",
		date: "2 years ago",
	},
	{
		name: "Mariafe Calica",
		rating: 5,
		text: "Such a great environment and the staff are so helpful and friendly! The flavours are great and the shisha is made really well. Highly recommend this location.",
		date: "11 months ago",
	},
];

export default function Reviews() {
	return (
		<section className="py-20 px-4 bg-black/30">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
						What Our Guests Say
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
						Don&apos;t just take our word for it - hear from our satisfied
						customers who keep coming back for more.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{reviews.map((review, index) => (
						<div
							key={index}
							className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
						>
							<div className="flex items-center mb-4">
								<Quote className="text-white mr-2" size={20} />
								<div className="flex">
									{[...Array(review.rating)].map((_, i) => (
										<Star
											key={i}
											size={16}
											className="text-yellow-700 fill-current"
										/>
									))}
								</div>
							</div>

							<p className="text-gray-300 text-sm leading-relaxed mb-4 font-light">
								{review.text}
							</p>

							<div className="border-t border-gray-700 pt-4">
								<p className="text-white font-semibold text-sm">
									{review.name}
								</p>
								<p className="text-gray-400 text-xs">{review.date}</p>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<a
						href="https://www.google.com/maps/place/Moon+lounge/@43.7430484,-79.3041906,620m/data=!3m1!1e3!4m6!3m5!1s0x89d4cdc9a5532141:0x955f911ea49ffd20!8m2!3d43.7429837!4d-79.3041013!16s%2Fg%2F11t7d52f5p?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
						target="_blank"
						rel="noopener noreferrer"
						className="brand-color hover:bg-[#2b347b]/80 text-white px-8 py-3 border border-white font-semibold transition-colors inline-block"
					>
						Read More Reviews on Google
					</a>
				</div>
			</div>
		</section>
	);
}

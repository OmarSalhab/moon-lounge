import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function Location() {
	return (
		<section className="py-20 px-4" id="location">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
						Visit Us
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
						Located in the heart of Scarborough, we&apos;re easily accessible
						and open late for your evening enjoyment.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12" >
					{/* Contact Information */}
					<div className="space-y-8">
						<div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
							<h3 className="text-2xl font-serif font-semibold text-white mb-6">
								Contact Information
							</h3>

							<div className="space-y-6" >
								<div className="flex items-start space-x-4">
									<MapPin className="text-white mt-1 flex-shrink-0" size={24} />
									<div>
										<p className="text-white font-semibold">Address</p>
										<p className="text-gray-300 font-light">
											1811 Lawrence Ave E, Scarborough, ON M1R 2Y3
										</p>
										<p className="text-gray-400 text-sm">
											Corner of Lawrence and Pharmacy
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<Phone className="text-white mt-1 flex-shrink-0" size={24} />
									<div>
										<p className="text-white font-semibold">Phone</p>
										<a
											href="tel:+16478099552"
											className="text-gray-300 hover:text-white transition-colors"
										>
											+1 647-809-9552
										</a>
										
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<Mail className="text-white mt-1 flex-shrink-0" size={24} />
									<div>
										<p className="text-white font-semibold">Email</p>
										<a
											href="mailto:Moonloungetoronto@gmail.com"
											className="text-gray-300 hover:text-white transition-colors"
										>
											Moonloungetoronto@gmail.com
										</a>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<Clock className="text-white mt-1 flex-shrink-0" size={24} />
									<div>
										<p className="text-white font-semibold">Hours</p>
										<div className="text-gray-300 space-y-1 font-light">
											<p>Wed–Thu: 3pm–2am</p>
											<p>Fri–Sat: 5pm–3am</p>
											<p>Sun–Tue: 3pm–2am</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-white/5 rounded-2xl p-6 border border-white/20">
							<h3 className="text-xl font-serif font-semibold text-white mb-3">
								Private Events & Group Reservations
							</h3>
							<p className="text-gray-300 text-sm leading-relaxed font-light">
								Planning a party or special event? We welcome private
								gatherings, birthdays, corporate outings, or any occasion where
								you want a unique venue. Contact us to discuss group rates and
								VIP arrangements.
							</p>
						</div>
					</div>

					{/* Google Maps */}
					<div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
						<iframe
							title="Moon Lounge Toronto Location Map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.5555259577847!2d-79.30419063452345!3d43.74298437912158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cdc9a5532141%3A0x955f911ea49ffd20!2sMoon%20lounge!5e0!3m2!1sen!2sca!4v1642095552000!5m2!1sen!2sca"
							width="100%"
							height="400"
							style={{ border: 0, borderRadius: "12px" }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="w-full h-96"
						></iframe>
					</div>
				</div>
			</div>
		</section>
	);
}

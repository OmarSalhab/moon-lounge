import {
	About,
	Contact,
	Features,
	Hero,
	Location,
	Reviews,
} from "@/components";
import Head from "next/head";

// Static generation - this page will be pre-rendered at build time
export async function generateStaticParams() {
	return [];
}

export default function Home() {
	return (
		<>
			<Head>
				<title>
					Moon Lounge Toronto | Hookah Flavors, Drinks & Refreshments
				</title>
				<meta
					name="description"
					content="Explore our premium hookah menu featuring exotic shisha flavors, refreshing drinks, Turkish coffee, and mocktails. View our complete selection at Moon Lounge Toronto."
				/>
				<link rel="icon" href="/favicon.jpg" />
				<meta
					name="keywords"
					content="hookah menu Toronto, shisha flavors, hookah drinks, Turkish coffee, mocktails, Moon Lounge menu, premium hookah "
				/>
				<link rel="canonical" href="https://moonloungeto.ca" />

				{/* Open Graph (for Facebook, LinkedIn, etc.) */}
				<meta
					property="og:title"
					content="Moon Lounge Toronto | Hookah Flavors & Drinks"
				/>
				<meta
					property="og:description"
					content="Explore our premium hookah menu featuring exotic shisha flavors, refreshing drinks, and more."
				/>
				<meta property="og:url" content="https://moonloungeto.ca" />
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjpz_AJmsCOznS6xeyU1wlAtQPTyyUa4BPcRJUhhrFJZUfIu87PSJUm74zAxDk5ug0zs"
				/>
				{/* Optional: for good measure */}
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="UTF-8" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Menu - Moon Lounge Toronto | Hookah Flavors & Drinks"
				/>
				<meta
					name="twitter:description"
					content="Explore our premium hookah menu featuring exotic shisha flavors, refreshing drinks, and more."
				/>
				<meta
					name="twitter:image"
					content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjpz_AJmsCOznS6xeyU1wlAtQPTyyUa4BPcRJUhhrFJZUfIu87PSJUm74zAxDk5ug0zs"
				/>
			</Head>

			<div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
				<Hero />
				<About />
				<Features />
				<Location />
				<Reviews />
				<Contact />
			</div>
		</>
	);
}

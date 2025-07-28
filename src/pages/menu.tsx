import { useState } from "react";
import { Plus, Star, Flame, Snowflake, Coffee, Beer } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Head from "next/head";

type Addon = {
	id: string;
	name: string;
	price: number;
};

type MenuItem = {
	id: number;
	category: "shisha" | "cBeverages" | "hBeverages";
	name: string;
	price: number;
	description: string;
	image: string;
	flavours?: string[];
	bestSeller?: boolean;
	drinkType?: "cold" | "hot";
};

type Flavour = {
	name: string;
	description?: string;
};

type FlavourGroup = {
	category: string;
	items: Flavour[];
};

const menuCategories = [
	{ id: "all", name: "All Menu" },
	{ id: "shisha", name: "Shisha" },
	{ id: "cBeverages", name: "Cold Beverages" },
	{ id: "hBeverages", name: "Hot Beverages" },
];

const addons: Addon[] = [
	{ id: "ice-hose", name: "Ice Hose", price: 3 },
	{ id: "extra-head", name: "Extra Head (Re-fill)", price: 10 },
	{ id: "led-lights", name: "Led Lights", price: 10 },
];

// Menu data structure with bestSeller property
const menuItems: MenuItem[] = [
	{
		id: 1,
		category: "shisha",
		name: "Aeon Hookah",
		price: 34.99,
		description:
			"Indulge in a silky-smooth session with our premium German Aeon Hookah. Perfect for relaxing nights and sharing great moments.",
		image: "/AEON-hookah.png",
		flavours: ["Mint", "Double Apple", "Grape", "Lemon"],
		bestSeller: true,
	},
	{
		id: 2,
		category: "shisha",
		name: "Amotion Valve Hookah",
		price: 34.99,
		description:
			"Discover effortless clouds and perfect airflow with the Amotion Valve. A must-try for those who crave a flawless shisha experience.",
		image: "/amotion-valve-hookah.png",
		flavours: ["Mint", "Double Apple", "Grape", "Lemon"],
		bestSeller: false,
	},
	{
		id: 3,
		category: "shisha",
		name: "Vyro Versa Hookah",
		price: 29.99,
		description:
			"Experience next-level flavor and effortless draws with the Vyro Versa. Customizable and cool—ideal for those who love a modern twist.",
		image: "/AeonVyroVersa-hookah.png",
		flavours: ["Mint", "Double Apple", "Grape", "Lemon"],
		bestSeller: false,
	},
	{
		id: 4,
		category: "shisha",
		name: "Aladin MVP Hookah",
		price: 29.99,
		description:
			"Enjoy a rich, full-bodied smoke with the Aladin MVP. Its stylish design and smooth performance make every puff a pleasure.",
		image: "/aladin-MVP360-hookah.png",
		flavours: ["Mint", "Double Apple", "Grape", "Lemon"],
		bestSeller: false,
	},
	{
		id: 5,
		category: "shisha",
		name: "Alpha Hookah",
		price: 29.99,
		description:
			"Treat yourself to a luxurious session with the Alpha Hookah. Known for its ultra-smooth draw and unique purge, it’s a favorite for a reason.",
		image: "/alpha-hookah.png",
		flavours: ["Mint", "Double Apple", "Grape", "Lemon"],
		bestSeller: false,
	},
	{
		id: 6,
		category: "shisha",
		name: "Khalil Mamon Hookah",
		price: 24.99,
		description:
			"Savor tradition with the Khalil Mamon—handcrafted for deep, authentic flavor and a classic lounge vibe. A timeless favorite.",
		image: "/khalil-mamon-hookah.png",
		flavours: ["Mint", "Double Apple", "Grape", "Lemon"],
		bestSeller: false,
	},
	{
		id: 7,
		category: "shisha",
		name: "Moon Special Hookah",
		price: 49.99,
		description:
			"Elevate your night with our exclusive Moon Special. (Premium hookah, Pineapple head, ice hose, LED lights), and a session you’ll remember.",
		image: "/moon_speacial.jpg",
		flavours: ["Mint", "Double Apple", "Grape", "Lemon"],
		bestSeller: false,
	},
	// Cold Beverages
	{
		id: 8,
		category: "cBeverages",
		drinkType: "cold",
		name: "Blue Redbull Summer Edition",
		price: 9.0,
		description:
			"Limited summer edition with refreshing blueberry flavor. A fruity twist on the classic energy drink.",
		image: "/blue-redbull.jpg",
		bestSeller: false,
	},
	{
		id: 9,
		category: "cBeverages",
		drinkType: "cold",
		name: "Ice Vanilla Latte",
		price: 12.0,
		description:
			"Smooth espresso blended with creamy milk and a hint of vanilla, served over ice for a refreshing, sweet pick-me-up.",
		image: "/Iced-Vanilla-Latte-1.jpeg",
		bestSeller: false,
	},
	{
		id: 10,
		category: "cBeverages",
		drinkType: "cold",
		name: "Mango Juice",
		price: 10.0,
		description:
			"Fresh, pure mango juice bursting with tropical sweetness. Made from the finest mangoes.",
		image: "/mango-juice-preservative.jpg",
		bestSeller: false,
	},
	{
		id: 11,
		category: "cBeverages",
		drinkType: "cold",
		name: "Fresh Mixed Berries Juice",
		price: 13.0,
		description:
			"Blend of fresh strawberries, blueberries, and raspberries. Packed with vitamins and natural sweetness.",
		image: "/mixed-berry-julius-5.jpg",
		bestSeller: false,
	},
	{
		id: 12,
		category: "cBeverages",
		drinkType: "cold",
		name: "Regular Mojito",
		price: 14.0,
		description:
			"Classic refreshing mojito with fresh mint, lime, and sparkling water. Non-alcoholic and invigorating.",
		image: "/mojito.jpg",
		bestSeller: false,
	},
	{
		id: 13,
		category: "cBeverages",
		drinkType: "cold",
		name: "Blue Mojito Summer Edition",
		price: 14.0,
		description:
			"A zesty twist on the classic! Fresh mint, tangy lime, and juicy blueberries come together with a splash of soda for the ultimate summer refreshment.",
		image: "/blue_mojito.jpg",
		bestSeller: false,
	},
	{
		id: 14,
		category: "cBeverages",
		drinkType: "cold",
		name: "Pomegranate Mojito Summer Edition",
		price: 16.0,
		description:
			"Summer special mojito infused with antioxidant-rich pomegranate. A healthy and refreshing choice.",
		image: "/pomegrante-mojito.jpg",
		bestSeller: false,
	},

	// Barbican section
	{
		id: 15,
		category: "cBeverages",
		drinkType: "cold",
		name: "Barbican",
		price: 8.0,
		description:
			"Non-alcoholic malt beverage with a rich, refreshing taste. Perfect complement to your hookah session.",
		image: "/barbican_classic.jpg",
		bestSeller: false,
	},
	//Cans beverages
	{
		id: 16,
		category: "cBeverages",
		drinkType: "cold",
		name: "Redbull",
		price: 8,
		description:
			"Classic energy drink to boost your energy and keep you refreshed throughout your visit.",
		image: "/redbull.jpg",
		bestSeller: false,
	},

	{
		id: 17,
		category: "cBeverages",
		drinkType: "cold",
		name: "Nestea",
		price: 5.0,
		description:
			"Classic iced tea with a refreshing lemon flavor. Light and thirst-quenching.",
		image: "/nesta-lemon.jpg",
		bestSeller: false,
	},
	{
		id: 18,
		category: "cBeverages",
		drinkType: "cold",
		name: "Coca Cola",
		price: 5.0,
		description:
			"The classic cola experience. Crisp, refreshing, and the perfect companion to any meal.",
		image: "/cocacola.jpg",
		bestSeller: false,
	},
	{
		id: 19,
		category: "cBeverages",
		drinkType: "cold",
		name: "Diet Coke",
		price: 5.0,
		description:
			"All the taste of Coca-Cola with zero calories. Light and refreshing without compromise.",
		image: "/Diet-Coke.png",
		bestSeller: false,
	},
	{
		id: 20,
		category: "cBeverages",
		drinkType: "cold",
		name: "Orange Crush",
		price: 5.0,
		description:
			"Vibrant orange soda with a burst of citrus flavor. Sweet, tangy, and refreshing.",
		image: "/orange_crush.jpg",
		bestSeller: false,
	},
	{
		id: 21,
		category: "cBeverages",
		drinkType: "cold",
		name: "Sprite",
		price: 5.0,
		description:
			"Clear, caffeine-free lemon-lime soda. Crisp and clean with a refreshing citrus taste.",
		image: "/sprite.jpg",
		bestSeller: false,
	},
	{
		id: 22,
		category: "cBeverages",
		drinkType: "cold",
		name: "Canada Dry",
		price: 5.0,
		description:
			"Crisp and refreshing ginger ale with a smooth, bubbly finish — a classic thirst-quencher.",
		image: "/canda-dry.jpg",
		bestSeller: false,
	},
	{
		id: 23,
		category: "cBeverages",
		drinkType: "cold",
		name: "Water",
		price: 3.0,
		description:
			"Pure, refreshing bottled water. Essential hydration for your comfort and well-being.",
		image: "/water.png",
		bestSeller: false,
	},

	// Hot Drinks
	{
		id: 24,
		category: "hBeverages",
		drinkType: "hot",
		name: "Espresso",
		price: 8.0,
		description:
			"Rich, bold espresso shot made from premium coffee beans. Perfect for coffee purists.",
		image: "/expresso.jpg",
		bestSeller: false,
	},
	{
		id: 25,
		category: "hBeverages",
		drinkType: "hot",
		name: "Cappuccino",
		price: 10.0,
		description:
			"Classic Italian cappuccino with perfectly steamed milk foam. Smooth and creamy coffee experience.",
		image: "/cappuccino.jpg",
		bestSeller: false,
	},
	{
		id: 26,
		category: "hBeverages",
		drinkType: "hot",
		name: "Turkish Coffee",
		price: 8.0,
		description:
			"Rich, bold, and aromatic — a traditional brew served unfiltered for a deep and authentic flavor. Best enjoyed slowly.",
		image: "/turkish_coffee.jpg",
		bestSeller: false,
	},
	{
		id: 27,
		category: "hBeverages",
		drinkType: "hot",
		name: "Nescafé 3 in 1",
		price: 7.0,
		description:
			"Instant coffee made with premium Nescafe blend. Quick, convenient, and satisfying.",
		image: "/Coffee.jpg",
		bestSeller: false,
	},
	{
		id: 28,
		category: "hBeverages",
		drinkType: "hot",
		name: "Black Tea",
		price: 6.0,
		description:
			"Traditional black tea brewed to perfection. Rich, aromatic, and comforting.",
		image: "/Black-Tea.jpg",
		bestSeller: false,
	},
	{
		id: 29,
		category: "hBeverages",
		drinkType: "hot",
		name: "Green Tea",
		price: 6.0,
		description:
			"Antioxidant-rich green tea with a delicate, refreshing flavor. Healthy and soothing.",
		image: "/Green-tea.jpg",
		bestSeller: false,
	},
	{
		id: 30,
		category: "hBeverages",
		drinkType: "hot",
		name: "Peppermint Tea",
		price: 7.0,
		description:
			"Soothing peppermint tea with natural mint leaves. Refreshing and aids digestion.",
		image: "/peppermint-tea.jpg",
		bestSeller: false,
	},
	{
		id: 31,
		category: "hBeverages",
		drinkType: "hot",
		name: "Teapot (Serves 4)",
		price: 7.0,
		description: `Choose your favorite tea:
	Black Tea, 
	Green Tea, 
		Peppermint Tea`,
		image: "/teapot.jpg",
		bestSeller: false,
	},
];

const flavours: FlavourGroup[] = [
	{
		category: `🌿 Classic Flavours`,
		items: [
			{ name: "Double Apple" },
			{ name: "Gum Mint" },
			{ name: "Orange Mint" },
			{ name: "Orange Cream" },
			{ name: "Lemon Mint" },
			{ name: "Blueberry Mint" },
			{ name: " Watermelon Mint" },
			{ name: "Grape Mint" },
			{ name: "Mint" },
			{ name: "Kiwi" },
		],
	},
	{
		category: "🍁 Special Flavours",
		items: [
			{ name: "Pan" },
			{ name: "Chief Commissioner" },
			{
				name: "Skyfall",
				description: "Juicy watermelon, sweet peach, and menthol",
			},
			{
				name: "Blue Melon",
				description: "Fresh melon, tart blueberry, and cool menthol",
			},
			{
				name: "Love 66",
				description: "Passion fruit, honeydew melon, watermelon, and mint",
			},
			{ name: "Hawaii", description: "Mango, pineapple, and menthol" },
			{
				name: "Lady Killer",
				description: "Honeydew melon, mango, berries, and mint",
			},
			{
				name: "Blue Dragon",
				description:
					"Passion fruit, ripe and juicy melon, a delicate note of rose",
			},
		],
	},
	{
		category: "💡 Lit Series",
		items: [
			{ name: "Lime Lit" },
			{ name: "Blue Lit" },
			{ name: "Peach Lit" },
			{ name: "Watermelon Lit" },
		],
	},
	{
		category: "✨ Premium Flavours",
		items: [
			{ name: "Go Green" },
			{ name: "Phenomenal" },
			{ name: "Berry Lychee Blast" },
			{ name: "Ice Lemon Mint" },
			{ name: "Pinkman" },
			{ name: "Kiwi Smoothie" },
			{ name: "Tropic Juice" },
			{ name: "Lemon Lime" },
			{ name: "Orange Team" },
			{ name: "Cola" },
			{ name: "Citrus God" },
			{ name: "Super Mint Ultra Nova (Ice)" },
		],
	},
];

export default function Menu() {
	const [selectedCategory, setSelectedCategory] = useState("all");

	const filteredItems =
		selectedCategory === "all"
			? menuItems
			: menuItems.filter((item) => item.category === selectedCategory);

	// Separate drinks into cold and hot when drinks category is selected
	const coldDrinks = filteredItems.filter(
		(item) => item.category === "cBeverages" && item.drinkType === "cold"
	);
	const hotDrinks = filteredItems.filter(
		(item) => item.category === "hBeverages" && item.drinkType === "hot"
	);
	const nonDrinkItems = filteredItems.filter(
		(item) => item.category !== "cBeverages" && item.category !== "hBeverages"
	);

	return (
		<>
			<Head>
				<title>Menu - Moon Lounge Toronto | Hookah Flavors & Drinks</title>
				<meta
					name="description"
					content="Browse our full hookah and drinks menu at Moon Lounge Toronto. Choose from premium shisha flavors, refreshing drinks, and more."
				/>
				<link rel="canonical" href="https://moonloungeto.ca/menu" />
				<meta
					property="og:title"
					content="Menu - Moon Lounge Toronto | Hookah Flavors & Drinks"
				/>
				<meta
					property="og:description"
					content="Browse our full hookah and drinks menu at Moon Lounge Toronto. Choose from premium shisha flavors, refreshing drinks, and more."
				/>
				<meta property="og:url" content="https://moonloungeto.ca/menu" />
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjpz_AJmsCOznS6xeyU1wlAtQPTyyUa4BPcRJUhhrFJZUfIu87PSJUm74zAxDk5ug0zs"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Menu - Moon Lounge Toronto | Hookah Flavors & Drinks"
				/>
				<meta
					name="twitter:description"
					content="Browse our full hookah and drinks menu at Moon Lounge Toronto. Choose from premium shisha flavors, refreshing drinks, and more."
				/>
				<meta
					name="twitter:image"
					content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjpz_AJmsCOznS6xeyU1wlAtQPTyyUa4BPcRJUhhrFJZUfIu87PSJUm74zAxDk5ug0zs"
				/>
				<link rel="icon" href="/favicon.jpg" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="UTF-8" />
			</Head>

			<main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-28">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					{/* Header */}
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
							Our Menu
						</h1>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
							Discover our premium selection of hookahs, beverages, and
							refreshments
						</p>
					</div>

					{/* Category Filter */}
					<div className="flex justify-center mb-8">
						<div className="flex flex-wrap gap-2 justify-center">
							{menuCategories.map((category) => (
								<Button
									key={category.id}
									variant={
										selectedCategory === category.id ? "default" : "outline"
									}
									onClick={() => setSelectedCategory(category.id)}
									className={`transition-all duration-300 ${
										selectedCategory === category.id
											? "bg-[#2b347b] text-white border-[#2b347b] hover:bg-[#2b347b]/90"
											: "bg-transparent text-white border-white hover:bg-white hover:text-red-700"
									}`}
								>
									{category.name}
								</Button>
							))}
						</div>
					</div>

					{/* Menu Items */}
					{filteredItems.length > 0 ? (
						<div className="space-y-16">
							{/* Non-drink items (Shisha, etc.) */}
							{nonDrinkItems.length > 0 && (
								<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
									{nonDrinkItems.map((item) => (
										<MenuCard key={item.id} item={item} />
									))}
								</div>
							)}

							{/* Cold Drinks Section */}
							{selectedCategory === "cBeverages" && coldDrinks.length > 0 && (
								<div>
									<div className="text-center mb-8">
										<div className="flex items-center justify-center gap-3 mb-4">
											<Snowflake className="w-8 h-8 text-blue-400" />
											<h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
												Cold Drinks
											</h2>
											<Snowflake className="w-8 h-8 text-blue-400" />
										</div>
										<p className="text-lg text-gray-300">
											Refreshing beverages and mixes to cool you down
										</p>
									</div>
									<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
										{coldDrinks.map((item) => (
											<MenuCard key={item.id} item={item} />
										))}
									</div>
								</div>
							)}

							{/* Hot Drinks Section */}
							{selectedCategory === "hBeverages" && hotDrinks.length > 0 && (
								<div>
									<div className="text-center mb-8">
										<div className="flex items-center justify-center gap-3 mb-4">
											<Coffee className="w-8 h-8 text-orange-400" />
											<h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
												Hot Drinks
											</h2>
											<Coffee className="w-8 h-8 text-orange-400" />
										</div>
										<p className="text-lg text-gray-300">
											Warm beverages to comfort and energize
										</p>
									</div>
									<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
										{hotDrinks.map(
											(item) =>
												item.id < 28 && <MenuCard key={item.id} item={item} />
										)}
									</div>
								</div>
							)}

							{/* Tea Section */}
							{selectedCategory === "hBeverages" && hotDrinks.length > 0 && (
								<div>
									<div className="text-center mb-8">
										<div className="flex items-center justify-center gap-3 mb-4">
											<Coffee className="w-8 h-8 text-orange-400" />
											<h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
												Tea Section
											</h2>
											<Coffee className="w-8 h-8 text-orange-400" />
										</div>
										<p className="text-lg text-gray-300">
											Warm, calming brews to soothe the soul and lift the
											spirit.
										</p>
									</div>
									<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
										{hotDrinks.map(
											(item) =>
												item.id >= 28 && <MenuCard key={item.id} item={item} />
										)}
									</div>
								</div>
							)}

							{/* Show all drinks together when "all" is selected */}
							{selectedCategory === "all" &&
								(coldDrinks.length > 0 || hotDrinks.length > 0) && (
									<>
										{/* Cold Drinks */}
										{coldDrinks.length > 0 && (
											<>
												<div>
													<div className="text-center mb-8">
														<div className="flex items-center justify-center gap-3 mb-4">
															<Snowflake className="w-8 h-8 text-blue-400" />
															<h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
																Cold Drinks
															</h2>
															<Snowflake className="w-8 h-8 text-blue-400" />
														</div>
														<p className="text-lg text-gray-300">
															Refreshing beverages and mixes to cool you down
														</p>
													</div>
													<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
														{coldDrinks.map((item) => (
															item.id < 24 && <MenuCard key={item.id} item={item} />
														))}
													</div>
												</div>
											</>
										)}

										{/* Hot Drinks */}
										{hotDrinks.length > 0 && (
											<>
												<div>
													<div className="text-center mb-8">
														<div className="flex items-center justify-center gap-3 mb-4">
															<Coffee className="w-8 h-8 text-orange-300" />
															<h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
																Hot Drinks
															</h2>
															<Coffee className="w-8 h-8 text-orange-300" />
														</div>
														<p className="text-lg text-gray-300">
															Warm beverages to comfort and energize
														</p>
													</div>
													<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
														{hotDrinks.map(
															(item) =>
																item.id < 28 && (
																	<MenuCard key={item.id} item={item} />
																)
														)}
													</div>
												</div>

												<div>
													<div className="text-center mb-8">
														<div className="flex items-center justify-center gap-3 mb-4">
															<Coffee className="w-8 h-8 text-orange-700" />
															<h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
																Tea Section
															</h2>
															<Coffee className="w-8 h-8 text-orange-700" />
														</div>
														<p className="text-lg text-gray-300">
															Warm, calming brews to soothe the soul and lift
															the spirit.
														</p>
													</div>
													<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
														{hotDrinks.map(
															(item) =>
																item.id >= 28 && (
																	<MenuCard key={item.id} item={item} />
																)
														)}
													</div>
												</div>
											</>
										)}
									</>
								)}
						</div>
					) : (
						<div className="text-center py-12">
							<p className="text-gray-400 text-lg">
								No items found in this category
							</p>
						</div>
					)}
				</div>
			</main>
		</>
	);
}

const MenuCard = ({ item }: { item: MenuItem }) => {
	const [showDetails, setShowDetails] = useState(false);

	return (
		<Card className="relative w-full max-w-sm mx-auto overflow-hidden bg-gray-50 text-gray-950 border border-white/20 hover:shadow-xl transition-all duration-300">
			{/* Best Seller Badge */}
			{item.bestSeller && (
				<div className="absolute top-2 left-2 z-10">
					<Badge className="bg-red-600 text-white transform shadow-lg animate-pulse">
						<Star className="w-3 h-3 mr-1 fill-current" />
						Best Seller
					</Badge>
				</div>
			)}

			{/* Drink Type Badge */}
			{item.drinkType && (
				<div className="absolute top-3 right-3 z-10">
					<Badge
						className={`${
							item.drinkType === "cold"
								? "bg-blue-500 text-white"
								: "bg-orange-500 text-white"
						} shadow-lg`}
					>
						{item.drinkType === "cold" ? (
							<Snowflake className="w-3 h-3 mr-1" />
						) : (
							<Coffee className="w-3 h-3 mr-1" />
						)}
						{item.drinkType === "cold" ? "Cold" : "Hot"}
					</Badge>
				</div>
			)}

			{/* Image - Made taller */}
			<div className="relative h-80 overflow-hidden bg-gray-200">
				<Image
					src={item.image || "/placeholder.svg"}
					alt={item.name}
					fill
					className="object-fill transition-transform duration-300 hover:scale-104 focus:scale-104"
					loading="lazy"
				/>
			</div>

			<CardContent className="p-3 ">
				<div className="flex justify-between items-start mb-3">
					{item.name === "Barbican" ? (
						<h3 className="text-lg font-mono font-semibold text-gray-900">
							{item.name}{" "}
							<span className="text-sm text-gray-700 ml-1">
								( we have several flavors )
							</span>
						</h3>
					) : (
						<h3 className="text-lg font-mono font-semibold text-gray-900">
							{item.name}
						</h3>
					)}

					{item.category === "shisha" ? (
						<span className="font-semibold text-xl font-serif text-[#2b347b]">
							$ {item.price.toFixed(2)}
						</span>
					) : (
						<></>
					)}
				</div>

				<p className="text-gray-600 text-[12.5px] font-extrabold font-serif sm:text-sm leading-relaxed mb-4 line-clamp-3">
					{item.description}
				</p>

				{(item.category === "shisha" || item.name === "Barbican") && (
					<Button
						onClick={() => setShowDetails(!showDetails)}
						className="w-full font-light font-mono bg-[#2b347b] hover:bg-[#2b347b]/90 text-white transition-all duration-300"
					>
						<Flame className="w-4 h-4 mr-2" />
						Show Flavours
					</Button>
				)}
			</CardContent>

			{/* Detailed View Overlay - Only for Shisha */}
			{showDetails && item.category === "shisha" && (
				<div className="absolute  inset-0 bg-[#1c2254] z-20 flex flex-col p-3 animate-in slide-in-from-bottom duration-300 hide-scrollbar overflow-y-auto">
					<Button
						variant="ghost"
						size="sm"
						className="self-end mb-2 text-white hover:text-[#2b347b] hover:bg-white/90 rounded-full w-8 h-8 p-0"
						onClick={() => setShowDetails(false)}
					>
						✕
					</Button>
					<DetailedView item={item} />
				</div>
			)}
			{/* Detailed View Overlay - Only for Barbican */}
			{showDetails && item.name === "Barbican" && (
				<div className="absolute  inset-0 bg-[#1c2254] z-20 flex flex-col p-3 animate-in slide-in-from-bottom duration-300 hide-scrollbar overflow-y-auto">
					<Button
						variant="ghost"
						size="sm"
						className="self-end mb-2 text-white hover:text-[#2b347b] hover:bg-white/90 rounded-full w-8 h-8 p-0"
						onClick={() => setShowDetails(false)}
					>
						✕
					</Button>
					<DetailViewBarbican item={item} />
				</div>
			)}
		</Card>
	);
};

const DetailViewBarbican = ({ item }: { item: MenuItem }) => {
	const barbicanFlavours: string[] = [
		"Barbican Pineapple",
		"Barbican Pomegranate",
		"Barbican Peach",
		"Barbican Apple",
		"Barbican Strawberry",
		"Barbican Raspberry",
	];
	return (
		<div className="text-white  space-y-4  max-h-[86%] overflow-y-auto hide-scrollbar">
			{/* Available Flavours Section */}
			<div>
				<h4 className="font-bold text-base mb-3 text-blue-300 flex items-center">
					<Beer className="w-4 h-4 mr-2" />
					Available Flavours
				</h4>
				<div className="space-y-2">
					{barbicanFlavours.map((barbicanFlavour: string, idx) => (
						<div
							key={idx}
							className="flex items-center justify-between p-3 rounded-lg bg-white/10 border border-white/20"
						>
							<div className="flex items-center">
								<div className="w-2 h-2 rounded-full bg-blue-300 mr-3"></div>
								<span className="font-medium text-white font-serif">
									{barbicanFlavour}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
			<hr className="bg-gray-950 w-48 " />
		</div>
	);
};
const DetailedView = ({ item }: { item: MenuItem }) => {
	const categoryColors: Record<string, string> = {
		"🌿 Classic Flavours": "text-green-300",
		"🍁 Special Flavours": "text-red-300",
		"💡 Lit Series": "text-yellow-500",
		"✨ Premium Flavours": "text-purple-300",
	};

	return (
		<div className="text-white  space-y-4  max-h-[86%] overflow-y-auto hide-scrollbar">
			{/* Available Add-ons Section */}
			<div>
				<h4 className="font-bold text-base mb-3 text-blue-300 flex items-center">
					<Plus className="w-4 h-4 mr-2" />
					Available Add-ons
				</h4>
				<div className="space-y-2">
					{addons.map((addon: Addon) => (
						<div
							key={addon.id}
							className="flex items-center justify-between p-3 rounded-lg bg-white/10 border border-white/20"
						>
							<div className="flex items-center">
								<div className="w-2 h-2 rounded-full bg-blue-300 mr-3"></div>
								<span className="font-medium text-white font-serif">
									{addon.name}
								</span>
							</div>
							<span className="font-bold text-blue-300 ">+${addon.price}</span>
						</div>
					))}
				</div>
			</div>
			<hr className="bg-gray-950 w-48 " />
			{/* Flavours Section */}
			<div>
				<h4 className="font-bold text-base mb-3 text-blue-300 flex items-center">
					<Flame className="w-4 h-4 mr-2" />
					Flavours
				</h4>
				<div className="space-y-3">
					{flavours.map((group: FlavourGroup) => (
						<div key={group.category}>
							<h5
								className={` text-sm font-serif font-semibold uppercase tracking-wider mb-2 ${
									categoryColors[group.category] || "text-blue-300"
								}`}
							>
								{group.category}
							</h5>
							<div className="grid grid-cols-1 gap-2">
								{group.items.map((flavour: Flavour) => (
									<div
										key={flavour.name}
										className={`bg-gradient-to-t ${
											group.category === "🌿 Classic Flavours" && "to-teal-900"
										} ${
											group.category === "🍁 Special Flavours" && "to-red-900"
										} ${
											group.category === "💡 Lit Series" && "to-yellow-900"
										} ${
											group.category === "✨ Premium Flavours" &&
											"to-purple-900"
										}  rounded-sm px-3 py-2 hover:bg-white/20 transition-colors `}
									>
										<span className="font-medium font-mono text-sm text-white">
											{flavour.name}
										</span>
										{flavour.description && (
											<p className="text-xs text-gray-300 mt-1">
												{flavour.description}
											</p>
										)}
									</div>
								))}
							</div>
						</div>
					))}
					<div className="my-3 font-mono text-white uppercase text-sm">
						<span className="text-xl text-red-800">*</span> You can add your own
						mixes
					</div>
				</div>
			</div>
		</div>
	);
};

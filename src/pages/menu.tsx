import { useState } from "react";
import { Plus, Star, Flame, Snowflake, Coffee } from "lucide-react";
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
	category: "shisha" | "drinks";
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
	{ id: "drinks", name: "Drinks" },
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
		name: "Vyro Versa Hookah",
		price: 29.99,
		description:
			"Experience next-level flavor and effortless draws with the Vyro Versa. Customizable and cool—ideal for those who love a modern twist.",
		image: "/AeonVyroVersa-hookah.png",
		flavours: ["Mint", "Double Apple", "Grape", "Lemon"],
		bestSeller: false,
	},
	{
		id: 3,
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
		id: 4,
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
		id: 5,
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
		image: "/moon-special1.jpg",
		flavours: ["Mint", "Double Apple", "Grape", "Lemon"],
		bestSeller: false,
	},
	// Cold Drinks
	{
		id: 8,
		category: "drinks",
		drinkType: "cold",
		name: "Redbull",
		price: 8.0,
		description:
			"Classic energy drink to boost your energy and keep you refreshed throughout your visit.",
		image: "/redbull.jpg",
		bestSeller: false,
	},
	{
		id: 9,
		category: "drinks",
		drinkType: "cold",
		name: "Barbican",
		price: 8,
		description:
			"Non-alcoholic malt beverage with a rich, refreshing taste. Perfect complement to your hookah session.",
		image: "/barbican.jpg",
		bestSeller: false,
	},
	{
		id: 10,
		category: "drinks",
		drinkType: "cold",
		name: "Blueberry Redbull Summer Edition",
		price: 9.0,
		description:
			"Limited summer edition with refreshing blueberry flavor. A fruity twist on the classic energy drink.",
		image: "/bluberry-redbull.jpg",
		bestSeller: false,
	},
	{
		id: 11,
		category: "drinks",
		drinkType: "cold",
		name: "Mocha Ice Coffee",
		price: 12.0,
		description:
			"Rich espresso blended with chocolate and served over ice. Perfect for coffee lovers seeking a cool treat.",
		image: "/iced-mocha-coffee-1.jpg",
		bestSeller: false,
	},
	{
		id: 12,
		category: "drinks",
		drinkType: "cold",
		name: "Mango Juice",
		price: 10.0,
		description:
			"Fresh, pure mango juice bursting with tropical sweetness. Made from the finest mangoes.",
		image: "/mango-juice-preservative.jpg",
		bestSeller: false,
	},
	{
		id: 13,
		category: "drinks",
		drinkType: "cold",
		name: "Mojito",
		price: 14.0,
		description:
			"Classic refreshing mojito with fresh mint, lime, and sparkling water. Non-alcoholic and invigorating.",
		image: "/mojito.jpg",
		bestSeller: false,
	},
	{
		id: 14,
		category: "drinks",
		drinkType: "cold",
		name: "Pomegranate Mojito Summer Edition",
		price: 16.0,
		description:
			"Summer special mojito infused with antioxidant-rich pomegranate. A healthy and refreshing choice.",
		image: "/pomegrante-mojito.jpg",
		bestSeller: false,
	},
	{
		id: 15,
		category: "drinks",
		drinkType: "cold",
		name: "Fresh Mix Berries Juice",
		price: 13.0,
		description:
			"Blend of fresh strawberries, blueberries, and raspberries. Packed with vitamins and natural sweetness.",
		image: "/mixed-berry-julius-5.jpg",
		bestSeller: false,
	},
	{
		id: 16,
		category: "drinks",
		drinkType: "cold",
		name: "Nestea",
		price: 5.0,
		description:
			"Classic iced tea with a refreshing lemon flavor. Light and thirst-quenching.",
		image: "/nesta-lemon.jpg",
		bestSeller: false,
	},
	{
		id: 17,
		category: "drinks",
		drinkType: "cold",
		name: "Coca Cola",
		price: 5.0,
		description:
			"The classic cola experience. Crisp, refreshing, and the perfect companion to any meal.",
		image: "/Coca_Cola_Flasche_-_Original_Taste.jpg",
		bestSeller: false,
	},
	{
		id: 18,
		category: "drinks",
		drinkType: "cold",
		name: "Diet Coke",
		price: 5.0,
		description:
			"All the taste of Coca-Cola with zero calories. Light and refreshing without compromise.",
		image: "/Diet-Coke.png",
		bestSeller: false,
	},
	{
		id: 19,
		category: "drinks",
		drinkType: "cold",
		name: "Orange Crush",
		price: 5.0,
		description:
			"Vibrant orange soda with a burst of citrus flavor. Sweet, tangy, and refreshing.",
		image: "/orange-crush.jpg",
		bestSeller: false,
	},
	{
		id: 20,
		category: "drinks",
		drinkType: "cold",
		name: "Sprite",
		price: 5.0,
		description:
			"Clear, caffeine-free lemon-lime soda. Crisp and clean with a refreshing citrus taste.",
		image: "/sprite.jpg",
		bestSeller: false,
	},
	{
		id: 21,
		category: "drinks",
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
		id: 22,
		category: "drinks",
		drinkType: "hot",
		name: "Espresso",
		price: 8.0,
		description:
			"Rich, bold espresso shot made from premium coffee beans. Perfect for coffee purists.",
		image: "/crema-espresso-shots.jpg",
		bestSeller: false,
	},
	{
		id: 23,
		category: "drinks",
		drinkType: "hot",
		name: "Cappuccino",
		price: 10.0,
		description:
			"Classic Italian cappuccino with perfectly steamed milk foam. Smooth and creamy coffee experience.",
		image: "/cappuccino.jpg",
		bestSeller: false,
	},
	{
		id: 24,
		category: "drinks",
		drinkType: "hot",
		name: "Nescafe",
		price: 7.0,
		description:
			"Instant coffee made with premium Nescafe blend. Quick, convenient, and satisfying.",
		image: "/Coffee.jpg",
		bestSeller: false,
	},
	{
		id: 25,
		category: "drinks",
		drinkType: "hot",
		name: "Black Tea",
		price: 6.0,
		description:
			"Traditional black tea brewed to perfection. Rich, aromatic, and comforting.",
		image: "/Black-Tea.jpg",
		bestSeller: false,
	},
	{
		id: 26,
		category: "drinks",
		drinkType: "hot",
		name: "Green Tea",
		price: 6.0,
		description:
			"Antioxidant-rich green tea with a delicate, refreshing flavor. Healthy and soothing.",
		image: "/Green-tea.jpg",
		bestSeller: false,
	},
	{
		id: 27,
		category: "drinks",
		drinkType: "hot",
		name: "Peppermint Tea",
		price: 7.0,
		description:
			"Soothing peppermint tea with natural mint leaves. Refreshing and aids digestion.",
		image: "/peppermint-tea.jpg",
		bestSeller: false,
	},
	{
		id: 28,
		category: "drinks",
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
		category: "Regular Flavours",
		items: [
			{ name: "Blueberry Mint" },
			{ name: "Watermelon Mint" },
			{ name: "Gum Mint" },
			{ name: "Orange Mint" },
			{ name: "Lemon Mint" },
			{ name: "Grape Mint" },
			{ name: "Double Apple" },
			{ name: "Orange Cream" },
			{ name: "Kiwi" },
			{ name: "Pan" },
			{ name: "Mint" },
		],
	},
	{
		category: "Premium Flavours",
		items: [
			{
				name: "Love 66",
				description: "Passion fruit, honeydew melon, watermelon, and mint",
			},
			{
				name: "Skyfall",
				description: "Juicy watermelon, sweet peach, and menthol",
			},
			{
				name: "Blue Melon",
				description: "Fresh melon, tart blueberry, and cool menthol",
			},
			{
				name: "Blue Dragon",
				description:
					"Passion fruit, ripe and juicy melon, a delicate note of rose",
			},
			{ name: "Hawaii", description: "Mango, pineapple, and menthol" },
			{
				name: "Lady Killer",
				description: "Honeydew melon, mango, berries, and mint",
			},
		],
	},
	{
		category: "Special Flavours",
		items: [
			{ name: "Sprite", description: "Citrus" },
			{ name: "GoGreen", description: "Citrus & Fruity" },
			{ name: "Lime Cola", description: "Citrus & Cola" },
			{ name: "Hayatii", description: "Sweet & Fruity" },
			{ name: "Berry Lychee Blast", description: "Sweet Sour" },
			{ name: "Citrus God", description: "Strong Citrus" },
			{ name: "Chocolicious", description: "Dessert" },
			{ name: "Jinx" },
			{ name: "Phenomenal" },
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
		(item) => item.category === "drinks" && item.drinkType === "cold"
	);
	const hotDrinks = filteredItems.filter(
		(item) => item.category === "drinks" && item.drinkType === "hot"
	);
	const nonDrinkItems = filteredItems.filter(
		(item) => item.category !== "drinks"
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
											: "bg-transparent text-white border-white hover:bg-white hover:text-black"
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
							{selectedCategory === "drinks" && coldDrinks.length > 0 && (
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
											Refreshing beverages to cool you down
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
							{selectedCategory === "drinks" && hotDrinks.length > 0 && (
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
										{hotDrinks.map((item) => (
											<MenuCard key={item.id} item={item} />
										))}
									</div>
								</div>
							)}

							{/* Show all drinks together when "all" is selected */}
							{selectedCategory === "all" &&
								(coldDrinks.length > 0 || hotDrinks.length > 0) && (
									<>
										{/* Cold Drinks */}
										{coldDrinks.length > 0 && (
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
														Refreshing beverages to cool you down
													</p>
												</div>
												<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
													{coldDrinks.map((item) => (
														<MenuCard key={item.id} item={item} />
													))}
												</div>
											</div>
										)}

										{/* Hot Drinks */}
										{hotDrinks.length > 0 && (
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
													{hotDrinks.map((item) => (
														<MenuCard key={item.id} item={item} />
													))}
												</div>
											</div>
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
				<div className="absolute top-3 left-2 z-10">
					<Badge className="bg-red-500 text-white transform -rotate-12 shadow-lg animate-pulse">
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

			<CardContent className="p-6">
				<div className="flex justify-between items-start mb-3">
					{item.name === "Barbican" ? (
						<h3 className="text-xl font-serif font-semibold text-gray-900">
							{item.name}{" "}
							<span className="text-sm text-gray-700 ml-1">
								( we have several flavors )
							</span>
						</h3>
					) : (
						<h3 className="text-xl font-serif font-semibold text-gray-900">
							{item.name}
						</h3>
					)}

					{item.category === "shisha" ? (
						<span className="font-bold text-lg text-[#2b347b]">
							${item.price.toFixed(2)}
						</span>
					) : (
						<></>
					)}
				</div>

				<p className="text-gray-600 text-[12.5px] sm:text-sm leading-relaxed mb-4 line-clamp-3">
					{item.description}
				</p>

				{item.category === "shisha" && (
					<Button
						onClick={() => setShowDetails(!showDetails)}
						className="w-full bg-[#2b347b] hover:bg-[#2b347b]/90 text-white transition-all duration-300"
					>
						<Flame className="w-4 h-4 mr-2" />
						Show Flavours
					</Button>
				)}
			</CardContent>

			{/* Detailed View Overlay - Only for Shisha */}
			{showDetails && item.category === "shisha" && (
				<div className="absolute  inset-0 bg-[#2b347b] z-20 flex flex-col p-3 animate-in slide-in-from-bottom duration-300 hide-scrollbar overflow-y-auto">
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
		</Card>
	);
};

const DetailedView = ({ item }: { item: MenuItem }) => {
	const categoryColors: Record<string, string> = {
		"Regular Flavours": "text-green-300",
		"Premium Flavours": "text-purple-300",
		"Special Flavours": "text-orange-300",
	};

	return (
		<div className="text-white space-y-4  max-h-[86%] overflow-y-auto hide-scrollbar">
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
								<span className="font-medium text-white">{addon.name}</span>
							</div>
							<span className="font-bold text-blue-300">+${addon.price}</span>
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
								className={` text-sm font-extrabold uppercase tracking-wider mb-2 ${
									categoryColors[group.category] || "text-blue-300"
								}`}
							>
								{group.category}
							</h5>
							<div className="grid grid-cols-1 gap-2">
								{group.items.map((flavour: Flavour) => (
									<div
										key={flavour.name}
										className="bg-white/10 rounded-lg px-3 py-2 hover:bg-white/20 transition-colors "
									>
										<span className="font-medium text-sm text-white">
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
					<div className="my-3 font-sans text-yellow-500 uppercase text-sm">
						<span className="text-xl text-red-800">*</span> You can add your own
						mixes <span className="text-xl text-red-800">*</span>
					</div>
				</div>
			</div>
		</div>
	);
};

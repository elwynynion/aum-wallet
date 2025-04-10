import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export const metadata: Metadata = {
	title: "AUM Gold [ Assets Under Management ] UAE 🇦🇪",
	description: "AUM Gold | 1 troy oz gold",
	metadataBase: new URL("https://aum.gold"),
	keywords: [
		"gold investment",
		"gold-backed token",
		"$TROY",
		"UAE gold",
		"digital gold",
		"physical gold",
		"Dubai gold",
		"tokenized assets",
		"crypto wallet",
		"stablecoin trading",
	],
	authors: [{ name: "AUM Gold" }],
	category: "Finance",
	openGraph: {
		title: "AUM Gold [ Assets Under Management ] UAE 🇦🇪",
		description: "AUM Gold  | $TROY | 1 troy oz gold",
		url: "https://aum.gold",
		siteName: "AUM Gold",
		images: [
			{
				url: "/logo.png",
				width: 1200,
				height: 630,
				alt: "AUM Gold Preview",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "AUM Gold [ Assets Under Management ] UAE 🇦🇪",
		description: "AUM Gold | $TROY | 1 troy oz gold",
		images: ["/logo.png"],
		creator: "@aum_gold",
		site: "@aum_gold",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	alternates: {
		canonical: "https://aum.gold",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={inter.className}>
			<head>
				<Script
					id="structured-data"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "AUM [Assets Under Management] UAE",
							description: "AUM Gold | 1 troy oz gold",
							url: "https://aum.gold",
							logo: "https://aum.gold/logo.png",
							sameAs: ["https://twitter.com/aum_gold", "https://linkedin.com/company/aum-gold"],
							offers: {
								"@type": "Offer",
								price: "0",
								priceCurrency: "USD",
								availability: "https://schema.org/InStock",
								url: "https://aum.gold/buy",
							},
						}),
					}}
				/>
			</head>

			<body
				className={`${inter.className} min-h-screen bg-white text-gray-800 antialiased transition-colors duration-200 dark:bg-[#1b1b1c] dark:text-white`}
			>
				<Navbar />
				{children}
			</body>
		</html>
	);
}

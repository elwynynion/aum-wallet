import { CommunitySection } from "@/components/CommunitySection";
import { DeveloperSection } from "@/components/DeveloperSection";
import { Footer } from "@/components/Footer";
import { Seamless } from "@/components/Seamless";
import { SecuritySection } from "@/components/SecuritySection";
import { CryptoTable } from "../components/CryptoTable";
import { HeroSection } from "../components/HeroSection";
import { StatsSection } from "../components/StatsSection";

export default function Page() {
	return (
		<main className="bg-background min-h-screen">
			<HeroSection />

			<StatsSection />

			<div className="main-container mx-4 my-6 flex flex-col -space-y-16">
				<CryptoTable />
				<Seamless />
				<SecuritySection />
				{/* <PerpsSection /> */}
			</div>

			{/* <APYSection /> */}
			{/* <WalletSection /> */}
			<CommunitySection />
			<DeveloperSection />
			<Footer />
		</main>
	);
}

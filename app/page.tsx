import { Seamless } from '@/components/Seamless';
import { SecuritySection } from '@/components/SecuritySection';
import { WalletSection } from '@/components/WalletSection';
import { CommunitySection } from '@/components/CommunitySection';
import { DeveloperSection } from '@/components/DeveloperSection';
import { Footer } from '@/components/Footer';
import { CryptoTable } from '../components/CryptoTable';
import { HeroSection } from '../components/HeroSection';
import { StatsSection } from '../components/StatsSection';
import { PerpsSection } from '../components/PerpsSection';
import { APYSection } from '@/components/APYSection';

export default function Page() {
	return (
		<main className="bg-background min-h-screen">
			<HeroSection />

			<StatsSection />

			<div className="flex mx-4 my-6 main-container flex-col -space-y-16">
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

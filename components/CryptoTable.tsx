import Image from "next/image";
import React from "react";

import { Icons } from "./Icons";
import { StatCards } from "./StatCards";

const chains = [
	{
		name: "BNB Smart Chain",
		symbol: "(BNB)",
		iconBg: "bg-black",
		icon: "/icons/bnb-bnb-logo.png",
		buy: true,
		sell: true,
		swap: true,
		earn: true,
		dapps: true,
	},
	{
		name: "Bitcoin",
		symbol: "(BTC)",
		iconBg: "bg-orange-500",
		icon: "/icons/bitcoin-btc-logo.png",
		buy: true,
		sell: true,
		swap: false,
		earn: false,
		dapps: false,
	},
	{
		name: "Ethereum",
		symbol: "(ETH)",
		iconBg: "bg-purple-700",
		icon: "/icons/ethereum-eth-logo.png",
		buy: true,
		sell: true,
		swap: true,
		earn: true,
		dapps: true,
	},
	{
		name: "Solana",
		symbol: "(SOL)",
		iconBg: "bg-green-500",
		icon: "/icons/solana-sol-logo.png",
		buy: true,
		sell: true,
		swap: true,
		earn: true,
		dapps: true,
	},
	{
		name: "BASE",
		symbol: "(BASE)",
		iconBg: "bg-blue-600",
		icon: "/icons/base-logo-in-blue.png",
		buy: true,
		sell: true,
		swap: true,
		earn: true,
		dapps: true,
	},
	{
		name: "TRON",
		symbol: "(TRX)",
		iconBg: "bg-red-600",
		icon: "/icons/tron-trx-logo.png",
		buy: true,
		sell: true,
		swap: true,
		earn: true,
		dapps: true,
	},
	{
		name: "The Open Network",
		symbol: "(TON)",
		iconBg: "bg-blue-500",
		icon: "/icons/toncoin-ton-logo.png",
		buy: true,
		sell: true,
		swap: true,
		earn: true,
		dapps: true,
	},
];

export const CryptoTable = () => {
	return (
		<div className="via-accent to-accent z-[900] rounded-[44px] bg-gradient-to-br from-white via-20% px-4 py-16">
			<div className="mx-auto max-w-5xl">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">One Platform, Millions of Assets</h2>
					<p className="mx-auto max-w-3xl text-lg text-white">
						As a leading self-custody multi-chain platform, we support millions of assets across 100+
						blockchains. From Bitcoin, Ethereum, and Solana, to Cosmos, Optimism, and much more.
					</p>
				</div>

				<div className="relative mx-auto mb-8 max-w-5xl">
					<div className="flex items-center rounded-full bg-white px-4 py-3 shadow-md">
						<Icons.Search />
						<input
							type="text"
							placeholder="Search a chain..."
							className="w-full rounded-full bg-transparent px-4 py-2 text-gray-700 outline-none"
						/>
					</div>
				</div>

				<div className="mx-auto hidden max-w-5xl overflow-hidden rounded-3xl bg-white shadow-lg md:block">
					<div className="grid grid-cols-10 px-8 py-6">
						<div className="col-span-5 text-lg font-medium text-black">Chain</div>
						<div className="col-span-1 text-center font-medium text-black">Buy</div>
						<div className="col-span-1 text-center font-medium text-black">Sell</div>
						<div className="col-span-1 text-center font-medium text-black">Swap</div>
						<div className="col-span-1 text-center font-medium text-black">Earn</div>
						<div className="col-span-1 text-center font-medium text-black">dApps</div>
					</div>

					{chains.map((chain, index) => (
						<div key={index} className="grid grid-cols-10 items-center border-t border-gray-100 px-8 py-4">
							<div className="col-span-5 flex items-center gap-4">
								<div
									className={`flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white`}
								>
									<Image
										src={chain.icon}
										width={120}
										height={120}
										alt={`${chain.name} icon`}
										className="h-8 w-8 object-contain"
									/>
								</div>
								<span className="text-base font-medium text-black">
									{chain.name} {chain.symbol}
								</span>
							</div>
							<div className="col-span-1 flex justify-center">
								<div
									className={`flex h-6 w-6 items-center justify-center rounded-full ${chain.buy ? "bg-green-600" : "dark:bg-muted/10 bg-muted"}`}
								>
									{chain.buy ? (
										<Icons.Check className="h-3.5 w-3.5 text-white" />
									) : (
										<Icons.X className="h-3.5 w-3.5 text-gray-500" />
									)}
								</div>
							</div>
							<div className="col-span-1 flex justify-center">
								<div
									className={`flex h-6 w-6 items-center justify-center rounded-full ${chain.sell ? "bg-green-600" : "dark:bg-muted/10 bg-muted"}`}
								>
									{chain.sell ? (
										<Icons.Check className="h-3.5 w-3.5 text-white" />
									) : (
										<Icons.X className="h-3.5 w-3.5 text-gray-500" />
									)}
								</div>
							</div>
							<div className="col-span-1 flex justify-center">
								<div
									className={`flex h-6 w-6 items-center justify-center rounded-full ${chain.swap ? "bg-green-600" : "dark:bg-muted/10 bg-muted"}`}
								>
									{chain.swap ? (
										<Icons.Check className="h-3.5 w-3.5 text-white" />
									) : (
										<Icons.X className="h-3.5 w-3.5 text-gray-500" />
									)}
								</div>
							</div>

							<div className="col-span-1 flex justify-center">
								<div
									className={`flex h-6 w-6 items-center justify-center rounded-full ${chain.earn ? "bg-green-600" : "dark:bg-muted/10 bg-muted"}`}
								>
									{chain.earn ? (
										<Icons.Check className="h-3.5 w-3.5 text-white" />
									) : (
										<Icons.X className="h-3.5 w-3.5 text-gray-500" />
									)}
								</div>
							</div>

							<div className="col-span-1 flex justify-center">
								<div
									className={`flex h-6 w-6 items-center justify-center rounded-full ${chain.dapps ? "bg-green-600" : "dark:bg-muted/10 bg-muted"}`}
								>
									{chain.dapps ? (
										<Icons.Check className="h-3.5 w-3.5 text-white" />
									) : (
										<Icons.X className="h-3.5 w-3.5 text-gray-500" />
									)}
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="mx-auto max-w-5xl md:hidden">
					{chains.map((chain, index) => (
						<div key={index} className="mb-4 overflow-hidden rounded-3xl bg-white shadow-lg">
							<div className="flex items-center gap-3 border-b border-gray-100 p-4">
								<div
									className={`flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white`}
								>
									<Image
										src={chain.icon}
										width={120}
										height={120}
										alt={`${chain.name} icon`}
										className="h-8 w-8 object-contain"
									/>
								</div>
								<span className="text-base font-medium text-black">
									{chain.name} {chain.symbol}
								</span>
							</div>

							<div className="p-2">
								<FeatureRow label="Buy" active={chain.buy} />
								<FeatureRow label="Sell" active={chain.sell} />
								<FeatureRow label="Swap" active={chain.swap} />
								<FeatureRow label="Earn" active={chain.earn} />
								<FeatureRow label="dApps" active={chain.dapps} />
							</div>
						</div>
					))}
				</div>
			</div>

			<StatCards />
		</div>
	);
};

interface FeatureRowProps {
	label: string;
	active: boolean;
}

const FeatureRow = ({ label, active }: FeatureRowProps) => {
	return (
		<div className="flex items-center justify-between border-b border-gray-100 px-4 py-3 last:border-b-0">
			<span className="text-sm text-black">{label}</span>
			<div
				className={`flex h-6 w-6 items-center justify-center rounded-full ${active ? "bg-green-600" : "dark:bg-muted/10 bg-muted"}`}
			>
				{active ? (
					<Icons.Check className="h-3.5 w-3.5 text-white" />
				) : (
					<Icons.X className="h-3.5 w-3.5 text-gray-500" />
				)}
			</div>
		</div>
	);
};

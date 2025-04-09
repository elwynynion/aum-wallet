import Image from "next/image";
import React from "react";

export const SecuritySection = () => {
	return (
		<div className="dark:bg-background z-[888] rounded-b-[44px] bg-gradient-to-b from-green-200 via-lime-300 to-yellow-200 px-4 pt-16 pb-20">
			<div className="mx-auto mt-20 max-w-5xl">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-4xl font-bold text-black sm:text-5xl dark:text-white">
						Stay private and secure
					</h2>
					<p className="mx-auto max-w-3xl text-lg text-black dark:text-white">
						Rest easy knowing that our privacy and security measures keep you in control of your data and
						digital assets, while also keeping them safe.
					</p>
				</div>

				<div className="dark:bg-background mx-auto mb-8 overflow-hidden rounded-3xl bg-white px-6 py-12 shadow-lg">
					<div className="flex flex-col items-center md:flex-row">
						<div className="md:w-1/2">
							<h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
								True ownership of your crypto assets
							</h3>
							<p className="mb-6 text-base text-black dark:text-white">
								We secure your wallet, but don{"'"}t control or have access to your private keys or secret
								phrase - only you do.
							</p>
							<button className="bg-accent hover:bg-accent/90 cursor-pointer rounded-full px-6 py-3 font-medium text-white transition-colors">
								Get Started
							</button>

						</div>

						<div className="flex justify-center md:w-1/2">
							<Image src="/assets/g/4.png" alt="Secure" width={1080} height={1080} className="size-64 object-contain" />
						</div>
					</div>
				</div>

				<div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
					<div className="dark:bg-background rounded-3xl bg-white p-6 shadow-lg">
						<h3 className="mb-3 text-xl font-bold text-black dark:text-white">
							Added security with encryption
						</h3>
						<div className="mb-4 flex items-center justify-center">
							<Image
								src="/assets/g/1.png"
								alt="Secure"
								width={1080}
								height={1080}
								className="size-40 object-contain"
							/>
							<div className="bg-transparent"></div>
						</div>

						<p className="text-black dark:text-white">
							Use our Encrypted Cloud Backup for increased wallet security.
						</p>
					</div>

					<div className="dark:bg-background rounded-3xl bg-white p-6 shadow-lg">
						<h3 className="mb-3 text-xl font-bold text-black dark:text-white">Zero personal tracking</h3>
						<div className="mb-4 flex items-center justify-center">
							<Image
								src="/assets/g/2.png"
								alt="Zero tracking"
								width={1080}
								height={1080}
								className="size-40 object-contain"
							/>
							<div className="bg-transparent"></div>
						</div>
						<p className="text-black dark:text-white">
							We don{"'"}t track any personal information, including your IP address or balances.
						</p>
					</div>

					<div className="dark:bg-background rounded-3xl bg-white p-6 shadow-lg">
						<h3 className="mb-3 text-xl font-bold text-black dark:text-white">
							Proactive alerts for risky transactions
						</h3>
						<div className="mb-4 flex items-center justify-center">
							<Image
								src="/assets/g/3.png"
								alt="Transaction alerts"
								width={1080}
								height={1080}
								className="size-40 object-contain"
							/>
							<div className="bg-transparent"></div>
						</div>
						<p className="text-black dark:text-white">
							Stay safe with alerts for risky address and dApp connections.
						</p>
					</div>
				</div>

				<div className="flex justify-center">
					<button className="rounded-full border border-black px-8 py-3 font-medium text-black transition-colors hover:bg-gray-100 dark:border-white dark:text-white dark:hover:bg-gray-800">
						Learn more about privacy & security
					</button>
				</div>
			</div>
		</div>
	);
};

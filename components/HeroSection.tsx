import Image from "next/image";

export const HeroSection = () => {
	return (
		<div className="main-container mx-auto space-y-12 py-16 lg:px-12 lg:py-24">
			<div className="flex flex-col items-center gap-4 lg:flex-row">
				{/* Text Content */}
				<div className="mb-12 w-full space-y-8 lg:mb-0 lg:w-1/2">
					<h1 className="lg:text-65l text-foreground text-4xl leading-tight font-bold sm:text-5xl">
						The Gold Standard for Digital Money
					</h1>
					<p className="dark:text-foreground max-w-xl text-lg sm:text-xl">
						Earn a constant weekly yield while holding your gold assets on the palm of your hands in any
						blockchain.
					</p>

					<div className="flex flex-wrap gap-4">
						<div className="flex transform cursor-pointer items-center space-x-4 rounded-full border border-black bg-white px-6 py-3 text-lg font-semibold tracking-tight text-black ease-in-out hover:scale-105">
							<Image src="/apple.svg" alt="Apple Logo" width={22} height={22} />
							<p>Download for iOS</p>
						</div>

						<div className="flex transform cursor-pointer items-center space-x-4 rounded-full border border-black bg-white px-6 py-3 text-lg font-semibold tracking-tight text-black ease-in-out hover:scale-105">
							<Image src="/google_play.svg" alt="Apple Logo" width={22} height={22} />
							<p>Download for Android</p>
						</div>
					</div>
				</div>

				<div className="flex w-full items-center justify-center lg:w-1/2">
					{/* <div className="bg-card border-accent flex h-[400px] w-full items-center justify-center rounded-2xl">
						<Image
							src="/assets/h/1.png"
							alt="H Asset"
							width={1080}
							height={1080}
							className="w-full object-center"
						/>
					</div> */}
				</div>
			</div>
		</div>
	);
};

"use client";
import React, { useState } from "react";

export const PerpsSection = () => {
	const [videoModalOpen, setVideoModalOpen] = useState(false);

	return (
		<div className="dark:bg-background z-[9999] rounded-b-[44px] bg-gradient-to-b from-blue-200 via-indigo-300 to-purple-200 px-4 py-16">
			<div className="mx-auto mt-20 max-w-5xl">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-4xl font-bold text-black sm:text-5xl dark:text-white">Perps</h2>
					<p className="mx-auto max-w-3xl text-lg text-black dark:text-white">
						Trade perpetual futures with low fees, deep liquidity, and powerful trading features.
					</p>
				</div>

				<div className="dark:bg-background mx-auto overflow-hidden rounded-3xl bg-white px-6 py-12 shadow-lg">
					<div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-6">
						<div className="w-full md:w-1/2">
							<h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Up to 100x leverage</h3>
							<p className="mb-6 text-base text-black dark:text-white">
								Access advanced trading features with cross-margin, isolated margin, and portfolio margin
								modes for optimized capital efficiency.
							</p>
							<button className="bg-accent hover:bg-accent/90 cursor-pointer rounded-full px-6 py-3 font-medium text-white transition-colors">
								Start trading now
							</button>
						</div>

						<div className="w-full md:w-1/2">
							<div
								className="relative mx-auto w-full max-w-md cursor-pointer overflow-hidden rounded-lg shadow-lg"
								onClick={() => setVideoModalOpen(true)}
							>
								<div className="flex aspect-video items-center justify-center bg-gray-200 dark:bg-gray-800">
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="bg-accent/90 flex h-16 w-16 items-center justify-center rounded-full">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-8 w-8 text-white"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{videoModalOpen && (
				<div
					className="fixed inset-0 z-[9999] flex h-screen items-center justify-center bg-black/80"
					onClick={() => setVideoModalOpen(false)}
				>
					<div
						className="relative flex h-full max-h-screen w-full items-center justify-center px-4 md:px-8"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							className="absolute top-6 right-6 z-10 cursor-pointer text-white hover:text-gray-300"
							onClick={() => setVideoModalOpen(false)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>

						<div className="w-full max-w-full overflow-hidden rounded-lg">
							<video className="aspect-video w-full object-contain" autoPlay>
								<source src="/videos/perps.mp4" type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

import React from "react";

export const DeveloperSection = () => {
	return (
		<div className="main-container">
			<div className="my-8 rounded-[32px] bg-indigo-700 px-4 py-16 text-white">
				<div className="mx-auto max-w-5xl">
					<div className="flex flex-col items-center md:flex-row">
						<div className="md:w-2/3">
							<h2 className="mb-6 text-3xl font-bold md:text-4xl">AUM building</h2>
							<p className="mb-8 max-w-xl text-base md:text-lg">
								We know that working together as a community is better for everyone. Our platform enables
								blockchain developers to build their dApps and wallets natively and connect with millions of
								users, without having to worry about the low-level implementation details.
							</p>
							<button className="rounded-full bg-white px-8 py-3 font-medium text-indigo-700 transition-colors hover:bg-white/90">
								Check out our Developer Docs
							</button>
						</div>
						<div className="mt-8 flex justify-end md:mt-0 md:w-1/3">
							{/* IMAGE HERE */}
							<div className="h-60 w-60 bg-transparent"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

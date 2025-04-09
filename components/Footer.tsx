import Image from "next/image";
import React from "react";

export const Footer = () => {
	return (
		<div className="main-container">
			<footer className="mt-8 mb-4 rounded-[32px] border bg-gray-100 px-4 py-12 dark:bg-[#2a2a2a]">
				<div className="mx-auto max-w-6xl">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-6">
						<div className="col-span-2">
							<div className="mb-4">
								<Image src="/logo.png" alt="AUM wallet Logo" width={150} height={150} />
							</div>

							<div className="mt-4">
								<p className="mb-2 font-bold">Download TEAMwallet</p>
								<p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
									The most trusted & secure crypto wallet.
								</p>
								<div className="mb-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
									<button className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center rounded-full border px-4 py-2 text-sm transition-all">
										Download for iOS
									</button>
									<button className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center rounded-full border px-4 py-2 text-sm transition-all">
										Download Extension
									</button>
								</div>

								<div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
									<button className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center rounded-full border px-4 py-2 text-sm transition-all">
										Download APK
									</button>
									<button className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center rounded-full border px-4 py-2 text-sm transition-all">
										Download for Android
									</button>
								</div>
							</div>
						</div>

						{/* Wallet Section */}
						<div className="col-span-1">
							<h3 className="mb-4 text-lg font-bold">Wallet</h3>
							<ul className="space-y-2">
								<li>
									<a href="#" className="hover:text-primary text-gray-600 dark:text-gray-400">
										Mobile App
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-primary text-gray-600 dark:text-gray-400">
										Browser Extension
									</a>
								</li>
							</ul>
						</div>

						{/* Features Section */}
						<div className="col-span-1">
							<h3 className="mb-4 text-lg font-bold">Features</h3>
							<ul className="space-y-2">
								<li>
									<a href="#" className="hover:text-primary text-gray-600 dark:text-gray-400">
										Buy Crypto
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-primary text-gray-600 dark:text-gray-400">
										Swaps
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-primary text-gray-600 dark:text-gray-400">
										Staking
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-primary text-gray-600 dark:text-gray-400">
										NFTs
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-primary text-gray-600 dark:text-gray-400">
										Security
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-primary text-gray-600 dark:text-gray-400">
										SWIFT: Smart Contract Wallet
									</a>
								</li>
							</ul>
						</div>

						{/* Build Section */}
						<div className="col-span-1">
							<h3 className="mb-4 text-lg font-bold">Build</h3>
							<ul className="space-y-2">
								<li>
									<a href="#" className="hover:text-primary text-gray-600 dark:text-gray-400">
										Developer Docs
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-primary text-gray-600 dark:text-gray-400">
										Wallet Core
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-primary text-gray-600 dark:text-gray-400">
										Submit dApp
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-primary text-gray-600 dark:text-gray-400">
										Get assets listed
									</a>
								</li>
							</ul>
						</div>

						{/* Support and About Section */}
						<div className="col-span-1">
							<div className="mb-6">
								<h3 className="mb-4 text-lg font-bold">Support</h3>
								<ul className="space-y-2">
									<li>
										<a href="#" className="hover:text-primary text-gray-600 dark:text-gray-400">
											FAQ
										</a>
									</li>
									<li>
										<a href="#" className="hover:text-primary text-gray-600 dark:text-gray-400">
											Community Forum
										</a>
									</li>
									<li>
										<a href="#" className="hover:text-primary text-gray-600 dark:text-gray-400">
											Contact Us
										</a>
									</li>
								</ul>
							</div>

							<div>
								<h3 className="mb-4 text-lg font-bold">About</h3>
								<ul className="space-y-2">
									<li>
										<a href="#" className="hover:text-primary text-gray-600 dark:text-gray-400">
											About Us
										</a>
									</li>
									<li>
										<a href="#" className="hover:text-primary text-gray-600 dark:text-gray-400">
											Careers
										</a>
									</li>
									<li>
										<a href="#" className="hover:text-primary text-gray-600 dark:text-gray-400">
											Press Kit
										</a>
									</li>
									<li>
										<a href="#" className="hover:text-primary text-gray-600 dark:text-gray-400">
											Terms of Service
										</a>
									</li>
									<li>
										<a href="#" className="hover:text-primary text-gray-600 dark:text-gray-400">
											Privacy Notice
										</a>
									</li>
									<li>
										<a href="#" className="hover:text-primary text-gray-600 dark:text-gray-400">
											Cookie Preferences
										</a>
									</li>
									<li>
										<a href="#" className="hover:text-primary text-gray-600 dark:text-gray-400">
											Cookie Notice
										</a>
									</li>
									<li>
										<a href="#" className="hover:text-primary text-gray-600 dark:text-gray-400">
											Blog
										</a>
									</li>
								</ul>
							</div>

							<div className="mt-6">
								<div className="flex items-center justify-center md:justify-start">
									<div className="flex">
										<Image src="/logo.png" alt="ISO Certification" width={50} height={50} className="mr-2" />
										<Image src="/logo.png" alt="ISO Certification" width={50} height={50} />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-12">
						<p className="mb-4 text-lg font-bold">Stay Connected:</p>
						<div className="flex flex-wrap gap-3">
							<a href="#" className="hover:bg-primary rounded-md bg-black p-2 text-white transition-all">
								<span className="sr-only">Facebook</span>
								<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path
										fillRule="evenodd"
										d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
										clipRule="evenodd"
									></path>
								</svg>
							</a>
							<a href="#" className="hover:bg-primary rounded-md bg-black p-2 text-white transition-all">
								<span className="sr-only">GitHub</span>
								<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path
										fillRule="evenodd"
										d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
										clipRule="evenodd"
									></path>
								</svg>
							</a>
							<a href="#" className="hover:bg-primary rounded-md bg-black p-2 text-white transition-all">
								<span className="sr-only">Instagram</span>
								<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path
										fillRule="evenodd"
										d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
										clipRule="evenodd"
									></path>
								</svg>
							</a>
							<a href="#" className="hover:bg-primary rounded-md bg-black p-2 text-white transition-all">
								<span className="sr-only">Twitter</span>
								<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
								</svg>
							</a>
							<a href="#" className="hover:bg-primary rounded-md bg-black p-2 text-white transition-all">
								<span className="sr-only">Discord</span>
								<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
								</svg>
							</a>
							<a href="#" className="hover:bg-primary rounded-md bg-black p-2 text-white transition-all">
								<span className="sr-only">Reddit</span>
								<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm6 9.834a1.323 1.323 0 0 0-1.834-1.855C15.536 10.195 13.732 9.5 12 9.5c-1.732 0-3.536.695-4.166 1.479a1.323 1.323 0 0 0-1.834 1.855l.012.012a1.323 1.323 0 0 0 1.834 1.854c.63.784 2.433 1.479 4.166 1.479 1.732 0 3.536-.695 4.166-1.479a1.323 1.323 0 0 0 1.834-1.854l-.012-.012zm-9.5-1.334c.735 0 1.333.598 1.333 1.333s-.598 1.333-1.333 1.333-1.333-.598-1.333-1.333.598-1.333 1.333-1.333zm7 0c.735 0 1.333.598 1.333 1.333s-.598 1.333-1.333 1.333-1.333-.598-1.333-1.333.598-1.333 1.333-1.333z"></path>
								</svg>
							</a>
							<a href="#" className="hover:bg-primary rounded-md bg-black p-2 text-white transition-all">
								<span className="sr-only">Telegram</span>
								<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		const newDarkMode = !darkMode;
		setDarkMode(newDarkMode);
		if (newDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		localStorage.setItem("darkMode", newDarkMode.toString());
	};

	useEffect(() => {
		const savedDarkMode = localStorage.getItem("darkMode");
		let prefersDarkMode;

		if (savedDarkMode !== null) {
			prefersDarkMode = savedDarkMode === "true";
		} else {
			prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
		}

		setDarkMode(prefersDarkMode);

		if (prefersDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, []);

	// Prevent scrolling when mobile menu is open
	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [mobileMenuOpen]);

	return (
		<nav className="bg-background text-foreground flex w-full items-center justify-between px-6 py-4 transition-all duration-200 md:px-10">
			<Link href="/" className="flex items-center">
				<Image src="/logo.png" alt="Team Wallet Logo" width={200} height={200} className="h-16 w-auto" />
			</Link>

			<div className="flex flex-1 items-center justify-end">
				<div className="mr-8 hidden items-center space-x-8 lg:flex">
					<Link href="/wallet" className="text-foreground hover:text-primary transition-colors duration-200">
						Wallet
					</Link>
					<Link
						href="/features"
						className="text-foreground hover:text-primary transition-colors duration-200"
					>
						Features
					</Link>
					<Link href="/build" className="text-foreground hover:text-primary transition-colors duration-200">
						Build
					</Link>
					<Link href="/support" className="text-foreground hover:text-primary transition-colors duration-200">
						Support
					</Link>
					<Link href="/about" className="text-foreground hover:text-primary transition-colors duration-200">
						About
					</Link>
				</div>

				<div className="hidden items-center space-x-4 lg:flex">
					<button
						className="cursor-pointer rounded-full p-2 transition"
						onClick={toggleDarkMode}
						aria-label="Toggle dark mode"
					>
						{darkMode ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="text-primary h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
									clipRule="evenodd"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="text-primary h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
							</svg>
						)}
					</button>

					<Link
						href="/download"
						className="bg-primary hover:bg-primary/80 text-primary-foreground rounded-full px-5 py-2 transition"
					>
						Download
					</Link>
				</div>

				<button
					className="text-foreground z-50 ml-4 cursor-pointer p-1 lg:hidden"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					aria-label="Toggle mobile menu"
				>
					{mobileMenuOpen ? <X size={32} className="text-primary" /> : <Menu size={32} />}
				</button>
			</div>

			{/* Full screen mobile menu with animations */}
			<div
				className={`bg-background fixed inset-0 z-40 transition-all duration-200 lg:hidden ${mobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
			>
				<div className="flex h-full flex-col justify-center px-10">
					<div className="flex flex-col space-y-8">
						<Link
							href="/wallet"
							className={`text-foreground hover:text-primary transform text-3xl font-medium transition ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
							style={{ transitionDelay: "150ms" }}
							onClick={() => setMobileMenuOpen(false)}
						>
							Wallet
						</Link>
						<Link
							href="/features"
							className={`text-foreground hover:text-primary transform text-3xl font-medium transition ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
							style={{ transitionDelay: "200ms" }}
							onClick={() => setMobileMenuOpen(false)}
						>
							Features
						</Link>
						<Link
							href="/build"
							className={`text-foreground hover:text-primary transform text-3xl font-medium transition ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
							style={{ transitionDelay: "250ms" }}
							onClick={() => setMobileMenuOpen(false)}
						>
							Build
						</Link>
						<Link
							href="/support"
							className={`text-foreground hover:text-primary transform text-3xl font-medium transition ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
							style={{ transitionDelay: "300ms" }}
							onClick={() => setMobileMenuOpen(false)}
						>
							Support
						</Link>
						<Link
							href="/about"
							className={`text-foreground hover:text-primary transform text-3xl font-medium transition ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
							style={{ transitionDelay: "350ms" }}
							onClick={() => setMobileMenuOpen(false)}
						>
							About
						</Link>

						<div
							className={`flex transform items-center space-x-6 pt-10 transition ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
							style={{ transitionDelay: "400ms" }}
						>
							<button
								className="hover:bg-muted rounded-full p-2 transition"
								onClick={toggleDarkMode}
								aria-label="Toggle dark mode"
							>
								{darkMode ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="text-primary h-6 w-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
											clipRule="evenodd"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="text-primary h-6 w-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
									</svg>
								)}
							</button>
						</div>

						<Link
							href="/download"
							className={`bg-primary hover:bg-primary/80 text-primary-foreground mt-6 transform rounded-full px-5 py-2 text-center font-medium transition ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
							style={{ transitionDelay: "450ms" }}
							onClick={() => setMobileMenuOpen(false)}
						>
							Download
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

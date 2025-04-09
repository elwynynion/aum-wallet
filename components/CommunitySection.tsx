import React from 'react';

export const CommunitySection = () => {
    return (
        <div className="main-container">
            <div className="bg-white dark:bg-gray-900 px-4 py-16 rounded-[32px] my-8">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-8">
                        <h2 className="text-2xl md:text-4xl font-bold text-black dark:text-white mb-2">
                            Enjoy a Web3 experience powered by community
                        </h2>
                        <p className="text-black dark:text-white text-base">
                            Join our vibrant and diverse community to learn about the power
                            of self-custody, crypto, and Web3.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                        {/* Testimonial 1 */}
                        <div className="overflow-hidden">
                            {/* IMAGE HERE */}
                            <div className="h-60 w-full bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
                            <div className="pt-3">
                                <h3 className="font-bold text-black dark:text-white">Juan</h3>
                                <p className="text-sm text-black dark:text-white">
                                    The easiest way to understand DeFi is to get your hands dirty. The AUMwallet dApp Browser helped me to use protocols with small amounts and learn what works and what doesn&apos;t work.
                                </p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="overflow-hidden">
                            {/* IMAGE HERE */}
                            <div className="h-60 w-full bg-indigo-200 dark:bg-indigo-900 rounded-lg"></div>
                            <div className="pt-3">
                                <h3 className="font-bold text-black dark:text-white">Jen</h3>
                                <p className="text-sm text-black dark:text-white">
                                    Secure your private keys like your life depends on it. #DoNotShare 🔑
                                </p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="overflow-hidden">
                            {/* IMAGE HERE */}
                            <div className="h-60 w-full bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
                            <div className="pt-3">
                                <h3 className="font-bold text-black dark:text-white">Harry</h3>
                                <p className="text-sm text-black dark:text-white">
                                    As a newcomer in this field, the introduction of blockchain technology has had a profound and transformative impact on my life. It has opened up an entirely new realm of possibilities that I am eager to explore.
                                </p>
                            </div>
                        </div>

                        {/* Testimonial 4 */}
                        <div className="overflow-hidden">
                            {/* IMAGE HERE */}
                            <div className="h-60 w-full bg-purple-200 dark:bg-purple-900 rounded-lg"></div>
                            <div className="pt-3">
                                <h3 className="font-bold text-black dark:text-white">Esmart</h3>
                                <p className="text-sm text-black dark:text-white">
                                    I thoroughly enjoy engaging with DeFi and have developed a passion for minting NFTs. However, I always make it a point to conduct my own research and consistently check the TEAMwallet Security Scanner prior to any acquisition. By following these Web3 security practices, I ensure my safety and stay #SAFU. 🛡️
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button className="px-8 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors">
                            Join our community on Telegram
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}; 
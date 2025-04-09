export const WalletSection = () => {
    return (
        <div className="main-container">
            <div className="bg-gray-100 dark:bg-gray-900 px-4 py-16 rounded-[32px] my-8">
                <div className="mx-auto max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/2 p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-md">
                            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
                                Your one-stop, Web3 wallet
                            </h2>
                            <p className="text-black dark:text-white mb-6">
                                Buy, sell, and swap crypto, earn rewards, manage NFTs, and discover
                                DApps, all in one place.
                            </p>

                            <div className="flex gap-3 mb-6">
                                <button className="px-6 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
                                    Mobile
                                </button>
                                <button className="px-6 py-2 rounded-full bg-accent text-white">
                                    Extension
                                </button>
                            </div>

                            <button className="px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors w-full md:w-auto">
                                Download Extension
                            </button>
                        </div>

                        <div className="md:w-1/2 bg-black rounded-3xl p-8 flex items-center justify-center">
                            <div className="h-80 w-full bg-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}; 
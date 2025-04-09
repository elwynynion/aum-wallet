import Image from 'next/image';
import React from 'react';

export const Seamless = () => {
    return (
        <div className="bg-gradient-to-b z-[899] from-yellow-200 via-pink-300 to-purple-200 dark:bg-background rounded-b-[44px] px-4 py-16">
            <div className="mx-auto max-w-5xl mt-20">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-black dark:text-white sm:text-5xl">
                        Simple. Seamless.
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-black dark:text-white">
                        Enjoy a smooth mobile app and desktop experience with easy-to-use, powerful tools to
                        support your entire Web3 journey.
                    </p>
                </div>

                <div className="mx-auto overflow-hidden rounded-3xl  px-12 bg-white dark:bg-background shadow-lg">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 py-12">
                            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                                Deposit crypto easily from exchanges
                            </h3>
                            <p className="mb-6 text-base text-black dark:text-white">
                                Take control of your crypto. Avoid complicated steps and deposit directly to your wallet from exchanges
                                like Binance and Coinbase.
                            </p>
                            <button className="rounded-full bg-accent px-6 py-3 text-white font-medium cursor-pointer hover:bg-accent/90 transition-colors">
                                Get started with deposits
                            </button>
                        </div>

                        <div className="md:w-1/2 flex justify-center">
                            <Image src="/assets/g/ss1.png" alt="Secure" width={1080} height={1080} className="object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
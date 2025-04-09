import React from 'react';

interface StatCardProps {
    value: string;
    description: string;
}

export const StatCard = ({ value }: StatCardProps) => {
    return (
        <div className="rounded-2xl flex flex-col justify-center">
            <div className="md:text-3xl sm:text-xl text-2xl font-bold">{value}</div>
        </div>
    );
};

interface StatCardsProps {
    className?: string;
}

export const StatCards = ({ className = '' }: StatCardsProps) => {
    return (
        <div className={`pt-12 ${className}`}>
            <div className="grid grid-cols-2 gap-4 justify-center text-center text-white sm:grid-cols-3 sm:gap-8">
                <StatCard
                    value="10M+ Assets"
                    description="Supported on the platform"
                />
                <StatCard
                    value="600M+ NFTs"
                    description="Secure in user wallets"
                />
                <div className="col-span-2 sm:col-span-1 flex justify-center">
                    <StatCard
                        value="100+ Blockchains"
                        description="Connected to our ecosystem"
                    />
                </div>
            </div>
        </div>
    );
}; 
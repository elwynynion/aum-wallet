import React from 'react';
import { Icons } from './Icons';

export const StatsSection = () => {
    return (
        <div className="main-container mx-auto px-6 py-12 pt-5 lg:px-12">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-5">
                <div className="text-center">
                    <div className="text-foreground text-xl font-bold">Trusted by</div>
                    <div className="text-accent text-2xl font-bold">200M</div>
                    <div className="text-foreground text-lg">people</div>
                </div>
                <div className="text-center">
                    <div className="text-foreground text-xl font-bold">Founded in</div>
                    <div className="text-accent text-2xl font-bold">2017</div>
                </div>
                <div className="text-center">
                    <div className="text-foreground text-xl font-bold">Independently</div>
                    <div className="text-accent text-2xl font-bold">Audited</div>
                </div>
                <div className="text-center">
                    <div className="text-foreground text-xl font-bold">ISO</div>
                    <div className="text-accent text-2xl font-bold">Certified</div>
                </div>
                <div className="col-span-2 text-center sm:col-span-2 lg:col-span-1">
                    <div className="text-foreground text-xl font-bold">Top reviews</div>
                    <div className="mt-2 flex justify-center">
                        {[...Array(5)].map((_, i) => (
                            <Icons.Star key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}; 
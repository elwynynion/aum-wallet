import Image from 'next/image';
import React from 'react';

export const APYSection = () => {
    return (
        <div className="main-container">
            <div className="bg-green-100 flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-6 md:space-y-0 my-8 p-6 md:p-10 rounded-[44px]">
                <div className='flex flex-col tracking-tight space-y-1 text-center md:text-left'>
                    <p className='text-3xl md:text-4xl text-accent tracking-tighter font-semibold'>
                        T.E.A.M wallet™
                    </p>
                    <p className='text-xl md:text-2xl'>$TEAMUSD™ 1.00 | APY 9.75%</p>
                </div>

                <Image
                    src="/assets/w/1.png"
                    alt='W Asset'
                    width={1080}
                    height={1080}
                    className='w-[200px] md:w-[300px] object-contain'
                />
            </div>
        </div>
    );
}; 
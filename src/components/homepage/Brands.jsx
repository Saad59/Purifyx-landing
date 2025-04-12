"use client"

import React from 'react'
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Partner = () => {
    const pathname = usePathname();


    const brandImages = Array.from({ length: 12 }, (_, i) => `/partners/${i + 1}.png`);

    return (
        <div className='space-y-5 py-10 overflow-x-hidden'>

            <div className="space-y-3 text-center px-4 md:px-6 xl:px-8 2xl:px-0">
                <p className="text-base text-text-color font-medium">
                    Trusted by more than 100k users worldwide
                </p>
                <div className="flex items-center justify-center gap-4 ">
                    <div className="flex items-center">
                        {Array(5)
                            .fill(0)
                            .map((_, i) => (
                                <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        <span className="ml-2 text-sm text-text-color">5.0 rating</span>
                    </div>
                    <span className="text-sm text-text-color">27k+ growth community</span>
                </div>
            </div>

            <div className='relative max-w-[1300px] flex mx-auto'>
                <Marquee pauseOnHover={true} gradient={false} speed={30}>
                    {brandImages.map((src, index) => (
                        <div key={index} className="relative flex items-center w-24 h-32 mx-4 md:mx-16">
                            <Image
                                src={src}
                                alt={`Brand ${index + 1}`}
                                width={96} // Adjust as needed
                                height={128}
                                objectFit="contain"
                            />
                        </div>
                    ))}
                </Marquee>



                <div className="absolute top-0 -left-8 w-24 h-full z-10">
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#F6F6FD] via-[#F6F6FD] to-[#EEEEEE00] blur-sm" />
                    </div>
                </div>
                <div className="absolute top-0 -right-8 w-24 h-full z-10">
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0  bg-gradient-to-l from-[#F6F6FD] via-[#F6F6FD] to-[#EEEEEE00] blur-sm" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partner
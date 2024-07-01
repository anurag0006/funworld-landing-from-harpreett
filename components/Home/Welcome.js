'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import ProceedBtn from '../Repeating/Button'
import { useInView, animated } from "@react-spring/web"
import Link from 'next/link'


const Welcome = () => {
    const containerRef = useRef();
    const [ref, props] = useInView(() => ({
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 },
        config: { duration: 1000 },
        reset: false,
        delay: 1000
    }))
    return (
        <div
            className='relative overflow-hidden lg:pb-0 pb-0'  >
            <div className='flex px-[10vw] lg:flex-row lg:gap-0 gap-12  flex-col-reverse lg:mt-0 mt-[4rem] lg:mb-32 mb-12 overflow-hidden'>
                <div className='flex-1 relative'

                //  ref={ref} style={props}
                >
                    <div className='mx-auto lg:mx-0'>
                        <img priority className='z-25 absolute top-[-100px] left-[-90px]' src={"https://funworldblr.s3.amazonaws.com/public/Home/welcome/bgDots.webp"} alt="bgDots" />
                        
                        <div style={{ transform: 'rotate(-90deg)' }}
                            className=' px-4 absolute z-10 bottom-[110px] left-[-120px]  rounded text-white font-[600] text-2xl py-2 bg-gradient-to-r w-[270px] from-[#FD1783] to-[#FFCC00]'>
                            <p>
                                ENJOY 100+ RIDES

                            </p>
                        </div>
                    </div>

                    <Image priority src={'https://funworldblr.s3.amazonaws.com/public/Home/welcome/Welcome_Ride1.jpg'} alt="Ride" width={450} height={450} />
                    <div className='absolute right-[105px] bottom-[-50px] p-2 bg-white' >
                        <Image priority src={'https://funworldblr.s3.amazonaws.com/public/Home/welcome/Welcome_Ride2.jpg'} alt="children" width={250} height={250} />
                    </div>

                </div>
                <div className='relative flex-1 lg:pl-20 lg:text-start text-center lg:items-start items-center lg:justify-normal justify-start flex flex-col lg:gap-8 md:gap-6 gap-4'>
                    <h1 className='lg:text-[65px] lg:leading-[65px] md:text-[45px] md:leading-[45px] text-[30px] leading-[30px] font-[650]  text-[#0B1A48]'>Fun World For <br />The World </h1>
                    <p className='lg:text-justify lg:pr-12 lg:text-[19px] lg:leading-[33px] leading-[24px]'>Welcome to Bangalore&apos;s most enchanting wonderland! Get ready for a thrilling adventure filled with heart-pounding rides, captivating shows, and delightful treats. Our amusement park in Bangalore offers endless fun for everyone, ensuring unforgettable memories for families, friends, and thrill-seekers alike. Come join the magic and create cherished moments together! </p>
                    <Link href={'/about'}><ProceedBtn text="Know More" /></Link>
                </div>
            </div>


            <div className='absolute xl:right-[-250px] lg:right-[-230px] md:right-[-160px] right-[-110px] top-28 xl:p-12 lg:p-10 md:p-8 p-6  bg-gradient-to-b from-[#FD1783] to-[#FFCC00] xl:h-[400px] xl:w-[400px] lg:h-[320px] lg:w-[320px] md:h-[240px] md:w-[240px] h-[140px] w-[140px] flex items-center rounded-full justify-center'>
                <div className='w-[85%] h-[85%] rounded-full bg-white'>
                </div>
            </div>
            <div className='z-[-10] absolute bottom-[-100px] mb-40 left-[-50px] bg-gradient-to-b from-[#FD1783] to-[#FFCC00] lg:h-[170px] lg:w-[170px] md:h-[140px] md:w-[140px] h-[120px] w-[120px] flex items-center rounded-full justify-center'>
                <div className='w-[80%] h-[80%] bg-white flex items-center rounded-full justify-center'>
                    <div className='w-[80%] h-[80%] flex items-center rounded-full justify-center bg-red-400' >
                        <div className='w-[80%] h-[80%] flex items-center rounded-full justify-center bg-white'>
                        </div>

                    </div>
                </div>
            </div>

        </div>


    )
}

export default Welcome
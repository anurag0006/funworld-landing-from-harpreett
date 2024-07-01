'use client'
import React from 'react'
import { WiTrain } from "react-icons/wi";
import { GiKidSlide } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";
import { PiMaskHappyFill } from "react-icons/pi";
import CardMain from './CardMain';
function AboutStart() {
  return (
    <div className="w-full flex flex-col items-center ">
      {/* <Image src={'/About/fun2.jpeg'}  alt="child swimming in pool" className='w-[100vw] absolute -z-10 max-lg:hidden overflow-y-hidden' /> */}
      <div className='w-[100%] h-[100vh] bg-cover bg-no-repeat bg-center lg:flex hidden bg-[url("https://funworldblr.s3.amazonaws.com/public/About/fun2.jpeg")] absolute -z-10  overflow-y-hidden' />
      <div className="md:h-[100%] h-full md:relative top-[100%]">
        <CardMain data={data} />
      </div>
    </div>
  )
}

export default AboutStart
const data = [
    {
      icon: (
        <WiTrain
          size={60}
          className="text-[80px] mb-2 lg:text-[3vw] xl:text-[4vw] max-lg:text-[2rem] max-lg:mx-auto group-hover:text-white"
        />
      ),
      header: "World of Fun",
      content:
        "From heart-pounding roller coasters to refreshing water rides, we've got something for everyone.",
    },
    {
      icon: (
        <IoFastFood
          size={60}
          className="lg:text-[3vw] mb-2 xl:text-[4vw] max-lg:text-[2rem] max-lg:mx-auto group-hover:text-white"
        />
      ),
      header: "Delicious Food",
      content:
        "Our food court offers delectable meals that will satisfy your taste buds as you relax in our lush green garden or lounge.",
    },
    {
      icon: (
        <GiKidSlide
          size={60}
          className="text-[80px] mb-2 lg:text-[3vw] xl:text-[4vw] max-lg:text-[2rem] max-lg:mx-auto group-hover:text-white"
        />
      ),

      header: "Full of Entertainment",
      content:
        "From heart-pounding roller coasters to refreshing water rides, we've got something for everyone.",
    },
    {
      icon: (
        <PiMaskHappyFill
          size={60}
          className="text-[80px] mb-2 lg:text-[3vw] xl:text-[4vw] max-lg:text-[2rem] max-lg:mx-auto group-hover:text-white"
        />
      ),
      header: "Combo of happiness",
      content:
        "From heart-pounding roller coasters to refreshing water rides, we've got something for everyone.",
    },
  ];
"use client";
import React from "react";
import { Box } from "@mui/material";
const AboutFifth = () => {
  return (
    <div className="bg-[#FFFAF7] mt-20 flex md:gap-2 gap-8 w-full h-[90%]">
      <Box className="w-[50%] max-lg:w-[90%] max-lg:mx-auto h-[80%] m-auto md:px-[5rem] lg:px-[2rem] xl:px-[5rem]">
        <div className="xl:text-[45px] lg:text-[38px] md:text-[35px] text-[28px] max-lg:text-center  font-[600]">
          A World of Fun Awaits
        </div>

        <div className="mt-5 text-[3.5vw] xl:text-[1.2vw] lg:text-[2vw] max-lg:text-center text-[#5B5B5B] lg:leading-[30px] gap-4 flex flex-col">
          <div>
            Join us at Fun World Amusement Park, where the only limit to your
            fun is the sky above! Come be a part of the fun-filled legacy that
            is Fun World!
          </div>
          <div>
            We offer gentle rides like the Toy Train, Flying Appu, Mini
            Columbus, and Kiddies&apos; Bumper Boat for the little ones.
          </div>
          <div>
            Families can bond over thrilling spins on the Octopus, UFO, Hang
            Glider, and Super Jet Ride. And for the true adrenaline junkies, we
            present The Crazy Fireball, The Spanish Bull Fight, The Space
            Vehicle, and The Swing Chair.
          </div>
          <div>
            But that&apos;s not all. Our park is home to a 12-lane bowling arena
            that promises strikes, spares, and endless fun.
          </div>
        </div>
      </Box>
      <Box className="w-[50%] h-[90%] m-auto max-lg:hidden">
        <div className='w-[90%] bg-[url("https://funworldblr.s3.amazonaws.com/public/About/Group1.jpg")] bg-no-repeat bg-center bg-cover  h-[95%] mx-auto' />
      </Box>
    </div>
  );
};

export default AboutFifth;

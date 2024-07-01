"use client";
import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
export default function AboutLast () {
    return (
      <Box className="w-full h-full flex flex-col md:px-[10rem] py-[2rem] text-center">
        <Typography
          variant="h3"
          className="font-[600] max-lg:text-[28px] mx-auto"
        >
          Elevate Your Park with Expert Maintenance & Custom Rides
        </Typography>
        <Typography
          variant="h6"
          className="text-[#5B5B5B] px-6 max-lg:text-lg mx-auto mt-10"
        >
          With our experienced team of professionals, we handle everything from
          roller coasters to lighting systems with ease. Plus, we offer
          custom-made themed rides and even rental options for both new and
          refurbished rides. Let us bring the magic to your amusement park.
        </Typography>
  
        <Box className="flex justify-between mt-10 max-lg:w-[90%] max-lg:mx-auto">
          <Image
            src={
              "https://funworldblr.s3.amazonaws.com/public/About/group_pic1.jpg"
            }
            width={300}
            height={400}
            alt="pic"
            className="w-[30%]"
          />
          <Image
            src={
              "https://funworldblr.s3.amazonaws.com/public/About/group_pic2.jpg"
            }
            width={300}
            height={400}
            alt="pic"
            className="w-[30%]"
          />
          <Image
            src={
              "https://funworldblr.s3.amazonaws.com/public/About/group_pic3.jpg"
            }
            width={300}
            height={400}
            alt="pic"
            className="w-[30%]"
          />
        </Box>
      </Box>
    );
  };

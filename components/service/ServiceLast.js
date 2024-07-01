import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

import {  BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import CardService from "./CardService";
export default function ServiceLast(){
    const data = [
      {
        src: (
          <Image
            src={"https://funworldblr.s3.amazonaws.com/public/Service/1.png"}
            width={100}
            height={100}
            className="w-full h-[25vh] lg::h-[25vh]"
            alt="pic"
          />
        ),
        head: "Enhanced Ride Experiences",
        content:
          "Infuse fresh excitement into existing rides. Our skilled modifications breathe new life into familiar attractions.",
      },
      {
        src: (
          <Image
            src={"https://funworldblr.s3.amazonaws.com/public/Service/2.png"}
            width={100}
            height={100}
            className="w-full h-[25vh] lg::h-[25vh]"
            alt="pic"
          />
        ),
        head: "Restoration of Aging Rides",
        content:
          "Revive aging rides comprehensively. Our team restores charm and functionality, enhancing the appeal of your attractions.",
      },
      {
        src: (
          <Image
            src={"https://funworldblr.s3.amazonaws.com/public/Service/3.png"}
            width={100}
            height={100}
            className="w-full h-[25vh] lg::h-[25vh]"
            alt="pic"
          />
        ),
        head: "State-of-the-Art Ride",
        content:
          "Experience precision and reliability with our cutting-edge ride control systems. Ensure seamless operations for a smooth visitor experience.",
      },
      {
        src: (
          <Image
            src={"https://funworldblr.s3.amazonaws.com/public/Service/4.png"}
            width={100}
            height={100}
            className="w-full h-[25vh] lg::h-[25vh]"
            alt="pic"
          />
        ),
        head: "Effortless Ride Transfers",
        content:
          "Planning to relocate? Rely on us for hassle-free ride relocation and precise installation, leaving a lasting impact.",
      },
      {
        src: (
          <Image
            src={"https://funworldblr.s3.amazonaws.com/public/Service/5.png"}
            width={100}
            height={100}
            className="w-full h-[25vh] lg::h-[25vh]"
            alt="pic"
          />
        ),
        head: "Comprehensive Parts Solutions",
        content:
          "Ensure uninterrupted operation with complete spare parts coverage. Our specialized part fabrication guarantees seamless functionality.",
      },
      {
        src: (
          <Image
            src={"https://funworldblr.s3.amazonaws.com/public/Service/6.png"}
            width={100}
            height={100}
            className="w-full h-[25vh] lg::h-[25vh]"
            alt="pic"
          />
        ),
        head: "Rides",
        content:
          "Explore a sneak peek of our spectacular rides. From the thrilling 'Break Dance Ride' to the classic 'Columbus' ride, Sky Drop, Tsunami, our portfolio oozes excitement.",
      },
    ];
    return (
      <div className="w-full h-full flex flex-col gap-[2rem]">
        <div className="flex flex-col h-[10%] justify-evenly">
          <Typography
            variant="h3"
  
            className="text-center max-lg:text-3xl mb-4 max-lg:font-[600]"
          >
            Our Services
          </Typography>
          <Typography
            variant="subtitle1"
            className="text-center text-[#5B5B5B] lg:px-0 px-10"
          >
            Below are some of our services. Contact us now to get a customized
            quote according to your preferences.
          </Typography>
        </div>
  
        <Box className="w-full h-[70%]">
          <CardService data={data} />
        </Box>
  
        <Box className="text-white  max-lg:h-[15%] lg:h-[20%] lg:w-[80%] lg:mx-auto mx-6 btn lg:p-10 max-lg:p-2 flex max-lg:flex-col justify-between mt-10">
          <Box className="h-full lg:w-[70%] max-lg:w-[95%]">
            <Typography
              variant="h4"
              className="font-[650] max-lg:text-lg max-lg:text-center max-lg:mt-2"
            >
              Let&apos;s Connect
            </Typography>
            <Typography
              variant="h6"
              className="max-lg:text-sm max-lg:w-[90%] max-lg:mx-auto max-lg:mt-2 max-lg:text-center"
            >
              Let&apos;s discuss how we can help your park reach its full
              potential. Whether it&apos;s introducing new rides, upgrades, or
              solutions, we&apos;re here to assist.
            </Typography>
            <Typography variant="h6" className="max-lg:hidden">
              From commissioning fresh attractions to sourcing spare parts, we
              provide comprehensive support.
            </Typography>
          </Box>
          <Box className="lg:w-[30%] max-lg:w-[100%] max-lg:justify-center flex lg:flex-col items-end mt-2 gap-4">
            <Box className="border md:p-4 max-lg:p-2 rounded-full w-fit flex gap-2">
              <BsFillTelephoneFill className="text-lg mt-[2px] max-lg:text-sm" />
              <Typography className="max-lg:text-xs">080-23543290</Typography>
            </Box>
  
            <Box className="border md:p-4 max-lg:p-2 rounded-full w-fit flex gap-2">
              <IoMdMail className="text-lg mt-[2px] max-lg:text-sm" />
              <Typography className="max-lg:text-xs">
                info@funworld.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </div>
    );
  };
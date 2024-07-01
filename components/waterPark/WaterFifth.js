import Image from "next/image";
import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";
import CardService from "../service/CardService";
function WaterFifth() {
    const data = [
      {
        src: (
          <Image
            src={"https://funworldblr.s3.amazonaws.com/public/funworld1234.jpg"}
            width={100}
            height={100}
            className="w-full h-[270px] max-md:w-[100%] max-lg:h-[150px]"
            alt="pic"
          />
        ),
        head: "Crystal Clear Water Quality",
        content:
          "Water World offers you superior quality water with PH level between 7.2-7.8, protecting your skin from irritation and eyes from cloudiness.",
      },
      {
        src: (
          <Image
            src={"https://funworldblr.s3.amazonaws.com/public/Service/2.jpeg"}
            width={100}
            height={100}
            className="w-full h-[270px] max-md:w-[100%] max-lg:h-[150px]"
            alt="pic"
          />
        ),
        head: "Impressive architecture",
        content:
          "Discover our aqua realm adorned with mesmerising infrastructure marvels.",
      },
      {
        src: (
          <Image
            src={
              "https://funworldblr.s3.amazonaws.com/public/Home/parkAttractions/newimage8.jpg"
            }
            width={100}
            height={100}
            className="w-full h-[270px] max-md:w-[100%] max-lg:h-[150px]"
            alt="pic"
          />
        ),
        head: "Periodic Maintenance Sessions",
        content:
          "We are committed towards your safety. Our regular inspections and maintenance sessions ensure it.",
      },
      {
        src: (
          <Image
            src={"https://funworldblr.s3.amazonaws.com/public/funworld123.jpg"}
            width={100}
            height={100}
            className="w-full h-[270px] max-md:w-[100%] max-lg:h-[150px]"
            alt="pic"
          />
        ),
        head: "Aquatic Play System for all Ages",
        content:
          "Our dynamic aquatic play system ensures endless excitement for all, making your day at Water World an unforgettable journey of joy.",
      },
      {
        src: (
          <Image
            src={"https://funworldblr.s3.amazonaws.com/public/Service/5.jpeg"}
            width={100}
            height={100}
            className="w-full h-[270px] max-md:w-[100%] max-lg:h-[150px]"
            alt="pic"
          />
        ),
        head: "Weekend Themes",
        content:
          "Enhance your weekend experience with our captivating special themes and elevate your water world adventure.",
      },
      {
        src: (
          <Image
            src={"https://funworldblr.s3.amazonaws.com/public/Service/6.jpg"}
            width={100}
            height={100}
            className="w-full h-[270px] max-md:w-[100%] max-lg:h-[150px]"
            alt="pic"
          />
        ),
        head: "Guardians at Duty",
        content:
          "Our experienced and trained lifeguards persistently safeguard you and your loved ones.",
      },
    ];
    return (
      <div className="w-full h-full flex flex-col gap-[2rem] mt-12 bg-[#FFFAF7] py-16">
        <div className="flex flex-col h-[10%] justify-evenly">
          <Typography className="text-center px-[15vw] lg:text-[2.7rem] md:[text-2.2rem] text-[1.5rem] font-[600]">
            What Inspires Your Journey to the Water World?{" "}
          </Typography>
        </div>
  
        <Box className="w-full h-[90%] max-md:h-auto">
          <CardService data={data} />
        </Box>
      </div>
    );
  };
export default WaterFifth

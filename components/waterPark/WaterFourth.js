"use client";
import React from "react";
import {
  Typography,
} from "@mui/material";
import { IoMdColorPalette } from "react-icons/io";
import {
  GiHotSpices,
  GiCoolSpices,
} from "react-icons/gi";
import { WiTrain } from "react-icons/wi";

import { MdHealthAndSafety, MdOutlineCleanHands } from "react-icons/md";

import GridParkSecond from "./GridParkSecond";

function WaterFourth() {
    const data = [
      {
        icon: (
          <WiTrain
            size={80}
            className="p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]"
          />
        ),
        head: "27 Thrilling Water Rides",
        content: "Embark on a Aquatic Journey With Heart Throbbing Rides.",
      },
      {
        icon: (
          <IoMdColorPalette
            size={80}
            className=" p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]"
          />
        ),
        head: "A Topical Paradise",
        content:
          "Have a relaxing day at cabanas or unwind yourself in serene pools, enjoy to the fullest.",
      },
      {
        icon: (
          <GiHotSpices
            size={80}
            className=" p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]"
          />
        ),
        head: "Irresistible Delicacies and Beverages",
        content:
          "Refresh yourself during the aquatic journey with our most savoury dishes and beverages.",
      },
      {
        icon: (
          <GiCoolSpices
            size={80}
            className=" p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]"
          />
        ),
        head: "Luxurious Amenities",
        content: "Relax and elevate your every moment into a lavish escape.",
      },
      {
        icon: (
          <MdHealthAndSafety
            size={80}
            className=" p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]"
          />
        ),
        head: "Extremely Safe Environment",
        content:
          "Our extreme safety measures will peacefully let you dive into a state of excitement and fun.",
      },
      {
        icon: (
          <MdOutlineCleanHands
            size={80}
            className="p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]"
          />
        ),
        head: "Affordability",
        content:
          "Have tons of fun with value for money deals at affordable rates.",
      },
    ];
  
    return (
      <div className="max-md:w-[100%]">
  
        <div className="flex max-md:flex-col justify-between w-[90%] xl:w-[60%] md:w-[90%] mx-auto md:h-[20%]">
          <p className="text-left lg:text-[2.5rem] md:text-[2rem] md:mb-0 mb-3 text-[1.5rem] lg:mr-6  font-[600] max-md:text-center">
            You Can&apos;t Resist Coming to Water World
          </p>
          <Typography
            variant="h6"
            className="w-[80%] text-[#5B5B5B] mt-3 mx-auto max-md:text-sm max-md:w-[95%] max-md:text-center"
          >
            Nothing&apos;s better than an electrifying experience at amusement
            parks, trying all the crazy rides for stress therapy.
          </Typography>
        </div>
        <div className="max-md:w-[100%] h-auto mt-10">
          <GridParkSecond data={data} />
        </div>
      </div>
    );
  };
  

export default WaterFourth

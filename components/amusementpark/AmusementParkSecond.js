"use client";
import React from "react";
import {
  Typography,
} from "@mui/material";
import { IoMdColorPalette } from "react-icons/io";
import { GiHotSpices, GiCoolSpices } from "react-icons/gi";
import { WiTrain } from "react-icons/wi";

import { MdHealthAndSafety, MdOutlineCleanHands } from "react-icons/md";
import GridParkSecond from "./GridParkSecond";
function AmusementParkSecond() {
    const data = [
        {
          icon: (
            <WiTrain
              size={80}
              className=" p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]"
            />
          ),
  
          head: "57 Adventurous Rides- All Ages",
          content:
            "Enhance the fun and feel the chills with exciting ride options for every age.",
        },
        {
          icon: (
            <IoMdColorPalette
              size={80}
              className=" p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]"
            />
          ),

          head: "Enjoy Unique Themes",
          content: "Special themes to amplify the entertainment and joy for kids.",
        },
        {
          icon: (
            <GiHotSpices
              size={80}
              className=" p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]"
            />
          ),
          
          head: "Tasty Spice Delights",
          content: "We have a multitude of savoury delights to feast upon.",
        },
        {
          icon: (
            <GiCoolSpices
              size={80}
              className=" p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px] "
            />
          ),
         
          head: "Fusion of Live Music, DJ",
          content:
            "Groove upon the melodic beats with our extraordinary fusion of live music and DJ setup.",
        },
        {
          icon: (
            <MdHealthAndSafety
              size={80}
              className=" p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]"
            />
          ),
         
          head: "Ultimate Safety Measures",
          content:
            "Your safety is our priority. At Fun World, we have the most reliable array of safety arrangements.",
        },
        {
          icon: (
            <MdOutlineCleanHands
              size={80}
              className="p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]"
            />
          ),
          
          head: "Cleanliness and Hygiene",
          content:
            "Our park has the best cleanliness arrangements, with litter at every corner, clean restrooms and periodic maintenance.",
        },
      ];
    
      return (
        <div className="max-md:w-[100%]">
          <div className="flex  max-md:flex-col justify-between w-[90%] xl:w-[75%] gap-4 md:w-[90%] mx-auto md:h-[20%]">
            <Typography
              variant="h3"
              className="text-left max-md:text-xl max-md:font-[650] max-md:text-center"
            >
              Fun World Has Something to Thrill Every Heart
            </Typography>
            <Typography
              variant="h6"
              className="w-[80%] text-[#5B5B5B] mt-3 mx-auto max-md:text-sm max-md:w-[95%] max-md:text-center"
            >
              Nothing&apos;s better than an electrifying experience at amusement
              parks, trying all the crazy rides for stress therapy.
            </Typography>
          </div>
          <div className="max-md:w-[100%] h-auto px-4">
            <GridParkSecond data={data} />
          </div>
        </div>
      );
}

export default AmusementParkSecond

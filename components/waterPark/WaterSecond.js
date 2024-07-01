import React from "react";
import {
  Typography,
} from "@mui/material";
import {
  GiBodyHeight,
  GiMountainClimbing,
} from "react-icons/gi";
function WaterSecond() {
    return (
      <div className="w-full bg-[#FFFAF7] px-[12vw] flex flex-col gap-8 py-12">
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-6 lg:text-start text-center">
          <h4 className="flex-1 font-[600] lg:text-[42px] md:text-[32px] text-[26px]">
            Excitement is Alright!
            <br /> But Being Safe is Also Fun
          </h4>
          <h4 className="flex-1">
            Experience the thrill at Funworld Amusement and Waterworld! Excitement
            is just the beginning of your adventure. Our priority is your safety.
            We've been providing fun and safe entertainment for families since
            1990. Our water park is the perfect place to cool off during the hot
            summer.
          </h4>
        </div>
  
        <div className="flex gap-6 lg:flex-row flex-col">
          <div className="bg-gradient-to-r from-[#FFB200] to-[#F26702] py-16 rounded-xl flex-1 flex flex-col items-center justify-center gap-4">
            <GiMountainClimbing
              color="white"
              className="lg:text-[10rem] sm:text-[5rem] text-[2rem]"
            />
            <Typography
              variant="h5"
              className="text-white text-center font-[650] px-16"
            >
              Navigate the Intense Thrills With More Care
            </Typography>
          </div>
  
          <div className="bg-white  py-16 rounded-xl flex-1 flex flex-col items-center justify-center gap-4">
            <GiBodyHeight className="lg:text-[10rem] sm:text-[5rem] text-[2rem]" />
            <Typography
              variant="h5"
              className="text-[#5B5B5B] text-center font-[650] px-16"
            >
              Ride the Waves of Adventure, 48&apos;&apos; and Above
            </Typography>
          </div>
        </div>
      </div>
    );
  };
export default WaterSecond

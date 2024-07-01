"use client";
import React from "react";
import {
  Typography,
} from "@mui/material";
import CardMain from "./CardMain";
function AmusementParkStart() {
    const cardData = [
        {
          src: "https://funworldblr.s3.amazonaws.com/public/About/fun2.jpeg",
          head: "Family-Friendly Attractions",
          content:
            "Fun World Bangalore is your premier destination for family-friendly fun and entertainment.",
        },
        {
          src: "https://funworldblr.s3.amazonaws.com/public/Amusement/pendulum.jpg",
          head: "Happy Days, Weekend",
          content:
            "Spend a sparkling weekend in the Fun World with the best discount deals on all tickets.",
        },
        {
          src: "https://funworldblr.s3.amazonaws.com/public/Amusement/tsunami.webp",
          head: "Happy Days, Weekdays",
          content:
            "Have joyous and thrilling weekdays with an amazing theme park experience.",
        },
      ];
    
      return (
        <div className="md:w-[100vw] h-full">
          <div className="lg:w-[80%] mx-auto xl:mt-10 2xl:mt-48 text-center flex flex-col items-center justify-center">
            <Typography
              variant="h2"
              className="font-[600] text-[#0B1A48] lg:text-[45px] md:text-[36px] text-[26px]"
            >
              Visit Us for a Blast of Adventure, You Deserve a Break
            </Typography>
            <Typography className="lg:w-[80%] mx-auto px-[10vw] text-center mt-6 text-[18px] text-[#5B5B5B]">
              Nothing&apos;s better than an electrifying experience at amusement
              parks, trying all the crazy rides for stress therapy.
            </Typography>
            <Typography className="lg:w-[80%] mx-auto px-[10vw] text-center text-[18px] text-[#5B5B5B]">
              Fun World is the best place to bring smiles and joy to everyone.
            </Typography>
          </div>
    
          <div className="flex flex-col lg:flex-row md:bg-[#f0ececca] mx-auto sm:py-[2vh] lg:h-[800px] xl:h-[700px] 2xl:h-[800px]  lg:px-[2%] items-center sm:h-auto gap-8 sm:gap-4 lg:gap-6 justify-center mt-10">
            {cardData.map((e, index) => {
              return (
                <CardMain
                  num={index}
                  key={index}
                  src={e.src}
                  head={e.head}
                  content={e.content}
                />
              );
            })}
          </div>
        </div>
      );
}

export default AmusementParkStart

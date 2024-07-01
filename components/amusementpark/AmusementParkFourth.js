"use client";
import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";
 function AmusementParkFourth (){
    const data = [
      "https://funworldblr.s3.amazonaws.com/public/Amusement/a1.jpg",
      "https://funworldblr.s3.amazonaws.com/public/Amusement/a2.jpg",
      "https://funworldblr.s3.amazonaws.com/public/Amusement/skydrop.webp",
    ];
    return (
      <div
        style={{ width: "100%" }}
        className="flex lg:h-[100%] flex-col mt-12 justify-between max-md:py-4"
      >
        <img
          src={"https://funworldblr.s3.amazonaws.com/public/Amusement/bluebg.jpg"}
          width={300}
          alt="/"
          className="absolute w-[100vw] h-[400px] -z-10 -left-0 max-md:hidden"
        />
        <div className="xl:w-[40%] md:mt-5 lg:ml-12">
          <Typography
            variant="h3"
            className="text-left lg:text-white max-md:text-2xl max-md:font-[650] max-xl:text-center"
          >
            Rides & Attractions
          </Typography>
          <Typography
            variant="subtitle1"
            className="text-left mt-3 lg:text-white max-xl:w-[90%] max-xl:mx-auto max-xl:text-center"
          >
            Prepare to unleash your inner thrill-seeker as you encounter an array
            of exhilarating rides that cater to every level of bravery.
          </Typography>
        </div>
  
        <div className="">
          <Box className="flex lg:flex-row mt-4 flex-col items-center gap-4 lg:justify-end lg:gap-10 lg:h-[60%] lg:mt-10 ">
            {data.map((e, index) => {
              return (
                <img
                  key={index}
                  src={e}
                  alt="pic"
                  width={200}
                  className="lg:w-[30%] w-[70%] md:h-[20rem] rounded-lg"
                />
              );
            })}
          </Box>
        </div>
  
      </div>
    );
  };
  export default AmusementParkFourth
'use client'
import React from 'react'
import { Box, Typography } from "@mui/material";
import { FaBullseye } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

function AboutSecond() {
    return (
        <div className="w-full h-full flex bg-[#f3f2f0]">
          <Box className="flex flex-col justify-center items-end gap-6 lg:w-[50vw] ">
            <div className="h-[40%] flex flex-col md:items-start items-center lg:w-[70%] lg:pr-6">
              {/* <MdFastfood className='text-[15vw] md:text-[6rem] max-lg:mx-auto' /> */}
              <FiCheckCircle size={60} />
              <Typography
                variant="h4"
                className="mt-4 max-lg:text-center text-[7vw] md:text-[2rem]"
              >
                Our Vision
              </Typography>
              <Typography
                variant="subtitle1"
                className="mt-3 md:px-0 px-6 max-lg:text-center text-[4vw] md:text-[1.1rem]"
              >
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </Typography>
            </div>
            <div className="h-[40%] flex flex-col md:items-start items-center lg:w-[70%] lg:pr-6">
              {/* <MdFastfood className='text-[15vw] md:text-[6rem] max-lg:mx-auto' /> */}
              <FaBullseye size={60} />
              <Typography
                variant="h4"
                className="mt-4 max-lg:text-center text-[7vw] md:text-[2rem]"
              >
                Our Mission
              </Typography>
              <Typography
                variant="subtitle1"
                className="mt-3 md:px-0 px-6 max-lg:text-center text-[4vw] md:text-[1.1rem]"
              >
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </Typography>
            </div>
          </Box>
    
          <Box className="flex items-center pr-8 lg:w-[50vw] max-lg:hidden">
            <div className="w-[80%] h-[70%] ">
              <div className='bg-cover rounded-sm bg-center w-[100%] h-[100%] bg-[url("https://funworldblr.s3.amazonaws.com/public/About/fun2.jpeg")] bg-no-repeat '></div>
            </div>
          </Box>
        </div>
      );
}

export default AboutSecond

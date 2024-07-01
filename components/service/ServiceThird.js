import React from "react";
import { Box, Button,  Typography } from "@mui/material";
import {  BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
export default function ServiceThird() {

    return (
      <div className="w-full h-full flex flex-col justify-evenly max-lg:w-[95%] max-lg:mx-auto">
        <Box className="lg:space-y-10 flex-1 py-10 space-y-5">
          <Typography
            variant="h4"
  
            className="text-center text-[#0B1A48] font-[565] font-sans xl:text-5xl lg:px-[15vw] lg:text-4xl md:text-3xl xl:px-[20vw] text-[28px]"
          >
            Consulting and Holistic Project Management
          </Typography>
          <Typography className="text-center text-[#5B5B5B] font-sans lg:text-2xl xl:px-40 lg:px-20 px-5">
            Your project is in good hands. Our consultancy offers expert guidance
            on park growth, ride selection, and project management. Supported by
            seasoned professionals, we ensure a seamless journey from inception to
            realization.
          </Typography>
          <Typography className="text-center text-[#5B5B5B] font-sans lg:text-2xl xl:px-40 lg:px-20 px-5">
            Whether it&apos;s creativity, feasibility, or timely execution,
            we&apos;re devoted to bringing your vision to life.
          </Typography>
        </Box>
  
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-8 lg:px-0 px-4">
          <div className='flex-1 min-h-[40vh] bg-center bg-cover bg-no-repeat bg-[url("https://funworldblr.s3.amazonaws.com/public/Service/map.jpg")]'></div>
  
          <div className="bg-[#47475EF5] lg:rounded-none rounded-xl flex-1 text-white lg:w-[40%] flex flex-col xl:space-y-10 md:space-y-5 py-5 xl:py-10 xl:px-14 md:px-5 px-3 space-y-3 lg:text-start text-center">
            <Typography
              variant="h4"
              className="font-sans font-medium xl:text-4xl text-white md:text-3xl text-xl"
            >
              Connect with Us to Begin Your Success Story
            </Typography>
            <Typography className="font-sans text-white lg:text-xl md:text-lg">
              Whether it&apos;s creativity, feasibility, or timely execution,
              we&apos;re devoted to bringing your vision to life.
            </Typography>
  
            <Box>
              <div className=" flex justify-between">
                <input
                  className="border w-[48%] bg-[#47475EF5] py-2 px-4 rounded-full placeholder:ml-2 placeholder:text-white"
                  placeholder="First Name"
                />
                <input
                  className="border w-[48%] bg-[#47475EF5] py-2 px-4 rounded-full placeholder:ml-2 placeholder:text-white"
                  placeholder="Email Address"
                />
              </div>
              <div className="flex flex-col xl:mt-6 md:mt-2 h-[90%] md:gap-[1rem] mt-2">
                <input
                  className="border w-[100%] bg-[#47475EF5] py-2 px-4 rounded-full placeholder:ml-2 placeholder:text-white"
                  placeholder="Phone Number"
                />
                <textarea
                  variant="outlined"
                  className="border w-[100%] py-2 px-4 bg-[#47475EF5] placeholder:ml-2 placeholder:text-white mt-2 rounded-xl h-28"
                  placeholder="Your Message"
                />
              </div>
            </Box>
            <Button variant="contained" className="btn">
              Submit
            </Button>
            <Box className=" flex xl:gap-8 md:gap-4 text-center justify-center gap-2">
              <span className="flex flex-row md:space-x-2 space-x-1 items-center">
                <BsFillTelephoneFill className="md:text-lg mt-[2px]" />
                <Typography className="text-white font-sans font-medium md:text-lg text-xs">
                  +91 8431110000
                </Typography>
              </span>
              <span className="flex flex-row md:space-x-2 space-x-1 items-center">
                <IoMdMail className="md:text-lg mt-[2px]" />
                <Typography className="text-white font-sans font-medium md:text-lg text-xs">
                  info@funworld.com
                </Typography>
              </span>
            </Box>
          </div>
        </div>
  
        <Box className="flex max-lg:flex-col  justify-evenly items-center ">
          <div
            style={{ backgroundColor: "green" }}
            className="flex-1 h-full bg-red-800  "
          >
            {/* <Image src={map} className='h-full' alt='pic' /> */}
          </div>
        </Box>
      </div>
    );
  };

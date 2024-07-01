import React from "react";
import { Box, Typography } from "@mui/material";
import {
  MdComputer,
  MdHealthAndSafety,
  MdPark,
  MdWebhook,
} from "react-icons/md";
import { BsBook } from "react-icons/bs";
export default function ServiceSecond() {
    return (
      <div className="w-full">
  
        <div className="flex-1 top-[30%] xl:top-[25%] absolute -z-10 max-xl:hidden">
          <img
            src={"https://funworldblr.s3.amazonaws.com/public/Service/swing.jpg"}
            className="mt-[400px] w-[100vw]"
            alt="water gun"
          />
  
        </div>
        <div className="xl:bg-[#F3E6DE] xl:w-[90vw] xl:px-20 xl:py-20 lg:py-32 py-10 flex max-xl:flex-col xl:relative lg:top-[30vh] xl:top-[40vh] lg:left-[12vw] lg:gap-14 xl:rounded-tl-[3rem] md:gap-8 gap-4">
          <Box className=" flex flex-col md:gap-16 gap-8">
            <Typography
              variant="h4"
              className="font-sans font-bold text-[#252525] lg:text-4xl xl:text-5xl max-xl:text-center md:text-3xl text-[28px]"
            >
              Why Choose Us?
            </Typography>
            <Box className="flex flex-col justify-evenly max-xl:w-[90%] lg:text-start text-center max-xl:mx-auto xl:gap-10 lg:gap-8 gap-4">
              <div className="flex gap-2">
                <MdPark className="xl:text-6xl md:text-5xl md:w-12 bg-white xl:w-16 p-2 rounded-full" />
  
                <div className="w-[80%] ml-2 xl:space-y-3 space-y-1">
  
                  <Typography className="font-bold font-sans text-[#0B1A48] xl:text-3xl md:text-2xl text-[20px]">
  
                    Customized Park Experiences
                  </Typography>
                  <Typography className="text-[#5B5B5B] font-sans font-[500] md:text-lg text-base">
                    Recognizing the unique identity of each park, our rides
                    integrate seamlessly, enhancing your theme and enriching
                    visitors&apos; experiences.
                  </Typography>
                </div>
  
              </div>
  
              <div className="flex gap-2">
                <MdWebhook className="xl:text-6xl md:text-5xl md:w-12 bg-white xl:w-16 p-2 rounded-full" />
                {/* PiWebhooksLogoLight */}
                <div className=" w-[80%] ml-2 xl:space-y-3 space-y-1">
                  <Typography className="font-bold font-sans text-[#0B1A48] xl:text-3xl md:text-2xl text-[20px]">
                    From Simplicity to Complexity
                  </Typography>
                  <Typography className="text-[#5B5B5B] font-sans font-[500] md:text-lg">
                    Whether you&apos;re looking for family-friendly attractions or
                    heart-pounding rides, we can transform your concepts into
                    reality. We embrace challenges to bring your visions to life.
                  </Typography>
                </div>
              </div>
  
              <div className="flex gap-2">
                <BsBook className="xl:text-6xl md:text-5xl md:w-12 bg-white xl:w-16 p-2 rounded-full" />
                {/* LiaIndustrySolid */}
                <div className=" w-[80%] ml-2 xl:space-y-3 space-y-1">
                  <Typography className="font-bold font-sans text-[#0B1A48] xl:text-3xl md:text-2xl text-[20px]">
                    Tapping into Vast Industry Expertise
                  </Typography>
                  <Typography className="text-[#5B5B5B] font-sans font-[500] md:text-lg">
                    With honed skills and extensive knowledge, we create standout
                    rides that elevate your park&apos;s attractions and visitor
                    satisfaction.
                  </Typography>
                  <Typography className="text-[#5B5B5B] lg:hidden flex font-sans font-[500] md:text-lg">
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking!
                  </Typography>
                </div>
              </div>
            </Box>
          </Box>
  
          <Box className="xl:gap-10 gap-4 flex flex-col max-xl:w-[90%] max-xl:mx-auto">
            <Typography className="mx-auto lg:flex hidden font-sans text-[#5B5B5B] font-[500] text-base">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking!
            </Typography>
  
  
            <div className="flex gap-3 lg:text-start text-center">
              {/* MdHealthAndSafety */}
              <MdHealthAndSafety className="xl:text-6xl md:text-5xl md:w-12 bg-white xl:w-16 p-2 rounded-full" />
              <div className=" w-[80%] ml-2 xl:space-y-3 space-y-1">
                <Typography className="font-bold font-sans text-[#0B1A48] xl:text-3xl md:text-2xl text-[20px]">
                  Uncompromising Safety Standards
                </Typography>
                <Typography className="text-[#5B5B5B] font-sans font-[500] md:text-lg">
                  Safety is paramount in our design. Our rides surpass industry
                  norms, ensuring a secure environment for everyone&apos;s
                  enjoyment.
                </Typography>
              </div>
            </div>
  
  
            <div className="flex gap-3 lg:text-start text-center">
              {/* GrTechnology */}
              <MdComputer className="xl:text-6xl md:text-5xl md:w-12 bg-white xl:w-16 p-2 rounded-full" />
              <div className=" w-[80%] ml-2 xl:space-y-3 space-y-1">
                <Typography className="font-bold font-sans text-[#0B1A48] xl:text-3xl md:text-2xl text-[20px]">
                  Innovating with Cutting-Edge Technology
                </Typography>
                <Typography className="text-[#5B5B5B] font-sans font-[500] md:text-lg">
                  Incorporating advanced amusement park maintenance systems, our
                  rides redefine the forefront of your park. Interactive elements
                  and innovative features set you apart.
                </Typography>
              </div>
            </div>
          </Box>
        </div>
      </div>
    );
  };
"use client";
import React from "react";
import Image from "next/image";
import { animated, useInView } from "@react-spring/web";
import { Box, Card, Typography } from "@mui/material";
import { MdFastfood } from "react-icons/md";
import { WiTrain } from "react-icons/wi";
import { GiKidSlide } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";

import { PiMaskHappyFill } from "react-icons/pi";
import { FaBullseye } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { FiCheckCircle } from "react-icons/fi";
function AboutFourth() {
    const [img1Ref, img1Props] = useInView(() => ({
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 },
        config: { duration: 1000 },
        reset: false,
        delay: 1000,
      }));
      const [img2Ref, img2Props] = useInView(() => ({
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 },
        config: { duration: 1000 },
        reset: false,
        delay: 1000,
      }));
      return (
        <div>
          <div className="lg:mt-20 mt-8 flex md:flex-row md:gap-2 gap-8 flex-col">
            <div className="md:w-[50vw] px-12 items-center justify-center lg:gap-10 gap-4 flex flex-col">
              <h4 className="md:text-[35px] md:leading-[35px] xl:leading-[45px]  lg:text-[45px] max-md:w-[100%] text-[28px] font-[600] max-sm:text-center lg:w-[70%]">
                A Day Packed with Entertainment
              </h4>
              <div className="w-[70%] max-lg:w-[100%] max-md:text-center text-[#5B5B5B] mx-auto">
                <p className="xl:leading-[30px]">
                  We believe in offering more than just rides. Fun World combines
                  Snow city, Water World, Fun World, and Star City to create a
                  unique experience that caters to your every whim.
                </p>
                <p className="xl:leading-[30px]">
                  Imagine sliding down water-filled chutes, exploring a gaming
                  paradise, and even experiencing a snowy wonderland all in one
                  place!
                </p>
              </div>
            </div>
            <div
              className="md:w-[50vw] bg-cover md:p-0 p-6"
              ref={img1Ref}
              style={img1Props}
            >
              <img
                src={"https://funworldblr.s3.amazonaws.com/public/About/fun3.jpeg"}
                alt="rings with child"
              />
            </div>
          </div>
    
          <div className="lg:mt-20 mt-8 flex md:flex-row-reverse md:gap-2 gap-8 flex-col">
            <div className="md:w-[50vw] xl:leading-[30px] px-12 items-center justify-center gap-10 flex flex-col">
              <div className="w-[70%] text-[#5B5B5B] max-md:text-center mx-auto">
                Join us at Fun World{" "}
                <span className="font-[650]">Amusement Park</span>, where the only
                limit to your fun is the sky above! Come be a part of the fun-filled
                legacy that is Fun World!
              </div>
            </div>
    
            <div
              className="md:w-[50vw] bg-cover md:p-0 p-6"
              ref={img2Ref}
              style={img2Props}
            >
              <img
                src={"https://funworldblr.s3.amazonaws.com/public/About/fun4.jpeg"}
                alt="water slide"
              />
            </div>
          </div>
        </div>
      );
}

export default AboutFourth

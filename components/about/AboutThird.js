"use client";
import React from "react";
import Image from "next/image";
import {  useInView } from "@react-spring/web";
import { Typography } from "@mui/material";
function AboutThird() {
    const [ref, props] = useInView(() => ({
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 },
        config: { duration: 1000 },
        reset: false,
        delay: 1000,
      }));
      const [textRef, textProps] = useInView(() => ({
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 },
        config: { duration: 1000 },
        reset: false,
        delay: 1000,
      }));
    
      return (
        <div className="w-full h-full flex md:flex-row flex-col">
          <div class="bg-gradient-to-tl from-[#FF8E4BE8] via-[#FF9252E8] to-[#DB1450E8] opacity-90 flex-1 md:min-h-[610px] flex flex-col gap-4 items-center text-center justify-center xl:px-32 py-4 text-white">
            <div
              className="w-full flex flex-col gap-2 h-full"
              ref={textRef}
              style={textProps}
            >
              <Typography
                variant="h3"
                className="mt-10 font-bold text-[7vw] md:text-[3rem]"
              >
                Operating Hours
              </Typography>
    
              <img
                src={
                  "https://funworldblr.s3.amazonaws.com/public/Amusement/mask.svg"
                }
                width={450}
                height={40}
                className="mx-auto"
                alt="pic"
              />
    
              <Typography
                variant="h5"
                className="tracking-[10px] mt-5 text-[4vw] md:text-[2rem]"
              >
                FUN WORLD
              </Typography>
    
              <img
                src={
                  "https://funworldblr.s3.amazonaws.com/public/Amusement/mask2.svg"
                }
                width={150}
                height={40}
                className="mx-auto"
                alt="pic"
              />
    
              <Typography
                variant="h5"
                className="font-bold text-[5vw] md:text-[2rem]"
              >
                10:30 AM TO 7:00 PM
              </Typography>
    
              <Typography>(all days of the week)</Typography>
    
              <div className="h-[1px] w-[60%] mx-auto border-t-2 border-dashed mt-4"></div>
    
              <Typography
                variant="h5"
                className="tracking-[10px] mt-10 text-[4vw] md:text-[2rem]"
              >
                WATER WORLD
              </Typography>
    
              <Image
                src={
                  "https://funworldblr.s3.amazonaws.com/public/Amusement/mask2.svg"
                }
                width={150}
                height={40}
                className="mx-auto"
                alt="pic"
              />
    
              <Typography
                variant="h5"
                className="font-bold text-[5vw] md:text-[2rem]"
              >
                10:30 AM TO 5:00 PM
              </Typography>
    
              <Typography>(all days of the week)</Typography>
            </div>
          </div>
    
          <div class="bg-gradient-to-b from-[#47475EF5] via-[#606085f5] to-[#74748ef5] flex-1 md:min-h-[650px] flex flex-col gap-4 items-center text-center  justify-center xl:px-32 lg:px-12 md:px-8 px-6 py-4 text-white">
            <div
              className="w-full flex flex-col gap-2 h-full"
              ref={textRef}
              style={textProps}
            >
              <Typography
                variant="h3"
                className="mt-10 font-bold text-[7vw] md:text-[3rem]"
              >
                Entry Fees
              </Typography>
    
              <Image
                src={
                  "https://funworldblr.s3.amazonaws.com/public/Amusement/mask.svg"
                }
                width={450}
                height={40}
                className="mx-auto"
                alt="pic"
              />
    
              <Typography
                variant="h5"
                className="tracking-[10px] mt-2 text-[4vw] md:text-[2rem]"
              >
                ADULTS
              </Typography>
    
              <Image
                src={
                  "https://funworldblr.s3.amazonaws.com/public/Amusement/mask2.svg"
                }
                width={150}
                height={40}
                className="mx-auto"
                alt="pic"
              />
    
              <Typography
                variant="h5"
                className="font-bold text-[5vw] md:text-[2rem]"
              >
                INR 1499 <span className="text-[16px]">on weekends</span>, INR 1199{" "}
                <span className="text-[16px]">on weekdays</span>
              </Typography>
    
              <div className="h-[1px] w-[60%] mx-auto border-t-2 border-dashed mt-2"></div>
    
              <Typography
                variant="h5"
                className="tracking-[10px] mt-2 text-[4vw] md:text-[2rem]"
              >
                CHILDREN
              </Typography>
    
              <Image
                src={
                  "https://funworldblr.s3.amazonaws.com/public/Amusement/mask2.svg"
                }
                width={150}
                height={40}
                className="mx-auto"
                alt="pic"
              />
    
              <Typography
                variant="h5"
                className="font-bold text-[5vw] md:text-[2rem]"
              >
                INR 999 <span className="text-[16px]">on weekends</span>, INR 999{" "}
                <span className="text-[16px]">on weekdays</span>
              </Typography>
    
              <div className="h-[1px] w-[60%] mx-auto border-t-2 border-dashed mt-2"></div>
    
              <Typography
                variant="h5"
                className="tracking-[10px] mt-2 text-[4vw] md:text-[2rem]"
              >
                HOLIDAY SPECIAL
              </Typography>
    
              <Image
                src={
                  "https://funworldblr.s3.amazonaws.com/public/Amusement/mask2.svg"
                }
                width={150}
                height={40}
                className="mx-auto"
                alt="pic"
              />
    
              <Typography
                variant="h5"
                className="font-bold text-[5vw] md:text-[2rem]"
              >
                INR 999 <span className="text-[16px]">for kids</span>, INR 999{" "}
                <span className="text-[16px]">for senior citizens and </span>
                INR 1499 <span className="text-[16px]">for adults</span>
              </Typography>
    
              <Typography className="text-[4vw] md:text-[1rem]">
                (Child tickets apply to children between 80cm - 140cm in height)
              </Typography>
            </div>
          </div>
        </div>
      );
}

export default AboutThird

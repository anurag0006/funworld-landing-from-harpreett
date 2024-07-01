"use client";
import React from "react";
import { useInView } from "@react-spring/web";
function AmusementParkThird() {
    const [ref, props] = useInView(() => ({
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 },
        config: { duration: 1000 },
        reset: false,
        delay: 1000,
      }));
      const [carouselRef, carouselProps] = useInView(() => ({
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 },
        config: { duration: 1000 },
        reset: false,
        delay: 1000,
      }));
      const [gridRef, gridProps] = useInView(() => ({
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 },
        config: { duration: 1000 },
        reset: false,
        delay: 1000,
      }));
    
      return (
        <div className="flex items-center justify-center">
          <div className="lg:w-[85%] w-[95%]  flex items-center justify-center flex-wrap">
            <div className="w-full text-center flex flex-col justify-center font-dm-sans text-xl font-normal">
              <div className="  text-center mx-auto font-bold text-6xl max-md:text-lg max-md:text-center mt-20">
                Rides for Everyone
              </div>
              <div className=" text-center px-[10vw] my-5  max-md:text-sm">
                From Kids to Adults, Rides for everyone. Check out below some more
                exciting rides.
              </div>
            </div>
    
            <div
              className="w-full mt-5 grid grid-flow-row grid-cols-3 lg:gap-12 max-md:grid-cols-2 mx-6"
              ref={gridRef}
              style={gridProps}
            >
              <div className="w-full flex flex-col imgcontainer ">
                <img
                  alt="/"
                  src={
                    "https://funworldblr.s3.amazonaws.com/public/Amusement/skydrop.webp"
                  }
                  className="md:image max-md:w-[90%] max-md:h-[120px]"
                />
                <div className="w-full font-spartan py-4 text-left text-4xl font-bold max-xl:text-2xl max-md:text-lg max-md:text-center">
                  <div className=" trans ">
                    <span className="mr-0 ml-3 opacity-0 whitespace-nowrap spannum"></span>{" "}
                    <span>Sky Drop</span>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col imgcontainer ">
                <img
                  alt="/"
                  src={
                    "https://funworldblr.s3.amazonaws.com/public/Amusement/tsunami.webp"
                  }
                  className="md:image max-md:w-[90%] max-md:h-[120px]"
                />
                <div className="w-full font-spartan py-4 text-left text-4xl font-bold max-xl:text-2xl max-md:text-lg max-md:text-center">
                  <div className=" trans   ">
                    <span className="mr-0 opacity-0 whitespace-nowrap spannum "></span>{" "}
                    <span>Tsunami</span>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col imgcontainer ">
                <img
                  alt="/"
                  src={
                    "https://funworldblr.s3.amazonaws.com/public/Amusement/pendulum.jpg"
                  }
                  className="md:image max-md:w-[90%] max-md:h-[120px]"
                />
                <div className="w-full font-spartan py-4 text-left text-4xl font-bold max-xl:text-2xl max-md:text-lg max-md:text-center">
                  <div className=" trans   ">
                    <span className="mr-0 opacity-0 whitespace-nowrap spannum "></span>{" "}
                    <span>Pendulum</span>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col imgcontainer">
                <img
                  alt="/"
                  src={
                    "https://funworldblr.s3.amazonaws.com/public/Amusement/fireball.jpg"
                  }
                  className="md:image max-md:w-[90%] max-md:h-[120px]"
                />
                <div className="w-full font-spartan py-4 text-left text-4xl font-bold max-xl:text-2xl max-md:text-lg max-md:text-center">
                  <div className=" trans   ">
                    <span className="mr-0 ml-3 opacity-0 whitespace-nowrap spannum "></span>{" "}
                    <span>Crazy Fireball</span>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col imgcontainer">
                <img
                  alt="/"
                  src={
                    "https://funworldblr.s3.amazonaws.com/public/Amusement/flying.webp"
                  }
                  className="md:image max-md:w-[90%] max-md:h-[120px]"
                />
                <div className="w-full font-spartan py-4 text-left text-4xl font-bold max-xl:text-2xl max-md:text-lg max-md:text-center">
                  <div className=" trans   ">
                    <span className="mr-0 opacity-0 whitespace-nowrap spannum "></span>{" "}
                    <span>Flying chairs</span>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col imgcontainer ">
                <img
                  alt="/"
                  src={
                    "https://funworldblr.s3.amazonaws.com/public/Amusement/roller.webp"
                  }
                  className="md:image max-md:w-[90%] max-md:h-[120px]"
                />
                <div className="w-full font-spartan py-4 text-left text-4xl font-bold max-md:text-lg max-md:text-center max-xl:text-2xl">
                  <div className=" trans   ">
                    <span className="mr-0 opacity-0 whitespace-nowrap spannum "></span>{" "}
                    <span>Roller coaster</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

   
export default AmusementParkThird

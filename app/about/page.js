import React from "react";
import AboutStart from "@/components/about/AboutStart";
import AboutSecond from "@/components/about/AboutSecond";
import AboutThird from "@/components/about/AboutThird";
import AboutFourth from "@/components/about/AboutFourth";
import AboutFifth from "@/components/about/AboutFifth";
import AboutLast from "@/components/about/AboutLast";
import Image from "next/image";


const About = () => {
  return (
    <>
      <div className="min-h-screen w-screen flex flex-col overflow-x-hidden">
        <section className="w-full min-h-[400px] relative max-lg:min-h-[400px] max-xl:min-h-[400px] xl:h-fit max-md:min-h-[300px] max-sm:min-h-[250px]">
          <Image
            className="bg-cover bg-center bg-no-repeat absolute top-0 -z-10  max-sm:h-full object-contain  max-xs:object-cover  "
            src={"https://funworldblr.s3.amazonaws.com/public/Reusable/bg2.jpg"}
            alt="bacgkround img"
            width={2042}
            height={1029}
          />
          <div className="w-full bottom-[30%] sm:bottom-[50%] lg:bottom-[15%] absolute">
            <div className=" h-[100%] w-full flex flex-col text-center justify-center items-center ">
              <h1 className="text-center px-[10vw] lg:leading-[60px] md:w-full font-extrabold lg:text-[65px] md:text-[50px] md:leading-[46px] text-white sm:text-3xl">
                Welcome to Fun World Amusement Park – Where Fun Knows No Bounds!
              </h1>
              <p className="text-center w-[60%] lg:px-[20vw] md:px-[10vw] md:w-full md:mt-8 mt-3 lg:text-[20px] lg:leading-[30px] text-white text-xs">
                Nestled in the heart of vibrant Bengaluru, Fun World Amusement
                Park stands tall as one of Karnataka&apos; most cherished
                treasures.
              </p>
            </div>
          </div>

          <div className="w-full h-full flex">
            {/* <div className="absolute bottom-[200px] right-[425px] max-xl:bottom-[10vw] max-xl:right-[30%] max-lg:bottom-[16vw] max-md:hidden">
                            <Image alt="/" src="https://funworldblr.s3.amazonaws.com/public/Rides/Ellipse1.svg" width={18} height={18} />
                        </div> */}
            <div>
              <Image
                alt="/"
                src="https://funworldblr.s3.amazonaws.com/public/Rides/Ellipse2.webp"
                width={28}
                height={28}
              />
            </div>
            {/* <div className="absolute bottom-[150px] right-[10rem] max-md:hidden ">
                            <Image alt="/" src="https://funworldblr.s3.amazonaws.com/public/Rides/stars.svg" width={68} height={68} />
                        </div> */}
            <div className="absolute bottom-[200px] left-[89px] max-xl:bottom-[10vw] max-lg:hidden">
              <Image
                alt="/"
                src="https://funworldblr.s3.amazonaws.com/public/Rides/white-shape-banner1.webp"
                width={141}
                height={168}
              />
            </div>
            <div className="absolute bottom-[165px] right-8 max-xl:bottom-[8vw] max-lg:hidden">
              <Image
                alt="/"
                src="https://funworldblr.s3.amazonaws.com/public/Rides/white-shape-banner2.webp"
                width={141}
                height={148}
              />
            </div>
          </div>
        </section>

        <div className="lg:px-[15vw] md:px-[10vw] lg:mt-32 md:mt-16 mt-6 px-[7vw] relative flex flex-col lg:gap-12 gap-6 items-center">
          <p className="lg:text-[22px] text-center md:text-[22px] text-sm md:leading-[29px] text-[#5B5B5B]">
            Since its establishment in 1990, this wide 24-acre wonderland has
            been dedicated to crafting unforgettable moments of joy, laughter,
            and adventure for families and friends alike.
          </p>
          <p className="text-center text-[#5B5B5B] md:text-[22px] text-sm md:leading-[29px]">
            Our central location, just a stone&apos;s throw away from iconic
            landmarks like Snow City, Bangalore Palace, and Cubbon Park, makes
            us the ultimate destination for thrill-seekers and those seeking
            respite from the daily grind.
          </p>
        </div>

        <div className="lg:mt-20 mt-12 flex w-full lg:h-[60vh]">
          <AboutStart />
        </div>

        <div className="mt-[4rem] md:mt-[40rem] lg:mt-[50rem] xl:mt-[40rem] 2xl:mt-[60rem] h-[65vh] md:h-[80vh] flex w-full lg:h-[100vh]">
          <AboutSecond />
        </div>

        <div className="flex lg:flex-row flex-col h-auto">
          <AboutThird />
        </div>

        <div className="flex lg:flex-row flex-col h-auto">
          <AboutFourth />
        </div>

        <div className="flex lg:flex-row flex-col h-[95vh] max-lg:h-[80vh]">
          <AboutFifth />
        </div>

        <div className="flex lg:flex-row flex-col max-lg:mt-[1rem] xl:h-[100vh]">
          <AboutLast />
        </div>
      </div>
    </>
  );
};

export default About;

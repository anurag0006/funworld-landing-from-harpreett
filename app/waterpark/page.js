import Image from "next/image";
import React from "react";
import WaterFirst from "@/components/waterPark/WaterFirst";
import WaterSecond from "@/components/waterPark/WaterSecond";
import WaterFourth from "@/components/waterPark/WaterFourth";
import WaterFifth from "@/components/waterPark/WaterFifth";
import CustomerReviewPage from "@/components/waterPark/CustomerReviewPage";
import Head from "next/head";
export const metadata = {
  title: "Water Park",
  description:
    "Funworld Bangalore Water Park: Make a splash this summer! Dive into refreshing fun with our exciting water rides and attractions.",
};

const WaterPark = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div className="w-screen flex flex-col overflow-x-hidden">
        <section className="w-full min-h-[400px] relative max-lg:min-h-[400px] max-xl:min-h-[400px] xl:h-fit max-md:min-h-[300px] max-sm:min-h-[250px]">
          <Image
            className="bg-cover bg-center bg-no-repeat absolute top-0 -z-10  max-sm:h-full object-contain  max-xs:object-cover  "
            src={"https://funworldblr.s3.amazonaws.com/public/Reusable/bg2.jpg"}
            alt="bacgkround img"
            width={2042}
            height={1029}
          />
          <div className="w-full bottom-[30%] sm:bottom-[50%] lg:bottom-[30%] absolute">
            <div className=" h-[100%] w-full flex flex-col text-center justify-center items-center ">
              <h1 className=" text-center px-[10vw] lg:leading-[60px] md:w-full font-extrabold lg:text-[65px] md:text-[50px] md:leading-[46px] text-white sm:text-3xl">
                Welcome to Water World! An Aquatic Realm of Joy
              </h1>
              <p className="text-center w-[60%] lg:px-[20vw] md:px-[10vw] md:w-full md:mt-8 mt-3 lg:text-[20px] lg:leading-[30px] text-white text-xs">
                A heavenly place to immerse yourself in an oasis of joy.
              </p>
            </div>
          </div>

          <div className="w-full h-full flex">
            <div className="absolute bottom-[200px] right-[425px] max-xl:bottom-[10vw] max-xl:right-[30%] max-lg:bottom-[16vw] max-md:hidden">
              <Image
                alt="/"
                src="https://funworldblr.s3.amazonaws.com/public/Rides/Ellipse1.webp"
                width={18}
                height={18}
              />
            </div>
            <div>
              <Image
                alt="/"
                src="https://funworldblr.s3.amazonaws.com/public/Rides/Ellipse2.webp"
                width={28}
                height={28}
              />
            </div>
            <div className="absolute bottom-[150px] right-[10rem] max-md:hidden ">
              <Image
                alt="/"
                src="https://funworldblr.s3.amazonaws.com/public/Rides/stars.webp"
                width={68}
                height={68}
              />
            </div>
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

        <section className="w-full py-[3vh] lg:mt-16 md:mt-12 sm:mt-0 ">
          <div className="w-full md:h-full">
            <WaterFirst />
          </div>
        </section>

        <section className="w-full h-auto mt-12 sm:h-auto">
          <div className="w-full h-full">
            <WaterSecond />
          </div>
        </section>

        <section className="w-full lg:h-auto sm:h-auto py-[3vh] mt-12 max-lg:py-4">
          <div className="w-full h-full max-md:justify-center">
            <WaterFourth />
          </div>
        </section>

        <section className="w-full h-auto max-lg:mt-[4rem]  max-md:h-auto">
          <div className="w-full h-full max-md:justify-center">
            <WaterFifth />
          </div>
        </section>

        <section className="w-full min-h-[65vh] pb-12 max-md:h-auto flex overflow-hidden">
          <div className="w-full h-full flex max-md:justify-center">
            <CustomerReviewPage />
          </div>
        </section>
      </div>
    </>
  );
};

export default WaterPark;

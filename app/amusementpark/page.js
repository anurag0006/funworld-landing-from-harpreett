import Image from "next/image";
import React from "react";
import Head from "next/head";
import AmusementParkStart from "@/components/amusementpark/AmusementParkStart";
import AmusementParkSecond from "@/components/amusementpark/AmusementParkSecond";
import AmusementParkThird from "@/components/amusementpark/AmusementParkThird";
import AmusementParkFourth from "@/components/amusementpark/AmusementParkFourth";
export const metadata = {
  title: "Amusement Park",
  description:
    "Funworld Bangalore: Amusement Park: Experience family fun like never before! Enjoy thrilling rides, games, and endless entertainment.",
};
const Index = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div className="w-screen flex flex-col gap-2 overflow-x-hidden">
        <section className="w-full min-h-[400px] relative max-lg:min-h-[400px] max-xl:min-h-[400px] xl:h-fit max-md:min-h-[300px] max-sm:min-h-[250px]">
          <Image
            className="bg-cover bg-center bg-no-repeat absolute top-0 -z-10 max-sm:h-full object-contain max-xs:object-cover"
            src={"https://funworldblr.s3.amazonaws.com/public/Reusable/bg2.jpg"}
            alt="background img"
            width={2042}
            height={1029}
          />
          <div className="w-full bottom-[30%] sm:bottom-[50%] lg:bottom-[30%] absolute">
            <div className="h-[100%] w-full flex flex-col text-center justify-center items-center">
              <h1 className="text-center px-[10vw] xl:leading-[60px] md:w-full font-extrabold lg:leading-[42px] lg:text-[45px] xl:text-[65px] md:text-[50px] md:leading-[46px] text-white sm:text-3xl">
                Your Ultimate Destination for One-Stop Entertainment Delights
              </h1>
              <p className="text-center w-[60%] lg:px-[20vw] md:px-[10vw] md:w-full md:mt-8 mt-3 lg:text-[20px] lg:leading-[30px] text-white text-xs">
                Best Amusement Park in Bangalore, Where All the Fun and
                Happiness Resides
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
            <div className="absolute bottom-[150px] right-[10rem] max-md:hidden">
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
        <section className="w-full h-auto lg:pt-32 lg:pb-12 pt-16 pb-0 lg:mt-0">
          <div className="w-full h-full sm:h-[auto] xl:h-full flex max-md:flex-col-reverse overflow-hidden">
            <AmusementParkStart />
          </div>
        </section>
        <section className="w-full h-auto max-md:h-auto py-[3vh]">
          <div className="w-full h-full max-md:h-auto flex max-md:flex-col-reverse max-md:justify-center overflow-hidden">
            <AmusementParkSecond />
          </div>
        </section>
        <section className="w-full xl:h-[120vh] max-lg:h-[85vh] max-sm:mt-10 md:py-[3vh]">
          <div className="w-full h-full flex max-md:flex-col-reverse max-md:justify-center max-md:overflow-hidden">
            <AmusementParkThird />
          </div>
        </section>
        <section className="w-full h-auto md:py-[5vh]">
          <div className="w-full lg:h-full max-md:justify-center overflow-y-hidden">
            <AmusementParkFourth />
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;

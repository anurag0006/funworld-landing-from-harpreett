import Image from "next/image";
import React from "react";
import RidesArray from "@/components/ridesArray";
import Animation from "@/components/familyrides/Animation";
import Head from "next/head";
export const metadata = {
  title: "High Thrill Rides",
  description:
    "Funworld Bangalore: High Thrill Rides: Get your adrenaline pumping! Discover our most thrilling and exciting rides.",
};
const Index = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
    <div className="w-screen flex flex-col  ">
      <section className="w-full min-h-[629px] relative max-lg:min-h-[400px] max-xl:min-h-[450px] xl:h-fit max-md:min-h-[300px] max-sm:min-h-[250px]">
        <Image
          className="bg-cover bg-center bg-no-repeat absolute top-0 -z-10  max-sm:h-full object-contain  max-xs:object-cover "
          src={
            "https://funworldblr.s3.amazonaws.com/public/Rides&Attractions/hero_background.webp"
          }
          alt="bacgkround img"
          width={2042}
          height={1029}
        />
        <div className="w-full bottom-[50%] absolute max-lg:bottom-[40%]">
          <div className=" h-full w-full flex text-center justify-center items-center ">
            <div className=" text-center font-extrabold text-[70px] text-white max-lg:text-6xl max-md:text-5xl  max-xs:text-4xl">
              Adrenaline Rides
            </div>
          </div>
        </div>
        <div className="w-full h-full absolute flex ">
          <div className="absolute bottom-[200px] right-[425px] max-xl:bottom-[10vw] max-xl:right-[30%] max-lg:bottom-[16vw] max-md:hidden">
            <Image
              src="https://funworldblr.s3.amazonaws.com/public/Rides/Ellipse1.webp"
              width={18}
              height={18}
            />
          </div>
          <div>
            <Image
              src="https://funworldblr.s3.amazonaws.com/public/Rides/Ellipse2.webp"
              width={28}
              height={28}
            />
          </div>
          <div className="absolute bottom-[150px] right-[10rem] max-md:hidden ">
            <Image
              src="https://funworldblr.s3.amazonaws.com/public/Rides/stars.webp"
              width={68}
              height={68}
            />
          </div>
          <div className="absolute bottom-[200px] left-[89px] max-xl:bottom-[10vw] max-lg:hidden">
            <Image
              src="https://funworldblr.s3.amazonaws.com/public/Rides/white-shape-banner1.webp"
              width={141}
              height={168}
            />
          </div>
          <div className="absolute bottom-[165px] right-8 max-xl:bottom-[8vw] max-lg:hidden">
            <Image
              src="https://funworldblr.s3.amazonaws.com/public/Rides/white-shape-banner2.webp"
              width={141}
              height={148}
            />
          </div>
        </div>
        {/* </div> */}
      </section>
      <section className="w-full">
        <div className="w-full flex text-center items-center flex-col font-dm-sans px-[10%]">
          <h1 className="font-medium text-6xl text-center max-xs:text-4xl max-xs:font-bold max-lg:text-5xl max-md:text-5xl ">
            Our Rides at the Park
          </h1>
          <div className="text-[#5B5B5B] font-normal text-2xl py-10 max-xs:text-lg">
            FunWorld Park is an amusement park founded in 1990 that has been
            expanding ever since. The park includes a full amusement ride park
            featuring 100+ rides suitable for all ages.
          </div>
          <Animation ridesArray={RidesArray}></Animation>
        </div>
      </section>
    </div>
    </>
  );
};

export default Index;

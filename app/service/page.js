import React from "react";
import Image from "next/image";
import ServiceSecond from "@/components/service/ServiceSecond";
import ServiceThird from "@/components/service/ServiceThird";
import ServiceLast from "@/components/service/ServiceLast";
import Head from "next/head";
export const metadata = {
  title: "Guest Services",
  description:
    "Funworld Bangalore: Guest Services: Here to make your visit enjoyable. Discover all the services we offer to enhance your experience.",
};
const Service = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div className="w-screen overflow-hidden flex flex-col ">
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
                Your Partner In Park Excellence
              </h1>
              <p className="text-center w-[60%] lg:px-[20vw] md:px-[10vw] md:w-full md:mt-8 mt-3 lg:text-[20px] lg:leading-[30px] text-white text-xs">
                We specialize in manufacturing top-tier park rides and offer a
                comprehensive spectrum of theme park maintenance and repair
                solutions.
              </p>
            </div>
          </div>

          <div className="w-full h-full flex">
            <div>
              <Image
                alt="/"
                src="https://funworldblr.s3.amazonaws.com/public/Rides/Ellipse2.webp"
                width={28}
                height={28}
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

        <section className="w-full flex flex-col gap-3 md:gap-5">
          <div className="mt-12 lg:mt-32 font-dm-sans lg:font-[500] font-[600] text-center text-[#0B1A48] text-[28px] md:text-2xl mx-2 lg:text-4xl xl:text-6xl">
            Theme Park Ride Manufacturing
          </div>
          <div className="text-[#5B5B5B] text-base mx-3 text-center md:text-lg md:mx-10 lg:mx-32 xl:mx-[25vw]">
            Fun World is a renowned amusement park manufacturer in India. Using
            modern <b>tech + design</b>, we combine functionality and aesthetics
            to offer B2B amusement park services according to your needs.
          </div>
        </section>

        <section className="lg:min-h-[50vh] min-h-[40vh] lg:mt-12 mt-6 w-full flex items-center justify-center lg:gap-0 gap-8 flex-col lg:mb-[130px]">
          <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-0 gap-6">
            <div className='lg:flex-1 lg:w-[40vw] lg:h-[70vh] h-[400px] w-[80vw] bg-cover bg-center bg-no-repeat lg:px-16  bg-[url("https://funworldblr.s3.amazonaws.com/public/Service/ridetube.jpg")]'></div>
            <div className='flex-1 flex justify-center flex-col gap-4 px-16 lg:w-[40vw] w-full h-[70vh] bg-green-500 bg-[url("https://funworldblr.s3.amazonaws.com/public/Service/gradient.jpg")]'>
              <h3 className="lg:text-[42px] lg:leading-[46px] md:text-[32px] md:leading-[35px] text-[25px] leading-[27px] text-[#252525] font-[550] lg:text-start text-center">
                Amusement Park Ride Manufacturing
              </h3>
              <p className="text-[#5B5B5B] lg:text-start text-center">
                Experience the thrill and wonder of amusement parks with our
                adrenaline-packed rides. Immerse your visitors in excitement
                like never before.
              </p>
            </div>
          </div>

          <div className="flex lg:flex-row-reverse flex-col items-center justify-center lg:gap-0 gap-6">
            <div className='lg:flex-1 lg:w-[40vw] lg:h-[70vh] h-[400px] w-[80vw] bg-cover bg-center bg-no-repeat lg:px-16 bg-[url("https://funworldblr.s3.amazonaws.com/public/About/fun2.jpeg")]'></div>

            <div className='flex-1 flex justify-center flex-col gap-4 px-16 lg:w-[40vw] w-full h-[70vh] bg-green-500 bg-[url("https://funworldblr.s3.amazonaws.com/public/Service/gradient.jpg")]'>
              <h3 className="lg:text-[42px] lg:leading-[46px] md:text-[32px] md:leading-[35px] text-[25px] leading-[27px] text-[#252525] font-[550] lg:text-start text-center">
                Water Park Ride Manufacturing
              </h3>
              <p className="text-[#5B5B5B] lg:text-start text-center">
                Provide refreshing adventures for all ages with our innovative
                water park rides. Let your visitors engage in aquatic fun and
                unforgettable experiences.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full md:h-auto flex flex-col items-center">
          <ServiceSecond />
        </section>

        <section className="w-full h-auto flex flex-col items-center xl:mt-[350px]">
          <ServiceThird />
        </section>

        <section className="w-full h-auto flex flex-col items-center mt-[100px]">
          <ServiceLast />
        </section>
      </div>
    </>
  );
};

export default Service;

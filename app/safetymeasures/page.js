import React from "react";
import Image from "next/image";
import Safety from "@/components/safetyMeasure/Safety";
import Head from "next/head";
export const metadata = {
  title: "Safety Measures",
  description:
    "Funworld Bangalore: Safety Measures: Your safety is our priority. Learn about our comprehensive safety protocols to ensure a fun, secure visit.",
};

const SafetyMeasures = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div className="w-screen flex flex-col">
        <section className="w-full min-h-[629px] relative max-lg:min-h-[400px] max-xl:min-h-[450px] xl:h-fit max-md:min-h-[300px] max-sm:min-h-[250px]">
          <Image
            className="bg-cover bg-center bg-no-repeat absolute top-0 -z-10 w-full max-sm:h-full object-contain  max-xs:object-cover"
            src={
              "https://funworldblr.s3.amazonaws.com/public/Reusable/bg1.webp"
            }
            alt="bacgkround img"
            width={2042}
            height={1029}
          />
          <div className="w-full bottom-[50%] absolute max-lg:bottom-[40%]">
            <div className=" h-full w-full flex text-center justify-center items-center ">
              <div className=" text-center font-extrabold text-[70px] text-white max-lg:text-6xl max-md:text-5xl  max-xs:text-4xl ">
                Covid 19
              </div>
            </div>
          </div>
        </section>
        <section className="w-full">
          <div className="px-[13vw] max-sm:pt-2 max-md:pt-8 lg:pt-12 xl:pt-[5vw] flex flex-col gap-8 items-center text-justify max-md:px-[7vw] max-sm:px-[3vw]">
            <h1 className="text-[54px] font-[600] max-md:text-5xl max-sm:text-4xl">
              Safety Measures
            </h1>
            <p className="px-[10vw] text-center">
              We have introduced a number of hygiene and safety measures, we
              request everyone to follow the same for a safe trip.
            </p>

            <Safety></Safety>
          </div>
        </section>
      </div>
    </>
  );
};

export default SafetyMeasures;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Accordion from "@/components/policy-prohibitions/Accordion";
import Head from "next/head";
export const metadata = {
  title: "Park Prohibitions",
  description:
    "Funworld Bangalore: Park Prohibitions: Ensuring a safe & enjoyable visit. Learn what items and behaviors are not allowed in the park.",
};
const ParkProhibitions = () => {
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
                Park Prohibitions
              </div>
            </div>
          </div>
        </section>
        <section className="w-full">
          <div className="w-[60vw] mx-auto text-center text-lg">
            <h1>
              For your safety and enjoyment at our Park, please carefully read
              all of the text below. Failure to follow any of the regulations,
              conditions and instructions set forth below may result in serious
              injury to yourself or other individuals. Individuals not following
              Park rules and safety instructions, will be subject to immediate
              ejection from the Park without refund.
            </h1>
          </div>

          <div className="accordion">
            <Accordion></Accordion>
          </div>

          <div className="w-[60vw] mx-auto mt-6">
            <p className="font-bold text-3xl">Other Important Links</p>
            <Link href={"/guidelines/codeofconduct"}>
              <li className="mt-4">Code of Conduct</li>
            </Link>
            <Link href={"/guidelines/codeofsafety"}>
              <li>Code of Safety</li>
            </Link>
            <Link href={"/guidelines/rules"}>
              <li>Rules & Regulations</li>
            </Link>
            {/* <Link href={'/guidelines/codeofconduct'}><li>Cancellations & Reschedule</li></Link> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default ParkProhibitions;

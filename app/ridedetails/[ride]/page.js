"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import RidesArray from "@/components/ridesArray";

import {
  BsFillExclamationTriangleFill,
  BsFillArrowRightCircleFill,
  BsSpeedometer2,
} from "react-icons/bs";

import { VscSymbolRuler } from "react-icons/vsc";

import { MdOutlineLocationOn } from "react-icons/md";

const Disclaimer = (props) => {
  const rideId = props.params.ride;
  const [ride, setRide] = useState({});
  console.log(RidesArray);
  const rideObj = RidesArray.find((ride) => ride.id === rideId);
  if (!ride) {
    setRide(rideObj);
  }

  return (
    <div className="w-full flex flex-col ">
      <section className="w-full min-h-[629px] relative max-lg:min-h-[400px] max-xl:min-h-[450px] xl:h-fit max-md:min-h-[300px] max-sm:min-h-[250px]">
        <Image
          className="bg-cover bg-center bg-no-repeat absolute top-0 -z-10  max-sm:h-full object-contain  max-xs:object-cover "
          src={
            "https://funworldblr.s3.amazonaws.com/public/Contact/hero_background.webp"
          }
          alt="bacgkround img"
          width={2042}
          height={1029}
        />
        <div className="w-full bottom-[50%] absolute max-lg:bottom-[40%]">
          <div className=" h-full w-full flex text-center justify-center items-center ">
            <div className=" text-center font-extrabold text-[70px] text-white max-lg:text-6xl max-md:text-5xl  max-xs:text-4xl ">
              Ride Details
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="px-[13vw] flex flex-col gap-8 text-[#5B5B5B] max-lg:px-[7vw] ">
          {ride && (
            <div className="flex max-md:flex-col">
              <div className="w-[50%] max-md:w-full">
                <Image
                  src={`https://funworldblr.s3.amazonaws.com/public/Amusement/rides2.jpeg`}
                  width={672}
                  height={200}
                  alt="ride image"
                  className="w-full"
                />
                <p className="mt-10 text-lg">
                  {ride.img}
                  Funworld introduces India’s first-ever reverse looping Roller
                  Coaster - RECOIL, which will give you a whole new experience
                  of thrill. This high tech roller coaster is imported from the
                  Netherlands and has two track ramps that go up to 40 meters.
                  The train climbs one ramp and accelerates to 80 kmph in 1
                  second, before encountering a ‘cobra roll’ and a ‘loop’ in the
                  tracks, climbing the second ramp, again to a 40 m height, and
                  then doing it all over all again, only this time, it is
                  backwards!
                </p>
              </div>

              <div className="ml-10 w-[50%] max-md:w-full max-md:ml-0 max-md:my-8 ">
                <div className="sidebox-css w-full h-[480px] border rounded-xl text-white pl-8 flex flex-col justify-evenly">
                  <div className="text-[28px]">Ride Info</div>
                  <div className="flex flex-col justify-between leading-8">
                    <div className="flex">
                      <BsSpeedometer2 className="mt-2 text-2xl" />
                      <div className="ml-4">
                        <h4 className="text-[18px]">Mild</h4>
                        <p className="text-[16px]">Thrill Level</p>
                      </div>
                    </div>

                    <div className="h-[1px] w-[300px] bg-white my-2" />

                    <div className="flex flex-col justify-between leading-8">
                      <div className="flex">
                        <VscSymbolRuler className="mt-2 text-2xl" />
                        <div className="ml-4">
                          <h4 className="text-[18px]">
                            None with adult, 38&#8221; to ride alone
                          </h4>
                          <p className="text-[16px]">Thrill Level</p>
                        </div>
                      </div>
                    </div>

                    <div className="h-[1px] w-[300px] bg-white my-2" />

                    <div className="flex flex-col justify-between leading-8">
                      <div className="flex">
                        <MdOutlineLocationOn className="mt-2 text-2xl" />
                        <div className="ml-4">
                          <h4 className="text-[18px]">Seaside Junction</h4>
                          <p className="text-[16px]">Location in Park</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="border border-white rounded-full w-[200px] p-3 ml-full flex justify-evenly">
                    <p>ADA Guildelines</p>
                    <BsFillArrowRightCircleFill className="mt-[2px] text-xl" />
                  </button>
                </div>

                <div className="sidebox-css w-full h-[280px] rounded-xl text-center text-white mt-10 flex flex-col justify-evenly">
                  <div className="text-[28px] flex ml-4">
                    <BsFillExclamationTriangleFill className="mt-[5px]" />
                    <h1 className="ml-3">Ride Not For</h1>
                  </div>
                  <p className="text-[18px] text-left ml-4 leading-10">
                    Pregnant Women, heart patients, persons with high blood
                    pressure and those prone to epilepsy are advised to avoid
                    fast/adventurous rides.
                  </p>
                </div>
              </div>
            </div>
          )}
          {/* <div className="flex">
            <Image
              src={
                "https://funworldblr.s3.amazonaws.com/public/ride_page/image-copyright-2 1.jpg"
              }
              width={230}
              height={203}
              alt="/"
            />
            <Image
              src={
                "https://funworldblr.s3.amazonaws.com/public/ride_page/Bengaluru_-_Banded_Kraits 1.jpg"
              }
              width={230}
              height={203}
              alt="/"
            />
            <Image
              src={
                "https://funworldblr.s3.amazonaws.com/public/ride_page/image-copyright-2-1536x1024 4.jpg"
              }
              width={230}
              height={203}
              alt="/"
            />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Disclaimer;

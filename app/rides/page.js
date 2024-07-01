import Left from "@/components/Amusement/Left";
import Right from "@/components/Amusement/Right";
import Right2 from "@/components/Amusement/Right2";
import Left2 from "@/components/Amusement/Left2";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <div className="w-screen flex flex-col">
      <section className=' w-full min-h-[629px] relative  '>
        <Image className='bg-cover bg-center bg-no-repeat absolute top-0' src={"https://funworldblr.s3.amazonaws.com/public/Rides/hero_background.webp"} alt="bacgkround img" width={1700} height={629} />
        <div className="w-full top-[30%] absolute">
          <div className=" h-full w-full flex text-center justify-center items-center ">
            <div className=" w-[654px] text-center font-extrabold text-[70px] text-white ">
              Rides at the Park
            </div>
          </div>
        </div>
        <div className="w-full h-full absolute flex ">
          <div className="absolute top-[449px] right-[425px] ">
            <Image src="https://funworldblr.s3.amazonaws.com/public/Rides/Ellipse1.webp" width={18} height={18} />
          </div>
          <div>
            <Image src="https://funworldblr.s3.amazonaws.com/public/Rides/Ellipse2.webp" width={28} height={28} />
          </div>
          <div className="absolute top-[419px] right-[10rem] ">
            <Image src="https://funworldblr.s3.amazonaws.com/public/Rides/stars.webp" width={68} height={68} />
          </div>
          <div className="absolute top-[256px] left-[89px]">
            <Image
              src="https://funworldblr.s3.amazonaws.com/public/Rides/white-shape-banner1.webp"
              width={141}
              height={168}

            />
          </div>
          <div className="absolute top-[323px] right-8">
            <Image
              src="https://funworldblr.s3.amazonaws.com/public/Rides/white-shape-banner2.webp"
              width={141}
              height={148}
            />
          </div>
        </div>
      </section>
      <section className="w-full h-[50vh] flex font-normal text-2xl py-[5rem] justify-center items-center">
        <div className=" w-full h-full absolute">
          <div className=" absolute bottom-[50%] left-10">
            <Image src="https://funworldblr.s3.amazonaws.com/public/Rides/petal.webp" height={967} width={171} />
          </div>
        </div>
        <div className="text-center w-[60%] font-sans">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
        </div>
      </section>

      <section className="w-full ">
        <Left heading={"High Thrill Rides"} image={"https://funworldblr.s3.amazonaws.com/public/Rides/Rides1.webp"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "} url="/highthrillrides" />
        <Right heading={"Land Rides"} image={"https://funworldblr.s3.amazonaws.com/public/Rides/Ride2.webp"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "} url="/landrides" />
        <Left2 heading={"Water Rides"} image={"https://funworldblr.s3.amazonaws.com/public/Rides/Ride3.webp"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} url="/waterrides" />
        <Right2 heading={"Kids' Rides"} image={"https://funworldblr.s3.amazonaws.com/public/Rides/Ride4.webp"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "} url="/kidsrides" />
      </section>
    </div>
  );
};

export default Index;
